import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {

    @Input() tema: any;

    graficoAtual = 0;

    setGrafico(event: any){
        this.graficoAtual = event.target.selectedIndex;
    }

    getUnidade(unidade: any){
        let valor = "";
        if(unidade){
            if(unidade.identificador){
                valor = unidade.identificador
            }
            if(unidade.multiplicador && unidade.multiplicador != "" && unidade.multiplicador != "1"){
                valor += " x " + unidade.multiplicador;
            }
        }
        return valor;
    }

}
