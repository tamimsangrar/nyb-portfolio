import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import hrxlogo from '../images/cards/HRX.png';
import almlogo from '../images/cards/AH.png';
import gpvplogo from '../images/cards/GV.png';
import commdesignlogo from '../images/headers/Commdesign.svg';

const projects = [
  {
    id: 'hrx',
    title: 'HRX',
    description: 'Brand identity and communication design for fitness apparel',
    image: hrxlogo,
    path: '/projects/communication-design/hrx'
  },
  {
    id: 'almond-house',
    title: 'Almond House',
    description: 'Visual design and packaging for premium confectionery',
    image: almlogo,
    path: '/projects/communication-design/almond-house'
  },
  {
    id: 'gappe-vappe',
    title: 'Gappe Vappe',
    description: 'Brand identity and social media design for casual dining',
    image: gpvplogo,
    path: '/projects/communication-design/gappe-vappe'
  }
];

function CommunicationDesignPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4 sm:px-6 md:px-8 pt-24">
        {/* Logo */}
        <AnimatedSection animation="fade-in" className="w-full text-center">
          <div 
            className="relative flex justify-center items-center animate-float-slow"
          >
            <img
                  src={commdesignlogo}
                  alt="Communication Design"
                  className="w-auto h-24 sm:h-24 md:h-32 lg:h-40 object-contain"
                />
          </div>
        </AnimatedSection>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <AnimatedSection 
              key={project.id} 
              animation="fade-in" 
              delay={index * 200}
            >
              <Link
                to={project.path}
                className="group relative aspect-square overflow-hidden rounded-2xl bg-black block"
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <h2 className="text-3xl font-bold mb-2 text-white text-center">
                    {project.title}
                  </h2>
                  <p className="text-lg text-white/90 text-center max-w-xs">
                    {project.description}
                  </p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CommunicationDesignPage;