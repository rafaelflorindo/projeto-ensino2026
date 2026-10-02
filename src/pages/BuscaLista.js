import React from 'react';

export function BuscaLista() {
  return (
    <main className="conteudo">
      <h1>Busca em ArrayList</h1>

      <p>
        Buscar dados em uma lista é uma das operações mais importantes em programação[cite: 4]. A busca consiste em percorrer os elementos e verificar se algum atende a uma condição[cite: 4].
      </p>

      <hr />

      <h2>Exemplo de Busca com Variável de Controle</h2>
      <pre>
        <code>{`boolean encontrado = false;
String busca = "Maria";

for(String nome : nomes){
    if(nome.equals(busca)){
        encontrado = true;
        break; // Interrompe o laço assim que encontra
    }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Implemente um sistema de busca em um <code>ArrayList</code> de cidades que retorne a posição (índice) exata onde a cidade foi encontrada.
        </li>
        <li>
          <strong>Exercício 2:</strong> Crie uma busca por ID em uma lista de objetos de uma classe <code>Funcionario</code>, exibindo os dados completos caso o ID corresponda.
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva um algoritmo de busca parcial (usando o método <code>contains</code> das strings) para encontrar todos os nomes que iniciem com uma letra específica digitada pelo usuário.
        </li>
      </ul>
    </main>
  );
}