import React from 'react';

export function ArrayListPratico() {
  return (
    <main className="conteudo">
      <h1>ArrayList na prática</h1>

      <p>
        Nesta aula, vamos construir um pequeno sistema utilizando <strong>ArrayList</strong>, entrada de dados com <strong>Scanner</strong> e um menu interativo com operações de CRUD[cite: 3].
      </p>

      <hr />

      <h2>Programa com menu (CRUD)</h2>
      <pre>
        <code>{`import java.util.ArrayList;
import java.util.Scanner;

public class Sistema {
    static Scanner sc = new Scanner(System.in);
    static ArrayList<Pessoa> lista = new ArrayList<>();

    public static void main(String[] args) {
        int opcao;
        do {
            System.out.println("\\n--- MENU ---");
            System.out.println("1 - Cadastrar");
            System.out.println("2 - Listar");
            System.out.println("3 - Atualizar");
            System.out.println("4 - Remover");
            System.out.println("0 - Sair");

            System.out.print("Escolha uma opção: ");
            opcao = sc.nextInt();
            sc.nextLine();

            switch (opcao) {
                case 1: cadastrar(); break;
                case 2: listar(); break;
                case 3: atualizar(); break;
                case 4: remover(); break;
            }
        } while (opcao != 0);
    }
    // Métodos de CRUD omitidos para brevidade...
}`}</code>
      </pre>

      <hr />

      <h2>Explicação</h2>
      <ul>
        <li><strong>ArrayList</strong> → armazena os objetos[cite: 3]</li>
        <li><strong>Scanner</strong> → entrada de dados[cite: 3]</li>
        <li><strong>Menu</strong> → interação com o usuário[cite: 3]</li>
        <li><strong>Métodos estáticos</strong> → organizam o código[cite: 3]</li>
        <li><strong>CRUD</strong> → Create, Read, Update, Delete[cite: 3]</li>
      </ul>
    </main>
  );
}