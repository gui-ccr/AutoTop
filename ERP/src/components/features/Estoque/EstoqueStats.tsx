// Componente de estatísticas de estoque

import { Car, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { StatCard } from '../../ui/StatCard';
import type { LucideIcon } from 'lucide-react';

interface EstoqueStat {
  id: string;
  label: string;
  value: string | number;
  trend?: string;
  trendPositive?: boolean;
  icon: string;
}

interface EstoqueStatsProps {
  stats: EstoqueStat[];
}

const iconMap: Record<string, LucideIcon> = {
  'car': Car,
  'check-circle': CheckCircle,
  'clock': Clock,
  'dollar-sign': DollarSign,
};

export function EstoqueStats({ stats }: EstoqueStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          label={stat.label}
          value={stat.value}
          icon={iconMap[stat.icon] || Car}
          trend={stat.trend}
          trendPositive={stat.trendPositive}
        />
      ))}
    </div>
  );
}
