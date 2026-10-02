import React from 'react';

export function Repeticao() {
  return (
    <main className="conteudo">
      <h1>Estruturas de Repetição em Java</h1>

      <p>
        As estruturas de repetição permitem executar um bloco de código várias vezes, de acordo com uma condição definida[cite: 24].
      </p>

      <hr />

      <h2>Principais estruturas</h2>
      <ul>
        <li><strong>for</strong> → usado quando sabemos o número de repetições[cite: 24]</li>
        <li><strong>while</strong> → usado quando a repetição depende de uma condição[cite: 24]</li>
        <li><strong>do while</strong> → garante pelo menos uma execução[cite: 24]</li>
      </ul>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Desenvolva um programa utilizando <code>for</code> para exibir os números de 1 até 10 e depois adapte-o para exibir apenas os pares[cite: 24].
        </li>
        <li>
          <strong>Exercício 2:</strong> Crie uma rotina com <code>while</code> que simule um contador decrescente de contagem regressiva até zero[cite: 24].
        </li>
        <li>
          <strong>Exercício 3:</strong> Utilize <code>do while</code> para validar a entrada de uma senha numérica até que o usuário acerte o código correto[cite: 24].
        </li>
      </ul>
    </main>
  );
}