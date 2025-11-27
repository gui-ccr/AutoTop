// Componente de cabeçalho do Dashboard
// Seguindo Single Responsibility

interface DashboardHeaderProps {
  title: string;
  subtitle: string;
}

export function DashboardHeader({
  title,
  subtitle,
}: DashboardHeaderProps) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white">{title}</h1>
      <p className="text-zinc-400 mt-1">{subtitle}</p>
    </div>
  );
}
