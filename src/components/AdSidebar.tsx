
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ExternalLink, Star } from 'lucide-react';

interface AdItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  price?: string;
  rating?: number;
}

interface AdSidebarProps {
  title: string;
  ads: AdItem[];
}

const AdSidebar: React.FC<AdSidebarProps> = ({ title, ads }) => {
  return (
    <Card className="sticky top-20">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center justify-between">
          {title}
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">Pub</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="space-y-4">
          {ads.map((ad) => (
            <a
              key={ad.id}
              href={ad.linkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex space-x-3 p-3 rounded-lg border hover:shadow-md transition-shadow">
                <img
                  src={ad.imageUrl}
                  alt={ad.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm group-hover:text-figuverse-red transition-colors line-clamp-1">
                    {ad.title}
                  </h4>
                  <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                    {ad.description}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    {ad.price && (
                      <span className="text-sm font-bold text-figuverse-red">
                        {ad.price}
                      </span>
                    )}
                    {ad.rating && (
                      <div className="flex items-center">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        <span className="text-xs text-gray-600 ml-1">
                          {ad.rating}
                        </span>
                      </div>
                    )}
                    <ExternalLink className="h-3 w-3 text-gray-400" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AdSidebar;
