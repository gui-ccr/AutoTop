// Componente de gráfico de performance de vendas

import { TrendingUp, Users, Award } from 'lucide-react';

export function VendasChart() {
  // Dados mockados - vendedores
  const vendedores = [
    { nome: 'Ana Paula', vendas: 12, valor: 1456000, meta: 85 },
    { nome: 'Carlos Mendes', vendas: 9, valor: 1124000, meta: 72 },
    { nome: 'Roberto Lima', vendas: 7, valor: 892000, meta: 65 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Performance dos Vendedores</h3>
          <p className="text-sm text-zinc-400">Ranking do mês atual</p>
        </div>
        <div className="flex items-center gap-2 text-emerald-400">
          <TrendingUp size={20} />
          <span className="text-sm font-medium">Metas em crescimento</span>
        </div>
      </div>

      {/* Lista de Vendedores */}
      <div className="grid gap-4">
        {vendedores.map((vendedor, index) => {
          const isTopPerformer = index === 0;
          return (
            <div
              key={vendedor.nome}
              className={`p-6 rounded-xl border transition-all ${
                isTopPerformer
                  ? 'bg-linear-to-r from-red-500/10 to-transparent border-red-500/30'
                  : 'bg-zinc-900 border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  {/* Posição */}
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                      isTopPerformer
                        ? 'bg-red-500 text-white'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}
                  >
                    {index + 1}º
                  </div>

                  {/* Info do Vendedor */}
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-white">{vendedor.nome}</h4>
                      {isTopPerformer && (
                        <Award size={16} className="text-yellow-400" />
                      )}
                    </div>
                    <p className="text-sm text-zinc-400">
                      {vendedor.vendas} vendas realizadas
                    </p>
                  </div>
                </div>

                {/* Valor Total */}
                <div className="text-right">
                  <p className="text-xs text-zinc-400 mb-1">Total vendido</p>
                  <p className="text-xl font-bold text-emerald-400">
                    R$ {(vendedor.valor / 1000000).toFixed(2)}M
                  </p>
                </div>
              </div>

              {/* Barra de Meta */}
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-zinc-400">Meta do mês</span>
                  <span className={`font-medium ${
                    vendedor.meta >= 80 ? 'text-emerald-400' : 'text-yellow-400'
                  }`}>
                    {vendedor.meta}%
                  </span>
                </div>
                <div className="w-full bg-zinc-800 rounded-full h-2.5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all ${
                      vendedor.meta >= 80
                        ? 'bg-linear-to-r from-emerald-500 to-emerald-400'
                        : 'bg-linear-to-r from-yellow-500 to-yellow-400'
                    }`}
                    style={{ width: `${vendedor.meta}%` }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Estatísticas Gerais */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-700">
        <div className="text-center p-4 bg-zinc-900 rounded-lg">
          <Users size={20} className="mx-auto mb-2 text-zinc-400" />
          <p className="text-xs text-zinc-400 mb-1">Vendedores Ativos</p>
          <p className="text-2xl font-bold text-white">{vendedores.length}</p>
        </div>
        <div className="text-center p-4 bg-zinc-900 rounded-lg">
          <TrendingUp size={20} className="mx-auto mb-2 text-emerald-400" />
          <p className="text-xs text-zinc-400 mb-1">Média de Vendas</p>
          <p className="text-2xl font-bold text-white">
            {Math.round(vendedores.reduce((acc, v) => acc + v.vendas, 0) / vendedores.length)}
          </p>
        </div>
        <div className="text-center p-4 bg-zinc-900 rounded-lg">
          <Award size={20} className="mx-auto mb-2 text-yellow-400" />
          <p className="text-xs text-zinc-400 mb-1">Melhor Performance</p>
          <p className="text-2xl font-bold text-white">{vendedores[0].meta}%</p>
        </div>
      </div>
    </div>
  );
}
