// Componente de tabela de usuários

import { formatDateTime } from '../../../utils/formatters';
import { Mail, Phone, Briefcase, Edit, Trash2, MoreVertical } from 'lucide-react';

interface Usuario {
  id: string;
  nome: string;
  email: string;
  cargo: string;
  departamento: string;
  telefone: string;
  role: 'admin' | 'gestor' | 'vendedor' | 'usuario';
  status: 'ativo' | 'inativo';
  ultimoAcesso: string;
  dataCriacao: string;
  avatar: string;
}

interface ContasTableProps {
  usuarios: Usuario[];
}

function RoleBadge({ role }: { role: Usuario['role'] }) {
  const styles = {
    admin: 'bg-red-500/20 text-red-400 border-red-500/30',
    gestor: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    vendedor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    usuario: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
  };

  const labels = {
    admin: 'Administrador',
    gestor: 'Gestor',
    vendedor: 'Vendedor',
    usuario: 'Usuário',
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-md border ${styles[role]}`}>
      {labels[role]}
    </span>
  );
}

function StatusBadge({ status }: { status: Usuario['status'] }) {
  const styles = {
    ativo: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    inativo: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
  };

  const labels = {
    ativo: 'Ativo',
    inativo: 'Inativo',
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-md border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export function ContasTable({ usuarios }: ContasTableProps) {
  if (usuarios.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-400">
        <p>Nenhum usuário cadastrado ainda.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-700 pb-4">
        <h2 className="text-xl font-bold text-white">Usuários do Sistema</h2>
        <p className="text-sm text-zinc-400">
          {usuarios.length} usuário{usuarios.length !== 1 ? 's' : ''} cadastrado{usuarios.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Lista de Cards */}
      <div className="space-y-3">
        {usuarios.map((usuario) => (
          <div
            key={usuario.id}
            className="p-4 bg-zinc-900 rounded-lg border border-zinc-700 hover:border-red-500/50 transition-all"
          >
            <div className="flex items-start justify-between">
              {/* Info do Usuário */}
              <div className="flex items-start gap-4 flex-1">
                {/* Avatar */}
                <img
                  src={usuario.avatar}
                  alt={usuario.nome}
                  className="w-12 h-12 rounded-full bg-zinc-800 border-2 border-zinc-700"
                />

                {/* Detalhes */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-white">{usuario.nome}</h3>
                    <RoleBadge role={usuario.role} />
                    <StatusBadge status={usuario.status} />
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Mail size={14} className="text-zinc-500" />
                      {usuario.email}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Phone size={14} className="text-zinc-500" />
                      {usuario.telefone}
                    </div>
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Briefcase size={14} className="text-zinc-500" />
                      {usuario.cargo} • {usuario.departamento}
                    </div>
                    <div className="text-zinc-500 text-xs">
                      Último acesso: {formatDateTime(usuario.ultimoAcesso)}
                    </div>
                  </div>
                </div>
              </div>

              {/* Ações */}
              <div className="flex items-center gap-2">
                <button
                  className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors"
                  title="Editar usuário"
                >
                  <Edit size={16} />
                </button>
                <button
                  className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                  title="Excluir usuário"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  className="p-2 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 rounded transition-colors"
                  title="Mais opções"
                >
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
