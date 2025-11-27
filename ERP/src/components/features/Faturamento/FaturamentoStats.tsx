// Componente de estatísticas de faturamento

import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { StatCard } from '../../ui/StatCard';
import type { LucideIcon } from 'lucide-react';

interface FaturamentoStat {
  id: string;
  label: string;
  value: string | number;
  trend?: string;
  trendPositive?: boolean;
  icon: string;
}

interface FaturamentoStatsProps {
  stats: FaturamentoStat[];
}

const iconMap: Record<string, LucideIcon> = {
  'dollar-sign': DollarSign,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  'wallet': Wallet,
};

export function FaturamentoStats({ stats }: FaturamentoStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          label={stat.label}
          value={stat.value}
          icon={iconMap[stat.icon] || DollarSign}
          trend={stat.trend}
          trendPositive={stat.trendPositive}
        />
      ))}
    </div>
  );
}
