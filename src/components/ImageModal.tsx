import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  images: { id: number; url: string; title?: string }[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function ImageModal({ images, currentIndex, onClose, onNext, onPrev }: ImageModalProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') onNext();
    if (e.key === 'ArrowLeft') onPrev();
  }, [onClose, onNext, onPrev]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-lg z-50 flex items-center justify-center touch-none">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors z-20"
        aria-label="Close modal"
      >
        <X className="w-8 h-8" />
      </button>

      {/* Navigation Buttons */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-20"
        aria-label="Next image"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Image Container */}
      <div className="w-full h-full p-4 sm:p-12 flex items-center justify-center">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title || ''}
          className="max-w-full max-h-full object-contain select-none"
        />
      </div>
    </div>
  );
}