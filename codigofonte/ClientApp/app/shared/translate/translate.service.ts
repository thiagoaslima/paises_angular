import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";

import { TranslateServiceConfig } from "./translate.module";
import { TranslateConfig, AppSupportedLanguage } from "./translate.models";
import { RouterParamsService } from "../router-params.service";
import { map, filter, distinctUntilChanged } from "rxjs/operators";

@Injectable()
export class TranslateService {
    current$: BehaviorSubject<string>;
    languages$: BehaviorSubject<AppSupportedLanguage[]>;
    dictionaries: { [languageId: string]: { [term: string]: string } };

    constructor(
        @Inject(TranslateServiceConfig) private config: TranslateConfig,
        private routeParamsService: RouterParamsService
    ) {
        const initialLang = this.config.languages.reduce(
            (agg, language) => (language.default ? language : agg)
        );

        this.current$ = new BehaviorSubject<string>(initialLang.id);
        this.languages$ = new BehaviorSubject<AppSupportedLanguage[]>(
            this.config.languages
        );

        this.routeParamsService.params$
            .pipe(
                map(params => params.queryParams.lang),
                filter(Boolean),
                distinctUntilChanged()
            )
            .subscribe(lang => this.current$.next(lang));
    }

    translateSync(term: string) {
        const current = this.current$.getValue();
        const translation = this.dictionaries[current][term];

        return translation || term;
    }
}
