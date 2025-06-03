
import React, { useState, useEffect } from 'react';
import AdBanner from './AdBanner';

interface AdRotatorProps {
  ads: Array<{
    title: string;
    description: string;
    imageUrl: string;
    linkUrl: string;
    sponsor?: string;
  }>;
  intervalMs?: number;
  size?: 'small' | 'medium' | 'large';
}

const AdRotator: React.FC<AdRotatorProps> = ({ 
  ads, 
  intervalMs = 8000, 
  size = 'medium' 
}) => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    if (ads.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => 
        (prevIndex + 1) % ads.length
      );
    }, intervalMs);

    return () => clearInterval(interval);
  }, [ads.length, intervalMs]);

  if (ads.length === 0) return null;

  const currentAd = ads[currentAdIndex];

  return (
    <div className="relative">
      <AdBanner
        title={currentAd.title}
        description={currentAd.description}
        imageUrl={currentAd.imageUrl}
        linkUrl={currentAd.linkUrl}
        sponsor={currentAd.sponsor}
        size={size}
      />
      
      {ads.length > 1 && (
        <div className="absolute bottom-2 right-2 flex space-x-1">
          {ads.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentAdIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentAdIndex(index)}
              aria-label={`Voir publicité ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdRotator;
