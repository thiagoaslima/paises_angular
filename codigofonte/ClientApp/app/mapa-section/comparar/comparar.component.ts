import { Component, Injectable, Optional, PLATFORM_ID, Input, Inject, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

import { LocalidadeService } from "../../shared/localidade";
import { TraducaoService } from "../../shared";
import { PaisesService } from "../../shared/paises-service";

import {transformText} from "../../../utils/transformText";

@Component({
    selector: 'paises-comparar',
    templateUrl: './comparar.component.html',
    styleUrls: ['./comparar.component.css']
})
export class CompararComponent {

    private isBrowser: boolean;

    paises:any = [];
    paisesRemovidos:any = [];
    paisesSelecionados:any = [];
    lang:string;
    resultados:any = {};
    tituloAtual = 0;
    subtituloAtual = 0;
    legenda:any = [];

    queryParams:any = {};

    constructor(
        private _localidadeService: LocalidadeService,
        private _traducaoService: TraducaoService,
        private _paisesService: PaisesService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _changeDetector: ChangeDetectorRef,
        @Inject(PLATFORM_ID) platformId: any
    ){
        this.isBrowser = isPlatformBrowser(platformId);

        this.lang = this._traducaoService.lang;
        
        this.paises = this._localidadeService.getAllPaises().sort((a:any, b:any) => { //lista países em ordem alfabética
            return a.nome[this.lang].localeCompare(b.nome[this.lang]);
        });
    }

    ngOnInit() {
        this.update();
    }

    update(){
        /*
            TODO:
            -pegar o país e o indicador da query string para colocar um valor inicial no gráfico (depois reativar o botão de comparação dos cards)
            -versão mobile
        */

        let siglas = this._route.snapshot.queryParams['paises'];
        if(siglas){
            siglas = siglas.split(',');
        }else{
            siglas = [];
        }

        if(siglas.length > 5) siglas = siglas.slice(0, 5);

        //console.log(siglas);

        //coletas as siglas dos países selecionados
        //let siglas = [];
        for(let i = 0; i < this.paisesSelecionados.length; i++){
            if(this.paisesSelecionados[i] == true && siglas.indexOf(this.paises[i].sigla) < 0){
                siglas.push(this.paises[i].sigla);
            }
        }

        //reset
        this.resultados['resultados'] = [];
        
        //chama o servigo de dados para os paises selecionados
        for(let i = 0; i < siglas.length; i++){
            this._paisesService.getTodosDados(siglas[i]).subscribe(resultados => {
                this.resultados['metadata'] = resultados['metadata'];
                //push once
                for(let i = 0; i < this.resultados['resultados'].length; i++)
                    if(this.resultados['resultados'][i].localidade == resultados['resultados'][0].localidade)
                        return;
                this.resultados['resultados'] = this.resultados['resultados'].concat(resultados['resultados']);
                
                //console.log(this.resultados);

                this._changeDetector.detectChanges();
            });
        }
    }

    /*getURL(sigla:any){
        let path = '';
        let paises:any = this._route.snapshot.queryParams['paises'];
        if(paises){
            paises = paises.split(',');
            let index = paises.indexOf(sigla);
            if(index < 0)
                paises.push(sigla);
            else
                paises.splice(index, 1);
            return {paises: paises.join(',')};
        }else{
            return {paises: sigla};
        }
    }*/

    filtrarPaises(event:any){
        for(let i = 0; i < this.paises.length; i++){
            if(transformText(this.paises[i].nome[this.lang]).indexOf(transformText(event.srcElement.value)) >= 0)
                this.paisesRemovidos[i] = false;
            else
                this.paisesRemovidos[i] = true;
        }
    }

    //dados das combobox

    getTitulos(){
         let result:any = [];

         if(this.resultados && this.resultados.metadata){
            let metadata:any = this.resultados['metadata'];
            let prefix:any = {};
            for(let i = 0; i < metadata.length; i++){
                if(metadata[i].posicao.split('.').length == 1){
                    prefix[metadata[i].posicao] = metadata[i].indicador;
                }else{
                    if(metadata[i].posicao.split('.')[0] == '1') continue;
                    result.push(metadata[i]); //TODO: modificar o titulo concatenando com o titulo do indicador pai (ex.: economia, educação...)
                    //console.log(metadata[i]);
                }
            }
        }

        /*if(this.resultados && this.resultados.metadata){
            for(let i = 0; i < this.resultados.metadata.length; i++){
                let posicaoArray = this.resultados.metadata[i].posicao.split('.');
                if(posicaoArray.length == 1 &&
                    posicaoArray[0] != '1'){ //ignora a posição 1 que é a sintese
                    result.push(this.resultados.metadata[i]);
                }
            }
        }*/

        //console.log(result);
        return result;
    }

    /*getSubtitulos(titulo:number){
         let result = [];
         if(this.resultados && this.resultados.metadata){
            let titulos = this.getTitulos();
            if(titulos.length > titulo){
                for(let i = 0; i < this.resultados.metadata.length; i++){
                    let posicaoArray = this.resultados.metadata[i].posicao.split('.');
                    if(posicaoArray.length > 1 && posicaoArray[0] == titulos[titulo].posicao){
                        result.push(this.resultados.metadata[i]);
                    }
                }
            }
        }
        return result;
    }*/

    getId(){
        /*let subtitulos = this.getSubtitulos(this.tituloAtual);
        if(subtitulos && subtitulos.length > this.subtituloAtual){
            return subtitulos[this.subtituloAtual].id;
        }*/

        let titulos = this.getTitulos();
        if(titulos && titulos.length > this.tituloAtual){
            return titulos[this.tituloAtual].id;
        }
        return 0;
    }

    getUnidade(){
        /*let subtitulos = this.getSubtitulos(this.tituloAtual);
        if(subtitulos && subtitulos.length > this.subtituloAtual){
            let unidade = subtitulos[this.subtituloAtual].unidade;
            if(unidade && unidade.multiplicador == 1)
                return unidade.identificador;
            else
                return unidade.identificador + ' x ' + unidade.multiplicador;
        }*/

        let titulos = this.getTitulos();
        if(titulos && titulos.length > this.tituloAtual){
            let unidade = titulos[this.tituloAtual].unidade;
            if(unidade && unidade.multiplicador == 1)
                return unidade.identificador;
            else
                return unidade.identificador + ' x ' + unidade.multiplicador;
        }
        return '';
    }

    setTitulo(event:any){
        this.tituloAtual = event.target.selectedIndex;
        this.subtituloAtual = 0;
    }

    /*setSubtitulo(event:any){
        this.subtituloAtual = event.target.selectedIndex;
    }*/

    //dados para o gráfico

    getPeriodos(){
        let result:Array<any> = [];
        if(this.resultados && this.resultados.metadata && this.resultados.resultados, this.resultados.resultados.length > 0){
            let id = this.getId();
            for(let i = 0; i < this.resultados.resultados.length; i++){
                if(this.resultados.resultados[i].id == id){
                    return this.resultados.resultados[i].periodos.slice(-5);
                }
            }
        }
        return result;
    }

    numPaisesSelecionados(){
        let num = 0;
        for(let i = 0; i < this.paisesSelecionados.length; i++){
            if(this.paisesSelecionados[i] == true){
                num += 1;
            }
        }
        return num;
    }

    getLegenda(){
        let result:Array<any> = [];
        this.legenda = [];
        if(this.resultados && this.resultados.metadata && this.resultados.resultados){
            //deixa as linhas do gráfico em ordem alfabética de siglas
            this.resultados.resultados.sort( (a: any, b: any) => {
               return a['localidade'].localeCompare(b['localidade']);
            });
            //encontra os resultados desejados
            let id = this.getId();
            for(let i = 0; i < this.resultados.resultados.length; i++){
                if(this.resultados.resultados[i].id == id){
                    let localidade:any = this._localidadeService.getPaisBySigla(this.resultados.resultados[i].localidade);
                    let nome:any = localidade ? localidade.nome[this.lang] : "";
                    result.push(nome);
                }
            }
        }
        //console.log(result);
        return result;
    }

    getValores(){
        let result:Array<any> = [];
        this.legenda = [];
        if(this.resultados && this.resultados.metadata && this.resultados.resultados){
            //deixa as linhas do gráfico em ordem alfabética de siglas
            this.resultados.resultados.sort( (a: any, b: any) => {
               return a['localidade'].localeCompare(b['localidade']);
            });
            //encontra os resultados desejados
            let id = this.getId();
            for(let i = 0; i < this.resultados.resultados.length; i++){
                if(this.resultados.resultados[i].id == id){
                    result.push(this.resultados.resultados[i].valores.slice(-5));
                }
            }
        }
        //trata valores inválidos para os gráficos
        for(let i = 0; i < result.length; i++){
            for(let j = 0; j < result[i].length; j++){
                if("99999999999999 99999999999998 99999999999997 99999999999996 99999999999995 99999999999992 99999999999991".indexOf(result[i][j].toString()) >= 0)
                    result[i][j] = null; //null será ignorado no gráfico
            }
        }
        //console.log(result);
        return result;
    }

}