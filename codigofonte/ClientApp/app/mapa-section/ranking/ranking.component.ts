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
import { combineLatest } from "rxjs/observable/combineLatest";

import {
  combineLatest as combineLatestOperator,
  distinctUntilChanged,
  takeUntil,
  tap,
  filter,
  take,
  zip,
  switchMap,
  map
} from "rxjs/operators";

import { ResultadoPipe } from "../../shared/resultado.pipe";
import {
  PaisesService,
  RouterParamsService,
  Pais,
  MetadataIndicador,
  PaisesEnum,
  LocalidadeService
} from "../../shared";
import { MapaSectionService } from "../mapa-section.service";

export const TEMA_DEFAULT = PaisesEnum.temas.populacao;
export const INDICADOR_DEFAULT = PaisesEnum.populacao.populacao_total;

@Component({
  selector: "paises-ranking",
  templateUrl: "./ranking.component.html",
  styleUrls: ["./ranking.component.css"]
})
export class RankingComponent implements AfterViewInit, OnInit, OnDestroy {
  pais$ = new Subject<Pais | null>();
  dados$ = new Subject<any>();

  @Input()
  set indicador(obj: MetadataIndicador | null) {
    this.unidade = obj ? obj.unidade.identificador : "";
    this.nomeIndicador = obj ? obj.indicador : "";
    this._indicador = obj;
  }
  get indicador() {
    return this._indicador;
  }

  @Input()
  set pais(pais: Pais | null) {
    this._pais = pais;
    this.pais$.next(pais);
  }
  get pais() {
    return this._pais;
  }
  @Input()
  set dados(values: any) {
    this._dados =
      values && values.ordem.length
        ? values.ordem.map((sigla: string) => values.paises[sigla])
        : [];

    this.selecionado = this._pais && values ? values.paises[this._pais.sigla] : null;

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

  selecionado = null;
  indicadores: MetadataIndicador[] = [];
  periodos: string[] = [];

  indicadorId: number | null;
  temaId: number | null;
  ano: string | null;
  pristine = true;

  private _pais: Pais | null = null;
  private _indicador: MetadataIndicador | null = null;
  private _dados = [];
  private rankingObservable: Observable<any>;
  private destroy$ = new Subject<void>();

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
      .takeUntil(this.destroy$)
      .map(params => params.queryParams)
      .subscribe(queryParams => {
        this.indicadorId = Number(queryParams.indicador) || INDICADOR_DEFAULT;
        this.temaId = Number(queryParams.tema) || TEMA_DEFAULT;
        this.ano = queryParams.ano;
        this.getIndicadores(this.temaId);
        this.pristine = true;
      });
  }

  ngAfterViewInit() {
    // Escuta a rota e a criação da tabela para fazer o scroll
    // da div até a linha do país selecionado
    // this._routerParams.params$
    //   .pipe(
    //     map(({ params }) => params.pais || null),
    //     distinctUntilChanged(),
    //     combineLatestOperator(this.countries.changes),
    //     takeUntil(this.destroy$)
    //   )
    //   .subscribe((data: any) => {
    //     const [slug] = data;
    //     if (slug) this.scrollTo(slug);
    //   });
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  getIndicadores(temaId: number) {
    this._paisesService.getIndicadores(temaId).subscribe(indicadores => {
      this.indicadores = [
        { indicador: "Selecione um indicador" } as MetadataIndicador
      ].concat(indicadores);

      if (this.indicadorId) {
        const indicador = this.indicadores.find(
          indicador => indicador.id == this.indicadorId
        );
        this.updatePeriodos(indicador);
      }

      this._cdr.markForCheck();
    });
  }

  selectTema(id: number) {
    id = Number(id);
    this.temaId = id;
    this.indicadorId = null;
    this.ano = null;
    this.pristine = false;
    this.periodos = [];
    this.getIndicadores(id);
  }

  selectIndicador(id: number) {
    id = Number(id);
    this.pristine = false;
    this.indicadorId = id;
    this.ano = null;
    this.updatePeriodos(
      this.indicadores.find(indicador => indicador.id === id)
    );
    // this.periodos = this.indicadores
    //   .filter(indicador => indicador.id == id)
    //   .map(indicador => ['Selecione o período desejado'].concat(indicador.fontes.map(fonte => fonte.periodo))[0]);

    // this._router.navigate([], {
    //   queryParams: { tema: this.temaId, indicador: id, ano: this.ano },
    //   queryParamsHandling: 'merge',
    //   relativeTo: this._route,
    //   skipLocationChange: true
    // });
  }

  selectAno(ano: string) {
    this.ano = ano;
    this.pristine = false;

    if (this.temaId && this.indicadorId && this.ano) {
      this._router.navigate([], {
        queryParams: {
          tema: this.temaId,
          indicador: this.indicadorId,
          ano: this.ano
        },
        queryParamsHandling: "merge",
        relativeTo: this._route
      });
    }
  }

  updatePeriodos(indicador: any) {
    this.periodos = indicador
      ? ["Selecione o período desejado"].concat(
          indicador.fontes
            .map((fonte: any) => fonte.periodo)
            .sort()
            .reverse()
        )
      : [];
    this._cdr.markForCheck();
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
