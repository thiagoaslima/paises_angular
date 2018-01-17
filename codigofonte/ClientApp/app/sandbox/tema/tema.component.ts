import { Observable } from 'rxjs/Rx';
import { PaisesService } from '../../shared/paises-service';
import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'ibge-tema',
    template: `
        <ibge-item-tema *ngFor="let item of model.itens" [config]="item.config" [resultado]="item.retorno"></ibge-item-tema>
    `
})

export class TemaComponent implements OnInit, OnChanges {

    public model: any = {
        itens: []
    };

    @Input() config: any[];

    constructor(
        private _paisesServ: PaisesService
    ) { }

    ngOnInit() {
    }
    
    public ngOnChanges(changes: SimpleChanges): void {
        if(changes.config) {
            this.atualizaTema();
        }
    }

    atualizaTema() {
        this.model.itens = [];

        let itens$ = this.config.map((item) => {
            return this._paisesServ.getResultados(item)
        });

        Observable.zip(
            ...itens$
        ).subscribe((retornos) => {
            retornos.forEach((retorno, index) => {
                this.model.itens.push({
                    config: this.config[index],
                    retorno: retorno
                });
            });
        });
    }
}