import React from 'react';

export function SwingViaCodigo() {
  return (
    <main className="conteudo">
      <h1>Introdução ao Swing (via código)</h1>

      <p>
        O <strong>Swing</strong> é uma biblioteca do Java voltada para a criação de interfaces gráficas baseadas em componentes[cite: 27].
      </p>

      <hr />

      <h2>Componentes Principais</h2>
      <ul>
        <li><strong>JFrame</strong> → janela principal[cite: 27]</li>
        <li><strong>JLabel</strong> → texto na tela[cite: 27]</li>
        <li><strong>JTextField</strong> → campo de entrada[cite: 27]</li>
        <li><strong>JButton</strong> → botão de ação[cite: 27]</li>
      </ul>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Adicione um campo de texto extra na tela de cadastro do Swing para capturar o email do usuário[cite: 27].
        </li>
        <li>
          <strong>Exercício 2:</strong> Modifique a cor de fundo ou o layout da janela utilizando as propriedades nativas do <code>JFrame</code>[cite: 27].
        </li>
        <li>
          <strong>Exercício 3:</strong> Implemente uma validação no evento do botão para exibir uma mensagem de erro se os campos estiverem vazios[cite: 27].
        </li>
      </ul>
    </main>
  );
}