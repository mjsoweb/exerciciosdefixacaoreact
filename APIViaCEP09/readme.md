📌 Questões Teóricas 09
1.Qual a vantagem de consultar diretamente a API antes de modificar a classe?

Permite conhecer previamente a estrutura exata do JSON retornado, quais campos são obrigatórios ou opcionais e os nomes das chaves para planejar a classe corretamente.

2.Por que os novos dados devem ser armazenados em atributos privados?

Para respeitar o princípio do encapsulamento, garantindo que o estado interno do objeto não seja alterado indevidamente por código externo.

3.Qual a finalidade dos métodos get adicionados à classe?

Permitir a leitura controlada dos valores armazenados nos atributos privados por partes externas do sistema.

4.Por que não devemos acessar diretamente os atributos retornados pela API fora de setCep()?

Porque a resposta da API externa é um formato bruto (JSON). A classe serve como uma camada de abstração que trata, valida e encapsula esses dados.

5.Qual a diferença entre o nome de uma propriedade da API e o nome de um atributo da classe?

O nome da propriedade na API segue o padrão do serviço externo (ex: localidade), enquanto o atributo da classe é interno da nossa aplicação e segue nossas convenções (ex: #cidade ou #localidade).

6.Por que a classe não precisa utilizar obrigatoriamente os mesmos nomes adotados pelo ViaCEP?

Porque a classe abstrai a API. Ela mapeia o que vem de fora para os nomes mais coerentes com a regra de negócio da aplicação interna.

7.O que aconteceria se a API adicionasse novos campos no futuro?

Nada quebraria na aplicação. O JavaScript ignoraria as propriedades adicionais do JSON que não foram mapeadas no método setCep().

8.Por que o tratamento com try/catch deve continuar funcionando mesmo após a inclusão de novos atributos?

Porque falhas de rede, problemas no servidor ou CEPs inexistentes ainda podem acontecer. O try/catch garante que a aplicação trate os erros graciosamente e não quebre a execução.
