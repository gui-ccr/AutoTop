// Componente de cabeçalho da página de Estoque

import { Plus, Filter, Search } from 'lucide-react';

export function EstoqueHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Estoque</h1>
        <p className="text-zinc-400 mt-1">Gerencie os veículos disponíveis</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Barra de busca */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" size={18} />
          <input
            type="text"
            placeholder="Buscar veículo..."
            className="pl-10 pr-4 py-2 bg-zinc-700 text-white rounded-lg border border-zinc-600 focus:border-red-500 focus:outline-none w-64"
          />
        </div>
        
        {/* Botão filtrar */}
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors border border-zinc-600">
          <Filter size={18} />
          <span className="font-medium">Filtrar</span>
        </button>
        
        {/* Botão adicionar veículo */}
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          <Plus size={18} />
          <span className="font-medium">Novo Veículo</span>
        </button>
      </div>
    </div>
  );
}
