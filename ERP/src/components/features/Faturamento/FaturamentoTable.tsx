// Componente de tabela de transações financeiras

import { formatCurrency, formatDate } from '../../../utils/formatters';
import { ArrowUpCircle, ArrowDownCircle, Eye, FileText } from 'lucide-react';

interface Transacao {
  id: string;
  tipo: 'receita' | 'despesa';
  descricao: string;
  categoria: string;
  cliente: string;
  valor: number;
  dataVencimento: string;
  dataPagamento: string | null;
  status: 'pago' | 'pendente' | 'agendado' | 'atrasado';
  metodoPagamento: string;
}

interface FaturamentoTableProps {
  transacoes: Transacao[];
}

function StatusBadge({ status }: { status: Transacao['status'] }) {
  const styles = {
    pago: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    pendente: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    agendado: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
    atrasado: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const labels = {
    pago: 'Pago',
    pendente: 'Pendente',
    agendado: 'Agendado',
    atrasado: 'Atrasado',
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-md border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export function FaturamentoTable({ transacoes }: FaturamentoTableProps) {
  if (transacoes.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-400">
        <p>Nenhuma transação registrada ainda.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-700 pb-4">
        <h2 className="text-xl font-bold text-white">Transações Financeiras</h2>
        <p className="text-sm text-zinc-400">
          {transacoes.length} transaç{transacoes.length !== 1 ? 'ões' : 'ão'} registrada{transacoes.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-zinc-700">
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Tipo
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Descrição
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Categoria
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Cliente/Fornecedor
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Valor
              </th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-zinc-300">
                Vencimento
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
            {transacoes.map((transacao) => (
              <tr
                key={transacao.id}
                className="border-b border-zinc-700/50 hover:bg-zinc-700/30 transition-colors"
              >
                {/* Tipo */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    {transacao.tipo === 'receita' ? (
                      <ArrowUpCircle size={20} className="text-emerald-400" />
                    ) : (
                      <ArrowDownCircle size={20} className="text-red-400" />
                    )}
                    <span className={`text-sm font-medium ${
                      transacao.tipo === 'receita' ? 'text-emerald-400' : 'text-red-400'
                    }`}>
                      {transacao.tipo === 'receita' ? 'Receita' : 'Despesa'}
                    </span>
                  </div>
                </td>

                {/* Descrição */}
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <FileText size={14} className="text-zinc-500" />
                    <span className="text-sm text-white">{transacao.descricao}</span>
                  </div>
                </td>

                {/* Categoria */}
                <td className="py-4 px-4">
                  <span className="text-sm text-zinc-300">{transacao.categoria}</span>
                </td>

                {/* Cliente/Fornecedor */}
                <td className="py-4 px-4">
                  <span className="text-sm text-zinc-300">{transacao.cliente}</span>
                </td>

                {/* Valor */}
                <td className="py-4 px-4">
                  <span className={`text-sm font-semibold ${
                    transacao.tipo === 'receita' ? 'text-emerald-400' : 'text-red-400'
                  }`}>
                    {transacao.tipo === 'receita' ? '+' : '-'} {formatCurrency(transacao.valor)}
                  </span>
                  <div className="text-xs text-zinc-500 mt-0.5">
                    {transacao.metodoPagamento}
                  </div>
                </td>

                {/* Vencimento */}
                <td className="py-4 px-4">
                  <div className="text-sm text-zinc-300">
                    {formatDate(transacao.dataVencimento)}
                  </div>
                  {transacao.dataPagamento && (
                    <div className="text-xs text-zinc-500 mt-0.5">
                      Pago: {formatDate(transacao.dataPagamento)}
                    </div>
                  )}
                </td>

                {/* Status */}
                <td className="py-4 px-4">
                  <StatusBadge status={transacao.status} />
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
