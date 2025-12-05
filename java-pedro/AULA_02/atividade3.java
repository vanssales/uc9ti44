import java.util.Scanner;

public class atividade3 {

    public static void main(String[] args) {

        Scanner in = new Scanner(System.in);

        String nome;
        int idade;
        
       
       
        System.out.printf("Digite sua idade: ");
        idade = in.nextInt();
        in.nextLine();
        System.out.printf("Digite seu nome: ");
        nome = in.nextLine();


        /*correto*/
        System.out.printf("Nome: %s \n Idade: %d", nome, idade);

   
    }
}