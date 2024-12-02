import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface AnimatedGridProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  animation?: 'fade-in' | 'slide-from-left' | 'slide-from-right' | 'slide-from-bottom' | 'scale-in' | 'rotate-in';
  baseDelay?: number;
  delayIncrement?: number;
}

export function AnimatedGrid({ 
  children, 
  className = '', 
  itemClassName = '',
  animation = 'fade-in',
  baseDelay = 0,
  delayIncrement = 100
}: AnimatedGridProps) {
  return (
    <div className={className}>
      {React.Children.map(children, (child, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={baseDelay + (index * delayIncrement)}
          className={itemClassName}
        >
          {child}
        </AnimatedSection>
      ))}
    </div>
  );
}