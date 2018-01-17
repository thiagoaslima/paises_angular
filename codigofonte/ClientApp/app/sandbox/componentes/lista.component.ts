import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { MetadataResultado, Resultado } from '../../shared/paises-service';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ItemTema } from "./item-tema.component";

@Component({
    selector: 'ibge-lista',
    template: `
    <ul>
        <li *ngFor="let resultado of resultados">{{ resultado.valor }} {{ metadata[resultado.id].unidade?.identificador }} - {{ metadata[resultado.id].indicador }}</li>
    </ul>
    `,
    styles: [
        `
            
        `
    ]
})

export class ListaComponent implements ItemTema, OnInit, OnChanges {
    @Input() resultados: Resultado[];
    @Input() metadata: { [metadataId: number]: MetadataResultado };

    constructor() { }

    ngOnInit() { }

    public ngOnChanges(changes: SimpleChanges): void { }

}