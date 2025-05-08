
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface Release {
  id: string;
  character: string;
  name: string;
  manufacturer: string;
  image: string;
  releaseDate: string;
  price: number;
  currency: string;
}

interface ReleaseCalendarProps {
  releases: Release[];
  title: string;
}

const ReleaseCalendar: React.FC<ReleaseCalendarProps> = ({ releases, title }) => {
  // Group releases by month
  const releasesByMonth: Record<string, Release[]> = {};
  
  releases.forEach(release => {
    const date = new Date(release.releaseDate);
    const monthYear = `${date.toLocaleString('fr-FR', { month: 'long' })} ${date.getFullYear()}`;
    
    if (!releasesByMonth[monthYear]) {
      releasesByMonth[monthYear] = [];
    }
    
    releasesByMonth[monthYear].push(release);
  });

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link to="/planning" className="text-sm font-medium text-figuverse-red hover:underline">
          Voir tout
        </Link>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        {Object.entries(releasesByMonth).map(([month, monthReleases], index) => (
          <div key={month} className={index > 0 ? 'border-t border-gray-100' : ''}>
            <div className="flex items-center px-4 py-3 bg-figuverse-gray-100">
              <Calendar className="h-5 w-5 mr-2 text-figuverse-red" />
              <h3 className="font-medium text-gray-800 capitalize">{month}</h3>
            </div>
            
            <div className="divide-y divide-gray-100">
              {monthReleases.map(release => (
                <div key={release.id} className="px-4 py-3 flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 mr-4">
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
                    <p className="text-xs text-gray-500 truncate">
                      {release.name} • {release.manufacturer}
                    </p>
                  </div>
                  
                  <div className="text-right ml-4">
                    <p className="font-semibold text-gray-900">
                      {release.price.toFixed(2)} {release.currency}
                    </p>
                    <p className="text-xs text-gray-500">
                      {new Date(release.releaseDate).toLocaleDateString('fr-FR')}
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

export default ReleaseCalendar;
