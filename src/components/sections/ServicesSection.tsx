import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import imgBTP from '../../assets/img/hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        id: 1,
        title: "Bâtiment et Travaux Publics",
        tagline: "L'expertise de la construction",
        description: "Travaux de construction et rénovation, promotion immobilière, réseaux routiers.",
        image: imgBTP,
        color: "#FF5722",
    },
    {
        id: 2,
        title: "Activités Commerciales",
        tagline: "Négoce et commerce global",
        description: "Négoce international, import-export, représentations exclusives, commerce de gros.",
        image: imgBTP,
        color: "#2196F3",
    },
    {
        id: 3,
        title: "Activités Pétrolières",
        tagline: "Énergie et logistique",
        description: "Transport, Stockage, Commerce de gros et de détail de carburants et lubrifiants.",
        image: imgBTP,
        color: "#4CAF50",
    }
];

export default function ServicesSection() {
    const containerRef = useRef<HTMLElement>(null);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

    useGSAP(() => {
        if (!containerRef.current) return;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const isLast = i === servicesData.length - 1;
            const innerCard = card.querySelector('.card-inner');
            
            // As the NEXT card scrolls up, shrink the CURRENT card
            if (!isLast) {
                const nextCard = cardsRef.current[i + 1];
                if (nextCard && innerCard) {
                    gsap.fromTo(
                        innerCard,
                        { scale: 1, filter: 'blur(0px)' },
                        {
                            scale: 0.85,
                            filter: 'blur(4px)',
                            ease: "none",
                            scrollTrigger: {
                                trigger: nextCard,
                                start: "top bottom", 
                                end: "top top", // It finishes scaling right when the next card sticks to the top
                                scrub: true,
                            },
                        }
                    );
                }
            }
        });
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="relative w-full py-24 px-4 md:px-12" style={{ backgroundColor: "#0a0a0a" }}>
            
            {/* GLOBAL STATIC TITLE - STAYS PERFECTLY STILL */}
            <div className="sticky top-24 z-50 pointer-events-none h-0 w-full w-full">
                <div className="pl-8 md:pl-16">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold italic tracking-tight" style={{ color: '#FDB717', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                        Nos Services
                    </h1>
                </div>
            </div>

            <div className="flex flex-col">
                {servicesData.map((service, i) => (
                    <React.Fragment key={service.id}>
                        {/* Native sticky positioning ensures ZERO jitter during scroll */}
                        <div
                            ref={(el) => { cardsRef.current[i] = el; }}
                            className="sticky top-12 h-[calc(100vh-6rem)] w-full border-t border-white/10 flex items-center justify-center will-change-transform"
                        >
                        {/* The actual card that shrinks backwards */}
                        <div 
                            className="card-inner w-full h-full flex flex-col md:flex-row items-center overflow-hidden shadow-2xl origin-top"
                            style={{ backgroundColor: "#0a0a0a" }}
                        >
                            {/* LEFT SIDE: CONTENT */}
                            <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 space-y-6 relative">

                                <div className="space-y-4 relative z-10">
                                    <span className="text-white/40 font-mono text-sm tracking-wider">
                                        0{i + 1} // {service.tagline}
                                    </span>
                                    <h2 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight">
                                        {service.title}
                                    </h2>
                                    <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed max-w-md">
                                        {service.description}
                                    </p>
                                    <div className="pt-6">
                                        <div 
                                            className="h-1 w-20 rounded-full" 
                                            style={{ backgroundColor: service.color }} 
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE: IMAGE */}
                            <div className="w-full md:w-1/2 h-1/2 md:h-full p-4 md:p-8 relative z-10">
                                <div className="w-full h-full overflow-hidden shadow-xl relative">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover"
                                        alt={service.title}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Wait 150vh before the second card if it's the first card, else normal gap */}
                    {i === 0 ? <div className="h-[150vh] w-full" /> : i !== servicesData.length - 1 ? <div className="h-12 w-full" /> : null}
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}
