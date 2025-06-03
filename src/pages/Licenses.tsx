
import React, { useState } from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LicenseCard from '@/components/LicenseCard';
import AdBanner from '@/components/AdBanner';
import AdSidebar from '@/components/AdSidebar';

const Licenses: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  // Mock data for licenses
  const [licenses, setLicenses] = useState([
    {
      id: '1',
      name: 'Marvel',
      description: 'Univers Marvel avec tous vos super-héros préférés',
      image: 'https://via.placeholder.com/150',
      figurineCount: 152
    },
    {
      id: '2',
      name: 'Dragon Ball',
      description: 'L\'univers légendaire de Goku et ses amis',
      image: 'https://via.placeholder.com/150',
      figurineCount: 89
    },
    {
      id: '3',
      name: 'One Piece',
      description: 'Suivez Luffy dans sa quête du One Piece',
      image: 'https://via.placeholder.com/150',
      figurineCount: 76
    }
  ]);

  // Publicités pour les licences
  const licensesAds = [
    {
      title: "Crunchyroll Store - Figurines anime exclusives",
      description: "Découvrez les figurines officielles de vos animes favoris",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      linkUrl: "https://store.crunchyroll.com",
      sponsor: "Crunchyroll"
    }
  ];

  const sidebarAds = [
    {
      id: "1",
      title: "Licence Marvel complete",
      description: "Toutes les figurines Marvel en un lot",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.marvel.com",
      price: "899,99€",
      rating: 4.9
    },
    {
      id: "2", 
      title: "Dragon Ball Super collection",
      description: "Figurines DBS - Edition limitée",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.dragonball.com",
      price: "299,99€",
      rating: 4.8
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('licenses')}</h1>
          <p className="text-gray-600">Explorez toutes les licences de figurines disponibles</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Rechercher une licence..."
              className="mr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button><Search className="h-5 w-5" /></Button>
          </div>

          <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Trier par" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Nom</SelectItem>
                <SelectItem value="popularity">Popularité</SelectItem>
              </SelectContent>
            </Select>
            <Button><Filter className="h-5 w-5" /></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <AdBanner
                title="Crunchyroll Store - Figurines anime exclusives"
                description="Découvrez les figurines officielles de vos animes favoris"
                imageUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800"
                linkUrl="https://store.crunchyroll.com"
                sponsor="Crunchyroll"
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
              {licenses.map((license) => (
                <LicenseCard
                  key={license.id}
                  id={license.id}
                  name={license.name}
                  description={license.description}
                  image={license.image}
                  figurineCount={license.figurineCount}
                />
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button>Charger plus</Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AdSidebar
              title="Licences populaires"
              ads={sidebarAds}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Licenses;
