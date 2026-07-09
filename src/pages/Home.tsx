import Hero from "../components/Hero.tsx";
import Mission from "../components/sections/Mission.tsx";
import CurtainReveal from "../components/utils/CurtainReveal.tsx";
import "../App.css";
import PartnersSection from "../components/atoms/PartnersSection.tsx";
import BentoShutterReveal from "../components/sections/BentoShutterReveal.tsx";
import ScrollStack, { ScrollStackItem } from "../components/utils/ScrollStack.tsx";
import imgBTP from "../assets/img/btp.png";
import imgCommerce from "../assets/img/commerce.png";
import imgPetrole from "../assets/img/petrole.png";

const servicesData = [
    {
        id: 1,
        title: "Bâtiment et Travaux Publics",
        tagline: "L'expertise de la construction",
        description: "Travaux de construction et rénovation, promotion immobilière, réseaux routiers.",
        image: imgBTP,
        color: "#4CAF50",
        bgClass: "bg-white text-black border border-black/10"
    },
    {
        id: 2,
        title: "Activités Commerciales",
        tagline: "Négoce et commerce global",
        description: "Négoce international, import-export, représentations exclusives, commerce de gros.",
        image: imgCommerce,
        color: "#2196F3",
        bgClass: "bg-sibiri-gold text-black"
    },
    {
        id: 3,
        title: "Activités Pétrolières",
        tagline: "Énergie et logistique",
        description: "Transport, Stockage, Commerce de gros et de détail de carburants et lubrifiants.",
        image: imgPetrole,
        color: "#4CAF50",
        bgClass: "bg-white text-black border border-black/10"
    }
]; export default function Home() {
    return (
        <main>
            <Hero />
            <Mission />
            {/* <StatsSection /> */}
            <BentoShutterReveal>
                <ScrollStack useWindowScroll={true} className="bg-transparent">
                    {servicesData.map((service, i) => (
                        <ScrollStackItem key={service.id} itemClassName={`${service.bgClass} flex flex-col md:flex-row items-center overflow-hidden !h-auto md:!h-[500px] !p-0`}>
                            {/* LEFT SIDE: CONTENT */}
                            <div className="w-full md:w-1/2 h-auto md:h-full flex flex-col justify-center p-8 md:p-16 space-y-6 relative">
                                <div className="space-y-4 relative z-10">
                                    <span className={`font-mono text-xs md:text-sm tracking-wider ${service.bgClass.includes('text-black') ? 'text-black/50' : 'text-white/50'}`}>
                                        0{i + 1} // {service.tagline}
                                    </span>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                                        {service.title}
                                    </h2>
                                    <p className={`text-base md:text-xl font-light leading-relaxed max-w-md ${service.bgClass.includes('text-black') ? 'text-black/70' : 'text-white/70'}`}>
                                        {service.description}
                                    </p>
                                    <div className="pt-2 md:pt-6">
                                        <div
                                            className="h-1 w-16 md:w-20 rounded-full"
                                            style={{ backgroundColor: service.color }}
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE: IMAGE */}
                            <div className="w-full md:w-1/2 h-[300px] md:h-full p-4 md:p-8 relative z-10">
                                <div className="w-full h-full overflow-hidden rounded-3xl shadow-xl relative">
                                    <img
                                        src={service.image}
                                        className="w-full h-full object-cover"
                                        alt={service.title}
                                    />
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </BentoShutterReveal>
            {/* <CurtainReveal curtainColor="var(--color-sibiri-blue)"> */}
            <PartnersSection />
            {/* </CurtainReveal> */}
        </main>
    )
}