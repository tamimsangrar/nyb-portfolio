import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  bgColor: string;
  bgImage?: string;
}

export function ProjectCard({ title, description, bgColor, bgImage }: ProjectCardProps) {
  return (
    <div 
      className={`${bgColor} rounded-3xl p-6 sm:p-8 w-full md:w-[400px] aspect-square flex-shrink-0 relative overflow-hidden group cursor-pointer`}
    >
      {bgImage && (
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
        <h3 className="text-3xl font-bold mb-2 text-white">
          {title}
        </h3>
        <p className="text-lg text-white/90">
          {description}
        </p>
      </div>
    </div>
  );
}