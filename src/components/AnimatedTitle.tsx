import React from 'react';

interface AnimatedTitleProps {
  text: string;
  colors: string[];
  className?: string;
  letterClassName?: string;
}

export function AnimatedTitle({ text, colors, className = '', letterClassName = '' }: AnimatedTitleProps) {
  return (
    <div className={`flex flex-wrap items-center gap-1 ${className}`}>
      {text.split('').map((letter, index) => (
        <span
          key={`${letter}-${index}`}
          className={`inline-block animate-float-slow ${letterClassName}`}
          style={{ 
            color: colors[index % colors.length],
            animationDelay: `${index * 0.1}s`,
            transform: `rotate(${Math.sin(index) * 2}deg)`
          }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}