import { Injectable, Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { map, distinctUntilChanged } from "rxjs/operators";

import { TranslateServiceConfig } from "./translate.module";
import {
  TranslateConfig,
  AppSupportedLanguage,
  TranslateDictionary
} from "./translate.models";
import { RouterParamsService } from "../shared";

@Injectable()
export class TranslateService {
  current$ = new BehaviorSubject<string>("");
  languages$ = new BehaviorSubject<AppSupportedLanguage[]>([]);
  dictionaries: { [languageId: string]: TranslateDictionary } = {};

  private DEFAULT_LANGUAGE: string;

  constructor(
    @Inject(TranslateServiceConfig) private config: TranslateConfig,
    private routeParamsService: RouterParamsService,
  ) {
    const initialLang = this.config.languages.reduce((agg, language) =>
      language.default ? language : agg
    );

    this.DEFAULT_LANGUAGE = initialLang.id;
    this.dictionaries = config.dictionaries;

    this.current$ = new BehaviorSubject<string>(initialLang.id);
    this.languages$ = new BehaviorSubject<AppSupportedLanguage[]>(
      this.config.languages
    );

    this.listenLanguageParameter();
  }


  translate(term: string) {
    const current = this.current$.getValue();
    const translation = this.dictionaries[current][term];
    const defaultTranslation = this.dictionaries[this.DEFAULT_LANGUAGE][term];

    return translation || defaultTranslation || term;
  }

  pluckTranslation(object: Partial<{ [languageId: string]: string }>) {
    const current = this.current$.getValue();
    return object[current] || object[this.DEFAULT_LANGUAGE] || "";
  }

  private listenLanguageParameter() {
    this.routeParamsService.params$
      .pipe(
        map(params => params.queryParams.lang || this.DEFAULT_LANGUAGE),
        distinctUntilChanged()
      )
      .subscribe(lang => this.current$.next(lang));
  }

}
