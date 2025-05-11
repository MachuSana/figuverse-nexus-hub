
import React from 'react';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';

const Newsletter: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="pl-0">
              <ChevronLeft className="mr-2 h-4 w-4" />
              {t("back_home")}
            </Button>
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold mb-4">{t("newsletter")} FiguVerse</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("newsletter_page_description")}
            </p>
          </div>
          
          <NewsletterSubscription standalone={true} />
          
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              {t("newsletter_terms_notice")}{' '}
              <Link to="/privacy" className="text-figuverse-red underline">
                {t("privacy")}
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
