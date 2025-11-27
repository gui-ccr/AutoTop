// Página de Faturamento - Gerenciamento financeiro da concessionária

import { Card } from "../components/ui/Card";
import { FaturamentoHeader, FaturamentoStats, FaturamentoChart, FaturamentoTable } from "../components/features/Faturamento";

export function Faturamento() {
  // Dados mockados - estatísticas de faturamento
  const stats = [
    {
      id: '1',
      label: 'Faturamento Total',
      value: 'R$ 1.2M',
      trend: '+15% vs mês passado',
      trendPositive: true,
      icon: 'dollar-sign',
    },
    {
      id: '2',
      label: 'Contas a Receber',
      value: 'R$ 385K',
      trend: '8 faturas pendentes',
      trendPositive: false,
      icon: 'trending-up',
    },
    {
      id: '3',
      label: 'Contas a Pagar',
      value: 'R$ 145K',
      trend: '5 pagamentos pendentes',
      trendPositive: false,
      icon: 'trending-down',
    },
    {
      id: '4',
      label: 'Saldo Líquido',
      value: 'R$ 1.05M',
      trend: '+22% vs mês passado',
      trendPositive: true,
      icon: 'wallet',
    },
  ];

  // Dados mockados - transações financeiras
  const transacoes = [
    {
      id: '1',
      tipo: 'receita' as const,
      descricao: 'Venda - Toyota Corolla XEI',
      categoria: 'Venda de Veículo',
      cliente: 'João Silva',
      valor: 145000,
      dataVencimento: new Date(2024, 10, 25).toISOString(),
      dataPagamento: new Date(2024, 10, 25).toISOString(),
      status: 'pago' as const,
      metodoPagamento: 'Transferência Bancária',
    },
    {
      id: '2',
      tipo: 'receita' as const,
      descricao: 'Venda - Honda Civic Touring',
      categoria: 'Venda de Veículo',
      cliente: 'Maria Santos',
      valor: 165000,
      dataVencimento: new Date(2024, 10, 24).toISOString(),
      dataPagamento: new Date(2024, 10, 24).toISOString(),
      status: 'pago' as const,
      metodoPagamento: 'PIX',
    },
    {
      id: '3',
      tipo: 'receita' as const,
      descricao: 'Entrada - Hyundai HB20',
      categoria: 'Venda de Veículo',
      cliente: 'Carlos Oliveira',
      valor: 35000,
      dataVencimento: new Date(2024, 10, 28).toISOString(),
      dataPagamento: null,
      status: 'pendente' as const,
      metodoPagamento: 'Financiamento',
    },
    {
      id: '4',
      tipo: 'despesa' as const,
      descricao: 'Compra de Veículos - Leilão',
      categoria: 'Aquisição de Estoque',
      cliente: 'Leilão Premium Auto',
      valor: 85000,
      dataVencimento: new Date(2024, 10, 20).toISOString(),
      dataPagamento: new Date(2024, 10, 20).toISOString(),
      status: 'pago' as const,
      metodoPagamento: 'Transferência',
    },
    {
      id: '5',
      tipo: 'despesa' as const,
      descricao: 'Manutenção e Revisão',
      categoria: 'Manutenção',
      cliente: 'Oficina MecânicaTop',
      valor: 12500,
      dataVencimento: new Date(2024, 10, 22).toISOString(),
      dataPagamento: new Date(2024, 10, 22).toISOString(),
      status: 'pago' as const,
      metodoPagamento: 'Débito',
    },
    {
      id: '6',
      tipo: 'despesa' as const,
      descricao: 'Aluguel - Showroom',
      categoria: 'Despesas Operacionais',
      cliente: 'Imobiliária Center',
      valor: 15000,
      dataVencimento: new Date(2024, 10, 30).toISOString(),
      dataPagamento: null,
      status: 'pendente' as const,
      metodoPagamento: 'Boleto',
    },
    {
      id: '7',
      tipo: 'receita' as const,
      descricao: 'Venda - Jeep Compass',
      categoria: 'Venda de Veículo',
      cliente: 'Roberto Lima',
      valor: 195000,
      dataVencimento: new Date(2024, 10, 20).toISOString(),
      dataPagamento: new Date(2024, 10, 20).toISOString(),
      status: 'pago' as const,
      metodoPagamento: 'Transferência',
    },
    {
      id: '8',
      tipo: 'despesa' as const,
      descricao: 'Marketing Digital',
      categoria: 'Marketing',
      cliente: 'Agência Digital Pro',
      valor: 8500,
      dataVencimento: new Date(2024, 11, 1).toISOString(),
      dataPagamento: null,
      status: 'pendente' as const,
      metodoPagamento: 'PIX',
    },
    {
      id: '9',
      tipo: 'despesa' as const,
      descricao: 'Salários - Equipe',
      categoria: 'Folha de Pagamento',
      cliente: 'Funcionários',
      valor: 45000,
      dataVencimento: new Date(2024, 11, 5).toISOString(),
      dataPagamento: null,
      status: 'agendado' as const,
      metodoPagamento: 'Transferência',
    },
  ];

  return (
    <div className="p-8 space-y-8 bg-zinc-800 min-h-screen">
      {/* Cabeçalho */}
      <FaturamentoHeader />

      {/* Estatísticas */}
      <FaturamentoStats stats={stats} />

      {/* Gráfico de Fluxo de Caixa */}
      <Card title="">
        <FaturamentoChart />
      </Card>

      {/* Tabela de Transações */}
      <Card title="">
        <FaturamentoTable transacoes={transacoes} />
      </Card>
    </div>
  );
}
