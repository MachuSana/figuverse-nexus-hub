
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

interface AdBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  size?: 'small' | 'medium' | 'large';
  sponsor?: string;
}

const AdBanner: React.FC<AdBannerProps> = ({
  title,
  description,
  imageUrl,
  linkUrl,
  size = 'medium',
  sponsor
}) => {
  const sizeClasses = {
    small: 'h-32',
    medium: 'h-48',
    large: 'h-64'
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow relative group">
      <div className="absolute top-2 left-2 bg-gray-800 text-white text-xs px-2 py-1 rounded z-10">
        {sponsor ? `Sponsorisé par ${sponsor}` : 'Publicité'}
      </div>
      <a href={linkUrl} target="_blank" rel="noopener noreferrer" className="block">
        <div className={`relative ${sizeClasses[size]} overflow-hidden`}>
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3 text-white">
            <h3 className="font-bold text-lg mb-1">{title}</h3>
            <p className="text-sm opacity-90 line-clamp-2">{description}</p>
          </div>
          <ExternalLink className="absolute top-3 right-3 h-4 w-4 text-white opacity-75" />
        </div>
      </a>
    </Card>
  );
};

export default AdBanner;
