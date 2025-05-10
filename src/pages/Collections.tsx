
import React from 'react';
import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

interface CollectionProps {
  id: string;
  name: string;
  manufacturer: string;
  scale: string;
  figurineCount: number;
  description: string;
  image: string;
}

const collectionData: CollectionProps[] = [
  {
    id: "pop-up-parade",
    name: "Pop Up Parade",
    manufacturer: "Good Smile Company",
    scale: "Non-scale (17-18cm)",
    figurineCount: 158,
    description: "Collection de figurines abordables à taille standard, avec une large variété de licences populaires.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
  },
  {
    id: "nendoroid",
    name: "Nendoroid",
    manufacturer: "Good Smile Company",
    scale: "Super Deformed (10cm)",
    figurineCount: 1800,
    description: "Figurines Chibi avec pièces interchangeables, expressions faciales multiples et accessoires.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: "figma",
    name: "Figma",
    manufacturer: "Max Factory",
    scale: "Non-scale (13-16cm)",
    figurineCount: 600,
    description: "Figurines articulées avec nombreux accessoires et pièces interchangeables.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  },
  {
    id: "figuarts",
    name: "S.H.Figuarts",
    manufacturer: "Bandai",
    scale: "Non-scale (15-18cm)",
    figurineCount: 450,
    description: "Figurines articulées haut de gamme avec grande précision des détails.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
  {
    id: "scale-fig",
    name: "Scale Figures",
    manufacturer: "Divers",
    scale: "1/8, 1/7, 1/6, 1/4",
    figurineCount: 2500,
    description: "Figurines non-articulées à diverses échelles avec finitions détaillées et postures dynamiques.",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871814838",
  }
];

const Collections: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Package className="h-8 w-8 mr-3 text-figuverse-red" />
          <h1 className="text-3xl font-bold">Gammes de figurines</h1>
        </div>
        
        <p className="text-gray-600 mb-8">
          Explorez les différentes gammes de figurines proposées par les fabricants. Des Nendoroid aux figurines échelle 1/4, 
          découvrez toutes les collections disponibles et leurs spécificités.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {collectionData.map(collection => (
            <Card key={collection.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/gamme/${collection.id}`} className="block">
                <div className="aspect-w-16 aspect-h-9 h-48">
                  <img 
                    src={collection.image} 
                    alt={collection.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold">
                    <Link to={`/gamme/${collection.id}`} className="hover:text-figuverse-red transition-colors">
                      {collection.name}
                    </Link>
                  </h2>
                  <span className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">{collection.scale}</span>
                </div>
                <p className="text-sm text-figuverse-red mb-2">{collection.manufacturer}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{collection.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{collection.figurineCount} figurines</span>
                  <Link 
                    to={`/gamme/${collection.id}`} 
                    className="text-figuverse-red hover:underline text-sm"
                  >
                    Voir détails
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Collections;
