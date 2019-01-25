import {
    Component,
    ViewChild,
    OnInit,
    OnDestroy,
    AfterViewInit,
    Inject,
    ElementRef,
} from '@angular/core';

import { BuscaService } from '../../shared';
import { TranslateService } from '../../translate/translate.service';
import { Subject } from 'rxjs/Subject';
import {
    distinctUntilChanged,
    debounceTime,
    takeUntil,
    filter,
    switchMap,
    tap,
    take,
} from 'rxjs/operators';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { DOCUMENT } from '@angular/common';

@Component({
    selector: 'barra-menu-principal',
    templateUrl: './barra-menu-principal.component.html',
    styleUrls: ['./barra-menu-principal.component.css'],
})
export class BarraMenuPrincipalComponent
    implements OnInit, OnDestroy, AfterViewInit {
    resultados: Array<any> = [];
    idiomas = this.translateService.languages;
    currentLanguage$ = this.translateService.currentId$;

    mostraMenu = false;
    term$ = new Subject<string>();
    destroy$ = new Subject<void>();
    searching$ = new Subject<void>();

    @ViewChild('searchInput') searchInput: ElementRef | null = null;

    constructor(
        private _buscaService: BuscaService,
        private translateService: TranslateService,
        @Inject(DOCUMENT) private document: Document
    ) {}

    ngOnInit() {
        this.term$
            .pipe(
                debounceTime(350),
                distinctUntilChanged(),
                takeUntil(this.destroy$)
            )
            .subscribe(term => {
                if (!term) {
                    this.resultados = [];
                }

                this.resultados = this._buscaService.search(
                    term,
                    this.translateService.currentLanguage.id
                );
            });
    }

    ngAfterViewInit(): void {
        if (this.document && this.searchInput) {
            fromEvent(this.searchInput.nativeElement, 'focus')
                .pipe(
                    takeUntil(this.destroy$),
                    switchMap(() => {
                        const globalClick$ = fromEvent(this.document, 'click');
                        return globalClick$.pipe(
                            filter((evt: any) => {
                                const elemClasses =
                                    evt.target.getAttribute('class') || '';
                                return ![
                                    'cabecalho__campo-busca',
                                    'cabecalho__sugestao',
                                ].some(classname =>
                                    elemClasses.includes(classname)
                                );
                            }),
                            tap(() => this.term$.next('')),
                            take(1)
                        );
                    })
                )
                .subscribe(() => {});
        }
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    busca(term: string) {
        this.term$.next(term);
    }

    limpaResultados() {
        this.resultados = [];
    }

    navegarPara(event: any) {
        // console.log(event);
    }

    mudarIdioma(idioma: string) {
        this.translateService.updateLanguage(idioma);
    }

    enter() {
        this.searching$.next();
    }
}
