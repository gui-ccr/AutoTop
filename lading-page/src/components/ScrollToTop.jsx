// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  // O hook useLocation nos dá acesso à localização atual (URL)
  const { pathname } = useLocation();

  // O useEffect é usado para executar um "efeito colateral"
  // Neste caso, nosso efeito é rolar a página para o topo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); // A mágica está aqui: este efeito roda toda vez que o 'pathname' (a URL) muda

  return null; // Este componente não precisa renderizar nada no HTML
}

export default ScrollToTop;