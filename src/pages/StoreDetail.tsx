
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Store, MapPin, Phone, Globe, Clock, Star, Mail } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for store details
const storeData = {
  id: "figurine-city",
  name: "Figurine City",
  type: "Boutique Spécialisée",
  description: "Boutique spécialisée dans les figurines anime et manga, proposant une large sélection de produits japonais.",
  longDescription: "Fondée en 2015, Figurine City est rapidement devenue une référence pour les collectionneurs de figurines en France. La boutique propose plus de 5000 références en stock, allant des petites figurines Nendoroid aux imposantes statues à l'échelle 1/4. Les gérants, passionnés de culture japonaise, sélectionnent avec soin chaque produit et organisent régulièrement des événements. La boutique est également reconnue pour son service après-vente de qualité et ses conseils personnalisés.",
  image: "https://images.unsplash.com/photo-1581683705068-ca8f49fc7f45",
  address: "15 rue des Collectionneurs, 75011 Paris",
  phone: "01 23 45 67 89",
  email: "contact@figurinecity.fr",
  website: "https://www.figurinecity.fr",
  openingHours: [
    "Lundi: Fermé",
    "Mardi: 11h00 - 19h00",
    "Mercredi: 11h00 - 19h00",
    "Jeudi: 11h00 - 19h00",
    "Vendredi: 11h00 - 20h00",
    "Samedi: 10h00 - 20h00",
    "Dimanche: 14h00 - 18h00 (1er dimanche du mois)"
  ],
  specialties: ["Figurines Anime", "Produits japonais", "Nendoroid", "Figma", "Statues Premium"],
  brands: ["Good Smile Company", "Bandai", "Kotobukiya", "MegaHouse", "Max Factory"],
  rating: 4.8,
  reviewCount: 156,
  coordinates: {
    lat: 48.8566,
    lng: 2.3522
  },
  shipping: "France, Europe",
  paymentMethods: ["Carte bancaire", "PayPal", "Chèque", "Espèces (en boutique)"],
  services: ["Précommande", "Import direct du Japon", "Points de fidélité", "Garantie qualité"],
};

// Mock reviews data
const storeReviews = [
  {
    id: '1',
    user: 'Thomas R.',
    rating: 5,
    date: '2025-04-15',
    comment: 'Boutique exceptionnelle ! Le personnel est passionné et connaisseur, la sélection de figurines est impressionnante. Les prix sont corrects pour des produits officiels. Je recommande vivement !',
  },
  {
    id: '2',
    user: 'Marie L.',
    rating: 4,
    date: '2025-03-22',
    comment: 'Très bonne boutique avec un large choix de figurines. Les vendeurs sont sympathiques et de bon conseil. Seul petit bémol : certaines séries populaires sont souvent en rupture de stock.',
  },
  {
    id: '3',
    user: 'Kevin P.',
    rating: 5,
    date: '2025-02-18',
    comment: "J'ai découvert cette boutique récemment et j'en suis très satisfait. L'ambiance est agréable et le service impeccable. Ils proposent même des événements pour les collectionneurs.",
  },
];

const StoreDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // In a real app, we would fetch data based on the ID
  // For now, we'll use the mock data
  
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-figuverse-red">Accueil</Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link to="/boutiques" className="text-gray-500 hover:text-figuverse-red">Boutiques</Link>
          <span className="mx-2 text-gray-400">/</span>
          <span className="text-gray-700">{storeData.name}</span>
        </div>
        
        {/* Back button */}
        <Link to="/boutiques" className="inline-flex items-center text-figuverse-red mb-6 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-1" /> Retour aux boutiques
        </Link>
        
        {/* Store header */}
        <div className="flex flex-col lg:flex-row gap-8 mb-10">
          {/* Store image */}
          <div className="w-full lg:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={storeData.image} 
                alt={storeData.name} 
                className="w-full h-auto object-cover aspect-video" 
              />
            </div>
            <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
              <div className="flex items-center mb-2">
                <div className="flex mr-2">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star 
                      key={star} 
                      className={`h-4 w-4 ${star <= Math.floor(storeData.rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{storeData.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500 ml-1">({storeData.reviewCount} avis)</span>
              </div>
              <a 
                href="#reviews" 
                className="text-figuverse-red text-sm hover:underline"
              >
                Voir les avis
              </a>
            </div>
          </div>
          
          {/* Store info */}
          <div className="w-full lg:w-2/3">
            <div className="flex items-center mb-2">
              <Store className="h-6 w-6 text-figuverse-red mr-2" />
              <h1 className="text-3xl font-bold">{storeData.name}</h1>
            </div>
            
            <div className="mb-4">
              <Badge variant="secondary" className="bg-gray-100 text-gray-700 hover:bg-gray-200">
                {storeData.type}
              </Badge>
            </div>
            
            <p className="text-gray-600 mb-6">{storeData.description}</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-figuverse-red mt-0.5 mr-3 flex-shrink-0" />
                <span>{storeData.address}</span>
              </div>
              
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-figuverse-red mr-3 flex-shrink-0" />
                <a href={`tel:${storeData.phone.replace(/\s/g, '')}`} className="hover:text-figuverse-red">
                  {storeData.phone}
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-figuverse-red mr-3 flex-shrink-0" />
                <a href={`mailto:${storeData.email}`} className="hover:text-figuverse-red">
                  {storeData.email}
                </a>
              </div>
              
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-figuverse-red mr-3 flex-shrink-0" />
                <a 
                  href={storeData.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-figuverse-red"
                >
                  {storeData.website.replace(/^https?:\/\//, '')}
                </a>
              </div>
              
              <div className="flex items-start mt-4">
                <Clock className="h-5 w-5 text-figuverse-red mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium mb-1">Horaires d'ouverture</h3>
                  <ul className="text-sm space-y-1">
                    {storeData.openingHours.map((hours, index) => (
                      <li key={index} className="text-gray-600">{hours}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex space-x-3">
              <Button className="bg-figuverse-red hover:bg-opacity-90">
                Visiter le site web
              </Button>
              <Button variant="outline" className="border-figuverse-red text-figuverse-red hover:bg-figuverse-red hover:bg-opacity-10">
                Itinéraire
              </Button>
            </div>
          </div>
        </div>
        
        {/* Tabs for different content sections */}
        <Tabs defaultValue="about" className="mt-8">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="about">À propos</TabsTrigger>
            <TabsTrigger value="products">Produits & Services</TabsTrigger>
            <TabsTrigger value="reviews" id="reviews">Avis clients</TabsTrigger>
          </TabsList>
          
          <TabsContent value="about" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-xl font-semibold mb-4">À propos de {storeData.name}</h2>
                <p className="text-gray-600 mb-6">{storeData.longDescription}</p>
                
                <div className="my-6">
                  <h3 className="font-medium mb-2">Moyens de paiement acceptés</h3>
                  <div className="flex flex-wrap gap-2">
                    {storeData.paymentMethods.map((method, index) => (
                      <Badge key={index} variant="outline" className="bg-gray-50">
                        {method}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="my-6">
                  <h3 className="font-medium mb-2">Livraison</h3>
                  <p className="text-gray-600">{storeData.shipping}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="products" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Spécialités</h2>
                  <div className="flex flex-wrap gap-2">
                    {storeData.specialties.map((specialty, index) => (
                      <Badge key={index} className="bg-figuverse-red">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-xl font-semibold mb-4">Marques disponibles</h2>
                  <div className="flex flex-wrap gap-2">
                    {storeData.brands.map((brand, index) => (
                      <Badge key={index} variant="outline" className="border-figuverse-red text-figuverse-red">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold mb-4">Services proposés</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                    {storeData.services.map((service, index) => (
                      <li key={index} className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-figuverse-red mr-2"></div>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <Card>
              <CardContent className="pt-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold">Avis des clients</h2>
                  <Button className="bg-figuverse-red hover:bg-opacity-90">
                    Ajouter un avis
                  </Button>
                </div>
                
                <div className="space-y-6">
                  {storeReviews.map(review => (
                    <div key={review.id} className="border-b pb-5 last:border-0">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <span className="font-medium">{review.user}</span>
                          <div className="flex items-center mt-1">
                            <div className="flex mr-2">
                              {[1, 2, 3, 4, 5].map(star => (
                                <Star 
                                  key={star} 
                                  className={`h-3.5 w-3.5 ${star <= review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}`}
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
                
                {storeReviews.length > 0 && (
                  <div className="text-center mt-8">
                    <Button variant="outline">
                      Voir tous les avis
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </>
  );
};

export default StoreDetail;
