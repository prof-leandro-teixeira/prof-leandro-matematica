import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import Home from './pages/Home';
import Aulas from './pages/Aulas';
import Conheca from './pages/Conheca';
import Depoimentos from './pages/Depoimentos';
import Contato from './pages/Contato';

import '../src/index.css';

function App() {
  return (
    <Router>
      <div>
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Conheca" element={<Conheca />} />
          <Route path="/Aulas" element={<Aulas />} />
          <Route path="/Depoimentos" element={<Depoimentos />} />
          <Route path="/Contato" element={<Contato />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

