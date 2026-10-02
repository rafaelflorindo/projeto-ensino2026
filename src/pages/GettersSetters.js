import React from 'react';

export function GettersSetters() {
  return (
    <main className="conteudo">
      <h1>Getters e Setters</h1>

      <p>
        Getters e Setters são métodos utilizados para acessar e modificar atributos privados com segurança e controle[cite: 16].
      </p>

      <hr />

      <h2>Estrutura Básica</h2>
      <pre>
        <code>{`public class Pessoa {
    private String nome;

    public String getNome(){ return nome; }
    public void setNome(String nome){ this.nome = nome; }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie uma classe <code>Livro</code> contendo atributos privados para título e número de páginas, aplicando os respectivos getters e setters.
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente validações dentro dos setters de uma classe <code>Funcionario</code> para garantir que o salário não seja configurado com valores negativos.
        </li>
        <li>
          <strong>Exercício 3:</strong> Escreva uma classe de teste (Main) que instancie objetos e manipule seus dados exclusivamente por meio de getters e setters.
        </li>
      </ul>
    </main>
  );
}