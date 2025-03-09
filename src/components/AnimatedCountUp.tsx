// components/AnimatedCountUp.tsx
import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}

const AnimatedCountUp: React.FC<AnimatedCountUpProps> = ({ 
  end, 
  duration = 2000, 
  suffix = '', 
  prefix = '' 
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    // Create intersection observer to detect when element is in viewport
    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        startAnimation();
        hasAnimated.current = true;
      }
    }, { threshold: 0.1 });

    // Start observing the counter element
    if (countRef.current) {
      observerRef.current.observe(countRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const startAnimation = () => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const currentCount = Math.floor(progress * end);
      
      setCount(currentCount);
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end); // Ensure we end at the exact target number
      }
    };
    
    window.requestAnimationFrame(step);
  };

  return (
    <span ref={countRef} className="inline-block">
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCountUp;