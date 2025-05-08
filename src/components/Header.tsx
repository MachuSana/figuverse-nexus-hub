
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart, Heart, User } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

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
            <Link to="/figurines" className="text-gray-700 hover:text-figuverse-red transition-colors">
              Figurines
            </Link>
            <Link to="/licences" className="text-gray-700 hover:text-figuverse-red transition-colors">
              Licences
            </Link>
            <Link to="/fabricants" className="text-gray-700 hover:text-figuverse-red transition-colors">
              Fabricants
            </Link>
            <Link to="/news" className="text-gray-700 hover:text-figuverse-red transition-colors">
              Actualités
            </Link>
            <Link to="/planning" className="text-gray-700 hover:text-figuverse-red transition-colors">
              Planning
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleSearch}
              className="text-gray-700 hover:text-figuverse-red transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
            <Link to="/favorites" className="hidden md:block text-gray-700 hover:text-figuverse-red transition-colors">
              <Heart className="h-5 w-5" />
            </Link>
            <Link to="/login" className="hidden md:block text-gray-700 hover:text-figuverse-red transition-colors">
              <User className="h-5 w-5" />
            </Link>
            <button 
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
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
            <Link to="/figurines" className="block text-gray-700 hover:text-figuverse-red transition-colors">
              Figurines
            </Link>
            <Link to="/licences" className="block text-gray-700 hover:text-figuverse-red transition-colors">
              Licences
            </Link>
            <Link to="/fabricants" className="block text-gray-700 hover:text-figuverse-red transition-colors">
              Fabricants
            </Link>
            <Link to="/news" className="block text-gray-700 hover:text-figuverse-red transition-colors">
              Actualités
            </Link>
            <Link to="/planning" className="block text-gray-700 hover:text-figuverse-red transition-colors">
              Planning
            </Link>
            <div className="pt-2 border-t flex space-x-4">
              <Link to="/favorites" className="text-gray-700 hover:text-figuverse-red transition-colors flex items-center">
                <Heart className="h-5 w-5 mr-2" /> Favoris
              </Link>
              <Link to="/login" className="text-gray-700 hover:text-figuverse-red transition-colors flex items-center">
                <User className="h-5 w-5 mr-2" /> Compte
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
