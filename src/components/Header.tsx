
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Heart, LogIn, Home, Box, Award, Newspaper, Calendar, Package, ShoppingBag, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: t("home"), path: "/", icon: Home },
    { name: t("figurines"), path: "/figurines", icon: Box },
    { name: t("licenses"), path: "/licences", icon: Award },
    { name: t("characters"), path: "/personnages", icon: Users },
    { name: t("collections"), path: "/gammes", icon: Package },
    { name: t("stores"), path: "/boutiques", icon: ShoppingBag },
    { name: t("news"), path: "/news", icon: Newspaper },
    { name: t("planning"), path: "/planning", icon: Calendar },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-figuverse-red">{t("site_name")}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`flex items-center space-x-2 ${isActive(item.path) ? 'text-figuverse-red font-medium' : 'text-gray-700 hover:text-figuverse-red'} transition-colors`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <button 
              onClick={toggleSearch}
              className="text-gray-700 hover:text-figuverse-red transition-colors"
              aria-label={t("search")}
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/favorites" className="hidden md:block text-gray-700 hover:text-figuverse-red transition-colors" aria-label={t("favorites")}>
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/login" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-figuverse-red transition-colors">
              <LogIn className="h-5 w-5" />
              <span>{t("login")}</span>
            </Link>
            <button 
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Expanded Search */}
        {isSearchOpen && (
          <div className="py-3 border-t animate-fade-in">
            <div className="flex items-center mx-auto max-w-2xl">
              <input
                type="text"
                placeholder={t("search_placeholder")}
                className="w-full p-2 border rounded-l-md focus:outline-none focus:border-figuverse-red"
              />
              <Button className="bg-figuverse-red hover:bg-opacity-90 text-white rounded-l-none rounded-r-md">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t animate-fade-in">
          <div className="container px-4 py-3 mx-auto space-y-3">
            {menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`flex items-center space-x-3 ${isActive(item.path) ? 'text-figuverse-red font-medium' : 'text-gray-700 hover:text-figuverse-red'} transition-colors`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="pt-2 border-t flex space-x-4">
              <Link to="/favorites" className="text-gray-700 hover:text-figuverse-red transition-colors flex items-center">
                <Heart className="h-5 w-5 mr-2" /> {t("favorites")}
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-figuverse-red transition-colors flex items-center">
                <LogIn className="h-5 w-5 mr-2" /> {t("login")}
              </Link>
            </div>
            <div className="pt-2 flex justify-start">
              <LanguageSelector />
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
