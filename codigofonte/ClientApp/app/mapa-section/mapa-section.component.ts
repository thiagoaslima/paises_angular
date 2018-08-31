import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Subscription } from "rxjs/Subscription";
import { distinctUntilChanged, map } from 'rxjs/operators';

import {
    MalhaService,
    LocalidadeService,
    RouterParamsService,
    Pais,
    PlatformDetectionService
} from "../shared";
import { MapaSectionService } from "./mapa-section.service";

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mapa-section',
    templateUrl: './mapa-section.component.html',
    styles: [`
        :host{    
            position: absolute;
            min-height: 100%;
            top: 0;
        }
    `],
    host: {'class': 'bg-layer area-aplicacao'}
})
export class MapaSectionComponent  {
    public isBrowser: boolean;
    public malha = this._mapaSectionService.getMapa();
    
    private indicador$ = this._routerParams.params$.pipe(
        map(({ params }) => parseInt(params.indicador, 10)),
        distinctUntilChanged()
    );
    
    pais$ = this._routerParams.params$.pipe(
        map(obj => this._localidadeService.getPaisBySlug(obj.params.pais))
    );

    link$ = this.indicador$.pipe(
        map(indicador => indicador ? [".", "ranking", indicador] : ["."])
    );

    constructor(
        private _mapaSectionService: MapaSectionService,
        private _localidadeService: LocalidadeService,
        private _routerParams: RouterParamsService,
        platform: PlatformDetectionService
    ) {
        this.isBrowser = platform.isBrowser;
    }



}