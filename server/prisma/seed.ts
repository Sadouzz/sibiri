import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const projects = [
    { 
        category: 'btp', 
        title: 'Construction de la Cité des Anges', 
        description: 'Un projet immobilier de 500 logements sociaux à Ouagadougou visant à faciliter l\'accès au logement.', 
        image: 'https://images.unsplash.com/photo-1541888018185-117a3a71cb67?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        category: 'btp', 
        title: 'Aménagement de l\'Axe Nord', 
        description: 'Construction et bitumage de 120km de route nationale avec nos partenaires Val Construction.', 
        image: 'https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        category: 'commerciales', 
        title: 'Importation Quimiquas ORO', 
        description: 'Distribution de plus de 10 000 tonnes de produits de qualité en Afrique de l\'Ouest via SOMEHAL.', 
        image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        category: 'petrolieres', 
        title: 'Partenariat SONABHY', 
        description: 'Transport et logistique de 50 millions de litres d\'hydrocarbures pour soutenir l\'économie locale.', 
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        category: 'btp', 
        title: 'Résidence Emergence', 
        description: 'Promotion immobilière de très haut standing à Abidjan comprenant des villas luxueuses.', 
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        category: 'commerciales', 
        title: 'Réseau de distribution SDHL', 
        description: 'Mise en place d\'une chaîne logistique couvrant 5 pays de la sous-région ouest-africaine.', 
        image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800' 
    },
    { 
        category: 'petrolieres', 
        title: 'Cuves Portatives PUMA', 
        description: 'Déploiement de 200 cuves portatives pour accompagner le secteur minier au Burkina Faso.', 
        image: 'https://images.unsplash.com/photo-1560769530-53ebac51a91e?auto=format&fit=crop&q=80&w=800' 
    }
];

async function main() {
  console.log(`Start seeding ...`)
  for (const p of projects) {
    const project = await prisma.project.create({
      data: p,
    })
    console.log(`Created project with id: ${project.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
