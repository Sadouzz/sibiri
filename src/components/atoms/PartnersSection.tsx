import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Link } from 'react-router-dom';
import StyledHeading from './StyledHeading';


const partners = [
    { 
        name: "VAL-Constructions S.A.", 
        image: "https://sibiri.group/wp-content/uploads/VAL-Constructions-S.A.png",
        link: "https://valconstruction.ci/"
    },
    { 
        name: "SOMEHAL", 
        image: "https://sibiri.group/wp-content/uploads/SOMEHAL1.png",
        link: "https://somehal.bj"
    },
    { 
        name: "SDHL", 
        image: "https://sibiri.group/wp-content/uploads/SDHL-bottom-300x2111.png",
        link: "https://sdhl.bf"
    },
    { 
        name: "EtalonEnergy", 
        image: "https://sibiri.group/wp-content/uploads/EtalonEnergy1.png",
        link: "https://etalonenergy.bf"
    },
    { 
        name: "Medical", 
        image: "https://sibiri.group/wp-content/uploads/medical.png"
    },
];

export default function PartnersSection() {
    const trackRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<gsap.core.Tween | null>(null);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        // Initialize animation after a short delay to allow images to layout
        const startAnimation = () => {
            if (animRef.current) animRef.current.kill();
            const totalWidth = track.scrollWidth / 2;
            animRef.current = gsap.to(track, {
                x: -totalWidth,
                duration: 25,
                ease: 'none',
                repeat: -1,
            });
        };

        // Run once immediately, then again slightly later if images take time to load
        startAnimation();
        setTimeout(startAnimation, 500);

        const handleMouseEnter = () => animRef.current?.pause();
        const handleMouseLeave = () => animRef.current?.play();

        track.addEventListener('mouseenter', handleMouseEnter);
        track.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            animRef.current?.kill();
            track.removeEventListener('mouseenter', handleMouseEnter);
            track.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="bg-white py-48! text-sibiri-blue border-t border-b border-gray-200 overflow-hidden relative">
            <StyledHeading
                title="Nos" 
                highlightedText="Sociétés" 
            />
            <div className='text-center flex justify-center my-8!'>
                <p className="text-sibiri-blue/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed text-center">
                    Nous sommes fiers de collaborer avec des entreprises de premier plan pour délivrer des projets d'exception.
                </p>
            </div>

            <div className="relative w-full overflow-hidden mb-16 mt-8">
                {/* Gradient Masks */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

                <div 
                    ref={trackRef} 
                    className="flex items-center gap-16! md:gap-32! w-max px-8!"
                >
                    {duplicatedPartners.map((partner, index) => {
                        const imgContent = (
                            <img 
                                src={partner.image} 
                                alt={partner.name}
                                className="h-16 md:h-24 w-auto object-contain opacity-70 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0"
                            />
                        );

                        return (
                            <div 
                                key={index} 
                                className="flex items-center justify-center shrink-0 cursor-pointer"
                            >
                                {partner.link ? (
                                    <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                        {imgContent}
                                    </a>
                                ) : (
                                    imgContent
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="text-center my-12!">
                <Link to="/contact" className="inline-flex items-center px-8 py-4 border border-sibiri-blue text-sibiri-blue hover:bg-sibiri-blue hover:text-white font-bold tracking-widest text-xs uppercase transition-colors duration-300">
                    <span>Devenir partenaire</span>
                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
