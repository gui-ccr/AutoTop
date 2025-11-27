// Página de Vendas - Gerenciamento completo de vendas

import { Card } from "../components/ui/Card";
import { VendasHeader, VendasStats, VendasTable, VendasChart } from "../components/features/Vendas";

export function Vendas() {
  // Dados mockados - estatísticas de vendas
  const stats = [
    {
      id: '1',
      label: 'Vendas no Mês',
      value: 'R$ 1.2M',
      trend: '+12% vs mês passado',
      trendPositive: true,
      icon: 'dollar-sign',
    },
    {
      id: '2',
      label: 'Total de Vendas',
      value: 28,
      trend: '+5 vendas',
      trendPositive: true,
      icon: 'shopping-cart',
    },
    {
      id: '3',
      label: 'Ticket Médio',
      value: 'R$ 128K',
      trend: '+8% vs mês passado',
      trendPositive: true,
      icon: 'trending-up',
    },
    {
      id: '4',
      label: 'Pendentes',
      value: 3,
      icon: 'clock',
    },
  ];

  // Dados mockados - vendas
  const vendas = [
    {
      id: '1',
      numeroVenda: 'VND-2024-001',
      cliente: 'João Silva',
      veiculo: 'Toyota Corolla XEI 2024',
      dataVenda: new Date(2024, 10, 25).toISOString(),
      valor: 145000,
      formaPagamento: 'financing' as const,
      status: 'concluida' as const,
      vendedor: 'Carlos Mendes',
      comissao: 7250,
    },
    {
      id: '2',
      numeroVenda: 'VND-2024-002',
      cliente: 'Maria Santos',
      veiculo: 'Honda Civic Touring 2024',
      dataVenda: new Date(2024, 10, 24).toISOString(),
      valor: 165000,
      formaPagamento: 'cash' as const,
      status: 'concluida' as const,
      vendedor: 'Ana Paula',
      comissao: 8250,
    },
    {
      id: '3',
      numeroVenda: 'VND-2024-003',
      cliente: 'Carlos Oliveira',
      veiculo: 'Hyundai HB20 Evolution 2024',
      dataVenda: new Date(2024, 10, 23).toISOString(),
      valor: 78000,
      formaPagamento: 'financing' as const,
      status: 'pendente' as const,
      vendedor: 'Roberto Lima',
      comissao: 3900,
    },
    {
      id: '4',
      numeroVenda: 'VND-2024-004',
      cliente: 'Ana Paula Costa',
      veiculo: 'Chevrolet Onix Plus LTZ 2024',
      dataVenda: new Date(2024, 10, 22).toISOString(),
      valor: 82000,
      formaPagamento: 'leasing' as const,
      status: 'concluida' as const,
      vendedor: 'Carlos Mendes',
      comissao: 4100,
    },
    {
      id: '5',
      numeroVenda: 'VND-2024-005',
      cliente: 'Roberto Lima',
      veiculo: 'Jeep Compass Sport 2024',
      dataVenda: new Date(2024, 10, 20).toISOString(),
      valor: 195000,
      formaPagamento: 'financing' as const,
      status: 'concluida' as const,
      vendedor: 'Ana Paula',
      comissao: 9750,
    },
    {
      id: '6',
      numeroVenda: 'VND-2024-006',
      cliente: 'Fernanda Souza',
      veiculo: 'Nissan Kicks Advance 2024',
      dataVenda: new Date(2024, 10, 18).toISOString(),
      valor: 115000,
      formaPagamento: 'cash' as const,
      status: 'concluida' as const,
      vendedor: 'Roberto Lima',
      comissao: 5750,
    },
    {
      id: '7',
      numeroVenda: 'VND-2024-007',
      cliente: 'Pedro Henrique',
      veiculo: 'Jeep Renegade Longitude 2023',
      dataVenda: new Date(2024, 10, 15).toISOString(),
      valor: 125000,
      formaPagamento: 'financing' as const,
      status: 'pendente' as const,
      vendedor: 'Carlos Mendes',
      comissao: 6250,
    },
    {
      id: '8',
      numeroVenda: 'VND-2024-008',
      cliente: 'Juliana Martins',
      veiculo: 'Hyundai Tucson GLS 2024',
      dataVenda: new Date(2024, 10, 12).toISOString(),
      valor: 178000,
      formaPagamento: 'cash' as const,
      status: 'concluida' as const,
      vendedor: 'Ana Paula',
      comissao: 8900,
    },
  ];

  return (
    <div className="p-8 space-y-8 bg-zinc-800 min-h-screen">
      {/* Cabeçalho */}
      <VendasHeader />

      {/* Estatísticas */}
      <VendasStats stats={stats} />

      {/* Gráfico de Performance */}
      <Card title="">
        <VendasChart />
      </Card>

      {/* Tabela de Vendas */}
      <Card title="">
        <VendasTable vendas={vendas} />
      </Card>
    </div>
  );
}
