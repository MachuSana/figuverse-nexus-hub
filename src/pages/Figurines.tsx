
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Search, X, SlidersHorizontal, Grid, List } from 'lucide-react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FigurineCard from '@/components/FigurineCard';
import { Button } from '@/components/ui/button';

// Mock data
const figurines = [
  {
    id: '1',
    name: 'Nendoroid',
    character: 'Gojo Satoru',
    license: 'Jujutsu Kaisen',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzMzM4Mg&ixlib=rb-4.0.3&q=80&w=1080',
    isNew: true
  },
  {
    id: '2',
    name: 'Pop Up Parade',
    character: 'Levi Ackerman',
    license: 'Attack on Titan',
    manufacturer: 'Good Smile Company',
    price: 42.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk4NA&ixlib=rb-4.0.3&q=80&w=1080',
    isFavorite: true
  },
  {
    id: '3',
    name: 'Figma',
    character: 'Eren Yeager',
    license: 'Attack on Titan',
    manufacturer: 'Max Factory',
    price: 89.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM0NQ&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '4',
    name: 'Nendoroid',
    character: 'Tanjiro Kamado',
    license: 'Demon Slayer',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk0MA&ixlib=rb-4.0.3&q=80&w=1080',
    isNew: true
  },
  {
    id: '5',
    name: 'Scale Figure',
    character: 'Makima',
    license: 'Chainsaw Man',
    manufacturer: 'Kotobukiya',
    price: 149.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM2Ng&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '6',
    name: 'Scale Figure',
    character: 'Asuna',
    license: 'Sword Art Online',
    manufacturer: 'Aniplex',
    price: 219.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzMzQzNg&ixlib=rb-4.0.3&q=80&w=1080',
    isFavorite: true
  },
  {
    id: '7',
    name: 'Nendoroid',
    character: 'Miku Nakano',
    license: 'The Quintessential Quintuplets',
    manufacturer: 'Good Smile Company',
    price: 54.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzNzExOA&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '8',
    name: 'Scale Figure',
    character: 'Zero Two',
    license: 'Darling in the Franxx',
    manufacturer: 'Aniplex',
    price: 189.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTIzOTM5NQ&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '9',
    name: 'Pop Up Parade',
    character: 'Rem',
    license: 'Re:Zero',
    manufacturer: 'Good Smile Company',
    price: 39.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MDk2Mw&ixlib=rb-4.0.3&q=80&w=1080'
  },
  {
    id: '10',
    name: 'Figma',
    character: 'Saber Alter',
    license: 'Fate/Stay Night',
    manufacturer: 'Max Factory',
    price: 84.90,
    currency: '€',
    image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTI0MTAxNA&ixlib=rb-4.0.3&q=80&w=1080'
  },
];

// Filter options
const filterOptions = {
  licenses: ['Jujutsu Kaisen', 'Attack on Titan', 'Demon Slayer', 'Chainsaw Man', 'Sword Art Online', 'The Quintessential Quintuplets', 'Darling in the Franxx', 'Re:Zero', 'Fate/Stay Night'],
  manufacturers: ['Good Smile Company', 'Max Factory', 'Kotobukiya', 'Aniplex'],
  types: ['Nendoroid', 'Pop Up Parade', 'Figma', 'Scale Figure'],
  priceRanges: ['< 50€', '50€ - 100€', '100€ - 200€', '> 200€'],
};

const Figurines: React.FC = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeFilters, setActiveFilters] = useState<{ [key: string]: string[] }>({
    licenses: [],
    manufacturers: [],
    types: [],
    priceRanges: [],
  });

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const toggleFilterItem = (category: string, value: string) => {
    setActiveFilters(prev => {
      const currentFilters = [...prev[category]];
      const index = currentFilters.indexOf(value);
      
      if (index === -1) {
        currentFilters.push(value);
      } else {
        currentFilters.splice(index, 1);
      }
      
      return {
        ...prev,
        [category]: currentFilters
      };
    });
  };

  const clearFilters = () => {
    setActiveFilters({
      licenses: [],
      manufacturers: [],
      types: [],
      priceRanges: [],
    });
  };

  const getActiveFilterCount = () => {
    return Object.values(activeFilters).reduce((count, filters) => count + filters.length, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Page Header */}
        <div className="bg-figuverse-gray-100 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold text-center">Catalogue de figurines</h1>
            <p className="text-center text-gray-600 mt-2">
              Découvrez notre collection de figurines manga, anime et jeux vidéo
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="border-b sticky top-16 bg-white z-30">
          <div className="container mx-auto px-4">
            <div className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <button 
                  onClick={toggleFilter}
                  className={`px-4 py-2 rounded-md flex items-center gap-2 ${
                    isFilterOpen ? 'bg-figuverse-red text-white' : 'bg-figuverse-gray-100 text-gray-700'
                  }`}
                >
                  <Filter className="h-4 w-4" />
                  Filtres
                  {getActiveFilterCount() > 0 && (
                    <span className="inline-flex items-center justify-center w-5 h-5 bg-white text-figuverse-red text-xs rounded-full">
                      {getActiveFilterCount()}
                    </span>
                  )}
                </button>
                
                <div className="hidden md:flex items-center gap-2">
                  {getActiveFilterCount() > 0 && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-figuverse-red flex items-center gap-1 hover:underline"
                    >
                      <X className="h-3 w-3" /> Effacer les filtres
                    </button>
                  )}
                </div>
              </div>
              
              {/* Sortby, View mode and Search */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <select className="appearance-none pl-3 pr-8 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-figuverse-red text-sm">
                    <option>Trier par: Popularité</option>
                    <option>Prix croissant</option>
                    <option>Prix décroissant</option>
                    <option>Date d'ajout</option>
                    <option>Date de sortie</option>
                  </select>
                  <SlidersHorizontal className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                </div>
                
                <div className="flex border rounded-md overflow-hidden">
                  <button 
                    onClick={() => setViewMode('grid')} 
                    className={`p-2 ${viewMode === 'grid' ? 'bg-figuverse-gray-100' : 'bg-white'}`}
                  >
                    <Grid className="h-4 w-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')} 
                    className={`p-2 ${viewMode === 'list' ? 'bg-figuverse-gray-100' : 'bg-white'}`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
                
                <div className="relative hidden md:block">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher..."
                    className="pl-9 pr-3 py-2 border rounded-md w-40 focus:outline-none focus:ring-1 focus:ring-figuverse-red text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Filters Sidebar */}
            <aside 
              className={`md:w-64 flex-shrink-0 ${
                isFilterOpen ? 'block' : 'hidden md:block'
              }`}
            >
              <div className="bg-white p-4 border rounded-lg sticky top-36">
                <div className="md:hidden flex justify-between items-center mb-4">
                  <h3 className="font-semibold">Filtres</h3>
                  <button 
                    onClick={toggleFilter}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                
                {/* Filter sections */}
                <div className="space-y-6">
                  {/* Licenses */}
                  <div>
                    <h4 className="font-medium mb-2">Licences</h4>
                    <div className="space-y-1">
                      {filterOptions.licenses.map(license => (
                        <label key={license} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded text-figuverse-red focus:ring-figuverse-red"
                            checked={activeFilters.licenses.includes(license)}
                            onChange={() => toggleFilterItem('licenses', license)}
                          />
                          {license}
                        </label>
                      ))}
                    </div>
                    <button className="text-figuverse-red text-sm mt-1 hover:underline">
                      Voir plus
                    </button>
                  </div>
                  
                  {/* Manufacturers */}
                  <div>
                    <h4 className="font-medium mb-2">Fabricants</h4>
                    <div className="space-y-1">
                      {filterOptions.manufacturers.map(manufacturer => (
                        <label key={manufacturer} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded text-figuverse-red focus:ring-figuverse-red"
                            checked={activeFilters.manufacturers.includes(manufacturer)}
                            onChange={() => toggleFilterItem('manufacturers', manufacturer)}
                          />
                          {manufacturer}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Types */}
                  <div>
                    <h4 className="font-medium mb-2">Types</h4>
                    <div className="space-y-1">
                      {filterOptions.types.map(type => (
                        <label key={type} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded text-figuverse-red focus:ring-figuverse-red"
                            checked={activeFilters.types.includes(type)}
                            onChange={() => toggleFilterItem('types', type)}
                          />
                          {type}
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium mb-2">Gamme de prix</h4>
                    <div className="space-y-1">
                      {filterOptions.priceRanges.map(range => (
                        <label key={range} className="flex items-center gap-2 text-sm cursor-pointer">
                          <input 
                            type="checkbox" 
                            className="rounded text-figuverse-red focus:ring-figuverse-red"
                            checked={activeFilters.priceRanges.includes(range)}
                            onChange={() => toggleFilterItem('priceRanges', range)}
                          />
                          {range}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button 
                    onClick={clearFilters}
                    variant="outline" 
                    className="w-full border-figuverse-red text-figuverse-red hover:bg-figuverse-red hover:text-white"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              </div>
            </aside>
            
            {/* Figurine Grid */}
            <div className="flex-grow">
              {/* Mobile Search */}
              <div className="mb-4 md:hidden">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Rechercher une figurine..."
                    className="pl-10 pr-3 py-3 border rounded-md w-full focus:outline-none focus:ring-1 focus:ring-figuverse-red"
                  />
                </div>
              </div>
              
              {/* Active Filters */}
              {getActiveFilterCount() > 0 && (
                <div className="mb-4 flex flex-wrap gap-2">
                  {Object.entries(activeFilters).map(([category, values]) => (
                    values.map(value => (
                      <div 
                        key={`${category}-${value}`}
                        className="inline-flex items-center bg-figuverse-gray-100 text-sm px-3 py-1 rounded-full"
                      >
                        {value}
                        <button 
                          onClick={() => toggleFilterItem(category, value)}
                          className="ml-1 text-gray-500 hover:text-figuverse-red"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ))
                  ))}
                  
                  <button
                    onClick={clearFilters}
                    className="text-sm text-figuverse-red flex items-center gap-1 hover:underline px-3 py-1"
                  >
                    Effacer tout
                  </button>
                </div>
              )}
              
              {/* Figurines Display */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {figurines.map(figurine => (
                    <FigurineCard key={figurine.id} {...figurine} />
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {figurines.map(figurine => (
                    <div key={figurine.id} className="flex border rounded-lg overflow-hidden bg-white shadow-sm">
                      <div className="w-32 h-32 sm:w-40 sm:h-40 flex-shrink-0">
                        <img 
                          src={figurine.image} 
                          alt={figurine.character} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 flex flex-col flex-grow justify-between">
                        <div>
                          <Link to={`/figurine/${figurine.id}`}>
                            <h3 className="font-semibold text-lg hover:text-figuverse-red transition-colors">
                              {figurine.character}
                            </h3>
                          </Link>
                          <p className="text-sm text-gray-600">{figurine.name}</p>
                          <div className="mt-1 space-x-2">
                            <Link 
                              to={`/licence/${figurine.license.toLowerCase()}`} 
                              className="text-xs text-gray-500 hover:text-figuverse-red transition-colors"
                            >
                              {figurine.license}
                            </Link>
                            <span className="text-xs text-gray-300">|</span>
                            <Link 
                              to={`/fabricant/${figurine.manufacturer.toLowerCase()}`} 
                              className="text-xs text-gray-500 hover:text-figuverse-red transition-colors"
                            >
                              {figurine.manufacturer}
                            </Link>
                          </div>
                        </div>
                        <div className="flex justify-between items-center mt-2">
                          <div className="font-bold text-gray-900">{figurine.price.toFixed(2)} {figurine.currency}</div>
                          <div className="flex space-x-2">
                            <button className="text-gray-400 hover:text-figuverse-red p-1">
                              {figurine.isFavorite ? (
                                <svg className="w-5 h-5 fill-figuverse-red text-figuverse-red" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              ) : (
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                              )}
                            </button>
                            <Link to={`/figurine/${figurine.id}`} className="btn-primary py-1 px-3">
                              Voir
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Pagination */}
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-1">
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-figuverse-gray-100">
                    &laquo;
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-figuverse-red bg-figuverse-red text-white">
                    1
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-figuverse-gray-100">
                    2
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-figuverse-gray-100">
                    3
                  </button>
                  <span className="px-2">...</span>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-figuverse-gray-100">
                    10
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-md border border-gray-300 hover:bg-figuverse-gray-100">
                    &raquo;
                  </button>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Figurines;
