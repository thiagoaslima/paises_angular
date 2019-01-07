export interface AppSupportedLanguage {
  id: string;
  text: string;
  fullname?: string;
  default?: boolean;
}

export interface TranslateDictionary {
  [term: string]: string;
}

export interface TranslateConfig {
  languages: AppSupportedLanguage[];
  dictionaries: { [languageId: string]: TranslateDictionary };
}
