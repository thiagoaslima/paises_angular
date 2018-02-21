import { Component } from "@angular/core";

import { Subscription } from 'rxjs/Subscription';

import { PaisesService, RouterParamsService } from "../../shared";
import { RankingService } from "./ranking.service";

@Component({
    selector: 'paises-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.css']
})
export class RankingComponent {
    public dados = [] as any[];
    public indicador: any;

    private _subscriptions: Subscription[] = [];

    constructor(
        private _rankingService: RankingService
    ) { }

    ngOnInit() {
        const indicadorSubscription = this._rankingService.indicador$.subscribe(indicador => {
            this.indicador = indicador.nome;
        });

        const valoresSubscription = this._rankingService.valores$.subscribe(valores => {
            this.dados = valores;
        });

        this._subscriptions.push(indicadorSubscription, valoresSubscription);
    }

    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}