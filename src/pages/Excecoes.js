import React from 'react';

export function Excecoes() {
  return (
    <main className="conteudo">
      <h1>Tratamento de Exceções</h1>

      <p>
        Durante a execução de um programa, podem ocorrer erros inesperados. Esses erros são chamados de <strong>exceções</strong>, e podemos tratá-los para evitar interrupções bruscas[cite: 15].
      </p>

      <hr />

      <h2>Tratando erros com try e catch</h2>
      <pre>
        <code>{`try {
    Scanner scanner = new Scanner(System.in);
    int numero = scanner.nextInt();
} catch (Exception e) {
    System.out.println("Erro: valor inválido!");
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie um programa que solicite um número inteiro e utilize <code>try/catch</code> para tratar entradas que não sejam números[cite: 15].
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente um loop <code>while</code> combinado com <code>try/catch</code> que repita a leitura até que o usuário informe um valor válido[cite: 15].
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva uma classe de domínio que lance uma exceção personalizada (<code>IllegalArgumentException</code>) se uma idade inválida for informada no setter[cite: 15].
        </li>
      </ul>
    </main>
  );
}