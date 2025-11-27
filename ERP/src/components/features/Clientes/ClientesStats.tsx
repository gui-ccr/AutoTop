// Componente de estatísticas de clientes

import { Users, UserCheck, UserPlus, UserSearch } from 'lucide-react';
import { StatCard } from '../../ui/StatCard';
import type { LucideIcon } from 'lucide-react';

interface ClienteStat {
  id: string;
  label: string;
  value: string | number;
  trend?: string;
  trendPositive?: boolean;
  icon: string;
}

interface ClientesStatsProps {
  stats: ClienteStat[];
}

const iconMap: Record<string, LucideIcon> = {
  'users': Users,
  'user-check': UserCheck,
  'user-plus': UserPlus,
  'user-search': UserSearch,
};

export function ClientesStats({ stats }: ClientesStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.id}
          label={stat.label}
          value={stat.value}
          icon={iconMap[stat.icon] || Users}
          trend={stat.trend}
          trendPositive={stat.trendPositive}
        />
      ))}
    </div>
  );
}
