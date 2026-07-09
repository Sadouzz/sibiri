import PageHeroSection from '../components/sections/PageHeroSection';
import { useEffect } from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function PrivacyPolicy() {
    useDocumentTitle("Sibiri Group | Politique de Confidentialité");
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-transparent min-h-screen">
            <PageHeroSection
                firstTitle="Politique de"
                secondTitle="Confidentialité"
                contentMiniBar="Légal"
            />
            <div className="bg-[#09090b] text-white min-h-screen py-24">
                <div className="max-w-4xl mx-auto px-6 text-gray-300 space-y-8 font-light leading-relaxed">
                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">1. Introduction</h2>
                        <p>
                            Bienvenue sur le site de <strong>Sibiri Group</strong>. La confidentialité de vos données personnelles est une priorité pour nous. 
                            Cette politique de confidentialité vous explique comment nous collectons, utilisons, et protégeons vos informations lorsque vous visitez notre site web.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">2. Collecte des informations</h2>
                        <p>
                            Nous recueillons des informations lorsque vous remplissez un formulaire de contact ou naviguez sur notre site (via les cookies). 
                            Les informations collectées incluent votre nom, votre adresse e-mail, votre numéro de téléphone et des données de navigation non identifiables.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">3. Utilisation des informations</h2>
                        <p>Toutes les informations que nous recueillons auprès de vous peuvent être utilisées pour :</p>
                        <ul className="list-disc pl-6 mt-4 space-y-2">
                            <li>Personnaliser votre expérience et répondre à vos besoins individuels</li>
                            <li>Améliorer notre site web</li>
                            <li>Améliorer le service client et vos besoins de prise en charge</li>
                            <li>Vous contacter par e-mail ou par téléphone</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">4. Protection de vos données</h2>
                        <p>
                            Nous mettons en œuvre une variété de mesures de sécurité pour préserver la sécurité de vos informations personnelles. 
                            Nous n'utilisons que des systèmes sécurisés pour stocker vos données, et l'accès à ces informations est limité aux employés de Sibiri Group qui en ont besoin pour accomplir un travail spécifique.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">5. Divulgation à des tiers</h2>
                        <p>
                            Nous ne vendons, n'échangeons et ne transférons pas vos informations personnelles identifiables à des tiers. 
                            Cela ne comprend pas les tierces parties de confiance qui nous aident à exploiter notre site web ou à mener nos affaires, tant que ces parties conviennent de garder ces informations confidentielles.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-3xl text-sibiri-gold font-serif italic mb-4">6. Consentement</h2>
                        <p>
                            En utilisant notre site, vous consentez à notre politique de confidentialité.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}
