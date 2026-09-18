// Arquivo: usaPessoas.js

const Pessoa = require('./Pessoa');
const Aluno = require('./Aluno');
const Professor = require('./Professor');
const Coordenador = require('./Coordenador');

console.log('EXECUTANDO OS TESTES');

// --- TESTE 1: Pessoa Válida ---
console.log(' Teste 1: Pessoa Válida ');
const p1 = new Pessoa();
if (p1.setNome('João Silva') && p1.setEmail('joao@email.com')) {
  console.log(`Nome: ${p1.getNome()}`);
  console.log(`Email: ${p1.getEmail()}`);
}

// --- TESTE 2: Pessoa Inválida ---
console.log('\nTeste 2: Pessoa Inválida');
const p2 = new Pessoa();
if (!p2.setNome('')) {
  console.log('❌ Nome inválido!');
}
if (!p2.setEmail('joaoemail.com')) {
  // Inválido pois não tem @
  console.log('❌ Email inválido!');
}

// --- TESTE 3: Aluno Válido ---
console.log('\n Teste 3: Aluno Válido');
const a1 = new Aluno();
a1.setNome('Maria');
a1.setEmail('maria@email.com');
a1.setMatricula('2025001'); // Válido (tem 7 caracteres)

console.log(`Nome: ${a1.getNome()}`);
console.log(`Email: ${a1.getEmail()}`);
console.log(`Matrícula: ${a1.getMatricula()}`);

// --- TESTE 4: Aluno Inválido ---
console.log('\nTeste 4: Aluno Inválido');
const a2 = new Aluno();
a2.setNome('Pedro');

if (!a2.setEmail('')) {
  console.log('❌ Email inválido (vazio)!');
}
if (!a2.setMatricula('123')) {
  // Inválido (menos de 6 caracteres)
  console.log('❌ Matrícula inválida (precisa de pelo menos 6 caracteres)!');
}

// --- TESTE 5: Professor Válido ---
console.log('\n Teste 5: Professor Válido ');
const prof1 = new Professor();
prof1.setNome('Carlos');
prof1.setEmail('carlos@email.com');
prof1.setDisciplina('Programação Web');

console.log(`Nome: ${prof1.getNome()}`);
console.log(`Email: ${prof1.getEmail()}`);
console.log(`Disciplina: ${prof1.getDisciplina()}`);

// --- TESTE 6: Professor Inválido ---
console.log('\n Teste 6: Professor Inválido');
const prof2 = new Professor();
prof2.setNome('Ana');
prof2.setEmail('ana@email.com');

if (!prof2.setDisciplina('')) {
  console.log('❌ Erro no cadastro da disciplina (não pode ser vazia)!');
}

// --- TESTE EXTRA: Coordenador (Desafio Avançado) ---
console.log('\nTeste Extra: Coordenador');
const coord = new Coordenador();
coord.setNome('Dra. Márcia');
coord.setEmail('marcia@escola.com');
coord.setDisciplina('Gestão T.I.');
coord.setSetor('Tecnologia da Informação');

console.log(`Nome: ${coord.getNome()}`);
console.log(`Email: ${coord.getEmail()}`);
console.log(`Disciplina: ${coord.getDisciplina()}`);
console.log(`Setor: ${coord.getSetor()}`);
