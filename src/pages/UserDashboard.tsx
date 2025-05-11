import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Bell, MessageSquare, Star, Settings, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useIsMobile } from "@/hooks/use-mobile";
import FigurineCard from "@/components/FigurineCard";
import NewsletterSubscription from "@/components/NewsletterSubscription";

const UserDashboard: React.FC = () => {
  const isMobile = useIsMobile();
  const [language, setLanguage] = useState<string>("fr");
  
  // Sample data for dashboard sections
  const favoriteFigurines = [
    {
      id: "1",
      name: "Nendoroid",
      character: "Miku Hatsune",
      license: "Vocaloid",
      manufacturer: "Good Smile Company",
      price: 55.90,
      currency: "€",
      image: "https://images.goodsmile.info/cgm/images/product/20200630/9713/71929/large/5df57abe3e1c7926c15c2a4092ac4f44.jpg",
      releaseDate: "Juillet 2023",
      isFavorite: true
    },
    {
      id: "2",
      name: "Figma",
      character: "Saber Alter",
      license: "Fate/Stay Night",
      manufacturer: "Max Factory",
      price: 89.90,
      currency: "€",
      image: "https://images.goodsmile.info/cgm/images/product/20190312/8225/59346/large/0977eac00a04c88834003c321837cc63.jpg",
      isFavorite: true
    },
    {
      id: "3",
      name: "Pop Up Parade",
      character: "Yuji Itadori",
      license: "Jujutsu Kaisen",
      manufacturer: "Good Smile Company",
      price: 39.90,
      currency: "€",
      image: "https://images.goodsmile.info/cgm/images/product/20210719/11768/89622/large/be36c47c5eb4a8a52af5c19b50580f29.jpg",
      isFavorite: true
    }
  ];
  
  const alerts = [
    { id: "1", title: "Baisse de prix", description: "Rem - Pop Up Parade est passé de 44.90€ à 39.90€", date: "10/05/2025" },
    { id: "2", title: "Nouvelle précommande", description: "Nendoroid Nezuko est disponible en précommande", date: "08/05/2025" },
    { id: "3", title: "Changement de date", description: "La sortie de Figma Deku est reportée à Septembre 2025", date: "05/05/2025" }
  ];
  
  const comments = [
    { id: "1", figurineId: "101", figurineName: "Saber Alter - Dress Ver.", comment: "J'adore cette figurine, la qualité est incroyable !", date: "09/05/2025" },
    { id: "2", figurineId: "203", figurineName: "Rem - Crystal Dress", comment: "Les détails sont impressionnants, mais le prix est un peu élevé.", date: "02/05/2025" },
    { id: "3", figurineId: "305", figurineName: "Asuka - Jersey Ver.", comment: "La livraison a été plus rapide que prévu, très satisfait !", date: "25/04/2025" }
  ];
  
  return (
    <div className="section-container">
      <h1 className="text-2xl font-bold mb-6">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* User Profile Summary */}
        <Card className="md:col-span-4">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center">
              <User className="w-8 h-8 text-gray-500" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Bienvenue, CollectionFan92</h2>
              <p className="text-muted-foreground">Membre depuis Avril 2025</p>
            </div>
            <div className="ml-auto">
              <Button variant="outline">Modifier le profil</Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Main Dashboard Content */}
        <div className="md:col-span-4">
          <Tabs defaultValue="favorites" className="w-full">
            <TabsList className="w-full mb-6 grid grid-cols-5">
              <TabsTrigger value="favorites" className="flex items-center gap-2">
                <Star className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>Favoris</span>
              </TabsTrigger>
              <TabsTrigger value="alerts" className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>Alertes</span>
              </TabsTrigger>
              <TabsTrigger value="comments" className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>Commentaires</span>
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>Préférences</span>
              </TabsTrigger>
              <TabsTrigger value="newsletter" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span className={isMobile ? "hidden" : ""}>Newsletter</span>
              </TabsTrigger>
            </TabsList>
            
            {/* Favoris */}
            <TabsContent value="favorites">
              <Card>
                <CardHeader>
                  <CardTitle>Figurines favorites</CardTitle>
                  <CardDescription>
                    Vos figurines préférées et enregistrées
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favoriteFigurines.map((figurine) => (
                      <FigurineCard
                        key={figurine.id}
                        id={figurine.id}
                        name={figurine.name}
                        character={figurine.character}
                        license={figurine.license}
                        manufacturer={figurine.manufacturer}
                        price={figurine.price}
                        currency={figurine.currency}
                        image={figurine.image}
                        releaseDate={figurine.releaseDate}
                        isFavorite={figurine.isFavorite}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Alertes */}
            <TabsContent value="alerts">
              <Card>
                <CardHeader>
                  <CardTitle>Alertes personnalisées</CardTitle>
                  <CardDescription>
                    Notifications sur les changements de prix et nouvelles précommandes
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {alerts.map(alert => (
                      <Card key={alert.id}>
                        <CardContent className="p-4 flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold">{alert.title}</h3>
                            <p className="text-sm text-muted-foreground">{alert.description}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-xs text-muted-foreground">{alert.date}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    
                    <Button className="w-full mt-4">Configurer les alertes</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Commentaires */}
            <TabsContent value="comments">
              <Card>
                <CardHeader>
                  <CardTitle>Historique des commentaires</CardTitle>
                  <CardDescription>
                    Vos commentaires récents sur les figurines
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Figurine</TableHead>
                        <TableHead>Commentaire</TableHead>
                        <TableHead className="text-right">Date</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {comments.map(comment => (
                        <TableRow key={comment.id}>
                          <TableCell className="font-medium">
                            <Link to={`/figurine/${comment.figurineId}`} className="text-figuverse-red hover:underline">
                              {comment.figurineName}
                            </Link>
                          </TableCell>
                          <TableCell>{comment.comment}</TableCell>
                          <TableCell className="text-right">{comment.date}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Préférences */}
            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Préférences</CardTitle>
                  <CardDescription>
                    Gérez vos paramètres de langue et de notifications
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-semibold">Langue</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <Input 
                          type="radio" 
                          id="lang-fr" 
                          name="language" 
                          className="h-4 w-4"
                          checked={language === "fr"} 
                          onChange={() => setLanguage("fr")}
                        />
                        <Label htmlFor="lang-fr">Français</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Input 
                          type="radio" 
                          id="lang-en" 
                          name="language" 
                          className="h-4 w-4"
                          checked={language === "en"} 
                          onChange={() => setLanguage("en")}
                        />
                        <Label htmlFor="lang-en">English</Label>
                      </div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <h3 className="font-semibold">Notifications</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="notify-price" className="font-medium">Changements de prix</Label>
                          <p className="text-sm text-muted-foreground">Recevez des notifications pour les baisses de prix</p>
                        </div>
                        <Switch id="notify-price" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="notify-preorder" className="font-medium">Nouvelles précommandes</Label>
                          <p className="text-sm text-muted-foreground">Recevez des notifications pour les nouvelles précommandes</p>
                        </div>
                        <Switch id="notify-preorder" defaultChecked />
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div>
                          <Label htmlFor="notify-news" className="font-medium">Actualités</Label>
                          <p className="text-sm text-muted-foreground">Recevez des notifications pour les nouvelles actualités</p>
                        </div>
                        <Switch id="notify-news" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button>Enregistrer les préférences</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            {/* Newsletter */}
            <TabsContent value="newsletter">
              <Card>
                <CardHeader>
                  <CardTitle>Gestion de la newsletter</CardTitle>
                  <CardDescription>
                    Abonnez-vous à notre newsletter pour recevoir les dernières actualités
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <NewsletterSubscription 
                    userEmail="collectionfan92@example.com"
                    defaultSubscribed={true}
                  />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
