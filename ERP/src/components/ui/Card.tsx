import type { ReactNode } from 'react';

interface CardProps {
    title?: string; // titulo (opcional)
    children: ReactNode; // aceita qualquer coisa dentro
    className?: string; // adicionar classes extras (opcional)
}

export function Card({title, children, className =  ''}: CardProps) {
    return(
        <div className={`bg-white rounded-xl shadow-sm border border-zinc-200 p-6 ${className}`}>
            <h2 className='text-zinc-800 text-lg font-bold mb-4 border-b border-zinc-300 pb-2 '>
                {title}
            </h2>
            <div>{children}</div>
        </div>
    )
}