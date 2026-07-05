import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ServicesSection from "./ServicesSection";
import StyledHeading from "../atoms/StyledHeading";

gsap.registerPlugin(ScrollTrigger);

// Configuration for each bento piece
// xDir/yDir: 1 (right/down), -1 (left/up), 0 (center)
const BENTO_BOXES = [
    // Top Row
    { id: 1, mdLayout: "md:top-0 md:left-0 md:w-[23%] md:h-[40%]", xDir: -1, yDir: -1, statValue: "15", statSuffix: "+", statLabel: "Années d'expérience", statHighlightText: "*Une expertise", statHighlightAccent: "consolidée." },
    { id: 2, mdLayout: "md:top-[10%] md:left-[25.5%] md:w-[23%] md:h-[40%]", xDir: -0.5, yDir: -1, statValue: "5", statSuffix: "+", statLabel: "Filiales actives", statSublabel: "Présence nationale et internationale." },
    { id: 3, mdLayout: "md:top-0 md:left-[51%] md:w-[23%] md:h-[40%]", xDir: 0.5, yDir: -1, statValue: "98", statSuffix: "%", statLabel: "Clients satisfaits", statHighlightText: "*La qualité", statHighlightAccent: "avant tout." },
    { id: 4, mdLayout: "md:top-[15%] md:left-[76.5%] md:w-[23.5%] md:h-[40%]", xDir: 1, yDir: -1, statValue: "24/7", statSuffix: "", statLabel: "Assistance globale", statSublabel: "Toujours à l'écoute de nos partenaires." },

    // Bottom Row
    { id: 5, mdLayout: "md:top-[45%] md:left-0 md:w-[23%] md:h-[55%]", xDir: -1, yDir: 1, statValue: "200", statSuffix: "+", statLabel: "Collaborateurs", statSublabel: "Une équipe dédiée à votre réussite." },
    { id: 6, mdLayout: "md:top-[55%] md:left-[25.5%] md:w-[48.5%] md:h-[45%]", xDir: 0, yDir: 1, statValue: "50", statSuffix: "+", statLabel: "Projets BTP réalisés à grande échelle", statHighlightText: "Des infrastructures", statHighlightAccent: "modernes et durables." },
    { id: 7, mdLayout: "md:top-[60%] md:left-[76.5%] md:w-[23.5%] md:h-[40%]", xDir: 1, yDir: 1, statValue: "1M", statSuffix: "+", statLabel: "Litres distribués", statHighlightText: "*Secteur", statHighlightAccent: "Hydrocarbures." },
];

export default function BentoShutterReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const shutterRefs = useRef<(HTMLDivElement | null)[]>([]);
    const headerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        // Animate based on the first 150vh of scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "+=150%", // 150vh scroll duration for the shutter
                scrub: true,
            }
        });

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
            const startAt = delay;
            const endAt = 0.5 + delay;
            const duration = endAt - startAt;
            const target = shutterRefs.current[i];

            if (target) {
                // x, y, rotate, scale
                tl.fromTo(target,
                    { x: 0, y: 0, rotate: 0, scale: 1 },
                    {
                        x: box.xDir * 1500,
                        y: box.yDir * 1500,
                        rotate: box.xDir * 45,
                        scale: 2,
                        duration: duration,
                        ease: "power2.inOut"
                    },
                    startAt
                );

                // Opacity fades out
                tl.fromTo(target,
                    { opacity: 1 },
                    { opacity: 0, duration: duration - 0.1, ease: "power2.inOut" },
                    startAt
                );
            }
        });

    }, { scope: containerRef });

    return (
        <div ref={containerRef} className="relative w-full bg-[#050505]">

            {/* SHUTTER FOREGROUND (Stays on screen for the first 150vh of scrolling) */}
            <div className="absolute top-0 left-0 w-full h-[150vh] pointer-events-none z-50">
                <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center px-4 md:px-8 pt-8 md:pt-12">

                    {/* SECTION HEADER */}
                    <div ref={headerRef} className="w-full  mb-6 md:mb-8 text-left pointer-events-auto will-change-transform z-10">
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
                    <div className="relative w-full h-auto md:h-[60vh] flex flex-col md:block ">
                        {BENTO_BOXES.map((box, i) => {
                            const isWide = box.mdLayout.includes("w-[48.5%]");

                            const valueSize = isWide ? "text-6xl md:text-[5rem] lg:text-[5.5rem]" : "text-5xl md:text-5xl lg:text-6xl";
                            const suffixSize = isWide ? "text-2xl md:text-3xl" : "text-xl md:text-2xl";
                            const labelSize = isWide ? "text-base md:text-lg" : "text-sm md:text-base";
                            const subtextSize = "text-xs md:text-sm";
                            const pSize = isWide ? "p-4 md:p-6 lg:p-8" : "p-4 md:p-5 lg:p-6";

                            return (
                                /* OUTER WRAPPER FOR GSAP ANIMATION */
                                <div
                                    key={box.id}
                                    ref={(el) => { shutterRefs.current[i] = el; }}
                                    className={`relative w-full h-[200px] mb-4 md:mb-0 md:absolute ${box.mdLayout} will-change-transform z-10 pointer-events-auto flex`}
                                >
                                    {/* INNER WRAPPER FOR HOVER EFFECTS & CARD LAYOUT */}
                                    <div className={`w-full h-full rounded-2xl md:rounded-3xl border border-white/10 backdrop-blur-sm relative group overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_25px_rgba(253,183,23,0.15)]`}
                                        style={{ background: `linear-gradient(135deg, rgba(27,39,61,0.8) 0%, rgba(15,20,30,0.95) 100%)` }}
                                    >
                                        {/* Radial Glow Effect */}
                                        <div className="absolute inset-0 pointer-events-none"
                                            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(253, 183, 23, 0.08) 0%, rgba(27, 39, 61, 0.05) 50%, transparent 70%)' }} />

                                        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

                                        {box.statValue ? (
                                            <div className={`relative z-10 flex flex-col justify-between h-full w-full ${pSize}`}>
                                                {/* Headline */}
                                                <div className="flex items-baseline mb-3 md:mb-4">
                                                    <span className={`${valueSize} font-light tracking-tighter`} style={{ color: '#FDB717' }}>
                                                        {box.statValue}
                                                    </span>
                                                    {box.statSuffix && (
                                                        <span className={`${suffixSize} font-light text-white ml-2 mb-2`}>
                                                            {box.statSuffix}
                                                        </span>
                                                    )}
                                                </div>

                                                <div>
                                                    {/* Description */}
                                                    <p className={`${labelSize} text-neutral-100 font-light leading-relaxed mb-2`}>
                                                        {box.statLabel}
                                                        {box.statSublabel && (
                                                            <span className="block text-sm text-neutral-400 mt-1">{box.statSublabel}</span>
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

                    {/* VIGNETTE OVERLAY */}
                    <div className="absolute inset-0 pointer-events-none bg-black" />
                </div>
            </div>

            {/* REVEALED CONTENT (Background) */}
            {/* This will sit still while the shutter opens, then scroll naturally! */}
            <div className="relative z-10 w-full pt-4">
                <ServicesSection />
            </div>
        </div>
    );
}
