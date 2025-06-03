import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManufacturerCard from '@/components/ManufacturerCard';
import AdBanner from '@/components/AdBanner';
import AdSidebar from '@/components/AdSidebar';

const Manufacturers: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  // Mock data for manufacturers
  const [manufacturers, setManufacturers] = useState([
    {
      id: '1',
      name: 'Good Smile Company',
      description: 'Fabricant japonais de figurines de haute qualité',
      logo: 'https://via.placeholder.com/150',
      figurineCount: 284,
      rating: 4.8
    },
    {
      id: '2',
      name: 'Kotobukiya',
      description: 'Spécialiste des figurines anime et manga',
      logo: 'https://via.placeholder.com/150',
      figurineCount: 192,
      rating: 4.7
    },
    {
      id: '3',
      name: 'Hot Toys',
      description: 'Figurines ultra-réalistes de films et séries',
      logo: 'https://via.placeholder.com/150',
      figurineCount: 156,
      rating: 4.9
    }
  ]);

  // Publicités pour les fabricants
  const manufacturersAds = [
    {
      title: "Good Smile Company - Nouveautés 2025",
      description: "Précommandez les dernières créations du fabricant leader",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      linkUrl: "https://www.goodsmile.info",
      sponsor: "Good Smile Company"
    }
  ];

  const sidebarAds = [
    {
      id: "1",
      title: "Nendoroid collection complète",
      description: "Plus de 100 Nendoroids disponibles",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.goodsmile.info",
      price: "1599,99€",
      rating: 4.9
    },
    {
      id: "2",
      title: "Hot Toys Iron Man",
      description: "Figure 1/6 avec éclairage LED",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.hottoys.com",
      price: "449,99€",
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('manufacturers')}</h1>
          <p className="text-gray-600">Découvrez les meilleurs fabricants de figurines</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Rechercher un fabricant..."
              className="mr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button><Search className="h-5 w-5" /></Button>
          </div>

          <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filtrer par pays" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="japan">Japon</SelectItem>
                <SelectItem value="china">Chine</SelectItem>
                <SelectItem value="usa">États-Unis</SelectItem>
              </SelectContent>
            </Select>
            <Button><Filter className="h-5 w-5" /></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <AdBanner
                title="Good Smile Company - Nouveautés 2025"
                description="Précommandez les dernières créations du fabricant leader"
                imageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                linkUrl="https://www.goodsmile.info"
                sponsor="Good Smile Company"
                size="large"
              />
            </div>

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

            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-4'}>
              {manufacturers.map((manufacturer) => (
                <ManufacturerCard
                  key={manufacturer.id}
                  id={manufacturer.id}
                  name={manufacturer.name}
                  logo={manufacturer.logo}
                  description={manufacturer.description}
                  figurineCount={manufacturer.figurineCount}
                  rating={manufacturer.rating}
                  viewStyle={viewMode}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button>Charger plus</Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AdSidebar
              title="Fabricants recommandés"
              ads={sidebarAds}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Manufacturers;
