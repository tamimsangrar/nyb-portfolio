import React, { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-from-left' | 'slide-from-right' | 'slide-from-bottom' | 'scale-in' | 'rotate-in';
  delay?: number;
}

export function AnimatedSection({ 
  children, 
  className = '', 
  animation = 'fade-in',
  delay = 0 
}: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add(animation);
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [animation, delay]);

  return (
    <div 
      ref={sectionRef}
      className={`opacity-0 ${className}`}
      style={{ 
        willChange: 'opacity, transform',
        transformOrigin: 'center center'
      }}
    >
      {children}
    </div>
  );
}