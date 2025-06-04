
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Star, TrendingUp, Calendar, Users } from 'lucide-react';

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section - Redesigned */}
        <section className="relative overflow-hidden">
          {/* Background with gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1920')] bg-cover bg-center opacity-20"></div>
          </div>
          
          {/* Floating elements for visual interest */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/20 rounded-full blur-xl"></div>
          
          <div className="relative container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center text-white">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm mb-6">
                <Star className="h-4 w-4 mr-2 text-yellow-400" />
                Plus de 5000 figurines référencées
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                FiguVerse
              </h1>
              <p className="text-xl md:text-2xl mb-4 text-gray-200">
                L'univers complet des figurines
              </p>
              <p className="text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
                Explorez, suivez et collectionnez vos figurines manga, anime et jeux vidéo préférées dans une expérience unique
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
                <Link 
                  to="/figurines" 
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto text-center"
                >
                  Explorer le catalogue
                  <ArrowRight className="ml-2 h-5 w-5 inline-block group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/planning" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-center"
                >
                  Planning sorties
                </Link>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                {[
                  { value: '5,250+', label: 'Figurines', icon: Star },
                  { value: '150+', label: 'Licences', icon: TrendingUp },
                  { value: '45+', label: 'Fabricants', icon: Calendar },
                  { value: '10,000+', label: 'Membres', icon: Users },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-400" />
                    <p className="text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-sm text-gray-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Advanced Search Section - Redesigned */}
        <section className="relative -mt-16 z-10">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-5xl mx-auto border border-gray-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Trouvez votre figurine idéale</h2>
                <p className="text-gray-600">Recherchez parmi plus de 5000 références</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Nom, personnage, licence..."
                      className="pl-12 pr-4 py-4 rounded-xl border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                    />
                  </div>
                </div>
                
                <select className="px-4 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg">
                  <option>Toutes les licences</option>
                  <option>Dragon Ball</option>
                  <option>One Piece</option>
                  <option>Naruto</option>
                </select>
                
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Search className="h-5 w-5 mr-2 inline-block" />
                  Rechercher
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-16">
          {/* Latest Figurines with new styling */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Dernières nouveautés</h2>
                <p className="text-gray-600">Les figurines récemment ajoutées à notre catalogue</p>
              </div>
              <Link to="/figurines" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                Voir tout <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <CarouselFigurines 
              figurines={latestFigurines} 
              title="" 
            />
          </section>

          {/* Featured Banner Ads - Redesigned */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredAds.map((ad, index) => (
                <AdBanner
                  key={index}
                  title={ad.title}
                  description={ad.description}
                  imageUrl={ad.imageUrl}
                  linkUrl={ad.linkUrl}
                  sponsor={ad.sponsor}
                  size="large"
                />
              ))}
            </div>
          </section>

          {/* Popular Figurines */}
          <section className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Tendances populaires</h2>
                <p className="text-gray-600">Les figurines les plus appréciées par la communauté</p>
              </div>
              <Link to="/figurines?sort=popular" className="text-blue-600 hover:text-blue-700 font-semibold flex items-center">
                Voir tout <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <CarouselFigurines 
              figurines={popularFigurines} 
              title="" 
            />
          </section>

          {/* Three Column Layout - Redesigned */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
            {/* Release Calendar */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                <ReleaseCalendar
                  releases={upcomingReleases}
                  title="Prochaines sorties"
                />
              </div>
            </div>
            
            {/* Latest News */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Actualités</h2>
                  <Link to="/news" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                    Voir tout
                  </Link>
                </div>
                
                <div className="space-y-6">
                  {latestNews.slice(0, 3).map(news => (
                    <div key={news.id} className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0">
                      <NewsCard {...news} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Ads */}
            <div className="lg:col-span-3">
              <AdSidebar
                title="Recommandations"
                ads={sidebarAds}
              />
            </div>
          </div>
          
          {/* Categories Showcase - Redesigned */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explorer par catégories</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Découvrez notre collection organisée par thèmes pour faciliter vos recherches</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Licences', icon: '🎬', link: '/licences', count: 150, gradient: 'from-red-500 to-pink-500' },
                { name: 'Fabricants', icon: '🏭', link: '/fabricants', count: 45, gradient: 'from-blue-500 to-cyan-500' },
                { name: 'Personnages', icon: '👾', link: '/personnages', count: 800, gradient: 'from-green-500 to-emerald-500' },
                { name: 'Gammes', icon: '📦', link: '/gammes', count: 35, gradient: 'from-purple-500 to-violet-500' },
                { name: 'Boutiques', icon: '🛒', link: '/boutiques', count: 25, gradient: 'from-orange-500 to-red-500' },
              ].map(category => (
                <Link 
                  key={category.name}
                  to={category.link}
                  className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">{category.icon}</span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{category.count} items</p>
                    <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                      <div className={`h-full bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
          
          {/* CTA Section - Redesigned */}
          <section className="relative rounded-3xl overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Rejoignez notre communauté
                </h2>
                <p className="text-xl mb-8 text-gray-100">
                  Créez un compte pour suivre vos figurines préférées, recevoir des alertes de prix et découvrir des exclusivités
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link 
                    to="/register" 
                    className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                  >
                    S'inscrire gratuitement <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link 
                    to="/login" 
                    className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-colors"
                  >
                    Se connecter
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
