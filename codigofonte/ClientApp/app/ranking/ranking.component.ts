import { Component } from "@angular/core";

import { Subscription } from 'rxjs/Subscription';

import { PaisesService } from "../shared/paises-service";
import { RouterParamsService } from "../shared/router-params.service";
import { RankingService } from "./ranking.service";

@Component({
    selector: 'paises-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.css'],
    providers: [RankingService]
})
export class RankingComponent {
    public dados = [] as any[];
    public indicador: any;

    private _subscriptions: {
        [key: string]: Subscription
    } =  Object.create(null);

    constructor(
        private _routeParams: RouterParamsService,
        private _rankingService: RankingService
    ) { }

    ngOnInit() {
        this._subscriptions.params = this._routeParams.params$.subscribe(({ params }) => {            
            
            if (params.indicador) {
                const indicadorId = parseInt(params.indicador, 10);

                this._rankingService
                    .getValores(indicadorId)
                    .subscribe(res => { this.dados = res; })

                this._rankingService.getIndicador(indicadorId)
                    .subscribe(nome => { this.indicador = nome; });
            }
        })
    }

    ngOnDestroy() {
        Object.keys(this._subscriptions).forEach(key => this._subscriptions[key].unsubscribe());
    }
}