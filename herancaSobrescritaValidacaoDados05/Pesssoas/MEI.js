// Arquivo: projeto/pessoas/MEI.js
const PJ = require('./PJ');

// Demonstra herança em cadeia: Pessoa -> PJ -> MEI
class MEI extends PJ {
  #ramoAtividade;

  setRamoAtividade(ramo) {
    if (ramo && ramo.trim() !== '') {
      this.#ramoAtividade = ramo;
      return true;
    }
    return false;
  }

  getRamoAtividade() {
    return this.#ramoAtividade;
  }

  // Sobrescreve novamente o setEmail para aceitar apenas final .com.br
  setEmail(email) {
    if (email && email.includes('@') && email.endsWith('.com.br')) {
      // Reutiliza o setEmail da classe pai (Pessoa) pulando as travas da PJ
      return super.setEmail(email);
    }
    return false;
  }
}

module.exports = MEI;
