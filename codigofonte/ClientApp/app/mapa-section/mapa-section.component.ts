import { Component, ChangeDetectionStrategy } from '@angular/core';

import {
    distinctUntilChanged,
    map,
    switchMap,
    tap,
    flatMap,
} from 'rxjs/operators';

import {
    LocalidadeService,
    RouterParamsService,
    PlatformDetectionService,
    MetadataIndicador,
} from '../shared';
import { MapaSectionService } from './mapa-section.service';

import {
    RankingComponent,
    INDICADOR_DEFAULT,
} from './ranking/ranking.component';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'mapa-section',
    templateUrl: './mapa-section.component.html',
    styles: [
        `
            :host {
                position: absolute;
                min-height: 100%;
                top: 0;
                bottom: 0;
            }
        `,
    ],
    host: { class: 'bg-layer area-aplicacao' },
    entryComponents: [RankingComponent],
})
export class MapaSectionComponent {
    public isBrowser: boolean;
    public malha = this._mapaSectionService.getMapa();

    private indicador$ = this._routerParams.params$.pipe(
        map(({ url, queryParams }) => {
            if (queryParams.indicador) {
                return parseInt(queryParams.indicador, 10);
            } else if (url.indexOf('ranking') >= 0) {
                return INDICADOR_DEFAULT;
            } else {
                return null;
            }
        }),
        distinctUntilChanged()
    );

    private ano$ = this._routerParams.params$.pipe(
        map(params => params.queryParams.ano)
    );

    pais$ = this._routerParams.params$.pipe(
        map(obj => this._localidadeService.getPaisBySlug(obj.params.pais))
    );

    link$ = this.indicador$.pipe(
        map(indicador => (indicador ? ['.', 'ranking', indicador] : ['.']))
    );

    public indicadorObj$: Observable<MetadataIndicador | null> = this.indicador$.pipe(
        switchMap(indicadorId => {
            return indicadorId
                ? (this._mapaSectionService
                      .getIndicador(indicadorId)
                      .pipe(
                          map(indicador => indicador[0])
                      ) as Observable<MetadataIndicador | null>)
                : (of(null) as Observable<MetadataIndicador | null>);
        })
    );

    dados$ = combineLatest(this.indicadorObj$, this.ano$).pipe(
        flatMap(([indicador, ano]) => {
            return indicador
                ? this._mapaSectionService.getRanking(indicador.id, ano)
                : of(null);
        }),
        tap(resp => {
            if (resp) {
                this.malha = this._mapaSectionService.getMapaRanking(resp);
            } else {
                this.malha = this._mapaSectionService.getMapa();
            }
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
