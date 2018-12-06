import {
  ChangeDetectorRef,
  Component,
  Input,
  Inject,
  ElementRef,
  ViewChildren,
  ViewChild,
  QueryList,
  OnInit,
  OnDestroy,
  ContentChildren,
  AfterContentInit,
  AfterViewInit
} from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";

import { Observable, Subscription, Subject } from "rxjs";
import { map } from "rxjs/operators/map";
import { switchMap } from "rxjs/operators/switchMap";
import { zip } from "rxjs/operators/zip";
import {
  combineLatest,
  distinctUntilChanged,
  takeUntil,
  tap
} from "rxjs/operators";

import { ResultadoPipe } from "../../shared/resultado.pipe";
import {
  PaisesService,
  RouterParamsService,
  Pais,
  MetadataIndicador,
  PaisesEnum
} from "../../shared";
import { MapaSectionService } from "../mapa-section.service";
import { take } from "rxjs/operator/take";

const TEMA_DEFAULT = PaisesEnum.temas.populacao;
const INDICADOR_DEFAULT = PaisesEnum.populacao.populacao_total;

@Component({
  selector: "paises-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"]
})
export class RankingComponent implements AfterViewInit, OnInit, OnDestroy {
<<<<<<< HEAD
    @Input() set indicador(obj: MetadataIndicador | null) {
        this.unidade = obj ? obj.unidade.identificador : '';
        this.nomeIndicador = obj ? obj.indicador : '';
        this._indicador = obj;
    };
    get indicador() {
        return this._indicador;
    }

    @Input() pais: Pais | null = null;
    @Input()
    set dados(values) {
        //debugger;
        //@ts-ignore
        this._dados = values && values.ordem.length
            //@ts-ignore
            ? values.ordem.map((sigla: string) => values.paises[sigla])
            : [];
        this.dados$.next(this._dados);
    }
    get dados() {
        return this._dados;
    }

    unidade = '';
    nomeIndicador = '';
    private _indicador: MetadataIndicador | null = null;

    @ViewChild('scrollEl') public scrollElement: ElementRef;
    @ViewChildren('cty') public countries: QueryList<ElementRef>
    public paisSelecionado = "";

    private _dados = [];
    private rankingObservable: Observable<any>;
    private destroy$ = new Subject<void>();
    private dados$ = new Subject<any>();

    constructor(
        private _hostElement: ElementRef,
        private _mapaSectionService: MapaSectionService,
        private _routerParams: RouterParamsService
    ) { }

    ngOnInit() {
        /*
        const paisSubscription = this._routerParams.params$.subscribe(({ params }) => {
            this.paisSelecionado = params.pais ? params.pais : "";
        });

        this.rankingObservable = this._routerParams.params$.pipe(
            map(({ params }) => parseInt(params.indicador, 10)),
            switchMap(indicadorId => this._mapaSectionService.getIndicador(indicadorId).pipe(
                // zip(this._mapaSectionService.getRanking(indicadorId))
            )
            )
        )

        const dadosSubscription = this.rankingObservable.subscribe(([indicador, ranking]) => {
            // this.indicador = indicador[0];
            this.dados = ranking;
        })

        this._subscriptions.push(paisSubscription, dadosSubscription);
        */
    }


    ngAfterViewInit() {
        // Escuta a rota e a criação da tabela para fazer o scroll 
        // da div até a linha do país selecionado
        this._routerParams.params$.pipe(
            map(({ params }) => params.pais || null),
            distinctUntilChanged(),
            combineLatest(this.countries.changes),
            takeUntil(this.destroy$),
        ).subscribe((data: any) => {
          //  debugger;
            const [slug] = data;
            if (slug) this.scrollTo(slug);
        });
    }


    ngOnDestroy() {
        this.destroy$.next();
    }

    scrollTo(elementId: string) {
        // debugger;
        const elementRef = this.countries.find(ref => ref.nativeElement.id === elementId);
        if (elementRef) {
            this.scrollElement.nativeElement.scrollTop = elementRef.nativeElement.offsetTop - 39 /* .ranking__table-head height */;
        }
    }

}
=======
  @Input()
  set indicador(obj: MetadataIndicador | null) {
    this.unidade = obj ? obj.unidade.identificador : "";
    this.nomeIndicador = obj ? obj.indicador : "";
    this._indicador = obj;
  }
  get indicador() {
    return this._indicador;
  }

  @Input() pais: Pais | null = null;
  @Input()
  set dados(values: any) {
    this._dados =
      values && values.ordem.length
        ? values.ordem.map((sigla: string) => values.paises[sigla])
        : [];
    this.dados$.next(this._dados);
  }
  get dados() {
    return this._dados;
  }

  @ViewChild("scrollEl") public scrollElement: ElementRef;
  @ViewChildren("cty") public countries: QueryList<ElementRef>;
  public paisSelecionado = "";

  unidade = "";
  nomeIndicador = "";
  tema$ = new Subject<number>();
  temas$ = this._paisesService.getTemas();
  indicadores: MetadataIndicador[] = [];
  periodos: string[] = [];

  indicadorId: number;
  temaId: number;
  ano: string;

  private _indicador: MetadataIndicador | null = null;
  private _dados = [];
  private rankingObservable: Observable<any>;
  private destroy$ = new Subject<void>();
  private dados$ = new Subject<any>();

  constructor(
    private _hostElement: ElementRef,
    private _mapaSectionService: MapaSectionService,
    private _routerParams: RouterParamsService,
    private _paisesService: PaisesService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this._routerParams.params$
      .pipe(takeUntil(this.destroy$), map(params => params.queryParams))
      .subscribe(queryParams => {
        this.indicadorId = Number(queryParams.indicador) || INDICADOR_DEFAULT;
        this.temaId = Number(queryParams.tema) || TEMA_DEFAULT;
        this.selectTema(this.temaId);
      });
  }

  ngAfterViewInit() {
    // Escuta a rota e a criação da tabela para fazer o scroll
    // da div até a linha do país selecionado
    this._routerParams.params$
      .pipe(
        map(({ params }) => params.pais || null),
        distinctUntilChanged(),
        combineLatest(this.countries.changes),
        takeUntil(this.destroy$)
      )
      .subscribe((data: any) => {
        const [slug] = data;
        if (slug) this.scrollTo(slug);
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  selectTema(id: number) {
    id = Number(id);
    this.temaId = id;
    this._paisesService.getIndicadores(id).subscribe(indicadores => {
      this.indicadores = indicadores;

      if (this.indicadorId) {
        const indicador = this.indicadores.find(
          indicador => indicador.id == this.indicadorId
        );
        this.updatePeriodos(indicador);
      }

      this._cdr.markForCheck();
    });
  }

  selectIndicador(id: number) {
    id = Number(id);
    this.periodos = this.indicadores
      .filter(indicador => indicador.id == id)
      .map(indicador => indicador.fontes.map(fonte => fonte.periodo))[0];

    this._router.navigate([], {
      queryParams: { tema: this.temaId, indicador: id },
      relativeTo: this._route,
      skipLocationChange: true
    });
  }

  updatePeriodos(indicador: any) {
    this.periodos = indicador
      ? indicador.fontes
          .map((fonte: any) => fonte.periodo)
          .sort()
          .reverse()
      : [];
  }

  scrollTo(elementId: string) {
    const elementRef = this.countries.find(
      ref => ref.nativeElement.id === elementId
    );
    if (elementRef) {
      this.scrollElement.nativeElement.scrollTop =
        elementRef.nativeElement.offsetTop -
        39 /* .ranking__table-head height */;
    }
  }
}
>>>>>>> 1769ea434f4a86e7041a15b4839c64174bcc3e1a
