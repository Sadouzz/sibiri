import { useState, useEffect } from 'react';

// Type basé sur ce que l'API Symfony renvoie
export interface CollectionData {
    id: string;
    title: string;
    subtitle: string;
    content: string;
    keys: string[];
    miniTitleWithBar: string;
    img: string;
    projects?: any[]; 
}

export const useCollections = () => {
    const [collections, setCollections] = useState<CollectionData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCollections = async () => {
            try {
                const baseURL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000';
                const response = await fetch(`${baseURL}/api/collections`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des collections');
                }
                const data = await response.json();
                
                // Formater les URLs d'images pour qu'elles soient absolues
                const formattedData = data.map((item: any) => ({
                    ...item,
                    img: item.img ? `${baseURL}${item.img}` : ''
                }));
                
                setCollections(formattedData);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCollections();
    }, []);

    return { collections, loading, error };
};
