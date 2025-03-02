import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import se_logo from '../images/cards/se.png';
import fi_logo from '../images/cards/Fortuna.png';
import ga_logo from '../images/cards/google.png';
import cc_logo from '../images/cards/QS.png';
import sa_logo from '../images/cards/sa.png';
import pc_logo from '../images/cards/pcai.png';
import uiuxlogo from '../images/headers/uxdesign.svg';

const projects = [
  {
    id: 'sriram-emani',
    title: 'Sriram Emani',
    description: 'Personal portfolio website design',
    image: se_logo,
    path: '/projects/uiux-design/sriram-emani'
  },
  {
    id: 'fortuna-insight',
    title: 'Fortuna Insight',
    description: 'Financial analytics platform interface',
    image: fi_logo,
    path: '/projects/uiux-design/fortuna-insight'
  },
  {
    id: 'google-assistant',
    title: 'Google Assistant',
    description: 'Voice interface design system',
    image: ga_logo,
    path: '/projects/uiux-design/google-assistant'
  },
  {
    id: 'quicksnack',
    title: 'Quick Snack',
    description: 'Snack ordering app',
    image: cc_logo,
    path: '/projects/uiux-design/quicksnack'
  },
  {
    id: 'styleai',
    title: 'StyleAI',
    description: 'AI-powered fashion recommendation app',
    image: sa_logo,
    path: '/projects/uiux-design/styleai'
  },
  {
    id: 'promptcraft-ai',
    title: 'Promptcraft AI',
    description: 'AI prompt engineering platform',
    image: pc_logo,
    path: '/projects/uiux-design/promptcraft-ai'
  }
];

function UIUXDesignPage() {
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
                  src={uiuxlogo}
                  alt="Communication Design"
                  className="w-auto h-12 sm:h-12 md:h-16 lg:h-24 object-contain"
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

export default UIUXDesignPage;