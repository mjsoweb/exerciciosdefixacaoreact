// Arquivo: Aluno.mjs
export class Aluno {
  #matricula;
  #nome;
  #curso;

  constructor(matricula = '', nome = '', curso = '') {
    this.#matricula = matricula;
    this.#nome = nome;
    this.#curso = curso;
  }

  getMatricula() {
    return this.#matricula;
  }
  getNome() {
    return this.#nome;
  }
  getCurso() {
    return this.#curso;
  }

  setMatricula(m) {
    this.#matricula = m;
  }
  setNome(n) {
    this.#nome = n;
  }
  setCurso(c) {
    this.#curso = c;
  }

  toJSON() {
    return {
      matricula: this.#matricula,
      nome: this.#nome,
      curso: this.#curso,
    };
  }
}
