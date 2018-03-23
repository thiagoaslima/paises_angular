import { Component, OnDestroy, OnInit } from "@angular/core";

import { Subscription } from "rxjs/Subscription";
import { map } from 'rxjs/operators/map';
import { switchMap } from 'rxjs/operators/switchMap';


import { 
    MalhaService, 
    LocalidadeService, 
    RouterParamsService, 
    Pais,
    PlatformDetectionService
} from "../shared";
import { MapaSectionService } from "./mapa-section.service";


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
        private _mapaSectionService: MapaSectionService,
        private _localidadeService: LocalidadeService,
        private _routerParams: RouterParamsService,
        platform: PlatformDetectionService
    ) {
        this.isBrowser = platform.isBrowser;
    }

    ngOnInit() {
        const routerParamsSubscription = this._routerParams.params$.subscribe(({params}) => {         
            this.pais = params.pais ? this._localidadeService.getPaisBySlug(params.pais) : null;
            this.linkUrl = params.indicador ? [".", "ranking", params.indicador] : ["."]
        });

        const malhaSubscription = this._routerParams.params$.pipe(
            map( ({params}) => parseInt(params.indicador, 10)),
            switchMap(indicadorId => this._mapaSectionService.getMapa(indicadorId))
        ).subscribe((malha:any) => { 
            this.malha = malha;
        })

        this._subscriptions.push(malhaSubscription, routerParamsSubscription);
    }

    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}