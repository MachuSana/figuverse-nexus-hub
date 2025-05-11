
import React from 'react';
import NewsletterSubscription from '@/components/NewsletterSubscription';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

const Newsletter: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="pl-0 flex items-center" aria-label={t("back_home")}>
              <ChevronLeft className="mr-2 h-4 w-4" aria-hidden="true" />
              <span>{t("back_home")}</span>
            </Button>
          </Link>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold">{t("newsletter")} FiguVerse</CardTitle>
              <CardDescription className="text-lg mt-2">
                {t("newsletter_page_description")}
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <Alert className="mb-6 bg-figuverse-red/10 border-figuverse-red">
                <AlertTitle className="text-figuverse-red-dark font-medium">
                  {t("stay_informed")}
                </AlertTitle>
                <AlertDescription>
                  {t("newsletter_info")}
                </AlertDescription>
              </Alert>
              
              <NewsletterSubscription standalone={true} />
            </CardContent>
          </Card>
          
          <div className="text-center text-sm text-muted-foreground">
            <p>
              {t("newsletter_terms_notice")}{' '}
              <Link 
                to="/privacy" 
                className="text-figuverse-red underline font-medium hover:text-figuverse-red-dark focus:outline-none focus:ring-2 focus:ring-figuverse-red focus:ring-offset-2 rounded-sm"
              >
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
