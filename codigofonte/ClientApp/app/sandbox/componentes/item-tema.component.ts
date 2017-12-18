import { ListaComponent } from './lista.component';
import { TabelaComponent } from './tabela.component';
import { ItemTemaDirective } from './item-tema.host';
import { RetornoPesquisa } from '../../shared/pesquisas.service';
import { AfterViewInit, Component, ComponentFactoryResolver, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MetadataResultado, Resultado } from '../../shared/resultado.model';

export interface ItemTema {
    resultados: Resultado[];
    metadata: { [metadataId: number]: MetadataResultado };
}

@Component({
    selector: 'ibge-item-tema',
    template: `
        <ng-template ibge-item-tema-host></ng-template>
    `
})

export class ItemTemaComponent implements OnInit {

    @ViewChild(ItemTemaDirective) itemTema: ItemTemaDirective;

    public model: any;

    @Input() config: any;
    @Input() resultado: RetornoPesquisa

    constructor(
        private _componentFactoryResolver: ComponentFactoryResolver
    ) { }

    ngOnInit() {
    }
    
    public ngOnChanges(changes: SimpleChanges): void {
        if(changes.resultado) {
            this.atualizaTema();
        }
    }

    atualizaTema() {
        let metadataPorId: any = {};
        this.resultado.metadata.forEach((metadata) => {
            metadataPorId[metadata.id] = metadata;
        });
        let componentFactory = this._componentFactoryResolver.resolveComponentFactory(this.getComponentType());
        let viewContainerRef = this.itemTema.viewContainerRef;
        viewContainerRef.clear();

        let componentRef = viewContainerRef.createComponent(componentFactory);
        (componentRef.instance as ItemTema).resultados = this.resultado.resultados;
        (componentRef.instance as ItemTema).metadata = metadataPorId;
    }

    getComponentType() {
        switch(this.config.componente) {
            case "tabela":
                return TabelaComponent;
            case "lista":
                return ListaComponent;
            default:
                return TabelaComponent;
        }
    }
}