import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import { Home } from './components/Home';
import { Blog } from './components/Blog';
import { Sobre } from './components/Sobre';
import { Descricao } from './components/Descricao';
import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />

        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/descricao" element={<Descricao />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
