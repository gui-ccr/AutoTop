// src/App.jsx
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        {/* O <Outlet> é o espaço onde as páginas (HomePage, etc.) serão renderizadas */}
        <Outlet /> 
      </main>
      <Footer />
    </>
  )
}
export default App;