import React from 'react';

export function DaoBanco() {
  return (
    <main className="conteudo">
      <h1>DAO com MySQL</h1>

      <p>
        Neste exemplo utilizamos o padrão DAO (Data Access Object) com um banco de dados MySQL, permitindo a persistência real dos dados[cite: 12].
      </p>

      <hr />

      <h2>Classe de Conexão</h2>
      <pre>
        <code>{`import java.sql.Connection;
import java.sql.DriverManager;

public class Conexao {
    public static Connection conectar() throws Exception {
        String url = "jdbc:mysql://localhost:3306/teste";
        String user = "root";
        String password = "";
        return DriverManager.getConnection(url, user, password);
    }
}`}</code>
      </pre>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Crie um novo método no <code>PessoaDAO</code> para buscar registros cujo nome contenha um termo específico (pesquisa parcial com <code>LIKE</code>).
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente uma rotina de tratamento de exceções (try-catch) robusta na classe de conexão para capturar falhas de driver ou URL incorreta.
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva uma tabela <code>produto</code> no MySQL e escreva o DAO completo correspondente para ela.
        </li>
      </ul>
    </main>
  );
}