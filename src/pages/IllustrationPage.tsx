import React, { useState, useRef } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import illuslogo from "../images/headers/Illustration.svg";
import illus1 from "../images/Illustration/1.png";
import illus2 from "../images/Illustration/2.png";
import illus3 from "../images/Illustration/3.png";
import illus4 from "../images/Illustration/4.png";
import illus5 from "../images/Illustration/5.png";

const FlipCard = ({ illustration }) => {
  return (
    <div className="group min-w-[280px] sm:min-w-[340px] md:min-w-[500px] h-[400px] md:h-[600px] perspective transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-[rgb(23,23,23)] rounded-xl md:rounded-3xl overflow-hidden border border-gray-800/50">
            <img 
              src={illustration.image} 
              alt={illustration.title}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </div>
        
        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="w-full h-full bg-[rgb(23,23,23)] rounded-xl md:rounded-3xl p-4 md:p-8 overflow-y-auto border border-gray-800/50">
            <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white/80 text-xs md:text-sm">✦</span>
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-white/90 mb-1 md:mb-2">{illustration.title}</h2>
                <h3 className="text-base md:text-lg text-white/70">{illustration.category}</h3>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {illustration.tools.map((tool) => (
                <span key={tool} className="px-3 md:px-4 py-1 md:py-1.5 bg-gray-800/50 rounded-lg text-xs md:text-sm text-white/70">
                  {tool}
                </span>
              ))}
            </div>

            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-medium text-white/80 mb-2 md:mb-3">Process</h4>
                <p className="text-sm md:text-base text-white/70">{illustration.process}</p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-medium text-white/80 mb-2 md:mb-3">Creative Challenge</h4>
                <p className="text-sm md:text-base text-white/70">{illustration.challenge}</p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-medium text-white/80 mb-2 md:mb-3">Design Impact</h4>
                <p className="text-sm md:text-base text-white/70">{illustration.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const illustrations = [
  {
    id: 'cozy-space',
    title: 'Cozy Living Space',
    category: 'Environmental Design',
    image: illus1,
    tools: ['Photoshop', 'Procreate'],
    process: 'Created through careful layering and attention to lighting, focusing on creating a warm, lived-in atmosphere',
    challenge: 'Balancing minimalist design with homey details while maintaining a cohesive color palette',
    impact: 'Applied these composition principles to improve the visual hierarchy in UI layouts for home-related applications'
  },
  {
    id: 'night-scene',
    title: 'Night Market Alley',
    category: 'Architectural Illustration',
    image: illus4,
    tools: ['Illustrator', 'Photoshop'],
    process: 'Built the scene from basic geometric shapes, gradually adding texture and atmospheric lighting',
    challenge: 'Creating depth and atmosphere while maintaining architectural accuracy',
    impact: 'Enhanced my ability to design immersive digital experiences through careful attention to environmental storytelling'
  },
  {
    id: 'character-design',
    title: 'Skeletal Emotions',
    category: 'Character Design',
    image: illus2,
    tools: ['Procreate', 'After Effects'],
    process: 'Sketched multiple iterations to find the right balance between playful and meaningful',
    challenge: 'Conveying complex emotions through minimal line work and selective color use',
    impact: 'Strengthened my approach to creating emotionally resonant user interfaces and brand identities'
  },
  {
    id: 'urban-night',
    title: 'Neon Nights',
    category: 'Urban Scenes',
    image: illus3,
    tools: ['Photoshop', 'Illustrator'],
    process: 'Focused on creating atmosphere through careful color grading and lighting effects',
    challenge: 'Balancing the technical precision of architecture with the organic feel of urban life',
    impact: 'Influenced my approach to creating mood and atmosphere in digital interfaces'
  },
  {
    id: 'punch-man',
    title: 'Action Scene',
    category: 'Dynamic Illustration',
    image: illus5,
    tools: ['Procreate', 'Photoshop'],
    process: 'Built the composition around movement and energy, using dynamic poses and strong contrast',
    challenge: 'Capturing motion and impact in a single frame while maintaining visual clarity',
    impact: 'Improved my understanding of visual flow and user attention in interface design'
  }
];

function IllustrationPage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const scroll = (scrollOffset) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scrollOffset;
      setScrollPosition(containerRef.current.scrollLeft);
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <section className="min-h-[60vh] md:min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 px-4 sm:px-6 md:px-8 pt-16 md:pt-24">
        <AnimatedSection animation="fade-in" className="w-full md:w-1/2">
          <div className="relative animate-float-slow">
            <img
              src={illuslogo}
              alt="ILLUSTRATION"
              className="w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={300} className="w-full md:w-1/2 max-w-2xl">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90">
            Illustrations are where I really get to dive in, connecting both my mind and heart with every stroke. 
            Slowing down lets me enjoy the process and make something that feels truly meaningful and authentic. 
            I'll spend days, weeks, or months on a single piece, perfecting each detail. 
            It's a beautiful reminder that taking your time and putting in care can create something you'll deeply love.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="relative max-w-[95vw] mx-auto">

          {/* Carousel */}
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-4 md:gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {illustrations.map((illustration, index) => (
              <AnimatedSection 
                key={illustration.id} 
                animation="fade-in" 
                delay={index * 100}
                className="snap-center"
              >
                <FlipCard illustration={illustration} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default IllustrationPage;