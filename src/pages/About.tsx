import Mission from "../components/sections/Mission.tsx";
import AccordionSplit from "../components/sections/AccordionSplit.tsx";
import PageHeroSection from "../components/sections/PageHeroSection.tsx";
import "../App.css";
import CircularGallery from "../components/sections/CircularGallery.tsx";
import Origins from "../components/sections/Origins.tsx";
import ContactInfo from "../components/sections/ContactInfo.tsx";
import StyledHeading from "../components/atoms/StyledHeading.tsx";

const galleryItems = [
    { image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiM2NjY2NjYiPjxwYXRoIGQ9Ik0zIDIyaDJ2LTRIM3Y0em00IDBoMnYtOEg3djh6bTQgMGgydi0xMmgtMnYxMnptNCAwaDJWNmgtMnYxNnptNCAwaDJWMmgtMnYyMHoiLz48L3N2Zz4=", text: "Expérience" },
    { image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiM2NjY2NjYiPjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0wIDE4Yy00LjQxIDAtOC0zLjU5LTgtOHMzLjU5LTggOC04IDggMy41OSA4IDgtMy41OSA4LTggOHptMy44OC0xMC43MUwxMiAxMy4xN1YxNmgtMnYtMy44M2w0LjQ2LTQuNDYgMS40MiAxLjU4eiIvPjwvc3ZnPg==", text: "Expertise" },
    { image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiM2NjY2NjYiPjxwYXRoIGQ9Ik0xNC40IDZMMTQgNEg1djE3aDJ2LTdoNS42bC40IDJoN1Y2eiIvPjwvc3ZnPg==", text: "Renommée" },
    { image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTIiIGhlaWdodD0iNTEyIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9IiM2NjY2NjYiPjxwYXRoIGQ9Ik0xMiAxNy4yN0wxOC4xOCAyMWwtMS42NC03LjAzTDIyIDkuMjRsLTcuMTktLjYxTDEyIDIgOS4xOSA4LjYzIDIgOS4yNGw1LjQ2IDQuNzNMNS44MiAyMXoiLz48L3N2Zz4=", text: "Qualité" },
];

export default function About() {
    return (
        <main>
            {/* <Hero title="Le Groupe" subtitle="Découvrez notre histoire" /> */}
            <PageHeroSection
                contentMiniBar="Le Groupe"
                firstTitle="Découvrez notre histoire"
                secondTitle=""
            />
            

            <Mission />

            <Origins />

            <div className="bg-white pt-24">
                <StyledHeading 
                    title="Nos" 
                    titleColor='text-sibiri-blue'
                    textPosition='text-center'
                    highlightedText="Atouts" 
                />
            </div>
            <div className="bg-white pb-5!" style={{ height: '600px', position: 'relative' }}>
                <CircularGallery
                    items={galleryItems}
                    bend={1}    
                    textColor="#000"
                    borderRadius={0}
                    font="bold 50px sans-serif"
                    scrollSpeed={2}
                    scrollEase={0.05}
                    planeWidth={700}
                    planeHeight={700}
                    objectFit="contain"
                />
            </div>
            
            <section className="w-full py-16 px-6 lg:px-12 bg-sibiri-blue">
                <AccordionSplit />
            </section>
            
            <ContactInfo />

            {/* <CurtainReveal curtainColor="var(--color-sibiri-blue)">
                <PartnersSection/>
            </CurtainReveal> */}
        </main>
    )
}
