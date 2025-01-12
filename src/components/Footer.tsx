import React from 'react';
import { AnimatedSection } from './AnimatedSection';

export function Footer() {
  return (
    <AnimatedSection animation="fade-in" delay={800} className="py-6 bg-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <p className="text-sm font-light tracking-wider opacity-50 hover:opacity-100 transition-opacity text-center">
          nyb.2025
        </p>
      </div>
    </AnimatedSection>
  );
}