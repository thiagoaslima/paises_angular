import { Component } from '@angular/core';

import { BuscaService, TraducaoService } from '../../shared';

@Component({
    selector: 'barra-menu-principal',
    templateUrl: './barra-menu-principal.component.html',
    styleUrls: ['./barra-menu-principal.component.css'],
    host: {
        'class': 'main-layer'
    }
})
export class BarraMenuPrincipalComponent {

    resultados: Array<any> = [];

    mostraMenu = false;

    constructor(private _buscaService: BuscaService, private _traducaoService:TraducaoService) { }

    busca(event: any) {
        this.resultados = this._buscaService.search(event.target.value, this.lang);
    }

    limpaResultados() {
        this.resultados = [];
    }

    navegarPara(event: any) {
        // console.log(event);
    }

    public set lang(value: string){
        this._traducaoService.lang = value;
    }

    public get lang(){
        return this._traducaoService.lang;
    }

}
