import { Component, Input } from "@angular/core";

import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';
import { map } from "rxjs/operators/map";
import { switchMap } from "rxjs/operators/switchMap";

import { PaisesService, RouterParamsService } from "../../shared";
import { MapaSectionService } from "../mapa-section.service";

@Component({
    selector: 'paises-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
    public paisSelecionado = "";
    
    public dados = [] as any[];
    public indicador: any;

    private _subscriptions: Subscription[] = [];

    constructor(
        private _mapaSectionService: MapaSectionService,
        private _routerParams: RouterParamsService
    ) { }

    ngOnInit() {
        const paisSubscription = this._routerParams.params$.subscribe(({params}) => {
            this.paisSelecionado = params.pais ? params.pais : "";
        });

        const dadosSubscription = this._routerParams.params$.pipe(
            map(({params}) => parseInt(params.indicador, 10)),
            switchMap(indicadorId => Observable.zip([
                    this._mapaSectionService.getIndicador(indicadorId),
                    this._mapaSectionService.getRanking(indicadorId)
                ])
            )
        ).subscribe(([indicador, ranking]) => {
            this.indicador = indicador;
            this.dados = ranking;
        })

        this._subscriptions.push(paisSubscription, dadosSubscription);
    }

    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }

}