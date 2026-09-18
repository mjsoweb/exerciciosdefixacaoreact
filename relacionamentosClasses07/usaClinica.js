// Arquivo: usaClinica.js
const Cliente = require('./objetos/Cliente');
const Animal = require('./objetos/Animal');
const Prontuario = require('./objetos/Prontuario');
const Veterinario = require('./objetos/Veterinario');

console.log('==================================================');
console.log('            CLÍNICA VETERINÁRIA - TESTES          ');
console.log('==================================================\n');

// 1. Criar um Cliente
const cliente1 = new Cliente();
cliente1.setNome('João Silva');
cliente1.setTelefone('(11) 98765-4321');

// 2. Criar dois Animais
const animal1 = new Animal();
animal1.setNome('Rex');
animal1.setEspecie('Cão');

const animal2 = new Animal();
animal2.setNome('Luna');
animal2.setEspecie('Gato');

// Estabelece relacionamento Cliente <-> Animais (1:N)
cliente1.addAnimal(animal1);
cliente1.addAnimal(animal2);

// 3. Criar Prontuários (1:1)
const prontuario1 = new Prontuario();
prontuario1.setNumero('PRONT-001');
prontuario1.setObservacoes('Vacinação em dia. Peso ideal.');
animal1.setProntuario(prontuario1);

const prontuario2 = new Prontuario();
prontuario2.setNumero('PRONT-002');
prontuario2.setObservacoes('Necessita de tartarectomia.');
animal2.setProntuario(prontuario2);

// 4. Criar Veterinários (N:N)
const vet1 = new Veterinario();
vet1.setNome('Dra. Márcia');
vet1.setCRMV('SP-12345');

const vet2 = new Veterinario();
vet2.setNome('Dr. Roberto');
vet2.setCRMV('SP-67890');

// Associação dos Veterinários aos Animais
vet1.addAnimal(animal1);
vet1.addAnimal(animal2); // Dra. Márcia atende Rex e Luna
vet2.addAnimal(animal1); // Dr. Roberto também atende Rex

// ==================================================
// EXIBIÇÃO DAS INFORMAÇÕES
// ==================================================

console.log('--- INFORMACÕES DO CLIENTE E ANIMAIS ---');
console.log(`Cliente: ${cliente1.getNome()}`);
console.log(`Telefone: ${cliente1.getTelefone()}\n`);

cliente1.listarAnimais();

console.log('\n--------------------------------------------------');
console.log('--- DETALHES DOS ANIMAIS E PRONTUÁRIOS ---');

[animal1, animal2].forEach((animal) => {
  console.log(`\nAnimal: ${animal.getNome()} (${animal.getEspecie()})`);
  console.log(
    `Dono registrado via referência cruzada: ${animal.getCliente().getNome()}`
  );
  console.log(`Prontuário Nº: ${animal.getProntuario().getNumero()}`);
  console.log(`Observações: ${animal.getProntuario().getObservacoes()}`);

  // Teste da lista de veterinários por animal
  animal.listarVeterinarios();
});

console.log('\n--------------------------------------------------');
console.log('--- REFERÊNCIAS CRUZADAS (VETERINÁRIOS -> ANIMAIS) ---');
console.log(`Veterinário: Dr(a). ${vet1.getNome()}`);
console.log('Animais atendidos:');
vet1.getAnimais().forEach((a) => console.log(` - ${a.getNome()}`));

console.log(`\nVeterinário: Dr(a). ${vet2.getNome()}`);
console.log('Animais atendidos:');
vet2.getAnimais().forEach((a) => console.log(` - ${a.getNome()}`));

console.log('\n==================================================');
