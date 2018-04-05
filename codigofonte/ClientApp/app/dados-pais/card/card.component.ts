import { Component, Input } from '@angular/core';

@Component({
    selector: 'card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
})

export class CardComponent {

    @Input() tema: any;

    @Input() pais: any;

    graficoAtual = 0;

    cardAberto = false;
    mostrarTabela = false;

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
                valor += " × " + unidade.multiplicador;
            }
        }
        return valor;
    }

    getTextoFonte(fonte:any){
        if(fonte){
            return fonte.split('Disponível em:')[0];
        }
        return '';
    }

    getLinkFonte(fonte:any){
        if(fonte){
            let link = fonte.split('Disponível em:')[1].split('Acesso em:')[0].replace('<', '').replace('>.', '').trim();
            return link;
        }
        return '';
    }

}
