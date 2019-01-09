import { Injectable, Inject } from "@angular/core";
import {
    Router,
    NavigationEnd,
    RouterEvent,
    NavigationStart
} from "@angular/router";

import { TranslateServiceConfig } from "./translate.module";
import {
    TranslateConfig,
    AppSupportedLanguage,
    TranslateDictionary
} from "./translate.models";
import { RouterParamsService } from "../shared";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { combineLatest } from "rxjs/observable/combineLatest";
import {
    map,
    distinctUntilChanged,
    filter,
    skip,
    share,
    take
} from "rxjs/operators";
import { Subject } from "rxjs/Subject";

@Injectable()
export class TranslateService {
    navigationEnd$ = new Subject<string>();

    private _current$ = new BehaviorSubject<string>("");
    currentId$ = this._current$.asObservable().distinctUntilChanged();

    private _languages$ = new BehaviorSubject<AppSupportedLanguage[]>([]);
    languages$ = this._languages$.asObservable().distinctUntilChanged();

    dictionaries: { [languageId: string]: TranslateDictionary } = {};

    private DEFAULT_LANGUAGE: string;
    private enableTracing = false;

    private location$ = this.currentId$.pipe(
        skip(1),
        filter(Boolean),
        distinctUntilChanged()
    );

    get languages(): AppSupportedLanguage[] {
        return this._languages$.getValue().slice();
    }

    get currentLanguage(): AppSupportedLanguage {
        const current = this._current$.getValue();
        return this.languages.find(
            language => language.id === current
        ) as AppSupportedLanguage;
    }

    get isOnDefaultLanguage(): boolean {
        return this.DEFAULT_LANGUAGE === this._current$.getValue();
    }

    constructor(
        @Inject("TranslateServiceConfig") private config: TranslateConfig,
        private router: Router
    ) {
        const initialLang = this.config.languages.reduce(
            (agg, language) => (language.default ? language : agg)
        );
        this.DEFAULT_LANGUAGE = initialLang.id;
        this.dictionaries = config.dictionaries;
        this.enableTracing = Boolean(config.enableTracing);
        this._languages$.next(this.config.languages);

        this.router.events
            .pipe(filter(event => event instanceof NavigationStart), take(1))
            .subscribe((event: any) => {
                debugger;
                this.initialize(event.url, config);
            });
    }

    isCurrentLanguage(languageId: string): boolean {
        return this._current$.getValue() === languageId;
    }

    translate(term: string): string {
        const current = this._current$.getValue();
        const translation = this.dictionaries[current][term];
        const defaultTranslation = this.dictionaries[this.DEFAULT_LANGUAGE][
            term
        ];

        return translation || defaultTranslation || term;
    }

    pluckTranslation(object: Partial<{ [languageId: string]: string }>) {
        const current = this._current$.getValue();
        return object[current] || object[this.DEFAULT_LANGUAGE] || "";
    }

    updateLanguage(languageId: string | null): void {
        const previousLanguage = this._current$.getValue();
        languageId && this._current$.next(languageId);

        if (this.enableTracing) {
            console.group("Translate Event: Update Language");
            console.log("language received:", languageId);
            console.log("previous language:", previousLanguage);
            console.log("updated language:", this._current$.getValue());
            console.log(
                "is correctly updated:",
                this._current$.getValue() === languageId
            );
            console.groupEnd();
        }
    }

    private initialize(url: string, config: TranslateConfig) {
        const urlTree = this.router.parseUrl(url);
        const langQueryParam = urlTree.queryParamMap.get("lang");
        debugger;

        this._current$.next(langQueryParam || this.DEFAULT_LANGUAGE);
        this.location$.subscribe(languageId => this.updateLocation(true));
        this.listenRouterEvents();
    }

    private updateLocation(force = false): void {
        debugger;
        const url = this.router.url;
        const params = this.getRerouteParams(url, force);

        if (params.reroute) {
            this.navigate(params);
        }

        if (params.changeLanguage) {
            this.updateLanguage(params.queryParams.lang);
        }

        if (this.enableTracing) {
            console.group("Translate Event: Update Location");
            console.log("current url:", this.router.url);
            console.log("language in route:", params.queryParams.lang);
            console.log("current app language:", this._current$.getValue());
            console.log("should reroute:", params.reroute);
            console.log("should update language:", params.changeLanguage);
            console.log("navigation params:", params);
            console.groupEnd();
        }
    }

    private listenRouterEvents() {
        const routeEventAnalysis$ = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map((event: any) => {
                debugger;
                const url = (<NavigationEnd>event).urlAfterRedirects;

                return this.getRerouteParams(url);
            }),
            share()
        );

        routeEventAnalysis$
            .pipe(filter(({ reroute }) => Boolean(reroute)))
            .subscribe(params => this.navigate(params));

        routeEventAnalysis$
            .pipe(filter(({ changeLanguage }) => Boolean(changeLanguage)))
            .subscribe(params => this.updateLanguage(params.queryParams.lang));

        routeEventAnalysis$
            .pipe(filter(({ reroute }) => !Boolean(reroute)))
            .subscribe(({ url, queryParams, fragment }) =>
                this.navigationEnd$.next(url)
            );
    }

    private shouldIncludeLangQueryParameter(
        langQueryParam: string | null,
        force = false
    ) {
        if (!langQueryParam && !this.isOnDefaultLanguage) {
            return true;
        }

        if (
            force &&
            langQueryParam &&
            !this.isCurrentLanguage(langQueryParam)
        ) {
            return true;
        }

        return false;
    }

    private shouldChangeLanguage(langQueryParam: string | null) {
        if (langQueryParam && !this.isCurrentLanguage(langQueryParam)) {
            return true;
        }

        return false;
    }

    private getRerouteParams(url: string, force = false) {
        const urlTree = this.router.parseUrl(url);
        const langQueryParam = urlTree.queryParamMap.get("lang");
        const currentLanguage = this._current$.getValue();
        const shouldChangeRoute = this.shouldIncludeLangQueryParameter(
            langQueryParam,
            force
        );
        const shouldChangeLanguage = this.shouldChangeLanguage(langQueryParam);

        const fragment = urlTree.fragment;
        const queryParams = {
            ...urlTree.queryParams,
            lang: this._current$.getValue() || langQueryParam
        };

        return {
            changeLanguage: shouldChangeLanguage,
            reroute: shouldChangeRoute,
            url: urlTree.root.hasChildren()
                ? urlTree.root.children["primary"].toString()
                : urlTree.root.toString(),
            queryParams,
            fragment: fragment || undefined // Angular Router inconsistency: do not accept null, just undefined value
        };
    }

    private navigate({
        url,
        queryParams,
        fragment
    }: {
        url: string;
        queryParams: { [key: string]: string | null } | null;
        fragment: string | undefined;
    }) {
        if (this.enableTracing) {
            console.group("Translate Event: Translate Navigation");
            console.log("url", url);
            console.log("queryParams", queryParams);
            console.log("fragment", fragment);
            console.groupEnd();
        }

        this.router.navigate([url], { queryParams, fragment });
    }
}
