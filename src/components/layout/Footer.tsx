import { useEffect, useRef, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const footerRef = useRef<HTMLElement>(null);
    const [footerHeight, setFooterHeight] = useState(0);

    useEffect(() => {
        const checkHeight = () => {
            if (footerRef.current) {
                setFooterHeight(footerRef.current.offsetHeight);
            }
        };
        
        checkHeight();
        
        // Allow a small delay for fonts/images to load
        const timer = setTimeout(checkHeight, 100);
        window.addEventListener('resize', checkHeight);
        
        // Setup MutationObserver just in case content changes
        const observer = new MutationObserver(checkHeight);
        if (footerRef.current) {
            observer.observe(footerRef.current, { childList: true, subtree: true });
        }
        
        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkHeight);
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Spacer to push content up and reveal footer (only on large screens) */}
            <div style={{ height: footerHeight }} className="hidden lg:block w-full relative -z-20 pointer-events-none"></div>
            
            <footer 
                ref={footerRef}
                className="relative lg:fixed bottom-0 left-0 w-full bg-white z-0 lg:-z-10"
            >
                <div className="bg-sibiri-blue text-white p-8 md:p-12 lg:p-12 flex flex-col justify-between relative overflow-hidden">
                    
                    {/* TOP ROW */}
                    <div className="flex flex-col lg:flex-row justify-between gap-16 w-full flex-1">
                        
                        {/* Left: Branding */}
                        <div className="flex flex-col lg:w-[55%]">
                            <h2 className="text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tighter mb-4 flex items-start leading-none font-sans text-white">
                                Sibiri <sup className="text-2xl md:text-4xl mt-2 md:mt-4 ml-2 font-light text-sibiri-gold">®</sup>
                            </h2>

                            <div className="mt-auto pt-8 lg:pt-12">
                                <p className="max-w-md text-white/80 text-sm md:text-base font-sans mb-8 leading-relaxed">
                                    SIBIRI Holding SA est une société d’investissements, de gestion et de contrôle d’actifs mobiliers et immobiliers, née d’une stratégie d’unité d’actions impulsée par Monsieur Mahamadou Lamine Ouedraogo.
                                </p>
                                <a href="mailto:info@sibiri.group" className="text-2xl md:text-4xl lg:text-5xl font-medium underline decoration-white/30 underline-offset-[12px] hover:decoration-sibiri-gold hover:text-sibiri-gold transition-colors w-max font-sans pb-2">
                                    info@sibiri.group
                                </a>
                            </div>
                        </div>

                        {/* Right: Links & Meta */}
                        <div className="flex flex-col lg:w-[45%] justify-between">
                            
                            {/* Top right corner (Arrow and Date) */}
                            <div className="hidden lg:flex justify-end items-start mb-8 gap-8 relative">
                                <div className="flex items-center gap-6 mt-4">
                                    <span className="text-white/80 font-sans text-xl">© 20-26</span>
                                    <div className="w-20 h-[3px] bg-sibiri-gold"></div>
                                </div>
                                <button 
                                    onClick={() => {
                                        // Scroll to top of main container if possible, else window
                                        const main = document.querySelector('main');
                                        if (main) {
                                            main.scrollTo({ top: 0, behavior: 'smooth' });
                                        } else {
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }
                                    }}
                                    className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-sibiri-gold hover:border-sibiri-gold hover:text-sibiri-blue transition-colors cursor-pointer"
                                >
                                    <ArrowUp size={24} strokeWidth={1} />
                                </button>
                            </div>

                            {/* Navigation Columns */}
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-8 mt-12 lg:mt-auto">
                                {/* NAVIGATION */}
                                <div className="flex flex-col gap-5">
                                    <h4 className="text-[11px] tracking-widest uppercase text-white/50 font-sans mb-2">Navigation</h4>
                                    <Link to="/" onClick={() => window.scrollTo(0,0)} className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Accueil</Link>
                                    <Link to="/about" onClick={() => window.scrollTo(0,0)} className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Le Groupe</Link>
                                    <Link to="/activites" onClick={() => window.scrollTo(0,0)} className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Nos Activités</Link>
                                    <Link to="/contact" onClick={() => window.scrollTo(0,0)} className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Contact</Link>
                                </div>
                                
                                {/* SERVICES */}
                                <div className="flex flex-col gap-5">
                                    <h4 className="text-[11px] tracking-widest uppercase text-white/50 font-sans mb-2">Activités</h4>
                                    <Link to="/activites" onClick={() => window.scrollTo(0,0)} className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">BTP et Génie Civil</Link>
                                    <Link to="/activites" onClick={() => window.scrollTo(0,0)} className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Activités Commerciales</Link>
                                    <Link to="/activites" onClick={() => window.scrollTo(0,0)} className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Activités Pétrolières</Link>
                                </div>

                                {/* SOCIAL MEDIA */}
                                <div className="flex flex-col gap-5 col-span-2 md:col-span-1">
                                    <h4 className="text-[11px] tracking-widest uppercase text-white/50 font-sans mb-2">Social Media</h4>
                                    <div className="flex gap-3">
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-sibiri-gold hover:border-sibiri-gold hover:text-sibiri-blue transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-sibiri-gold hover:border-sibiri-gold hover:text-sibiri-blue transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-sibiri-gold hover:border-sibiri-gold hover:text-sibiri-blue transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                                        </a>
                                        <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-sibiri-gold hover:border-sibiri-gold hover:text-sibiri-blue transition-colors">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* BOTTOM INFO */}
                    <div className="mt-12 lg:mt-16 flex flex-col md:flex-row justify-between gap-8 md:gap-4 pb-8">
                        <div className="flex flex-col gap-3">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">Phone Number</span>
                            <span className="text-xs md:text-sm font-sans uppercase font-medium tracking-wider">+226 25 37 69 44</span>
                        </div>
                        <div className="flex flex-col gap-3 md:items-center">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">Siège Social</span>
                            <span className="text-xs md:text-sm font-sans uppercase font-medium tracking-wider text-left md:text-center">01 BP 5096 Ouagadougou 01<br/>Burkina Faso</span>
                        </div>
                        <div className="flex flex-col gap-3 md:items-end">
                            <span className="text-[10px] tracking-[0.2em] uppercase text-white/50">Lundi - Vendredi</span>
                            <span className="text-xs md:text-sm font-sans uppercase font-medium tracking-wider text-left md:text-right">09:00 AM - 17:00 PM</span>
                        </div>
                    </div>

                    {/* VERY BOTTOM */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10px] uppercase tracking-widest text-white/50 font-sans pt-8 border-t border-white/10 gap-6">
                        <p>© Copyright 2017 Sibiri Group | Tous droits réservés</p>
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mt-4 sm:mt-0 items-center">
                            <Link to="/terms" className="hover:text-sibiri-gold transition-colors">Termes & Conditions</Link>
                            <Link to="/privacy" className="hover:text-sibiri-gold transition-colors">Confidentialité</Link>
                            <Link to="/cookies" className="hover:text-sibiri-gold transition-colors">Cookies</Link>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    );
}