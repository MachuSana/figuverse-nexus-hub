import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarouselFigurines from '@/components/CarouselFigurines';
import ReleaseCalendar from '@/components/ReleaseCalendar';
import NewsCard from '@/components/NewsCard';
import AdBanner from '@/components/AdBanner';
import AdSidebar from '@/components/AdSidebar';

// Mock data for demonstration
const latestFigurines = [
  {
    id: '1',
    name: 'Nendoroid',
    character: 'Gojo Satoru',
    license: 'Jujutsu Kaisen',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzMzM4Mg&ixlib=rb-4.0.3&q=80&w=1080',
    isNew: true
  },
  {
    id: '2',
    name: 'Pop Up Parade',
    character: 'Levi Ackerman',
    license: 'Attack on Titan',
    manufacturer: 'Good Smile Company',
    price: 42.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk4NA&ixlib=rb-4.0.3&q=80&w=1080',
    isFavorite: true
  },
  {
    id: '3',
    name: 'Figma',
    character: 'Eren Yeager',
    license: 'Attack on Titan',
    manufacturer: 'Max Factory',
    price: 89.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM0NQ&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '4',
    name: 'Nendoroid',
    character: 'Tanjiro Kamado',
    license: 'Demon Slayer',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk0MA&ixlib=rb-4.0.3&q=80&w=1080',
    isNew: true
  },
  {
    id: '5',
    name: 'Scale Figure',
    character: 'Makima',
    license: 'Chainsaw Man',
    manufacturer: 'Kotobukiya',
    price: 149.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM2Ng&ixlib=rb-4.0.3&q=80&w=1080'
  },
];

const popularFigurines = [
  {
    id: '6',
    name: 'Scale Figure',
    character: 'Asuna',
    license: 'Sword Art Online',
    manufacturer: 'Aniplex',
    price: 219.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzMzQzNg&ixlib=rb-4.0.3&q=80&w=1080',
    isFavorite: true
  },
  {
    id: '7',
    name: 'Nendoroid',
    character: 'Miku Nakano',
    license: 'The Quintessential Quintuplets',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzNzExOA&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '8',
    name: 'Scale Figure',
    character: 'Zero Two',
    license: 'Darling in the Franxx',
    manufacturer: 'Aniplex',
    price: 189.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM5NQ&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '9',
    name: 'Pop Up Parade',
    character: 'Rem',
    license: 'Re:Zero',
    manufacturer: 'Good Smile Company',
    price: 39.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk2Mw&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '10',
    name: 'Figma',
    character: 'Saber Alter',
    license: 'Fate/Stay Night',
    manufacturer: 'Max Factory',
    price: 84.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MTAxNA&ixlib=rb-4.0.3&q=80&w=1080'
  },
];

const upcomingReleases = [
  {
    id: '1',
    character: 'Gojo Satoru',
    name: 'Nendoroid',
    manufacturer: 'Good Smile Company',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzMzM4Mg&ixlib=rb-4.0.3&q=80&w=1080',
    releaseDate: '2025-06-15',
    price: 54.90,
    currency: '€'
  },
  {
    id: '2',
    character: 'Levi Ackerman',
    name: 'Pop Up Parade',
    manufacturer: 'Good Smile Company',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk4NA&ixlib=rb-4.0.3&q=80&w=1080',
    releaseDate: '2025-06-20',
    price: 42.90,
    currency: '€'
  },
  {
    id: '3',
    character: 'Eren Yeager',
    name: 'Figma',
    manufacturer: 'Max Factory',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM0NQ&ixlib=rb-4.0.3&q=80&w=1080',
    releaseDate: '2025-07-10',
    price: 89.90,
    currency: '€'
  },
  {
    id: '4',
    character: 'Tanjiro Kamado',
    name: 'Nendoroid',
    manufacturer: 'Good Smile Company',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk0MA&ixlib=rb-4.0.3&q=80&w=1080',
    releaseDate: '2025-07-15',
    price: 54.90,
    currency: '€'
  },
  {
    id: '5',
    character: 'Makima',
    name: 'Scale Figure',
    manufacturer: 'Kotobukiya',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM2Ng&ixlib=rb-4.0.3&q=80&w=1080',
    releaseDate: '2025-08-05',
    price: 149.90,
    currency: '€'
  },
];

const latestNews = [
  {
    id: '1',
    title: 'Good Smile Company annonce une nouvelle Nendoroid Gojo Satoru',
    excerpt: 'Le fabricant japonais vient de dévoiler une nouvelle version de la Nendoroid du personnage populaire de Jujutsu Kaisen, avec des accessoires exclusifs.',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzMzM4Mg&ixlib=rb-4.0.3&q=80&w=1080',
    date: '2025-05-07',
    category: 'Annonces',
    slug: 'good-smile-company-annonce-nouvelle-nendoroid-gojo-satoru'
  },
  {
    id: '2',
    title: 'Report de la sortie de la figurine Levi Ackerman par Good Smile Company',
    excerpt: 'En raison de problèmes de production, la sortie de la figurine Pop Up Parade de Levi est reportée de deux mois. Découvrez les détails.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk4NA&ixlib=rb-4.0.3&q=80&w=1080',
    date: '2025-05-05',
    category: 'Delays',
    slug: 'report-sortie-figurine-levi-ackerman-good-smile-company'
  },
  {
    id: '3',
    title: 'Notre visite exclusive au Wonder Festival été 2025',
    excerpt: 'Reportage complet sur les nouvelles annonces et prototypes présentés lors du célèbre salon japonais dédié aux figurines et au hobby.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM0NQ&ixlib=rb-4.0.3&q=80&w=1080',
    date: '2025-05-01',
    category: 'Événements',
    slug: 'visite-exclusive-wonder-festival-ete-2025'
  },
];

// Données publicitaires mockées
const featuredAds = [
  {
    title: "AmiAmi - Import direct du Japon",
    description: "Les dernières figurines en pré-commande avec livraison internationale sécurisée",
    imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    linkUrl: "https://amiami.com",
    sponsor: "AmiAmi"
  },
  {
    title: "HobbyLink Japan - Figurines Premium",
    description: "Collection exclusive de figurines limitées et garage kits rares",
    imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    linkUrl: "https://hlj.com",
    sponsor: "HobbyLink Japan"
  }
];

const sidebarAds = [
  {
    id: '1',
    title: 'Nendoroid Gojo Satoru',
    description: 'En pré-commande maintenant',
    imageUrl: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    linkUrl: 'https://goodsmile.info',
    price: '54.90€',
    rating: 4.8
  },
  {
    id: '2',
    title: 'Figma Levi Ackerman',
    description: 'Nouvelle version avec accessoires',
    imageUrl: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    linkUrl: 'https://maxfactory.com',
    price: '89.90€',
    rating: 4.9
  },
  {
    id: '3',
    title: 'Scale Figure Makima',
    description: 'Figurine échelle 1/7 premium',
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200',
    linkUrl: 'https://kotobukiya.co.jp',
    price: '149.90€',
    rating: 4.7
  }
];

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-gray-900 to-black text-white">
          <div className="absolute inset-0 opacity-30 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzNzExOA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center"></div>
          <div className="relative container mx-auto px-4 py-16 md:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Votre univers de figurines manga, anime et jeux vidéo
              </h1>
              <p className="text-lg mb-8">
                Explorez, suivez et collectionnez vos figurines préférées
              </p>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link 
                  to="/figurines" 
                  className="btn-primary py-3 px-6 text-center w-full sm:w-auto"
                >
                  Explorer le catalogue
                </Link>
                <Link 
                  to="/planning" 
                  className="bg-white text-gray-900 px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors w-full sm:w-auto text-center"
                >
                  Voir le planning
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section className="bg-figuverse-gray-100 py-6">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-lg shadow-md p-6 -mt-12 relative z-10 max-w-4xl mx-auto">
              <h2 className="text-xl font-semibold mb-4 text-center">Rechercher une figurine</h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-grow">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Nom, personnage, licence..."
                    className="pl-10 pr-3 py-3 rounded-md border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-figuverse-red focus:border-transparent"
                  />
                </div>
                <button className="btn-primary px-6 py-3 flex items-center justify-center">
                  <Search className="h-5 w-5 mr-2" />
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="section-container">
          {/* Latest Figurines */}
          <CarouselFigurines 
            figurines={latestFigurines} 
            title="Dernières figurines ajoutées" 
          />

          {/* Publicité Banner */}
          <section className="my-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredAds.map((ad, index) => (
                <AdBanner
                  key={index}
                  title={ad.title}
                  description={ad.description}
                  imageUrl={ad.imageUrl}
                  linkUrl={ad.linkUrl}
                  sponsor={ad.sponsor}
                  size="medium"
                />
              ))}
            </div>
          </section>

          {/* Popular Figurines */}
          <CarouselFigurines 
            figurines={popularFigurines} 
            title="Figurines populaires" 
          />

          {/* Two Column Section with Ads */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-12">
            {/* Release Calendar */}
            <div className="lg:col-span-2">
              <ReleaseCalendar
                releases={upcomingReleases}
                title="Sorties à venir"
              />
            </div>
            
            {/* Latest News */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Dernières actualités</h2>
                <Link to="/news" className="text-sm font-medium text-figuverse-red hover:underline">
                  Toutes les actualités
                </Link>
              </div>
              
              <div className="space-y-4">
                {latestNews.map(news => (
                  <NewsCard key={news.id} {...news} />
                ))}
              </div>
            </div>

            {/* Sidebar Ads */}
            <div>
              <AdSidebar
                title="Figurines Recommandées"
                ads={sidebarAds}
              />
            </div>
          </div>
          
          {/* Categories Showcase */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-6">Explorer par catégories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { name: 'Licences', icon: '🎬', link: '/licences', count: 150 },
                { name: 'Fabricants', icon: '🏭', link: '/fabricants', count: 45 },
                { name: 'Personnages', icon: '👾', link: '/personnages', count: 800 },
                { name: 'Gammes', icon: '📦', link: '/gammes', count: 35 },
                { name: 'Boutiques', icon: '🛒', link: '/boutiques', count: 25 },
              ].map(category => (
                <Link 
                  key={category.name}
                  to={category.link}
                  className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
                >
                  <span className="text-3xl mb-2 block">{category.icon}</span>
                  <h3 className="font-medium text-gray-900 group-hover:text-figuverse-red transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">{category.count} items</p>
                </Link>
              ))}
            </div>
          </section>
          
          {/* CTA Section */}
          <section className="bg-figuverse-red text-white rounded-lg p-8 my-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative z-10 max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Rejoignez notre communauté</h2>
              <p className="mb-6">
                Créez un compte pour suivre vos figurines préférées, recevoir des alertes de prix et bien plus encore.
              </p>
              <Link 
                to="/register" 
                className="bg-white text-figuverse-red px-6 py-3 rounded-md inline-flex items-center font-medium hover:bg-opacity-90 transition-colors"
              >
                S'inscrire gratuitement <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </section>

          {/* Stats Section */}
          <section className="my-12">
            <h2 className="text-2xl font-bold mb-6 text-center">FiguVerse en chiffres</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '5,250+', label: 'Figurines' },
                { value: '150+', label: 'Licences' },
                { value: '45+', label: 'Fabricants' },
                { value: '10,000+', label: 'Membres' },
              ].map((stat, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-sm">
                  <p className="text-3xl md:text-4xl font-bold text-figuverse-red mb-2">{stat.value}</p>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
