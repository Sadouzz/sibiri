import PageHeroSection from '../components/sections/PageHeroSection';
import { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function TermsOfUse() {
    useDocumentTitle("Sibiri Group | Conditions d'Utilisation");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-transparent min-h-screen">
            <PageHeroSection
                firstTitle="Conditions"
                secondTitle="d'Utilisation"
                contentMiniBar="Légal"
            />
            <div className="bg-[#09090b] text-white min-h-screen py-24">
                <div className="max-w-4xl mx-auto px-6 text-gray-300 space-y-8 font-light leading-relaxed">
                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">1. Acceptation des conditions</h2>
                        <p>
                            En accédant et en utilisant le site web de <strong>Sibiri Group</strong>, vous acceptez de vous conformer et d'être lié par 
                            les présentes conditions d'utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser ce site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">2. Propriété intellectuelle</h2>
                        <p>
                            L'ensemble du contenu présent sur ce site (textes, images, logos, vidéos, graphiques, architecture, etc.) est la propriété 
                            exclusive de Sibiri Group ou de ses partenaires. Toute reproduction, distribution, modification ou utilisation sans accord 
                            préalable et écrit est strictement interdite et s'apparente à de la contrefaçon.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">3. Utilisation du site</h2>
                        <p>
                            Vous acceptez de n'utiliser ce site qu'à des fins licites et d'une manière qui ne porte pas atteinte aux droits de, ou ne 
                            restreint ni n'empêche l'utilisation de ce site par un tiers.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">4. Limitation de responsabilité</h2>
                        <p>
                            Sibiri Group s'efforce d'assurer l'exactitude des informations diffusées sur ce site, mais ne saurait être tenu pour responsable 
                            des erreurs, d'une absence de disponibilité des informations et/ou de la présence de virus sur son site. 
                            L'utilisateur reconnaît utiliser ces informations sous sa responsabilité exclusive.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">5. Liens vers des sites tiers</h2>
                        <p>
                            Ce site peut contenir des liens vers d'autres sites web qui ne sont pas sous le contrôle de Sibiri Group. Nous n'assumons 
                            aucune responsabilité quant au contenu de ces sites liés.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">6. Modification des conditions</h2>
                        <p>
                            Sibiri Group se réserve le droit de modifier les présentes conditions d'utilisation à tout moment et sans préavis.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
