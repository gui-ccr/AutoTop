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
        <div className='bg-zinc-800 rounded-xl p-6 border border-zinc-700 shadow-sm flex items-start justify-between hover:shadow-lg hover:border-red-500/50 transition-all'>
            <div>
                <p className='text-sm font-medium text-zinc-400 mb-1.5'>{label}</p>
                <h3 className='text-2xl font-bold text-white'>{value}</h3>

                {trend && (
                    <p className={`text-xs mt-2 font-medium ${trendPositive ? 'text-emerald-400': 'text-red-400'}`}>{trend}</p>
                )}
            </div>
            <div className='text-red-500'>
            <Icon size={24}/>
            </div>
        </div>
    )
}