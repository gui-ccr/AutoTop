// Componente de tabela de vendas

import { formatCurrency, formatDate } from '../../../utils/formatters';
import { Eye, FileText, User } from 'lucide-react';

interface Venda {
  id: string;
  numeroVenda: string;
  cliente: string;
  veiculo: string;
  dataVenda: string;
  valor: number;
  formaPagamento: 'cash' | 'financing' | 'leasing';
  status: 'concluida' | 'pendente' | 'cancelada';
  vendedor: string;
  comissao: number;
}

interface VendasTableProps {
  vendas: Venda[];
}

function StatusBadge({ status }: { status: Venda['status'] }) {
  const styles = {
    concluida: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    pendente: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    cancelada: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const labels = {
    concluida: 'Concluída',
    pendente: 'Pendente',
    cancelada: 'Cancelada',
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-md border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

function PaymentBadge({ method }: { method: Venda['formaPagamento'] }) {
  const labels = {
    cash: 'À Vista',
    financing: 'Financiamento',
    leasing: 'Leasing',
  };

  return (
    <span className="text-sm text-zinc-300">
      {labels[method]}
    </span>
  );
}

export function VendasTable({ vendas }: VendasTableProps) {
  if (vendas.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-400">
        <p>Nenhuma venda registrada ainda.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-700 pb-4">
        <h2 className="text-xl font-bold text-white">Histórico de Vendas</h2>
        <p className="text-sm text-zinc-400">
          {vendas.length} venda{vendas.length !== 1 ? 's' : ''} registrada{vendas.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Nº Venda
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Cliente
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Veículo
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Data
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Valor
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Pagamento
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Vendedor
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
            {vendas.map((venda) => (
              <tr
                key={venda.id}
                className="border-b border-zinc-700/50 hover:bg-zinc-700/30 transition-colors"
              >
                {/* Número da Venda */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-zinc-500" />
                    <span className="font-medium text-white">{venda.numeroVenda}</span>
                  </div>
                </td>

                {/* Cliente */}
                <td className="py-4 px-4">
                  <div className="font-medium text-white">{venda.cliente}</div>
                </td>

                {/* Veículo */}
                <td className="py-4 px-4">
                  <div className="text-sm text-zinc-300">{venda.veiculo}</div>
                </td>

                {/* Data */}
                <td className="py-4 px-4 text-sm text-zinc-300">
                  {formatDate(venda.dataVenda)}
                </td>

                {/* Valor */}
                <td className="py-4 px-4">
                  <div className="font-semibold text-emerald-400">
                    {formatCurrency(venda.valor)}
                  </div>
                  <div className="text-xs text-zinc-500">
                    Comissão: {formatCurrency(venda.comissao)}
                  </div>
                </td>

                {/* Pagamento */}
                <td className="py-4 px-4">
                  <PaymentBadge method={venda.formaPagamento} />
                </td>

                {/* Vendedor */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2 text-sm text-zinc-300">
                    <User size={14} className="text-zinc-500" />
                    {venda.vendedor}
                  </div>
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  <StatusBadge status={venda.status} />
                </td>

                {/* Ações */}
                <td className="py-4 px-4">
                  <button
                    className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors"
                    title="Ver detalhes"
                  >
                    <Eye size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
