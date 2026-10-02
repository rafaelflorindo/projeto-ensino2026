import React from 'react';

export function ArrayList() {
  return (
    <main className="conteudo">
      <h1>ArrayList em Java</h1>

      <p>
        O <strong>ArrayList</strong> é uma estrutura de dados utilizada para armazenar vários elementos em uma lista[cite: 2]. Diferente dos arrays tradicionais, o ArrayList possui <strong>tamanho dinâmico</strong>[cite: 2].
      </p>

      <hr />

      <h2>Criando e Manipulando um ArrayList</h2>
      <pre>
        <code>{`import java.util.ArrayList;

ArrayList<String> nomes = new ArrayList<>();
nomes.add("Ana");
nomes.add("Carlos");
nomes.add("Maria");

// Alterando e removendo
nomes.set(1, "João");
nomes.remove(0);`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie um <code>ArrayList</code> de números inteiros, adicione 5 números e exiba a soma de todos eles utilizando um laço de repetição.
        </li>
        <li>
          <strong>Exercício 2:</strong> Desenvolva um programa que armazene nomes de produtos em um <code>ArrayList</code> e permita ao usuário pesquisar se um determinado produto existe na lista.
        </li>
        <li>
          <strong>Exercício 3:</strong> Crie um <code>ArrayList</code> de objetos <code>Produto</code> (com nome e preço) e exiba todos os itens cadastrados formatados na tela.
        </li>
      </ul>
    </main>
  );
}