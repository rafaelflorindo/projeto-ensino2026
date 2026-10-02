import React from 'react';

export function Footer() {
  return (
<footer className="main-footer">
          <div className="footer-content">
            <img 
              src={`${process.env.PUBLIC_URL}/assets/img/footer.png`}
              alt="Logo Rodapé Senac" 
              className="footer-logo" 
            />
            <div className="footer-info">
              <p><strong>Docente:</strong> Rafael Alves Florindo | <strong>E-mail:</strong> rafael.florindo@docente.pr.senac.br</p>
              <p><strong>Unidade:</strong> UEPT03 - Faculdade Senac Maringá | <strong>Curso:</strong> Análise e Desenvolvimento de Sistemas</p>
              <p className="footer-year">&copy; 2026 - Todos os direitos reservados</p>
            </div>
          </div>
        </footer>

          );
}