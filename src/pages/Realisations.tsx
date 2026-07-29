import { useState, useEffect, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHeroSection from '../components/sections/PageHeroSection';
import ContactInfo from '../components/sections/ContactInfo';
import useDocumentTitle from '../hooks/useDocumentTitle';
import useScrollReveal from '../hooks/useScrollReveal';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
    { 
        id: 1, 
        category: 'btp', 
        title: 'Construction de la Cité des Anges', 
        description: 'Un projet immobilier de 500 logements sociaux à Ouagadougou visant à faciliter l\'accès au logement.', 
        image: 'https://images.unsplash.com/photo-1541888018185-117a3a71cb67?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        id: 2, 
        category: 'btp', 
        title: 'Aménagement de l\'Axe Nord', 
        description: 'Construction et bitumage de 120km de route nationale avec nos partenaires Val Construction.', 
        image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        id: 3, 
        category: 'commerciales', 
        title: 'Importation Quimiquas ORO', 
        description: 'Distribution de plus de 10 000 tonnes de produits de qualité en Afrique de l\'Ouest via SOMEHAL.', 
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        id: 4, 
        category: 'petrolieres', 
        title: 'Partenariat SONABHY', 
        description: 'Transport et logistique de 50 millions de litres d\'hydrocarbures pour soutenir l\'économie locale.', 
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        id: 5, 
        category: 'btp', 
        title: 'Résidence Emergence', 
        description: 'Promotion immobilière de très haut standing à Abidjan comprenant des villas luxueuses.', 
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        id: 6, 
        category: 'commerciales', 
        title: 'Réseau de distribution SDHL', 
        description: 'Mise en place d\'une chaîne logistique couvrant 5 pays de la sous-région ouest-africaine.', 
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        id: 7, 
        category: 'petrolieres', 
        title: 'Cuves Portatives PUMA', 
        description: 'Déploiement de 200 cuves portatives pour accompagner le secteur minier au Burkina Faso.', 
        image: 'https://images.unsplash.com/photo-1560769530-53ebac51a91e?auto=format&fit=crop&q=80&w=800' 
    },
];

const categories = [
    { id: 'all', label: 'Toutes les réalisations' },
    { id: 'btp', label: 'Bâtiment et Travaux Publics' },
    { id: 'commerciales', label: 'Activités Commerciales' },
    { id: 'petrolieres', label: 'Activités Pétrolières' }
];

export default function Realisations() {
    useDocumentTitle("Sibiri Group | Nos Réalisations");
    const [searchParams, setSearchParams] = useSearchParams();
    const containerRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);
    
    // Initial category from URL or 'all'
    const initialCategory = searchParams.get('category') || 'all';
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    useScrollReveal(true);

    const filteredProjects = activeCategory === 'all' 
        ? projects 
        : projects.filter(p => p.category === activeCategory);

    // Handle filter click and update URL
    const handleFilterClick = (categoryId: string) => {
        setActiveCategory(categoryId);
        if (categoryId === 'all') {
            searchParams.delete('category');
        } else {
            searchParams.set('category', categoryId);
        }
        setSearchParams(searchParams, { replace: true });
    };

    // Animate projects on filter change
    useGSAP(() => {
        if (!projectsRef.current) return;
        
        const cards = gsap.utils.toArray('.project-card') as HTMLElement[];
        if (cards.length === 0) return;

        gsap.fromTo(cards, 
            { y: 50, opacity: 0 },
            { 
                y: 0, 
                opacity: 1, 
                duration: 0.6, 
                stagger: 0.1, 
                ease: "power3.out",
                overwrite: true
            }
        );
        
        ScrollTrigger.refresh();
    }, { dependencies: [activeCategory], scope: projectsRef });

    return (
        <div className="bg-transparent min-h-screen">
            <PageHeroSection
                firstTitle="Nos Réalisations"
                secondTitle="Découvrez nos projets marquants"
                contentMiniBar="Réalisations"
            />

            <div className="bg-[#09090b] text-white min-h-screen">
                <section ref={containerRef} className="w-full py-16 lg:py-24" data-header-theme="black">
                    <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
                        
                        {/* Filters */}
                        <div className="flex flex-wrap justify-center gap-4 mb-16 split">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => handleFilterClick(cat.id)}
                                    className={`px-6 py-3 font-sans text-sm md:text-base transition-all duration-300 border ${
                                        activeCategory === cat.id 
                                            ? 'bg-sibiri-gold border-sibiri-gold text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]' 
                                            : 'bg-transparent border-white/20 text-gray-400 hover:border-sibiri-gold hover:text-sibiri-gold'
                                    }`}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>

                        {/* Projects Grid */}
                        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 min-h-[500px]">
                            {filteredProjects.map((project) => (
                                <div key={project.id} className="project-card group relative flex flex-col bg-white/5 border border-white/10 overflow-hidden hover:border-sibiri-gold/50 transition-colors duration-500">
                                    {/* Image Container */}
                                    <div className="relative h-64 md:h-80 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                                        <img 
                                            src={project.image} 
                                            alt={project.title} 
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                        />
                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4 z-20">
                                            <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md border border-white/20 text-xs font-mono uppercase tracking-wider text-sibiri-gold">
                                                {categories.find(c => c.id === project.category)?.label}
                                            </span>
                                        </div>
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow relative z-20">
                                        <h3 className="font-serif text-2xl md:text-3xl text-white mb-4 group-hover:text-sibiri-gold transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                        <p className="font-sans text-gray-400 font-light leading-relaxed mb-6 flex-grow">
                                            {project.description}
                                        </p>
                                        
                                        {/* Decorative line */}
                                        <div className="h-px w-full bg-gradient-to-r from-sibiri-gold/50 to-transparent mt-auto transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {filteredProjects.length === 0 && (
                            <div className="text-center py-20 text-gray-500 font-sans">
                                Aucune réalisation trouvée pour cette catégorie.
                            </div>
                        )}

                    </div>
                </section>
                <ContactInfo />
            </div>
        </div>
    );
}
