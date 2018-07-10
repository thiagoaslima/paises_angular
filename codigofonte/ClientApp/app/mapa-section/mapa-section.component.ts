import { Component, OnDestroy, OnInit } from "@angular/core";

import { Subscription } from "rxjs/Subscription";
import { distinctUntilChanged } from 'rxjs/operators/distinctUntilChanged';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import { tap } from 'rxjs/operators/tap';
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
    public escala = {values: [], classes: []} as {values: number[], classes: string[]};

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
            this.pais = this._localidadeService.getPaisBySlug(params.pais);
            this.linkUrl = params.indicador ? [".", "ranking", params.indicador] : ["."]
        });

        const indicadorObservable$ = this._routerParams.params$.pipe(
            map( ({params}) => parseInt(params.indicador, 10)),
            distinctUntilChanged()
        );
        
        const malhaComDadosSubscription = indicadorObservable$.pipe(
            filter(Boolean),
            switchMap(indicadorId => this._mapaSectionService.getRanking(indicadorId)),
            map(ranking => {
                const escala = this._mapaSectionService.getScale(ranking);
                const malha = this._mapaSectionService.getMapa(ranking, escala.values);
                return {escala, malha};
            })
        ).subscribe(({escala, malha}) => { 
            this.malha = malha;
            this.escala = escala;
        });

        const malhaSemDadosSubscription = indicadorObservable$.pipe(
            filter(id => !id),
            map(_ => this._mapaSectionService.getMapa())
        ).subscribe((malha:any) => { 
            this.malha = malha;
            this.escala = {values: [], classes: []};
        });

        this._subscriptions.push(malhaComDadosSubscription, malhaSemDadosSubscription, routerParamsSubscription);
    }

    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }
}