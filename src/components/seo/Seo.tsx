import React from 'react';
import { Helmet } from "react-helmet-async";

interface SeoProps {
    title?: string;
    description?: string;
    url?: string;
    ogImage?: string;
    schema?: any[];
    keywords?: string;
}

const Seo: React.FC<SeoProps> = ({
    title = "Algueye Dakar | Atelier de Couture de Luxe",
    description = "Atelier de couture de luxe à Dakar. Découvrez nos créations sur mesure, alliant élégance, tradition et artisanat d'exception.",
    url = "https://www.algueyedakar.com/",
    ogImage = "/assets/logo-algueye.png",
    schema,
    keywords = "Algueye Dakar, Couture de luxe, Atelier de couture, Mode sur mesure, Haute couture, Tailleur Dakar, Créateur de mode, Sénégal"
}) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={url} />

        {/* Open Graph Tags */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content="Algueye Dakar" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {schema && schema.map((s, i) => (
            <script type="application/ld+json" key={i}>
                {JSON.stringify(s)}
            </script>
        ))}
    </Helmet>
);

export default Seo;