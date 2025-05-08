
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ArrowDownAZ, ArrowUpZA, Filter, Grid2X2, Image, List } from "lucide-react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LicenseCard from '@/components/LicenseCard';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// Define the ViewStyle type to match LicenseCard's expected values
type ViewStyle = 'grid' | 'list' | 'large';

// Définition du schéma de filtre with proper types
const filterSchema = z.object({
  sort: z.string().default("az"),
  view: z.enum(["grid", "list", "large"]).default("grid"),
  type: z.string().default("all"),
});

type FilterValues = z.infer<typeof filterSchema>;

// Mock data pour les licences
const fetchLicenses = async () => {
  // En production, ce serait une vraie API
  return [
    { 
      id: '1', 
      name: 'One Piece', 
      studio: 'Toei Animation', 
      type: 'Anime/Manga', 
      figurineCount: 245, 
      image: 'https://images.unsplash.com/photo-1613376023733-0a73315d9b1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popularity: 'high'
    },
    { 
      id: '2', 
      name: 'Naruto', 
      studio: 'Pierrot', 
      type: 'Anime/Manga', 
      figurineCount: 187, 
      image: 'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popularity: 'high'
    },
    { 
      id: '3', 
      name: 'Final Fantasy', 
      studio: 'Square Enix', 
      type: 'Jeux Vidéo', 
      figurineCount: 156, 
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popularity: 'high'
    },
    { 
      id: '4', 
      name: 'Demon Slayer', 
      studio: 'Ufotable', 
      type: 'Anime/Manga', 
      figurineCount: 89, 
      image: 'https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popularity: 'high'
    },
    { 
      id: '5', 
      name: 'The Legend of Zelda', 
      studio: 'Nintendo', 
      type: 'Jeux Vidéo', 
      figurineCount: 78, 
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popularity: 'medium'
    },
    { 
      id: '6', 
      name: 'Fate/Grand Order', 
      studio: 'TYPE-MOON', 
      type: 'Anime/Manga', 
      figurineCount: 123, 
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popularity: 'medium'
    },
    { 
      id: '7', 
      name: 'Pokémon', 
      studio: 'The Pokémon Company', 
      type: 'Jeux Vidéo', 
      figurineCount: 215, 
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      popularity: 'high'
    },
  ];
};

const Licenses = () => {
  const form = useForm<FilterValues>({
    resolver: zodResolver(filterSchema),
    defaultValues: {
      sort: "az",
      view: "grid",
      type: "all"
    }
  });

  const { data: licenses = [], isLoading, error } = useQuery({
    queryKey: ['licenses'],
    queryFn: fetchLicenses
  });

  // Appliquer les filtres aux données
  const getFilteredLicenses = () => {
    const values = form.getValues();
    
    // Filtrer par type
    let filtered = licenses.filter(license => 
      values.type === 'all' ? true : 
      values.type === 'anime' ? license.type === 'Anime/Manga' : 
      values.type === 'game' ? license.type === 'Jeux Vidéo' : true
    );

    // Trier les données
    switch (values.sort) {
      case 'az':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'za':
        filtered = [...filtered].sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'popularite':
        filtered = [...filtered].sort((a, b) => {
          const popOrder = { high: 3, medium: 2, low: 1 };
          return popOrder[b.popularity] - popOrder[a.popularity];
        });
        break;
      case 'figurines':
        filtered = [...filtered].sort((a, b) => b.figurineCount - a.figurineCount);
        break;
      default:
        break;
    }

    return filtered;
  };
  
  // Get the view style as an explicitly typed value
  const viewStyle = form.watch("view") as ViewStyle;

  return (
    <>
      <Header />
      
      <main className="section-container">
        <h1 className="page-header">Encyclopédie des Licences</h1>
        
        <div className="mb-6 bg-figuverse-gray-100 p-4 rounded-lg shadow-sm">
          <Form {...form}>
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              {/* Filtre par type */}
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="flex flex-col md:flex-row md:items-center gap-2">
                    <FormLabel className="flex items-center text-sm font-medium">
                      <Filter className="h-4 w-4 mr-1" /> Type:
                    </FormLabel>
                    <FormControl>
                      <RadioGroup 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                        className="flex flex-wrap gap-1"
                      >
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="all" id="all" />
                          <label htmlFor="all" className="text-sm">Tous</label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="anime" id="anime" />
                          <label htmlFor="anime" className="text-sm">Anime/Manga</label>
                        </div>
                        <div className="flex items-center space-x-1">
                          <RadioGroupItem value="game" id="game" />
                          <label htmlFor="game" className="text-sm">Jeux Vidéo</label>
                        </div>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

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
                          <ToggleGroupItem value="grid" aria-label="View as grid">
                            <Grid2X2 className="h-4 w-4" />
                          </ToggleGroupItem>
                          <ToggleGroupItem value="list" aria-label="View as list">
                            <List className="h-4 w-4" />
                          </ToggleGroupItem>
                          <ToggleGroupItem value="large" aria-label="View as large cards">
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
                          <SelectItem value="popularite">Popularité</SelectItem>
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
            <p>Chargement des licences...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 my-12">
            <p>Une erreur est survenue lors du chargement des licences.</p>
          </div>
        ) : (
          <div className={`
            grid gap-6
            ${viewStyle === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' : ''}
            ${viewStyle === 'list' ? 'grid-cols-1' : ''}
            ${viewStyle === 'large' ? 'grid-cols-1 md:grid-cols-2' : ''}
          `}>
            {filteredLicenses.map(license => (
              <LicenseCard 
                key={license.id}
                id={license.id}
                name={license.name}
                studio={license.studio}
                type={license.type}
                figurineCount={license.figurineCount}
                image={license.image}
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

export default Licenses;
