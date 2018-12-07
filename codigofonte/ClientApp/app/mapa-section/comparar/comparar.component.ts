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
    pais:any;
    paisesRemovidos:any = [];
    paisesSelecionados:any = [];
    lang:string;
    resultados:any = {};

    indicador = 0;
    categoria = 0;

    mostrarListaPaises = false;

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
        
        this.paises = this._localidadeService.getAllPaises().filter(pais => pais.onu).sort((a:any, b:any) => { //lista países em ordem alfabética
            return a.nome[this.lang].localeCompare(b.nome[this.lang]);
        });
    }

    ngOnInit() {
        /*seleciona o pais que veio string da url*/
        //let sigla = this._route.snapshot.queryParams['pais'];
        let url = this._route.snapshot.url;
        let slug = url[url.length - 1].path;
        if(slug){
            for(let i = 0; i < this.paises.length; i++){
                if(this.paises[i].slug == slug){
                    this.paisesSelecionados[i] = true;
                    this.pais = this.paises[i];
                    break;
                }
            }
        }

        /*seta o indicador que veio na querystring da url*/
        let indicador = this._route.snapshot.queryParams['indicador'];
        if(indicador){
            this.indicador = indicador;
        }

        this.update();
    }

    update(){
        //coletas as siglas dos países selecionados
        let siglas = [];
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

                //seta a categoria (saude, economia, populacao...)
                this.setCategoriaIndicador(this.indicador);

                this._changeDetector.detectChanges();
            });
        }
    }

    filtrarPaises(event:any){
        for(let i = 0; i < this.paises.length; i++){
            if(transformText(this.paises[i].nome[this.lang]).indexOf(transformText(event.srcElement.value)) >= 0)
                this.paisesRemovidos[i] = false;
            else
                this.paisesRemovidos[i] = true;
        }
    }

    //dados das combobox

    /*getTitulos(){
         let result:any = [];

         if(this.resultados && this.resultados.metadata){
            let metadata:any = this.resultados['metadata'];
            let prefix:any = {};
            for(let i = 0; i < metadata.length; i++){
                if(metadata[i].posicao.split('.').length == 1){
                    prefix[metadata[i].posicao] = metadata[i].indicador;
                }else{
                    if(metadata[i].posicao.split('.')[0] == '1') continue; //1 é a sintese, ignorar...
                    metadata[i].titulo = prefix[metadata[i].posicao.split('.')[0]] + ' - ' + metadata[i].indicador;
                    result.push(metadata[i]);
                    //console.log(metadata[i]);

                    //valor default para indicador
                    if(this.indicador == 0){
                        this.indicador = metadata[i].id;
                    }
                }
            }
            //ordena os itens em ordem alfabetica baseando-se no título
            result.sort(function(a:any, b:any){
                return a.titulo.localeCompare(b.titulo);
            });
        }

        //console.log(result);
        return result;
    }*/

    setCategoriaIndicador(indicador:any){
        if(this.categoria == 0 && this.resultados && this.resultados.metadata){
            let metadata:any = this.resultados['metadata'];
            for(let i = 0; i < metadata.length; i++){
                if(metadata[i].id == indicador){
                    this.categoria = metadata[i].posicao.split('.')[0];
                }
            }
        }
    }

    getTitulo(){
        let result:any = [];

         if(this.resultados && this.resultados.metadata){
            let metadata:any = this.resultados['metadata'];
            let prefix:any = {};
            for(let i = 0; i < metadata.length; i++){
                let posicao = metadata[i].posicao.split('.');
                if(posicao[0] == '1') continue; //1 é a sintese, ignorar...
                if(posicao.length == 1){
                    result.push(metadata[i]);

                    /*valor default para indicador*/
                    if(this.categoria == 0){
                        this.categoria = posicao[0];
                    }
                }
            }
            //ordena os itens em ordem alfabetica baseando-se no título
            /*result.sort(function(a:any, b:any){
                return a.indicador.localeCompare(b.indicador);
            });*/
        }

        //console.log(result);
        return result;
    }

    getSubtitulo(){
        let result:any = [];

        if(this.resultados && this.resultados.metadata){
            let metadata:any = this.resultados['metadata'];
            for(let i = 0; i < metadata.length; i++){
                let posicao = metadata[i].posicao.split('.');
                if(posicao.length > 1){
                    if(posicao[0] == '1') continue; //1 é a sintese, ignorar...
                    if(posicao[0] != this.categoria) continue;
                    result.push(metadata[i]);
                    //console.log(metadata[i]);

                    /*valor default para indicador*/
                    if(this.indicador == 0){
                        this.indicador = metadata[i].id;
                    }
                }
            }
            //ordena os itens em ordem alfabetica baseando-se no título
            /*result.sort(function(a:any, b:any){
                return a.indicador.localeCompare(b.indicador);
            });*/
        }

        //console.log(result);
        return result;
    }

    setTitulo(event:any){
        let index = event.target.selectedIndex;
        let titulos = this.getTitulo();
        if(titulos && titulos.length > index){
            this.categoria = titulos[index].posicao.split('.')[0];
            this.indicador = 0;
        }
    }

    setSubtitulo(event:any){
        let index = event.target.selectedIndex;
        let subtitulos = this.getSubtitulo();
        if(subtitulos && subtitulos.length > index){
            this.indicador = subtitulos[index].id;
        }
    }

    getUnidade(){
        let subtitulos = this.getSubtitulo();
        for(let i = 0; i < subtitulos.length; i++){
            if(subtitulos[i].id == this.indicador){
                let unidade = subtitulos[i].unidade;
                if(unidade && unidade.multiplicador == 1)
                    return unidade.identificador;
                else
                    return unidade.identificador + ' x ' + unidade.multiplicador;
            }
        }
        return '';
    }

    //dados para o gráfico

    getPeriodos(){
        let result:Array<any> = [];
        if(this.resultados && this.resultados.metadata && this.resultados.resultados, this.resultados.resultados.length > 0){
            for(let i = 0; i < this.resultados.resultados.length; i++){
                if(this.resultados.resultados[i].id == this.indicador){
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
        if(this.resultados && this.resultados.metadata && this.resultados.resultados){
            //deixa as linhas do gráfico em ordem alfabética de siglas
            this.resultados.resultados.sort( (a: any, b: any) => {
               return a['localidade'].localeCompare(b['localidade']);
            });
            //encontra os resultados desejados
            for(let i = 0; i < this.resultados.resultados.length; i++){
                if(this.resultados.resultados[i].id == this.indicador){
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
        if(this.resultados && this.resultados.metadata && this.resultados.resultados){
            //deixa as linhas do gráfico em ordem alfabética de siglas
            this.resultados.resultados.sort( (a: any, b: any) => {
               return a['localidade'].localeCompare(b['localidade']);
            });
            //encontra os resultados desejados
            for(let i = 0; i < this.resultados.resultados.length; i++){
                if(this.resultados.resultados[i].id == this.indicador){
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