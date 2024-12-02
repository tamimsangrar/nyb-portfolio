import React from 'react';
import { AnimatedSection } from './AnimatedSection';

interface AnimatedListProps {
  items: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  animation?: 'fade-in' | 'slide-from-left' | 'slide-from-right' | 'slide-from-bottom' | 'scale-in' | 'rotate-in';
  baseDelay?: number;
  delayIncrement?: number;
}

export function AnimatedList({ 
  items, 
  className = '', 
  itemClassName = '',
  animation = 'fade-in',
  baseDelay = 0,
  delayIncrement = 100
}: AnimatedListProps) {
  return (
    <div className={className}>
      {items.map((item, index) => (
        <AnimatedSection
          key={index}
          animation={animation}
          delay={baseDelay + (index * delayIncrement)}
          className={itemClassName}
        >
          {item}
        </AnimatedSection>
      ))}
    </div>
  );
}