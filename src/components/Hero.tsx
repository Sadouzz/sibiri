import React, { useRef, useState } from "react";
// import HeroVideo from "./atoms/HeroVideo";
import img1 from "../assets/img/hero.jpg";

const Hero: React.FC = () => {
    return (
        <div
            id="hero"
            className="w-full relative overflow-hidden text-white"
            style={{
                height: "100vh"
            }}
        >
            {/* Background Image / Video placeholder */}
            <img
                src={img1}
                alt="placeholder background"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    zIndex: 0,
                }}
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-black/20" style={{ zIndex: 1 }}></div>

            {/* Bottom Content Container */}
            <div 
                className="absolute bottom-0 left-0 w-full flex justify-between items-end pb-12 px-6 lg:px-12"
                style={{ zIndex: 2 }}
            >
                {/* Bottom Left: Large Title and Subtitle */}
                <div className="flex flex-col items-start gap-2">
                    <h1 
                        className="font-sans text-6xl md:text-8xl lg:text-[110px] leading-[0.95] tracking-tight uppercase"
                        style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                    >
                        Bâtir ensemble
                    </h1>
                    <p 
                        className="font-serif text-xl md:text-2xl lg:text-3xl font-light tracking-wide italic text-white/90"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                    >
                        Le meilleur pour l'Afrique
                    </p>
                </div>

                {/* Bottom Right: Small Description */}
                <div className="mb-2 md:mb-4">
                    <p className="font-sans text-xs md:text-sm lg:text-base font-semibold tracking-wide text-right">
                        Creative studio based in Germany
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;