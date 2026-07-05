// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PageHeroSection from '../components/sections/PageHeroSection';
import useScrollReveal from '../hooks/useScrollReveal';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    useScrollReveal(true);

    const locations = [
        {
            title: "Siège Social",
            country: "Ouagadougou, Burkina Faso",
            address: "01 BP 5096 Ouagadougou 01",
            phone: "+226 25 37 69 44",
            email: "info@sibiri.group",
        },
        {
            title: "Val Construction CI",
            country: "Abidjan, Côte d’Ivoire",
            address: "Cocody II Plateaux, Perles 2, Rue 5, Villa N° 509",
            phone: "+225 22 52 54 88 / 04 45 79 29",
            email: "info@val.ci",
        },
        {
            title: "Val Construction BF",
            country: "Ouagadougou, Burkina Faso",
            address: "01 BP 5096 Ouagadougou 01",
            phone: "+226 25 37 69 44",
            email: "info@val.bf",
        },
        {
            title: "SOMEHAL",
            country: "Cotonou, Bénin",
            address: "04 BP 1031 Cadjèhoun",
            phone: "+229 21 31 01 49",
            email: "info@somehal.bj",
        },
        {
            title: "SDHL",
            country: "Ouagadougou, Burkina Faso",
            address: "01 BP 5096 Ouagadougou 01",
            phone: "+226 25 37 70 78",
            email: "info@sdhl.bf",
        },
        {
            title: "Etalon Energy",
            country: "Ouagadougou, Burkina Faso",
            address: "Boulevard Muammar Al-Gaddafi, Rue 53.738, Porte 20, Ouaga 2000 – 06 BP 10658",
            phone: "+226 25 48 83 81",
            email: "info@etalonenergy.bf",
        }
    ];

    return (
        <div className="bg-[#09090b] min-h-screen">
            <PageHeroSection
                firstTitle="Nous Contacter"
                secondTitle="Rencontrez un responsable pour parler de votre projet"
                contentMiniBar="Contact"
            />
            <div className="bg-[#09090b] text-white min-h-screen">

                <section className="w-full py-24 lg:py-32" data-header-theme="black">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-12">

                        <div className="grid grid-cols-1 xl:grid-cols-12 gap-16 lg:gap-24">

                            {/* LEFT: LOCATIONS */}
                            <div className="flex flex-col gap-8 xl:col-span-7 order-2 xl:order-1">
                                <h2 className="split font-serif italic text-4xl md:text-5xl text-white mb-4">
                                    Nos Bureaux
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {locations.map((loc, idx) => (
                                        <div key={idx} className="p-8 border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300 flex flex-col gap-3">
                                            <h3 className="font-serif italic text-2xl text-sibiri-gold">{loc.title}</h3>
                                            <div className="font-sans font-medium text-white">{loc.country}</div>
                                            <div className="font-sans font-light text-gray-400 text-sm leading-relaxed">
                                                <p>{loc.address}</p>
                                                <p className="mt-2 text-sibiri-gold/80">{loc.phone}</p>
                                                <p>{loc.email}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* RIGHT: FORM */}
                            <div className="flex flex-col gap-8 xl:col-span-5 order-1 xl:order-2">
                                <div>
                                    <h2 className="split font-serif italic text-4xl md:text-5xl lg:text-6xl text-sibiri-gold mb-4">
                                        Formulaire de Contact
                                    </h2>
                                    <p className="split font-sans text-xl text-gray-400 font-light">
                                        Contactez-nous pour toute demande d’information complémentaire.
                                    </p>
                                </div>

                                <form className="flex flex-col gap-8 mt-4" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm tracking-wider uppercase text-gray-400 font-bold">Nom</label>
                                            <input type="text" className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-sibiri-gold transition-colors font-light text-lg" />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <label className="text-sm tracking-wider uppercase text-gray-400 font-bold">E-mail</label>
                                            <input type="email" className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-sibiri-gold transition-colors font-light text-lg" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm tracking-wider uppercase text-gray-400 font-bold">Téléphone</label>
                                        <input type="tel" className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-sibiri-gold transition-colors font-light text-lg" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm tracking-wider uppercase text-gray-400 font-bold">Objet du message</label>
                                        <input type="text" className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-sibiri-gold transition-colors font-light text-lg" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm tracking-wider uppercase text-gray-400 font-bold">Message</label>
                                        <textarea rows={5} className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-sibiri-gold transition-colors font-light text-lg resize-none"></textarea>
                                    </div>
                                    <button className="mt-4 bg-sibiri-gold text-black font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors duration-300 w-full md:w-auto self-start">
                                        Envoyer le message
                                    </button>
                                </form>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
