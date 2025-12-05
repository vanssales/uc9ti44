/*
    um programa que verifica se número é impar ou par
*/


const input = require("../input");

(async ()=>{
    console.log("Coloque um número inteiro: ");
    let numerointeiro = Number (await input());
   

    if(isNaN(numerointeiro)){
        console.log("Digite um número inteiro! ")
    }else{
        if (numerointeiro==0){
            console.log("O número é zero! - Nem par, nem ímpar! ")
           }else 
                if (numerointeiro%2==0){
                    console.log("O número é par!")
                }
                else
                { 
                console.log("O número é ímpar!")
                }      
           }
    } 
)();