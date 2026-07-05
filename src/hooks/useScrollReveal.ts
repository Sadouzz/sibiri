import { useEffect } from 'react';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

/**
 * useScrollReveal
 * Hook partagé — remplace le code dupliqué dans About, Projects, Services (et Home).
 *
 * Usage :
 *   useScrollReveal(isDesktop);
 *
 * Cible tous les éléments avec la classe `.split` dans le composant courant.
 * Applique une révélation ligne par ligne au scroll (GSAP SplitText + ScrollTrigger).
 *
 * @param {boolean} isDesktop - Ne lance les animations que sur desktop pour des raisons de perfo mobile
 * @param {Array}   deps       - Dépendances supplémentaires pour re-run l'effet si nécessaire
 */
export default function useScrollReveal(isDesktop: boolean, deps: any[] = []) {
    useEffect(() => {
        if (!isDesktop) return;           // Pas d'animation SplitText sur mobile

        const ctx = gsap.context(() => {
            const splitElements = document.querySelectorAll('.split');
            if (!splitElements.length) return;

            splitElements.forEach((el) => {
                // SplitText découpe chaque élément en lignes avec masque
                const split = SplitText.create(el, {
                    type: 'lines',
                    mask: 'lines',
                    linesClass: 'line',
                });

                gsap.from(split.lines, {
                    yPercent: 120,
                    ease: 'power2.out',       // ease uniforme sur toutes les pages
                    stagger: 0.1,
                    scrollTrigger: {
                        trigger: el,          // trigger propre à chaque élément
                        start: 'top bottom-=300px',
                        end: 'top center-=200px',
                        toggleActions: 'play none none reverse',
                    },
                });
            });
        });

        return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isDesktop, ...deps]);
}
