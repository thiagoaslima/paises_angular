import { PaisesService } from '../../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'ibge-tema',
    template: `
        <ibge-tabela *ngIf="model.retorno" [metadata]="model.retorno.metadata" [resultados]="model.retorno.resultados"></ibge-tabela>

        <span>{{ model | json }}</span>
    `
})

export class TemaComponent implements OnInit {

    public model: any;

    constructor(
        private _paisesServ: PaisesService
    ) { }

    ngOnInit() {
        this.model = {};
        this._paisesServ.getResultados(
            {
                servico: "pesquisas",
                identificador: {
                    pesquisaId: "10058",
                    indicadorId: "0",
                    localidadeId: "280030"
                }
            }
        ).subscribe((retorno) => {
            this.model.retorno = retorno;
        });
    }
}