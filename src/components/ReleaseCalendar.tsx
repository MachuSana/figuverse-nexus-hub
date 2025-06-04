
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, Euro } from 'lucide-react';

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
  // Get the next 4 releases
  const upcomingReleases = releases.slice(0, 4);

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link to="/planning" className="text-sm font-medium text-figuverse-red hover:underline">
          Voir tout
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {upcomingReleases.map(release => (
          <Link 
            key={release.id} 
            to={`/figurine/${release.id}`}
            className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
          >
            <div className="flex">
              {/* Image */}
              <div className="flex-shrink-0 w-24 h-24 relative overflow-hidden">
                <img 
                  src={release.image} 
                  alt={release.character} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content */}
              <div className="flex-grow p-4 flex flex-col justify-between min-w-0">
                <div>
                  <h3 className="font-bold text-gray-900 group-hover:text-figuverse-red transition-colors truncate mb-1">
                    {release.character}
                  </h3>
                  <p className="text-sm text-gray-600 truncate mb-2">
                    {release.name} • {release.manufacturer}
                  </p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500">
                    <Calendar className="h-3 w-3 mr-1" />
                    {new Date(release.releaseDate).toLocaleDateString('fr-FR', { 
                      day: 'numeric', 
                      month: 'short' 
                    })}
                  </div>
                  
                  <div className="flex items-center font-semibold text-figuverse-red">
                    <Euro className="h-3 w-3 mr-1" />
                    <span className="text-sm">{release.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Bottom CTA */}
      <div className="mt-6 text-center">
        <Link 
          to="/planning" 
          className="inline-flex items-center bg-gray-50 hover:bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors border border-gray-200"
        >
          <Clock className="h-4 w-4 mr-2" />
          Voir toutes les sorties à venir
        </Link>
      </div>
    </div>
  );
};

export default ReleaseCalendar;
