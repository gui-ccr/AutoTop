// Componente para exibir grid de estatísticas
// Seguindo Single Responsibility Principle

import { Car, DollarSign, ShoppingBag, Users } from 'lucide-react';
import { StatCard } from '../../ui/StatCard';
import type { LucideIcon } from 'lucide-react';

interface DashboardStat {
  id: string;
  label: string;
  value: string | number;
  trend?: string;
  trendPositive?: boolean;
  icon: string;
}

interface StatsGridProps {
  stats: DashboardStat[];
}

// Mapeamento de nomes de ícones para componentes Lucide
const iconMap: Record<string, LucideIcon> = {
  'car': Car,
  'dollar-sign': DollarSign,
  'shopping-bag': ShoppingBag,
  'users': Users,
};

export function StatsGrid({ stats }: StatsGridProps) {
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
