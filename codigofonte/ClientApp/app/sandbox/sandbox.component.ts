import { PaisesService } from '../services/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: `
        <span>{{ model | json }}</span>
        <ibge-tabela *ngIf="model.retorno" [metadata]="model.retorno.metadata" [resultados]="model.retorno.resultados"></ibge-tabela>
    `
})

export class SandboxComponent implements OnInit {

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