// Arquivo: objetos/Animal.js
const Prontuario = require('./Prontuario');
const Veterinario = require('./Veterinario');

class Animal {
  #nome;
  #especie;
  #cliente;
  #prontuario;
  #veterinarios;

  constructor() {
    this.#nome = '';
    this.#especie = '';
    this.#cliente = null;
    this.#prontuario = null;
    this.#veterinarios = [];
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

  setEspecie(especie) {
    if (especie && especie.trim() !== '') {
      this.#especie = especie;
      return true;
    }
    return false;
  }

  getEspecie() {
    return this.#especie;
  }

  setCliente(cliente) {
    // Evita loop infinito na referência cruzada
    const Cliente = require('./Cliente');
    if (cliente instanceof Cliente) {
      this.#cliente = cliente;
      cliente.addAnimal(this);
      return true;
    }
    return false;
  }

  getCliente() {
    return this.#cliente;
  }

  setProntuario(prontuario) {
    if (prontuario instanceof Prontuario) {
      this.#prontuario = prontuario;
      // Referência cruzada no relacionamento 1:1
      if (prontuario.getAnimal() !== this) {
        prontuario.setAnimal(this);
      }
      return true;
    }
    return false;
  }

  getProntuario() {
    return this.#prontuario;
  }

  addVeterinario(veterinario) {
    if (veterinario instanceof Veterinario) {
      if (!this.#veterinarios.includes(veterinario)) {
        this.#veterinarios.push(veterinario);
        // Referência cruzada para o relacionamento N:N
        veterinario.addAnimal(this);
      }
      return true;
    }
    return false;
  }

  getVeterinarios() {
    return this.#veterinarios;
  }

  listarVeterinarios() {
    console.log(`Veterinários responsáveis pelo atendimento de ${this.#nome}:`);
    if (this.#veterinarios.length === 0) {
      console.log(' • Nenhum veterinário associado.');
    } else {
      this.#veterinarios.forEach((vet) => {
        console.log(` • Dr(a). ${vet.getNome()} (CRMV: ${vet.getCRMV()})`);
      });
    }
  }
}

module.exports = Animal;
