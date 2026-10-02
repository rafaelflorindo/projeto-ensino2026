import React from 'react';

export function Resolucoes() {
  return (
    <main className="conteudo">
      <h1>Resoluções de Exercícios</h1>

      <p>
        Nesta seção encontram-se sugestões de resolução para os exercícios propostos ao longo do curso[cite: 25].
      </p>

      <hr />

      <h2>Exemplo de Resolução - Condicionais</h2>
      <pre>
        <code>{`import java.util.Scanner;

public class ExercicioCondicional {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int numero = sc.nextInt();
        if(numero > 0) {
            System.out.println("Positivo");
        } else {
            System.out.println("Negativo ou zero");
        }
    }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Analise o código do exercício de <code>ArrayList</code> fornecido e adicione um novo elemento no início da lista[cite: 25].
        </li>
        <li>
          <strong>Exercício 2:</strong> Refatore o script de resolução do menu em Java para incluir uma terceira opção de funcionalidades[cite: 25].
        </li>
        <li>
          <strong>Exercício 3:</strong> Crie sua própria versão comentada da resolução de manipulação de variáveis com <code>Scanner</code>[cite: 25].
        </li>
      </ul>
    </main>
  );
}