import React from 'react';

export function MenuJava() {
  return (
    <main className="conteudo">
      <h1>Menu em Java com do-while e switch</h1>

      <p>
        Para apresentar opções interativas ao usuário de forma contínua até que ele decida sair, combinamos as estruturas <strong>do-while</strong> e <strong>switch</strong>[cite: 19].
      </p>

      <hr />

      <h2>Exemplo de Estrutura</h2>
      <pre>
        <code>{`int opcao;
do {
    System.out.println("1 - Cadastrar\\n2 - Sair");
    opcao = scanner.nextInt();
    switch(opcao) {
        case 1: /* Ação */ break;
    }
} while(opcao != 2);`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie um menu interativo com opções para inserir e exibir um nome informado pelo usuário[cite: 19].
        </li>
        <li>
          <strong>Exercício 2:</strong> Adicione uma opção de tratamento para valores inválidos utilizando o bloco <code>default</code> no comando <code>switch</code>[cite: 19].
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva um menu de conversão de unidades (temperatura ou moeda) utilizando a mesma estrutura de repetição e decisão.
        </li>
      </ul>
    </main>
  );
}