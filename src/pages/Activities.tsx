import { useRef } from 'react';
import PageHeroSection from '../components/sections/PageHeroSection';
import ContactInfo from '../components/sections/ContactInfo';
import HorizontalCurtainReveal from '../components/utils/HorizontalCurtainReveal';
import useScrollReveal from '../hooks/useScrollReveal';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PartnersSection from '../components/atoms/PartnersSection';
import imgBTP from '../assets/img/btp.png';
import imgCommerce from '../assets/img/commerce.png';
import imgPetrole from '../assets/img/petrole.png';
import useDocumentTitle from '../hooks/useDocumentTitle';

gsap.registerPlugin(ScrollTrigger);

export default function Activities() {
    useDocumentTitle("Sibiri Group | Nos Activités");
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
        <div className="bg-transparent min-h-screen">
            <PageHeroSection
                firstTitle="Nos Activités"
                secondTitle="Bâtiment, Commerce & Pétrole"
                contentMiniBar="Activités"
            />

            <div className="bg-[#09090b] text-white min-h-screen">
                <section ref={containerRef} className="w-full py-24 lg:py-32 overflow-hidden" data-header-theme="black">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

                        {/* BTP Block */}
                        <div className="story-section flex flex-col lg:flex-row gap-12 lg:gap-24 mb-32 lg:mb-48 items-center">
                            <div className="w-full lg:w-1/2 overflow-hidden h-[400px] lg:h-[600px] relative">
                                <img
                                    src={imgBTP}
                                    alt="BTP et Génie Civil"
                                    className="parallax-image absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                                <HorizontalCurtainReveal curtainColor="#09090b">
                                    <h3 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-sibiri-gold">
                                        Bâtiment et Travaux Publics
                                    </h3>
                                </HorizontalCurtainReveal>
                                <p className="split font-sans text-xl md:text-2xl leading-[1.4] font-light">
                                    L’Afrique est le continent avec la croissance urbaine la plus élevée au monde. Pour accompagner les politiques de logements et d’urbanisation, <strong className="text-white font-medium">Sibiri Group</strong> s’investit dans les BTP et le génie civil.
                                </p>
                                <p className="split font-sans text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                                    Avec nos filiales <strong className="text-sibiri-gold">Val Construction Burkina Faso</strong> et <strong className="text-sibiri-gold">Val Construction Côte d’Ivoire</strong>, Sibiri Group offre différents services :
                                </p>
                                <ul className="split list-disc pl-6 space-y-3 font-sans text-lg md:text-xl text-gray-300 font-light marker:text-sibiri-gold">
                                    <li>Promotions immobilières de tout standing et logements sociaux</li>
                                    <li>Aménagement routiers</li>
                                    <li>Aménagements extérieurs ; etc.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Activités Commerciales Block */}
                        <div className="story-section flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 mb-32 lg:mb-48 items-center">
                            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                                <HorizontalCurtainReveal curtainColor="#09090b">
                                    <h3 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-sibiri-gold">
                                        Activités Commerciales
                                    </h3>
                                </HorizontalCurtainReveal>
                                <p className="split font-sans text-xl md:text-2xl leading-[1.4] font-light">
                                    Intervenant dans le négoce international et le commerce général, Sibiri Group propose divers produits dans différents domaines.
                                </p>
                                <p className="split font-sans text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                                    Notre collaboration avec de grandes entreprises à l’international, dont <strong className="text-white font-medium">Quimiquas ORO</strong> et <strong className="text-white font-medium">ORYX Energies</strong>, nous permet d’offrir le plus haut niveau de qualité de produits à un prix des plus compétitifs, notamment avec nos filiales <strong className="text-sibiri-gold">SOMEHAL</strong> et <strong className="text-sibiri-gold">SDHL</strong>.
                                </p>
                            </div>
                            <div className="w-full lg:w-1/2 overflow-hidden h-[400px] lg:h-[600px] relative">
                                <img
                                    src={imgCommerce}
                                    alt="Activités Commerciales"
                                    className="parallax-image absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                        </div>

                        {/* Activités Pétrolières Block */}
                        <div className="story-section flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
                            <div className="w-full lg:w-1/2 overflow-hidden h-[400px] lg:h-[600px] relative">
                                <img
                                    src={imgPetrole}
                                    alt="Activités Pétrolières"
                                    className="parallax-image absolute inset-0 w-full h-[140%] object-cover -top-[20%]"
                                />
                                <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <div className="w-full lg:w-1/2 flex flex-col gap-8">
                                <HorizontalCurtainReveal curtainColor="#09090b">
                                    <h3 className="font-serif italic text-4xl md:text-5xl lg:text-6xl text-sibiri-gold">
                                        Activités Pétrolières
                                    </h3>
                                </HorizontalCurtainReveal>
                                <p className="split font-sans text-xl md:text-2xl leading-[1.4] font-light">
                                    La fourniture de lubrifiants et de produits pétroliers est notre propriété.
                                </p>
                                <p className="split font-sans text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                                    Notre filiale <strong className="text-sibiri-gold">Etalon Energy</strong> est leader dans la location de cuves portatives et représentant exclusif de la marque de lubrifiants <strong className="text-white font-medium">PUMA</strong> au Burkina Faso.
                                </p>
                                <p className="split font-sans text-lg md:text-xl text-gray-400 leading-relaxed font-light">
                                    <strong className="text-sibiri-gold">SDHL</strong> est partenaire de la SONABHY. Notre filiale transporte notamment des hydrocarbures pour ORYX Energies.
                                </p>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Nos Sociétés Section */}
                {/* <section className="w-full bg-[#111115] py-24 lg:py-32 border-t border-white/5" data-header-theme="black">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                        <div className="text-center mb-16">
                            <h2 className="split font-serif italic text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6">
                                Nos <span className="text-sibiri-gold">Sociétés</span>
                            </h2>
                            <p className="split font-sans text-xl text-gray-400 font-light max-w-2xl mx-auto">
                                L'excellence et le savoir-faire de nos filiales au service de nos ambitions.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="group relative p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 overflow-hidden flex flex-col gap-4">
                                <div className="absolute top-0 left-0 w-full h-1 bg-sibiri-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                                <h3 className="font-serif italic text-3xl text-white">Etalon Energy</h3>
                                <p className="font-sans text-gray-400 font-light">Leader dans la location de cuves portatives et représentant exclusif PUMA.</p>
                            </div>

                            <div className="group relative p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 overflow-hidden flex flex-col gap-4">
                                <div className="absolute top-0 left-0 w-full h-1 bg-sibiri-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                                <h3 className="font-serif italic text-3xl text-white">Val Construction</h3>
                                <p className="font-sans text-gray-400 font-light">BTP, aménagements et promotions immobilières au Burkina Faso et en Côte d'Ivoire.</p>
                            </div>

                            <div className="group relative p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 overflow-hidden flex flex-col gap-4">
                                <div className="absolute top-0 left-0 w-full h-1 bg-sibiri-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                                <h3 className="font-serif italic text-3xl text-white">SOMEHAL</h3>
                                <p className="font-sans text-gray-400 font-light">Commerce général et négoce international. Représentant exclusif ORO.</p>
                            </div>

                            <div className="group relative p-8 md:p-12 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-500 overflow-hidden flex flex-col gap-4 lg:col-span-3">
                                <div className="absolute top-0 left-0 w-full h-1 bg-sibiri-gold origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                                <h3 className="font-serif italic text-3xl text-white">SDHL</h3>
                                <p className="font-sans text-gray-400 font-light max-w-2xl">Transport d'hydrocarbures, partenariat avec la SONABHY et ORYX Energies.</p>
                            </div>
                        </div>
                    </div>
                </section> */}
                <PartnersSection />
                <ContactInfo />
            </div>
        </div>
    );
}
