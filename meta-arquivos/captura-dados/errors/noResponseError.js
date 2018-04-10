// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error#Tipos_de_erro_customizados
function NoResponseError(message) {
    this.name = 'NoResponseError';
    this.message = message || 'Não foi possível obter a resposta da requisição';
    this.stack = (new Error()).stack;
}
NoResponseError.prototype = Object.create(NoResponseError.prototype);
NoResponseError.prototype.constructor = NoResponseError;

module.exports = { NoResponseError };