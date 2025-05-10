
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Star, Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FigurineCard from '@/components/FigurineCard';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for character details
const characterData = {
  id: "naruto",
  name: "Naruto Uzumaki",
  series: "Naruto Shippuden",
  description: "Protagoniste de la série Naruto, ninja du village caché de Konoha avec le rêve de devenir Hokage. Naruto est un jeune ninja optimiste mais souvent impétueux qui possède en lui le démon renard à neuf queues, Kyuubi. Au début rejeté par les habitants de son village, il gagne progressivement leur respect en voulant devenir Hokage, le chef du village. Son nindo (voie du ninja) est de ne jamais revenir sur sa parole.",
  biography: "Né le 10 octobre, Naruto est le fils du Quatrième Hokage Minato Namikaze et de Kushina Uzumaki. Le jour de sa naissance, le démon renard à neuf queues attaque le village de Konoha, forçant Minato à sceller la moitié de Kyuubi en lui-même et l'autre moitié dans son fils nouveau-né avant de mourir avec sa femme. Orphelin et porteur du démon, Naruto a vécu une enfance solitaire, rejeté par la plupart des villageois qui voyaient en lui le monstre responsable de leurs malheurs plutôt que l'enfant innocent qu'il était.",
  figurineCount: 24,
  image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  personality: "Joyeux, déterminé, loyal",
  abilities: ["Rasengan", "Mode Ermite", "Mode Kyuubi", "Multi-clonage"],
  height: "180 cm",
  weight: "50 kg",
  birthdate: "10 Octobre",
  firstAppearance: "Chapitre 1 (Manga), Épisode 1 (Anime)",
  status: "Vivant",
  affiliations: ["Konoha", "Équipe 7"],
};

// Mock figurines data for this character
const characterFigurines = [
  {
    id: '1',
    name: 'Nendoroid #820',
    character: 'Naruto Uzumaki',
    license: 'Naruto Shippuden',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
  },
  {
    id: '2',
    name: 'Pop Up Parade',
    character: 'Naruto Uzumaki',
    license: 'Naruto Shippuden',
    manufacturer: 'Good Smile Company',
    price: 42.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  },
  {
    id: '3',
    name: 'G.E.M. Series',
    character: 'Naruto Uzumaki',
    license: 'Naruto Shippuden',
    manufacturer: 'MegaHouse',
    price: 129.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
];

// Mock news related to this character
const characterNews = [
  {
    id: '1',
    title: 'Nouvelle figurine Naruto annoncée par Bandai',
    excerpt: 'Bandai vient d\'annoncer une nouvelle figurine S.H.Figuarts de Naruto Uzumaki en mode Sage, prévue pour mars 2026.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    date: '2025-05-01',
    slug: 'nouvelle-figurine-naruto-bandai',
  },
  {
    id: '2',
    title: 'Édition limitée Naruto x Jordan révélée',
    excerpt: 'Une collaboration entre Naruto et la marque Jordan pour une édition limitée de figurines a été révélée lors du Comic Con de Tokyo.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    date: '2025-04-15',
    slug: 'collaboration-naruto-jordan',
  },
];

const CharacterDetail: React.FC = () => {
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
          <Link to="/personnages" className="text-gray-500 hover:text-figuverse-red">Personnages</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">{characterData.name}</span>
        </div>
        
        {/* Back button */}
        <Link to="/personnages" className="inline-flex items-center text-figuverse-red mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" /> Retour aux personnages
        </Link>
        
        {/* Character header */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Character image */}
          <div className="w-full md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={characterData.image} 
                alt={characterData.name} 
                className="w-full h-auto object-cover aspect-[3/4]" 
              />
            </div>
          </div>
          
          {/* Character info */}
          <div className="w-full md:w-2/3">
            <div className="flex items-center mb-2">
              <User className="h-6 w-6 text-figuverse-red mr-2" />
              <h1 className="text-3xl font-bold">{characterData.name}</h1>
            </div>
            
            <div className="mb-4">
              <span className="bg-figuverse-red text-white text-sm font-medium px-2.5 py-1 rounded">
                {characterData.series}
              </span>
            </div>
            
            <p className="text-gray-600 mb-6">{characterData.description}</p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Figurines</h3>
                <p className="text-figuverse-red font-medium">{characterData.figurineCount}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Taille</h3>
                <p>{characterData.height}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Poids</h3>
                <p>{characterData.weight}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Date de naissance</h3>
                <p>{characterData.birthdate}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Première apparition</h3>
                <p>{characterData.firstAppearance}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700">Statut</h3>
                <p>{characterData.status}</p>
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Affiliations</h3>
              <div className="flex flex-wrap gap-2">
                {characterData.affiliations.map((affiliation, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded"
                  >
                    {affiliation}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-gray-700 mb-2">Capacités</h3>
              <div className="flex flex-wrap gap-2">
                {characterData.abilities.map((ability, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Tabs for different content sections */}
        <Tabs defaultValue="biography" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="biography">Biographie</TabsTrigger>
            <TabsTrigger value="figurines">Figurines</TabsTrigger>
            <TabsTrigger value="news">Actualités</TabsTrigger>
          </TabsList>
          
          <TabsContent value="biography" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">Biographie</h2>
                <p className="text-gray-600">{characterData.biography}</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="figurines" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Figurines de {characterData.name}</h2>
                  <span className="text-gray-500">{characterFigurines.length} figurines</span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {characterFigurines.map(figurine => (
                    <FigurineCard key={figurine.id} {...figurine} />
                  ))}
                </div>
                
                {characterFigurines.length > 0 && (
                  <div className="text-center mt-8">
                    <Button variant="outline">
                      Voir toutes les figurines de {characterData.name}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="news" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-6">Actualités liées à {characterData.name}</h2>
                
                {characterNews.length > 0 ? (
                  <div className="space-y-6">
                    {characterNews.map(news => (
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
                  <p className="text-gray-500 text-center py-8">Aucune actualité liée à ce personnage pour le moment.</p>
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

export default CharacterDetail;
