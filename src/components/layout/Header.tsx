import { useRef, useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { StaggeredMenu } from "./StaggeredMenu";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import logo from "../../assets/img/Logo-512px.png"

gsap.registerPlugin(ScrollTrigger);

type HeaderTheme = 'white' | 'black' | 'gold';

export default function Header() {
    const location = useLocation();
    const headerRef = useRef<HTMLElement>(null);
    const isContact = location.pathname === "/contact";
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState<HeaderTheme>('white');

    useGSAP(() => {
        const el = headerRef.current;
        if (!el) return;
        if (isContact) return;
    }, [isContact, location.pathname]);

    // Détection dynamique du thème en fonction des sections visibles
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-10% 0px -85% 0px', // Focalisé sur le haut de l'écran
            threshold: 0
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionTheme = entry.target.getAttribute('data-header-theme') as HeaderTheme;
                    if (sectionTheme) {
                        setTheme(sectionTheme);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // On observe toutes les sections qui ont un attribut data-header-theme
        const sections = document.querySelectorAll('[data-header-theme]');
        sections.forEach(section => observer.observe(section));

        // Fallback: si on est tout en haut et qu'aucune section n'est détectée (ou au changement de page)
        const handleScroll = () => {
            if (window.scrollY < 50) {
                // Sur certaines pages, on veut un thème spécifique par défaut
                if (location.pathname === '/naru-goor') {
                    setTheme('black');
                } else if (location.pathname === '/events') {
                    setTheme('white');
                } else {
                    setTheme('white');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

    return (
        <>
            <header
                ref={headerRef}
                className={`font-serif overflow-hidden w-[calc(100vw-32px)] lg:w-[calc(100vw-64px)] max-w-[1800px] shadow-sm border header-theme-${theme}`}
                style={{
                    position: 'fixed',
                    top: '10px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    height: '64px',
                    zIndex: 1000,
                    backgroundColor: 'var(--header-bg)',
                    borderColor: 'var(--header-border)',
                    color: 'var(--header-text)',
                    transition: 'var(--header-transition)'
                }}
            >
                <nav className="flex w-full h-full items-center relative z-10 justify-between lg:justify-start">

                    {/* --- GAUCHE (Desktop uniquement) --- */}
                    <div className="hidden lg:flex flex-1 h-full items-center justify-start border-r border-[var(--header-border)] transition-colors duration-400">
                        <HeaderLink to="/" label="Accueil" />
                        <HeaderLink to="/about" label="Notre Groupe" />
                        {/* <HeaderLink to="/events" label="Evènements" /> */}
                        {/* <HeaderLink to="/news" label="Nouveautés" /> */}
                    </div>

                    {/* --- LOGO CENTRE (Desktop) / LOGO + MENU (Mobile) --- */}
                    <NavLink
                        to="/"
                        className="group flex h-full w-[50%] md:w-[50%] lg:w-[500px] shrink-0 flex-col items-center justify-center overflow-hidden cursor-pointer relative mx-auto lg:mx-0 border-r border-[var(--header-border)] lg:border-r-0 lg:border-l-0 border-l transition-colors duration-400"
                        style={{ backgroundColor: 'var(--header-bg)' }}
                    >
                        <div
                            className="flex items-center justify-center transition-transform duration-500 group-hover:-translate-y-[250%]"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.49, 0.03, 0.13, 0.99)' }}
                        >
                            <img src={logo} alt="" style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                            <span className="font-black text-md md:text-lg lg:text-xl tracking-[0.1em] lg:tracking-[0.15em] uppercase" style={{ color: 'var(--header-text)' }}>
                                SIBIRI GROUP
                            </span>
                        </div>
                        <p
                            className="absolute w-full translate-y-[250%] text-center text-lg lg:text-2xl font-serif italic text-gold-dark transition-transform duration-500 group-hover:translate-y-0"
                            style={{ transitionTimingFunction: 'cubic-bezier(0.49, 0.03, 0.13, 0.99)' }}
                        >
                            Les détails, où que vous soyez.
                        </p>
                    </NavLink>

                    {/* Mobile: ALGUEYE à gauche + MENU à droite */}
                    <div className="flex lg:hidden w-[50%] md:w-[50%] h-full items-center px-4! text-center! justify-center transition-colors duration-400" style={{ backgroundColor: 'var(--header-bg)' }}>
                        <button
                            onClick={() => setMenuOpen(true)}
                            className="flex items-center gap-2 bg-transparent border-0 cursor-pointer font-bold tracking-widest text-xs uppercase"
                            style={{ color: 'var(--header-text)' }}
                            aria-label="Ouvrir le menu"
                            type="button"
                        >
                            <span>MENU</span>
                            {/* Hamburger icon */}
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                                <line x1="0" y1="1" x2="20" y2="1" />
                                <line x1="0" y1="7" x2="20" y2="7" />
                                <line x1="0" y1="13" x2="20" y2="13" />
                            </svg>
                        </button>
                    </div>

                    {/* --- DROITE (Desktop uniquement) --- */}
                    <div className="hidden lg:flex flex-1 h-full items-center justify-end border-l border-[var(--header-border)] transition-colors duration-400">
                        <HeaderLink to="/activites" label="Activités" />
                        <HeaderLink to="/contact" label="Contact" />
                        {/* <HeaderLink to="/confections" label="Confections" /> */}
                        {/* <HeaderLink to="/tenues" label="Tenues" /> */}
                        {/* <HeaderLink to="/naru-goor" label="Naru Goor" /> */}
                    </div>

                </nav>
            </header>

            {/* Staggered Menu (mobile) — contrôlé depuis ici */}
            <StaggeredMenu
                isOpen={menuOpen}
                onClose={() => setMenuOpen(false)}
                accentColor="var(--color-gold, #c9a84c)"
                colors={['#f5f5f0', '#efefea']}
                displaySocials={true}
                socialItems={[
                    { label: 'Instagram', link: 'https://instagram.com/algueyedakar' },
                    { label: 'Facebook', link: 'https://facebook.com' }
                ]}
                items={[
                    { label: 'Accueil', ariaLabel: 'Accueil', link: '/' },
                    { label: 'Notre Groupe', ariaLabel: 'Notre Groupe', link: '/about' },
                    { label: 'Activités', ariaLabel: 'Activités', link: '/activites' },
                    { label: 'Contact', ariaLabel: 'Contact', link: '/contact' }
                ]}
            />
        </>
    );
}

// --- Composant Lien ---
function HeaderLink({ to, label }: { to: string; label: string }) {
    const location = useLocation();
    return (
        <NavLink
            to={to}
            className={({ isActive }) => `
                group/link relative flex h-full grow items-center justify-center px-2 xl:px-4 font-bold uppercase text-[10px] xl:text-base tracking-widest transition-all duration-400
                border-r border-[var(--header-border)] last:border-r-0 hover:bg-black/5
                ${isActive ? "bg-gold !text-black" : "text-[var(--header-text)]"}
            `}
            style={{ transition: 'var(--header-transition)' }}
        >
            {label}
            <div className={`absolute bottom-0 left-0 h-[3px] w-full transition-colors duration-300 
                ${location.pathname === to ? 'bg-gold' : 'bg-transparent group-hover/link:bg-gold'}
            `} />
        </NavLink>
    );
}
