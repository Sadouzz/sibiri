import Hero from "../components/Hero.tsx";
import Mission from "../components/sections/Mission.tsx";
import CurtainReveal from "../components/utils/CurtainReveal.tsx";
import "../App.css";
import PartnersSection from "../components/atoms/PartnersSection.tsx";
import ServicesSection from "../components/sections/ServicesSection.tsx";

export default function Home() {
    return (
        <main>
            <Hero />
            <Mission />
            <ServicesSection />
            <CurtainReveal curtainColor="var(--color-sibiri-blue)">
                <PartnersSection/>
            </CurtainReveal>
        </main>
    )
}