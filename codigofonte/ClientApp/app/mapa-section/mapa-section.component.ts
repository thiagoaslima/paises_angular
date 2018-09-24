import { Component, ChangeDetectionStrategy } from "@angular/core";

import { Subscription } from "rxjs/Subscription";
import { distinctUntilChanged, map, filter, switchMap, zip, tap, flatMap } from 'rxjs/operators';

import {
    MalhaService,
    LocalidadeService,
    RouterParamsService,
    Pais,
    PlatformDetectionService
} from "../shared";
import { MapaSectionService } from "./mapa-section.service";
import { RankingComponent } from "./ranking/ranking.component";

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
    host: {'class': 'bg-layer area-aplicacao'},
    entryComponents: [
        RankingComponent
    ]
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

    public indicadorObj$ = this.indicador$.pipe(
        filter(Boolean),
        switchMap(indicadorId => this._mapaSectionService.getIndicador(indicadorId)
            .pipe(map(indicador => indicador[0]))
        ),
        filter(Boolean)
    );

    dados$ = this.indicadorObj$.pipe(
        flatMap(indicador => {
            return this._mapaSectionService.getRanking(indicador.id)
        }),
        tap(resp => {
            this.malha = this._mapaSectionService.getMapaRanking(resp);
        })
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