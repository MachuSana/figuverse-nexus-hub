
import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Facebook, Instagram, Twitter, Youtube, Link, Share, ChevronRight } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FigurineCard from '@/components/FigurineCard';

// Mock function to fetch license details
const fetchLicenseDetails = async (id: string) => {
  // This would be an API call in a real application
  const licenses = [
    { 
      id: '1', 
      name: 'One Piece', 
      studio: 'Toei Animation', 
      type: 'Anime/Manga', 
      description: 'One Piece raconte les aventures de Monkey D. Luffy, un jeune homme dont le corps a acquis les propriétés du caoutchouc après avoir mangé un fruit du démon. Avec son équipage de pirates, il explore Grand Line à la recherche du trésor ultime connu sous le nom de "One Piece" afin de devenir le prochain Roi des Pirates.',
      tags: ['Shonen', 'Aventure', 'Pirates', 'Fantasy'],
      figurineCount: 245, 
      image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      socialLinks: {
        facebook: 'https://facebook.com/onepieceofficial',
        twitter: 'https://twitter.com/onepieceofficial',
        instagram: 'https://instagram.com/onepieceofficial',
        youtube: 'https://youtube.com/onepieceofficial',
        website: 'https://one-piece.com'
      },
      timeline: [
        { year: 1997, event: 'Début du manga dans Weekly Shōnen Jump' },
        { year: 1999, event: 'Début de l\'anime TV par Toei Animation' },
        { year: 2000, event: 'Premier film One Piece' },
        { year: 2011, event: 'Timeskip dans l\'histoire' },
        { year: 2019, event: 'Série Netflix annoncée' },
        { year: 2023, event: 'Début de la série live-action Netflix' }
      ],
      characters: [
        { id: '101', name: 'Monkey D. Luffy', role: 'Capitaine', image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3' },
        { id: '102', name: 'Roronoa Zoro', role: 'Bretteur', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3' },
        { id: '103', name: 'Nami', role: 'Navigatrice', image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3' },
        { id: '104', name: 'Usopp', role: 'Tireur', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3' }
      ],
      news: [
        { id: '201', title: 'Nouvel arc annoncé pour 2024', date: '2023-12-15', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5' },
        { id: '202', title: 'Figurine collector de Luffy Gear 5', date: '2023-11-20', image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05',
        'https://images.unsplash.com/photo-1466442929976-97f336a657be'
      ],
      figurines: [
        { id: '301', name: 'Luffy Gear 4', series: 'Figuarts ZERO', price: 89.99, image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b1f' },
        { id: '302', name: 'Zoro Three Sword Style', series: 'Portrait of Pirates', price: 129.99, image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516' },
        { id: '303', name: 'Nami Cat Burglar', series: 'Variable Action Heroes', price: 99.99, image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7' }
      ]
    },
    { 
      id: '2', 
      name: 'Naruto', 
      studio: 'Pierrot', 
      type: 'Anime/Manga', 
      description: 'Naruto suit l\'histoire de Naruto Uzumaki, un jeune ninja qui recherche la reconnaissance de ses pairs et rêve de devenir Hokage, le chef de son village. L\'histoire est divisée en deux parties, la première se déroule durant l\'adolescence de Naruto, et la seconde, après une ellipse temporelle de deux ans et demi.',
      tags: ['Shonen', 'Ninja', 'Combat', 'Aventure'],
      figurineCount: 187, 
      image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      bannerImage: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      socialLinks: {
        facebook: 'https://facebook.com/narutoofficial',
        twitter: 'https://twitter.com/narutoofficial',
        instagram: 'https://instagram.com/narutoofficial',
        youtube: 'https://youtube.com/narutoofficial',
        website: 'https://naruto.com'
      },
      timeline: [
        { year: 1999, event: 'Début du manga dans Weekly Shōnen Jump' },
        { year: 2002, event: 'Début de l\'anime TV par Studio Pierrot' },
        { year: 2007, event: 'Début de Naruto Shippuden' },
        { year: 2014, event: 'Fin du manga' },
        { year: 2017, event: 'Début de Boruto: Naruto Next Generations' }
      ],
      characters: [
        { id: '201', name: 'Naruto Uzumaki', role: 'Protagoniste', image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b1f?ixlib=rb-4.0.3' },
        { id: '202', name: 'Sasuke Uchiha', role: 'Rival/Ami', image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3' },
        { id: '203', name: 'Sakura Haruno', role: 'Coéquipière', image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3' }
      ],
      news: [
        { id: '301', title: 'Nouveau jeu Naruto annoncé', date: '2023-10-15', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5' }
      ],
      gallery: [
        'https://images.unsplash.com/photo-1500673922987-e212871fec22',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05'
      ],
      figurines: [
        { id: '401', name: 'Naruto Mode Sage', series: 'G.E.M.', price: 119.99, image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b1f' },
        { id: '402', name: 'Sasuke Uchiha Rinnegan', series: 'S.H.Figuarts', price: 109.99, image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516' }
      ]
    }
  ];
  
  const license = licenses.find(l => l.id === id);
  
  if (!license) {
    throw new Error("License not found");
  }
  
  return license;
};

const LicenseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const licenseId = id || '1';  // Default to ID 1 if none provided
  
  const { data: license, isLoading, error } = useQuery({
    queryKey: ['license', licenseId],
    queryFn: () => fetchLicenseDetails(licenseId)
  });
  
  if (isLoading) {
    return (
      <>
        <Header />
        <main className="section-container min-h-screen">
          <div className="flex justify-center items-center h-96">
            <p className="text-xl">Chargement des détails de la licence...</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  if (error || !license) {
    return (
      <>
        <Header />
        <main className="section-container min-h-screen">
          <div className="flex flex-col justify-center items-center h-96">
            <h1 className="text-2xl font-bold text-red-500">Erreur</h1>
            <p className="mt-4">Impossible de charger les détails de cette licence.</p>
          </div>
        </main>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Header />
      
      {/* Banner Section */}
      <div 
        className="relative h-80 md:h-96 w-full bg-cover bg-center flex items-end"
        style={{ backgroundImage: `url(${license.bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="section-container relative z-10 pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2">{license.name}</h1>
          <div className="flex items-center">
            <span className="text-white/90">{license.studio}</span>
            <span className="mx-2 text-white/70">•</span>
            <span className="bg-white/30 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
              {license.type}
            </span>
            <span className="ml-4 text-white/90">
              <strong>{license.figurineCount}</strong> figurines
            </span>
          </div>
        </div>
      </div>
      
      <main className="section-container py-8">
        {/* Social Media and Share Links */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex space-x-3">
            {license.socialLinks.facebook && (
              <a href={license.socialLinks.facebook} target="_blank" rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#1877f2] hover:bg-opacity-80 flex items-center justify-center text-white">
                <Facebook size={18} />
              </a>
            )}
            {license.socialLinks.twitter && (
              <a href={license.socialLinks.twitter} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#1da1f2] hover:bg-opacity-80 flex items-center justify-center text-white">
                <Twitter size={18} />
              </a>
            )}
            {license.socialLinks.instagram && (
              <a href={license.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-r from-[#405de6] to-[#e1306c] hover:bg-opacity-80 flex items-center justify-center text-white">
                <Instagram size={18} />
              </a>
            )}
            {license.socialLinks.youtube && (
              <a href={license.socialLinks.youtube} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#ff0000] hover:bg-opacity-80 flex items-center justify-center text-white">
                <Youtube size={18} />
              </a>
            )}
            {license.socialLinks.website && (
              <a href={license.socialLinks.website} target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center text-white">
                <Link size={18} />
              </a>
            )}
          </div>
          <Button variant="outline" size="sm" className="flex items-center">
            <Share size={16} className="mr-2" /> Partager
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Description and Tags */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">À propos</h2>
              <p className="text-gray-700 mb-6">{license.description}</p>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {license.tags.map((tag, index) => (
                  <span key={index} className="bg-figuverse-gray-200 text-sm px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Timeline Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold mb-6">Chronologie</h2>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-figuverse-gray-200"></div>
                
                {/* Timeline events */}
                <div className="space-y-8 relative">
                  {license.timeline.map((item, index) => (
                    <div key={index} className="ml-12 relative">
                      {/* Circle marker */}
                      <div className="absolute -left-12 mt-1.5 w-8 h-8 rounded-full bg-figuverse-red text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <div className="bg-figuverse-gray-100 p-4 rounded-lg">
                        <h4 className="font-bold">{item.year}</h4>
                        <p>{item.event}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Characters Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Personnages principaux</h2>
                <Button variant="ghost" size="sm" className="text-figuverse-red">
                  Tous les personnages <ChevronRight size={16} />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {license.characters.map(character => (
                  <div key={character.id} className="text-center">
                    <div className="w-full aspect-square rounded-full overflow-hidden mb-3">
                      <img 
                        src={character.image} 
                        alt={character.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h4 className="font-semibold">{character.name}</h4>
                    <p className="text-sm text-gray-600">{character.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - News, Gallery, Figurines */}
          <div>
            {/* News Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Actualités</h2>
                <Button variant="ghost" size="sm" className="text-figuverse-red">
                  Toutes les news <ChevronRight size={16} />
                </Button>
              </div>
              
              <div className="space-y-4">
                {license.news.map(newsItem => (
                  <div key={newsItem.id} className="flex gap-3">
                    <div className="w-20 h-16 overflow-hidden rounded-md">
                      <img 
                        src={newsItem.image} 
                        alt={newsItem.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm hover:text-figuverse-red cursor-pointer">
                        {newsItem.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{newsItem.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gallery Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Galerie</h2>
                <Button variant="ghost" size="sm" className="text-figuverse-red">
                  Voir tout <ChevronRight size={16} />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {license.gallery.slice(0, 4).map((image, index) => (
                  <div key={index} className="aspect-square rounded-md overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Figurines Carousel Section */}
        <div className="mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Figurines de la licence</h2>
            <Button variant="outline" className="text-figuverse-red border-figuverse-red">
              Toutes les figurines <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: true
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {license.figurines.map(figurine => (
                <CarouselItem key={figurine.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <FigurineCard 
                    id={figurine.id} 
                    name={figurine.name} 
                    character={figurine.name}  // Use name as character since it's required
                    license={license.name}
                    manufacturer={figurine.series || "Unknown"} // Map series to manufacturer
                    price={figurine.price}
                    currency="€"
                    image={figurine.image}
                    isNew={false}
                    isFavorite={false}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 md:-left-4" />
            <CarouselNext className="right-0 md:-right-4" />
          </Carousel>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default LicenseDetail;
