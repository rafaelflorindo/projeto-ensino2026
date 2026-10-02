import React from 'react';
import { Link } from 'react-router-dom';

export function Sidebar() {
  return (
    <nav className="sidebar-menu">
      <h3>Módulos do Curso</h3>
      <ul>
        <li><Link to="/">Introdução</Link></li>
        <li><Link to="/variaveis">Variáveis</Link></li>
        <li><Link to="/entrada-scanner">Entrada com Scanner</Link></li>
        <li><Link to="/repeticao">Estruturas de Repetição</Link></li>
        <li><Link to="/metodos">Métodos</Link></li>
        <li><Link to="/organizacao-codigo">Organização do Código</Link></li>
        <li><Link to="/packages">Packages</Link></li>
        <li><Link to="/encapsulamento">Encapsulamento</Link></li>
        <li><Link to="/getters-setters">Getters e Setters</Link></li>
        <li><Link to="/validacao">Validação de Dados</Link></li>
        <li><Link to="/excecoes">Tratamento de Exceções</Link></li>
        <li><Link to="/heranca">Herança</Link></li>
        <li><Link to="/polimorfismo">Polimorfismo</Link></li>
        <li><Link to="/menu-java">Menu com do-while</Link></li>
        <li><Link to="/view-console">View (Console)</Link></li>
        <li><Link to="/dao-banco">DAO com MySQL</Link></li>
        <li><Link to="/mvc-scanner">MVC com Scanner</Link></li>
        <li><Link to="/sistema-completo">Sistema Completo</Link></li>
        <li><Link to="/swing-via-codigo">Introdução ao Swing</Link></li>
        <li><Link to="/ides">IDEs para Java</Link></li>
        <li><Link to="/resolucoes">Resoluções de Exercícios</Link></li>
      </ul>
    </nav>
  );
}