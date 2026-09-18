// Arquivo: projeto/main.js

const CarteiraDigital = require('./carteiraDigital');

console.log('SISTEMA DE CARTEIRA DIGITAL\n');

// 1. Criar uma carteira digital
const carteira = new CarteiraDigital();

// 2. Definir o titular como "João Silva"
carteira.definirTitular('João Silva');
console.log(`Titular definido: ${carteira.consultarTitular()}`);

// 3. Depositar R$ 200,00
carteira.depositar(200);

// 4. Consultar o saldo
console.log(`Saldo atual: R$ ${carteira.consultarSaldo().toFixed(2)}`);

// 5. Sacar R$ 50,00
carteira.sacar(50);

// 6. Consultar o saldo novamente
console.log(`Saldo após saque: R$ ${carteira.consultarSaldo().toFixed(2)}`);

// 7. Tentar sacar R$ 500,00 (Vai falhar pois só tem R$ 150,00)
carteira.sacar(500);

console.log('RELATÓRIO FINAL  ');

// 8. Exibir as informações finais da carteira
carteira.exibirInformacoes();
