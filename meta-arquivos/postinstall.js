// how to change colors in console
// https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color
const fs = require('fs');
const path = require('path');

const file = path.resolve(__dirname, 'node_modules/request-promise-native/lib/rp.js');

fs.readFile(file, (err, data) => {
  if (err) { console.log(err); return false; }

  let content = data.toString();
  content = content.replace("return require('request')", "return require('postman-request')");

  fs.writeFile(file, content, (err) => {
    if (err) { console.log(err); return false; }
    console.log(
      "npm",
      "\x1b[43m\x1b[30m",
      "WARN",
      "\x1b[0m\x1b[31m",
      "Esse projeto usa o módulo postman-request, um fork do módulo request.\n" +
      "Para garantir seu correto funcionamento, foi necessário modificar o arquivo: \n" +
      "node_modules/request-promise-native/lib/rp.js \n" +
      "alterando a linha 7, na qual declara-se a variável request, para: \n" +
      "var request = stealthyRequire(require.cache, function () {\n" +
      "  return require('postman-request');\n" +
      "},\n" +
      "Essa alteração FOI FEITA AUTOMATICAMENTE!"
    );
  })
});
