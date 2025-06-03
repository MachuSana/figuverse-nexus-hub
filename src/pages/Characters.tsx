
import React, { useState } from 'react';
import { Search, Filter, Grid, List, Star } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AdBanner from '@/components/AdBanner';
import AdRotator from '@/components/AdRotator';
import AdSidebar from '@/components/AdSidebar';

const Characters: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const { t } = useLanguage();

  // Mock data for characters
  const [characters, setCharacters] = useState([
    {
      id: '1',
      name: 'Goku',
      license: 'Dragon Ball',
      description: 'Le héros Saiyan le plus puissant',
      image: 'https://via.placeholder.com/150',
      figurineCount: 45,
      popularity: 5
    },
    {
      id: '2',
      name: 'Naruto Uzumaki',
      license: 'Naruto',
      description: 'Le ninja qui rêve de devenir Hokage',
      image: 'https://via.placeholder.com/150',
      figurineCount: 38,
      popularity: 5
    },
    {
      id: '3',
      name: 'Luffy',
      license: 'One Piece',
      description: 'Le capitaine au chapeau de paille',
      image: 'https://via.placeholder.com/150',
      figurineCount: 32,
      popularity: 4
    }
  ]);

  // Publicités rotatives pour les personnages
  const rotatingAds = [
    {
      title: "Figurines Goku - Collection Ultimate",
      description: "Toutes les transformations de Goku en figurines premium",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      linkUrl: "https://www.bandai.com",
      sponsor: "Bandai"
    },
    {
      title: "Naruto Shippuden - Edition limitée",
      description: "Figurines exclusives des personnages de Naruto Shippuden",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
      linkUrl: "https://www.viz.com",
      sponsor: "VIZ Media"
    }
  ];

  const sidebarAds = [
    {
      id: "1",
      title: "Goku Ultra Instinct",
      description: "Figurine Goku forme ultime",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.bandai.com",
      price: "89,99€",
      rating: 4.9
    },
    {
      id: "2",
      title: "Naruto Sage Mode",
      description: "Mode ermite - Scale 1/8",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.tsume-art.com",
      price: "159,99€",
      rating: 4.8
    },
    {
      id: "3",
      title: "Luffy Gear 5",
      description: "Nouvelle transformation - Précommande",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=200",
      linkUrl: "https://www.megahouse.co.jp",
      price: "199,99€",
      rating: 4.7
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">{t('characters')}</h1>
          <p className="text-gray-600">Explorez vos personnages favoris en figurines</p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Input
              type="text"
              placeholder="Rechercher un personnage..."
              className="mr-4"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button><Search className="h-5 w-5" /></Button>
          </div>

          <div className="flex items-center space-x-4">
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Licence" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dragonball">Dragon Ball</SelectItem>
                <SelectItem value="naruto">Naruto</SelectItem>
                <SelectItem value="onepiece">One Piece</SelectItem>
              </SelectContent>
            </Select>
            <Button><Filter className="h-5 w-5" /></Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="mb-8">
              <AdRotator 
                ads={rotatingAds}
                intervalMs={6000}
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
              {characters.map((character) => (
                <Card key={character.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="relative">
                      <img 
                        src={character.image} 
                        alt={character.name}
                        className="w-full h-48 object-cover rounded-md"
                      />
                      <Badge className="absolute top-2 right-2 bg-figuverse-red">
                        {character.figurineCount} figurines
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="text-lg mb-2">{character.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-3">
                      {character.license}
                    </CardDescription>
                    <p className="text-sm text-gray-700 mb-3">{character.description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {Array.from({ length: character.popularity }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <Button variant="outline" size="sm">
                        Voir figurines
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Button>Charger plus</Button>
            </div>
          </div>

          <div className="lg:col-span-1">
            <AdSidebar
              title="Personnages populaires"
              ads={sidebarAds}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Characters;
