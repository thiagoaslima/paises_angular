import { ItemTema } from './item-tema.component';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { MetadataResultado, Resultado } from '../../shared/resultado.model';
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
            <td>{{ metadata[resultado.id] | json }}</td>
        </tr>
    </table>
    `,
    styles: [
        `
            td { padding: 0.5em; }
        `
    ]
})

export class TabelaComponent implements ItemTema, OnInit, OnChanges {
    @Input() resultados: Resultado[];
    @Input() metadata: { [metadataId: number]: MetadataResultado };

    constructor() { }

    ngOnInit() { }


    public ngOnChanges(changes: SimpleChanges): void { }
    
}