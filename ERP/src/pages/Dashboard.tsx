import { Car, DollarSign, ShoppingBag, Users } from "lucide-react";
import { Card } from "../components/ui/Card";
import { StatCard } from "../components/ui/StatCard";

export function Dashboard() {
  return (
    <div className="p-8 space-y-8 bg-zinc-50 min-h-screen">
      {/* SEÇÃO 1: HEADER DA PÁGINA */}
      <div>
        <h1 className="text-3xl font-bold text-zinc-900">Dashboard</h1>
        <p className="text-zinc-500">Visão geral da sua concessionária</p>
      </div>

      {/* SEÇÃO 2: GRID DE ESTATÍSTICAS (Usando StatCard) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total em Estoque"
          value={42}
          icon={Car}
          trend="+4 novos"
          trendPositive={true}
        />
        <StatCard
          label="Vendas no Mês"
          value="R$ 1.2M"
          icon={DollarSign}
          trend="+12% vds mês passado"
          trendPositive={true}
        />
        <StatCard label="Carros Reservados" value={5} icon={ShoppingBag} />
        <StatCard
          label="Visitas no Site"
          value={1250}
          icon={Users}
          trend="-2% vs semana passada"
          trendPositive={false}
        />
      </div>

      {/* SEÇÃO 3: CONTEÚDO PRINCIPAL (Usando o componente Card genérico) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Bloco Grande (2/3 da tela) */}
        <div className="lg:col-span-2">
          <Card title="Últimas Vendas">
            <p className="text-zinc-500 py-8 text-center">
              Aqui vai entrar a Tabela de Vendas (Próximo passo!)
            </p>
          </Card>
        </div>

        {/* Bloco Menor (1/3 da tela) */}
        <div>
          <Card title="Avisos Recentes">
            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 text-yellow-800 rounded-md text-sm border border-yellow-200">
                ⚠️ IPVA do Honda Civic vence amanhã.
              </div>
              <div className="p-3 bg-blue-50 text-blue-800 rounded-md text-sm border border-blue-200">
                ℹ️ Novo lead interessado no Corolla.
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
