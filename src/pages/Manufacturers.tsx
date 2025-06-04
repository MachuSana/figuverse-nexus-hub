
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ArrowDownAZ, ArrowUpZA, Filter, Grid2X2, Image, List, Star } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ManufacturerCard from '@/components/ManufacturerCard';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type ViewStyle = 'grid' | 'list' | 'large';

const filterSchema = z.object({
  sort: z.string().default("az"),
  view: z.enum(["grid", "list", "large"]).default("grid"),
  type: z.string().default("all"),
  rating: z.string().default("all"),
});

type FilterValues = z.infer<typeof filterSchema>;

// Données fictives pour les fabricants
const fetchManufacturers = async () => {
  // Ce serait une requête à une API en production
  return [
    { 
      id: '1', 
      name: 'Good Smile Company', 
      logo: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      description: 'Célèbre fabricant japonais de figurines de haute qualité, connu pour ses Nendoroids et figma.', 
      type: 'Premium', 
      figurineCount: 1245, 
      rating: 4.8,
      popularity: 'high',
      country: 'Japon'
    },
    { 
      id: '2', 
      name: 'Bandai', 
      logo: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      description: 'Géant japonais du divertissement produisant des figurines de nombreuses franchises populaires.', 
      type: 'Standard', 
      figurineCount: 2187, 
      rating: 4.2,
      popularity: 'high',
      country: 'Japon'
    },
    { 
      id: '3', 
      name: 'Kotobukiya', 
      logo: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      description: 'Fabricant japonais reconnu pour ses kits de modélisme et figurines détaillées d\'anime et jeux vidéo.', 
      type: 'Premium', 
      figurineCount: 856, 
      rating: 4.5,
      popularity: 'high',
      country: 'Japon'
    },
    { 
      id: '4', 
      name: 'Funko', 
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      description: 'Célèbre pour ses figurines Pop! au style caractéristique couvrant une multitude de licences.', 
      type: 'Économique', 
      figurineCount: 3289, 
      rating: 3.9,
      popularity: 'high',
      country: 'États-Unis'
    },
    { 
      id: '5', 
      name: 'MegaHouse', 
      logo: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      description: 'Fabricant spécialisé dans les figurines d\'anime et de mangas de grande qualité avec finitions détaillées.', 
      type: 'Premium', 
      figurineCount: 578, 
      rating: 4.3,
      popularity: 'medium',
      country: 'Japon'
    },
    { 
      id: '6', 
      name: 'Alter', 
      logo: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      description: 'Réputé pour ses figurines de collection d\'une qualité exceptionnelle et ses sculptures de personnages féminins.', 
      type: 'Premium', 
      figurineCount: 423, 
      rating: 4.7,
      popularity: 'medium',
      country: 'Japon'
    },
    { 
      id: '7', 
      name: 'McFarlane Toys', 
      logo: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', 
      description: 'Spécialisé dans les figurines de super-héros, jeux vidéo et personnages de films avec un grand souci du détail.', 
      type: 'Standard', 
      figurineCount: 615, 
      rating: 4.0,
      popularity: 'high',
      country: 'États-Unis'
    },
  ];
};

const Manufacturers = () => {
  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      sort: "az",
      view: "grid",
      type: "all",
      rating: "all"
    }
  });

  const { data: manufacturers = [], isLoading, error } = useQuery({
    queryKey: ['manufacturers'],
    queryFn: fetchManufacturers
  });

  // Appliquer les filtres aux données
  const getFilteredManufacturers = () => {
    const values = form.getValues();
    
    // Filtrer par type
    let filtered = manufacturers.filter(manufacturer => 
      values.type === 'all' ? true : 
      values.type === 'premium' ? manufacturer.type === 'Premium' : 
      values.type === 'standard' ? manufacturer.type === 'Standard' :
      values.type === 'economic' ? manufacturer.type === 'Économique' : true
    );
    
    // Filtrer par note
    filtered = filtered.filter(manufacturer => 
      values.rating === 'all' ? true :
      values.rating === '4plus' ? manufacturer.rating >= 4 :
      values.rating === '3plus' ? manufacturer.rating >= 3 :
      true
    );

    // Trier les données
    switch (values.sort) {
      case 'az':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'za':
        filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'popularity':
        filtered = [...filtered].sort((a, b) => {
          const popOrder = { high: 3, medium: 2, low: 1 };
          return popOrder[b.popularity] - popOrder[a.popularity];
        });
        break;
      case 'rating':
        filtered = [...filtered].sort((a, b) => b.rating - a.rating);
        break;
      case 'figurines':
        filtered = [...filtered].sort((a, b) => b.figurineCount - a.figurineCount);
        break;
      default:
        break;
    }

    return filtered;
  };
  
  // Get the filtered manufacturers
  const filteredManufacturers = getFilteredManufacturers();
  
  // Get the view style
  const viewStyle = form.watch("view") as ViewStyle;

  return (
    <>
      <Header />
      
      <main className="section-container">
        <h1 className="page-header">Fabricants de Figurines</h1>
        
        <div className="mb-6 bg-figuverse-gray-100 p-4 rounded-lg shadow-sm">
          <Form {...form}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                {/* Filtre par type */}
                <FormField
                  control={form.control}
                  name="type"
                  render={({ field }) => (
                    <FormItem className="flex flex-col md:flex-row md:items-center gap-2">
                      <FormLabel className="flex items-center text-sm font-medium mb-0">
                        <Filter className="h-4 w-4 mr-1" /> Type:
                      </FormLabel>
                      <FormControl>
                        <RadioGroup 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          className="flex flex-wrap gap-2"
                        >
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="all" id="all" />
                            <label htmlFor="all" className="text-sm">Tous</label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="premium" id="premium" />
                            <label htmlFor="premium" className="text-sm">Premium</label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="standard" id="standard" />
                            <label htmlFor="standard" className="text-sm">Standard</label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="economic" id="economic" />
                            <label htmlFor="economic" className="text-sm">Économique</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Filtre par note */}
                <FormField
                  control={form.control}
                  name="rating"
                  render={({ field }) => (
                    <FormItem className="flex flex-col md:flex-row md:items-center gap-2">
                      <FormLabel className="flex items-center text-sm font-medium mb-0">
                        <Star className="h-4 w-4 mr-1" /> Note:
                      </FormLabel>
                      <FormControl>
                        <RadioGroup 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                          className="flex flex-wrap gap-2"
                        >
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="all" id="rating-all" />
                            <label htmlFor="rating-all" className="text-sm">Toutes</label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="4plus" id="rating-4plus" />
                            <label htmlFor="rating-4plus" className="text-sm">4+ étoiles</label>
                          </div>
                          <div className="flex items-center space-x-1">
                            <RadioGroupItem value="3plus" id="rating-3plus" />
                            <label htmlFor="rating-3plus" className="text-sm">3+ étoiles</label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                {/* Style d'affichage */}
                <FormField
                  control={form.control}
                  name="view"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ToggleGroup 
                          type="single" 
                          value={field.value}
                          onValueChange={(value) => {
                            if (value) field.onChange(value);
                          }}
                          className="border rounded-md"
                        >
                          <ToggleGroupItem value="grid" aria-label="Afficher en grille">
                            <Grid2X2 className="h-4 w-4" />
                          </ToggleGroupItem>
                          <ToggleGroupItem value="list" aria-label="Afficher en liste">
                            <List className="h-4 w-4" />
                          </ToggleGroupItem>
                          <ToggleGroupItem value="large" aria-label="Afficher en grandes cartes">
                            <Image className="h-4 w-4" />
                          </ToggleGroupItem>
                        </ToggleGroup>
                      </FormControl>
                    </FormItem>
                  )}
                />

                {/* Ordre de tri */}
                <FormField
                  control={form.control}
                  name="sort"
                  render={({ field }) => (
                    <FormItem>
                      <Select 
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Trier par" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="az">
                            <span className="flex items-center">
                              <ArrowDownAZ className="h-4 w-4 mr-2" />
                              Ordre A-Z
                            </span>
                          </SelectItem>
                          <SelectItem value="za">
                            <span className="flex items-center">
                              <ArrowUpZA className="h-4 w-4 mr-2" />
                              Ordre Z-A
                            </span>
                          </SelectItem>
                          <SelectItem value="popularity">Popularité</SelectItem>
                          <SelectItem value="rating">Note moyenne</SelectItem>
                          <SelectItem value="figurines">Nombre de figurines</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </Form>
        </div>

        {isLoading ? (
          <div className="flex justify-center my-12">
            <p>Chargement des fabricants...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 my-12">
            <p>Une erreur est survenue lors du chargement des fabricants.</p>
          </div>
        ) : (
          <div className={`
            grid gap-6
            ${viewStyle === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : ''}
            ${viewStyle === 'list' ? 'grid-cols-1' : ''}
            ${viewStyle === 'large' ? 'grid-cols-1 md:grid-cols-2' : ''}
          `}>
            {filteredManufacturers.map(manufacturer => (
              <ManufacturerCard 
                key={manufacturer.id}
                id={manufacturer.id}
                name={manufacturer.name}
                logo={manufacturer.logo}
                description={manufacturer.description}
                figurineCount={manufacturer.figurineCount}
                rating={manufacturer.rating}
                viewStyle={viewStyle}
              />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </>
  );
};

export default Manufacturers;
