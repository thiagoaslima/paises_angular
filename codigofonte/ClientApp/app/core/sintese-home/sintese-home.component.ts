import { Component, OnInit } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';

import { RouterParamsService, LocalidadeService, Pais } from "../../services";
import { PaisesService } from "../../services/paises.service";

@Component({
    selector: 'sintese-home',
    templateUrl: './sintese-home.component.html',
    styleUrls: ['./sintese-home.component.css']
})
export class SinteseHomeComponent implements OnInit {
    public sintese = [];

    constructor(
        private _routerParams: RouterParamsService,
        private _localidadeService: LocalidadeService,
        private _paisService: PaisesService
    ) {}

    ngOnInit() {
        this._routerParams.params$.subscribe(({ params, url }) => {
            if (params.pais) {
                this.getSintese(this._localidadeService.getPaisBySlug(params.pais));
            }
        })
    }

    getSintese(pais: Pais | null) {
        if (pais) {
            this._paisService
                .getResultados({ 
                    servico: 'pesquisas', 
                    identificador: { 
                        pesquisaId: "10071", 
                        indicadorId: "1", 
                        localidadeId: pais.sigla 
                    } 
                }).subscribe(resultados => console.log(resultados));

        } else {
            this.sintese = [];
        }
    }
}
