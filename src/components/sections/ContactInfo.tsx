import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StyledHeading from '../atoms/StyledHeading';

gsap.registerPlugin(ScrollTrigger);

const ContactInfo: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const textElements = gsap.utils.toArray('.contact-text') as HTMLElement[];
        
        gsap.fromTo(textElements, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 1, 
                stagger: 0.1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 75%",
                }
            }
        );
    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-white text-sibiri-blue py-24 px-6 lg:px-12 relative overflow-hidden">
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gray-50 -skew-x-12 translate-x-20 pointer-events-none"></div>

            <div className="max-w-[1800px] mx-auto relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
                
                <div className="flex flex-col gap-6 w-full md:w-1/2">
                    <StyledHeading 
                        title="Nous" 
                        titleColor='text-sibiri-blue'
                        textPosition='text-left'
                        highlightedText="contacter" 
                    />
                    <p className="contact-text font-sans text-2xl md:text-3xl font-light leading-tight">
                        Nous sommes à votre écoute pour toute collaboration ou demande d'information.
                    </p>
                </div>

                <div className="flex flex-col gap-10 w-full md:w-1/2 md:pl-16">
                    <div className="contact-text flex flex-col gap-2 group">
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-sibiri-gold transition-colors">Adresse</span>
                        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="font-sans text-2xl md:text-3xl lg:text-4xl hover:text-sibiri-gold transition-colors inline-block w-max relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-sibiri-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                            01 BP 5096<br/>Ouagadougou 01
                        </a>
                    </div>
                    
                    <div className="contact-text flex flex-col gap-2 group">
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-sibiri-gold transition-colors">Téléphone</span>
                        <a href="tel:+22625376944" className="font-sans text-2xl md:text-3xl lg:text-4xl hover:text-sibiri-gold transition-colors inline-block w-max relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-sibiri-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                            +226 25 37 69 44
                        </a>
                    </div>

                    <div className="contact-text flex flex-col gap-2 group">
                        <span className="text-sm font-bold uppercase tracking-widest text-gray-400 group-hover:text-sibiri-gold transition-colors">Email</span>
                        <a href="mailto:info@sibiri.group" className="font-sans text-2xl md:text-3xl lg:text-4xl hover:text-sibiri-gold transition-colors inline-block w-max relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-sibiri-gold after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                            info@sibiri.group
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ContactInfo;
