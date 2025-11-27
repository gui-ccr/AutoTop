// Página de Clientes - Gerenciamento completo de clientes da concessionária

import { Card } from "../components/ui/Card";
import { ClientesHeader, ClientesTable, ClientesStats } from "../components/features/Clientes";

export function Clientes() {
  // Dados mockados - estatísticas de clientes
  const stats = [
    {
      id: '1',
      label: 'Total de Clientes',
      value: 2547,
      trend: '+124 este mês',
      trendPositive: true,
      icon: 'users',
    },
    {
      id: '2',
      label: 'Clientes Ativos',
      value: 1832,
      trend: '72% do total',
      trendPositive: true,
      icon: 'user-check',
    },
    {
      id: '3',
      label: 'Novos este Mês',
      value: 124,
      trend: '+18% vs mês passado',
      trendPositive: true,
      icon: 'user-plus',
    },
    {
      id: '4',
      label: 'Leads em Andamento',
      value: 89,
      icon: 'user-search',
    },
  ];

  // Dados mockados - lista de clientes
  const clientes = [
    {
      id: '1',
      nome: 'João Silva',
      email: 'joao.silva@email.com',
      telefone: '(11) 98765-4321',
      cpf: '123.456.789-00',
      cidade: 'São Paulo',
      estado: 'SP',
      dataCadastro: new Date(2024, 5, 15).toISOString(),
      status: 'ativo' as const,
      totalCompras: 2,
      valorTotal: 310000,
    },
    {
      id: '2',
      nome: 'Maria Santos',
      email: 'maria.santos@email.com',
      telefone: '(11) 97654-3210',
      cpf: '987.654.321-00',
      cidade: 'São Paulo',
      estado: 'SP',
      dataCadastro: new Date(2024, 3, 20).toISOString(),
      status: 'ativo' as const,
      totalCompras: 1,
      valorTotal: 165000,
    },
    {
      id: '3',
      nome: 'Carlos Oliveira',
      email: 'carlos.oliveira@email.com',
      telefone: '(21) 96543-2109',
      cpf: '456.789.123-00',
      cidade: 'Rio de Janeiro',
      estado: 'RJ',
      dataCadastro: new Date(2024, 8, 10).toISOString(),
      status: 'lead' as const,
      totalCompras: 0,
      valorTotal: 0,
    },
    {
      id: '4',
      nome: 'Ana Paula Costa',
      email: 'ana.costa@email.com',
      telefone: '(11) 95432-1098',
      cpf: '789.123.456-00',
      cidade: 'Campinas',
      estado: 'SP',
      dataCadastro: new Date(2023, 11, 5).toISOString(),
      status: 'ativo' as const,
      totalCompras: 3,
      valorTotal: 445000,
    },
    {
      id: '5',
      nome: 'Roberto Lima',
      email: 'roberto.lima@email.com',
      telefone: '(31) 94321-0987',
      cpf: '321.654.987-00',
      cidade: 'Belo Horizonte',
      estado: 'MG',
      dataCadastro: new Date(2024, 9, 1).toISOString(),
      status: 'ativo' as const,
      totalCompras: 1,
      valorTotal: 195000,
    },
    {
      id: '6',
      nome: 'Fernanda Souza',
      email: 'fernanda.souza@email.com',
      telefone: '(11) 93210-9876',
      cpf: '654.987.321-00',
      cidade: 'São Paulo',
      estado: 'SP',
      dataCadastro: new Date(2024, 10, 15).toISOString(),
      status: 'lead' as const,
      totalCompras: 0,
      valorTotal: 0,
    },
    {
      id: '7',
      nome: 'Pedro Henrique',
      email: 'pedro.henrique@email.com',
      telefone: '(41) 92109-8765',
      cpf: '159.753.486-00',
      cidade: 'Curitiba',
      estado: 'PR',
      dataCadastro: new Date(2024, 7, 22).toISOString(),
      status: 'inativo' as const,
      totalCompras: 1,
      valorTotal: 85000,
    },
  ];

  return (
    <div className="p-8 space-y-8 bg-zinc-800 min-h-screen">
      {/* Cabeçalho */}
      <ClientesHeader />

      {/* Estatísticas */}
      <ClientesStats stats={stats} />

      {/* Tabela de Clientes */}
      <Card title="">
        <ClientesTable clientes={clientes} />
      </Card>
    </div>
  );
}
