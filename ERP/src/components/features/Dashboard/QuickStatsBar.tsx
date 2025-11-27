// Componente de resumo rápido com mini estatísticas
// Para exibir informações adicionais de forma compacta

interface QuickStatProps {
  label: string;
  value: string | number;
  description?: string;
}

function QuickStat({ label, value, description }: QuickStatProps) {
  return (
    <div className="text-center p-4">
      <p className="text-xs font-medium text-zinc-400 uppercase tracking-wide mb-1">
        {label}
      </p>
      <p className="text-2xl font-bold text-white">{value}</p>
      {description && (
        <p className="text-xs text-zinc-500 mt-1">{description}</p>
      )}
    </div>
  );
}

interface QuickStatsBarProps {
  stats: QuickStatProps[];
}

export function QuickStatsBar({ stats }: QuickStatsBarProps) {
  return (
    <div className="bg-zinc-800 rounded-xl shadow-sm border border-zinc-700 divide-x divide-zinc-700 flex">
      {stats.map((stat, index) => (
        <div key={index} className="flex-1">
          <QuickStat {...stat} />
        </div>
      ))}
    </div>
  );
}
