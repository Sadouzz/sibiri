import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import '../styles/SplitScrollText.css'

gsap.registerPlugin(ScrollTrigger, SplitText);

const TEXT = `
This demo shows the correct way to set up your SplitText line animations
with ScrollTrigger. It's important to return your animation inside the
onSplit callback and set autoSplit to true so that your lines resplit and
your animation gets recreated if the browser resizes.
`;

export default function SplitScrollText({ text = `
This demo shows the correct way to set up your SplitText line animations
with ScrollTrigger. It's important to return your animation inside the
onSplit callback and set autoSplit to true so that your lines resplit and
your animation gets recreated if the browser resizes.
`}) {
    const containerRef = useRef([]);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.set(".splitComp", { opacity: 1 });

            document.fonts.ready.then(() => {
                containerRef.current.forEach((container) => {
                    if (!container) return;

                    const text = container.querySelector(".splitComp");

                    SplitText.create(text, {
                        type: "lines",
                        mask: "lines",
                        linesClass: "line",
                        autoSplit: true,
                        onSplit: (instance) => {
                            return gsap.from(instance.lines, {
                                yPercent: 120,
                                stagger: 0.08,
                                ease: "power2.out",
                                duration: 0.6,
                                scrollTrigger: {
                                    trigger: container,
                                    start: "top center+=100",
                                    toggleActions: "play none none reverse",
                                    // play quand on entre
                                    // reverse quand on remonte
                                }
                            });
                        }
                    });

                });
            });
        });

        return () => ctx.revert(); // 🔥 cleanup React
    }, []);

    return (
        <>
            {[0].map((_, i) => (
                <div
                    className="container"
                    key={i}
                    ref={(el) => (containerRef.current[i] = el)}
                >
                    <h2 className="splitComp hero-title">{text}</h2>
                </div>
            ))}

            <div className="spacer" />
        </>
    );
}
