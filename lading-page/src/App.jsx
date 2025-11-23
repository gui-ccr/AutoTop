// src/App.jsx
import { useEffect, useRef } from 'react'; // 1. Importe useRef
import { Outlet, useLocation } from 'react-router-dom'; // 2. Importe useLocation
import Header from './components/Header';
import Footer from './components/Footer';
import Lenis from '@studio-freight/lenis';

function App() {
  const lenisRef = useRef(null); // Cria nossa "caixinha" para guardar a Lenis
  const { pathname } = useLocation(); // Pega a URL atual

  // Efeito para inicializar e controlar a Lenis
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //   });

  //   lenisRef.current = lenis; // Guarda a instância da Lenis na nossa "caixinha"

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }
  //   requestAnimationFrame(raf);

  //   // Função de limpeza
  //   return () => {
  //     lenis.destroy();
  //     lenisRef.current = null;
  //   };
  // }, []);

  // // 3. NOVO EFEITO: Rola para o topo quando a URL muda
  // useEffect(() => {
  //   // Usamos ?. para garantir que o código não quebre se lenisRef.current for nulo
  //   lenisRef.current?.scrollTo(0, { immediate: true });
  // }, [pathname]); // Roda toda vez que o pathname (URL) muda

  return (
    <>
      {/* 4. Podemos remover o <ScrollToTop /> daqui */}
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
export default App;