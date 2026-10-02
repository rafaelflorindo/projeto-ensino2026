import React from 'react';

export function Encapsulamento() {
  return (
    <main className="conteudo">
      <h1>Encapsulamento</h1>

      <p>
        Encapsulamento é um dos pilares da Programação Orientada a Objetos. Ele consiste em proteger os atributos de uma classe, permitindo que eles sejam acessados ou modificados apenas através de métodos[cite: 13].
      </p>

      <hr />

      <h2>Atributos privados e Getters/Setters</h2>
      <pre>
        <code>{`public class Pessoa {
    private String nome;

    public String getNome(){
        return nome;
    }

    public void setNome(String nome){
        this.nome = nome;
    }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie uma classe chamada <code>Produto</code> com os atributos privados <code>nome</code> e <code>preco</code>, implementando seus respectivos métodos <code>get</code> e <code>set</code>[cite: 13].
        </li>
        <li>
          <strong>Exercício 2:</strong> Adicione uma validação no método <code>setPreco</code> da classe <code>Produto</code> para garantir que o preço nunca seja atribuído com valores negativos.
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva uma classe <code>ContaBancaria</code> encapsulada que controle o saldo internamente através de operações controladas de depósito e saque.
        </li>
      </ul>
    </main>
  );
}