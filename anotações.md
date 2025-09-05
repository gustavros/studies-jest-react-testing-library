o que são testes?

- testes são uma forma de garantirmos o funcionamento correto do nosso código, de uma aplicação?
 - eles são automatizados, então podemos testar vários cenários com apenas um comando
- além disso, os testes nos ajudam a identificar problemas mais rapidamente, pois podemos rodá-los sempre que fizermos alterações no código.

podemos escrever 3 tipos de testes:

- testes unitários
    exemplo: testar uma função que soma dois números, como `sum(2, 3)` deve retornar `5`
    exemplo: testar uma função que verifica se um número é par, como `isEven(4)` deve retornar `true`
    exemplo: testar uma função que formata um valor monetário, como `formatCentsToBRL(1000)` deve retornar `R$ 10,00`
- testes de integração
    exemplo: testar se dois módulos funcionam bem juntos, como uma API e um banco de dados
    exemplo: testar se a comunicação entre dois serviços está funcionando corretamente
- testes end-to-end
    exemplo: testar um fluxo completo da aplicação, como um usuário fazendo login e realizando uma compra
    exemplo: testar se um usuário consegue adicionar um produto ao carrinho e finalizar a compra


- jest e react testing library servem para testes unitários e de integração javascript.
- o testing library fornece utilitários para facilitar a escrita de testes, como a busca por elementos na tela e a simulação de eventos.


- por que aprender testes?

garante que o código funcione corretamente em diferentes cenários e condições.
e também, ele garante que nada vai quebrar né facilitando refactorings
- então por exemplo, ao invés de ficar testando manualmente cada alteração que fazemos, podemos simplesmente rodar nossos testes automatizados e ter a certeza de que tudo está funcionando como deveria.!!!!!!!!!!!!!!


tipos de testes:
- testes unitários:
    a gente geralmente testa uma unidade de código, ou componente, função etc. e a gente nao chama agentes externos, como apis. e se for o caso de tipo, precisar chamar uma api, a gente pode usar mocks para simular as respostas.

    ```ts
    import { Greeting } from "./greetings";

    describe("Greeting", () => {
        it("should return a greeting message with the user's name", () => {
            const result = Greeting({ name: "Alice" });
            expect(result).toBe("Hello, Alice!");
        });

        it("should return a default greeting message for anonymous users", () => {
            const result = Greeting({ name: "" });
            expect(result).toBe("Hello, Guest!");
        });
    });
    ```
     