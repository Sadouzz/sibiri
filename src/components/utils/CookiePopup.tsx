import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CookiePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already accepted or rejected cookies
        const cookieConsent = localStorage.getItem('sibiri_cookie_consent');
        if (!cookieConsent) {
            // Slight delay so it doesn't pop up instantly on first load
            const timer = setTimeout(() => setIsVisible(true), 2500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('sibiri_cookie_consent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('sibiri_cookie_consent', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full z-[90] p-4 md:p-6 pointer-events-none flex justify-center">
            <div className="bg-[#111115] border border-white/10 text-white rounded-2xl shadow-2xl p-6 md:p-8 max-w-4xl w-full flex flex-col md:flex-row items-center justify-between gap-6 md:gap-12 pointer-events-auto">
                <div className="flex-1">
                    <h4 className="text-lg md:text-xl font-serif italic text-sibiri-gold mb-2">Politique des Cookies</h4>
                    <p className="text-sm md:text-base text-gray-300 font-sans font-light leading-relaxed">
                        Nous utilisons des cookies pour améliorer votre expérience sur notre site, analyser le trafic et personnaliser le contenu. 
                        En continuant votre navigation, vous acceptez l'utilisation de ces cookies. 
                        <Link to="/cookies" className="text-white underline decoration-white/30 ml-2 hover:text-sibiri-gold transition-colors">
                            En savoir plus
                        </Link>
                    </p>
                </div>
                <div className="flex flex-row md:flex-col lg:flex-row gap-3 w-full md:w-auto shrink-0">
                    <button 
                        onClick={handleReject}
                        className="flex-1 md:flex-none px-6 py-3 rounded-full border border-white/20 text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                        Refuser
                    </button>
                    <button 
                        onClick={handleAccept}
                        className="flex-1 md:flex-none px-6 py-3 rounded-full bg-sibiri-gold text-sibiri-blue text-sm font-bold hover:bg-white hover:text-sibiri-blue transition-colors"
                    >
                        Accepter
                    </button>
                </div>
            </div>
        </div>
    );
}
