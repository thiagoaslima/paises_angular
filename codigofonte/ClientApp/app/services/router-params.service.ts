import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    NavigationEnd,
    RouteConfigLoadEnd,
    RouteConfigLoadStart,
    Router
} from '@angular/router';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/share';
import { RouterEvent, ChildActivationStart, ChildActivationEnd, ActivationStart, ActivationEnd } from '@angular/router/src/events';

export interface RouterParams {
    params: { [key: string]: string };
    queryParams: { [key: string]: string };
    url: string;
}

type RouterEvents = RouterEvent | RouteConfigLoadStart | RouteConfigLoadEnd |
    ChildActivationStart | ChildActivationEnd | ActivationStart | ActivationEnd;

@Injectable()
export class RouterParamsService {

    public params$: Observable<RouterParams>;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute
    ) {
        this.params$ = this._router.events
            .filter<RouterEvents, NavigationEnd>( (evt): evt is NavigationEnd => evt instanceof NavigationEnd)
            .distinctUntilChanged()
            .map((evt) => {
                return this.extractParamsFromTree(this._route.snapshot, {});
            });
    }

    private getActiveChildOnOutlet(route: ActivatedRouteSnapshot, outlet = 'primary'): ActivatedRouteSnapshot | null {
        return route.children.find(rota => {
            return rota.outlet === outlet;
        }) || null;
    }

    private extractParamsFromTree(
        route: ActivatedRouteSnapshot | null,
        { params = {}, queryParams = {}, url = '' },
        outlet = 'primary'
    ): RouterParams {

        let _params: RouterParams = {
            params,
            queryParams,
            url
        };

        if (!route) { return _params; }

        Object.assign(_params.params, Object.keys(route.params).reduce((agg, key) => {
            let val = decodeURIComponent(route.params[key]);
            return Object.assign(agg, { [key]: val });
        }, <RouterParams>{}));

        Object.assign(_params.queryParams, route.queryParams);

        if (route.url != null) {
            Object.assign(_params.url, route.url);
        }


        return this.extractParamsFromTree(this.getActiveChildOnOutlet(route), _params, outlet);
    }

}