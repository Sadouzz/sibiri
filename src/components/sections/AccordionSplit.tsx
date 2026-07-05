"use client";

import React, { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

interface AccordionItem {
    id: string;
    label: string;
    title?: string;
    description?: string;
    content?: React.ReactNode;
    image?: string;
}

interface AccordionSplitProps {
    items?: AccordionItem[];
    backgroundColor?: string;
    containerBorderColor?: string;
    itemBorderColor?: string;
    labelColor?: string;
    titleColor?: string;
    descriptionColor?: string;
    defaultActive?: number | null;
    height?: string;
    borderRadius?: string;
}

const AccordionItemComponent: React.FC<{
    item: AccordionItem;
    isActive: boolean;
    onClick: () => void;
    itemBorderColor: string;
    labelColor: string;
    titleColor: string;
    descriptionColor: string;
}> = ({ item, isActive, onClick, itemBorderColor, labelColor, descriptionColor }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (isActive && contentRef.current) {
            const elementsToSplit = contentRef.current.querySelectorAll('p, li');
            
            if (elementsToSplit.length > 0) {
                const split = new SplitText(elementsToSplit, {
                    type: 'words'
                });

                gsap.fromTo(
                    split.words,
                    { opacity: 0, filter: 'blur(8px)', y: 15 },
                    { 
                        opacity: 1, 
                        filter: 'blur(0px)', 
                        y: 0, 
                        duration: 0.35, 
                        stagger: 0.015, 
                        ease: "power2.out"
                    }
                );

                return () => split.revert();
            } else {
                // Fallback si pas de texte paragraph ou li
                gsap.fromTo(
                    contentRef.current,
                    { opacity: 0, filter: 'blur(8px)', y: 15 },
                    { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.35, ease: "power2.out" }
                );
            }
        }
    }, [isActive]);

    return (
        <div
            onClick={onClick}
            className={`relative group flex flex-col justify-end p-6 cursor-pointer overflow-hidden ${
                isActive ? "flex-[4]" : "flex-1 border-x first:border-l-0"
            }`}
            style={{
                borderColor: !isActive ? itemBorderColor : "transparent",
                backgroundImage: item.image
                    ? `linear-gradient(rgba(0,0,0,${isActive ? 0.3 : 0.15}), rgba(0,0,0,${isActive ? 0.72 : 0.45})), url(${item.image})`
                    : undefined,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                transition: "flex 0.4s cubic-bezier(0.4,0,0.2,1), border-color 0.4s ease",
            }}
        >
            {/* hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-200 pointer-events-none" />

            {/* label */}
            <h3
                className="text-base md:text-lg font-black writing-vertical-rl absolute top-6 left-1/2 -translate-x-1/2 z-10 tracking-wider uppercase transition-all duration-400"
                style={{ color: labelColor }}
            >
                {item.label}
            </h3>

            {/* content */}
            {isActive && (
                <div ref={contentRef} className="relative z-10">
                    {item.title && (
                        <h4 className="font-serif italic text-3xl md:text-5xl font-medium mb-6 tracking-tight text-sibiri-gold drop-shadow-md">
                            {item.title}
                        </h4>
                    )}
                    {item.description && (
                        <p className="text-sm leading-relaxed" style={{ color: descriptionColor }}>
                            {item.description}
                        </p>
                    )}
                    {item.content && (
                        <div className="mt-4 font-sans text-lg md:text-xl font-light text-gray-100 leading-relaxed drop-shadow-sm">
                            {item.content}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const AccordionSplit: React.FC<AccordionSplitProps> = ({
    items = [
        {
            id: "1",
            label: "Vision",
            title: "Notre Vision",
            content: (
                <div className="flex flex-col gap-5 max-h-[450px] overflow-y-auto pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <p>Devenir un Groupe respecté et de référence en Afrique. Cela entend :</p>
                    <ul className="list-disc pl-6 space-y-3 marker:text-sibiri-gold">
                        <li>Créer une identité en devenant un label de service et de produits de <strong className="text-white font-medium">qualité</strong> ;</li>
                        <li>Devenir un acteur du <strong className="text-white font-medium">développement économique</strong> ;</li>
                        <li>Bâtir une réputation d'<strong className="text-white font-medium">excellence</strong> ;</li>
                        <li>Apporter des solutions <strong className="text-white font-medium">innovantes</strong> ;</li>
                        <li>Créer une culture d'entreprise soutenue par des valeurs et principes propres ;</li>
                        <li>Respecter l'<strong className="text-white font-medium">environnement</strong> ;</li>
                        <li>Investir dans les <strong className="text-white font-medium">Ressources Humaines</strong> ;</li>
                        <li>Participer au renforcement de la citoyenneté.</li>
                    </ul>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1774637777045-e7390fc657e8?q=80&w=1400&auto=format&fit=crop",
        },
        {
            id: "2",
            label: "Missions",
            title: "Nos Missions",
            content: (
                <div className="flex flex-col gap-5 max-h-[450px] overflow-y-auto pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <p>Organiser, appuyer et suivre les filiales du Groupe. Renforcer les capacités de mesure de la performance. Les principales missions peuvent se présenter comme suit:</p>
                    <ul className="list-disc pl-6 space-y-3 marker:text-sibiri-gold">
                        <li>identifier, proposer et mettre en œuvre des <strong className="text-white font-medium">orientations stratégiques</strong> susceptibles d'influencer durablement le groupe ou une filiale ;</li>
                        <li>prospecter, et identifier des <strong className="text-white font-medium">axes de croissances</strong> pour le groupe ;</li>
                        <li>mettre en place un mécanisme d'<strong className="text-white font-medium">appui opérationnel</strong> aux filiales en création, en réorganisation ou en difficulté ;</li>
                        <li>mettre en place un dispositif de <strong className="text-white font-medium">suivi et contrôle</strong> de l'ensemble des filiales ;</li>
                        <li>renforcer l'<strong className="text-white font-medium">identité du groupe</strong> et cultiver un sentiment d'appartenance.</li>
                    </ul>
                    <p className="border-l-2 border-sibiri-gold pl-4 mt-2 italic text-gray-300">
                        D'une manière générale, <strong className="text-sibiri-gold font-serif font-normal">SIBIRI Holding SA</strong> a pour mission de porter les aspirations du Consul Lamine OUEDRAOGO dans le cadre de son engagement à mettre en œuvre un groupe de sociétés de service Burkinabé, respecté et de dimension internationale, orienté vers l'excellence au service des économies africaines.
                    </p>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1775348437069-0f2d58a180ee?w=1400&auto=format&fit=crop&q=60",
        },
        {
            id: "3",
            label: "Objectifs",
            title: "Nos Objectifs",
            content: (
                <div className="flex flex-col gap-5 max-h-[450px] overflow-y-auto pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <p><strong className="text-sibiri-gold font-serif italic text-2xl">SIBIRI Holding SA</strong> a pour principal objectif de mettre en place un système efficace de gestion uniforme et performant qui s'appuiera sur une organisation adéquate et pilotée par des compétences locales à haut potentiel, appuyées par des personnes ressources compétentes et expérimentées.</p>
                    <p className="font-medium text-white uppercase tracking-wider text-sm mt-2">Spécifiquement :</p>
                    <ul className="list-disc pl-6 space-y-3 marker:text-sibiri-gold">
                        <li>Bâtir des entreprises de confiance dans tous les secteurs d'activités où que nous les exercions à travers l'Afrique ;</li>
                        <li>Offrir des services de qualité, modernes et adaptés ;</li>
                        <li>Créer des entreprises à la fois axées sur la croissance, dynamique et attrayantes ;</li>
                        <li>Offrir des avantages durables ;</li>
                        <li>Assurer et veiller au respect de l'environnement ;</li>
                        <li>Fidéliser nos clients par la qualité de nos services.</li>
                    </ul>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1775214593108-5d577e88d219?w=1400&auto=format&fit=crop&q=60",
        },
        {
            id: "4",
            label: "Valeurs",
            title: "Nos Valeurs",
            content: (
                <div className="flex flex-col gap-5 max-h-[450px] overflow-y-auto pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <p>Nos valeurs fondamentales sont l'<strong className="text-white font-medium">honnêteté</strong>, l'<strong className="text-white font-medium">intégrité</strong>, le <strong className="text-white font-medium">respect</strong> d'autrui, l'<strong className="text-white font-medium">engagement volontaire</strong> et le respect de la propriété publique et privée. Ces valeurs sous-tendent toutes nos activités et constituent les fondations sur lesquelles repose notre Groupe.</p>
                    <p>Nous respectons ces valeurs dans toutes nos actions, notre réussite et la croissance de notre groupe en dépendant entièrement ainsi que la réalisation de notre vision, qui est de devenir un Groupe respecté et de référence en Afrique.</p>
                    
                    <div className="mt-4 p-5 bg-white/5 border border-white/10 rounded-sm">
                        <p className="font-medium text-sibiri-gold uppercase tracking-wider text-sm mb-4">Les Filiales et Membres du Groupe :</p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 list-none pl-0">
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sibiri-gold rounded-full"></span> Etalon Energy</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sibiri-gold rounded-full"></span> Val Construction Cote d'Ivoire</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sibiri-gold rounded-full"></span> Val Construction Burkina Faso</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sibiri-gold rounded-full"></span> SOMEHAL</li>
                            <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-sibiri-gold rounded-full"></span> SDHL</li>
                        </ul>
                    </div>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1774270905958-86e7eaeae23d?w=1400&auto=format&fit=crop&q=60",
        },
        {
            id: "5",
            label: "Fonctionnement",
            title: "Notre Fonctionnement",
            content: (
                <div className="flex flex-col gap-5 max-h-[450px] overflow-y-auto pr-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    <p>SIBIRI Holding SA est dotée d'une structure organisationnelle et Fonctionnelle comprenant :</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-disc pl-6 marker:text-sibiri-gold">
                        <li>Une Assemblée Générale des Actionnaires</li>
                        <li>Un Comité de Direction</li>
                        <li>Un Administrateur Général</li>
                        <li>Une Direction Générale Adjointe</li>
                        <li>Un département Administratif, comptable et Financier</li>
                        <li>Un département Juridique et du Personnel</li>
                        <li>Un Département Marchés public</li>
                        <li>Un département Marketing, Logistique et Equipement</li>
                        <li>Un Contrôleur de Gestion</li>
                        <li>Une Assistante de Direction</li>
                        <li>Un secrétariat, Accueil et Renseignement</li>
                    </ul>
                </div>
            ),
            image: "https://images.unsplash.com/photo-1774637777045-e7390fc657e8?q=80&w=1400&auto=format&fit=crop",
        },
    ],
    backgroundColor = "#1B273D",
    containerBorderColor = "#e4e4e7",
    itemBorderColor = "#e4e4e7",
    labelColor = "#ffffff",
    titleColor = "#ffffff",
    descriptionColor = "#d4d4d8",
    defaultActive = 0,
    height = "600px",
}) => {
    const [active, setActive] = useState<number | null>(defaultActive);

    return (
        <div
            className="flex w-full overflow-hidden"
            style={{
                height,
                border: `1px solid ${containerBorderColor}`,
                backgroundColor,
            }}
        >
            {items.map((item, i) => (
                <AccordionItemComponent
                    key={item.id}
                    item={item}
                    isActive={active === i}
                    onClick={() => setActive(active === i ? null : i)}
                    itemBorderColor={itemBorderColor}
                    labelColor={labelColor}
                    titleColor={titleColor}
                    descriptionColor={descriptionColor}
                />
            ))}
        </div>
    );
};

export default AccordionSplit;
