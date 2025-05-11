
import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const NewsletterPrompt: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    // Check if the user has dismissed the prompt before
    const hasBeenDismissed = localStorage.getItem('newsletterPromptDismissed');
    
    if (!hasBeenDismissed) {
      // Show the prompt after 15 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 15000);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    
    // Remember the dismissal for 7 days
    localStorage.setItem('newsletterPromptDismissed', 'true');
    
    // Clear the dismissal after 7 days
    setTimeout(() => {
      localStorage.removeItem('newsletterPromptDismissed');
    }, 7 * 24 * 60 * 60 * 1000);
  };

  if (!isVisible || isDismissed) {
    return null;
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-sm">
      <Card className="p-4 shadow-lg border-l-4 border-l-figuverse-red animate-in fade-in slide-in-from-bottom-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-lg">Restez informé !</h3>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0" 
            onClick={handleDismiss}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4">
          Ne manquez pas les dernières nouveautés et promotions sur vos figurines préférées.
        </p>
        
        <div className="flex space-x-2">
          <Button asChild className="w-full">
            <Link to="/newsletter">S'abonner</Link>
          </Button>
          <Button variant="outline" onClick={handleDismiss}>Plus tard</Button>
        </div>
      </Card>
    </div>
  );
};

export default NewsletterPrompt;
