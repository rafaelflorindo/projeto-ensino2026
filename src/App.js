import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

// Importação dos componentes estruturais
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';

// Importação das rotas
import { AppRoutes } from './routes/AppRoutes';

export function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <div className="content-layout">
          <Sidebar />

          <main className="content-area">
            <AppRoutes />
          </main>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;