import React from 'react';

export function DaoArrayLista() {
  return (
    <main className="conteudo">
      <h1>DAO com ArrayList</h1>

      <p>
        O padrão DAO (Data Access Object) isola a persistência e o acesso aos dados da regra de negócio central da aplicação[cite: 10].
      </p>

      <hr />

      <h2>Estrutura CRUD no DAO</h2>
      <pre>
        <code>{`public class PessoaDAO {
    private ArrayList<Pessoa> lista = new ArrayList<>();

    public void adicionar(Pessoa p){ lista.add(p); }
    public ArrayList<Pessoa> listar(){ return lista; }
    public void remover(int index){ lista.remove(index); }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie um DAO exclusivo para gerenciar uma lista de <code>Cliente</code> utilizando <code>ArrayList</code>.
        </li>
        <li>
          <strong>Exercício 2:</strong> Adicione o método <code>buscarPorId(int id)</code> dentro do DAO de clientes.
        </li>
        <li>
          <strong>Exercício 3:</strong> Escreva testes unitários na classe <code>Main</code> simulando múltiplos cadastros, remoções e listagens encadeadas.
        </li>
      </ul>
    </main>
  );
}