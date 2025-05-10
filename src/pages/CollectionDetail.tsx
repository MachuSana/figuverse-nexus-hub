
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Package, Info, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FigurineCard from '@/components/FigurineCard';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for collection details
const collectionData = {
  id: "nendoroid",
  name: "Nendoroid",
  manufacturer: "Good Smile Company",
  scale: "Super Deformed (10cm)",
  figurineCount: 1800,
  description: "Figurines Chibi avec pièces interchangeables, expressions faciales multiples et accessoires.",
  fullDescription: "La collection Nendoroid est une série de figurines à tête surdimensionnée (style SD - Super Deformed) créée par la société Good Smile Company en 2006. Les figurines sont généralement d'une hauteur d'environ 10 cm et possèdent un design chibi mettant l'accent sur le côté mignon des personnages. Chaque Nendoroid est livré avec plusieurs expressions faciales interchangeables, des accessoires supplémentaires et des parties de corps alternatives permettant de personnaliser la pose. Cette collection est particulièrement appréciée pour sa polyvalence, son prix abordable par rapport aux figurines à échelle plus grande, et la grande variété de personnages disponibles issus de différentes licences.",
  image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  releaseYear: "2006",
  priceRange: "40€ - 80€",
  features: ["Visages interchangeables", "Accessoires multiples", "Poses variées", "Joints articulés"],
  materialInfo: "ABS et PVC",
  popularity: "Très élevée",
  website: "https://www.goodsmile.info/fr/nendoroid",
};

// Mock figurines data for this collection
const collectionFigurines = [
  {
    id: '1',
    name: 'Nendoroid #1674',
    character: 'Gojo Satoru',
    license: 'Jujutsu Kaisen',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  },
  {
    id: '2',
    name: 'Nendoroid #1245',
    character: 'Tanjiro Kamado',
    license: 'Demon Slayer',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  },
  {
    id: '3',
    name: 'Nendoroid #733',
    character: 'Levi Ackerman',
    license: "L'Attaque des Titans",
    manufacturer: 'Good Smile Company',
    price: 59.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
  {
    id: '4',
    name: 'Nendoroid #1157',
    character: 'Izuku Midoriya',
    license: 'My Hero Academia',
    manufacturer: 'Good Smile Company',
    price: 52.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
  },
];

// Mock news related to this collection
const collectionNews = [
  {
    id: '1',
    title: 'Good Smile célèbre le 2000ème Nendoroid',
    excerpt: 'Good Smile Company annonce une édition spéciale pour célébrer le cap des 2000 Nendoroids produits depuis 2006.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    date: '2025-05-04',
    slug: 'celebration-2000-nendoroids',
  },
  {
    id: '2',
    title: 'Nouvelle ligne Nendoroid Plus annoncée',
    excerpt: 'Good Smile Company étend sa collection avec une nouvelle gamme Nendoroid Plus comprenant des accessoires pour collectionneurs.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    date: '2025-04-18',
    slug: 'nouvelle-ligne-nendoroid-plus',
  },
];

const CollectionDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch data based on the ID
  // For now, we'll use the mock data
  
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-figuverse-red">Accueil</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/gammes" className="text-gray-500 hover:text-figuverse-red">Gammes</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">{collectionData.name}</span>
        </div>
        
        {/* Back button */}
        <Link to="/gammes" className="inline-flex items-center text-figuverse-red mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" /> Retour aux gammes
        </Link>
        
        {/* Collection header */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Collection image */}
          <div className="w-full md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={collectionData.image} 
                alt={collectionData.name} 
                className="w-full h-auto object-cover aspect-video" 
              />
            </div>
          </div>
          
          {/* Collection info */}
          <div className="w-full md:w-2/3">
            <div className="flex items-center mb-2">
              <Package className="h-6 w-6 text-figuverse-red mr-2" />
              <h1 className="text-3xl font-bold">{collectionData.name}</h1>
            </div>
            
            <div className="mb-4">
              <span className="bg-figuverse-red text-white text-sm font-medium px-2.5 py-1 rounded">
                {collectionData.manufacturer}
              </span>
              <span className="ml-2 bg-gray-100 text-gray-700 text-sm font-medium px-2.5 py-1 rounded">
                {collectionData.scale}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6">{collectionData.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Figurines</h3>
                <p className="text-figuverse-red font-medium">{collectionData.figurineCount}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Année de lancement</h3>
                <p>{collectionData.releaseYear}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Gamme de prix</h3>
                <p>{collectionData.priceRange}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Matériaux</h3>
                <p>{collectionData.materialInfo}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Popularité</h3>
                <p>{collectionData.popularity}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Site officiel</h3>
                <a 
                  href={collectionData.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-figuverse-red hover:underline"
                >
                  Visiter
                </a>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Caractéristiques</h3>
              <div className="flex flex-wrap gap-2">
                {collectionData.features.map((feature, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs for different content sections */}
        <Tabs defaultValue="description" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="figurines">Figurines</TabsTrigger>
            <TabsTrigger value="news">Actualités</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">À propos de la collection {collectionData.name}</h2>
                <p className="text-gray-600">{collectionData.fullDescription}</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="figurines" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Figurines {collectionData.name}</h2>
                  <span className="text-gray-500">{collectionFigurines.length} figurines affichées</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {collectionFigurines.map(figurine => (
                    <FigurineCard key={figurine.id} {...figurine} />
                  ))}
                </div>
                
                {collectionFigurines.length > 0 && (
                  <div className="text-center mt-8">
                    <Button variant="outline">
                      Voir toutes les figurines {collectionData.name}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="news" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-6">Actualités liées à {collectionData.name}</h2>
                
                {collectionNews.length > 0 ? (
                  <div className="space-y-6">
                    {collectionNews.map(news => (
                      <div key={news.id} className="flex flex-col md:flex-row gap-4 border-b pb-6 last:border-0">
                        <div className="w-full md:w-1/4">
                          <Link to={`/news/${news.slug}`}>
                            <img 
                              src={news.image} 
                              alt={news.title} 
                              className="w-full h-40 object-cover rounded-lg" 
                            />
                          </Link>
                        </div>
                        <div className="w-full md:w-3/4">
                          <p className="text-sm text-gray-500 mb-1">{news.date}</p>
                          <Link to={`/news/${news.slug}`}>
                            <h3 className="font-semibold mb-2 hover:text-figuverse-red transition-colors">
                              {news.title}
                            </h3>
                          </Link>
                          <p className="text-gray-600 text-sm mb-2">{news.excerpt}</p>
                          <Link 
                            to={`/news/${news.slug}`}
                            className="text-figuverse-red text-sm hover:underline"
                          >
                            Lire la suite →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-8">Aucune actualité liée à cette collection pour le moment.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default CollectionDetail;
