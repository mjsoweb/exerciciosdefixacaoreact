// Arquivo: projeto/repeticao.js

console.log('==================================================');
console.log('       EXERCÍCIO 08 — LAÇOS DE REPETIÇÃO          ');
console.log('==================================================\n');

// ==========================================
// 🧩 PARTE 1 — Criando o Array
// ==========================================
const alunos = [
  'Ana',
  'Bruno',
  'Carlos',
  'Daniela',
  'Eduardo',
  'Fernanda',
  'Gabriel',
];

console.log('1. Array de Alunos:');
console.log(alunos);
console.log('--------------------------------------------------');

// ==========================================
// 🧩 PARTE 2 — Utilizando o Laço for
// ==========================================
console.log("2. Percurso com Laço 'for':");

for (let i = 0; i < alunos.length; i++) {
  console.log(`Aluno ${i + 1}: ${alunos[i]}`);
}

console.log('--------------------------------------------------');

// ==========================================
// 🧩 PARTE 3 — Utilizando o Laço while
// ==========================================
console.log("3. Percurso com Laço 'while':");

let indexWhile = 0; // Inicialização da variável de controle

while (indexWhile < alunos.length) {
  console.log(`Aluno ${indexWhile + 1}: ${alunos[indexWhile]}`);
  indexWhile++; // Atualização da variável de controle
}

console.log('--------------------------------------------------');

// ==========================================
// 🧩 PARTE 4 — Utilizando o Laço do...while
// ==========================================
console.log("4. Percurso com Laço 'do...while':");

let indexDo = 0; // Inicialização

do {
  console.log(`Aluno ${indexDo + 1}: ${alunos[indexDo]}`);
  indexDo++; // Atualização
} while (indexDo < alunos.length);

console.log('--------------------------------------------------');

// ==========================================
// 🧩 PARTE 5 — Utilizando o Laço for...of
// ==========================================
console.log("5. Percurso com Laço 'for...of':");

for (const aluno of alunos) {
  console.log(`Aluno: ${aluno}`);
}

console.log('--------------------------------------------------');

// ==========================================
// 🧪 PARTE 6 — Comparando os Laços (Respostas no terminal)
// ==========================================
console.log('6. Comparação dos Laços:');
console.log('- Código mais simples sem índice: for...of');
console.log(
  '- Variável de controle manual necessária em: for, while e do...while'
);
console.log('- Executa o bloco pelo menos uma vez: do...while');
console.log('- Sem necessidade de índices: for...of');
console.log('--------------------------------------------------');

// ==========================================
// ⭐ DESAFIO EXTRA 1 — Posições Pares com 'for'
// ==========================================
console.log(
  'Desafio Extra 1 — Alunos nas Posições Pares (Exibe Aluno 2, 4, 6...):'
);

// A posição do Aluno (1-based) é par quando (i + 1) é par.
for (let i = 0; i < alunos.length; i++) {
  if ((i + 1) % 2 === 0) {
    console.log(`Aluno ${i + 1}: ${alunos[i]}`);
  }
}

console.log('--------------------------------------------------');

// ==========================================
// ⭐ DESAFIO EXTRA 2 — Sentido Inverso com 'while'
// ==========================================
console.log("Desafio Extra 2 — Percurso Inverso com 'while':");

let indexInverso = alunos.length - 1;

while (indexInverso >= 0) {
  console.log(alunos[indexInverso]);
  indexInverso--;
}

console.log('--------------------------------------------------');

// ==========================================
// ⭐⭐ DESAFIO AVANÇADO — Filtrando com 'for...of'
// ==========================================
console.log('Desafio Avançado — Alunos Aprovados (mais de 5 caracteres):');

const aprovados = [];

for (const aluno of alunos) {
  if (aluno.length > 5) {
    aprovados.push(aluno);
  }
}

console.log('Array Completo (alunos):', alunos);
console.log('Array Filtrado (aprovados):', aprovados);
console.log('==================================================\n');

// ==========================================
// 🚀 DESAFIO FINAL — Menu Interativo
// ==========================================
const readline = require('readline');

function executarMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  console.log('🚀 DESAFIO FINAL — ESCOLHA O LAÇO DE REPETIÇÃO');
  console.log('1 - for');
  console.log('2 - while');
  console.log('3 - do...while');
  console.log('4 - for...of');
  console.log('5 - Sair\n');

  rl.question('Escolha uma opção (1 a 5): ', (opcao) => {
    console.log('');
    switch (opcao.trim()) {
      case '1':
        console.log("--- Executando com 'for' ---");
        for (let i = 0; i < alunos.length; i++) {
          console.log(`Aluno ${i + 1}: ${alunos[i]}`);
        }
        break;

      case '2':
        console.log("--- Executando com 'while' ---");
        let w = 0;
        while (w < alunos.length) {
          console.log(`Aluno ${w + 1}: ${alunos[w]}`);
          w++;
        }
        break;

      case '3':
        console.log("--- Executando com 'do...while' ---");
        let dw = 0;
        do {
          console.log(`Aluno ${dw + 1}: ${alunos[dw]}`);
          dw++;
        } while (dw < alunos.length);
        break;

      case '4':
        console.log("--- Executando com 'for...of' ---");
        for (const aluno of alunos) {
          console.log(`Aluno: ${aluno}`);
        }
        break;

      case '5':
        console.log('👋 Saindo do programa...');
        rl.close();
        return;

      default:
        console.log('❌ Opção inválida!');
    }

    rl.close();
  });
}

// Para testar o menu interativo no terminal, desmarque a linha abaixo:
// executarMenu();
