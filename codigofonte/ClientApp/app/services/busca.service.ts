import { Injectable } from '@angular/core';

import {transformText} from '../utils/transformText';
import { LocalidadeService } from './localidade/localidade.service';

@Injectable()
export class BuscaService {

    MAX_RESULTS = 6;
    MIN_WORD_SIZE = 3;

    constructor(
        private _localidadeService: LocalidadeService
    ) {}

    /*
        Método público de busca.
    */
    public search(text:string, lang="pt"){
        var i;
        var placesFound = [];
        var transformedText = transformText(text); 
        var textWords = transformedText.split('-');
        var places = this._localidadeService.getAllPaises();
        //encontra local via ddi
        for(i = 0; i < textWords.length; i++){
            if(!isNaN(parseFloat(textWords[i]))){
                for(var j = 0; j < places.length; j++){
                    if(placesFound.indexOf(places[j]) >= 0) continue; //não inclui duas vezes o mesmo local no array de locais encontrados
                    if(places[j].ddi.indexOf(textWords[i]) == 0){
                        placesFound.push(places[j]);
                    }
                }
            }
        }
        //encontra local pelo nome exato
        for(i = 0; i < places.length; i++){
            if(placesFound.indexOf(places[i]) >= 0) continue; //não inclui duas vezes o mesmo local no array de locais encontrados
            var slug = transformText((<any>places[i].nome)[lang]);
            var index = transformedText.indexOf(slug);
            var length = slug.length;
            if((index == 0 || transformedText.charAt(index - 1) == '-') && 
                (index + length == transformedText.length || transformedText.charAt(index + length) == '-')){ //match whole word
                placesFound.push(places[i]);
            }
        }
        //sugere um local baseado nas últimas 4, 3, 2 ou 1 palavra(s)
        var words4, words3, words2, words1;
        var sug4 = [], sug3 = [], sug2 = [], sug1 = [];
        if(textWords.length >= 4) words4 = textWords[textWords.length - 4] + '-' + textWords[textWords.length - 3] + '-' + textWords[textWords.length - 2] + '-' + textWords[textWords.length - 1];
        if(textWords.length >= 3) words3 = textWords[textWords.length - 3] + '-' + textWords[textWords.length - 2] + '-' + textWords[textWords.length - 1];
        if(textWords.length >= 2) words2 = textWords[textWords.length - 2] + '-' + textWords[textWords.length - 1];
        if(textWords.length >= 1 && textWords[textWords.length - 1].length >= this.MIN_WORD_SIZE) words1 = textWords[textWords.length - 1];
        for(i = 0; i < places.length; i++){
            var slug = transformText((<any>places[i].nome)[lang]);
            if(placesFound.indexOf(places[i]) >= 0) continue; //não inclui duas vezes o mesmo local no array de locais encontrados
            if(words4 && slug.indexOf(words4) == 0){
                sug4.push(places[i]);
            }else if(words3 && slug.indexOf(words3) == 0){
                sug3.push(places[i]);
            }else if(words2 && slug.indexOf(words2) == 0){
                sug2.push(places[i]);
            }else if(words1){
                var index = slug.indexOf(words1);
                if(index == 0 || slug.charAt(index - 1) == '-') //só considera se encontrou o texto no início da palavra(não no meio)
                    sug1.push(places[i]);
            }
        }
        //usa somente as sugestões com mais palavras (melhores)
        if(sug4.length) placesFound = placesFound.concat(sug4);
        else if(sug3.length) placesFound = placesFound.concat(sug3);
        else if(sug2.length) placesFound = placesFound.concat(sug2);
        else if(sug1.length) placesFound = placesFound.concat(sug1);
        //encontra o local via sigla/sigla3(apenas se não encontrou nada usando o nome)
        /*if(placesFound.length == 0){
            for(i = 0; i < textWords.length; i++){
                if(textWords[i].length == 2){
                    for(var j = 0; j < places.length; j++){
                        if(placesFound.indexOf(places[j]) >= 0) continue; //não inclui duas vezes o mesmo local no array de locais encontrados
                        if(places[j].sigla.indexOf(textWords[i].toUpperCase()) == 0){
                            placesFound.push(places[j]);
                        }
                    }
                }
            }
            for(i = 0; i < textWords.length; i++){
                if(textWords[i].length == 2 || textWords[i].length == 3){
                    for(var j = 0; j < places.length; j++){
                        if(placesFound.indexOf(places[j]) >= 0) continue; //não inclui duas vezes o mesmo local no array de locais encontrados
                        if(places[j].sigla3.indexOf(textWords[i].toUpperCase()) == 0){
                            placesFound.push(places[j]);
                        }
                    }
                }
            }
        }*/
        //remove resultados excessivos
        if(placesFound.length > this.MAX_RESULTS)
            placesFound = placesFound.slice(0, this.MAX_RESULTS);
        return placesFound;
    }
    
}