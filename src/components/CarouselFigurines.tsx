
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import FigurineCard from './FigurineCard';

interface Figurine {
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

interface CarouselFigurinesProps {
  figurines: Figurine[];
  title: string;
}

const CarouselFigurines: React.FC<CarouselFigurinesProps> = ({ figurines, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState(4);

  useEffect(() => {
    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };

    updateVisibleItems();
    window.addEventListener('resize', updateVisibleItems);
    return () => window.removeEventListener('resize', updateVisibleItems);
  }, []);

  const maxIndex = Math.max(0, figurines.length - visibleItems);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => Math.min(maxIndex, prevIndex + 1));
  };

  return (
    <div className="my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{title}</h2>
        <div className="flex space-x-2">
          <button 
            onClick={handlePrevClick}
            disabled={currentIndex === 0}
            className={`p-2 rounded-full ${
              currentIndex === 0 
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-figuverse-gray-100 text-gray-700 hover:bg-figuverse-gray-200'
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button 
            onClick={handleNextClick}
            disabled={currentIndex >= maxIndex}
            className={`p-2 rounded-full ${
              currentIndex >= maxIndex
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                : 'bg-figuverse-gray-100 text-gray-700 hover:bg-figuverse-gray-200'
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef} 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
        >
          {figurines.map((figurine) => (
            <div 
              key={figurine.id} 
              className="flex-shrink-0" 
              style={{ width: `${100 / visibleItems}%`, padding: '0 0.75rem' }}
            >
              <FigurineCard {...figurine} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselFigurines;
