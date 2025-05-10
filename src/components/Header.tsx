
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, Heart, User, Home, Box, Award, Newspaper, Calendar, LogIn, Package, ShoppingBag, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  const isActive = (path: string) => location.pathname === path;

  const menuItems = [
    { name: "Accueil", path: "/", icon: Home },
    { name: "Figurines", path: "/figurines", icon: Box },
    { name: "Licences", path: "/licences", icon: Award },
    { name: "Personnages", path: "/personnages", icon: Users },
    { name: "Gammes", path: "/gammes", icon: Package },
    { name: "Boutiques", path: "/boutiques", icon: ShoppingBag },
    { name: "Actualités", path: "/news", icon: Newspaper },
    { name: "Planning", path: "/planning", icon: Calendar },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="font-bold text-xl text-figuverse-red">FiguVerse</span>
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
            <button 
              onClick={toggleSearch}
              className="text-gray-700 hover:text-figuverse-red transition-colors"
              aria-label="Rechercher"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/favorites" className="hidden md:block text-gray-700 hover:text-figuverse-red transition-colors" aria-label="Favoris">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/login" className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-figuverse-red transition-colors">
              <LogIn className="h-5 w-5" />
              <span>Connexion</span>
            </Link>
            <button 
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
              aria-label="Menu"
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
                placeholder="Rechercher une figurine, licence, fabricant..."
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
                <Heart className="h-5 w-5 mr-2" /> Favoris
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-figuverse-red transition-colors flex items-center">
                <LogIn className="h-5 w-5 mr-2" /> Connexion
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
