import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importação de todas as páginas
import { Variaveis } from '../pages/Variaveis';
import { EntradaScanner } from '../pages/EntradaScanner';
import { Repeticao } from '../pages/Repeticao';
import { Metodos } from '../pages/Metodos';
import { OrganizacaoCodigo } from '../pages/OrganizacaoCodigo';
import { Packages } from '../pages/Packages';
import { Encapsulamento } from '../pages/Encapsulamento';
import { GettersSetters } from '../pages/GettersSetters';
import { Validacao } from '../pages/Validacao';
import { Excecoes } from '../pages/Excecoes';
import { Heranca } from '../pages/Heranca';
import { Polimorfismo } from '../pages/Polimorfismo';
import { MenuJava } from '../pages/MenuJava';
import { ViewConsole } from '../pages/ViewConsole';
import { DaoBanco } from '../pages/DaoBanco';
import { MvcScanner } from '../pages/MvcScanner';
import { SistemaCompleto } from '../pages/SistemaCompleto';
import { SwingViaCodigo } from '../pages/SwingViaCodigo';
import { Ides } from '../pages/Ides';
import { Resolucoes } from '../pages/Resolucoes';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Variaveis />} />
      <Route path="/variaveis" element={<Variaveis />} />
      <Route path="/entrada-scanner" element={<EntradaScanner />} />
      <Route path="/repeticao" element={<Repeticao />} />
      <Route path="/metodos" element={<Metodos />} />
      <Route path="/organizacao-codigo" element={<OrganizacaoCodigo />} />
      <Route path="/packages" element={<Packages />} />
      <Route path="/encapsulamento" element={<Encapsulamento />} />
      <Route path="/getters-setters" element={<GettersSetters />} />
      <Route path="/validacao" element={<Validacao />} />
      <Route path="/excecoes" element={<Excecoes />} />
      <Route path="/heranca" element={<Heranca />} />
      <Route path="/polimorfismo" element={<Polimorfismo />} />
      <Route path="/menu-java" element={<MenuJava />} />
      <Route path="/view-console" element={<ViewConsole />} />
      <Route path="/dao-banco" element={<DaoBanco />} />
      <Route path="/mvc-scanner" element={<MvcScanner />} />
      <Route path="/sistema-completo" element={<SistemaCompleto />} />
      <Route path="/swing-via-codigo" element={<SwingViaCodigo />} />
      <Route path="/ides" element={<Ides />} />
      <Route path="/resolucoes" element={<Resolucoes />} />
    </Routes>
  );
}