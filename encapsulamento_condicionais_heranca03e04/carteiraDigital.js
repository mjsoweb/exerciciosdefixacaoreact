// Arquivo: projeto/carteiraDigital.js

class CarteiraDigital {
  // Atributos privados (protegidos com #)
  #titular;
  #saldo;

  constructor() {
    // Toda carteira nova começa sem dono e com saldo R$ 0,00
    this.#titular = "";
    this.#saldo = 0;
  }

  // 1. Definir Titular
  definirTitular(nome) {
    if (nome) {
      this.#titular = nome;
      return true;
    }
    return false;
  }

  // 2. Consultar Titular
  consultarTitular() {
    return this.#titular;
  }

  // 3. Depositar Saldo
  depositar(valor) {
    // Só aceita depósitos com valores maiores que zero
    if (valor > 0) {
      this.#saldo += valor; // Soma ao saldo atual
      return true;
    }
    return false;
  }

  // 4. Sacar Saldo
  sacar(valor) {
    // Validação: o valor precisa ser maior que zero E não pode ser maior que o saldo disponível
    if (valor > 0 && valor <= this.#saldo) {
      this.#saldo -= valor; // Subtrai do saldo atual
      return true;
    } else {
      console.log("❌ Saque recusado: Saldo insuficiente ou valor inválido.");
      return false;
    }
  }

  // 5. Consultar Saldo
  consultarSaldo() {
    return this.#saldo;
  }

  // 6. Exibir Informações
  exibirInformacoes() {
    console.log(`Titular: ${this.#titular}`);
    console.log(`Saldo: R$ ${this.#saldo.toFixed(2)}`);
  }
}

// Exportamos a classe para usar no main.js
module.exports = CarteiraDigital;