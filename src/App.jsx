import { Routes, Route } from 'react-router-dom';
import { Footer } from './Componentes/Footer';
import { Header } from './Componentes/Header';
import { Missao } from './Missao';
import { Produtos } from './Produtos';
import { Historia } from './Historia';
import { Contato } from './Contato';
import { Home } from './Home';
import './styles.global.css';


function App() {

  return (
    <div>
      <Header />
      {/* <header>
        <h1>Meu site</h1>
      </header> */}

      
      <div>
      
        <Routes>
          <Route path='/' element={<Home nomePagina="Página Inicial"/>} />
          <Route path='/missao' element={<Missao nomePagina="Nossa Missão"/>} />
          <Route path='/produtos' element={<Produtos nomePagina="Nossos Produtos"/>} />
          <Route path='/historia' element={<Historia nomePagina="Nossa História"/>} />
          <Route path='/contato' element={<Contato nomePagina="Contatos"/>} />

        </Routes>
      </div>


      <Footer />
    </div>
  )
}

export default App
