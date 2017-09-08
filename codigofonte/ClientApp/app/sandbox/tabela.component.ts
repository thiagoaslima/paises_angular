import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { MetadataResultado, Resultado } from '../services/resultado.model';
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
    selector: 'ibge-tabela',
    template: `
    <table>
        <tr>
            <td>Id</td>
            <td>Valor</td>
            <td>Período</td>
            <td>Metadata</td>
        </tr>
        <tr *ngFor="let resultado of resultados">
            <td>{{ resultado.id }}</td>
            <td>{{ resultado.valor }}</td>
            <td>{{ resultado.periodo }}</td>
            <td>{{ metadataPorId[resultado.id] | json }}</td>
        </tr>
    </table>
    `,
    styles: [
        `
            td { padding: 0.5em; }
        `
    ]
})

export class TabelaComponent implements OnInit, OnChanges {
    @Input() resultados: Resultado[];
    @Input() metadata: MetadataResultado[];

    public metadataPorId: any;
    
    constructor() { }

    ngOnInit() { }


    public ngOnChanges(changes: SimpleChanges): void {
        this.metadataPorId = {};
        this.metadata.forEach((metadata) => {
            this.metadataPorId[metadata.id] = metadata;
        });
    }
}