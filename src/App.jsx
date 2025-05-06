import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useContext, useEffect } from "react";
import Home from "./components/pages/Home";
import NovoProjeto from "./components/pages/NovoProjeto";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import Projetos from "./components/pages/Projetos";
import Projeto from "./components/pages/Projeto";

import Container from "./components/layout/Container";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import TemaContext from "./components/tema/TemaContext";
import './App.css'

function App() {
  const { tema, toggleTema } = useContext(TemaContext); 
  useEffect(() => {
    if (tema) {
      document.body.classList.remove("light", "dark");
      document.body.classList.add(tema);
    }
  }, [tema]);
  const temaBotao = {
    backgroundColor: tema === 'light' ? '#222' : '#efefef',
    color: tema === 'light' ? '#efefef' : '#222',
    padding: '.3rem'
  };
  return (
    <div className={tema} >
      <Router>
        <Navbar />
        <div style={{ padding: "1rem" }}>
          <button onClick={toggleTema} style={temaBotao}>
            Alternar para tema {tema === 'light' ? 'escuro' : 'claro'}
          </button>
        </div>

        <Container customClass="min-height">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/novo-projeto" element={<NovoProjeto />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/projeto/:id" element={<Projeto />} />
          </Routes>
        </Container>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
