// Página de Estoque - Gerenciamento completo de veículos

import { Card } from "../components/ui/Card";
import { EstoqueHeader, EstoqueStats, EstoqueGrid } from "../components/features/Estoque";

export function Estoque() {
  // Dados mockados - estatísticas de estoque
  const stats = [
    {
      id: '1',
      label: 'Total em Estoque',
      value: 42,
      trend: '+4 novos',
      trendPositive: true,
      icon: 'car',
    },
    {
      id: '2',
      label: 'Disponíveis',
      value: 37,
      trend: '88% do total',
      trendPositive: true,
      icon: 'check-circle',
    },
    {
      id: '3',
      label: 'Reservados',
      value: 5,
      icon: 'clock',
    },
    {
      id: '4',
      label: 'Valor Total',
      value: 'R$ 5.8M',
      trend: '+2.3M este mês',
      trendPositive: true,
      icon: 'dollar-sign',
    },
  ];

  // Dados mockados - veículos em estoque
  const veiculos = [
    {
      id: '1',
      modelo: 'Corolla XEI',
      marca: 'Toyota',
      ano: 2024,
      cor: 'Prata',
      placa: 'ABC-1234',
      chassi: '9BWZZZ377VT004251',
      quilometragem: 0,
      combustivel: 'Flex',
      preco: 145000,
      status: 'disponivel' as const,
      imagem: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400',
      categoria: 'Sedan',
      dataEntrada: new Date(2024, 10, 15).toISOString(),
    },
    {
      id: '2',
      modelo: 'Civic Touring',
      marca: 'Honda',
      ano: 2024,
      cor: 'Preto',
      placa: 'DEF-5678',
      chassi: '9BWZZZ377VT004252',
      quilometragem: 0,
      combustivel: 'Gasolina',
      preco: 165000,
      status: 'disponivel' as const,
      imagem: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400',
      categoria: 'Sedan',
      dataEntrada: new Date(2024, 10, 12).toISOString(),
    },
    {
      id: '3',
      modelo: 'HB20 Evolution',
      marca: 'Hyundai',
      ano: 2024,
      cor: 'Branco',
      placa: 'GHI-9012',
      chassi: '9BWZZZ377VT004253',
      quilometragem: 0,
      combustivel: 'Flex',
      preco: 78000,
      status: 'disponivel' as const,
      imagem: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400',
      categoria: 'Hatch',
      dataEntrada: new Date(2024, 10, 10).toISOString(),
    },
    {
      id: '4',
      modelo: 'Onix Plus LTZ',
      marca: 'Chevrolet',
      ano: 2024,
      cor: 'Vermelho',
      placa: 'JKL-3456',
      chassi: '9BWZZZ377VT004254',
      quilometragem: 0,
      combustivel: 'Flex',
      preco: 82000,
      status: 'reservado' as const,
      imagem: 'https://images.unsplash.com/photo-1583267746897-944822e81b92?w=400',
      categoria: 'Sedan',
      dataEntrada: new Date(2024, 10, 8).toISOString(),
    },
    {
      id: '5',
      modelo: 'Compass Sport',
      marca: 'Jeep',
      ano: 2024,
      cor: 'Azul',
      placa: 'MNO-7890',
      chassi: '9BWZZZ377VT004255',
      quilometragem: 0,
      combustivel: 'Flex',
      preco: 195000,
      status: 'disponivel' as const,
      imagem: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=400',
      categoria: 'SUV',
      dataEntrada: new Date(2024, 10, 5).toISOString(),
    },
    {
      id: '6',
      modelo: 'Renegade Longitude',
      marca: 'Jeep',
      ano: 2023,
      cor: 'Verde',
      placa: 'PQR-2345',
      chassi: '9BWZZZ377VT004256',
      quilometragem: 15000,
      combustivel: 'Flex',
      preco: 125000,
      status: 'disponivel' as const,
      imagem: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400',
      categoria: 'SUV',
      dataEntrada: new Date(2024, 9, 28).toISOString(),
    },
    {
      id: '7',
      modelo: 'Tucson GLS',
      marca: 'Hyundai',
      ano: 2024,
      cor: 'Cinza',
      placa: 'STU-6789',
      chassi: '9BWZZZ377VT004257',
      quilometragem: 0,
      combustivel: 'Gasolina',
      preco: 178000,
      status: 'reservado' as const,
      imagem: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400',
      categoria: 'SUV',
      dataEntrada: new Date(2024, 10, 20).toISOString(),
    },
    {
      id: '8',
      modelo: 'Kicks Advance',
      marca: 'Nissan',
      ano: 2024,
      cor: 'Laranja',
      placa: 'VWX-0123',
      chassi: '9BWZZZ377VT004258',
      quilometragem: 0,
      combustivel: 'Flex',
      preco: 115000,
      status: 'disponivel' as const,
      imagem: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400',
      categoria: 'SUV',
      dataEntrada: new Date(2024, 10, 18).toISOString(),
    },
  ];

  return (
    <div className="p-8 space-y-8 bg-zinc-800 min-h-screen">
      {/* Cabeçalho */}
      <EstoqueHeader />

      {/* Estatísticas */}
      <EstoqueStats stats={stats} />

      {/* Grid de Veículos */}
      <Card title="">
        <EstoqueGrid veiculos={veiculos} />
      </Card>
    </div>
  );
}
