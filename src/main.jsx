// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// import de paginas
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx';
import VehicleDetailPage from './pages/VehicleDetailPage.jsx'; 
import StockPage from './pages/StockPage.jsx'; 
import AboutPage from './pages/AboutPage.jsx'; 


// import de estilização
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/estoque", 
        element: <StockPage />,
      },
      {
        path: "/sobre", 
        element: <AboutPage />,
      },
      {
        path: "/veiculo/:id", // Rota dinâmica! O :id é uma variável.
        element: <VehicleDetailPage />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)