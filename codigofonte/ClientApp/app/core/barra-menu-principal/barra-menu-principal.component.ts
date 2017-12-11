import { Component } from '@angular/core';

import {BuscaService} from '../../services/busca.service';

@Component({
    selector: 'barra-menu-principal',
    templateUrl: './barra-menu-principal.component.html',
    styleUrls: ['./barra-menu-principal.component.css'],
    host: {
        'class': 'main-layer'
    }
})
export class BarraMenuPrincipalComponent {
    
    lang = "pt";

    resultados:Array<any> = [];

    mostraMenu = false;

    constructor(private _buscaService:BuscaService){}

    busca(event:any){
        this.resultados = this._buscaService.search(event.target.value, this.lang);
    }

    limpaResultados(){
        this.resultados = [];
    }

    navegarPara(event:any){
        console.log(event);
    }

}
