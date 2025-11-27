// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { Dashboard } from "./pages/Dashboard";
import { Clientes } from "./pages/Clientes";
import { Estoque } from "./pages/Estoque";
import { Vendas } from "./pages/Vendas";

// Crie placeholders para as outras páginas para não dar erro
const Faturamento = () => (
  <h1 className="p-8 text-2xl text-white">Página de Faturamento (Em breve)</h1>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota Pai (O Layout com a Sidebar) */}
        <Route path="/" element={<AppLayout />}>
          {/* Rota Index: Redireciona '/' para '/dashboard' */}
          <Route index element={<Navigate to="/dashboard" replace />} />

          <Route path="dashboard" element={<Dashboard />} />
          <Route path="estoque" element={<Estoque />} />
          <Route path="vendas" element={<Vendas />} />
          <Route path="faturamento" element={<Faturamento />} />
          <Route path="clientes" element={<Clientes />} />
        </Route>

        {/* Futuramente: Rota de Login (fora do layout) */}
        {/* <Route path="/login" element={<Login />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
