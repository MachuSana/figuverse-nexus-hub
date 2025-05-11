
import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { Globe } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface LanguageOption {
  code: "fr" | "en" | "es";
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  { code: "fr", name: "Français", flag: "🇫🇷" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

const LanguageSelector: React.FC<{ className?: string }> = ({ className }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className={cn("flex items-center gap-2 h-8", className)}
          aria-label={t("change_language")}
        >
          <Globe className="h-4 w-4" />
          <span className="font-medium">{language.toUpperCase()}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-48 p-2" align="end">
        <div className="space-y-1">
          {languages.map((option) => (
            <Button
              key={option.code}
              variant={language === option.code ? "secondary" : "ghost"}
              className="w-full justify-start text-sm"
              onClick={() => setLanguage(option.code)}
            >
              <span className="mr-2" aria-hidden="true">{option.flag}</span>
              <span>{option.name}</span>
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default LanguageSelector;
