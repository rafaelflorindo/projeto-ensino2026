import React from 'react';

export function ControllerDaoMysql() {
  return (
    <main className="conteudo">
      <h1>Controller com DAO (MySQL)</h1>

      <p>
        Nesta etapa, conectamos a aplicação a um banco de dados relacional MySQL. O grande diferencial é que <strong>o Controller permanece idêntico</strong>, mudando apenas a implementação interna do DAO[cite: 9].
      </p>

      <hr />

      <h2>Exemplo de Operação no DAO (MySQL)</h2>
      <pre>
        <code>{`public void inserir(Pessoa p) throws Exception {
    Connection conn = Conexao.conectar();
    String sql = "INSERT INTO pessoa (nome, idade) VALUES (?, ?)";
    PreparedStatement stmt = conn.prepareStatement(sql);
    stmt.setString(1, p.getNome());
    stmt.setInt(2, p.getIdade());
    stmt.execute();
    conn.close();
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Configure a classe de conexão com o banco de dados MySQL para um sistema escolar (tabela <code>aluno</code>).
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente a operação de exclusão (DELETE) no DAO utilizando o ID do registro no MySQL.
        </li>
        <li>
          <strong>Exercício 3:</strong> Crie um método de listagem avançada no DAO que retorne apenas registros que atendam a um critério específico do banco.
        </li>
      </ul>
    </main>
  );
}