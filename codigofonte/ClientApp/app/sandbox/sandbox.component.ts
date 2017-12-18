import { TraducaoService } from '../shared/traducao.service';
import { PaisesService } from '../shared/paises.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: `
        <h1>{{ traducaoService.L10N.sandbox__sandbox }}</h1>
        <ng-container *ngFor="let tema of model.temas">
            <h2>{{ tema.titulo }}</h2>
            <ibge-tema [config]="tema.config"></ibge-tema>
        </ng-container>
    `
})

export class SandboxComponent implements OnInit {

    public model: any = {
        temas: undefined
    }

    constructor(
        public traducaoService: TraducaoService
    ) { }

    ngOnInit() {
        this.model.temas = [
            {
                titulo: 'Veículos',
                config: [
                    {
                        servico: "pesquisas",
                        identificador: {
                            pesquisaId: "22",
                            indicadorId: "0",
                            localidadeId: "280030"
                        },
                        componente: "lista"
                    }
                ]
            },
            {
                titulo: 'Síntese Municipal',
                config: [
                    {
                        servico: "pesquisas",
                        identificador: {
                            pesquisaId: "10058",
                            indicadorId: "0",
                            localidadeId: "280030"
                        },
                        componente: "lista"
                    },
                    {
                        servico: "pesquisas",
                        identificador: {
                            pesquisaId: "10058",
                            indicadorId: "0",
                            localidadeId: "280030"
                        },
                        componente: "tabela"
                    }
                ]
            }
        ];
    }
}