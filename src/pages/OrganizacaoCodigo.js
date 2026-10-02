import React from 'react';

export function OrganizacaoCodigo() {
  return (
    <main className="conteudo">
      <h1>Organização do Código</h1>

      <p>
        Organizar o código é fundamental para facilitar a leitura, manutenção e evolução do sistema[cite: 21].
      </p>

      <p>
        Programas desorganizados tornam-se difíceis de entender e modificar[cite: 21].
      </p>

      <hr />

      <h2>Problema comum</h2>
      <p>
        No início, é comum colocar toda a lógica dentro do método <strong>main</strong>[cite: 21].
      </p>
      <pre>
        <code>{`public class Exemplo {
    public static void main(String[] args) {
        System.out.println("Bem-vindo!");
        int a = 10;
        int b = 20;
        int soma = a + b;
        System.out.println("Resultado: " + soma);
    }
}`}</code>
      </pre>

      <hr />

      <h2>Solução: uso de métodos</h2>
      <p>
        Podemos dividir o programa em métodos, onde cada parte tem uma responsabilidade[cite: 21].
      </p>

      <hr />

      <h2>Exercícios Práticos</h2>
      <ul>
        <li>
          <strong>Exercício 1:</strong> Pegue um programa procedural antigo e reestruture-o criando pelo menos três métodos separados[cite: 21].
        </li>
        <li>
          <strong>Exercício 2:</strong> Implemente um método isolado responsável estritamente por validar se um número inserido é positivo.
        </li>
        <li>
          <strong>Exercício 3:</strong> Desenvolva uma classe contendo métodos independentes para cálculo de área de diferentes formas geométricas.
        </li>
      </ul>
    </main>
  );
}