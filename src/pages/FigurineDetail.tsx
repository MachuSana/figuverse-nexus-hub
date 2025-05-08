
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Share, Heart, ShoppingCart, Calendar, ArrowRight, ChevronLeft, ChevronRight, Star, MessageSquare } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FigurineCard from '@/components/FigurineCard';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for a single figurine
const figurineData = {
  id: '1',
  name: 'Nendoroid #1674',
  character: 'Gojo Satoru',
  license: 'Jujutsu Kaisen',
  manufacturer: 'Good Smile Company',
  price: 54.90,
  currency: '€',
  images: [
    'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzMzM4Mg&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk4NA&ixlib=rb-4.0.3&q=80&w=1080',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM0NQ&ixlib=rb-4.0.3&q=80&w=1080',
  ],
  description: "Cette Nendoroid de Gojo Satoru de la série Jujutsu Kaisen est une reproduction fidèle du personnage avec son style décontracté. La figurine comprend trois plaques faciales interchangeables : une expression standard, une expression souriante, et une expression avec ses yeux révélés. Des pièces d'effet pour recréer ses techniques sont également incluses.",
  releaseDate: '2025-06-15',
  height: '10 cm',
  material: 'PVC, ABS',
  scale: 'Non-scale',
  series: 'Nendoroid',
  sculptor: 'Good Smile Company',
  paintwork: 'Good Smile Company',
  status: 'Pre-order',
  limited: false,
  rating: 4.8,
  reviewCount: 124,
  releasedOn: '2025',
  publishedOn: '2024-11-15',
  shops: [
    { name: 'Good Smile Company', price: 54.90, currency: '€', logo: 'https://via.placeholder.com/40', url: '#' },
    { name: 'AmiAmi', price: 52.50, currency: '€', logo: 'https://via.placeholder.com/40', url: '#' },
    { name: 'HobbyLink Japan', price: 53.20, currency: '€', logo: 'https://via.placeholder.com/40', url: '#' },
  ],
};

// Mock data for similar figurines
const similarFigurines = [
  {
    id: '2',
    name: 'Pop Up Parade',
    character: 'Yuji Itadori',
    license: 'Jujutsu Kaisen',
    manufacturer: 'Good Smile Company',
    price: 42.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk4NA&ixlib=rb-4.0.3&q=80&w=1080',
  },
  {
    id: '3',
    name: 'Nendoroid',
    character: 'Megumi Fushiguro',
    license: 'Jujutsu Kaisen',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM0NQ&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '4',
    name: 'Nendoroid',
    character: 'Nobara Kugisaki',
    license: 'Jujutsu Kaisen',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk0MA&ixlib=rb-4.0.3&q=80&w=1080'
  },
];

// Mock reviews data
const reviews = [
  {
    id: '1',
    user: 'Alexandre D.',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    date: '2025-06-20',
    rating: 5,
    comment: 'Superbe figurine de Gojo Satoru ! La qualité est au rendez-vous et les pièces interchangeables permettent de varier les poses. Un must pour les fans de Jujutsu Kaisen.',
  },
  {
    id: '2',
    user: 'Marie L.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    date: '2025-06-18',
    rating: 4,
    comment: 'Très belle Nendoroid, fidèle au personnage. Les accessoires sont nombreux et bien détaillés. Seul petit bémol : certaines pièces sont difficiles à fixer.',
  },
  {
    id: '3',
    user: 'Thomas B.',
    avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    date: '2025-06-15',
    rating: 5,
    comment: "J'adore cette figurine ! Les expressions faciales sont parfaitement reproduites et le niveau de détail est impressionnant pour une Nendoroid.",
  },
];

const FigurineDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [mainImage, setMainImage] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  
  const handlePrevImage = () => {
    setMainImage(prev => (prev > 0 ? prev - 1 : figurineData.images.length - 1));
  };
  
  const handleNextImage = () => {
    setMainImage(prev => (prev < figurineData.images.length - 1 ? prev + 1 : 0));
  };
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-figuverse-gray-100 py-3">
          <div className="container mx-auto px-4">
            <div className="text-sm text-gray-500">
              <Link to="/" className="hover:text-figuverse-red">Accueil</Link> {' > '}
              <Link to="/figurines" className="hover:text-figuverse-red">Figurines</Link> {' > '}
              <Link to={`/licence/${figurineData.license.toLowerCase()}`} className="hover:text-figuverse-red">{figurineData.license}</Link> {' > '}
              <span className="text-gray-700">{figurineData.character}</span>
            </div>
          </div>
        </div>

        {/* Figurine Detail */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left column - Images */}
            <div>
              {/* Main image */}
              <div className="relative bg-white rounded-lg overflow-hidden shadow-sm mb-4">
                <div className="aspect-w-1 aspect-h-1 relative">
                  <img 
                    src={figurineData.images[mainImage]} 
                    alt={figurineData.character} 
                    className="w-full h-full object-contain p-8"
                  />
                  
                  {/* Navigation arrows */}
                  <button 
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-1.5 rounded-full shadow-md hover:bg-opacity-100"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </button>
                  <button 
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 p-1.5 rounded-full shadow-md hover:bg-opacity-100"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </button>
                  
                  {/* Status badge */}
                  {figurineData.status && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-figuverse-red text-white text-xs font-bold px-2 py-1 rounded-md">
                        {figurineData.status}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Thumbnail images */}
              <div className="grid grid-cols-5 gap-2">
                {figurineData.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(idx)}
                    className={`rounded-md border-2 overflow-hidden ${
                      mainImage === idx 
                        ? 'border-figuverse-red' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={img} 
                      alt={`${figurineData.character} thumbnail ${idx + 1}`}
                      className="w-full h-16 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Right column - Details */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                {figurineData.character}
              </h1>
              <p className="text-lg text-gray-700 mb-4">
                {figurineData.name}
              </p>
              
              <div className="flex items-center gap-4 mb-6">
                <Link 
                  to={`/licence/${figurineData.license.toLowerCase()}`}
                  className="text-gray-600 hover:text-figuverse-red transition-colors"
                >
                  {figurineData.license}
                </Link>
                <span className="text-gray-300">|</span>
                <Link 
                  to={`/fabricant/${figurineData.manufacturer.toLowerCase()}`}
                  className="text-gray-600 hover:text-figuverse-red transition-colors"
                >
                  {figurineData.manufacturer}
                </Link>
              </div>
              
              <div className="flex items-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${star <= Math.floor(figurineData.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-semibold">{figurineData.rating.toFixed(1)}</span>
                <Link to="#reviews" className="text-sm text-gray-600">
                  ({figurineData.reviewCount} avis)
                </Link>
              </div>
              
              <p className="text-2xl font-bold text-gray-900 mb-4">
                {figurineData.price.toFixed(2)} {figurineData.currency}
              </p>
              
              {figurineData.releaseDate && (
                <div className="flex items-center gap-2 mb-6 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Date de sortie : <time dateTime={figurineData.releaseDate}>
                    {new Date(figurineData.releaseDate).toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time></span>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Button className="bg-figuverse-red hover:bg-opacity-90 text-white flex-grow flex items-center justify-center gap-2 py-6">
                  <ShoppingCart className="h-5 w-5" />
                  Acheter
                </Button>
                <Button 
                  variant="outline" 
                  className={`flex items-center justify-center gap-2 py-6 ${
                    isFavorite 
                      ? 'bg-figuverse-red bg-opacity-10 text-figuverse-red border-figuverse-red hover:bg-opacity-20' 
                      : 'border-figuverse-red text-figuverse-red hover:bg-figuverse-red hover:bg-opacity-10'
                  }`}
                  onClick={toggleFavorite}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-figuverse-red' : ''}`} />
                  {isFavorite ? 'Dans vos favoris' : 'Ajouter aux favoris'}
                </Button>
                <Button variant="outline" className="border-gray-300 text-gray-600 p-0 w-12">
                  <Share className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="bg-figuverse-gray-100 rounded-lg p-4 mb-8">
                <h3 className="font-semibold mb-2">
                  <ShoppingCart className="h-4 w-4 inline mr-1" /> 
                  Comparer les prix
                </h3>
                <div className="space-y-3">
                  {figurineData.shops.map((shop, index) => (
                    <div key={index} className="flex items-center justify-between bg-white rounded-md p-3 shadow-sm">
                      <div className="flex items-center gap-3">
                        <img src={shop.logo} alt={shop.name} className="w-8 h-8 object-contain" />
                        <span className="font-medium">{shop.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-bold">{shop.price.toFixed(2)} {shop.currency}</span>
                        <a 
                          href={shop.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-figuverse-red text-white px-4 py-1.5 rounded-md text-sm hover:bg-opacity-90 transition-colors"
                        >
                          Voir
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-3">
                  <button className="text-figuverse-red text-sm font-medium hover:underline flex items-center justify-center mx-auto">
                    Voir tous les prix disponibles <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Description</h3>
                <p className="text-gray-600">{figurineData.description}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Date de sortie</h3>
                  <p className="text-gray-600 text-sm">{figurineData.releasedOn}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Date d'annonce</h3>
                  <p className="text-gray-600 text-sm">{new Date(figurineData.publishedOn).toLocaleDateString('fr-FR')}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Hauteur</h3>
                  <p className="text-gray-600 text-sm">{figurineData.height}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Matériaux</h3>
                  <p className="text-gray-600 text-sm">{figurineData.material}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Échelle</h3>
                  <p className="text-gray-600 text-sm">{figurineData.scale}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Série</h3>
                  <p className="text-gray-600 text-sm">{figurineData.series}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Sculpteur</h3>
                  <p className="text-gray-600 text-sm">{figurineData.sculptor}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-sm">Peinture</h3>
                  <p className="text-gray-600 text-sm">{figurineData.paintwork}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="mt-12">
            <Tabs defaultValue="reviews">
              <TabsList className="w-full flex border-b mb-0 rounded-none bg-transparent space-x-8">
                <TabsTrigger value="reviews" className="flex items-center gap-1.5 border-b-2 rounded-none data-[state=active]:border-figuverse-red bg-transparent text-gray-700">
                  <MessageSquare className="h-4 w-4" />
                  Avis ({reviews.length})
                </TabsTrigger>
                <TabsTrigger value="related" className="flex items-center gap-1.5 border-b-2 rounded-none data-[state=active]:border-figuverse-red bg-transparent text-gray-700">
                  Figurines similaires
                </TabsTrigger>
              </TabsList>
              <TabsContent value="reviews" className="mt-4">
                <div id="reviews" className="mb-6">
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h2 className="text-xl font-semibold">Avis des clients</h2>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map(star => (
                            <Star 
                              key={star} 
                              className={`h-4 w-4 ${star <= Math.floor(figurineData.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm">Basé sur {figurineData.reviewCount} avis</span>
                      </div>
                    </div>
                    <Button className="bg-figuverse-red hover:bg-opacity-90 text-white">
                      Écrire un avis
                    </Button>
                  </div>
                  
                  {/* Reviews list */}
                  <div className="space-y-6">
                    {reviews.map(review => (
                      <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                        <div className="flex items-center gap-3 mb-3">
                          <img 
                            src={review.avatar} 
                            alt={review.user} 
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <p className="font-medium">{review.user}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex">
                                {[1, 2, 3, 4, 5].map(star => (
                                  <Star 
                                    key={star} 
                                    className={`h-3 w-3 ${star <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-gray-500">
                                {new Date(review.date).toLocaleDateString('fr-FR')}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center mt-6">
                    <button className="text-figuverse-red font-medium hover:underline">
                      Voir tous les avis
                    </button>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="related">
                <div className="my-6">
                  <h2 className="text-xl font-semibold mb-4">Figurines similaires</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {similarFigurines.map(figurine => (
                      <FigurineCard key={figurine.id} {...figurine} />
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FigurineDetail;
