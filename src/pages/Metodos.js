import React from 'react';

export function Metodos() {
  return (
    <main className="conteudo">
      <h1>Métodos em Java</h1>

      <p>
        Métodos são blocos de código responsáveis por executar ações específicas, auxiliando na organização e evitando a repetição de código[cite: 20].
      </p>

      <hr />

      <h2>Exemplo de Retorno e Parâmetros</h2>
      <pre>
        <code>{`public static int somar(int a, int b){
    return a + b;
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie um método estático que receba duas notas como parâmetro e retorne a média aritmética calculada.
        </li>
        <li>
          <strong>Exercício 2:</strong> Escreva um método que receba um número inteiro e exiba se ele é par ou ímpar no console.
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva uma aplicação com múltiplos métodos especializados, garantindo que cada um possua uma única responsabilidade clara[cite: 20].
        </li>
      </ul>
    </main>
  );
}