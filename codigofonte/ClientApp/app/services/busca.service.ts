import { Injectable } from '@angular/core';

@Injectable()
export class BuscaService {

    constructor() { }

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
        Encontra um local no array de locais.
        Usado internamente.
    */
    private findPlaces(transformedText:string, places:Array<any>){
        var i;
        var placesFound = [];
        var textWords = transformedText.split('-');
        //find by place code
        for(i = 0; i < textWords.length; i++){
            if(!isNaN(parseFloat(textWords[i]))){
                var num = textWords[i];
                for(var j = 0; j < places.length; j++){
                    if(places[j].codigo.toString().indexOf(num) == 0 && placesFound.indexOf(places[j]) < 0){
                        placesFound.push(places[j]);
                    }
                }
            }
        }
        //find exactly places
        for(i = 0; i < places.length; i++){
            if(placesFound.indexOf(places[i]) >= 0) continue; //dont push twice
            var index = transformedText.indexOf(places[i].slug);
            var length = places[i].slug.length;
            if((index == 0 || transformedText.charAt(index - 1) == '-') && 
                (index + length == transformedText.length || transformedText.charAt(index + length) == '-')) //match whole word
                placesFound.push(places[i]);
        }
        //big matches first
        placesFound.sort(function(a, b){return (b.slug.split('-').length * b.slug.length) - (a.slug.split('-').length * a.slug.length)});
        //suggest a place (pick last 4, 3, 2 and 1 words and try to match to a place)
        var words4, words3, words2, words1;
        var sug4 = [], sug3 = [], sug2 = [], sug1 = [];
        if(textWords.length >= 4) words4 = textWords[textWords.length - 4] + '-' + textWords[textWords.length - 3] + '-' + textWords[textWords.length - 2] + '-' + textWords[textWords.length - 1];
        if(textWords.length >= 3) words3 = textWords[textWords.length - 3] + '-' + textWords[textWords.length - 2] + '-' + textWords[textWords.length - 1];
        if(textWords.length >= 2) words2 = textWords[textWords.length - 2] + '-' + textWords[textWords.length - 1];
        if(textWords.length >= 1 && textWords[textWords.length - 1].length >= 3) words1 = textWords[textWords.length - 1];
        for(i = 0; i < places.length; i++){
            if(placesFound.indexOf(places[i]) >= 0) continue; //dont push twice
            if(words4 && places[i].slug.indexOf(words4) == 0)
                sug4.push(places[i]);
            else if(words3 && places[i].slug.indexOf(words3) == 0)
                sug3.push(places[i]);
            else if(words2 && places[i].slug.indexOf(words2) == 0)
                sug2.push(places[i]);
            else if(words1 && places[i].slug.indexOf(words1) == 0)
                sug1.push(places[i]);
        }
        //pick suggetions that matches the biggest names only (the best matches)
        if(sug4.length) placesFound = placesFound.concat(sug4);
        else if(sug3.length) placesFound = placesFound.concat(sug3);
        else if(sug2.length) placesFound = placesFound.concat(sug2);
        else if(sug1.length) placesFound = placesFound.concat(sug1);
        //result
        return placesFound;
    }
    
}