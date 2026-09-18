// Arquivo: projeto/pessoas/Pessoa.js

class Pessoa {
  #nome;
  #email;

  // setNome + Desafio Extra 1 (mínimo de 3 caracteres com >=)
  setNome(nome) {
    if (nome && nome.trim().length >= 3) {
      this.#nome = nome;
      return true;
    }
    return false;
  }

  getNome() {
    return this.#nome;
  }

  // setEmail básico (verifica apenas se não está vazio)
  setEmail(email) {
    if (email && email.trim() !== '') {
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
