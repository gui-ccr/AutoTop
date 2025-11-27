// Componente de grid de veículos em estoque

import { formatCurrency, formatDate } from '../../../utils/formatters';
import { Eye, Edit, Trash2, Calendar, Gauge, Fuel } from 'lucide-react';

interface Veiculo {
  id: string;
  modelo: string;
  marca: string;
  ano: number;
  cor: string;
  placa: string;
  chassi: string;
  quilometragem: number;
  combustivel: string;
  preco: number;
  status: 'disponivel' | 'reservado' | 'vendido';
  imagem: string;
  categoria: string;
  dataEntrada: string;
}

interface EstoqueGridProps {
  veiculos: Veiculo[];
}

function StatusBadge({ status }: { status: Veiculo['status'] }) {
  const styles = {
    disponivel: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
    reservado: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    vendido: 'bg-zinc-500/20 text-zinc-400 border-zinc-500/30',
  };

  const labels = {
    disponivel: 'Disponível',
    reservado: 'Reservado',
    vendido: 'Vendido',
  };

  return (
    <span className={`px-2 py-1 text-xs font-medium rounded-md border ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}

export function EstoqueGrid({ veiculos }: EstoqueGridProps) {
  if (veiculos.length === 0) {
    return (
      <div className="text-center py-12 text-zinc-400">
        <p>Nenhum veículo em estoque.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-700 pb-4">
        <h2 className="text-xl font-bold text-white">Veículos em Estoque</h2>
        <p className="text-sm text-zinc-400">
          {veiculos.length} veículo{veiculos.length !== 1 ? 's' : ''} cadastrado{veiculos.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Grid de Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {veiculos.map((veiculo) => (
          <div
            key={veiculo.id}
            className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-700 hover:border-red-500/50 transition-all hover:shadow-lg"
          >
            {/* Imagem do Veículo */}
            <div className="relative h-48 bg-zinc-800 overflow-hidden">
              <img
                src={veiculo.imagem}
                alt={`${veiculo.marca} ${veiculo.modelo}`}
                className="w-full h-full object-cover"
              />
              {/* Badge de Status */}
              <div className="absolute top-3 right-3">
                <StatusBadge status={veiculo.status} />
              </div>
              {/* Categoria */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-1 text-xs font-medium bg-zinc-900/80 text-white rounded-md">
                  {veiculo.categoria}
                </span>
              </div>
            </div>

            {/* Informações do Veículo */}
            <div className="p-4 space-y-3">
              {/* Marca e Modelo */}
              <div>
                <h3 className="text-lg font-bold text-white">
                  {veiculo.marca} {veiculo.modelo}
                </h3>
                <p className="text-sm text-zinc-400">
                  {veiculo.ano} • {veiculo.cor}
                </p>
              </div>

              {/* Detalhes */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Gauge size={14} />
                  <span>{veiculo.quilometragem.toLocaleString('pt-BR')} km</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Fuel size={14} />
                  <span>{veiculo.combustivel}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Calendar size={14} />
                  <span>Entrada: {formatDate(veiculo.dataEntrada)}</span>
                </div>
              </div>

              {/* Preço */}
              <div className="pt-3 border-t border-zinc-700">
                <p className="text-xs text-zinc-400 mb-1">Preço</p>
                <p className="text-2xl font-bold text-emerald-400">
                  {formatCurrency(veiculo.preco)}
                </p>
              </div>

              {/* Ações */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zinc-700 text-white rounded-lg hover:bg-zinc-600 transition-colors text-sm"
                  title="Ver detalhes"
                >
                  <Eye size={14} />
                  <span>Detalhes</span>
                </button>
                <button
                  className="p-2 text-zinc-400 hover:text-blue-400 hover:bg-blue-500/10 rounded transition-colors"
                  title="Editar veículo"
                >
                  <Edit size={16} />
                </button>
                <button
                  className="p-2 text-zinc-400 hover:text-red-400 hover:bg-red-500/10 rounded transition-colors"
                  title="Excluir veículo"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
