/*4) Converter Número para Dobro

Pergunte um número ao usuário, converta com Number(), e mostre o dobro.

Exemplo:
Entrada: 7
Saída: O dobro é 14.*/

//estou fazendo uma importação para trazer funções externas
//para este arquivo
const input = require("../input"); //como se fosse o comando cd..
//declarei uma variável do tipo const chamada input

//"uma function anonima por arquivo!"
(async() => {
    console.log ("Insira um número: ");
    let numero = Number (await input()); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log(` O dobro é :  ${numero*2} `);
    
})();