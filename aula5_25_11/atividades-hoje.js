1. Cardápio básico da lanchonete (menu simples)
Crie um programa que mostre no console o seguinte menu:
1 - X-Salada
2 - X-Burger
3 - Misto Quente
4 - Suco Natural
5 - Refrigerante
Peça ao usuário para digitar o número do item desejado.
Use um switch(menu) para:
●	Exibir: "Você escolheu X-Salada" ou o nome do item correspondente.
●	Em default, exibir: "Opção inválida, tente novamente.".

Requisitos técnicos:
●	Usar switch(menu) (igual ao seu primeiro exemplo).
●	Cada case deve exibir o nome do produto.
●	Usar default obrigatoriamente.
________________________________________
2. Cálculo de valor do pedido pelo código do produto
Crie um programa que tenha a seguinte tabela de preços:
100 - X-Salada (R$ 12.00)
101 - X-Burger (R$ 10.00)
102 - Cachorro-Quente (R$ 8.50)
103 - Suco (R$ 6.00)
104 - Refrigerante (R$ 5.00)
Peça:
1.	Código do produto
2.	Quantidade
Use switch(codigo) para:
○	Definir o preço unitário.
○	Calcular total = preço * quantidade.
○	Exibir "Você pediu X unidades de <produto>, total R$ <valor>".
Caso o código não exista, o default deve exibir: "Código inválido.".
________________________________________
3. Tamanho do lanche / combo (trabalhar com strings)
Crie um programa que peça o tamanho do combo: P, M ou G.
Converta a entrada para maiúsculo (ex.: tamanho.toUpperCase()).
Use switch(tamanho) para:
○	P: "Combo Pequeno escolhido (R$ 15.00)."
○	M: "Combo Médio escolhido (R$ 20.00)."
○	G: "Combo Grande escolhido (R$ 25.00)."
○	default: "Tamanho inválido."
________________________________________
4. Desconto por valor da compra (switch(true) com faixas)
Crie um programa que peça o valor total da compra (totalCompra).
1.	Se totalCompra >= 100: "Desconto de 20% aplicado."
2.	Se totalCompra >= 50 && totalCompra < 100: "Desconto de 10% aplicado."
3.	Se totalCompra >= 20 && totalCompra < 50: "Desconto de 5% aplicado."
4.	default: "Sem desconto, valor muito baixo."
5.	Mostre o valor final já com o desconto aplicado.
________________________________________
5. Programa de fidelidade (nível do cliente)
Crie um programa que peça a quantidade de pontos do cliente (pontos).
1.	pontos < 100: "Cliente Iniciante"
2.	pontos >= 100 && pontos < 300: "Cliente Bronze"
3.	pontos >= 300 && pontos < 700: "Cliente Prata"
4.	pontos >= 700: "Cliente Ouro"
5.	Mostre o nível e um benefício, por exemplo:
Ouro: "Direito a um combo grátis por mês."
________________________________________
6. Forma de pagamento e acréscimos/descontos
Crie um programa que peça:
○	Valor da compra (valor).
○	Forma de pagamento (numérico):
1 - Dinheiro (10% de desconto)
2 - Débito (5% de desconto)
3 - Crédito (sem desconto)
4 - Pix (8% de desconto)
Use switch(formaPagamento) para:
○	Calcular o valor final com desconto (ou não).
○	Exibir a mensagem: "Forma escolhida: <nome>. Valor final: R$ <valorFinal>".
○	Em default: "Forma de pagamento inválida."
________________________________________
7. Montagem de combo (switch + “fallthrough” opcional)
Crie um programa que pergunte ao usuário qual combo ele quer:
1 - Só lanche
2 - Lanche + batata
3 - Lanche + batata + refrigerante
Ao final, exiba:
"Você escolheu: <descricaoCombo>".
________________________________________
8. “Roleta de brindes” da lanchonete (switch(true) com aleatório)
Baseado no exemplo do tigrinho(), crie:
1.	Uma função sortearNumero() que retorna um número inteiro de 0 a 10:
2.	Guarde o valor em let numeroSorteado = sortearNumero().

○	numeroSorteado for 10:
■	"Parabéns! Você ganhou um combo completo grátis!"
○	numeroSorteado for entre 7 e 10:
■	"Você ganhou uma sobremesa grátis!"
○	numeroSorteado for entre 4 e 7:
■	"Você ganhou um refrigerante grátis!"
○	numeroSorteado for 3:
■	"Você ganhou um desconto de 50% no próximo pedido!"
○	default:
■	"Hoje não foi seu dia... sem prêmio."

2.	Exiba o número sorteado e o prêmio.
