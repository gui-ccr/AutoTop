import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
    label: string;
    value: string | number;
    icon: LucideIcon;
    trend?: string; // ex "+12% esse mes " (opcional)
    trendPositive?: boolean; // se subiu é verdem se desceu é vermelho
}


export function StatCard({label, value, icon: Icon, trend, trendPositive} : StatCardProps ) {
    
    return(
        <div className='bg-zinc-100 rounded-xl p-6 border border-zinc-300 shadow-sm flex items-start justify-between hover:shadow-lg transition-shadow'>
            <div>
                <p className='text-sm font-medium text-zinc-500 mb-1.5'>{label}</p>
                <h3 className='text-2xl font-bold text-zinc-900'>{value}</h3>

                {trend && (
                    <p className={`text-xs mt-2 font-medium ${trendPositive ? 'text-emerald-600': 'text-red-600'}`}>{trend}</p>
                )}
            </div>
            <div>
            <Icon size={24}/>
            </div>
        </div>
    )
}