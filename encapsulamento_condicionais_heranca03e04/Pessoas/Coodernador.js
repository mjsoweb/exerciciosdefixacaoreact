// Arquivo: Coordenador.js
const Professor = require('./Professor');

// Demonstra herança em múltiplos níveis: Pessoa -> Professor -> Coordenador
class Coordenador extends Professor {
  #setor;

  setSetor(setor) {
    if (setor && setor.trim() !== '') {
      this.#setor = setor;
      return true;
    }
    return false;
  }

  getSetor() {
    return this.#setor;
  }
}

module.exports = Coordenador;
