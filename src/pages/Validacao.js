import React from 'react';

export function Validacao() {
  return (
    <main className="conteudo">
      <h1>Validação de Dados</h1>

      <p>
        Garantir que os dados informados pelo utilizador sejam válidos previne erros e melhora a confiabilidade do software[cite: 28].
      </p>

      <hr />

      <h2>Boas Práticas de Validação</h2>
      <ul>
        <li>Validação na entrada para evitar falhas imediatas[cite: 28]</li>
        <li>Validação no método <code>setter</code> para proteger o estado do objeto[cite: 28]</li>
      </ul>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie uma rotina de repetição que impeça a inserção de salários com valores negativos[cite: 28].
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente validações lógicas dentro do método <code>set</code> de uma classe de domínio personalizada[cite: 28].
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva a atividade sugerida validando a idade informada pelo utilizador através de estruturas de controle[cite: 28].
        </li>
      </ul>
    </main>
  );
}