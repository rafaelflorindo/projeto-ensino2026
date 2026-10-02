import React from 'react';

export function SistemaCompleto() {
  return (
    <main className="conteudo">
      <h1>Sistema Completo (MVC + DAO + MySQL)</h1>

      <p>
        Nesta etapa integramos <strong>Model, View, Controller, DAO e Banco de Dados</strong> em uma aplicação real de mercado[cite: 26].
      </p>

      <hr />

      <h2>Fluxo da aplicação</h2>
      <pre>
        <code>{`Main → View → Controller → DAO → Banco de Dados`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Adicione um novo campo (ex: <code>telefone</code>) à tabela do banco e atualize todas as camadas do projeto[cite: 26].
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente uma nova opção no menu da View para realizar consultas avançadas por ID[cite: 26].
        </li>
        <li>
          <strong>Exercício 3:</strong> Garanta o fechamento adequado de conexões utilizando o bloco <code>try-with-resources</code> nas consultas do DAO[cite: 26].
        </li>
      </ul>
    </main>
  );
}