// Componente de cabeçalho da página de Faturamento

import { Plus, Filter, Download, Calendar } from 'lucide-react';

export function FaturamentoHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Faturamento</h1>
        <p className="text-zinc-400 mt-1">Gestão financeira da concessionária</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Seletor de período */}
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors border border-zinc-600">
          <Calendar size={18} />
          <span className="font-medium">Novembro 2024</span>
        </button>

        {/* Botão filtrar */}
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors border border-zinc-600">
          <Filter size={18} />
          <span className="font-medium">Filtrar</span>
        </button>

        {/* Botão exportar */}
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors border border-zinc-600">
          <Download size={18} />
          <span className="font-medium">Exportar</span>
        </button>
        
        {/* Botão nova transação */}
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          <Plus size={18} />
          <span className="font-medium">Nova Transação</span>
        </button>
      </div>
    </div>
  );
}
