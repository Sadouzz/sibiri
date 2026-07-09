import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import StyledHeading from "../atoms/StyledHeading";

gsap.registerPlugin(ScrollTrigger);

const BENTO_BOXES = [
    // Top Row
    { id: 1, mobileSpan: "col-span-1", mdLayout: "md:top-0 md:left-0 md:w-[23%] md:h-[40%]", xDir: -1, yDir: -1, statValue: "15", statSuffix: "+", statLabel: "Années d'expérience", statHighlightText: "*Une expertise", statHighlightAccent: "consolidée." },
    { id: 2, mobileSpan: "col-span-1", mdLayout: "md:top-[10%] md:left-[25.5%] md:w-[23%] md:h-[40%]", xDir: -0.5, yDir: -1, statValue: "5", statSuffix: "+", statLabel: "Filiales actives", statSublabel: "Présence nationale et internationale." },
    { id: 3, mobileSpan: "col-span-1", mdLayout: "md:top-0 md:left-[51%] md:w-[23%] md:h-[40%]", xDir: 0.5, yDir: -1, statValue: "98", statSuffix: "%", statLabel: "Clients satisfaits", statHighlightText: "*La qualité", statHighlightAccent: "avant tout." },
    { id: 4, mobileSpan: "col-span-1", mdLayout: "md:top-[15%] md:left-[76.5%] md:w-[23.5%] md:h-[40%]", xDir: 1, yDir: -1, statValue: "24/7", statSuffix: "", statLabel: "Assistance globale", statSublabel: "Toujours à l'écoute de nos partenaires." },

    // Bottom Row
    { id: 5, mobileSpan: "col-span-1", mdLayout: "md:top-[45%] md:left-0 md:w-[23%] md:h-[55%]", xDir: -1, yDir: 1, statValue: "200", statSuffix: "+", statLabel: "Collaborateurs", statSublabel: "Une équipe dédiée à votre réussite." },
    { id: 7, mobileSpan: "col-span-1", mdLayout: "md:top-[60%] md:left-[76.5%] md:w-[23.5%] md:h-[40%]", xDir: 1, yDir: 1, statValue: "1M", statSuffix: "+", statLabel: "Litres distribués", statHighlightText: "*Secteur", statHighlightAccent: "Hydrocarbures." },
    { id: 6, mobileSpan: "col-span-2", mdLayout: "md:top-[55%] md:left-[25.5%] md:w-[48.5%] md:h-[45%]", xDir: 0, yDir: 1, statValue: "50", statSuffix: "+", statLabel: "Projets BTP réalisés à grande échelle", statHighlightText: "Des infrastructures", statHighlightAccent: "modernes et durables." },
];

export default function BentoShutterReveal({ children }: { children?: React.ReactNode }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const shutterRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const detailsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => "+=" + (window.innerHeight * 2), // 200vh scroll duration for the shutter
                scrub: true,
            }
        });

        // Background Content Animations (scale 0.8 -> 1, opacity 0 -> 1)
        if (contentRef.current) {
            tl.fromTo(contentRef.current, 
                { scale: 0.8, opacity: 0 }, 
                { scale: 1, opacity: 1, duration: 0.4, ease: "power2.out" }, 
                0.2
            );
        }

        // Details vanish (paragraph and buttons)
        if (detailsRef.current) {
            tl.to(detailsRef.current, { opacity: 0, duration: 0.2, ease: "power2.inOut" }, 0.65);
        }

        // Title moves to top and scales down
        if (titleRef.current) {
            gsap.set(titleRef.current, { transformOrigin: "top center" });
            tl.to(titleRef.current, { 
                y: () => -(window.innerHeight / 2 - 250), // Pin it 250px from the top of the viewport (safely below any header)
                scale: 0.6, 
                duration: 0.3, 
                ease: "power2.inOut" 
            }, 0.7);
        }

        // Header Animation (fades out and moves up quickly at the very start)
        if (headerRef.current) {
            tl.fromTo(headerRef.current,
                { opacity: 1, y: 0, scale: 1 },
                { opacity: 0, y: -150, scale: 0.9, duration: 0.2, ease: "power2.inOut" },
                0
            );
        }

        // Bento Boxes Animation
        BENTO_BOXES.forEach((box, i) => {
            const delay = i * 0.05;
            const startAt = 0.1 + delay;
            const duration = 0.5;
            const target = shutterRefs.current[i];

            if (target) {
                tl.fromTo(target,
                    { x: 0, y: 0, rotate: 0, scale: 1, opacity: 1 },
                    {
                        x: box.xDir * 1500,
                        y: box.yDir * 1500,
                        rotate: box.xDir * 45,
                        scale: 2,
                        opacity: 0,
                        duration: duration,
                        ease: "power2.inOut"
                    },
                    startAt
                );
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full bg-sibiri-blue">
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center">

                {/* REVEALED CONTENT (Underneath) */}
                <div
                    ref={contentRef}
                    className="absolute z-0 text-center max-w-4xl px-6"
                >
                    <h2 ref={titleRef} className="text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 uppercase leading-tight relative z-20">
                        NOS <span style={{ color: '#FDB717' }}>SERVICES</span>
                    </h2>
                    <div ref={detailsRef}>
                        <p className="text-white/80 text-lg md:text-2xl font-light max-w-2xl mx-auto">
                            Découvrez les piliers de Sibiri Group. Des solutions intégrées et innovantes pour accompagner le développement de chaque secteur.
                        </p>
                    </div>
                </div>

                {/* BENTO SHUTTER GRID */}
                <div className="relative w-full max-w-[1800px] h-full flex flex-col items-center justify-center px-4 md:px-12 pt-8 md:pt-12 z-10 pointer-events-none">

                    {/* SECTION HEADER */}
                    <div ref={headerRef} className="w-full mb-6 md:mb-8 text-left pointer-events-auto will-change-transform">
                        <StyledHeading
                            title="Nos"
                            titleColor='text-white'
                            textPosition='text-left'
                            highlightedText="Chiffres"
                        />
                        <h1 className="text-3xl md:text-5xl font-light text-white leading-tight mb-3 tracking-tight ">
                            Transformons vos idées en <span className="font-medium" style={{ color: '#FDB717' }}>réalisations d'excellence</span>
                        </h1>
                        <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
                            Nous combinons expertise technique et vision stratégique pour donner vie à des projets innovants et durables.
                        </p>
                    </div>

                    {/* SCATTERED MASONRY LAYOUT */}
                    <div className="relative w-full h-[65vh] md:h-[60vh] grid grid-cols-2 grid-rows-4 gap-2 md:block">
                        {BENTO_BOXES.map((box, i) => {
                            const isWide = box.mdLayout.includes("w-[48.5%]");

                            const valueSize = isWide ? "text-4xl md:text-[5rem] lg:text-[5.5rem]" : "text-3xl md:text-5xl lg:text-6xl";
                            const suffixSize = isWide ? "text-xl md:text-3xl" : "text-lg md:text-2xl";
                            const labelSize = isWide ? "text-[11px] md:text-lg" : "text-[10px] md:text-base leading-tight md:leading-relaxed";
                            const subtextSize = "hidden md:block text-xs md:text-sm";
                            const pSize = isWide ? "p-3 md:p-6 lg:p-8" : "p-3 md:p-5 lg:p-6";

                            return (
                                /* OUTER WRAPPER FOR GSAP ANIMATION */
                                <div
                                    key={box.id}
                                    ref={(el) => { shutterRefs.current[i] = el; }}
                                    className={`relative w-full h-full md:absolute ${box.mdLayout} ${box.mobileSpan} will-change-transform pointer-events-auto flex`}
                                >
                                    {/* INNER WRAPPER FOR HOVER EFFECTS & CARD LAYOUT */}
                                    <div className={`w-full h-full rounded-xl md:rounded-3xl border border-white/10 backdrop-blur-sm relative group overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 md:hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(253,183,23,0.15)]`}
                                        style={{ background: `linear-gradient(135deg, rgba(27,39,61,0.8) 0%, rgba(15,20,30,0.95) 100%)` }}
                                    >
                                        {/* Radial Glow Effect */}
                                        <div className="absolute inset-0 pointer-events-none"
                                            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(253, 183, 23, 0.08) 0%, rgba(27, 39, 61, 0.05) 50%, transparent 70%)' }} />

                                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                                        {box.statValue ? (
                                            <div className={`relative z-10 flex flex-col justify-between h-full w-full ${pSize}`}>
                                                {/* Headline */}
                                                <div className="flex items-baseline mb-1 md:mb-4">
                                                    <span className={`${valueSize} font-light tracking-tighter`} style={{ color: '#FDB717' }}>
                                                        {box.statValue}
                                                    </span>
                                                    {box.statSuffix && (
                                                        <span className={`${suffixSize} font-light text-white ml-1 md:ml-2 mb-1 md:mb-2`}>
                                                            {box.statSuffix}
                                                        </span>
                                                    )}
                                                </div>

                                                <div>
                                                    {/* Description */}
                                                    <p className={`${labelSize} text-neutral-100 font-light mb-1 md:mb-2`}>
                                                        {box.statLabel}
                                                        {box.statSublabel && (
                                                            <span className="hidden md:block text-sm text-neutral-400 mt-1">{box.statSublabel}</span>
                                                        )}
                                                    </p>

                                                    {/* Highlight */}
                                                    {box.statHighlightText && (
                                                        <p className={`${subtextSize} text-neutral-400 mb-0`}>
                                                            <span>{box.statHighlightText}</span>{' '}
                                                            {box.statHighlightAccent && (
                                                                <span className="font-semibold" style={{ color: '#FDB717' }}>{box.statHighlightAccent}</span>
                                                            )}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center">
                                                <div className="w-4 h-4 rounded-full bg-white/5 border border-white/10" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* VIGNETTE OVERLAY */}
                
            </div>

            {/* If children (ScrollStack) are passed, add padding so they enter after the 200vh animation. */}
            <div className={`relative z-30 w-full pointer-events-none ${children ? 'pt-[200vh]' : 'h-[200vh]'}`}>
                <div className="pointer-events-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
