// Arquivo: Pessoa.js

class Pessoa {
  // Atributos privados
  #nome;
  #email;

  // Método setNome com validação (não aceita texto vazio)
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

  // Método setEmail com validação de texto + Desafio Extra 1 (precisa ter @)
  setEmail(email) {
    if (email && email.trim() !== '' && email.includes('@')) {
      this.#email = email;
      return true;
    }
    return false;
  }

  getEmail() {
    return this.#email;
  }
}

module.exports = Pessoa;
