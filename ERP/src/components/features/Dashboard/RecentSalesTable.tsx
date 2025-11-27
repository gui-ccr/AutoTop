// Componente para exibir tabela de vendas recentes
// Seguindo princípios de Clean Code e SOLID

import { formatCurrency, formatDate } from '../../../utils/formatters';

interface Sale {
  id: string;
  customerName: string;
  vehicleModel: string;
  vehicleBrand: string;
  saleDate: string;
  amount: number;
  status: 'completed' | 'pending' | 'cancelled';
  paymentMethod: 'cash' | 'financing' | 'leasing';
}

interface RecentSalesTableProps {
  sales: Sale[];
}

// Componente para badge de status
function StatusBadge({ status }: { status: Sale['status'] }) {
  const styles = {
    completed: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    cancelled: 'bg-red-500/20 text-red-400 border-red-500/30',
  };

  const labels = {
    completed: 'Concluída',
    pending: 'Pendente',
    cancelled: 'Cancelada',
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-medium rounded-md border ${styles[status]}`}
    >
      {labels[status]}
    </span>
  );
}

// Componente para método de pagamento
function PaymentBadge({ method }: { method: Sale['paymentMethod'] }) {
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

export function RecentSalesTable({ sales }: RecentSalesTableProps) {
  if (sales.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-400">
        <p>Nenhuma venda registrada ainda.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-zinc-700">
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
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => (
            <tr
              key={sale.id}
              className="border-b border-zinc-700/50 hover:bg-zinc-700/30 transition-colors"
            >
              <td className="py-4 px-4">
                <div className="font-medium text-white">{sale.customerName}</div>
              </td>
              <td className="py-4 px-4">
                <div className="font-medium text-white">{sale.vehicleModel}</div>
                <div className="text-sm text-zinc-400">{sale.vehicleBrand}</div>
              </td>
              <td className="py-4 px-4 text-sm text-zinc-300">
                {formatDate(sale.saleDate)}
              </td>
              <td className="py-4 px-4 font-semibold text-emerald-400">
                {formatCurrency(sale.amount)}
              </td>
              <td className="py-4 px-4">
                <PaymentBadge method={sale.paymentMethod} />
              </td>
              <td className="py-4 px-4">
                <StatusBadge status={sale.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
