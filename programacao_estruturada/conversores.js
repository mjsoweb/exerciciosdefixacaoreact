// programacao_estruturada/conversores.js

// 1. Converter Temperatura (Celsius para Fahrenheit)
function celsiusParaFahrenheit(celsius) {
  return (9 / 5) * celsius + 32;
}

// 2. Converter Horas em Minutos
function horasParaMinutos(horas) {
  return horas * 60;
}

// 3. Converter Idade em Dias
function idadeEmDias(idade) {
  return idade * 365;
}

// 4. Converter Quilômetros para Metros
function kmParaMetros(km) {
  return km * 1000;
}

// 5. Calcular Consumo Médio de Combustível
function consumoMedio(distancia, litros) {
  return distancia / litros;
}

// Exportando as funções para que o arquivo app.js consiga enxergá-las
module.exports = {
  celsiusParaFahrenheit,
  horasParaMinutos,
  idadeEmDias,
  kmParaMetros,
  consumoMedio,
};
