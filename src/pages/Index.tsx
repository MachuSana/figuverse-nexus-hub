
import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, TrendingUp, Calendar, Users, Zap } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CarouselFigurines from '@/components/CarouselFigurines';
import ReleaseCalendar from '@/components/ReleaseCalendar';
import NewsCard from '@/components/NewsCard';

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

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Modern Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzNzExOA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center opacity-10"></div>
          
          <div className="relative container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Zap className="h-4 w-4 mr-2 text-yellow-400" />
                <span className="text-sm font-medium">Plus de 5000 figurines référencées</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                L'univers des
                <span className="block text-figuverse-red">figurines</span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
                Découvrez, suivez et collectionnez vos figurines manga, anime et jeux vidéo préférées
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link 
                  to="/figurines" 
                  className="bg-figuverse-red hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all transform hover:scale-105 shadow-xl"
                >
                  Explorer le catalogue
                </Link>
                <Link 
                  to="/planning" 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all border border-white/20"
                >
                  Voir les sorties
                </Link>
              </div>
              
              {/* Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                {[
                  { value: '5,250+', label: 'Figurines' },
                  { value: '150+', label: 'Licences' },
                  { value: '45+', label: 'Fabricants' },
                  { value: '10k+', label: 'Membres' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-figuverse-red">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Search Section */}
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 -mt-8 relative z-10">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto border border-gray-100">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Trouvez votre figurine</h2>
                <p className="text-gray-600">Recherchez parmi plus de 5000 références</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-grow">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Nom, personnage, licence, fabricant..."
                    className="pl-12 pr-4 py-4 rounded-xl border border-gray-200 w-full focus:outline-none focus:ring-2 focus:ring-figuverse-red focus:border-transparent text-lg"
                  />
                </div>
                <button className="bg-figuverse-red hover:bg-red-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-colors">
                  <Search className="h-5 w-5 mr-2" />
                  Rechercher
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                {['Nendoroid', 'Scale Figure', 'Figma', 'Good Smile Company', 'Attack on Titan'].map((tag) => (
                  <button key={tag} className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition-colors">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="container mx-auto px-4 py-12">
          {/* Latest Figurines with trending badge */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <TrendingUp className="h-6 w-6 text-figuverse-red mr-3" />
              <h2 className="text-3xl font-bold">Dernières figurines ajoutées</h2>
            </div>
            <CarouselFigurines 
              figurines={latestFigurines} 
              title="" 
            />
          </div>

          {/* Popular Figurines */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <Users className="h-6 w-6 text-figuverse-red mr-3" />
              <h2 className="text-3xl font-bold">Figurines populaires</h2>
            </div>
            <CarouselFigurines 
              figurines={popularFigurines} 
              title="" 
            />
          </div>

          {/* Two Column Section with better spacing */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-16">
            {/* Release Calendar */}
            <div className="xl:col-span-2">
              <div className="flex items-center mb-6">
                <Calendar className="h-6 w-6 text-figuverse-red mr-3" />
                <h2 className="text-3xl font-bold">Sorties à venir</h2>
              </div>
              <ReleaseCalendar
                releases={upcomingReleases}
                title=""
              />
            </div>
            
            {/* Latest News */}
            <div>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Actualités</h2>
                <Link to="/news" className="text-figuverse-red hover:underline font-semibold">
                  Voir tout
                </Link>
              </div>
              
              <div className="space-y-6">
                {latestNews.map(news => (
                  <NewsCard key={news.id} {...news} />
                ))}
              </div>
            </div>
          </div>
          
          {/* Enhanced Categories Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Explorer par catégories</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Licences', icon: '🎬', link: '/licences', count: 150, color: 'from-blue-500 to-purple-600' },
                { name: 'Fabricants', icon: '🏭', link: '/fabricants', count: 45, color: 'from-green-500 to-blue-500' },
                { name: 'Personnages', icon: '👾', link: '/personnages', count: 800, color: 'from-purple-500 to-pink-500' },
                { name: 'Gammes', icon: '📦', link: '/gammes', count: 35, color: 'from-orange-500 to-red-500' },
                { name: 'Boutiques', icon: '🛒', link: '/boutiques', count: 25, color: 'from-teal-500 to-green-500' },
              ].map(category => (
                <Link 
                  key={category.name}
                  to={category.link}
                  className="group relative bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 border border-gray-100"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`}></div>
                  <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform">{category.icon}</span>
                  <h3 className="font-bold text-lg text-gray-900 group-hover:text-figuverse-red transition-colors mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium">{category.count} items</p>
                </Link>
              ))}
            </div>
          </section>
          
          {/* Modern CTA Section */}
          <section className="relative bg-gradient-to-r from-figuverse-red to-red-600 text-white rounded-3xl p-12 mb-16 overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl font-bold mb-4">Rejoignez notre communauté</h2>
              <p className="text-xl mb-8 text-red-100">
                Créez un compte pour suivre vos figurines préférées, recevoir des alertes de prix et découvrir les dernières sorties en avant-première.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/register" 
                  className="bg-white text-figuverse-red px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
                >
                  S'inscrire gratuitement <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-figuverse-red transition-colors inline-flex items-center justify-center"
                >
                  En savoir plus
                </Link>
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
