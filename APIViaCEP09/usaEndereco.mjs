// Arquivo: usaEndereco.mjs
import { Endereco } from './Endereco.mjs';

async function testarConsulta() {
  console.log('        CONSULTA DE ENDEREÇO VIA CEP              ');

  // TESTE 1: CEP VÁLIDO
  console.log('Testando com CEP Válido');
  const meuEndereco = new Endereco();

  try {
    await meuEndereco.setCep('72015565');

    console.log('✅ Consulta concluída com sucesso!');
    console.log(`CEP: ${meuEndereco.getCep()}`);
    console.log(`Logradouro: ${meuEndereco.getLogradouro()}`);

    // ⭐ DESAFIO EXTRA 1: Mensagem alternativa para campo opcional
    const complementoExibido = meuEndereco.getComplemento() || 'não informado';
    console.log(`Complemento: ${complementoExibido}`);

    console.log(`Bairro: ${meuEndereco.getBairro()}`);
    console.log(
      `Cidade/UF: ${meuEndereco.getLocalidade()}/${meuEndereco.getUf()}`
    );

    // Novos campos exibidos
    console.log(`DDD Regional: ${meuEndereco.getDdd()}`);
    console.log(`Código IBGE: ${meuEndereco.getIbge()}`);

    // Exibição do Desafio Extra 2
    console.log('\n📍 Endereço Formatado:');
    console.log(meuEndereco.mostrarEnderecoCompleto());
  } catch (erro) {
    console.error(`❌ Erro: ${erro.message}`);
  }

  console.log('\n--------------------------------------------------\n');

  // TESTE 2: CEP INVÁLIDO OU INEXISTENTE (Testando Exceções)
  console.log('--- 2. Testando com CEP Inexistente ---');
  const enderecoInvalido = new Endereco();

  try {
    await enderecoInvalido.setCep('00000000');
    console.log(enderecoInvalido.mostrarEnderecoCompleto());
  } catch (erro) {
    console.error(`❌ Exceção Capturada com Sucesso: ${erro.message}`);
  }
}

testarConsulta();
