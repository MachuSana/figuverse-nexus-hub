
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

interface LicenseCardProps {
  id: string;
  name: string;
  studio: string;
  type: string;
  figurineCount: number;
  image: string;
  viewStyle: 'grid' | 'list' | 'large';
}

const LicenseCard: React.FC<LicenseCardProps> = ({
  id,
  name,
  studio,
  type,
  figurineCount,
  image,
  viewStyle
}) => {
  if (viewStyle === 'list') {
    return (
      <Card className="overflow-hidden transition-shadow hover:shadow-lg">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-48 h-24 md:h-auto overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="flex-1 p-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center">
              <div>
                <Link to={`/licence/${id}`} className="block hover:text-figuverse-red transition-colors">
                  <h3 className="text-xl font-semibold">{name}</h3>
                </Link>
                <p className="text-sm text-gray-600">{studio}</p>
              </div>
              <div className="mt-2 md:mt-0 md:text-right">
                <span className="inline-block bg-figuverse-gray-200 text-xs px-2 py-1 rounded-full">
                  {type}
                </span>
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
        <div className="relative h-80">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
            <Link to={`/licence/${id}`} className="block hover:text-figuverse-gray-200 transition-colors">
              <h3 className="text-2xl font-bold">{name}</h3>
            </Link>
            <div className="flex justify-between items-center mt-2">
              <p>{studio}</p>
              <div>
                <span className="inline-block bg-white/30 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                  {type}
                </span>
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
      <div className="relative h-48">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2">
          <span className="inline-block bg-white text-xs px-2 py-1 rounded-full shadow-md">
            {type}
          </span>
        </div>
      </div>
      <CardContent className="p-4">
        <Link to={`/licence/${id}`} className="block hover:text-figuverse-red transition-colors">
          <h3 className="font-semibold text-lg">{name}</h3>
        </Link>
        <p className="text-sm text-gray-600">{studio}</p>
        <div className="flex justify-between items-center mt-3">
          <p className="text-sm font-medium text-figuverse-red">
            {figurineCount} figurines
          </p>
          <Link 
            to={`/licence/${id}`}
            className="text-xs underline text-gray-500 hover:text-figuverse-red transition-colors"
          >
            Voir détails
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default LicenseCard;
