// Arquivo: projeto/biblioteca.js

console.log("==================================================");
console.log("       EXERCÍCIO 06 — MANIPULAÇÃO DE ARRAYS       ");
console.log("==================================================\n");

// ==========================================
// 🧩 PARTE 1 — Criando o Array
// ==========================================
// Inicialização do array com 3 títulos iniciais
const livros = ["Algoritmos", "JavaScript", "Banco de Dados"];

console.log("1. Array Inicial:");
console.log(livros);
console.log("--------------------------------------------------");


// ==========================================
// 🧩 PARTE 2 — Inserindo Novos Livros
// ==========================================
// push() adiciona ao FINAL
livros.push("Redes de Computadores");

// unshift() adiciona ao INÍCIO
livros.unshift("Lógica de Programação");

console.log("2. Array após Inserções (push no fim, unshift no início):");
console.log(livros);
console.log("--------------------------------------------------");


// ==========================================
// 🧩 PARTE 3 — Consultando Informações
// ==========================================
// O primeiro elemento fica sempre no índice 0
const primeiroLivro = livros[0];

// O último elemento é acessado dinamicamente usando livros.length - 1
const ultimoLivro = livros[livros.length - 1];

// A propriedade .length indica a quantidade total de itens
const quantidadeLivros = livros.length;

console.log("3. Consultas:");
console.log(`- Primeiro livro: ${primeiroLivro}`);
console.log(`- Último livro: ${ultimoLivro}`);
console.log(`- Total de livros cadastrados: ${quantidadeLivros}`);
console.log("--------------------------------------------------");


// ==========================================
// 🧩 PARTE 4 — Removendo Livros
// ==========================================
// pop() remove o ÚLTIMO elemento
const livroRemovidoFim = livros.pop();

// shift() remove o PRIMEIRO elemento
const livroRemovidoInicio = livros.shift();

console.log("4. Remoções:");
console.log(`- Removido do fim (pop): "${livroRemovidoFim}"`);
console.log(`- Removido do início (shift): "${livroRemovidoInicio}"`);
console.log("Array após as remoções:", livros);
console.log(`Nova quantidade de livros: ${livros.length}`);
console.log("--------------------------------------------------");


// ==========================================
// 🧩 PARTE 5 — Atualizando Informações
// ==========================================
// Como a contagem do índice começa em 0, o 2º elemento fica no índice 1
livros[1] = "Programação Web";

console.log("5. Alterando o 2º elemento (índice 1) para 'Programação Web':");
console.log(livros);
console.log("--------------------------------------------------");


// ==========================================
// ⭐ DESAFIO EXTRA 1 — Cadastro Múltiplo com push()
// ==========================================
livros.push("Estrutura de Dados", "Sistemas Operacionais", "Engenharia de Software");

console.log("Desafio Extra 1 — Adicionados +3 livros:");
console.log(livros);
console.log(`Novo tamanho do acervo: ${livros.length}`);
console.log("--------------------------------------------------");


// ==========================================
// ⭐ DESAFIO EXTRA 2 — Listagem com Laço de Repetição (for)
// ==========================================
console.log("Desafio Extra 2 — Lista Formatada com Laço 'for':");
for (let i = 0; i < livros.length; i++) {
  console.log(`Livro ${i + 1}: ${livros[i]}`);
}
console.log("--------------------------------------------------");


// ==========================================
// ⭐⭐ DESAFIO AVANÇADO — Transferência de Livros Emprestados
// ==========================================
const emprestados = [];

// Remove o último do acervo e adiciona direto no array de emprestados
const livroEmprestado = livros.pop();
emprestados.push(livroEmprestado);

console.log("Desafio Avançado — Empréstimo de Livro:");
console.log(`- Livro transferido: "${livroEmprestado}"`);
console.log("Array 'livros' (Acervo):", livros);
console.log("Array 'emprestados':", emprestados);
console.log("==================================================\n");


// ==========================================
// 🚀 DESAFIO FINAL — Menu Interativo (Exemplo Didático)
// ==========================================
// Usamos o módulo nativo 'readline' para interagir com o terminal no Node.js
const readline = require('readline');

function executarMenu() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  console.log("🚀 DESAFIO FINAL — MENU DA BIBLIOTECA");
  console.log("1 - Listar livros");
  console.log("2 - Adicionar livro");
  console.log("3 - Remover último livro");
  console.log("4 - Remover primeiro livro");
  console.log("5 - Exibir quantidade de livros");
  console.log("6 - Sair\n");

  rl.question("Escolha uma opção (1 a 6): ", (opcao) => {
    switch (opcao.trim()) {
      case "1":
        console.log("\n📚 Livros no Acervo:");
        livros.forEach((l, index) => console.log(`${index + 1}. ${l}`));
        break;
      case "2":
        rl.question("\nDigite o nome do livro: ", (nomeLivro) => {
          livros.push(nomeLivro);
          console.log(`✅ "${nomeLivro}" foi adicionado com sucesso!`);
          rl.close();
        });
        return;
      case "3":
        console.log(`\n🗑️ Removido: "${livros.pop()}"`);
        break;
      case "4":
        console.log(`\n🗑️ Removido: "${livros.shift()}"`);
        break;
      case "5":
        console.log(`\n📊 Quantidade total: ${livros.length} livro(s).`);
        break;
      case "6":
        console.log("\n👋 Saindo do sistema...");
        rl.close();
        return;
      default:
        console.log("\n❌ Opção inválida!");
    }
    rl.close();
  });
}

// Para testar o menu interativo no terminal, basta descomentar a linha abaixo:
// executarMenu();