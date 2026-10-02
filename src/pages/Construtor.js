import React from 'react';

export function Construtor() {
  return (
    <main className="conteudo">
      <h1>Construtor em Java</h1>

      <p>
        O construtor é um método especial utilizado para inicializar objetos, sendo chamado automaticamente no momento em que a palavra-chave <code>new</code> é acionada[cite: 7].
      </p>

      <hr />

      <h2>Exemplo de Uso</h2>
      <pre>
        <code>{`public class Pessoa {
    private String nome;

    public Pessoa(String nome){
        this.nome = nome;
    }
}

// Criando o objeto:
Pessoa p = new Pessoa("Maria");`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Adicione um construtor com parâmetros na classe <code>Produto</code> (nome, preço e quantidade) criada anteriormente.
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente a sobrecarga de construtores (Overload) em uma classe <code>Livro</code>, permitindo criar um livro apenas com o título ou com título e autor.
        </li>
        <li>
          <strong>Exercício 3:</strong> Crie uma classe <code>Aluno</code> cujos atributos (matricula e nome) sejam obrigatórios na inicialização via construtor.
        </li>
      </ul>
    </main>
  );
}