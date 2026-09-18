📌 Questões Teóricas - Exercício de Fixação 04 – Encapsulamento, Condicionais e Herança

1.O que é encapsulamento?

É a técnica de esconder os detalhes internos de um objeto (como atributos) e permitir o acesso a eles apenas por meio de métodos controlados (como getters e setters).

2.Qual a vantagem de utilizar atributos privados?

Protege os dados contra alterações indevidas ou acidentais vindas de fora da classe, garantindo que o objeto sempre mantenha informações válidas.

3.Qual a diferença entre getNome() e setNome()?

getNome() é um método Getter (serve para consultar/ler o valor do atributo).

setNome() é um método Setter (serve para alterar/definir o valor do atributo, passando por validações).

4.O que faz a palavra-chave extends?

Define uma relação de herança entre duas classes, fazendo com que a classe filha herde todos os métodos e comportamentos da classe pai.

5.Uma classe filha pode utilizar métodos da classe pai? Explique.

Sim. A classe filha herda automaticamente todos os métodos públicos da classe pai. Por exemplo, um objeto da classe Aluno pode chamar o método getNome(), que foi criado originalmente na classe Pessoa.

6.Por que utilizar validações dentro dos métodos de uma classe?

Para evitar que o sistema armazene dados inconsistentes, vazios ou incorretos (como e-mails sem @ ou matrículas curtas demais), garantindo a integridade da aplicação.

7.Qual a diferença entre herança e reutilização de código por cópia?

Herança: O código fica centralizado em um único lugar (classe pai). Se precisar alterar ou corrigir algo, altera-se apenas uma vez e todas as classes filhas recebem a melhoria.

Cópia de código (Control+C / Control+V): Duplica o código em vários arquivos. Se houver um erro, será necessário corrigir manualmente em cada um dos lugares, tornando o projeto difícil de manter.
