import { Component, Input } from "@angular/core";

import { Subscription } from 'rxjs/Subscription';

import { PaisesService, RouterParamsService } from "../../shared";
import { RankingService } from "./ranking.service";

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
        private _rankingService: RankingService,
        private _routerParams: RouterParamsService
    ) { }

    ngOnInit() {
        const paisSubscription = this._routerParams.params$.subscribe(({params}) => {
            this.paisSelecionado = params.pais ? params.pais : "";
        });

        const indicadorSubscription = this._rankingService.indicador$.subscribe(indicador => {
            this.indicador = indicador;
        });

        const valoresSubscription = this._rankingService.valores$.subscribe(valores => {
            this.dados = valores;
        });

        this._subscriptions.push(paisSubscription, indicadorSubscription, valoresSubscription);
    }

    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }

}