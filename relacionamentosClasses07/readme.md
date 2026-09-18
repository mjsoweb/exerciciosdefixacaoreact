📝 Questões Teóricas 07
1.Qual a diferença entre um relacionamento 1:1 e um relacionamento 1:N?

No relacionamento 1:1 (Um para Um), cada instância de uma classe liga-se a apenas uma instância de outra classe (ex: um Animal tem exatamente um Prontuário). No 1:N (Um para Muitos), uma instância liga-se a múltiplos objetos de outra classe (ex: um Cliente possui vários Animais).

2.Em quais situações utilizamos um relacionamento N:N?

Quando objetos de ambas as classes podem se relacionar com múltiplos objetos da outra. No exemplo, um Veterinário atende vários Animais, e um Animal pode ser atendido por vários Veterinários ao longo do tempo.

3.Qual a finalidade do operador instanceof neste exercício?

Garantir a integridade do sistema, validando se o dado passado por parâmetro é realmente uma instância da classe esperada antes de associá-lo.

4.O que são referências cruzadas entre objetos?

Ocorre quando dois objetos associados guardam uma referência direta um para o outro (ex: o Cliente guarda o Animal na sua lista e o Animal guarda o objeto Cliente no seu atributo #cliente).

5.Qual a vantagem de organizar cada classe em um arquivo separado?

Melhora a modularidade, facilidade de leitura e manutenção do código, permitindo reaproveitar classes em outros módulos sem precisar carregar todo o projeto.

6.Qual a diferença entre herança e composição?

Herança: Relação de "é um" (extends), onde a classe filha herda atributos e métodos do pai.

Composição: Relação de "tem um", onde um objeto contém outro como parte de sua estrutura (ex: o Animal contém o Prontuário).

7.Em qual relacionamento do exercício foi utilizada a composição?

No relacionamento entre Animal e Prontuario (representado pelo símbolo do losango preenchido na UML), já que o prontuário pertence e faz sentido em função do animal.

8.Explique como os relacionamentos implementados tornam o sistema mais próximo da realidade.

Eles simulam o funcionamento real de uma clínica: ao consultar um animal, consegue-se acessar imediatamente seu histórico (prontuário), quem é seu dono (cliente) e quais médicos o atenderam (veterinários), sem precisar buscar em tabelas isoladas.
