// Arquivo: Aluno.js
const Pessoa = require('./Pessoa');

class Aluno extends Pessoa {
  #matricula;

  // Método setMatricula + Desafio Extra 2 (mínimo de 6 caracteres)
  setMatricula(matricula) {
    // Converte para texto para garantir a checagem do tamanho (.length)
    const matriculaTexto = String(matricula);

    if (matriculaTexto && matriculaTexto.length >= 6) {
      this.#matricula = matriculaTexto;
      return true;
    }
    return false;
  }

  getMatricula() {
    return this.#matricula;
  }
}

module.exports = Aluno;
