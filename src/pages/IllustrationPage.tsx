import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ImageModal } from '../components/ImageModal';
import illuslogo from "../images/headers/illustration.png"
import illus1 from "../images/Illustration/1.png";
import illus2 from "../images/Illustration/2.png";
import illus3 from "../images/Illustration/3.png";
import illus4 from "../images/Illustration/4.png";
import illus5 from "../images/Illustration/5.png";
const galleryImages = [
  {
    id: 1,
    url: illus1,
    className: "col-span-1"
  },
  {
    id: 2,
    url: illus2,
    className: "col-span-1"
  },
  {
    id: 3,
    url: illus3,
    className: "col-span-1"
  },
  {
    id: 4,
    url: illus4,
    className: "col-span-1"
  },
  {
    id: 5,
    url: illus5,
    className: "col-span-1"
  }
];

function IllustrationPage() {
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
              src={illuslogo}
              alt="ILLUSTRATION"
              className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
            />
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection animation="fade-in" delay={300} className="w-full md:w-1/2 max-w-2xl">
          <p className="text-xl sm:text-2xl md:text-3xl leading-relaxed text-white/90">
            Illustrations, in particular, enable me to immerse myself fully, engaging both my mind and heart. 
            Embracing a slower pace allows me to appreciate the process and create something truly meaningful. 
            I dedicate days, weeks, even months to these creations.
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

export default IllustrationPage;