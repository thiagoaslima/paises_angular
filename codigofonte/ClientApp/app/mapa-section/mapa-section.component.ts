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
import {
  RankingComponent,
  INDICADOR_DEFAULT
} from "./ranking/ranking.component";
import { combineLatest } from "rxjs/observable/combineLatest";

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
        map(({ url, queryParams }) => {
            if (queryParams.indicador) {
                return parseInt(queryParams.indicador, 10)
            } 

            if (url.indexOf('ranking') >= 0) {
                return INDICADOR_DEFAULT;
            }
        }),
        filter(Boolean),
        distinctUntilChanged()
    );

    private ano$ = this._routerParams.params$.pipe(
        map((params) => params.queryParams.ano)
    )
    
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

    dados$ = combineLatest(
        this.indicadorObj$, this.ano$
    ).pipe(
        flatMap(([indicador, ano]) => {
            debugger
            return this._mapaSectionService.getRanking(indicador.id, ano)
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