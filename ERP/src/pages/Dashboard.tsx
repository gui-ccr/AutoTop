// Dashboard Page - Apenas renderização visual
// Dados mockados diretamente no componente para simplicidade

import { Card } from "../components/ui/Card";
import { DashboardHeader } from "../components/features/Dashboard/DashboardHeader";
import { StatsGrid } from "../components/features/Dashboard/StatsGrid";
import { RecentSalesTable } from "../components/features/Dashboard/RecentSalesTable";
import { AlertsList } from "../components/features/Dashboard/AlertsList";
import { SalesChart } from "../components/features/Dashboard/SalesChart";
import { QuickStatsBar } from "../components/features/Dashboard/QuickStatsBar";

export function Dashboard() {
  // Dados mockados - estatísticas principais
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
      label: 'Vendas no Mês',
      value: 'R$ 1.2M',
      trend: '+12% vs mês passado',
      trendPositive: true,
      icon: 'dollar-sign',
    },
    {
      id: '3',
      label: 'Carros Reservados',
      value: 5,
      icon: 'shopping-bag',
    },
    {
      id: '4',
      label: 'Visitas no Site',
      value: 1250,
      trend: '-2% vs semana passada',
      trendPositive: false,
      icon: 'users',
    },
  ];

  // Dados mockados - vendas recentes
  const sales = [
    {
      id: '1',
      customerName: 'João Silva',
      vehicleModel: 'Corolla XEI',
      vehicleBrand: 'Toyota',
      saleDate: new Date(2025, 10, 25).toISOString(),
      amount: 145000,
      status: 'completed' as const,
      paymentMethod: 'financing' as const,
    },
    {
      id: '2',
      customerName: 'Maria Santos',
      vehicleModel: 'Civic Touring',
      vehicleBrand: 'Honda',
      saleDate: new Date(2025, 10, 24).toISOString(),
      amount: 165000,
      status: 'completed' as const,
      paymentMethod: 'cash' as const,
    },
    {
      id: '3',
      customerName: 'Carlos Oliveira',
      vehicleModel: 'HB20 Evolution',
      vehicleBrand: 'Hyundai',
      saleDate: new Date(2025, 10, 23).toISOString(),
      amount: 78000,
      status: 'pending' as const,
      paymentMethod: 'financing' as const,
    },
    {
      id: '4',
      customerName: 'Ana Paula',
      vehicleModel: 'Onix Plus',
      vehicleBrand: 'Chevrolet',
      saleDate: new Date(2025, 10, 22).toISOString(),
      amount: 82000,
      status: 'completed' as const,
      paymentMethod: 'leasing' as const,
    },
    {
      id: '5',
      customerName: 'Roberto Lima',
      vehicleModel: 'Compass Sport',
      vehicleBrand: 'Jeep',
      saleDate: new Date(2025, 10, 20).toISOString(),
      amount: 195000,
      status: 'completed' as const,
      paymentMethod: 'financing' as const,
    },
  ];

  // Dados mockados - alertas
  const alerts = [
    {
      id: '1',
      type: 'warning' as const,
      title: 'IPVA Vencendo',
      message: 'IPVA do Honda Civic #4523 vence amanhã.',
      createdAt: new Date(2025, 10, 27, 10, 30).toISOString(),
      priority: 'high' as const,
    },
    {
      id: '2',
      type: 'info' as const,
      title: 'Novo Lead',
      message: 'Cliente interessado no Corolla XEI 2024.',
      createdAt: new Date(2025, 10, 27, 9, 15).toISOString(),
      priority: 'medium' as const,
    },
    {
      id: '3',
      type: 'success' as const,
      title: 'Documentação Completa',
      message: 'Todos os documentos do Compass foram aprovados.',
      createdAt: new Date(2025, 10, 26, 16, 45).toISOString(),
      priority: 'low' as const,
    },
    {
      id: '4',
      type: 'warning' as const,
      title: 'Estoque Baixo',
      message: 'Apenas 2 unidades do modelo Onix Plus disponíveis.',
      createdAt: new Date(2025, 10, 26, 14, 20).toISOString(),
      priority: 'medium' as const,
    },
  ];

  // Estatísticas rápidas adicionais
  const quickStats = [
    { label: "Ticket Médio", value: "R$ 125K", description: "por venda" },
    { label: "Conversão", value: "18%", description: "leads → vendas" },
    { label: "NPS", value: "92", description: "satisfação" },
  ];

  return (
    <div className="p-8 space-y-8 bg-zinc-800 min-h-screen">
      {/* Cabeçalho do Dashboard */}
      <DashboardHeader
        title="Dashboard"
        subtitle="Visão geral da sua concessionária"
      />

      {/* Grid de Estatísticas Principais */}
      <StatsGrid stats={stats} />

      {/* Barra de Estatísticas Rápidas */}
      <QuickStatsBar stats={quickStats} />

      {/* Gráfico de Vendas */}
      <Card title="">
        <SalesChart />
      </Card>

      {/* Conteúdo Principal: Vendas e Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tabela de Vendas Recentes (2/3 da tela) */}
        <div className="lg:col-span-2">
          <Card title="Últimas Vendas">
            <RecentSalesTable sales={sales} />
          </Card>
        </div>

        {/* Lista de Alertas (1/3 da tela) */}
        <div>
          <Card title="Avisos Recentes">
            <AlertsList alerts={alerts} />
          </Card>
        </div>
      </div>
    </div>
  );
}
