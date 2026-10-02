import React from 'react';

export function MvcScanner() {
  return (
    <main className="conteudo">
      <h1>MVC Completo com Scanner</h1>

      <p>
        Agora vamos integrar todos os conceitos aprendidos em uma única estrutura: <strong>Model, View, Controller e DAO</strong>[cite: 11].
      </p>

      <hr />

      <h2>O que é MVC?</h2>
      <p>O MVC é um padrão de arquitetura que separa o sistema em três partes[cite: 11]:</p>
      <ul>
        <li><strong>Model</strong> → dados[cite: 11]</li>
        <li><strong>View</strong> → interface[cite: 11]</li>
        <li><strong>Controller</strong> → controle[cite: 11]</li>
      </ul>

      <hr />

      <h2>Fluxo da aplicação</h2>
      <pre>
        <code>{`Main → View → Controller → DAO → Dados`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Adapte a classe <code>PessoaView</code> para incluir um campo de leitura de email utilizando <code>Scanner</code>.
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente um novo método no <code>PessoaController</code> responsável por atualizar os dados de uma pessoa já cadastrada a partir da entrada da View.
        </li>
        <li>
          <strong>Exercício 3:</strong> Adicione uma opção de menu na View para filtrar os registros por faixa de idade através do Controller.
        </li>
      </ul>
    </main>
  );
}