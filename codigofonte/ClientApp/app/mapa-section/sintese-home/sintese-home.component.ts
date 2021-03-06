import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import {
  RouterParamsService,
  LocalidadeService,
  Pais,
  PaisesEnum
} from "../../shared";
import { SinteseHomeService } from "./sintese-home.service";

import { ResultadoPipe } from "../../shared/resultado.pipe";

@Component({
    selector: 'sintese-home',
    templateUrl: './sintese-home.component.html',
    styleUrls: ['./sintese-home.component.css'],
    providers: [SinteseHomeService],
	// changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinteseHomeComponent implements OnInit, OnDestroy {
    public pais: Pais | null = null;
    public imageSrc = ''
    public itens = <any[]>[];
    public loading = false;
    public temDados = false;

    // APENAS PARA O LINK DEFAULT
    linkIndicador = PaisesEnum.populacao.populacao_total;
    linkTema = PaisesEnum.temas.populacao;
    linkAno = 2018;

    private _subscriptions: {
        [key: string]: Subscription
    } =  Object.create(null);

    constructor(
        private _routerParams: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _sinteseService: SinteseHomeService,
		private _changeDetector: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this._subscriptions.params = this._routerParams.params$.subscribe(({ params, url }) => {
            let pais = this._localidadeService.getPaisBySlug(params.pais);
            this.itens.length = 0;
            this.setImageSrc(pais);

            if (pais) {
                this.pais = pais;
                this.loading = true;
                this._sinteseService.getSintese(pais.sigla).subscribe((resultados: any) => {
                    this.itens.push(...resultados);
                    this.loading = false;
					this.temDados = this.itens.length > 0 && this.itens.some(item => {
                        return item && item.valor;
                    });
                    this._changeDetector.detectChanges();
                });
            } else {
                this.pais = null;
                this.itens = [];
                this.loading = false;
                this.temDados = false;
                this._changeDetector.detectChanges();
            }

        });
    }

    ngOnDestroy() {
        this._changeDetector.detach();
        Object.keys(this._subscriptions).forEach(key => this._subscriptions[key].unsubscribe());
    }

    setImageSrc(pais: Pais | null) {
        if (pais) {
            this.imageSrc = 'img/bandeiras/' + pais.sigla.toUpperCase() + '.gif';
        } else {
            this.imageSrc = '';
        }
    }
}
