// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error#Tipos_de_erro_customizados
function AllOldDataError(message) {
    this.name = 'OldData';
    this.message = message || 'Não há dados novos a serem coletados';
    this.stack = (new Error()).stack;
}
AllOldDataError.prototype = Object.create(AllOldDataError.prototype);
AllOldDataError.prototype.constructor = AllOldDataError;

module.exports = AllOldDataError;