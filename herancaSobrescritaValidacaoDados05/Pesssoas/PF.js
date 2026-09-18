// Arquivo: projeto/pessoas/PF.js
const Pessoa = require('./Pessoa');

class PF extends Pessoa {
  #cpf;

  // Aceita apenas CPF formatado com exatamente 14 caracteres (000.000.000-00)
  setCPF(cpf) {
    if (cpf && cpf.length === 14) {
      this.#cpf = cpf;
      return true;
    }
    return false;
  }

  getCPF() {
    return this.#cpf;
  }
}

module.exports = PF;