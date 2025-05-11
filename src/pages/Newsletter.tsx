
import React from 'react';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="pl-0">
              <ChevronLeft className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">Newsletter FiguVerse</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Recevez en avant-première les dernières actualités du monde des figurines, 
              les nouveautés, promotions et événements à ne pas manquer.
            </p>
          </div>
          
          <NewsletterSubscription standalone={true} />
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              En vous abonnant à notre newsletter, vous acceptez de recevoir des emails de notre part. 
              Vous pouvez vous désabonner à tout moment. Pour plus d'informations, consultez notre{' '}
              <Link to="/privacy" className="text-figuverse-red underline">
                politique de confidentialité
              </Link>.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Newsletter;
