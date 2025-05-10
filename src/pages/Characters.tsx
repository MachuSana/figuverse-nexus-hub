
import React from 'react';
import { User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";

interface CharacterProps {
  id: string;
  name: string;
  series: string;
  description: string;
  figurineCount: number;
  image: string;
}

const characterData: CharacterProps[] = [
  {
    id: "naruto",
    name: "Naruto Uzumaki",
    series: "Naruto Shippuden",
    description: "Protagoniste de la série Naruto, ninja du village caché de Konoha avec le rêve de devenir Hokage.",
    figurineCount: 24,
    image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
  },
  {
    id: "goku",
    name: "Son Goku",
    series: "Dragon Ball",
    description: "Héros principal de Dragon Ball, Saiyan élevé sur Terre et protecteur de la planète.",
    figurineCount: 36,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
  },
  {
    id: "luffy",
    name: "Monkey D. Luffy",
    series: "One Piece",
    description: "Capitaine des pirates au Chapeau de Paille, possède les pouvoirs du fruit du démon Gomu Gomu.",
    figurineCount: 18,
    image: "https://images.unsplash.com/photo-1501286353178-1ec871814838",
  },
  {
    id: "eren",
    name: "Eren Jäger",
    series: "L'Attaque des Titans",
    description: "Membre du Bataillon d'exploration, cherche à éliminer tous les Titans après la destruction de sa ville natale.",
    figurineCount: 12,
    image: "https://images.unsplash.com/photo-1452378174528-3090a4bba7b2",
  },
  {
    id: "tanjiro",
    name: "Tanjiro Kamado",
    series: "Demon Slayer",
    description: "Pourfendeur de démons cherchant un remède pour sa sœur transformée en démon.",
    figurineCount: 8,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
  }
];

const Characters: React.FC = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <User className="h-8 w-8 mr-3 text-figuverse-red" />
          <h1 className="text-3xl font-bold">Personnages</h1>
        </div>
        
        <p className="text-gray-600 mb-8">
          Découvrez tous les personnages d'anime, manga et jeux vidéo dont les figurines sont référencées sur FiguVerse. 
          Explorez la collection complète et trouvez vos personnages favoris.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {characterData.map(character => (
            <Card key={character.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-w-16 aspect-h-9 h-48">
                <img 
                  src={character.image} 
                  alt={character.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-5">
                <h2 className="text-xl font-bold mb-1">{character.name}</h2>
                <p className="text-sm text-figuverse-red mb-2">{character.series}</p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{character.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-medium">{character.figurineCount} figurines</span>
                  <a 
                    href={`/personnage/${character.id}`} 
                    className="text-figuverse-red hover:underline text-sm"
                  >
                    Voir détails
                  </a>
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

export default Characters;
