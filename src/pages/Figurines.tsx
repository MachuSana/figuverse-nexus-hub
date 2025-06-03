
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FigurineCard from '@/components/FigurineCard';
import AdBanner from '@/components/AdBanner';
import AdSidebar from '@/components/AdSidebar';

const Figurines: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  // Mock data for figurines
  const [figurines, setFigurines] = useState([
    {
      id: '1',
      name: 'Premium Figure',
      character: 'Figurine 1',
      license: 'License A',
      manufacturer: 'Manufacturer X',
      price: 49.99,
      currency: '€',
      image: 'https://via.placeholder.com/150',
      releaseDate: '2025-06-15',
      isNew: true
    },
    {
      id: '2',
      name: 'Special Edition',
      character: 'Figurine 2',
      license: 'License B',
      manufacturer: 'Manufacturer Y',
      price: 59.99,
      currency: '€',
      image: 'https://via.placeholder.com/150',
      releaseDate: '2025-07-01'
    },
    {
      id: '3',
      name: 'Limited Edition',
      character: 'Figurine 3',
      license: 'License A',
      manufacturer: 'Manufacturer Z',
      price: 69.99,
      currency: '€',
      image: 'https://via.placeholder.com/150',
      releaseDate: '2025-08-15'
    },
    {
      id: '4',
      name: 'Collector\'s Edition',
      character: 'Figurine 4',
      license: 'License C',
      manufacturer: 'Manufacturer X',
      price: 79.99,
      currency: '€',
      image: 'https://via.placeholder.com/150',
      releaseDate: '2025-09-01'
    },
    {
      id: '5',
      name: 'Deluxe Figure',
      character: 'Figurine 5',
      license: 'License B',
      manufacturer: 'Manufacturer Y',
      price: 89.99,
      currency: '€',
      image: 'https://via.placeholder.com/150',
      releaseDate: '2025-10-15'
    },
    {
      id: '6',
      name: 'Master Grade',
      character: 'Figurine 6',
      license: 'License C',
      manufacturer: 'Manufacturer Z',
      price: 99.99,
      currency: '€',
      image: 'https://via.placeholder.com/150',
      releaseDate: '2025-11-01'
    }
  ]);

  // Publicités contextuelles pour la page figurines
  const figurinesAds = [
    {
      title: "HobbyLink Japan - Figurines exclusives",
      description: "Découvrez les dernières figurines japonaises en précommande avec des prix exclusifs",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      linkUrl: "https://www.hlj.com",
      sponsor: "HobbyLink Japan"
    },
    {
      title: "AmiAmi - Spécialiste figurines",
      description: "Le plus grand choix de figurines anime et manga au meilleur prix",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      linkUrl: "https://www.amiami.com",
      sponsor: "AmiAmi"
    }
  ];

  const sidebarAds = [
    {
      id: "1",
      title: "Figurine Nezuko Demon Slayer",
      description: "Scale 1/7 par Good Smile Company",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.goodsmile.info",
      price: "149,99€",
      rating: 4.8
    },
    {
      id: "2",
      title: "Nendoroid Goku",
      description: "Dragon Ball Z - Version Super Saiyan",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.goodsmile.info",
      price: "59,99€",
      rating: 4.9
    },
    {
      id: "3",
      title: "Figurine Makima Chainsaw Man",
      description: "Scale 1/8 - Edition limitée",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.kotobukiya.co.jp",
      price: "189,99€",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('figurines')}</h1>
          <p className="text-gray-600">{t('discover_our_figurines')}</p>
        </div>

        {/* Search and Filters */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder={t('search_figurines')}
              className="mr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button><Search className="h-5 w-5" /></Button>
          </div>

          <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={t('sort_by')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">{t('name')}</SelectItem>
                <SelectItem value="price">{t('price')}</SelectItem>
              </SelectContent>
            </Select>

            <Button><Filter className="h-5 w-5" /></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Publicité en haut de page */}
            <div className="mb-8">
              <AdBanner
                title="HobbyLink Japan - Figurines exclusives"
                description="Découvrez les dernières figurines japonaises en précommande avec des prix exclusifs"
                imageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                linkUrl="https://www.hlj.com"
                sponsor="HobbyLink Japan"
                size="large"
              />
            </div>

            {/* View Toggle */}
            <div className="flex justify-end mb-4">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-5 w-5" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
              >
                <List className="h-5 w-5" />
              </Button>
            </div>

            {/* Figurines Grid/List */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
              {figurines.map((figurine) => (
                <FigurineCard
                  key={figurine.id}
                  id={figurine.id}
                  name={figurine.name}
                  character={figurine.character}
                  license={figurine.license}
                  manufacturer={figurine.manufacturer}
                  price={figurine.price}
                  currency={figurine.currency}
                  image={figurine.image}
                  releaseDate={figurine.releaseDate}
                  isNew={figurine.isNew}
                />
              ))}
            </div>

            {/* Publicité au milieu du contenu */}
            <div className="my-12">
              <AdBanner
                title="AmiAmi - Spécialiste figurines"
                description="Le plus grand choix de figurines anime et manga au meilleur prix"
                imageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                linkUrl="https://www.amiami.com"
                sponsor="AmiAmi"
                size="medium"
              />
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <Button>{t('load_more')}</Button>
            </div>
          </div>

          {/* Sidebar with Ads */}
          <div className="lg:col-span-1">
            <AdSidebar
              title="Figurines populaires"
              ads={[
                {
                  id: "1",
                  title: "Figurine Nezuko Demon Slayer",
                  description: "Scale 1/7 par Good Smile Company",
                  imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
                  linkUrl: "https://www.goodsmile.info",
                  price: "149,99€",
                  rating: 4.8
                },
                {
                  id: "2",
                  title: "Nendoroid Goku",
                  description: "Dragon Ball Z - Version Super Saiyan",
                  imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
                  linkUrl: "https://www.goodsmile.info",
                  price: "59,99€",
                  rating: 4.9
                },
                {
                  id: "3",
                  title: "Figurine Makima Chainsaw Man",
                  description: "Scale 1/8 - Edition limitée",
                  imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
                  linkUrl: "https://www.kotobukiya.co.jp",
                  price: "189,99€",
                  rating: 4.7
                }
              ]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Figurines;
