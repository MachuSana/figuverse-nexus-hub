
import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Award, Users, Package, ShoppingBag, Star, Gamepad2, Zap, Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  if (!isOpen) return null;

  const menuSections = [
    {
      title: t("figurines"),
      icon: Box,
      items: [
        { name: "Scale Figures", path: "/figurines?type=scale" },
        { name: "Nendoroid", path: "/figurines?type=nendoroid" },
        { name: "Figma", path: "/figurines?type=figma" },
        { name: "Pop Up Parade", path: "/figurines?type=popup" },
        { name: "Prize Figures", path: "/figurines?type=prize" }
      ]
    },
    {
      title: t("licenses"),
      icon: Award,
      items: [
        { name: "One Piece", path: "/licences?name=one-piece" },
        { name: "Dragon Ball", path: "/licences?name=dragon-ball" },
        { name: "Naruto", path: "/licences?name=naruto" },
        { name: "Attack on Titan", path: "/licences?name=aot" },
        { name: "Demon Slayer", path: "/licences?name=demon-slayer" }
      ]
    },
    {
      title: t("collections"),
      icon: Package,
      items: [
        { name: "Good Smile Company", path: "/gammes?brand=gsc" },
        { name: "Kotobukiya", path: "/gammes?brand=kotobukiya" },
        { name: "Banpresto", path: "/gammes?brand=banpresto" },
        { name: "MegaHouse", path: "/gammes?brand=megahouse" },
        { name: "FuRyu", path: "/gammes?brand=furyu" }
      ]
    },
    {
      title: t("stores"),
      icon: ShoppingBag,
      items: [
        { name: "Boutiques partenaires", path: "/boutiques?type=partner" },
        { name: "Import japonais", path: "/boutiques?type=import" },
        { name: "Boutiques locales", path: "/boutiques?type=local" },
        { name: "Précommandes", path: "/boutiques?section=preorder" },
        { name: "Promos & Soldes", path: "/boutiques?section=sales" }
      ]
    }
  ];

  const popularCategories = [
    { name: "Nouveautés", icon: Star, path: "/figurines?filter=new" },
    { name: "Gaming", icon: Gamepad2, path: "/figurines?category=gaming" },
    { name: "Exclusives", icon: Zap, path: "/figurines?filter=exclusive" },
    { name: "Favoris", icon: Heart, path: "/favorites" }
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white shadow-lg border-t z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {menuSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center space-x-2 border-b pb-2">
                <section.icon className="h-5 w-5 text-figuverse-red" />
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className="block text-gray-600 hover:text-figuverse-red transition-colors text-sm py-1"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <h4 className="font-semibold text-gray-900 mb-4">Catégories populaires</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCategories.map((category, index) => (
              <Link
                key={index}
                to={category.path}
                onClick={onClose}
                className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg hover:bg-figuverse-red hover:text-white transition-all group"
              >
                <category.icon className="h-4 w-4" />
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
