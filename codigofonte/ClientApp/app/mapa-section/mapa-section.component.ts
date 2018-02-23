import { Component, OnDestroy, OnInit } from "@angular/core";

import { Subscription } from "rxjs/Subscription";
import { map } from 'rxjs/operators/map';

import { 
    MalhaService, 
    LocalidadeService, 
    RouterParamsService, 
    Pais,
    PlatformDetectionService
} from "../shared";
import { RankingService } from "./ranking/ranking.service";


@Component({
    selector: 'mapa-section',
    templateUrl: './mapa-section.component.html',
    styles: [
        `:host{    
            position: absolute;
            min-height: 100%;
            top: 0;
        }`
    ],
    host: {
        'class': 'bg-layer area-aplicacao'
    }
})
export class MapaSectionComponent implements OnInit, OnDestroy {
    private _subscriptions: Subscription[] = [];

    public isBrowser: boolean;
    public malha: any;
    public pais: Pais|null = null;
    public linkUrl = ["."];

    constructor(
        private _malhaService: MalhaService,
        private _rankingService: RankingService,
        private _localidadeService: LocalidadeService,
        private _routerParams: RouterParamsService,
        platform: PlatformDetectionService
    ) {
        this.isBrowser = platform.isBrowser;
    }

    ngOnInit() {
        const routerParamsSubscription = this._routerParams.params$.subscribe(({params}) => {         
            this._rankingService.updateService(parseInt(params.indicador, 10))          
            this.pais = params.pais ? this._localidadeService.getPaisBySlug(params.pais) : null;

            this.linkUrl = params.indicador ? [".", "ranking", params.indicador] : ["."]
        });

        const malhaSubscription = this._rankingService.valores$.subscribe(valores => {
            this.malha = this._malhaService.getMalhaGeoJSON(valores);
        });

        this._subscriptions.push(malhaSubscription, routerParamsSubscription);
    }

    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
        this._rankingService.updateService();
    }
}