import type { ReactNode } from 'react';

interface CardProps {
    title?: string; // titulo (opcional)
    children: ReactNode; // aceita qualquer coisa dentro
    className?: string; // adicionar classes extras (opcional)
}

export function Card({title, children, className =  ''}: CardProps) {
    return(
        <div className={`bg-zinc-800 rounded-xl shadow-sm border border-zinc-700 p-6 ${className}`}>
            {title && (
                <h2 className='text-white text-lg font-bold mb-4 border-b border-zinc-700 pb-2'>
                    {title}
                </h2>
            )}
            <div>{children}</div>
        </div>
    )
}