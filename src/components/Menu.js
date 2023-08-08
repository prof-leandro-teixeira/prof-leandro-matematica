// src/components/Menu
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
    <nav id="menu-horizontal">    
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Conheca">Conheça o professor</Link></li> 
        <li><Link to="/Aulas">Aulas</Link></li>
        <li><Link to="/Depoimentos">Depoimentos</Link></li>
        <li><Link to="/Contato">Fale Conosco</Link></li>
      </ul>
    </nav>
    
    <div className="img1">
          <img src="foto.jpg" alt="Apresentação" />
        </div>
    
     <div className="rodape">
     <footer id="rodape">Todos os direitos reservados. Para usar nosso conteúdo, incluindo textos ou imagens, entre em contato para autorização.
      </footer>
   </div>
   </div>
  );
}

export default Menu;
