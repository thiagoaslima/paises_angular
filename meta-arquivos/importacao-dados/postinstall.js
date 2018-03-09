// how to change colors in console
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color

console.log(
    "npm",
    "\x1b[43m\x1b[30m",
    "WARN",
    "\x1b[0m\x1b[31m",
    "Esse projeto usa o módulo postman-request, um fork do módulo request.\n" + 
    "Para garantir seu correto funcionamento, é necessário modificar o arquivo: \n" +
    "node_modules/request-promise-native/lib/rp.js \n" +
    "alterando a linha 7, na qual declara-se a variável request, para: \n" +
    "var request = stealthyRequire(require.cache, function () {\n" +
    "  return require('postman-request');\n"+
    "},"
  );