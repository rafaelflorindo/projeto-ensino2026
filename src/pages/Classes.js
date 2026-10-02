import React from 'react';

export function Classes() {
  return (
    <main className="conteudo">
      <h1>Classes em Java</h1>

      <p>
        Uma classe é um modelo ou estrutura utilizada para criar objetos, definindo quais atributos (características) e métodos (ações) eles terão[cite: 5].
      </p>

      <hr />

      <h2>Estrutura Básica</h2>
      <pre>
        <code>{`public class Pessoa {
    String nome;
    int idade;

    public void apresentar(){
        System.out.println("Meu nome é " + nome);
    }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie uma classe chamada <code>Carro</code> com atributos como marca, modelo e ano, além de um método para ligar o veículo.
        </li>
        <li>
          <strong>Exercício 2:</strong> Desenvolva uma classe <code>ContaBancaria</code> com os atributos titular e saldo, implementando métodos para depositar e sacar valores.
        </li>
        <li>
          <strong>Exercício 3:</strong> Crie uma classe <code>Retangulo</code> com largura e altura, e adicione um método que retorne o valor da área total.
        </li>
      </ul>
    </main>
  );
}