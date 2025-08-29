// src/App.jsx
import { useEffect } from 'react'; // 1. Importe o useEffect
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis'; // 2. Importe a Lenis

function App() {

  // 3. Adicione o useEffect para controlar a Lenis
  useEffect(() => {
    // Inicializa a Lenis com algumas opções de suavidade
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Função que atualiza a animação a cada frame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Função de limpeza: será executada quando o componente for "desmontado"
    return () => {
      lenis.destroy();
    };
  }, []); // O array vazio [] garante que este efeito rode apenas uma vez

  return (
    <>
      <Header />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </>
  )
}
export default App;