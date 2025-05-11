
import React, { createContext, useContext, useState, useEffect } from "react";

type LanguageType = "fr" | "en" | "es";

interface LanguageContextType {
  language: LanguageType;
  setLanguage: (language: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Try to get language from localStorage or detect browser language, default to French
  const detectLanguage = (): LanguageType => {
    // First check localStorage
    const savedLanguage = localStorage.getItem("figuverse-language") as LanguageType;
    if (savedLanguage && ["fr", "en", "es"].includes(savedLanguage)) {
      return savedLanguage;
    }
    
    // Then check browser language
    const browserLang = navigator.language.split('-')[0].toLowerCase();
    
    if (browserLang === "es") return "es";
    if (browserLang === "en") return "en";
    
    // Default to French
    return "fr";
  };
  
  const [language, setLanguageState] = useState<LanguageType>(detectLanguage());
  const [translations, setTranslations] = useState<Record<string, string>>({});

  const setLanguage = (newLanguage: LanguageType) => {
    setLanguageState(newLanguage);
    localStorage.setItem("figuverse-language", newLanguage);
  };

  // Load translations when language changes
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        const translationModule = await import(`../locales/${language}.json`);
        setTranslations(translationModule.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}`, error);
        // If loading fails, try to load French as fallback
        if (language !== "fr") {
          try {
            const fallbackModule = await import("../locales/fr.json");
            setTranslations(fallbackModule.default);
          } catch (fallbackError) {
            console.error("Failed to load fallback translations", fallbackError);
          }
        }
      }
    };

    loadTranslations();
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[key] || key;
  };

  const contextValue: LanguageContextType = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
