import React from 'react';

export function Array() {
  return (
    <main className="conteudo">
      <h1>Arrays em Java</h1>

      <p>
        Um <strong>Array</strong> é uma estrutura utilizada para armazenar vários valores do mesmo tipo em uma única variável[cite: 1].
      </p>

      <p>
        Cada valor é armazenado em uma posição chamada <strong>índice</strong>. Os índices começam sempre em <strong>0</strong>[cite: 1].
      </p>

      <hr />

      <h2>Criando um Array</h2>
      <pre>
        <code>{`int[] numeros = new int[3];`}</code>
      </pre>
      <p>
        Neste exemplo criamos um array chamado <strong>numeros</strong> com espaço para armazenar <strong>3 números inteiros</strong>[cite: 1].
      </p>

      <hr />

      <h2>Utilizando o Array sem laço de repetição</h2>
      <pre>
        <code>{`int[] numeros = new int[3];

numeros[0] = 10;
numeros[1] = 20;
numeros[2] = 30;

System.out.println(numeros[0]);
System.out.println(numeros[1]);
System.out.println(numeros[2]);`}</code>
      </pre>
      <p>Cada posição do array é acessada utilizando o índice[cite: 1].</p>

      <hr />

      <h2>Utilizando o Array com laço de repetição</h2>
      <p>
        Quando precisamos acessar todos os elementos do array, normalmente utilizamos um laço <strong>for</strong>[cite: 1].
      </p>
      <pre>
        <code>{`int[] numeros = {10, 20, 30};

for(int i = 0; i < numeros.length; i++){
    System.out.println(numeros[i]);
}`}</code>
      </pre>
      <p>O atributo <strong>length</strong> indica o tamanho do array[cite: 1].</p>

      <hr />

      <h2>Resumo</h2>
      <ul>
        <li>Arrays armazenam vários valores do mesmo tipo[cite: 1]</li>
        <li>O índice sempre começa em 0[cite: 1]</li>
        <li>O tamanho do array é fixo[cite: 1]</li>
        <li>Arrays também podem armazenar objetos[cite: 1]</li>
      </ul>

      <hr />

      <h2>Atividade</h2>
      <p>
        Crie um array com <strong>4 objetos Pessoa</strong> e exiba os dados utilizando um <strong>for</strong>[cite: 1].
      </p>
    </main>
  );
}