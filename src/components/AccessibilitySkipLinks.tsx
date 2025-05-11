
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AccessibilitySkipLinks: React.FC = () => {
  const { t } = useLanguage();
  
  return (
    <div className="sr-only focus-within:not-sr-only focus-within:fixed focus-within:top-0 focus-within:left-0 focus-within:right-0 focus-within:z-50 focus-within:bg-background focus-within:p-2 focus-within:shadow-md">
      <div className="container flex justify-center gap-4">
        <a 
          href="#main-content" 
          className="bg-figuverse-red text-white px-4 py-2 rounded-md hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-figuverse-red focus:outline-none"
        >
          {t("skip_to_content")}
        </a>
        <a 
          href="#footer" 
          className="bg-figuverse-gray-600 text-white px-4 py-2 rounded-md hover:bg-opacity-90 focus:ring-2 focus:ring-offset-2 focus:ring-figuverse-gray-600 focus:outline-none"
        >
          {t("skip_to_footer")}
        </a>
      </div>
    </div>
  );
};

export default AccessibilitySkipLinks;
