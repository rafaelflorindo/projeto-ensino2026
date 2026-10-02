import React from 'react';

export function ViewConsole() {
  return (
    <main className="conteudo">
      <h1>View (Interface no Console)</h1>

      <p>
        A <strong>View</strong> é a camada responsável pela interação direta com o utilizador, exibindo dados e lendo informações digitadas sem acumular regras de negócio[cite: 30].
      </p>

      <hr />

      <h2>Responsabilidades da View</h2>
      <ul>
        <li>Exibir informações na tela[cite: 30]</li>
        <li>Ler dados inseridos via teclado[cite: 30]</li>
      </ul>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie métodos específicos na classe <code>PessoaView</code> para capturar o endereço e o telefone do utilizador[cite: 30].
        </li>
        <li>
          <strong>Exercício 2:</strong> Desenvolva uma nova rotina de exibição formatada para relatórios textuais no console[cite: 30].
        </li>
        <li>
          <strong>Exercício 3:</strong> Certifique-se de que a sua classe de View atual não contenha chamadas diretas ao banco de dados ou regras complexas[cite: 30].
        </li>
      </ul>
    </main>
  );
}