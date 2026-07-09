import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import logo from '../../assets/img/Logo-Blanc.png.webp';

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      }
    });

    tl.fromTo(logoRef.current, 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
    )
    .to(logoRef.current, { opacity: 0, scale: 1.1, duration: 0.8, ease: "power2.inOut", delay: 0.5 })
    .to(containerRef.current, { opacity: 0, duration: 0.5, ease: "power2.inOut" }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] bg-[#09090b] flex items-center justify-center">
      <img ref={logoRef} src={logo} alt="Sibiri Group" className="w-48 md:w-64 h-auto" />
    </div>
  );
};

export default SplashScreen;
