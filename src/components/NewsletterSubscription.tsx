
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { Mail, Bell, CheckCircle } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface NewsletterSubscriptionProps {
  standalone?: boolean;
  userEmail?: string;
  defaultSubscribed?: boolean;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
  standalone = false,
  userEmail = '',
  defaultSubscribed = false
}) => {
  const { toast } = useToast();
  const [email, setEmail] = useState<string>(userEmail);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(defaultSubscribed);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [preferences, setPreferences] = useState({
    newReleases: true,
    promotions: false,
    upcomingReleases: true,
    events: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log("Newsletter subscription:", {
      email,
      isSubscribed,
      preferences
    });
    
    // Show success message
    setShowSuccess(true);
    
    // Show toast notification
    toast({
      title: isSubscribed ? "Abonnement confirmé" : "Désabonnement confirmé",
      description: isSubscribed 
        ? "Vous recevrez désormais notre newsletter selon vos préférences." 
        : "Vous ne recevrez plus notre newsletter.",
      duration: 5000,
    });
    
    // Reset success message after a delay
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <Card className={`w-full ${standalone ? 'max-w-md mx-auto' : ''} border-t-4 border-t-figuverse-red/70`}>
      <CardHeader className="space-y-1">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-figuverse-red" />
          <CardTitle className="text-xl">Newsletter FiguVerse</CardTitle>
        </div>
        <CardDescription>
          Restez informé des dernières nouveautés dans l'univers des figurines
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {showSuccess && (
          <Alert className="mb-4 bg-green-50 border-green-200">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              {isSubscribed 
                ? "Merci pour votre abonnement à notre newsletter !" 
                : "Vous avez été désabonné de notre newsletter."}
            </AlertDescription>
          </Alert>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {standalone && (
            <div className="space-y-2">
              <Label htmlFor="email">Adresse email</Label>
              <Input 
                id="email"
                type="email" 
                placeholder="votre@email.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={isSubscribed}
                className="w-full"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="newsletter-status" className="font-medium">Statut de l'abonnement</Label>
                <p className="text-xs text-muted-foreground">Activez pour recevoir notre newsletter</p>
              </div>
              <Switch 
                id="newsletter-status"
                checked={isSubscribed} 
                onCheckedChange={setIsSubscribed}
              />
            </div>
            
            {isSubscribed && (
              <div className="space-y-3 pt-2 border-t">
                <Label className="font-medium">Types d'alertes</Label>
                <p className="text-xs text-muted-foreground mb-3">Sélectionnez les informations qui vous intéressent</p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pref-new" className="text-sm font-normal">Nouveautés</Label>
                      <p className="text-xs text-muted-foreground">Nouvelles figurines annoncées</p>
                    </div>
                    <Switch 
                      id="pref-new" 
                      checked={preferences.newReleases}
                      onCheckedChange={() => togglePreference('newReleases')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pref-promo" className="text-sm font-normal">Promotions</Label>
                      <p className="text-xs text-muted-foreground">Offres spéciales et réductions</p>
                    </div>
                    <Switch 
                      id="pref-promo" 
                      checked={preferences.promotions}
                      onCheckedChange={() => togglePreference('promotions')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pref-upcoming" className="text-sm font-normal">Sorties à venir</Label>
                      <p className="text-xs text-muted-foreground">Calendrier des prochaines sorties</p>
                    </div>
                    <Switch 
                      id="pref-upcoming" 
                      checked={preferences.upcomingReleases}
                      onCheckedChange={() => togglePreference('upcomingReleases')}
                    />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label htmlFor="pref-events" className="text-sm font-normal">Événements</Label>
                      <p className="text-xs text-muted-foreground">Conventions et expositions</p>
                    </div>
                    <Switch 
                      id="pref-events" 
                      checked={preferences.events}
                      onCheckedChange={() => togglePreference('events')}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
      </CardContent>
      
      <CardFooter>
        <Button 
          type="submit" 
          onClick={handleSubmit}
          className="w-full"
          variant={isSubscribed ? "default" : "outline"}
        >
          {isSubscribed ? "Mettre à jour mes préférences" : "Me désabonner"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default NewsletterSubscription;
