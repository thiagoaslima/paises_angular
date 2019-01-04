export interface AppSupportedLanguage {
    id: string;
    text: string;
    fullname?: string;
    default?: boolean;
}

export interface TranslateConfig {
    languages: AppSupportedLanguage[];
    dictionaries: { [languageId: string]: string };
}
