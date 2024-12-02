import React from 'react';

interface InterestCardProps {
  icon: React.ReactNode;
  subtitle: string;
  title: string;
  image: string;
  link?: string;
}

export function InterestCard({ icon, subtitle, title, image, link }: InterestCardProps) {
  const Card = () => (
    <div className="w-[calc(100vw-2rem)] sm:w-[400px] bg-neutral-900 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      {/* Header Section */}
      <div className="p-6 flex gap-4">
        <div className="mt-1">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-gray-400">{subtitle}</span>
          <span className="text-base font-medium text-white">{title}</span>
        </div>
      </div>

      {/* Image Section */}
      <div className="px-4 pb-6">
        <div className="relative rounded-lg overflow-hidden aspect-video group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        <Card />
      </a>
    );
  }

  return <Card />;
}