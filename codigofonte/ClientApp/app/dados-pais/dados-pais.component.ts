import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { RouterParamsService, LocalidadeService, Pais } from "../shared";
import { SinteseHomeService } from "../mapa-section/sintese-home/sintese-home.service";
import { DadosPaisService } from './dados-pais.service';

import { ResultadoPipe } from '../shared/resultado.pipe';

import { linksCapas } from '../shared/links-capas';

@Component({
    selector: 'dados-pais',
    templateUrl: './dados-pais.component.html',
    styleUrls: ['./dados-pais.component.css'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        SinteseHomeService, 
        DadosPaisService
    ]
})
export class DadosPaisComponent {
    public pais: Pais | null = null;
    public imageSrc = ''
    public imageSrcCover = ''
    public imageLink = ''
    public itens = <any[]>[];
    public historico: string[] = [];
    public temas: any = [];

    historico_aberto = false;

    private _subscriptions: {
        [key: string]: Subscription
    } =  Object.create(null);

    constructor(
        private _routerParams: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _sinteseService: SinteseHomeService,
        private _changeDetector: ChangeDetectorRef,
        private _dadosPaisService: DadosPaisService
    ) { }

    ngOnInit() {
        this._subscriptions.params = this._routerParams.params$.subscribe(({ params, url }) => {
            
            let pais = this._localidadeService.getPaisBySlug(params.pais);
            this.itens.length = 0;
            this.setImageSrc(pais);

            if (pais) {
                this.pais = pais;

                this._sinteseService.getSintese(pais.sigla).subscribe((resultados: any) => {
                    this.itens.push(...resultados);
                    // this._changeDetector.detectChanges();
                });

                this._dadosPaisService.getHistorico(pais.sigla).subscribe(historico => {
                    this.historico = historico;
                    // this._changeDetector.detectChanges();
                })

                this._dadosPaisService.getDados(pais.sigla).subscribe(resultados => {
                    this.temas = resultados;
                    // this._changeDetector.detectChanges();
                });
                
            } else {
                this.pais = null;
            }

            
        });
    }

    ngOnDestroy() {
        // this._changeDetector.detach();
        Object.keys(this._subscriptions).forEach(key => this._subscriptions[key].unsubscribe());
    }

    setImageSrc(pais: Pais | null) {
        if (pais) {
            this.imageSrc = 'img/bandeiras/' + pais.sigla.toUpperCase() + '.gif';
            this.imageSrcCover = 'img/capas/' + pais.sigla.toUpperCase() + '.jpg';
            this.imageLink = linksCapas[pais.sigla.toUpperCase()];
        } else {
            this.imageSrc = '';
            this.imageSrcCover = '';
            this.imageLink = '';
        }
    }
}