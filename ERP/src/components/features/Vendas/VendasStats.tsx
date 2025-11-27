// Componente de estatísticas de vendas

import { DollarSign, ShoppingCart, TrendingUp, Clock } from 'lucide-react';
import { StatCard } from '../../ui/StatCard';
import type { LucideIcon } from 'lucide-react';

interface VendaStat {
  id: string;
  label: string;
  value: string | number;
  trend?: string;
  trendPositive?: boolean;
  icon: string;
}

interface VendasStatsProps {
  stats: VendaStat[];
}

const iconMap: Record<string, LucideIcon> = {
  'dollar-sign': DollarSign,
  'shopping-cart': ShoppingCart,
  'trending-up': TrendingUp,
  'clock': Clock,
};

export function VendasStats({ stats }: VendasStatsProps) {
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
