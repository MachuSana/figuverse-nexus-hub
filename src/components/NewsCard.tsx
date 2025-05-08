
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

interface NewsCardProps {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  id,
  title,
  excerpt,
  image,
  date,
  category,
  slug
}) => {
  return (
    <div className="card group">
      <Link to={`/news/${slug}`} className="block">
        <div className="relative overflow-hidden h-48">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
            <span className="inline-block bg-figuverse-red text-white text-xs px-2 py-1 rounded">
              {category}
            </span>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/news/${slug}`}>
          <h3 className="font-semibold text-lg text-gray-900 hover:text-figuverse-red transition-colors line-clamp-2">
            {title}
          </h3>
        </Link>
        <div className="flex items-center text-xs text-gray-500 mt-2 mb-3">
          <Calendar className="h-3 w-3 mr-1" />
          <time dateTime={date}>{date}</time>
        </div>
        <p className="text-sm text-gray-600 line-clamp-3">{excerpt}</p>
        <Link 
          to={`/news/${slug}`} 
          className="text-sm font-medium text-figuverse-red hover:underline mt-3 inline-block"
        >
          Lire la suite →
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
