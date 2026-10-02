import React from 'react';

export function Polimorfismo() {
  return (
    <main className="conteudo">
      <h1>Polimorfismo</h1>

      <p>
        Polimorfismo é um dos pilares da Programação Orientada a Objetos, significando <strong>"muitas formas"</strong>[cite: 23].
      </p>

      <p>
        Na prática, permite que um mesmo método tenha comportamentos diferentes dependendo da classe que o implementa[cite: 23].
      </p>

      <hr />

      <h2>Exemplo de Polimorfismo</h2>
      <pre>
        <code>{`class Animal {
    public void emitirSom() {
        System.out.println("Som do animal");
    }
}

class Cachorro extends Animal {
    public void emitirSom() {
        System.out.println("Latido");
    }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie uma superclasse <code>Funcionario</code> com um método <code>calcularBonus()</code> e duas subclasses com regras distintas de bônus[cite: 23].
        </li>
        <li>
          <strong>Exercício 2:</strong> Desenvolva um método principal que receba uma lista de objetos polimórficos e execute suas respectivas ações em loop[cite: 23].
        </li>
        <li>
          <strong>Exercício 3:</strong> Implemente a atividade sugerida no documento original criando a classe <code>Veiculo</code> e suas derivações <code>Carro</code> e <code>Moto</code>[cite: 23].
        </li>
      </ul>
    </main>
  );
}