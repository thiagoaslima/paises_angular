import { Injectable } from '@angular/core';

import { PAISES } from '../metadados/paises'

@Injectable()
export class BuscaService {

    MAX_RESULTS = 6;
    MIN_WORD_SIZE = 3;

    constructor() {}

    /*
        Transforma o texto passado via argumento, removendo acentos e convertendo os espaços em '-'.
        É necessária tal transformação para comparar os textos de maneira menos rígida.
        Usado internamente.
    */
    private transformText(text:string):string{
        var a = "áàãâä";
        var e = "éèêë";
        var i = "íìîï";
        var o = "óòõôö";
        var u = "úùûü";
        var newText = "";
        text = text.toLowerCase().trim();
        for(var k = 0; k < text.length; k++){
            var c = text.charAt(k);
            if((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')){
                newText += c;
            }else{
                if(c == ' ' && k - 1 >= 0 && text.charAt(k - 1) == ' ') continue; //ignora espaços consecutivos
                else if(c == ' ') newText += '-';
                else if(c == 'ç') newText += 'c';
                else if(a.indexOf(c) >= 0) newText += 'a';
                else if(e.indexOf(c) >= 0) newText += 'e';
                else if(i.indexOf(c) >= 0) newText += 'i';
                else if(o.indexOf(c) >= 0) newText += 'o';
                else if(u.indexOf(c) >= 0) newText += 'u';
            }
        }
        return newText;
    }

    /*
        Método público de busca.
    */
    public search(text:string, lang="pt"){
        var i;
        var placesFound = [];
        var transformedText = this.transformText(text); 
        var textWords = transformedText.split('-');
        var places = PAISES;
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
            var slug = this.transformText((<any>places[i].nome)[lang]);
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
            var slug = this.transformText((<any>places[i].nome)[lang]);
            if(placesFound.indexOf(places[i]) >= 0) continue; //não inclui duas vezes o mesmo local no array de locais encontrados
            if(words4 && slug.indexOf(words4) == 0){
                sug4.push(places[i]);
            }else if(words3 && slug.indexOf(words3) == 0){
                sug3.push(places[i]);
            }else if(words2 && slug.indexOf(words2) == 0){
                sug2.push(places[i]);
            }else if(words1 && slug.indexOf(words1) == 0){
                sug1.push(places[i]);
            }
        }
        //usa somente as sugestões com mais palavras (melhores)
        if(sug4.length) placesFound = placesFound.concat(sug4);
        else if(sug3.length) placesFound = placesFound.concat(sug3);
        else if(sug2.length) placesFound = placesFound.concat(sug2);
        else if(sug1.length) placesFound = placesFound.concat(sug1);
        //encontra o local via sigla
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
        //encontra o local via sigla3
        for(i = 0; i < textWords.length; i++){
            if(textWords[i].length >= 2 && textWords[i].length <= 3){
                for(var j = 0; j < places.length; j++){
                    if(placesFound.indexOf(places[j]) >= 0) continue; //não inclui duas vezes o mesmo local no array de locais encontrados
                    if(places[j].sigla3.indexOf(textWords[i].toUpperCase()) == 0){
                        placesFound.push(places[j]);
                    }
                }
            }
        }
        //remove resultados excessivos
        if(places.length > this.MAX_RESULTS)
            places = places.slice(0, this.MAX_RESULTS);
        return placesFound;
    }
    
}