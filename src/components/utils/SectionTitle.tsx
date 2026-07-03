import React from 'react';

interface SectionTitleProps {
    title: React.ReactNode;
    subtitle: string;
    className?: string;
}

export default function SectionTitle({ title, subtitle, className = "" }: SectionTitleProps) {
    return (
        <div className={`relative flex w-full flex-col-reverse text-center ${className}`}>
            <h2 className="uppercase font-bold text-balance text-5xl lg:text-8xl block">
                {title}
            </h2>
            <span className="w-full rotate-[-2deg] font-serif text-center text-sibiri-gold font-quickbrush -mb-2 xl:-mb-4 text-xl lg:text-6xl">
                {subtitle}
            </span>
        </div>
    );
}
