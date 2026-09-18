// Arquivo: projeto/usaClientes.js

const Pessoa = require('./pessoas/Pessoa');
const PF = require('./pessoas/PF');
const PJ = require('./pessoas/PJ');
const MEI = require('./pessoas/MEI');

console.log('=========================================');
console.log('       TESTES DE CADASTRO DE CLIENTES    ');
console.log('=========================================\n');

// --- TESTE 1: Pessoa Válida ---
console.log('--- Teste 1: Pessoa Válida ---');
const p1 = new Pessoa();
if (p1.setNome('Carlos Silva') && p1.setEmail('carlos@email.com')) {
  console.log(`✅ Sucesso! Nome: ${p1.getNome()} | E-mail: ${p1.getEmail()}`);
} else {
  console.log('❌ Erro no cadastro de Pessoa.');
}

// --- TESTE 2: Pessoa Física Válida ---
console.log('\n--- Teste 2: Pessoa Física (PF) Válida ---');
const pf1 = new PF();
pf1.setNome('Maria Souza');
pf1.setEmail('maria@gmail.com');

if (pf1.setCPF('123.456.789-00')) {
  console.log(`✅ Sucesso! PF: ${pf1.getNome()} | CPF: ${pf1.getCPF()}`);
} else {
  console.log('❌ CPF inválido (deve ter 14 caracteres).');
}

// --- TESTE 3: Pessoa Jurídica Válida ---
console.log('\n--- Teste 3: Pessoa Jurídica (PJ) Válida ---');
const pj1 = new PJ();
pj1.setNome('Tech Solutions');

const cnpjValido = pj1.setCNPJ('12.345.678/0001-90'); // 18 caracteres
const emailValido = pj1.setEmail('contato@tech.com'); // Tem @ e termina com .com

if (cnpjValido && emailValido) {
  console.log(
    `✅ Sucesso! Empresa: ${pj1.getNome()} | CNPJ: ${pj1.getCNPJ()} | E-mail: ${pj1.getEmail()}`
  );
} else {
  console.log('❌ Erro no cadastro da PJ.');
}

// --- TESTE 4: CNPJ Inválido ---
console.log('\n--- Teste 4: CNPJ Inválido ---');
const pj2 = new PJ();
pj2.setNome('Empresa X');

if (!pj2.setCNPJ('12.345.678/0001')) {
  // Menos de 18 caracteres
  console.log('❌ CNPJ Inválido! (Não possui os 18 caracteres mínimos).');
}

// --- TESTE 5: E-mail Inválido na PJ ---
console.log('\n--- Teste 5: E-mail Inválido para PJ ---');
const pj3 = new PJ();

if (!pj3.setEmail('contato@empresa.com.br')) {
  // Inválido para PJ pois termina em .br
  console.log('❌ E-mail PJ Inválido! (A classe PJ aceita apenas final .com).');
}

// --- TESTE EXTRA: Cadastro de MEI ---
console.log('\n--- Teste Extra: Cadastro de MEI ---');
const mei1 = new MEI();
mei1.setNome('Padaria do Zé');
mei1.setCNPJ('98.765.432/0001-10');
mei1.setRamoAtividade('Alimentação');

if (mei1.setEmail('ze@padaria.com.br')) {
  // Válido para MEI
  console.log(
    `✅ MEI Cadastrado: ${mei1.getNome()} | Ramo: ${mei1.getRamoAtividade()} | E-mail: ${mei1.getEmail()}`
  );
} else {
  console.log('❌ E-mail Inválido para MEI (precisa de .com.br).');
}
