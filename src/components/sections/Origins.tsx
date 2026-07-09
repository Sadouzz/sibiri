import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HorizontalCurtainReveal from '../utils/HorizontalCurtainReveal';
import useScrollReveal from '../../hooks/useScrollReveal';
import elHadjImg from '../../assets/img/ElHadjOusmaneSibiriOuedraogo.webp';
import pdg2Img from '../../assets/img/pdg2.webp';
import p3Img from '../../assets/img/p3.webp';

gsap.registerPlugin(ScrollTrigger);

const Origins: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useScrollReveal(true);

    useGSAP(() => {
        
        // Parallax effect for images
        const images = gsap.utils.toArray('.parallax-image') as HTMLElement[];
        images.forEach((img) => {
            gsap.fromTo(img, 
                { yPercent: -20 },
                {
                    yPercent: 20,
                    ease: "none",
                    scrollTrigger: {
                        trigger: img.parentElement,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                }
            );
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} className="w-full bg-[#09090b] text-white py-24 lg:py-32 overflow-hidden">
            <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                
                {/* Header */}
                <div className="mb-24 lg:mb-40">
                    <HorizontalCurtainReveal curtainColor="#09090b">
                        <h2 className="font-serif italic text-5xl md:text-7xl lg:text-8xl tracking-tight text-sibiri-gold">
                            Les Origines.
                        </h2>
                    </HorizontalCurtainReveal>
                </div>

                {/* Story Block 1 */}
                <div className="story-section flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32 lg:mb-48 items-center">
                    <div className="w-full lg:w-1/2 overflow-hidden h-[400px] lg:h-[600px] relative">
                        <img 
                            src={pdg2Img} 
                            alt="Origines" 
                            className="parallax-image absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <p className="split font-sans text-xl md:text-2xl lg:text-3xl leading-[1.4] font-light">
                            <strong className="font-serif italic text-sibiri-gold font-normal">SIBIRI Holding SA</strong> est une société Anonyme de droit Burkinabé au capital de cent soixante-quinze millions cinq cent mille (175 500 000) FCFA avec Administrateur Général en la personne de son Fondateur, Monsieur <span className="text-white font-medium">Mahamadou Lamine OUEDRAOGO</span>, actionnaire principal, consul Honoraires du Burkina en République du Benin et Officier de l’Ordre National du Burkina Faso.
                        </p>
                        <p className="split font-sans text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                            Elle est une société d’investissements, de gestion et de contrôle d’actifs mobiliers et immobiliers.
                        </p>
                    </div>
                </div>

            {/* Story Block 2 */}
                <div className="story-section flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 mb-32 lg:mb-48 items-center">
                    <div className="w-full lg:w-1/2 flex flex-col gap-8">
                        <p className="split font-sans text-xl md:text-2xl lg:text-3xl leading-[1.4] font-light">
                            <strong className="font-serif italic text-sibiri-gold font-normal">SIBIRI Group</strong> est né d’une stratégie d’unité d’actions impulsée par Monsieur OUEDRAOGO Mahamadou Lamine, bien connu du milieu des Affaires au Burkina Faso et dans la sous-région, lui-même fils du premier Président de la Chambre de Commerce et d’Industrie de la Haute Volta (Feu El Hadj Ousmane Sibiri OUEDRAOGO), d’où le nom de la Holding, et afin de porter et défendre l’ensemble des intérêts du Groupe SIBIRI.
                        </p>
                        <p className="split font-sans text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                            Propriétaire de plusieurs filiales présentes au Burkina Faso et dans la sous-région, SIBIRI Holding est présente dans les secteurs du BTP et Génie-Civil, les Hydrocarbures, de négoce international, et du commerce général (représentant exclusif de la marque ORO au Bénin et au TOGO).
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 overflow-hidden h-[400px] lg:h-[600px] relative">
                        <img 
                            src={p3Img} 
                            alt="Stratégie" 
                            className="parallax-image absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
                        />
                        <div className="absolute inset-0 bg-black/20"></div>
                    </div>
                </div>

                {/* Block 3: Qui est El Hadj */}
                <div className="story-section flex flex-col md:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto py-12 lg:py-24 border-t border-white/10 relative items-start">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#09090b] px-8 text-sibiri-gold font-serif italic text-2xl">
                        Héritage
                    </div>
                    
                    {/* Image side */}
                    <div className="w-full md:w-1/3 flex-shrink-0">
                        <img 
                            src={elHadjImg} 
                            alt="El Hadj Ousmane Sibiri OUEDRAOGO" 
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Text side */}
                    <div className="w-full md:w-2/3 flex flex-col gap-8 text-left">
                        <h3 className="font-serif italic text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-2">
                            Qui est <span className="text-sibiri-gold">El Hadj Ousmane Sibiri OUEDRAOGO</span> ?
                        </h3>
                        <p className="split font-sans text-xl md:text-2xl leading-[1.6] font-light text-gray-300">
                            <strong className="text-white font-medium">1906-1966</strong>, grand opérateur économique de son temps, co-président de la chambre de Commerce, d’Agriculture et d’Industrie de la Haute-Volta, El hadj Ousmane Sibiri Ouédraogo, dont une rue porte le nom en plein centre-ville à Ouagadougou, s’est illustré dans les domaines du commerce et de la religion.
                        </p>
                        <p className="split font-sans text-lg md:text-xl leading-relaxed text-gray-400 font-light">
                            Ainsi, on retient qu’il s’est hissé au rang de principal exportateur de la Haute Volta qui expédiait directement les produits vers l’Europe en général et la France en particulier. Il a contribué au développement du commerce de la cola au Burkina Faso. Avec d’autres opérateurs économiques, il a créé la première chambre consulaire au sein de la Chambre de commerce dont ils seront les membres.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Origins;
