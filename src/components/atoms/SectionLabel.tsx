import type { ReactNode } from "react";

interface SectionLabelProps {
    text: string | ReactNode;
    lineColor?: string;
    textColor?: string;
    className?: string;
}

export default function SectionLabel({
    text,
    lineColor = "bg-red-600",
    textColor = "text-gray-200",
    className = ""
}: SectionLabelProps) {
    return (
        <div className={`flex items-center gap-4 ${className}`.trim()}>
            <div className={`h-[2px] w-8 md:w-12 ${lineColor}`.trim()} />
            <span className={`uppercase tracking-[0.2em] text-sm font-medium ${textColor}`.trim()}>
                {text}
            </span>
        </div>
    );
}
