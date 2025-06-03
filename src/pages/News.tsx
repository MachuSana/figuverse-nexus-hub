import React, { useState } from 'react';
import { Calendar, Tag, User, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsCard from '@/components/NewsCard';
import AdBanner from '@/components/AdBanner';
import AdSidebar from '@/components/AdSidebar';

// Types d'articles
const articleTypes = [
  { id: 'all', name: 'Tous' },
  { id: 'news', name: 'Actualités' },
  { id: 'review', name: 'Tests' },
  { id: 'event', name: 'Événements' },
  { id: 'preview', name: 'Avant-premières' }
];

// Licences
const licenses = [
  { id: 'all', name: 'Toutes' },
  { id: 'marvel', name: 'Marvel' },
  { id: 'dc', name: 'DC Comics' },
  { id: 'disney', name: 'Disney' },
  { id: 'starwars', name: 'Star Wars' },
  { id: 'anime', name: 'Anime' }
];

// Exemple de données d'articles
const newsData = [
  {
    id: '1',
    title: 'Nouvelle collection de figurines Marvel annoncée pour 2025',
    excerpt: 'Marvel vient d\'annoncer une nouvelle gamme de figurines premium qui sortira début 2025, incluant des personnages inédits de la phase 5 du MCU.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    date: '2025-05-07',
    category: 'news',
    license: 'marvel',
    slug: 'nouvelle-collection-marvel-2025'
  },
  {
    id: '2',
    title: 'Test: La nouvelle figurine Mandalorian de Hot Toys',
    excerpt: 'Notre test complet de la dernière figurine du Mandalorian par Hot Toys. Qualité de fabrication, articulations, accessoires, nous avons tout analysé.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    date: '2025-05-05',
    category: 'review',
    license: 'starwars',
    slug: 'test-figurine-mandalorian-hot-toys'
  },
  {
    id: '3',
    title: 'Japan Expo 2025: Les exclusivités figurines annoncées',
    excerpt: 'Découvrez toutes les figurines exclusives qui seront disponibles lors de la Japan Expo 2025. Nombreuses éditions limitées à ne pas manquer!',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    date: '2025-05-03',
    category: 'event',
    license: 'anime',
    slug: 'japan-expo-2025-exclusivites'
  },
  {
    id: '4',
    title: 'Avant-première: Les nouvelles figurines Disney Dream Series',
    excerpt: 'Nous avons pu voir en avant-première la nouvelle collection Disney Dream Series. Des pièces d\'exception qui raviront les collectionneurs.',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
    date: '2025-05-01',
    category: 'preview',
    license: 'disney',
    slug: 'avant-premiere-disney-dream-series'
  },
  {
    id: '5',
    title: 'DC Comics révèle sa nouvelle ligne de figurines articulées',
    excerpt: 'DC Comics a dévoilé aujourd\'hui sa nouvelle gamme de figurines ultra-articulées basée sur les personnages de la Justice League.',
    image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22',
    date: '2025-04-29',
    category: 'news',
    license: 'dc',
    slug: 'dc-comics-nouvelle-ligne-figurines'
  },
  {
    id: '6',
    title: 'Les 10 figurines Star Wars les plus recherchées par les collectionneurs',
    excerpt: 'Notre classement des 10 figurines Star Wars les plus rares et les plus prisées par les collectionneurs du monde entier.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    date: '2025-04-27',
    category: 'news',
    license: 'starwars',
    slug: 'top-10-figurines-star-wars-collectionneurs'
  },
];

const News: React.FC = () => {
  const { t } = useLanguage();

  // Publicités pour la page news
  const newsAds = [
    {
      title: "Magazine Figure World",
      description: "Abonnez-vous au magazine spécialisé figurines et recevez les dernières actualités",
      imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      linkUrl: "https://www.figureworld.com",
      sponsor: "Figure World"
    }
  ];

  const sidebarAds = [
    {
      id: "1",
      title: "Convention Japan Expo",
      description: "Billets en vente - 30% de réduction",
      imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.japan-expo-paris.com",
      price: "15€",
      rating: 4.9
    },
    {
      id: "2",
      title: "Cours de peinture figurines",
      description: "Apprenez les techniques professionnelles",
      imageUrl: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.figurineschool.com",
      price: "89€"
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLicense, setSelectedLicense] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filtrer les articles
  const filteredNews = newsData.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || article.category === selectedType;
    const matchesLicense = selectedLicense === 'all' || article.license === selectedLicense;
    
    return matchesSearch && matchesType && matchesLicense;
  });

  // Pagination
  const itemsPerPage = 4;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredNews.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Actualités Figurines</h1>
        
        {/* Filtres */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Rechercher..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <Filter className="text-gray-400 h-4 w-4" />
            <Select value={selectedType} onValueChange={(value) => setSelectedType(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Type d'article" />
              </SelectTrigger>
              <SelectContent>
                {articleTypes.map((type) => (
                  <SelectItem key={type.id} value={type.id}>
                    {type.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex items-center space-x-2">
            <Calendar className="text-gray-400 h-4 w-4" />
            <Select value={selectedLicense} onValueChange={(value) => setSelectedLicense(value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Licence" />
              </SelectTrigger>
              <SelectContent>
                {licenses.map((license) => (
                  <SelectItem key={license.id} value={license.id}>
                    {license.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
        
        {/* Filtres actifs */}
        {(selectedType !== 'all' || selectedLicense !== 'all' || searchTerm) && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedType !== 'all' && (
              <Badge variant="outline" className="bg-gray-100">
                {articleTypes.find(t => t.id === selectedType)?.name}
                <button className="ml-1" onClick={() => setSelectedType('all')}>×</button>
              </Badge>
            )}
            {selectedLicense !== 'all' && (
              <Badge variant="outline" className="bg-gray-100">
                {licenses.find(l => l.id === selectedLicense)?.name}
                <button className="ml-1" onClick={() => setSelectedLicense('all')}>×</button>
              </Badge>
            )}
            {searchTerm && (
              <Badge variant="outline" className="bg-gray-100">
                "{searchTerm}"
                <button className="ml-1" onClick={() => setSearchTerm('')}>×</button>
              </Badge>
            )}
          </div>
        )}
        
        {/* Liste d'actualités */}
        {currentItems.length === 0 ? (
          <Card className="my-8">
            <CardContent className="flex items-center justify-center py-12">
              <p className="text-gray-500 text-center">
                Aucune actualité ne correspond à votre recherche.<br />
                Essayez avec d'autres critères.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
            {currentItems.map((article) => (
              <NewsCard
                key={article.id}
                id={article.id}
                title={article.title}
                excerpt={article.excerpt}
                image={article.image}
                date={article.date}
                category={article.category}
                slug={article.slug}
              />
            ))}
          </div>
        )}
        
        {/* Publicité avant les actualités */}
        <div className="mb-8">
          <AdBanner
            title={newsAds[0].title}
            description={newsAds[0].description}
            imageUrl={newsAds[0].imageUrl}
            linkUrl={newsAds[0].linkUrl}
            sponsor={newsAds[0].sponsor}
            size="medium"
          />
        </div>
        
        {/* Pagination */}
        {filteredNews.length > itemsPerPage && (
          <Pagination className="my-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => currentPage > 1 && paginate(currentPage - 1)} 
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    isActive={currentPage === index + 1} 
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => currentPage < totalPages && paginate(currentPage + 1)} 
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default News;
