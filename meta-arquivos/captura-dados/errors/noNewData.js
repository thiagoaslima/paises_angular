// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error#Tipos_de_erro_customizados
function NoNewData(message) {
    this.name = 'NoNewData';
    this.message = message || 'Não há dados novos a serem coletados';
    this.stack = (new Error()).stack;
}
NoNewData.prototype = Object.create(NoNewData.prototype);
NoNewData.prototype.constructor = NoNewData;

module.exports = { NoNewData };