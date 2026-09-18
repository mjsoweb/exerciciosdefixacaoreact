// Arquivo: usaEnderecoDAO.mjs
import { Endereco } from './Endereco.mjs';
import { EnderecoDAO } from './EnderecoDAO.mjs';

async function executar() {
  console.log('==================================================');
  console.log('           PERSISTÊNCIA COM ENDERECO DAO         ');
  console.log('==================================================\n');

  const dao = new EnderecoDAO();
  const caminho = './endereco_salvo.json';

  // 1. Criando o objeto Endereco
  const end1 = new Endereco(
    '72015-565',
    'Comércio',
    'Taguatinga Centro',
    'Brasília',
    'DF'
  );

  // 2. Salva o objeto no arquivo JSON
  try {
    await dao.saveJSON(caminho, end1);
    console.log(`✅ Endereço salvo com sucesso em "${caminho}"!`);
  } catch (erro) {
    console.error(`❌ Erro ao salvar: ${erro.message}`);
  }

  // 3. Recupera o objeto do arquivo JSON
  try {
    const endRecuperado = await dao.recoveryJSON(caminho);
    console.log('\n📖 Objeto recuperado do disco:');
    console.log(`- CEP: ${endRecuperado.getCep()}`);
    console.log(`- Logradouro: ${endRecuperado.getLogradouro()}`);
    console.log(`- Bairro: ${endRecuperado.getBairro()}`);
    console.log(
      `- Cidade/UF: ${endRecuperado.getLocalidade()}/${endRecuperado.getUf()}`
    );
  } catch (erro) {
    console.error(`❌ Erro ao recuperar: ${erro.message}`);
  }

  console.log('\n==================================================');
}

executar();
