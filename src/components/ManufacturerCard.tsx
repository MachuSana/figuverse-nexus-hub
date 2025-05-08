
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ManufacturerCardProps {
  id: string;
  name: string;
  logo: string;
  description: string;
  figurineCount: number;
  rating: number;
  viewStyle: 'grid' | 'list' | 'large';
}

const ManufacturerCard: React.FC<ManufacturerCardProps> = ({
  id,
  name,
  logo,
  description,
  figurineCount,
  rating,
  viewStyle
}) => {
  // Fonction pour afficher les étoiles de notation
  const renderRating = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half" className="relative">
          <Star className="h-4 w-4 text-yellow-400" />
          <div className="absolute inset-0 overflow-hidden w-1/2">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      );
    }
    
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return (
      <div className="flex items-center">
        {stars}
        <span className="ml-1 text-sm text-gray-600">({rating.toFixed(1)})</span>
      </div>
    );
  };

  if (viewStyle === 'list') {
    return (
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-48 h-24 md:h-auto overflow-hidden">
            <img 
              src={logo} 
              alt={name} 
              className="w-full h-full object-contain p-2"
            />
          </div>
          <CardContent className="flex-1 p-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <Link to={`/fabricant/${id}`} className="block hover:text-figuverse-red transition-colors">
                  <h3 className="text-xl font-semibold">{name}</h3>
                </Link>
                <p className="text-sm text-gray-600 line-clamp-2 mt-1">{description}</p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                {renderRating(rating)}
                <p className="text-sm mt-1">
                  <strong>{figurineCount}</strong> figurines
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    );
  }

  if (viewStyle === 'large') {
    return (
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="relative h-60">
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <img 
              src={logo} 
              alt={name} 
              className="max-h-full max-w-full object-contain p-6"
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <Link to={`/fabricant/${id}`} className="block hover:text-figuverse-gray-200 transition-colors">
              <h3 className="text-2xl font-bold">{name}</h3>
            </Link>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
              <p className="line-clamp-1">{description}</p>
              <div className="mt-1 sm:mt-0">
                <div className="flex items-center justify-end">{renderRating(rating)}</div>
                <p className="text-sm mt-1 text-right">
                  <strong>{figurineCount}</strong> figurines
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    );
  }

  // Default grid view
  return (
    <Card className="overflow-hidden transition-transform hover:translate-y-[-5px] hover:shadow-lg">
      <div className="relative h-40 bg-gray-100 flex items-center justify-center">
        <img 
          src={logo} 
          alt={name} 
          className="max-h-full max-w-full object-contain p-4"
        />
      </div>
      <CardContent className="p-4">
        <Link to={`/fabricant/${id}`} className="block hover:text-figuverse-red transition-colors">
          <h3 className="font-semibold text-lg">{name}</h3>
        </Link>
        <p className="text-sm text-gray-600 line-clamp-2 min-h-[2.5rem] mt-1">{description}</p>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center">{renderRating(rating)}</div>
          <p className="text-sm font-medium text-figuverse-red">
            {figurineCount} figurines
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ManufacturerCard;
