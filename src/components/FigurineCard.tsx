
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

interface FigurineCardProps {
  id: string;
  name: string;
  character: string;
  license: string;
  manufacturer: string;
  price: number;
  currency: string;
  image: string;
  releaseDate?: string;
  isNew?: boolean;
  isFavorite?: boolean;
}

const FigurineCard: React.FC<FigurineCardProps> = ({
  id,
  name,
  character,
  license,
  manufacturer,
  price,
  currency,
  image,
  releaseDate,
  isNew = false,
  isFavorite = false
}) => {
  return (
    <div className="card group relative">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={`${character} - ${name}`} 
          className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {isNew && (
          <span className="absolute top-2 left-2 bg-figuverse-red text-white text-xs font-bold px-2 py-1 rounded-full">
            Nouveau
          </span>
        )}
        
        <button className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <Heart className={`h-4 w-4 ${isFavorite ? 'fill-figuverse-red text-figuverse-red' : 'text-gray-500'}`} />
        </button>
      </div>
      
      <div className="p-4">
        <Link to={`/figurine/${id}`}>
          <h3 className="font-semibold text-gray-900 hover:text-figuverse-red transition-colors">{character}</h3>
        </Link>
        <p className="text-sm text-gray-600 mb-2">{name}</p>
        
        <div className="flex justify-between items-center mt-2">
          <div>
            <Link to={`/fabricant/${manufacturer.toLowerCase()}`} className="text-xs text-gray-500 hover:text-figuverse-red transition-colors">
              {manufacturer}
            </Link>
            <Link to={`/licence/${license.toLowerCase()}`} className="text-xs text-gray-500 hover:text-figuverse-red transition-colors block">
              {license}
            </Link>
          </div>
          <div className="text-right">
            <p className="font-bold text-gray-900">{price.toFixed(2)} {currency}</p>
            {releaseDate && (
              <p className="text-xs text-gray-500">{releaseDate}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigurineCard;
