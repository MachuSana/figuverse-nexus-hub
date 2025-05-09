import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft, Link as LinkIcon, Star } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import FigurineCard from '@/components/FigurineCard';

const fetchManufacturerDetails = async (manufacturerId: string) => {
  // En production, ce serait une vraie API
  const manufacturers = [
    {
      id: '1',
      name: 'Good Smile Company',
      logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Good Smile Company est un fabricant japonais de figurines et de jouets fondé en 2001. La société est principalement connue pour ses lignes de figurines Nendoroid et figma. Les Nendoroid sont des figurines super-deformed (SD) avec des têtes surdimensionnées et des corps plus petits, tandis que les figma sont des figurines articulées plus réalistes. Good Smile Company produit également des statues haut de gamme et des figurines à échelle fixe de personnages provenant d\'animes, de mangas, de jeux vidéo et d\'autres médias populaires.',
      type: 'Premium',
      country: 'Japon',
      foundedYear: 2001,
      headquarters: 'Tokyo, Japon',
      website: 'https://goodsmile.info',
      tags: ['Nendoroid', 'Figma', 'Anime', 'Manga', 'Premium', 'Pop Culture'],
      figurineCount: 1245,
      rating: 4.8,
      socialLinks: {
        facebook: 'https://facebook.com/goodsmile',
        twitter: 'https://twitter.com/goodsmile_info',
        instagram: 'https://instagram.com/goodsmile',
        youtube: 'https://youtube.com/goodsmile',
      },
      timeline: [
        { year: 2001, event: 'Fondation de Good Smile Company à Tokyo' },
        { year: 2006, event: 'Lancement de la ligne de figurines Figma' },
        { year: 2009, event: 'Lancement des Nendoroid qui deviennent rapidement populaires' },
        { year: 2012, event: 'Ouverture de Good Smile Café à Akihabara' },
        { year: 2015, event: 'Expansion internationale avec bureau aux États-Unis' },
        { year: 2020, event: 'Célébration du 1000e Nendoroid' },
      ],
      series: [
        { id: '101', name: 'Nendoroid', figurineCount: 1000, image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '102', name: 'Figma', figurineCount: 450, image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '103', name: 'Scale Figures', figurineCount: 200, image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      ],
      topFigurines: [
        { id: '201', name: 'Hatsune Miku: 10th Anniversary Ver.', image: 'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 15000, rating: 4.9, releaseDate: '2021-08-31' },
        { id: '202', name: 'Rem: Crystal Dress Ver.', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 24000, rating: 4.8, releaseDate: '2020-12-15' },
        { id: '203', name: 'Link: Breath of the Wild Ver.', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 6800, rating: 4.7, releaseDate: '2019-05-20' },
        { id: '204', name: 'Demon Slayer: Nezuko Kamado', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 5200, rating: 4.7, releaseDate: '2022-02-10' },
      ],
      reviews: [
        { id: '301', user: 'CollectorPro', rating: 5, comment: 'Qualité exceptionnelle sur leurs Nendoroids, emballage parfait et détails incroyables.', date: '2023-10-15' },
        { id: '302', user: 'FigureFan42', rating: 4, comment: 'Très bonne qualité mais prix un peu élevés. Les figma sont top !', date: '2023-09-20' },
        { id: '303', user: 'AnimeLover', rating: 5, comment: 'Mes figurines préférées viennent de GSC. Service client excellent quand j\'ai eu un problème.', date: '2023-08-05' },
        { id: '304', user: 'OtakuCollector', rating: 4, comment: 'Détails impressionnants mais délais de livraison parfois longs sur les pré-commandes.', date: '2023-07-12' },
      ]
    },
    {
      id: '2',
      name: 'Bandai',
      logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Bandai est l\'un des plus grands fabricants de jouets et de figurines au Japon. Fondée en 1950, l\'entreprise est devenue célèbre pour ses figurines de haute qualité basées sur des franchises populaires comme Gundam, Dragon Ball, One Piece, et bien d\'autres. Leur ligne S.H.Figuarts propose des figurines articulées extrêmement détaillées, tandis que leurs séries Gunpla (maquettes Gundam) sont devenues une référence mondiale dans le domaine du modélisme. Bandai est également connue pour ses figurines Tamashii Nations qui comprennent plusieurs collections comme Robot Spirits et Figuarts ZERO.',
      type: 'Standard',
      country: 'Japon',
      foundedYear: 1950,
      headquarters: 'Tokyo, Japon',
      website: 'https://www.bandai.com',
      tags: ['Gundam', 'S.H.Figuarts', 'Anime', 'Manga', 'Dragon Ball', 'Kamen Rider'],
      figurineCount: 2187,
      rating: 4.2,
      socialLinks: {
        facebook: 'https://facebook.com/bandai',
        twitter: 'https://twitter.com/bandai_jp',
        instagram: 'https://instagram.com/bandai_hobby',
        youtube: 'https://youtube.com/bandai',
      },
      timeline: [
        { year: 1950, event: 'Fondation de Bandai' },
        { year: 1980, event: 'Lancement des premiers kits Gundam' },
        { year: 1993, event: 'Fusion avec Namco pour former Bandai Namco' },
        { year: 2008, event: 'Lancement de la ligne S.H.Figuarts' },
        { year: 2015, event: 'Célébration du 35e anniversaire de Gundam' },
      ],
      series: [
        { id: '104', name: 'S.H.Figuarts', figurineCount: 850, image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '105', name: 'Gunpla', figurineCount: 1200, image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '106', name: 'Figuarts ZERO', figurineCount: 137, image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      ],
      topFigurines: [
        { id: '205', name: 'Dragon Ball: S.H.Figuarts Son Goku Ultra Instinct', image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 6500, rating: 4.5, releaseDate: '2021-05-15' },
        { id: '206', name: 'Gundam: Perfect Grade Unleashed RX-78-2', image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 25000, rating: 4.8, releaseDate: '2020-11-30' },
        { id: '207', name: 'One Piece: Figuarts ZERO Monkey D. Luffy Gear 4', image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 8800, rating: 4.3, releaseDate: '2022-01-15' },
      ],
      reviews: [
        { id: '305', user: 'GundamBuilder', rating: 5, comment: 'Les kits Gunpla sont imbattables. Parfaits pour les débutants comme pour les experts.', date: '2023-11-02' },
        { id: '306', user: 'DBZFanatic', rating: 4, comment: 'Figurines Dragon Ball de très bonne qualité. Articulations parfois un peu fragiles.', date: '2023-10-18' },
        { id: '307', user: 'TokyoCollector', rating: 3, comment: 'Qualité variable selon les gammes, mais généralement bon rapport qualité/prix.', date: '2023-09-25' },
      ]
    },
    {
      id: '3',
      name: 'Kotobukiya',
      logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      description: 'Kotobukiya est un fabricant japonais spécialisé dans les figurines et maquettes de haute qualité. Fondée en 1953, la société s\'est d\'abord concentrée sur les jouets avant de se spécialiser dans les modèles à assembler et les figurines statiques. Connue pour ses séries ARTFX et ARTFX J, Kotobukiya propose des figurines détaillées basées sur des personnages d\'anime, de jeux vidéo, de films et de comics. Leur ligne Frame Arms propose également des modèles de mecha personnalisables très populaires parmi les amateurs de modélisme.',
      type: 'Premium',
      country: 'Japon',
      foundedYear: 1953,
      headquarters: 'Tokyo, Japon',
      website: 'https://www.kotobukiya.co.jp',
      tags: ['ARTFX', 'Bishoujo', 'Frame Arms', 'Modèles à assembler', 'Comics', 'Jeux Vidéo'],
      figurineCount: 856,
      rating: 4.5,
      socialLinks: {
        facebook: 'https://facebook.com/kotobukiya',
        twitter: 'https://twitter.com/kotobukiya',
        instagram: 'https://instagram.com/kotobukiya_official',
        youtube: 'https://youtube.com/kotobukiyachannel',
      },
      timeline: [
        { year: 1953, event: 'Fondation de Kotobukiya en tant que magasin de jouets' },
        { year: 1985, event: 'Début de la production de figurines originales' },
        { year: 2003, event: 'Lancement de la série ARTFX' },
        { year: 2009, event: 'Création des figurines Bishoujo avec Shunya Yamashita' },
        { year: 2015, event: 'Introduction de la ligne Cu-poche de figurines chibi articulées' },
      ],
      series: [
        { id: '107', name: 'ARTFX', figurineCount: 320, image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '108', name: 'Bishoujo', figurineCount: 180, image: 'https://images.unsplash.com/photo-1517022812141-23620dba5c23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
        { id: '109', name: 'Frame Arms', figurineCount: 95, image: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
      ],
      topFigurines: [
        { id: '208', name: 'Marvel: ARTFX Premier Iron Man', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 18000, rating: 4.6, releaseDate: '2021-10-20' },
        { id: '209', name: 'DC Comics: Batwoman Bishoujo Statue', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 12500, rating: 4.7, releaseDate: '2020-09-15' },
        { id: '210', name: 'Frame Arms: Baselard', image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', price: 7800, rating: 4.4, releaseDate: '2022-03-10' },
      ],
      reviews: [
        { id: '308', user: 'StatueAddict', rating: 5, comment: 'Les finitions sont impeccables sur tous leurs produits ARTFX Premier', date: '2023-11-05' },
        { id: '309', user: 'ComicsFan', rating: 4, comment: 'Collection Bishoujo superbe, petit bémol sur les emballages un peu fragiles', date: '2023-10-12' },
        { id: '310', user: 'MechaBuilder', rating: 5, comment: 'Frame Arms est une révélation! Tellement de possibilités de personnalisation', date: '2023-09-30' },
      ]
    }
  ];
  
  const manufacturer = manufacturers.find(m => m.id === manufacturerId);
  
  if (!manufacturer) {
    throw new Error("Fabricant non trouvé");
  }
  
  return manufacturer;
};

// Composant pour afficher la note moyenne
const RatingDisplay = ({ rating }: { rating: number }) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
  for (let i = 0; i < fullStars; i++) {
    stars.push(<Star key={`full-${i}`} className="h-5 w-5 fill-yellow-400 text-yellow-400" />);
  }
  
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="relative">
        <Star className="h-5 w-5 text-yellow-400" />
        <div className="absolute inset-0 overflow-hidden w-1/2">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        </div>
      </div>
    );
  }
  
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<Star key={`empty-${i}`} className="h-5 w-5 text-gray-300" />);
  }
  
  return (
    <div className="flex items-center">
      {stars}
      <span className="ml-2 text-lg font-medium">({rating.toFixed(1)})</span>
    </div>
  );
};

// Composant pour afficher une chronologie
const Timeline = ({ events }: { events: { year: number; event: string }[] }) => {
  return (
    <div className="relative border-l border-gray-300 ml-3 mt-6 mb-8">
      {events.map((item, index) => (
        <div key={index} className="mb-8 ml-6">
          <div className="absolute w-3 h-3 bg-figuverse-red rounded-full mt-1.5 -left-1.5 border border-white"></div>
          <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.year}</time>
          <p className="text-base font-medium">{item.event}</p>
        </div>
      ))}
    </div>
  );
};

// Composant pour afficher un avis utilisateur
const Review = ({ review }: { review: { user: string; rating: number; comment: string; date: string } }) => {
  const reviewDate = new Date(review.date);
  const formattedDate = reviewDate.toLocaleDateString('fr-FR', { 
    day: 'numeric', 
    month: 'long', 
    year: 'numeric' 
  });
  
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
      />
    );
  }
  
  return (
    <div className="border-b border-gray-200 pb-4 mb-4 last:border-0">
      <div className="flex items-center justify-between mb-2">
        <div>
          <p className="font-medium">{review.user}</p>
          <div className="flex items-center mt-1">
            {stars}
          </div>
        </div>
        <time className="text-sm text-gray-500">{formattedDate}</time>
      </div>
      <p className="text-gray-600 mt-2">{review.comment}</p>
    </div>
  );
};

const ManufacturerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  
  // S'assurer que l'ID est correctement passé à la requête
  const { data: manufacturer, isLoading, error } = useQuery({
    queryKey: ['manufacturer', id],
    queryFn: () => {
      if (!id) {
        throw new Error("ID de fabricant manquant");
      }
      return fetchManufacturerDetails(id);
    },
    meta: {
      onError: (error: Error) => {
        toast({
          title: "Erreur",
          description: error.message || "Impossible de charger les détails de ce fabricant.",
          variant: "destructive"
        });
      }
    }
  });
  
  if (isLoading) {
    return (
      <>
        <Header />
        <main className="section-container py-10">
          <div className="flex justify-center items-center h-64">
            <p>Chargement des informations du fabricant...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  if (error || !manufacturer) {
    return (
      <>
        <Header />
        <main className="section-container py-10">
          <div className="text-center my-12">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Fabricant non trouvé</h2>
            <p className="mb-6">Nous n'avons pas trouvé le fabricant que vous recherchez.</p>
            <Link to="/fabricants">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à la liste des fabricants
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main>
        {/* Bannière avec logo */}
        <div className="relative h-80 w-full bg-gradient-to-r from-purple-700 to-indigo-900 overflow-hidden">
          {manufacturer.bannerImage && (
            <img
              src={manufacturer.bannerImage}
              alt={`Bannière ${manufacturer.name}`}
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
          )}
          
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          
          <div className="relative flex items-center justify-center h-full px-6">
            <div className="text-center">
              <div className="bg-white rounded-full p-4 shadow-lg inline-block mb-4">
                <img
                  src={manufacturer.logo}
                  alt={manufacturer.name}
                  className="h-24 w-24 object-contain"
                />
              </div>
              <h1 className="text-4xl font-bold text-white">{manufacturer.name}</h1>
              <div className="flex items-center justify-center mt-2 text-white">
                <Badge variant="secondary" className="mr-2">{manufacturer.type}</Badge>
                <Badge variant="outline" className="text-white border-white">
                  {manufacturer.country}
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Bouton retour */}
          <div className="absolute top-4 left-4">
            <Link to="/fabricants">
              <Button variant="secondary" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour
              </Button>
            </Link>
          </div>
        </div>

        {/* Contenu principal */}
        <div className="section-container py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Colonne principale */}
            <div className="lg:w-2/3">
              <Tabs defaultValue="overview" className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Présentation</TabsTrigger>
                  <TabsTrigger value="series">Gammes</TabsTrigger>
                  <TabsTrigger value="top">Top Figurines</TabsTrigger>
                  <TabsTrigger value="reviews">Avis</TabsTrigger>
                </TabsList>

                {/* Onglet Présentation */}
                <TabsContent value="overview" className="pt-6">
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold mb-4">À propos de {manufacturer.name}</h2>
                    <p className="mb-6">{manufacturer.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Informations</h3>
                        <ul className="space-y-2">
                          <li><span className="font-medium">Fondé en:</span> {manufacturer.foundedYear}</li>
                          <li><span className="font-medium">Siège social:</span> {manufacturer.headquarters}</li>
                          <li><span className="font-medium">Type:</span> {manufacturer.type}</li>
                          <li><span className="font-medium">Nombre de figurines:</span> {manufacturer.figurineCount.toLocaleString()}</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="text-lg font-medium mb-2">Note moyenne</h3>
                        <RatingDisplay rating={manufacturer.rating} />
                        <p className="mt-2 text-sm text-gray-600">Basé sur les avis des collectionneurs</p>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4">Histoire et moments clés</h3>
                    <Timeline events={manufacturer.timeline} />
                    
                    <h3 className="text-xl font-bold mb-4">Tags associés</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {manufacturer.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Onglet Gammes */}
                <TabsContent value="series" className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Gammes de {manufacturer.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {manufacturer.series.map(series => (
                      <div key={series.id} className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={series.image} 
                            alt={series.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-medium mb-1">{series.name}</h3>
                          <p className="text-gray-600">{series.figurineCount} figurines</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Onglet Top Figurines */}
                <TabsContent value="top" className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Figurines populaires de {manufacturer.name}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {manufacturer.topFigurines.map(figurine => (
                      <div key={figurine.id} className="flex flex-col sm:flex-row border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                        <div className="sm:w-1/3 h-40 sm:h-auto overflow-hidden">
                          <img 
                            src={figurine.image} 
                            alt={figurine.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="p-4 sm:w-2/3">
                          <h3 className="text-lg font-medium mb-1">{figurine.name}</h3>
                          <div className="flex items-center mb-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-4 w-4 ${i < figurine.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                              />
                            ))}
                            <span className="ml-1 text-sm">({figurine.rating})</span>
                          </div>
                          <p className="text-figuverse-red font-medium">{figurine.price.toLocaleString()} ¥</p>
                          <p className="text-sm text-gray-600 mt-1">Sortie le: {new Date(figurine.releaseDate).toLocaleDateString()}</p>
                          <Link to={`/figurine/${figurine.id}`} className="mt-2 text-sm text-blue-600 hover:underline inline-block">
                            Voir détails
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                {/* Onglet Avis */}
                <TabsContent value="reviews" className="pt-6">
                  <h2 className="text-2xl font-bold mb-6">Avis des collectionneurs</h2>
                  <div className="space-y-6">
                    {manufacturer.reviews.map(review => (
                      <Review key={review.id} review={review} />
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Colonne latérale */}
            <div className="lg:w-1/3">
              <div className="border rounded-lg p-6 mb-6 bg-gray-50">
                <h3 className="text-xl font-bold mb-4">Liens externes</h3>
                <div className="space-y-3">
                  <a 
                    href={manufacturer.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:underline"
                  >
                    <LinkIcon className="h-4 w-4 mr-2" />
                    Site officiel
                  </a>
                  {Object.entries(manufacturer.socialLinks).map(([platform, url]) => (
                    <a 
                      key={platform}
                      href={url}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:underline"
                    >
                      <LinkIcon className="h-4 w-4 mr-2" />
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Données</h3>
                <ul className="space-y-2">
                  <li className="flex justify-between">
                    <span>Total des figurines:</span>
                    <span className="font-medium">{manufacturer.figurineCount.toLocaleString()}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Note moyenne:</span>
                    <span className="font-medium">{manufacturer.rating.toFixed(1)}/5</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Pays d'origine:</span>
                    <span className="font-medium">{manufacturer.country}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Fondé en:</span>
                    <span className="font-medium">{manufacturer.foundedYear}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Gammes:</span>
                    <span className="font-medium">{manufacturer.series.length}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ManufacturerDetail;
