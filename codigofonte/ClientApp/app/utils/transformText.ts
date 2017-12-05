/*
    Transforma o texto passado via argumento, removendo acentos e convertendo os espaços em '-'.
*/
export function transformText(text:string):string{
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