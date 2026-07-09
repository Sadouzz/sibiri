import PageHeroSection from '../components/sections/PageHeroSection';
import { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function CookiesPolicy() {
    useDocumentTitle("Sibiri Group | Politique des Cookies");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-transparent min-h-screen">
            <PageHeroSection
                firstTitle="Politique des"
                secondTitle="Cookies"
                contentMiniBar="Légal"
            />
            <div className="bg-[#09090b] text-white min-h-screen py-24">
                <div className="max-w-4xl mx-auto px-6 text-gray-300 space-y-8 font-light leading-relaxed">
                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">1. Que sont les cookies ?</h2>
                        <p>
                            Un cookie est un petit fichier texte enregistré sur votre terminal (ordinateur, tablette, smartphone) lors de la visite d'un site web. 
                            Il permet au site de mémoriser vos actions et préférences (telles que la connexion, la langue, la taille de la police et d'autres préférences d'affichage) pendant une période donnée.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">2. Comment utilisons-nous les cookies ?</h2>
                        <p>
                            Le site de <strong>Sibiri Group</strong> utilise des cookies pour :
                        </p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Assurer le fonctionnement technique et la sécurité du site.</li>
                            <li>Améliorer votre expérience utilisateur en mémorisant vos préférences.</li>
                            <li>Établir des statistiques de fréquentation et d'utilisation (de manière anonyme).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">3. Types de cookies utilisés</h2>
                        <ul className="list-disc pl-6 mt-4 space-y-4">
                            <li><strong>Cookies strictement nécessaires :</strong> Ils sont indispensables pour vous permettre de naviguer sur le site et d'utiliser ses fonctionnalités.</li>
                            <li><strong>Cookies de performance :</strong> Ils recueillent des informations sur la façon dont les visiteurs utilisent le site, par exemple les pages les plus visitées.</li>
                            <li><strong>Cookies de fonctionnalité :</strong> Ils permettent au site de mémoriser vos choix et de fournir des fonctionnalités améliorées et plus personnelles.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">4. Comment contrôler les cookies ?</h2>
                        <p>
                            Vous pouvez contrôler et/ou supprimer des cookies comme vous le souhaitez. Vous pouvez supprimer tous les cookies déjà stockés sur votre ordinateur 
                            et configurer la plupart des navigateurs pour qu'ils bloquent leur installation. Toutefois, si vous le faites, vous devrez peut-être ajuster 
                            manuellement certaines préférences à chaque visite et certains services ou fonctionnalités pourraient ne pas fonctionner.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
