import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { RouterParamsService, LocalidadeService, Pais } from "../shared";
import { PaisesService } from "../shared/paises.service";
import { SinteseHomeService } from "../mapa-section/sintese-home/sintese-home.service";
import { ItemTemaComponent } from "../sandbox/componentes/item-tema.component";
import { DadosPaisService } from './dados-pais.service';

@Component({
    selector: 'dados-pais',
    templateUrl: './dados-pais.component.html',
    styleUrls: ['./dados-pais.component.css'],
    providers: [
        SinteseHomeService, 
        DadosPaisService
    ]
})
export class DadosPaisComponent {
    public pais: Pais | null = null;
    public imageSrc = ''
    public itens = <any[]>[];
    public historico= '';
    public dados: any = {};

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
                });

                this._dadosPaisService.getHistorico(pais.sigla).subscribe(historico => {
                    this.historico = historico;
                })

                this._dadosPaisService.getDados(pais.sigla).subscribe(resultados => {
                    this.dados = resultados;
                });
            } else {
                this.pais = null;
            }

            
        });
    }

    ngOnDestroy() {
        this._changeDetector.detach();
        Object.values(this._subscriptions).forEach(subscription => subscription.unsubscribe());
    }

    setImageSrc(pais: Pais | null) {
        if (pais) {
            this.imageSrc = 'img/bandeiras/' + pais.sigla.toUpperCase() + '.gif';
        } else {
            this.imageSrc = '';
        }
    }
}