// Componente de cabeçalho da página de Vendas

import { Plus, Filter, Download } from 'lucide-react';

export function VendasHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Vendas</h1>
        <p className="text-zinc-400 mt-1">Gerencie todas as vendas realizadas</p>
      </div>
      
      <div className="flex items-center gap-4">
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
        
        {/* Botão nova venda */}
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          <Plus size={18} />
          <span className="font-medium">Nova Venda</span>
        </button>
      </div>
    </div>
  );
}
