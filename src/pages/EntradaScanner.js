import React from 'react';

export function EntradaScanner() {
  return (
    <main className="conteudo">
      <h1>Entrada de Dados com Scanner</h1>

      <p>
        Em Java, para receber dados do usuário pelo teclado, utilizamos a classe <strong>Scanner</strong>[cite: 14]. Ela permite ler diferentes tipos de dados[cite: 14].
      </p>

      <hr />

      <h2>Exemplo de Uso</h2>
      <pre>
        <code>{`import java.util.Scanner;

public class EntradaDados {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Digite um número inteiro: ");
        int numero = scanner.nextInt();
        System.out.println("Número: " + numero);
        scanner.close();
    }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie um programa que solicite o nome, a idade e a altura do usuário utilizando o <code>Scanner</code> e exiba uma mensagem formatada[cite: 14].
        </li>
        <li>
          <strong>Exercício 2:</strong> Escreva um programa que leia dois números decimais informados pelo usuário e calcule a média aritmética entre eles.
        </li>
        <li>
          <strong>Exercício 3:</strong> Demonstre na prática o problema da limpeza de buffer misturando a leitura de um número inteiro com <code>nextLine()</code> e aplique a correção adequada.
        </li>
      </ul>
    </main>
  );
}