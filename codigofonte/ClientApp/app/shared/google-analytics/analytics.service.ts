import { Router, NavigationEnd } from '@angular/router';
import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {
    AnalyticsKey,
    AnalyticsCustomEvent,
    AnalyticsConfig,
} from './analytics.definitions';
import { isAnalyticsKey } from './analytics.validators';

declare const window: any;

@Injectable()
export class AnalyticsService {
    private ga = (...args: any[]) => {};

    constructor(
        private router: Router,
        @Inject(DOCUMENT) private document: Document,
        @Inject('analyticsConfig') private config: AnalyticsConfig
    ) {
        const key = isAnalyticsKey(config.key);

        this.loadScript(() => {
            this.ga = (<any>window).ga;
            this.startAnalytics(key);
        });
    }

    sendCustomEvent({ category, action, label }: AnalyticsCustomEvent) {
        this.ga('send', {
            hitType: 'event',
            eventCategory: category,
            eventAction: action,
            eventLabel: label,
        });
    }

    listenRouterChanges() {
        this.router.events
            .skip(1)
            .filter(e => e instanceof NavigationEnd)
            .map(e => e as NavigationEnd) // just to avoid compile errors
            .distinctUntilChanged()
            .subscribe(e => {
                this.ga('set', 'page', e.url);
                this.ga('send', 'pageview');
            });
    }

    private loadScript(cb: () => void) {
        if ((<any>window).ga) {
            return cb();
        }

        window['GoogleAnalyticsObject'] = 'ga';
        window['ga'] =
            window['ga'] ||
            function() {
                (window['ga'].q = window['ga'].q || []).push(arguments);
            };
        window['ga'].l = 1 * +new Date();

        let script1 = this.document.createElement('script');
        let place = this.document.getElementsByTagName('script')[0];
        script1.async = true;
        script1.src = '//www.google-analytics.com/analytics.js';
        script1.onload = cb;

        place.parentElement && place.parentElement.insertBefore(script1, place);
    }

    private startAnalytics(key: AnalyticsKey) {
        this.ga('create', key, 'auto');
        this.listenRouterChanges();
    }
}
