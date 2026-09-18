// programacao_estruturada/app.js

// Importando a biblioteca que criamos no outro arquivo
const conversores = require('./conversores');

// Executando os testes e exibindo os resultados no console
console.log(conversores.celsiusParaFahrenheit(30)); // Esperado: 86
console.log(conversores.horasParaMinutos(2));        // Esperado: 120
console.log(conversores.idadeEmDias(20));          // Esperado: 7300
console.log(conversores.kmParaMetros(3));          // Esperado: 3000
console.log(conversores.consumoMedio(500, 40));    // Esperado: 12.5