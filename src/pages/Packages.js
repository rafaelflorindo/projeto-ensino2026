import React from 'react';

export function Packages() {
  return (
    <main className="conteudo">
      <h1>Packages em Java</h1>

      <p>
        Packages (pacotes) são utilizados para organizar classes em Java[cite: 22].
      </p>

      <p>
        Eles funcionam como pastas dentro do projeto, permitindo separar o código por responsabilidade[cite: 22].
      </p>

      <hr />

      <h2>Por que usar packages?</h2>
      <ul>
        <li>Organizar melhor o projeto[cite: 22]</li>
        <li>Facilitar a manutenção[cite: 22]</li>
        <li>Evitar conflitos de nomes[cite: 22]</li>
      </ul>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie um pacote chamado <code>model</code> e insira nele uma classe <code>Cliente</code>[cite: 22].
        </li>
        <li>
          <strong>Exercício 2:</strong> Estruture um novo pacote <code>controller</code> e crie uma classe que faça a gestão das instâncias de <code>Cliente</code>[cite: 22].
        </li>
        <li>
          <strong>Exercício 3:</strong> Utilize o comando de importação adequado para instanciar a classe <code>Cliente</code> a partir de uma classe <code>Main</code> localizada na raiz do projeto[cite: 22].
        </li>
      </ul>
    </main>
  );
}