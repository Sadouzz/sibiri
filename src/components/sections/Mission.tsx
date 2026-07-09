import React from 'react';
import HorizontalCurtainReveal from '../utils/HorizontalCurtainReveal.tsx';
import pdgImg from '../../assets/img/pdg.webp';

const Mission: React.FC = () => {
    return (
        <section className="w-full py-24 px-6 lg:px-12 bg-white text-sibiri-blue">
            <div className="max-w-[1800px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start">
                {/* Title */}
                <div className="col-span-1">
                    <HorizontalCurtainReveal curtainColor='#fff'>
                        <h2 className="font-serif italic text-5xl md:text-6xl lg:text-7xl tracking-tight">
                            Le Groupe
                        </h2>
                    </HorizontalCurtainReveal>
                    <div className="mt-8 md:mt-12">
                        <img src={pdgImg} alt="PDG Sibiri Group" className="w-full h-auto object-cover" />
                    </div>
                </div>

                {/* Sub-label */}
                <div className="col-span-1 md:pt-4">
                    
                    <p className="font-sans text-xs md:text-sm font-medium leading-tight">
                        À Propos de<br />
                        Sibiri Group
                    </p>
                </div>

                {/* Main Text */}
                <div className="col-span-1 md:col-span-2">
                    <HorizontalCurtainReveal curtainColor='#fff'>
                        <p className="font-sans text-2xl md:text-3xl lg:text-[40px] leading-[1.25] md:leading-[1.25] tracking-tight font-medium">
                            <span className="font-serif italic text-sibiri-gold">Sibiri Group</span> est une société d’investissements, de gestion, et de contrôle d’actifs mobiliers et immobiliers, née d’une stratégie d’unité d’actions impulsée par Monsieur Mahamadou Lamine OUEDRAOGO. Holding détenant plusieurs filiales au Burkina Faso et dans la sous-région ouest-africaine, Sibiri Group est présent dans les secteurs du BTP et génie civil, des hydrocarbures, du négoce international.
                        </p>
                    </HorizontalCurtainReveal>
                </div>
            </div>
        </section>
    );
};

export default Mission;
