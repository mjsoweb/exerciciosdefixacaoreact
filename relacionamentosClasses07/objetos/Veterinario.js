// Arquivo: objetos/Veterinario.js

class Veterinario {
  #nome;
  #crmv;
  #animais;

  constructor() {
    this.#nome = '';
    this.#crmv = '';
    this.#animais = [];
  }

  setNome(nome) {
    if (nome && nome.trim() !== '') {
      this.#nome = nome;
      return true;
    }
    return false;
  }

  getNome() {
    return this.#nome;
  }

  setCRMV(crmv) {
    if (crmv && crmv.trim() !== '') {
      this.#crmv = crmv;
      return true;
    }
    return false;
  }

  getCRMV() {
    return this.#crmv;
  }

  addAnimal(animal) {
    const Animal = require('./Animal');
    if (animal instanceof Animal) {
      if (!this.#animais.includes(animal)) {
        this.#animais.push(animal);
        // Referência cruzada no relacionamento N:N
        animal.addVeterinario(this);
      }
      return true;
    }
    return false;
  }

  getAnimais() {
    return this.#animais;
  }
}

module.exports = Veterinario;
