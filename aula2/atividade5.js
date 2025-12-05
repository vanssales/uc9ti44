/*5) Contar Caracteres da Frase

Peça ao usuário uma frase e mostre quantos caracteres ela tem.

Exemplo:
Entrada: "Shinier acelera startups"
Saída: "Sua frase tem 26 caracteres."

Método útil: .length*/

//estou fazendo uma importação para trazer funções externas
//para este arquivo
const input = require("../input"); //como se fosse o comando cd..
//declarei uma variável do tipo const chamada input

//"uma function anonima por arquivo!"
(async() => {
    console.log ("Digite uma frase");
    let frase = await input(); // uma variável do tipo letable - eleita somente dentro desta estrutura

    console.log(`Sua frase tem: ${frase.length} caracteres.`);
        
})();
