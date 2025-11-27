// Página de Contas - Gerenciamento de usuários e configurações

import { Card } from "../components/ui/Card";
import { ContasHeader, ContasStats, ContasTable, ConfiguracoesCard } from "../components/features/Contas";

export function Contas() {
  // Dados mockados - estatísticas de contas
  const stats = [
    {
      id: '1',
      label: 'Total de Usuários',
      value: 12,
      trend: '+2 este mês',
      trendPositive: true,
      icon: 'users',
    },
    {
      id: '2',
      label: 'Usuários Ativos',
      value: 10,
      trend: '83% do total',
      trendPositive: true,
      icon: 'user-check',
    },
    {
      id: '3',
      label: 'Administradores',
      value: 3,
      icon: 'shield',
    },
    {
      id: '4',
      label: 'Último Acesso',
      value: 'Hoje',
      trend: '10 usuários online',
      trendPositive: true,
      icon: 'activity',
    },
  ];

  // Dados mockados - usuários
  const usuarios = [
    {
      id: '1',
      nome: 'Carlos Mendes',
      email: 'carlos.mendes@autotop.com',
      cargo: 'Gerente de Vendas',
      departamento: 'Vendas',
      telefone: '(11) 98765-4321',
      role: 'admin' as const,
      status: 'ativo' as const,
      ultimoAcesso: new Date(2024, 10, 27, 14, 30).toISOString(),
      dataCriacao: new Date(2023, 5, 15).toISOString(),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos',
    },
    {
      id: '2',
      nome: 'Ana Paula Silva',
      email: 'ana.silva@autotop.com',
      cargo: 'Vendedora Sênior',
      departamento: 'Vendas',
      telefone: '(11) 97654-3210',
      role: 'vendedor' as const,
      status: 'ativo' as const,
      ultimoAcesso: new Date(2024, 10, 27, 15, 45).toISOString(),
      dataCriacao: new Date(2023, 7, 20).toISOString(),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ana',
    },
    {
      id: '3',
      nome: 'Roberto Lima',
      email: 'roberto.lima@autotop.com',
      cargo: 'Vendedor',
      departamento: 'Vendas',
      telefone: '(11) 96543-2109',
      role: 'vendedor' as const,
      status: 'ativo' as const,
      ultimoAcesso: new Date(2024, 10, 27, 13, 20).toISOString(),
      dataCriacao: new Date(2024, 2, 10).toISOString(),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Roberto',
    },
    {
      id: '4',
      nome: 'Mariana Costa',
      email: 'mariana.costa@autotop.com',
      cargo: 'Gerente Financeiro',
      departamento: 'Financeiro',
      telefone: '(11) 95432-1098',
      role: 'admin' as const,
      status: 'ativo' as const,
      ultimoAcesso: new Date(2024, 10, 27, 16, 10).toISOString(),
      dataCriacao: new Date(2023, 4, 5).toISOString(),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mariana',
    },
    {
      id: '5',
      nome: 'Fernando Santos',
      email: 'fernando.santos@autotop.com',
      cargo: 'Gerente de Estoque',
      departamento: 'Estoque',
      telefone: '(11) 94321-0987',
      role: 'gestor' as const,
      status: 'ativo' as const,
      ultimoAcesso: new Date(2024, 10, 27, 11, 30).toISOString(),
      dataCriacao: new Date(2023, 8, 12).toISOString(),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Fernando',
    },
    {
      id: '6',
      nome: 'Juliana Oliveira',
      email: 'juliana.oliveira@autotop.com',
      cargo: 'Assistente Administrativo',
      departamento: 'Administrativo',
      telefone: '(11) 93210-9876',
      role: 'usuario' as const,
      status: 'ativo' as const,
      ultimoAcesso: new Date(2024, 10, 27, 14, 0).toISOString(),
      dataCriacao: new Date(2024, 1, 18).toISOString(),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Juliana',
    },
    {
      id: '7',
      nome: 'Pedro Henrique',
      email: 'pedro.henrique@autotop.com',
      cargo: 'Vendedor Junior',
      departamento: 'Vendas',
      telefone: '(11) 92109-8765',
      role: 'vendedor' as const,
      status: 'inativo' as const,
      ultimoAcesso: new Date(2024, 10, 15, 18, 0).toISOString(),
      dataCriacao: new Date(2024, 6, 3).toISOString(),
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Pedro',
    },
  ];

  return (
    <div className="p-8 space-y-8 bg-zinc-800 min-h-screen">
      {/* Cabeçalho */}
      <ContasHeader />

      {/* Estatísticas */}
      <ContasStats stats={stats} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Tabela de Usuários */}
        <div className="lg:col-span-2">
          <Card title="">
            <ContasTable usuarios={usuarios} />
          </Card>
        </div>

        {/* Configurações */}
        <div>
          <ConfiguracoesCard />
        </div>
      </div>
    </div>
  );
}
