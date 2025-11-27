// Componente de gráfico de fluxo de caixa

import { TrendingUp, TrendingDown } from 'lucide-react';

export function FaturamentoChart() {
  // Dados mockados - fluxo de caixa mensal
  const meses = ['Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov'];
  const receitas = [920000, 1050000, 980000, 1100000, 1150000, 1200000];
  const despesas = [450000, 520000, 480000, 550000, 580000, 600000];
  
  const maxValue = Math.max(...receitas, ...despesas);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-white">Fluxo de Caixa</h3>
          <p className="text-sm text-zinc-400">Comparativo de receitas e despesas</p>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
            <span className="text-sm text-zinc-300">Receitas</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-sm text-zinc-300">Despesas</span>
          </div>
        </div>
      </div>

      {/* Gráfico */}
      <div className="flex items-end justify-between gap-6 h-64">
        {meses.map((mes, index) => {
          const receitaHeight = (receitas[index] / maxValue) * 100;
          const despesaHeight = (despesas[index] / maxValue) * 100;
          const lucro = receitas[index] - despesas[index];
          
          return (
            <div key={mes} className="flex-1 flex flex-col items-center gap-3">
              {/* Barras */}
              <div className="w-full flex items-end justify-center gap-2 h-52">
                {/* Barra de Receita */}
                <div
                  className="w-full bg-linear-to-t from-emerald-600 to-emerald-500 rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative group"
                  style={{ height: `${receitaHeight}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-zinc-700">
                    R$ {(receitas[index] / 1000).toFixed(0)}K
                  </div>
                </div>
                
                {/* Barra de Despesa */}
                <div
                  className="w-full bg-linear-to-t from-red-600 to-red-500 rounded-t-lg transition-all hover:opacity-80 cursor-pointer relative group"
                  style={{ height: `${despesaHeight}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950 text-white text-xs px-2 py-1 rounded whitespace-nowrap border border-zinc-700">
                    R$ {(despesas[index] / 1000).toFixed(0)}K
                  </div>
                </div>
              </div>
              
              {/* Label do mês */}
              <span className="text-xs font-medium text-zinc-400">{mes}</span>
              
              {/* Lucro */}
              <div className={`text-xs font-medium ${lucro > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                {lucro > 0 ? '+' : ''}{(lucro / 1000).toFixed(0)}K
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-700">
        <div className="text-center p-4 bg-zinc-900 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingUp size={18} className="text-emerald-400" />
            <p className="text-xs text-zinc-400">Total Receitas</p>
          </div>
          <p className="text-2xl font-bold text-emerald-400">
            R$ {(receitas.reduce((a, b) => a + b, 0) / 1000000).toFixed(2)}M
          </p>
        </div>
        
        <div className="text-center p-4 bg-zinc-900 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <TrendingDown size={18} className="text-red-400" />
            <p className="text-xs text-zinc-400">Total Despesas</p>
          </div>
          <p className="text-2xl font-bold text-red-400">
            R$ {(despesas.reduce((a, b) => a + b, 0) / 1000000).toFixed(2)}M
          </p>
        </div>
        
        <div className="text-center p-4 bg-zinc-900 rounded-lg">
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-xs text-zinc-400">Lucro Líquido</p>
          </div>
          <p className="text-2xl font-bold text-white">
            R$ {((receitas.reduce((a, b) => a + b, 0) - despesas.reduce((a, b) => a + b, 0)) / 1000000).toFixed(2)}M
          </p>
        </div>
      </div>
    </div>
  );
}
