// Arquivo: EnderecoDAO.mjs
import fs from 'fs/promises';
import { Endereco } from './Endereco.mjs';

export class EnderecoDAO {
  // Converte o objeto Endereco para uma string JSON formatada
  toJSON(endereco) {
    return JSON.stringify(endereco.toJSON(), null, 2);
  }

  // Salva o objeto em um arquivo .json
  async saveJSON(caminhoArquivo, endereco) {
    try {
      const conteudoJSON = this.toJSON(endereco);
      await fs.writeFile(caminhoArquivo, conteudoJSON, 'utf-8');
      return true;
    } catch (erro) {
      throw new Error(`Erro ao salvar o arquivo JSON: ${erro.message}`);
    }
  }

  // Lê o arquivo .json do disco e recria a instância da classe Endereco
  async recoveryJSON(caminhoArquivo) {
    try {
      const dadosArquivo = await fs.readFile(caminhoArquivo, 'utf-8');
      const dados = JSON.parse(dadosArquivo);

      // Reinstancia o objeto utilizando os dados lidos
      return new Endereco(
        dados.cep,
        dados.logradouro,
        dados.bairro,
        dados.localidade,
        dados.uf
      );
    } catch (erro) {
      throw new Error(`Erro ao recuperar o arquivo JSON: ${erro.message}`);
    }
  }
}
