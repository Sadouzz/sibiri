import { ArrowUp } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full p-2 md:p-4 bg-white">
            <div className="bg-sibiri-blue text-white rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col justify-between min-h-[85vh] relative overflow-hidden">
                
                {/* TOP ROW */}
                <div className="flex flex-col lg:flex-row justify-between gap-16 w-full flex-1">
                    
                    {/* Left: Branding */}
                    <div className="flex flex-col lg:w-[55%]">
                        <h2 className="text-7xl md:text-9xl lg:text-[150px] font-medium tracking-tighter mb-8 flex items-start leading-none font-sans text-white">
                            Sibiri <sup className="text-3xl md:text-5xl mt-4 md:mt-8 ml-2 font-light text-sibiri-gold">®</sup>
                        </h2>

                        <div className="mt-auto pt-12 lg:pt-32">
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
                        <div className="hidden lg:flex justify-end items-start mb-24 gap-12 relative">
                            <div className="flex items-center gap-6 mt-4">
                                <span className="text-white/80 font-sans text-xl">© 20-26</span>
                                <div className="w-20 h-[3px] bg-sibiri-gold"></div>
                            </div>
                            <button 
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="w-14 h-14 rounded-full border border-white/30 flex items-center justify-center hover:bg-sibiri-gold hover:border-sibiri-gold hover:text-sibiri-blue transition-colors cursor-pointer"
                            >
                                <ArrowUp size={24} strokeWidth={1} />
                            </button>
                        </div>

                        {/* Navigation Columns */}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-8 mt-16 lg:mt-auto">
                            {/* NAVIGATION */}
                            <div className="flex flex-col gap-5">
                                <h4 className="text-[11px] tracking-widest uppercase text-white/50 font-sans mb-2">Navigation</h4>
                                <a href="#" className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">À Propos</a>
                                <a href="#" className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Services</a>
                                <a href="#" className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Projets</a>
                                <a href="#" className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Partenaires</a>
                            </div>
                            
                            {/* SERVICES */}
                            <div className="flex flex-col gap-5">
                                <h4 className="text-[11px] tracking-widest uppercase text-white/50 font-sans mb-2">Services</h4>
                                <a href="#" className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">BTP</a>
                                <a href="#" className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Activités Commerciales</a>
                                <a href="#" className="text-sm font-sans font-medium opacity-90 hover:opacity-100 hover:text-sibiri-gold transition-colors">Activités Pétrolières</a>
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
                <div className="mt-24 lg:mt-32 flex flex-col md:flex-row justify-between gap-12 md:gap-4 pb-12">
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
                    <p>© Copyright 2017 Sibiri Group | Tous droits réservés | ADAGE</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-sibiri-gold transition-colors">Termes & Conditions</a>
                        <a href="#" className="hover:text-sibiri-gold transition-colors">Privacy Policy</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}