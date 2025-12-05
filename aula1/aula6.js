//Meus dados pessoais
/*Estrutura*/
//estrutura, dicionário, classe anônima
var lista_notas = []

lista_notas.push({
    nome_produto: "SILVERIO",
    valornota:5,
})

lista_notas.push({
    nome_produto: "NATALIA",
    valornota:3.3,
})

media = (lista_notas[0].valornota + lista_notas[1].valornota)/2;
console.log("A nota é", media);