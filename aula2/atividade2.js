/*2) Calculadora Simples (Soma)

Peça ao usuário dois números e exiba a soma.

Exemplo:
Perguntar "Digite o primeiro número:"
Perguntar "Digite o segundo número:"
Exibir: "A soma entre X + Y = Z."*/

//estou fazendo uma importação para trazer funções externas
//para este arquivo
const input = require("../input"); //como se fosse o comando cd..
//declarei uma variável do tipo const chamada input

//"uma function anonima por arquivo!"
(async() => {
    console.log ("Insira o primeiro número: ");
    let primeironumero = Number (await input()); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log ("Insira o segundo número: ");
    let segundonumero = Number (await input()); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log(`A soma entre: ${primeironumero} + ${segundonumero} =  ${primeironumero+segundonumero} `);
    
})();
