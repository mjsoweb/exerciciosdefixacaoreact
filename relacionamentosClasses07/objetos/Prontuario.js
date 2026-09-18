// Arquivo: objetos/Prontuario.js

class Prontuario {
  #numero;
  #observacoes;
  #animal;

  constructor() {
    this.#numero = '';
    this.#observacoes = '';
    this.#animal = null;
  }

  setNumero(numero) {
    if (numero && numero.trim() !== '') {
      this.#numero = numero;
      return true;
    }
    return false;
  }

  getNumero() {
    return this.#numero;
  }

  setObservacoes(observacoes) {
    if (observacoes && observacoes.trim() !== '') {
      this.#observacoes = observacoes;
      return true;
    }
    return false;
  }

  getObservacoes() {
    return this.#observacoes;
  }

  setAnimal(animal) {
    const Animal = require('./Animal');
    if (animal instanceof Animal) {
      this.#animal = animal;
      // Referência cruzada
      if (animal.getProntuario() !== this) {
        animal.setProntuario(this);
      }
      return true;
    }
    return false;
  }

  getAnimal() {
    return this.#animal;
  }
}

module.exports = Prontuario;
