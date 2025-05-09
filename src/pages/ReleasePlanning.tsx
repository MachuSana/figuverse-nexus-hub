
import React, { useState } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, parseISO, isSameMonth } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, List, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import { Calendar as CalendarComponent } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ReleaseCalendar from '@/components/ReleaseCalendar';
import ReleaseList from '@/components/ReleaseList';

// Sample data for releases
const releasesData = [
  {
    id: '1',
    character: 'Spider-Man',
    name: 'Amazing Spider-Man',
    manufacturer: 'Hot Toys',
    license: 'Marvel',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    releaseDate: '2025-06-15',
    price: 349.99,
    currency: '€',
    series: 'Marvel Cinematic Universe'
  },
  {
    id: '2',
    character: 'Darth Vader',
    name: 'The Dark Lord',
    manufacturer: 'Sideshow',
    license: 'Star Wars',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    releaseDate: '2025-06-22',
    price: 399.99,
    currency: '€',
    series: 'Star Wars Black Series'
  },
  {
    id: '3',
    character: 'Link',
    name: 'Breath of the Wild',
    manufacturer: 'Good Smile Company',
    license: 'Nintendo',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9',
    releaseDate: '2025-07-10',
    price: 199.99,
    currency: '€',
    series: 'Figma'
  },
  {
    id: '4',
    character: 'Neo',
    name: 'The Chosen One',
    manufacturer: 'Hot Toys',
    license: 'Matrix',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5',
    releaseDate: '2025-07-05',
    price: 299.99,
    currency: '€',
    series: 'Movie Masterpiece'
  },
  {
    id: '5',
    character: 'Goku',
    name: 'Ultra Instinct',
    manufacturer: 'Bandai',
    license: 'Dragon Ball',
    image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027',
    releaseDate: '2025-08-20',
    price: 89.99,
    currency: '€',
    series: 'S.H.Figuarts'
  },
  {
    id: '6',
    character: 'Hulk',
    name: 'Avengers: Endgame',
    manufacturer: 'Iron Studios',
    license: 'Marvel',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e',
    releaseDate: '2025-08-12',
    price: 249.99,
    currency: '€',
    series: 'Battle Diorama Series'
  },
];

// Get unique manufacturers and licenses for filters
const manufacturers = ['Tous', ...Array.from(new Set(releasesData.map(release => release.manufacturer)))];
const licenses = ['Toutes', ...Array.from(new Set(releasesData.map(release => release.license)))];

const ReleasePlanning: React.FC = () => {
  // State for current view mode (calendar or list)
  const [viewMode, setViewMode] = useState<'calendar' | 'list'>('calendar');
  
  // State for current month
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  
  // State for filters
  const [selectedManufacturer, setSelectedManufacturer] = useState<string>('Tous');
  const [selectedLicense, setSelectedLicense] = useState<string>('Toutes');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Get first and last day of selected month
  const firstDayOfMonth = startOfMonth(currentDate);
  const lastDayOfMonth = endOfMonth(currentDate);
  
  // Navigation for months
  const goToPreviousMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToNextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  
  // Format the month name
  const formattedMonth = format(currentDate, 'MMMM yyyy', { locale: fr });
  
  // Filter releases based on selected filters
  const filteredReleases = releasesData.filter(release => {
    const releaseDate = parseISO(release.releaseDate);
    const matchesMonth = isSameMonth(releaseDate, currentDate);
    const matchesManufacturer = selectedManufacturer === 'Tous' || release.manufacturer === selectedManufacturer;
    const matchesLicense = selectedLicense === 'Toutes' || release.license === selectedLicense;
    const matchesSearch = searchQuery === '' || 
                          release.character.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          release.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesMonth && matchesManufacturer && matchesLicense && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Planning des sorties</h1>
      
      {/* Filters */}
      <Card className="mb-6">
        <CardContent className="p-6">
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            {/* Search input */}
            <div className="relative flex-grow">
              <Input
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            </div>
            
            {/* Manufacturer filter */}
            <div className="w-full md:w-64">
              <Select value={selectedManufacturer} onValueChange={setSelectedManufacturer}>
                <SelectTrigger>
                  <SelectValue placeholder="Fabricant" />
                </SelectTrigger>
                <SelectContent>
                  {manufacturers.map((manufacturer) => (
                    <SelectItem key={manufacturer} value={manufacturer}>
                      {manufacturer}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* License filter */}
            <div className="w-full md:w-64">
              <Select value={selectedLicense} onValueChange={setSelectedLicense}>
                <SelectTrigger>
                  <SelectValue placeholder="Licence" />
                </SelectTrigger>
                <SelectContent>
                  {licenses.map((license) => (
                    <SelectItem key={license} value={license}>
                      {license}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            {/* Date picker */}
            <div className="w-full md:w-auto">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className="justify-start w-full md:w-auto">
                    <Calendar className="mr-2 h-4 w-4" />
                    {formattedMonth}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <CalendarComponent
                    mode="single"
                    selected={currentDate}
                    onSelect={(date) => date && setCurrentDate(date)}
                    initialFocus
                    className="p-3 pointer-events-auto"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* View mode switcher and month navigation */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex space-x-2">
          <Tabs value={viewMode} onValueChange={(value) => setViewMode(value as 'calendar' | 'list')}>
            <TabsList>
              <TabsTrigger value="calendar">
                <Calendar className="h-4 w-4 mr-2" />
                Calendrier
              </TabsTrigger>
              <TabsTrigger value="list">
                <List className="h-4 w-4 mr-2" />
                Liste
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="icon" onClick={goToPreviousMonth}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="font-medium capitalize">{formattedMonth}</span>
          <Button variant="outline" size="icon" onClick={goToNextMonth}>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {/* Content based on view mode */}
      {viewMode === 'calendar' ? (
        <ReleaseCalendar 
          releases={filteredReleases} 
          title={`Sorties de ${formattedMonth}`} 
        />
      ) : (
        <ReleaseList 
          releases={filteredReleases} 
          title={`Sorties de ${formattedMonth}`} 
        />
      )}
      
      {filteredReleases.length === 0 && (
        <Card className="my-8">
          <CardContent className="flex items-center justify-center py-12">
            <p className="text-gray-500 text-center">
              Aucune sortie prévue pour la période sélectionnée.<br />
              Essayez avec d'autres critères de recherche.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ReleasePlanning;
