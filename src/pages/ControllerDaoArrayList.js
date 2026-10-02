import React from 'react';

export function ControllerDaoArrayList() {
  return (
    <main className="conteudo">
      <h1>Controller com DAO (ArrayList)</h1>

      <p>
        A separação em camadas separa as responsabilidades da aplicação utilizando o fluxo: <strong>Main → Controller → DAO → ArrayList</strong>[cite: 8].
      </p>

      <hr />

      <h2>Resumo da Arquitetura</h2>
      <ul>
        <li><strong>Model:</strong> Representa os dados estruturados[cite: 8].</li>
        <li><strong>DAO:</strong> Gerencia o armazenamento e operações básicas[cite: 8].</li>
        <li><strong>Controller:</strong> Intermedeia as regras de negócio e fluxo[cite: 8].</li>
      </ul>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Refatore o projeto atual para incluir a camada DAO e Controller na entidade <code>Produto</code>.
        </li>
        <li>
          <strong>Exercício 2:</strong> Adicione uma regra de negócio no <code>Controller</code> que impeça o cadastro de produtos com preços negativos.
        </li>
        <li>
          <strong>Exercício 3:</strong> Implemente um método de atualização de registros utilizando o padrão DAO com <code>ArrayList</code>.
        </li>
      </ul>
    </main>
  );
}