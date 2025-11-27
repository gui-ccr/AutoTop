// Componente de card de configurações

import { Bell, Lock, Database, Palette, Globe, Shield } from 'lucide-react';

export function ConfiguracoesCard() {
  const configuracoes = [
    {
      id: 1,
      icon: Bell,
      titulo: 'Notificações',
      descricao: 'Configurar alertas e avisos',
      ativo: true,
    },
    {
      id: 2,
      icon: Lock,
      titulo: 'Segurança',
      descricao: 'Políticas de senha e 2FA',
      ativo: true,
    },
    {
      id: 3,
      icon: Database,
      titulo: 'Backup',
      descricao: 'Backup automático de dados',
      ativo: true,
    },
    {
      id: 4,
      icon: Palette,
      titulo: 'Aparência',
      descricao: 'Tema e personalização',
      ativo: false,
    },
    {
      id: 5,
      icon: Globe,
      titulo: 'Integração',
      descricao: 'APIs e webhooks',
      ativo: false,
    },
    {
      id: 6,
      icon: Shield,
      titulo: 'Permissões',
      descricao: 'Controle de acesso',
      ativo: true,
    },
  ];

  return (
    <div className="space-y-6">
      {/* Card de Configurações */}
      <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700">
        <h2 className="text-xl font-bold text-white mb-4 pb-4 border-b border-zinc-700">
          Configurações do Sistema
        </h2>

        <div className="space-y-3">
          {configuracoes.map((config) => {
            const Icon = config.icon;
            return (
              <button
                key={config.id}
                className="w-full p-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors text-left flex items-center gap-3 border border-zinc-700 hover:border-red-500/50"
              >
                <div className={`p-2 rounded-lg ${
                  config.ativo ? 'bg-red-500/20 text-red-400' : 'bg-zinc-700 text-zinc-500'
                }`}>
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-white">{config.titulo}</h3>
                  <p className="text-xs text-zinc-400">{config.descricao}</p>
                </div>
                {config.ativo && (
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Card de Informações do Sistema */}
      <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-700">
        <h2 className="text-xl font-bold text-white mb-4 pb-4 border-b border-zinc-700">
          Informações do Sistema
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-zinc-400">Versão</span>
            <span className="text-white font-medium">1.0.0</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Última Atualização</span>
            <span className="text-white font-medium">27/11/2024</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Banco de Dados</span>
            <span className="text-emerald-400 font-medium">Online</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Servidor</span>
            <span className="text-emerald-400 font-medium">Ativo</span>
          </div>
          <div className="flex justify-between">
            <span className="text-zinc-400">Espaço Usado</span>
            <span className="text-white font-medium">2.4 GB / 10 GB</span>
          </div>
        </div>

        {/* Barra de Progresso */}
        <div className="mt-4 pt-4 border-t border-zinc-700">
          <div className="flex justify-between text-xs text-zinc-400 mb-2">
            <span>Armazenamento</span>
            <span>24%</span>
          </div>
          <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
            <div
              className="h-full bg-linear-to-r from-red-600 to-red-500 transition-all"
              style={{ width: '24%' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
