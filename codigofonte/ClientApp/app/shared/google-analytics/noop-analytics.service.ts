import { Inject, Injectable } from '@angular/core';
import {
    AnalyticsCustomEvent,
    AnalyticsConfig,
    IAnalyticsService,
} from './analytics.definitions';
import { isAnalyticsKey } from './analytics.validators';

declare const window: any;

@Injectable()
export class NoopAnalyticsService implements IAnalyticsService {
    constructor(@Inject('analyticsConfig') private config: AnalyticsConfig) {
        isAnalyticsKey(config.key);
    }

    listenRouterChanges() {}

    sendCustomEvent(customEvent: AnalyticsCustomEvent) {}
}
