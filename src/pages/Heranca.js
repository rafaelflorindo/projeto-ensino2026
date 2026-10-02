import React from 'react';

export function Heranca() {
  return (
    <main className="conteudo">
      <h1>Herança em Java</h1>

      <p>
        A herança permite que uma classe herde atributos e métodos de outra classe, promovendo a reutilização de código e a organização estrutural[cite: 17].
      </p>

      <hr />

      <h2>Exemplo com extends</h2>
      <pre>
        <code>{`public class Pessoa {
    String nome;
}

public class Aluno extends Pessoa {
    int matricula;
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie uma superclasse <code>Funcionario</code> e uma subclasse <code>Gerente</code> que herde seus traços e adicione um atributo de departamento[cite: 17].
        </li>
        <li>
          <strong>Exercício 2:</strong> Sobrescreva (override) um método de exibição de dados na classe filha para incluir as informações específicas da subclasse.
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva uma hierarquia de classes para veículos (Veiculo → Carro e Moto) explorando propriedades herdadas.
        </li>
      </ul>
    </main>
  );
}