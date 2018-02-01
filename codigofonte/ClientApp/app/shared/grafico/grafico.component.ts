import { Component, Input } from '@angular/core';

@Component({
    selector: 'grafico',
    templateUrl: './grafico.component.html',
    styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {

    LARGURA_GRAFICO = 320;
    ALTURA_GRAFICO = 240;
    POSICAO_EIXO_X = 220
    OFFSET_TOPO = 10; //offset usado no topo para impedir que os pontos de valor máximo sejam clipados
    ALTURA_AREA_DADOS = this.POSICAO_EIXO_X - this.OFFSET_TOPO; //altura da área usada para mostrar os pontos do gráfico
    LARGURA_ROTULO = 28; //largura aproximada dos rótulos do eixo X
    ALTURA_ROTULO = 14; //largura aproximada dos rótulos do eixo X

    valor: any = null;
    metadata: any = null;

    @Input() rotulosX = [];

    @Input() rotulosY = [];

    @Input() dados = [[]];

    //calcula a posição X dos elementos e dos pontos do gráfico, distribuindo e centralizando-os.
    getX(indexX: any, largura: any){
        indexX = indexX >= this.rotulosX.length ? this.rotulosX.length - 1 : indexX;
        if(indexX < 0) return 0;
        let parte = this.LARGURA_GRAFICO / this.rotulosX.length;
        return (parte * indexX) + (parte / 2) - (largura / 2);
    }

    //retorna o valor máximo dos dados informados
    getMax(){
        let max = 0;
        for(let i = 0; i < this.dados.length; i++){
            for(let j = 0; j < this.dados[i].length; j++){
                max = Math.max(max, this.dados[i][j]);
            }
        }
        return max;
    }

    //calcula a posição y dos pontos do gráfico
    getY(indexX: any, indexY: any){
        indexX = indexX >= this.dados[indexY].length ? this.dados[indexY].length - 1 : indexX;
        if(indexX < 0) return 0;
        return (this.ALTURA_AREA_DADOS) - ((this.dados[indexY][indexX] / this.getMax()) * this.ALTURA_AREA_DADOS) + this.OFFSET_TOPO;
    }

    //calcula a posição y do ponto mais alto do gráfico (usado para desenhar as linhas guias tracejadas)
    getMaxY(indexX: any){
        let max = 0;
        for(let i = 0; i < this.dados.length; i++){
            max = Math.max(max, this.dados[i][indexX]);
        }
        return (this.ALTURA_AREA_DADOS) - ((max / this.getMax()) * this.ALTURA_AREA_DADOS) + this.OFFSET_TOPO;
    }

    getValor(){
        if(this.valor){
            return this.valor;
        }else if(this.dados.length == 1){
            return (<any>this.dados[0][this.dados[0].length - 1]).toString();
        }
        return " ";
    }

    getMetadata(){
        if(this.metadata){
            return this.metadata;
        }else if(this.dados.length == 1){
            return this.rotulosY[0] + " (" + this.rotulosX[this.rotulosX.length - 1] + ")";
        }
        return " ";
    }

    mostraValor(indexX: any, indexY: any){
        this.valor = (<any>this.dados[indexY][indexX]).toString();
        this.metadata = this.rotulosY[indexY] + " (" + this.rotulosX[indexX] + ")";
    }

    escondeValor(){
        this.valor = null;
        this.metadata = null;
    }

}
