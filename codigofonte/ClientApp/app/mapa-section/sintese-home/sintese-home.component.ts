import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { RouterParamsService, LocalidadeService, Pais } from "../../shared";
import { PaisesService } from "../../shared/paises.service";
import { SinteseHomeService } from "./sintese-home.service";
import { ItemTemaComponent } from "../../sandbox/componentes/item-tema.component";

@Component({
    selector: 'sintese-home',
    templateUrl: './sintese-home.component.html',
    styleUrls: ['./sintese-home.component.css'],
    providers: [SinteseHomeService],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SinteseHomeComponent implements OnInit {
    public pais: Pais | null = null;
    public imageSrc = ''
    public itens = <any[]>[];

    constructor(
        private _routerParams: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _sinteseService: SinteseHomeService,
		private cdr: ChangeDetectorRef
    ) { }

    ngOnInit() {
        this._routerParams.params$.subscribe(({ params, url }) => {
            let pais = this._localidadeService.getPaisBySlug(params.pais);
            this.itens.length = 0;
            this.setImageSrc(pais);

            if (pais) {
                this.pais = pais;

                this._sinteseService.getSintese(pais.sigla).subscribe(resultados => {
                    this.itens.push(...resultados);
					this.cdr.detectChanges();
                });
            } else {
                this.pais = null;
				this.cdr.detectChanges();
            }

        });
    }

    setImageSrc(pais: Pais | null) {
        if (pais) {
            this.imageSrc = 'img/bandeiras/' + pais.sigla.toUpperCase() + '.gif';
        } else {
            this.imageSrc = '';
        }
    }
}
