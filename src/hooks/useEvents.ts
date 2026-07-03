import { useState, useEffect } from 'react';
import { EVENTS } from '../data/events.data';

export interface EventData {
    id: number;
    slug: string;
    category: string;
    date: string;
    month: string;
    year: string;
    title: string;
    subtitle: string;
    location: string;
    city: string;
    description: string;
    status: 'À venir' | 'Passé';
    featured?: boolean;
    image: string;
}

export const useEvents = () => {
    const [events, setEvents] = useState<EventData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;
        let hasData = false;

        // Timeout de 5 secondes pour basculer sur les données statiques
        const timeoutId = setTimeout(() => {
            if (isMounted && !hasData) {
                console.log("Utilisation des données statiques (timeout 5s)");
                setEvents(EVENTS as any);
                setLoading(false);
            }
        }, 5000);

        const fetchEvents = async () => {
            try {
                const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
                const response = await fetch(`${baseURL}/api/events`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des événements');
                }
                const data = await response.json();
                
                // Formater les URLs d'images
                const formattedData = data.map((item: any) => ({
                    ...item,
                    image: item.image ? `${baseURL}${item.image}` : ''
                }));
                
                if (isMounted) {
                    hasData = true;
                    clearTimeout(timeoutId);
                    setEvents(formattedData);
                    setLoading(false);
                }
            } catch (err: any) {
                if (isMounted && !hasData) {
                    console.error("Échec du fetch, basculement sur les données statiques:", err.message);
                    setEvents(EVENTS as any);
                    setLoading(false);
                    // On ne définit pas d'erreur pour éviter l'écran d'erreur si on a pu charger les données statiques
                }
            }
        };

        fetchEvents();

        return () => {
            isMounted = false;
            clearTimeout(timeoutId);
        };
    }, []);

    return { events, loading, error };
};
