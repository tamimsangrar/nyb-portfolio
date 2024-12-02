import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ImageModal } from '../components/ImageModal';
import pixeplaylogo from "../images/headers/pixelplay.png"
import pp1 from "../images/Pixelplay/1.jpg";
import pp2 from "../images/Pixelplay/2.jpg";
import pp3 from "../images/Pixelplay/3.jpg";
import pp4 from "../images/Pixelplay/4.jpg";
import pp5 from "../images/Pixelplay/5.jpg";
import pp6 from "../images/Pixelplay/6.jpg";
const galleryImages = [
  {
    id: 1,
    url: pp2,
    className: "col-span-1"
  },
  {
    id: 2,
    url: pp3,
    className: "col-span-1"
  },
  {
    id: 3,
    url: pp1,
    className: "col-span-1"
  },
  {
    id: 4,
    url: pp4,
    className: "col-span-1"
  },
  {
    id: 5,
    url: pp6,
    className: "col-span-1"
  },
  {
    id: 6,
    url: pp5,
    className: "col-span-1"
  }
];

function PixelPlayPage() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex(prev => 
      prev === null ? null : (prev + 1) % galleryImages.length
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex(prev =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 md:px-8 pt-24">
        {/* Logo */}
        <AnimatedSection animation="fade-in" className="w-full md:w-1/2">
          <div 
            className="relative animate-float-slow" 
          >
            <img
              src={pixeplaylogo}
              alt="PIXELPLAY"
              className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
            />
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection animation="fade-in" delay={300} className="w-full md:w-1/2 max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-white/90">
            Exploring Pixelplay is my way of unwinding, a break from creating things for everyone else. 
            It's a departure from the pursuit of likes or money. Instead, it's about unleashing creativity 
            without the pressure to be the absolute best.
          </p>
        </AnimatedSection>
      </section>

      {/* Gallery Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24 bg-black" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection 
                key={image.id} 
                animation="fade-in" 
                delay={index * 100}
                className={`${image.className}`}
              >
                <button
                  onClick={() => handleImageClick(index)}
                  className="relative w-full overflow-hidden rounded-2xl aspect-square cursor-pointer block group"
                >
                  <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10" />
                  <img
                    src={image.url}
                    alt=""
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
        
        {/* Image Modal */}
        {selectedImageIndex !== null && (
          <ImageModal
            images={galleryImages}
            currentIndex={selectedImageIndex}
            onClose={handleClose}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </section>
    </div>
  );
}

export default PixelPlayPage;