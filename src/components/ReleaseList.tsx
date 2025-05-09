
import React from 'react';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Release {
  id: string;
  character: string;
  name: string;
  manufacturer: string;
  license: string;
  image: string;
  releaseDate: string;
  price: number;
  currency: string;
  series?: string;
}

interface ReleaseListProps {
  releases: Release[];
  title: string;
}

const ReleaseList: React.FC<ReleaseListProps> = ({ releases, title }) => {
  // Group releases by date
  const releasesByDate: Record<string, Release[]> = {};
  
  releases.forEach(release => {
    const date = format(parseISO(release.releaseDate), 'dd MMMM yyyy', { locale: fr });
    
    if (!releasesByDate[date]) {
      releasesByDate[date] = [];
    }
    
    releasesByDate[date].push(release);
  });
  
  // Sort dates
  const sortedDates = Object.keys(releasesByDate).sort((a, b) => {
    return parseISO(releases.find(r => format(parseISO(r.releaseDate), 'dd MMMM yyyy', { locale: fr }) === a)!.releaseDate)
      .getTime() - 
      parseISO(releases.find(r => format(parseISO(r.releaseDate), 'dd MMMM yyyy', { locale: fr }) === b)!.releaseDate)
      .getTime();
  });

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      
      <div className="bg-white rounded-lg shadow divide-y divide-gray-100">
        {sortedDates.map((date) => (
          <div key={date} className="p-4">
            <div className="font-medium text-gray-800 mb-3">{date}</div>
            
            <div className="space-y-4">
              {releasesByDate[date].map(release => (
                <div key={release.id} className="flex items-center">
                  <div className="flex-shrink-0 w-16 h-16 mr-4">
                    <img 
                      src={release.image} 
                      alt={release.character} 
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  
                  <div className="flex-grow min-w-0">
                    <Link to={`/figurine/${release.id}`} className="block">
                      <p className="font-medium text-gray-900 truncate hover:text-figuverse-red transition-colors">
                        {release.character}
                      </p>
                    </Link>
                    <p className="text-sm text-gray-500">
                      {release.name}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <Link to={`/licence/${release.license.toLowerCase()}`} className="text-xs text-gray-500 hover:text-figuverse-red transition-colors">
                        {release.license}
                      </Link>
                      <span className="text-xs text-gray-400">•</span>
                      <Link to={`/fabricant/${release.manufacturer.toLowerCase()}`} className="text-xs text-gray-500 hover:text-figuverse-red transition-colors">
                        {release.manufacturer}
                      </Link>
                      {release.series && (
                        <>
                          <span className="text-xs text-gray-400">•</span>
                          <span className="text-xs text-gray-500">{release.series}</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="text-right ml-4 flex-shrink-0">
                    <p className="font-semibold text-gray-900">
                      {release.price.toFixed(2)} {release.currency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReleaseList;
