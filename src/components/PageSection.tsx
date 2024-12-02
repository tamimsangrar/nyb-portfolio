import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface PageSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-from-left' | 'slide-from-right' | 'slide-from-bottom' | 'scale-in' | 'rotate-in';
  delay?: number;
}

export function PageSection({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0 
}: PageSectionProps) {
  return (
    <AnimatedSection
      animation={animation}
      delay={delay}
      className={`px-4 sm:px-6 md:px-8 py-24 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </AnimatedSection>
  );
}