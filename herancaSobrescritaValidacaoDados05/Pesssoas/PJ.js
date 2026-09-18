// Arquivo: projeto/pessoas/PJ.js
const Pessoa = require('./Pessoa');

class PJ extends Pessoa {
  #cnpj;

  // Aceita apenas CNPJ com pelo menos 18 caracteres usando o operador < (18 ou mais)
  setCNPJ(cnpj) {
    if (cnpj && !(cnpj.length < 18)) {
      this.#cnpj = cnpj;
      return true;
    }
    return false;
  }

  getCNPJ() {
    return this.#cnpj;
  }

  // Sobrescrita do setEmail + Desafio Extra 2 (valida @ e final .com)
  setEmail(email) {
    if (email && email.includes('@') && email.endsWith('.com')) {
      // Reutiliza o setEmail da classe pai (Pessoa) para gravar o e-mail
      return super.setEmail(email);
    }
    return false;
  }
}

module.exports = PJ;
