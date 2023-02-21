const path = require("path");

// nome do arquivo atual
console.log(path.basename(__filename));

// Nome do Diretório atual

console.log(path.dirname(__filename));

// extenção do arqivo

console.log(path.extname(__filename));

// Objeto path

console.log(path.parse(__filename));

// Juntar caminhos do arquivo

console.log(path.join(__dirname, "test", "test,html"));
