import React from 'react';

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function AnimatedImage({ src, alt, className = '' }: AnimatedImageProps) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
        loading="lazy"
      />
    </div>
  );
}