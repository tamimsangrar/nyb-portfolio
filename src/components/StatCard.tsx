// components/StatCard.tsx
import React, { useState } from 'react';
import AnimatedCountUp from './AnimatedCountUp';

interface StatCardProps {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  icon?: React.ReactNode;
  accentColor?: string;
}

const StatCard: React.FC<StatCardProps> = ({ 
  value, 
  label, 
  suffix = '%', 
  prefix = '',
  icon,
  accentColor = "#4F46E5" // Default indigo color
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Convert hex to rgba for the glow effect
  const getRgba = (hex: string, alpha: number = 0.15) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <div 
      className="relative bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 transition-all duration-500 overflow-hidden"
      style={{
        boxShadow: isHovered ? `0 0 30px ${getRgba(accentColor, 0.2)}` : 'none',
        transform: isHovered ? 'translateY(-5px)' : 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      {/* Content container with flex layout */}
      <div className="flex flex-col items-center text-center relative z-10">
        {/* Icon (if provided) */}
        {icon && (
          <div className="mb-3" style={{ color: accentColor }}>
            {icon}
          </div>
        )}
        
        {/* Value with animated count */}
        <h3 className="text-5xl font-bold mb-1 transition-colors duration-300"
            style={{ color: isHovered ? accentColor : 'rgba(255, 255, 255, 0.9)' }}>
          <AnimatedCountUp end={value} suffix={suffix} prefix={prefix} />
        </h3>
        
        {/* Label */}
        <p className="text-white/70 mt-2 text-lg font-medium">
          {label}
        </p>
        
        {/* Bottom accent line that expands on hover */}
        <div 
          className="h-1 mt-4 rounded-full transition-all duration-500"
          style={{ 
            background: accentColor,
            width: isHovered ? '100%' : '40px'
          }}
        />
      </div>
    </div>
  );
};

export default StatCard;