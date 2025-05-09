
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ExternalLink, Link as LinkIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ImageGallery from "@/components/ImageGallery";
import CommentSection from "@/components/CommentSection";

const EventDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Données fictives d'un événement
  const event = {
    id: id || '1',
    title: "Japan Expo 2025 - Le plus grand salon de la culture japonaise",
    subtitle: "Découvrez les nouvelles figurines des plus grands fabricants",
    description: `
      <p>Rejoignez-nous à la Japan Expo 2025, l'événement incontournable pour tous les passionnés de culture japonaise et de figurines ! Cette année, le salon s'agrandit avec un hall entier dédié aux figurines de collection.</p>
      <p>Les plus grands fabricants seront présents pour vous faire découvrir leurs nouvelles créations et leurs futurs projets. Des démonstrations de peinture et de sculpture seront organisées tout au long de l'événement.</p>
      <p>Ne manquez pas les conférences exclusives avec les designers de Good Smile Company, Kotobukiya et Bandai qui présenteront leurs techniques de création et répondront à toutes vos questions.</p>
    `,
    banner: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1280&auto=format&fit=crop",
    date: "1-4 juillet 2025",
    time: "10:00 - 19:00",
    location: "Parc des Expositions de Paris-Nord Villepinte",
    organizer: "SEFA Event",
    timeline: [
      { date: "1 juillet", title: "Ouverture du salon et présentation des nouveautés Good Smile Company" },
      { date: "2 juillet", title: "Masterclass de peinture et conférence Kotobukiya" },
      { date: "3 juillet", title: "Défilé cosplay et annonces Bandai" },
      { date: "4 juillet", title: "Remise des prix du meilleur cosplay et clôture du salon" }
    ],
    images: [
      { id: "1", src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop", alt: "Stand d'exposition Japan Expo" },
      { id: "2", src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop", alt: "Panorama du salon" },
      { id: "3", src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=800&auto=format&fit=crop", alt: "Exposition de figurines" },
      { id: "4", src: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=800&auto=format&fit=crop", alt: "Présentation des nouveautés" },
      { id: "5", src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=800&auto=format&fit=crop", alt: "Démonstration de peinture" }
    ],
    links: [
      { name: "Site officiel", url: "https://www.japan-expo-paris.com" },
      { name: "Billetterie", url: "https://www.japan-expo-paris.com/tickets" },
      { name: "Programme détaillé", url: "https://www.japan-expo-paris.com/programme" }
    ],
    comments: [
      { 
        id: "c1", 
        author: "Jean Dupont", 
        content: "J'ai hâte d'y être ! Les conférences de l'an dernier étaient passionnantes.", 
        date: "4 avril 2025",
        replies: [
          { id: "r1", author: "Marie Lefebvre", content: "Tout à fait d'accord ! Surtout celle de Good Smile Company.", date: "5 avril 2025" }
        ]
      },
      { 
        id: "c2", 
        author: "Thomas Martin", 
        content: "Est-ce qu'on sait déjà quelles licences seront mises à l'honneur cette année ?", 
        date: "30 mars 2025" 
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Bannière */}
      <div className="relative h-[40vh] bg-black">
        <img 
          src={event.banner} 
          alt={event.title} 
          className="w-full h-full object-cover opacity-70" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 text-white p-6 md:p-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/news" className="inline-flex items-center text-white/80 hover:text-white mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 mr-2"><polyline points="15 18 9 12 15 6"/></svg>
              Retour aux actualités
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold mb-2">{event.title}</h1>
            <p className="text-xl text-white/90 md:w-3/4">{event.subtitle}</p>
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <div className="flex items-center text-white/80">
                <Calendar className="h-5 w-5 mr-2" />
                {event.date}
              </div>
              <div className="flex items-center text-white/80">
                <Clock className="h-5 w-5 mr-2" />
                {event.time}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contenu principal */}
          <div className="md:col-span-2 space-y-8">
            {/* Description */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">À propos de cet événement</h2>
                <div 
                  className="prose prose-sm max-w-none" 
                  dangerouslySetInnerHTML={{ __html: event.description }} 
                />
              </CardContent>
            </Card>

            {/* Chronologie */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Planning de l'événement</h2>
                <div className="space-y-4">
                  {event.timeline.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="mr-4 flex flex-col items-center">
                        <div className="h-12 w-12 rounded-full bg-figuverse-red flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                        {index < event.timeline.length - 1 && (
                          <div className="h-full w-0.5 bg-gray-200 my-1"></div>
                        )}
                      </div>
                      <div className="pt-3">
                        <h3 className="font-medium">{item.date}</h3>
                        <p className="text-gray-600">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Galerie d'images */}
            <Card>
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold mb-4">Galerie</h2>
                <ImageGallery images={event.images} />
              </CardContent>
            </Card>

            {/* Commentaires */}
            <CommentSection comments={event.comments} />
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informations */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Informations</h3>
                <dl className="space-y-4">
                  <div>
                    <dt className="text-sm text-gray-500">Date</dt>
                    <dd className="font-medium">{event.date}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Horaires</dt>
                    <dd className="font-medium">{event.time}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Lieu</dt>
                    <dd className="font-medium">{event.location}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Organisateur</dt>
                    <dd className="font-medium">{event.organizer}</dd>
                  </div>
                </dl>
              </CardContent>
            </Card>

            {/* Liens utiles */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
                <div className="space-y-3">
                  {event.links.map((link, index) => (
                    <a 
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 hover:text-blue-800"
                    >
                      {index === 0 ? (
                        <LinkIcon className="h-4 w-4 mr-2" />
                      ) : index === 1 ? (
                        <ExternalLink className="h-4 w-4 mr-2" />
                      ) : (
                        <LinkIcon className="h-4 w-4 mr-2" />
                      )}
                      {link.name}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Call-to-action */}
            <Card className="bg-gradient-to-br from-figuverse-red to-pink-600 text-white">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Prêt à participer ?</h3>
                <p className="text-sm mb-4">Réservez vos billets dès maintenant pour garantir votre place.</p>
                <Button className="w-full bg-white text-figuverse-red hover:bg-gray-100">
                  Acheter des billets
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
