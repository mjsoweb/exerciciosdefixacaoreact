// Arquivo: AlunoDAO.mjs
import fs from 'fs/promises';
import { Aluno } from './Aluno.mjs';

export class AlunoDAO {
  toJSON(aluno) {
    return JSON.stringify(aluno.toJSON(), null, 2);
  }

  async saveJSON(caminhoArquivo, aluno) {
    try {
      const conteudo = this.toJSON(aluno);
      await fs.writeFile(caminhoArquivo, conteudo, 'utf-8');
      return true;
    } catch (erro) {
      throw new Error(`Erro ao salvar Aluno em JSON: ${erro.message}`);
    }
  }

  async recoveryJSON(caminhoArquivo) {
    try {
      const arquivo = await fs.readFile(caminhoArquivo, 'utf-8');
      const dados = JSON.parse(arquivo);

      return new Aluno(dados.matricula, dados.nome, dados.curso);
    } catch (erro) {
      throw new Error(`Erro ao carregar Aluno do JSON: ${erro.message}`);
    }
  }
}
