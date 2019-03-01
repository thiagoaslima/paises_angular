export type AnalyticsKey = string;

export type AnalyticsCustomEvent = {
    category: string;
    action: string;
    label: string;
};

export type AnalyticsConfig = {
    key: AnalyticsKey;
};

export interface IAnalyticsService {
    listenRouterChanges(): void;
    sendCustomEvent(customEvent: AnalyticsCustomEvent): void;
}
