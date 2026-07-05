import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/SplitText';

gsap.registerPlugin(SplitText);

interface BlurTextProps {
    text: string;
    delay?: number;
    className?: string;
    animateBy?: 'words' | 'chars';
    direction?: 'top' | 'bottom';
    onAnimationComplete?: () => void;
    stepDuration?: number;
}

const BlurText: React.FC<BlurTextProps> = ({
    text = '',
    delay = 20, // delay in ms per element
    className = '',
    animateBy = 'words',
    direction = 'top',
    onAnimationComplete,
    stepDuration = 0.5
}) => {
    const containerRef = useRef<HTMLParagraphElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const split = new SplitText(containerRef.current, {
            type: animateBy === 'words' ? 'words' : 'chars',
        });

        const targets = animateBy === 'words' ? split.words : split.chars;
        const initialY = direction === 'top' ? -20 : 20;

        gsap.fromTo(
            targets,
            { filter: 'blur(10px)', opacity: 0, y: initialY },
            {
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
                duration: stepDuration,
                stagger: delay / 1000,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 90%',
                    toggleActions: 'play none none reverse',
                },
                onComplete: () => {
                    if (onAnimationComplete) onAnimationComplete();
                }
            }
        );

        return () => split.revert();
    }, { scope: containerRef, dependencies: [text, animateBy, direction, delay, stepDuration] });

    return (
        <p ref={containerRef} className={className}>
            {text}
        </p>
    );
};

export default BlurText;
