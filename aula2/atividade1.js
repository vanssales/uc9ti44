//estou fazendo uma importação para trazer funções externas
//para este arquivo
const input = require("../input"); //como se fosse o comando cd..
//declarei uma variável do tipo const chamada input

//"uma function anonima por arquivo!"
(async() => {
    console.log ("Qual o seu primeiro nome?: ");
    let primeironome = await input(); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log ("Qual o seu sobrenome?: ");
    let sobrenome = await input(); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log(`Citação: ${sobrenome[0].toUpperCase()}. ${primeironome[0].toUpperCase() + primeironome.slice(1).toLowerCase()}`);
    
})();


