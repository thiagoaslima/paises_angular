// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Error#Tipos_de_erro_customizados
function FolderDoNotExist(message) {
    this.name = 'FolderDoNotExist';
    this.message = message || 'A pasta buscada não existe';
    this.stack = (new Error()).stack;
}
FolderDoNotExist.prototype = Object.create(FolderDoNotExist.prototype);
FolderDoNotExist.prototype.constructor = FolderDoNotExist;

module.exports = { FolderDoNotExist };