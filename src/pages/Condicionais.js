import React from 'react';

export function Condicionais() {
  return (
    <main className="conteudo">
      <h1>Estruturas Condicionais em Java</h1>

      <p>
        As estruturas condicionais permitem que o programa tome decisões durante a execução. Dependendo do resultado de uma condição lógica, diferentes blocos de código podem ser executados[cite: 6].
      </p>

      <hr />

      <h2>Operadores relacionais</h2>
      <ul>
        <li><strong>==</strong> igual[cite: 6]</li>
        <li><strong>!=</strong> diferente[cite: 6]</li>
        <li><strong>&gt;</strong> maior que[cite: 6]</li>
        <li><strong>&lt;</strong> menor que[cite: 6]</li>
        <li><strong>&gt;=</strong> maior ou igual[cite: 6]</li>
        <li><strong>&lt;=</strong> menor ou igual[cite: 6]</li>
      </ul>

      <hr />

      <h2>Exemplos de Uso (if / else / switch)</h2>
      <pre>
        <code>{`int nota = 7;

if(nota >= 7){
    System.out.println("Aprovado");
}else if(nota >= 5){
    System.out.println("Recuperação");
}else{
    System.out.println("Reprovado");
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Escreva um programa que receba a idade de uma pessoa e informe se ela é maior de idade (18 anos ou mais) ou menor de idade.
        </li>
        <li>
          <strong>Exercício 2:</strong> Crie um programa que verifique se um número inteiro digitado é par ou ímpar utilizando o operador módulo (<code>% 2</code>).
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva uma calculadora simples com <code>switch</code> que receba dois números e um operador (+, -, *, /) e exiba o resultado da operação.
        </li>
      </ul>
    </main>
  );
}