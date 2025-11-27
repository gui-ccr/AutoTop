// Componente de tabela de clientes

import { formatCurrency, formatDate } from '../../../utils/formatters';
import { Mail, Phone, MapPin, ShoppingCart, Edit, Trash2 } from 'lucide-react';

interface Cliente {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  cidade: string;
  estado: string;
  dataCadastro: string;
  status: 'ativo' | 'inativo' | 'lead';
  totalCompras: number;
  valorTotal: number;
}

interface ClientesTableProps {
  clientes: Cliente[];
}

function StatusBadge({ status }: { status: Cliente['status'] }) {
  const styles = {
    ativo: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    inativo: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
    lead: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };

  const labels = {
    ativo: 'Ativo',
    inativo: 'Inativo',
    lead: 'Lead',
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-md border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export function ClientesTable({ clientes }: ClientesTableProps) {
  if (clientes.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-400">
        <p>Nenhum cliente cadastrado ainda.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header com título */}
      <div className="flex items-center justify-between border-b border-zinc-700 pb-4">
        <h2 className="text-xl font-bold text-white">Lista de Clientes</h2>
        <p className="text-sm text-zinc-400">{clientes.length} cliente{clientes.length !== 1 ? 's' : ''} encontrado{clientes.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Cliente
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Contato
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Localização
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Cadastro
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Compras
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Status
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Ações
              </th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((cliente) => (
              <tr
                key={cliente.id}
                className="border-b border-zinc-700/50 hover:bg-zinc-700/30 transition-colors"
              >
                {/* Cliente */}
                <td className="py-4 px-4">
                  <div>
                    <div className="font-medium text-white">{cliente.nome}</div>
                    <div className="text-sm text-zinc-400">{cliente.cpf}</div>
                  </div>
                </td>

                {/* Contato */}
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-sm text-zinc-300">
                      <Mail size={14} className="text-zinc-500" />
                      {cliente.email}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-300">
                      <Phone size={14} className="text-zinc-500" />
                      {cliente.telefone}
                    </div>
                  </div>
                </td>

                {/* Localização */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <MapPin size={14} className="text-zinc-500" />
                    {cliente.cidade} - {cliente.estado}
                  </div>
                </td>

                {/* Cadastro */}
                <td className="py-4 px-4 text-sm text-zinc-300">
                  {formatDate(cliente.dataCadastro)}
                </td>

                {/* Compras */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart size={16} className="text-zinc-500" />
                    <div>
                      <div className="text-sm font-medium text-white">
                        {cliente.totalCompras} {cliente.totalCompras === 1 ? 'compra' : 'compras'}
                      </div>
                      <div className="text-xs text-emerald-400">
                        {formatCurrency(cliente.valorTotal)}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  <StatusBadge status={cliente.status} />
                </td>

                {/* Ações */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <button
                      className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors"
                      title="Editar cliente"
                    >
                      <Edit size={16} />
                    </button>
                    <button
                      className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                      title="Excluir cliente"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
