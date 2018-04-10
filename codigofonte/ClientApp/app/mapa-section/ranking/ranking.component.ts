import { Component, Input, Inject, ElementRef, AfterViewInit, ViewChildren, ViewChild, QueryList } from "@angular/core";
import { DOCUMENT } from "@angular/common";

import { Observable } from "rxjs/Observable";
import { Subscription } from 'rxjs/Subscription';
import { map } from "rxjs/operators/map";
import { switchMap } from "rxjs/operators/switchMap";
import { zip } from "rxjs/operators/zip";

import { PaisesService, RouterParamsService } from "../../shared";
import { MapaSectionService } from "../mapa-section.service";
import { OnInit, OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";


@Component({
    selector: 'paises-ranking',
    templateUrl: './ranking.component.html',
    styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements AfterViewInit, OnInit, OnDestroy {
    @ViewChild('scrollEl') public scrollElement: ElementRef;
    @ViewChildren("cty") public countries: QueryList<ElementRef>
    public paisSelecionado = "";

    public dados = [] as any[];
    public indicador: any;

    private _subscriptions: Subscription[] = [];
    private rankingObservable: Observable<any>

    constructor(
        private _hostElement: ElementRef,
        private _mapaSectionService: MapaSectionService,
        private _routerParams: RouterParamsService
    ) { }

    ngOnInit() {
        const paisSubscription = this._routerParams.params$.subscribe(({ params }) => {
            this.paisSelecionado = params.pais ? params.pais : "";
        });

        this.rankingObservable = this._routerParams.params$.pipe(
            map(({ params }) => parseInt(params.indicador, 10)),
            switchMap(indicadorId => this._mapaSectionService.getIndicador(indicadorId).pipe(
                zip(this._mapaSectionService.getRanking(indicadorId))
            )
            )
        )

        const dadosSubscription = this.rankingObservable.subscribe(([indicador, ranking]) => {
            this.indicador = indicador[0];
            this.dados = ranking;
        })

        this._subscriptions.push(paisSubscription, dadosSubscription);
    }


    ngAfterViewInit() {
        (<any>window)["countries"] = this.countries;
        const scrollSubscription = this.countries.changes.pipe(
            zip(this.rankingObservable)
        ).subscribe(_ => {
            if (this.paisSelecionado) {
                this.scrollTo(this.paisSelecionado);
            }
        });
        this._subscriptions.push(scrollSubscription);
    }

    ngOnDestroy() {
        this._subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    scrollTo(elementId: string) {
        const elementRef = this.countries.find(ref => ref.nativeElement.id === elementId);
        if (elementRef) {
            this.scrollElement.nativeElement.scrollTop = elementRef.nativeElement.offsetTop - 39 /* .ranking__table-head height */;
        }
    }

}