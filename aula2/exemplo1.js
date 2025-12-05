//estou fazendo uma importação para trazer funções externas
//para este arquivo
const input = require("../input"); //como se fosse o comando cd..
//declarei uma variável do tipo const chamada input


(async() => {
    console.log ("Qual a sua idade: ");
    let idade = await input(); // uma variável do tipo letable - eleita somente dentro desta estrutura
    console.log("A sua idade é " + idade);
})();





