// Componente de estatísticas de contas

import { Users, UserCheck, Shield, Activity } from 'lucide-react';
import { StatCard } from '../../ui/StatCard';
import type { LucideIcon } from 'lucide-react';

interface ContaStat {
  id: string;
  label: string;
  value: string | number;
  trend?: string;
  trendPositive?: boolean;
  icon: string;
}

interface ContasStatsProps {
  stats: ContaStat[];
}

const iconMap: Record<string, LucideIcon> = {
  'users': Users,
  'user-check': UserCheck,
  'shield': Shield,
  'activity': Activity,
};

export function ContasStats({ stats }: ContasStatsProps) {
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
