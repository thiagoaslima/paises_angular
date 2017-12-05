import { Injectable } from '@angular/core';

import {transformText} from '../utils/transformText';
import { PAISES } from '../metadados/paises'

export class Localidade {
    sigla: string;
    sigla3: string;
    ddi: number;
    continente:string;
    slug: string;

    private nome:any;
    public getNome(lang:string = "pt"){
        return this.nome[lang];
    }

    constructor(data:any = null){
        if(data){
            this.sigla = data.sigla;
            this.sigla3 = data.sigla3;
            this.ddi = data.ddi;
            this.continente = data.continente;
            this.nome = data.nome;
            this.slug = transformText(data.nome['pt']);
        }
    }
}

@Injectable()
export class LocalidadeService {
    
    public getByDDI(ddi:string):Localidade{
        for(let i = 0; i < PAISES.length; i++){
            if(PAISES[i].ddi == ddi)
                return new Localidade(PAISES[i]);
        }
        return new Localidade();
    }

    public getBySigla(sigla:string):Localidade{
        for(let i = 0; i < PAISES.length; i++){
            if(PAISES[i].sigla == sigla)
                return new Localidade(PAISES[i]);
        }
        return new Localidade();
    }

    public getByNome(nome:string){
        for(let i = 0; i < PAISES.length; i++){
            if(PAISES[i].nome['pt'] == nome)
                return new Localidade(PAISES[i]);
        }
        return new Localidade();
    }

    public getBySlug(slug:string){
        for(let i = 0; i < PAISES.length; i++){
            if(transformText(PAISES[i].nome['pt']) == slug)
                return new Localidade(PAISES[i]);
        }
        return new Localidade();
    }

    public getAll(){
        let localidades = [];
        for(let i = 0; i < PAISES.length; i++){
            localidades.push(new Localidade(PAISES[i]));
        }
        return localidades;
    }

}