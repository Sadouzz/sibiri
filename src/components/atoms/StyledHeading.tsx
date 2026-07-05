// eslint-disable-next-line @typescript-eslint/no-unused-vars

interface StyledHeadingProps {
    title: string;
    highlightedText?: string;
    titleColor?: string;
    highlightColor?: string;
    className?: string;
    textPosition?: string;
}

export default function StyledHeading({
    title,
    highlightedText,
    titleColor = "",
    highlightColor = "text-sibiri-gold",
    className = "",
    textPosition = "text-center"
}: StyledHeadingProps) {
    return (
        <div className={`relative flex w-full flex-col-reverse ${textPosition} ${className}`}>
            <h2 className={`font-bold text-balance text-4xl md:text-5xl lg:text-7xl font-semibold italic block ${titleColor}`.trim()}>
                {title} {highlightedText && <em className={`italic ${highlightColor}`}>{highlightedText}</em>}
            </h2>
        </div>
    );
}
