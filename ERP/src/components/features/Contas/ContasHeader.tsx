// Componente de cabeçalho da página de Contas

import { UserPlus, Settings } from 'lucide-react';

export function ContasHeader() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">Contas</h1>
        <p className="text-zinc-400 mt-1">Gerencie usuários e configurações do sistema</p>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Botão configurações */}
        <button className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors border border-zinc-600">
          <Settings size={18} />
          <span className="font-medium">Configurações</span>
        </button>
        
        {/* Botão adicionar usuário */}
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
          <UserPlus size={18} />
          <span className="font-medium">Novo Usuário</span>
        </button>
      </div>
    </div>
  );
}
