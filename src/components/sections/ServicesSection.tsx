import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import imgBTP from '../../assets/img/hero.jpg';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        id: 1,
        title: "Bâtiment et Travaux Publics",
        description: "Travaux de construction et rénovation, promotion immobilière, réseaux routiers.",
        image: imgBTP,
        color: "#FF5722", // Orange
    },
    {
        id: 2,
        title: "Activités Commerciales",
        description: "Négoce international, import-export, représentations exclusives, commerce de gros.",
        image: imgBTP,
        color: "#2196F3", // Bleu
    },
    {
        id: 3,
        title: "Activités Pétrolières",
        description: "Transport, Stockage, Commerce de gros et de détail de carburants et lubrifiants.",
        image: imgBTP,
        color: "#4CAF50", // Vert
    }
];

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const sectionRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        if (!sectionRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
                once: true
            }
        });

        // Subtitle fade in
        tl.fromTo(".subtitle-reveal",
            { opacity: 0, y: 20 },
            { opacity: 0.7, y: 0, duration: 0.8, ease: "power3.out" }
        );

        // Title lines reveal (Awwwards style)
        tl.fromTo(".title-line",
            { y: "110%", rotate: 2, opacity: 0 },
            { y: "0%", rotate: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out" },
            "-=0.6"
        );

        // List items stagger
        tl.fromTo(".list-item",
            { opacity: 0, x: -40 },
            { opacity: 1, x: 0, duration: 0.8, stagger: 0.1, ease: "power3.out" },
            "-=0.8"
        );

        // Right panel clip-path reveal
        tl.fromTo(".right-panel",
            { clipPath: "inset(100% 0% 0% 0%)", scale: 1.05 },
            { clipPath: "inset(0% 0% 0% 0%)", scale: 1, duration: 1.5, ease: "power4.inOut" },
            "-=1.2"
        );

    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} className="w-full py-12 px-4 md:px-8 bg-sibiri-blue">
            <div className="w-full bg-sibiri-blue text-white p-8 md:p-16 flex flex-col gap-12 lg:gap-16">

                {/* Bottom: Split Layout */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">

                    {/* Left Column: List of items */}
                    
                    <div className="lg:w-1/2 flex flex-col">
                        <div className="flex flex-col">
                            <p className="subtitle-reveal text-xs md:text-sm tracking-widest uppercase mb-6 flex items-center gap-2 font-sans opacity-70">
                                Nos Services
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] font-sans">
                                <div className="overflow-hidden pb-2"><span className="inline-block title-line origin-left">Notre expertise pour</span></div>
                                <div className="overflow-hidden pb-2"><span className="inline-block title-line origin-left"><span className="text-sibiri-gold italic font-serif">bâtir l'avenir</span> de l'Afrique.</span></div>
                            </h2>
                        </div>
                    <div className="flex flex-col border-t border-white/20">
                        {servicesData.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={service.id}
                                    className="list-item group border-b border-white/20 py-8 lg:py-10 px-4 cursor-pointer relative overflow-hidden"
                                    onMouseEnter={() => setActiveIndex(index)}
                                >
                                    {/* Hover background slide */}
                                    <div
                                        className="absolute inset-0 transition-transform duration-500 origin-left"
                                        style={{
                                            backgroundColor: 'rgba(255,255,255,0.05)',
                                            transform: isActive ? 'scaleX(1)' : 'scaleX(0)'
                                        }}
                                    />
                                    <div className="flex items-center gap-4 relative z-10 pointer-events-none">
                                        <h3 className={`text-2xl md:text-3xl lg:text-4xl font-medium font-sans transition-colors duration-300 ${isActive ? 'text-sibiri-gold' : 'text-white group-hover:text-white/80'}`}>
                                            {service.title}
                                        </h3>
                                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-all duration-300 ${isActive ? 'translate-x-2 text-sibiri-gold' : 'text-white/30'}`}>
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    </div>

                    {/* Right Column: Subcontent Hover Panel */}
                    <div className="right-panel lg:w-1/2 relative min-h-[400px] md:min-h-[500px] lg:min-h-[600px] overflow-hidden">
                        {servicesData.map((service, index) => {
                            const isActive = activeIndex === index;
                            return (
                                <div
                                    key={service.id}
                                    className="absolute inset-0 flex flex-col transition-all duration-700 ease-in-out"
                                    style={{
                                        opacity: isActive ? 1 : 0,
                                        transform: isActive ? 'scale(1)' : 'scale(0.95)',
                                        pointerEvents: isActive ? 'auto' : 'none',
                                    }}
                                >
                                    {/* Card container */}
                                    <div className="w-full h-full relative overflow-hidden">
                                        <div
                                            className="absolute inset-0 transition-colors duration-700"
                                            style={{ backgroundColor: service.color }}
                                        ></div>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 transition-transform duration-1000 ease-out"
                                            style={{ transform: isActive ? 'scale(1.05)' : 'scale(1)' }}
                                        />
                                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                                            <p className="text-lg md:text-xl lg:text-2xl font-sans opacity-100 leading-relaxed text-white">
                                                {service.description}
                                            </p>
                                            <div className="mt-8">
                                                <button className="flex items-center gap-2 border border-white/40 px-6 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-colors cursor-pointer">
                                                    En savoir plus
                                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                        <polyline points="12 5 19 12 12 19"></polyline>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
}
