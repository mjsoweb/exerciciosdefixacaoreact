// Arquivo: usaAlunoDAO.mjs
import { Aluno } from './Aluno.mjs';
import { AlunoDAO } from './AlunoDAO.mjs';

async function executarAlunoDAO() {
  console.log('==================================================');
  console.log('           TESTANDO O PADRÃO ALUNODAO             ');
  console.log('==================================================\n');

  const dao = new AlunoDAO();
  const arquivo = './aluno_dados.json';

  const estudante = new Aluno(
    '20261001',
    'Ana Clara',
    'Análise e Desenvolvimento de Sistemas'
  );

  // Salvar
  try {
    await dao.saveJSON(arquivo, estudante);
    console.log(`✅ Aluno gravado com sucesso em "${arquivo}".`);
  } catch (erro) {
    console.error(`❌ ${erro.message}`);
  }

  // Recuperar
  try {
    const alunoRecuperado = await dao.recoveryJSON(arquivo);
    console.log('\n📖 Aluno recuperado:');
    console.log(`- Matrícula: ${alunoRecuperado.getMatricula()}`);
    console.log(`- Nome: ${alunoRecuperado.getNome()}`);
    console.log(`- Curso: ${alunoRecuperado.getCurso()}`);
  } catch (erro) {
    console.error(`❌ ${erro.message}`);
  }

  console.log('\n==================================================');
}

executarAlunoDAO();
