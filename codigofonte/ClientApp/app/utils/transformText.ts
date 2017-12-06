/*
    Transforma o texto passado via argumento, removendo acentos e convertendo os espaços em '-'.
*/
export function transformText(text: string): string {
    let a = 'áàãâä';
    let e = 'éèêë';
    let i = 'íìîï';
    let o = 'óòõôö';
    let u = 'úùûü';
    let newText = '';
    
    text = text.toLowerCase().trim();
    for (let k = 0; k < text.length; k++) {
        let c = text.charAt(k);

        if ((c >= 'a' && c <= 'z') || (c >= '0' && c <= '9')) {
            newText += c;
        } else {
            // ignora espaços consecutivos
            if (c === ' ' && k - 1 >= 0 && text.charAt(k - 1) === ' ') {
                continue;
            } else if (c === ' ') {
                newText += '-';
            } else if (c === 'ç') {
                newText += 'c';
            } else if (a.indexOf(c) >= 0) {
                newText += 'a';
            } else if (e.indexOf(c) >= 0) {
                newText += 'e';
            } else if (i.indexOf(c) >= 0) {
                newText += 'i';
            } else if (o.indexOf(c) >= 0) {
                newText += 'o';
            } else if (u.indexOf(c) >= 0) {
                newText += 'u';
            }
        }
    }
    return newText;
}
