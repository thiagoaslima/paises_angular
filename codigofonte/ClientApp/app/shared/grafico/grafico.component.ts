import { Component, Input } from '@angular/core';
import { ResultadoPipe } from '../resultado.pipe';

@Component({
    selector: 'grafico',
    templateUrl: './grafico.component.html',
    styleUrls: ['./grafico.component.css']
})
export class GraficoComponent {

    LARGURA_GRAFICO = 320;
    ALTURA_GRAFICO = 180;
    POSICAO_EIXO_X = 160
    OFFSET_TOPO = 10; //offset usado no topo para impedir que os pontos de valor máximo sejam clipados
    ALTURA_AREA_DADOS = this.POSICAO_EIXO_X - this.OFFSET_TOPO; //altura da área usada para mostrar os pontos do gráfico
    LARGURA_ROTULO = 28; //largura aproximada dos rótulos do eixo X
    ALTURA_ROTULO = 14; //largura aproximada dos rótulos do eixo X

    valor: any = null;
    metadata: any = null;
    indexSelecionado = -1;

    @Input() rotulosX = [];

    @Input() rotulosY = [];

    @Input() dados = [[]];

    existemDados(){
        return (this.rotulosX && this.rotulosX.length) && 
            (this.rotulosY && this.rotulosY.length) &&
            (this.dados && this.dados.length) &&
            (this.dados[0] && this.dados[0].length);
    }

    //calcula a posição X dos elementos e dos pontos do gráfico, distribuindo e centralizando-os.
    getX(indexX: any, largura: any){
        if(!this.existemDados()) return 0;
        indexX = indexX >= this.rotulosX.length ? this.rotulosX.length - 1 : indexX;
        let parte = this.LARGURA_GRAFICO / this.rotulosX.length;
        return (parte * indexX) + (parte / 2) - (largura / 2);
    }

    //retorna o valor máximo dos dados informados
    getMax(){
        if(!this.existemDados()) return 0;
        let max: number = this.dados[0][0];
        for(let i = 0; i < this.dados.length; i++){
            for(let j = 0; j < this.dados[i].length; j++){
                if(i == 0 && j == 0) max = this.dados[i][j];
                max = Math.max( (<number>max), isNaN(this.dados[i][j]) ? (<number>max) : this.dados[i][j]);
            }
        }
        return max;
    }

    //retorna o valor mínimo dos dados informados
    getMin(): number{
        if(!this.existemDados()) return 0;
        let min: number = this.dados[0][0];
        for(let i = 0; i < this.dados.length; i++){
            for(let j = 0; j < this.dados[i].length; j++){
                if(i == 0 && j == 0) min = this.dados[i][j];
                min = Math.min(min, isNaN(this.dados[i][j]) ? min : this.dados[i][j]);
            }
        }
        if(min > 0) min = 0;
        return min;
    }

    //calcula a posição y dos pontos do gráfico
    getY(indexX: any, indexY: any){
        if(!this.existemDados()) return 0;
        indexX = indexX >= this.dados[indexY].length ? this.dados[indexY].length - 1 : indexX;
        if(!this.dados[indexY][indexX]) return 0;
        return (this.ALTURA_AREA_DADOS) - (((this.dados[indexY][indexX] - this.getMin()) / (this.getMax() - this.getMin())) * this.ALTURA_AREA_DADOS) + this.OFFSET_TOPO;
    }

    //calcula a posição y do ponto mais alto do gráfico (usado para desenhar as linhas guias tracejadas)
    getMaxY(indexX: any){
        if(!this.existemDados()) return 0;
        let max: number = this.dados[0][indexX];
        for(let i = 0; i < this.dados.length; i++){
            if(i == 0) max = this.dados[i][indexX];
            max = Math.max(max, isNaN(this.dados[i][indexX]) ? max : this.dados[i][indexX]);
        }
        return (this.ALTURA_AREA_DADOS) - (((max - this.getMin()) / (this.getMax() - this.getMin())) * this.ALTURA_AREA_DADOS) + this.OFFSET_TOPO;
    }

    valorValido(valor: any){
        if(!this.existemDados() || isNaN(valor) || valor == 0){
            return false;
        }else{
            return true;
        }
    }

    getValor(){
        if(!this.existemDados()) return " ";
        if(this.valor){
            return this.valor;
        }else if(this.dados.length > 0){
            let valor = this.dados[0][this.dados[0].length - 1];
            return valor ? (<any>valor).toString() : " ";
        }
        return " ";
    }

    getMetadata(){
        if(!this.existemDados()) return " ";
        if(this.metadata){
            return this.metadata;
        }else if(this.rotulosY.length > 0){
            return this.rotulosY[0];
        }
        return " ";
    }

    getIndexSelecionado(){
        if(!this.existemDados()) return -1;
        if(this.indexSelecionado > -1){
            return this.indexSelecionado;
        }
        return this.rotulosX.length - 1;
    }

    setaValorMouse(event: any, grafico: any){
        if(!this.existemDados()) return;
        var rect = grafico.getBoundingClientRect();
        var x = event.clientX - rect.left; //x position within the element.
        var y = event.clientY - rect.top;  //y position within the element.

        this.indexSelecionado = Math.floor(x / (rect.width / this.rotulosX.length));
        this.valor = this.dados[0] && this.dados[0][this.indexSelecionado] ? this.dados[0][this.indexSelecionado] : "";
        this.metadata = this.rotulosY.length > 0 ? this.rotulosY[0] : "";
    }

    resetValor(){
        this.valor = null;
        this.metadata = null;
        this.indexSelecionado = -1;
    }

}
