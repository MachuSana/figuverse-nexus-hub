
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { Gallery, Image } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageGalleryProps {
  images: {
    id: string;
    src: string;
    alt: string;
  }[];
  className?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, className }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  return (
    <div className={cn("grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", className)}>
      {images.map((image, index) => (
        <Dialog key={image.id}>
          <DialogTrigger asChild>
            <div 
              className="relative aspect-square overflow-hidden rounded-md cursor-pointer group"
              onClick={() => setCurrentImageIndex(index)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Image className="w-8 h-8 text-white" />
              </div>
            </div>
          </DialogTrigger>
          <DialogContent className="max-w-4xl p-0 bg-black overflow-hidden">
            <div className="relative h-[80vh]">
              <img 
                src={images[currentImageIndex].src} 
                alt={images[currentImageIndex].alt}
                className="object-contain w-full h-full"
              />
              
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 p-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="15 18 9 12 15 6"/></svg>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4"><polyline points="9 18 15 12 9 6"/></svg>
                </Button>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                {currentImageIndex + 1} / {images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};

export default ImageGallery;
