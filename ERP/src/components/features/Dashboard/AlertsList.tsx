// Componente para exibir lista de alertas/avisos
// Seguindo Single Responsibility Principle

import { AlertCircle, Info, CheckCircle, XCircle } from 'lucide-react';
import { getRelativeTime } from '../../../utils/formatters';

interface Alert {
  id: string;
  type: 'warning' | 'info' | 'success' | 'error';
  title: string;
  message: string;
  createdAt: string;
  priority: 'low' | 'medium' | 'high';
}

interface AlertsListProps {
  alerts: Alert[];
}

// Mapeamento de tipos de alerta para ícones e estilos
const alertConfig = {
  warning: {
    icon: AlertCircle,
    bgColor: 'bg-yellow-500/10',
    textColor: 'text-yellow-300',
    borderColor: 'border-yellow-500/30',
    iconColor: 'text-yellow-400',
  },
  info: {
    icon: Info,
    bgColor: 'bg-blue-500/10',
    textColor: 'text-blue-300',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400',
  },
  success: {
    icon: CheckCircle,
    bgColor: 'bg-emerald-500/10',
    textColor: 'text-emerald-300',
    borderColor: 'border-emerald-500/30',
    iconColor: 'text-emerald-400',
  },
  error: {
    icon: XCircle,
    bgColor: 'bg-red-500/10',
    textColor: 'text-red-300',
    borderColor: 'border-red-500/30',
    iconColor: 'text-red-400',
  },
};

interface AlertItemProps {
  alert: Alert;
}

function AlertItem({ alert }: AlertItemProps) {
  const config = alertConfig[alert.type];
  const Icon = config.icon;

  return (
    <div
      className={`p-4 rounded-lg border ${config.bgColor} ${config.borderColor} ${config.textColor} relative`}
    >
      <div className="flex items-start gap-3">
        <Icon size={20} className={`${config.iconColor} shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm">{alert.title}</h4>
          <p className="text-sm mt-1">{alert.message}</p>
          <p className="text-xs mt-2 opacity-70">
            {getRelativeTime(alert.createdAt)}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AlertsList({ alerts }: AlertsListProps) {
  if (alerts.length === 0) {
    return (
      <div className="text-center py-8 text-zinc-400">
        <Info size={32} className="mx-auto mb-2 opacity-50" />
        <p className="text-sm">Nenhum alerta no momento</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {alerts.map((alert) => (
        <AlertItem key={alert.id} alert={alert} />
      ))}
    </div>
  );
}
