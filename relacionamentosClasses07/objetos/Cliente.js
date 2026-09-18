// Arquivo: objetos/Cliente.js
const Animal = require('./Animal');

class Cliente {
  #nome;
  #telefone;
  #animais;

  constructor() {
    this.#nome = '';
    this.#telefone = '';
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

  setTelefone(telefone) {
    if (telefone && telefone.trim() !== '') {
      this.#telefone = telefone;
      return true;
    }
    return false;
  }

  getTelefone() {
    return this.#telefone;
  }

  addAnimal(animal) {
    // Validação com instanceof
    if (animal instanceof Animal) {
      if (!this.#animais.includes(animal)) {
        this.#animais.push(animal);
        // Referência cruzada automática
        animal.setCliente(this);
      }
      return true;
    }
    return false;
  }

  getAnimais() {
    return this.#animais;
  }

  listarAnimais() {
    console.log(`Cliente: ${this.#nome}`);
    console.log('Animais:');
    if (this.#animais.length === 0) {
      console.log(' • Nenhum animal cadastrado.');
    } else {
      this.#animais.forEach((animal) => {
        console.log(` • ${animal.getNome()}`);
      });
    }
  }
}

module.exports = Cliente;
