
import React, { useState } from 'react';
import { ShoppingBag, MapPin, Star, ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface StoreProps {
  id: string;
  name: string;
  type: "physical" | "online";
  location?: string;
  website: string;
  rating: number;
  specialties: string[];
  description: string;
  image: string;
}

const storeData: StoreProps[] = [
  {
    id: "tsume-art",
    name: "Tsume Art",
    type: "online",
    website: "https://www.tsume-art.com",
    rating: 4.8,
    specialties: ["Résine", "Statues", "Licences Anime"],
    description: "Spécialiste français de statues haut de gamme en résine, connu pour ses pièces impressionnantes de One Piece, Naruto et plus encore.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
  {
    id: "fnac",
    name: "Fnac",
    type: "physical",
    location: "Multiple locations in France",
    website: "https://www.fnac.com",
    rating: 4.0,
    specialties: ["Pop Culture", "Généraliste", "POP!"],
    description: "Chaîne de magasins française proposant une large gamme de produits culturels, y compris des figurines populaires.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a",
  },
  {
    id: "amiami",
    name: "AmiAmi",
    type: "online",
    website: "https://www.amiami.com",
    rating: 4.9,
    specialties: ["Import Japon", "Précommandes", "Occasion"],
    description: "L'un des plus grands sites japonais de vente de figurines, proposant un vaste catalogue et des précommandes fiables.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
  },
  {
    id: "manga-story",
    name: "Manga Story",
    type: "physical",
    location: "Paris, France",
    website: "https://www.mangastory.fr",
    rating: 4.5,
    specialties: ["Manga", "Figurines", "Goodies"],
    description: "Boutique parisienne spécialisée dans l'univers manga et anime, avec une grande sélection de figurines.",
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  },
  {
    id: "nippon-yasan",
    name: "Nippon-Yasan",
    type: "online",
    website: "https://www.nippon-yasan.com",
    rating: 4.3,
    specialties: ["Import Japon", "Exclusivités", "Précommandes"],
    description: "Site d'import japonais offrant de nombreuses figurines exclusives au marché japonais.",
    image: "https://images.unsplash.com/photo-1501286353178-1ec871814838",
  }
];

const Stores: React.FC = () => {
  const [filter, setFilter] = useState<"all" | "physical" | "online">("all");

  const filteredStores = filter === "all" 
    ? storeData 
    : storeData.filter(store => store.type === filter);

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <ShoppingBag className="h-8 w-8 mr-3 text-figuverse-red" />
          <h1 className="text-3xl font-bold">Boutiques</h1>
        </div>
        
        <p className="text-gray-600 mb-8">
          Trouvez les meilleures boutiques physiques et en ligne pour acheter vos figurines. 
          Notre sélection comprend des revendeurs officiels et spécialistes de l'import.
        </p>
        
        <div className="flex gap-3 mb-8">
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            className={filter === "all" ? "bg-figuverse-red hover:bg-figuverse-red/90" : ""}
            onClick={() => setFilter("all")}
          >
            Tous
          </Button>
          <Button 
            variant={filter === "physical" ? "default" : "outline"}
            className={filter === "physical" ? "bg-figuverse-red hover:bg-figuverse-red/90" : ""}
            onClick={() => setFilter("physical")}
          >
            Boutiques physiques
          </Button>
          <Button 
            variant={filter === "online" ? "default" : "outline"}
            className={filter === "online" ? "bg-figuverse-red hover:bg-figuverse-red/90" : ""}
            onClick={() => setFilter("online")}
          >
            Boutiques en ligne
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredStores.map(store => (
            <Card key={store.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 h-48 md:h-auto">
                  <img 
                    src={store.image} 
                    alt={store.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-5 md:w-2/3">
                  <div className="flex justify-between items-start mb-1">
                    <h2 className="text-xl font-bold">{store.name}</h2>
                    <span className="flex items-center text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      {store.rating.toFixed(1)}
                    </span>
                  </div>
                  
                  {store.location && (
                    <p className="text-gray-600 text-sm flex items-center mb-2">
                      <MapPin className="h-3 w-3 mr-1" /> {store.location}
                    </p>
                  )}
                  
                  <p className="text-gray-600 text-sm mb-3">{store.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {store.specialties.map(specialty => (
                      <span key={specialty} className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                        {specialty}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={store.website}
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="flex items-center text-figuverse-red hover:underline text-sm"
                  >
                    Visiter le site <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Stores;
