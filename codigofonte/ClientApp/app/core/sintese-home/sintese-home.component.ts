import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { RouterParamsService, LocalidadeService, Pais } from "../../services";
import { PaisesService } from "../../services/paises.service";
import { SinteseHomeService } from "./sintese-home.service";
import { ItemTemaComponent } from "../../sandbox/componentes/item-tema.component";

@Component({
    selector: 'sintese-home',
    templateUrl: './sintese-home.component.html',
    styleUrls: ['./sintese-home.component.css'],
    providers: [SinteseHomeService]
})
export class SinteseHomeComponent implements OnInit {
    public pais: Pais | null = null;
    public imageSrc = ''
    public itens = <any[]>[];

    constructor(
        private _routerParams: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _sinteseService: SinteseHomeService
    ) { }

    ngOnInit() {
        // this.config = this._sinteseService.getSinteseConfiguration()
        this._routerParams.params$.subscribe(({ params, url }) => {
            let pais = this._localidadeService.getPaisBySlug(params.pais);
            this.setImageSrc(pais);

            if (pais) {
                this.pais = pais;
                this._sinteseService.getSintese(pais.sigla).subscribe(resultados => {
                    this.itens = resultados;
                });
            } else {
                this.pais = null;
                this.itens = [];
            }

        });
    }

    setImageSrc(pais: Pais | null) {
        if (pais) {
            this.imageSrc = 'img/bandeiras/' + pais.slug + '.gif';
        } else {
            this.imageSrc = '';
        }
    }
}
