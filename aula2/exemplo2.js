//estou fazendo uma importação para trazer funções externas
//para este arquivo
const input = require("../input"); //como se fosse o comando cd..
//declarei uma variável do tipo const chamada input

//"uma function anonima por arquivo!"
(async() => {
    console.log ("Qual o seu nome?: ");
    let nome = await input(); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log ("Qual a sua idade: ");
    let idade = await input(); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log(`Olá ${nome}, sua idade é ${idade}.`);
})();
