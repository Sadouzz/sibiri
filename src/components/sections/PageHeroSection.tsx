import type { ReactNode } from "react";
import SectionLabel from "../atoms/SectionLabel";

// Définition des types pour les props
interface PageHeroSectionProps {
    contentMiniBar: ReactNode;
    firstTitle: ReactNode;
    secondTitle: ReactNode;
}

/**
 * PageHeroSection
 * Section héro partagée par toutes les pages intérieures.
 * Remplace les 4 copies locales identiques dans :
 *   About.tsx / Projects.tsx / Services.tsx / Contact.tsx
 *
 * GSAP mount animation runs at page level via PageTransition — pas besoin
 * d'un effet local ici. Le contenu se révèle avec la page entière.
 */
export default function PageHeroSection({
    contentMiniBar,
    firstTitle,
    secondTitle,
}: PageHeroSectionProps) {
    return (
        <section className="bg-white pt-32! min-h-[50vh]">
            <div className="mx-12!">
                {/* Équivalent simplifié de container-fluid */}
                <div className="w-full px-4 sm:px-6 lg:px-8">

                    {/* Label section */}
                    {/* <div className="section-label mt-4 mb-4!">
                        <span>{contentMiniBar}</span>
                    </div> */}
                    <SectionLabel
                        text={contentMiniBar}
                        lineColor="bg-sibiri-gold"
                        textColor="text-sibiri-blue"
                        className=""
                    />

                    {/* Titre principal */}
                    <h1 className="font-extrabold text-5xl text-gold-dark md:text-6xl! mb-15! max-w-[700px]">
                        {firstTitle}
                    </h1>

                    {/* Sous-titre */}
                    <h2 className="text-2xl md:text-3xl text-black max-w-[700px]">
                        {secondTitle}
                    </h2>

                </div>
            </div>
        </section>
    );
}