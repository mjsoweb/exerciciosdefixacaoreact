// Arquivo: Endereco.mjs
export class Endereco {
  #cep;
  #logradouro;
  #bairro;
  #localidade;
  #uf;

  constructor(
    cep = '',
    logradouro = '',
    bairro = '',
    localidade = '',
    uf = ''
  ) {
    this.#cep = cep;
    this.#logradouro = logradouro;
    this.#bairro = bairro;
    this.#localidade = localidade;
    this.#uf = uf;
  }

  // Getters e Setters
  getCep() {
    return this.#cep;
  }
  getLogradouro() {
    return this.#logradouro;
  }
  getBairro() {
    return this.#bairro;
  }
  getLocalidade() {
    return this.#localidade;
  }
  getUf() {
    return this.#uf;
  }

  setCep(cep) {
    this.#cep = cep;
  }
  setLogradouro(log) {
    this.#logradouro = log;
  }
  setBairro(bairro) {
    this.#bairro = bairro;
  }
  setLocalidade(loc) {
    this.#localidade = loc;
  }
  setUf(uf) {
    this.#uf = uf;
  }

  // Método para converter os atributos privados em um objeto JS simples
  toJSON() {
    return {
      cep: this.#cep,
      logradouro: this.#logradouro,
      bairro: this.#bairro,
      localidade: this.#localidade,
      uf: this.#uf,
    };
  }
}
