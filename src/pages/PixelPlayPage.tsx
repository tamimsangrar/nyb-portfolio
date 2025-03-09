import React, { useState, useRef } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import pixeplaylogo from "../images/headers/pixelplay.svg";
import pp1 from "../images/Pixelplay/1.jpg";
import pp2 from "../images/Pixelplay/2.jpg";
import pp3 from "../images/Pixelplay/3.jpg";
import pp4 from "../images/Pixelplay/4.jpg";
import pp5 from "../images/Pixelplay/5.jpg";
import pp6 from "../images/Pixelplay/6.jpg";

const FlipCard = ({ study }) => {
  return (
    <div className="group min-w-[280px] sm:min-w-[340px] md:min-w-[500px] h-[400px] md:h-[600px] perspective transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">
        {/* Front */}
        <div className="absolute inset-0 backface-hidden">
          <div className="w-full h-full bg-[rgb(23,23,23)] rounded-xl md:rounded-3xl overflow-hidden border border-gray-800/50">
            <img 
              src={study.image} 
              alt={study.title}
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
                <h2 className="text-lg md:text-2xl font-bold text-white/90 mb-1 md:mb-2">{study.title}</h2>
                <h3 className="text-base md:text-lg text-white/70">{study.category || 'Experimental Design'}</h3>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              {study.tools.map((tool) => (
                <span key={tool} className="px-3 md:px-4 py-1 md:py-1.5 bg-gray-800/50 rounded-lg text-xs md:text-sm text-white/70">
                  {tool}
                </span>
              ))}
            </div>

            <div className="space-y-4 md:space-y-6">
              <div>
                <h4 className="text-base md:text-lg font-medium text-white/80 mb-2 md:mb-3">Process</h4>
                <p className="text-sm md:text-base text-white/70">{study.process || 'Created through experimental techniques, focusing on pushing creative boundaries and exploring new digital art possibilities.'}</p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-medium text-white/80 mb-2 md:mb-3">Creative Challenge</h4>
                <p className="text-sm md:text-base text-white/70">{study.challenge || 'Self-imposed challenges to explore new tools, techniques, and creative approaches outside of client constraints.'}</p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-medium text-white/80 mb-2 md:mb-3">Design Impact</h4>
                <p className="text-sm md:text-base text-white/70">{study.impact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const caseStudies = [
  {
    id: 'eye-of-ra',
    title: 'Eye of Ra',
    category: 'Visual Symbolism',
    image: pp3,
    tools: ['Midjourney','Illustrator', 'Photoshop'],
    process: 'Created through blending traditional symbolism with modern digital techniques, exploring the intersection of ancient and contemporary visual language.',
    challenge: 'Maintaining the integrity of historical symbolism while adding a contemporary digital interpretation.',
    impact: 'The Eye of Ra project showcases my ability to blend traditional and modern design elements.'
  },
  {
    id: 'mosaic',
    title: 'I am a mosaic',
    category: 'Typography Exploration',
    image: pp6,
    tools: ['Midjourney', 'Illustrator'],
    process: 'Developed through iterative exploration of circular typography patterns, gradually building complexity through layering techniques.',
    challenge: 'Creating visual coherence while experimenting with unconventional typographic arrangements and movement.',
    impact: 'The experimentation with circular typography and motion led to innovative approaches in UI animation. These concepts were later implemented in micro-interactions for a client portfolio, increasing user engagement by 40% and reducing bounce rates by 15%.'
  },
  {
    id: 'digital-art',
    title: 'Why am i here?',
    category: 'Conceptual Digital Art',
    image: pp4,
    tools: ['Midjourney', 'After Effects', 'Photoshop'],
    process: 'Explored existential themes through digital manipulation, combining AI-generated imagery with manual post-processing techniques.',
    challenge: 'Translating abstract philosophical concepts into visually compelling imagery while maintaining emotional resonance.',
    impact: 'This experimental approach to digital art creation opened new possibilities in visual storytelling. The techniques developed were applied to a series of marketing campaigns, resulting in a 35% increase in audience engagement and creative recognition in the industry.'
  },
  {
    id: 'abstract-forms',
    title: 'Its not reality',
    category: 'Abstract Composition',
    image: pp5,
    tools: ['Midjourney', 'Illustrator', 'Blender'],
    process: 'Built from fundamental shape studies, progressively adding complexity through 3D modeling and texture experimentation.',
    challenge: 'Balancing compositional harmony with intentional visual tension to create compelling abstract forms.',
    impact: 'The abstract form studies contributed to a deeper understanding of shape language in UI design. These principles were implemented in a major app redesign project, improving user interface clarity by 45% according to user testing metrics.'
  }
];

function PixelPlayPage() {
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
              src={pixeplaylogo}
              alt="PIXELPLAY"
              className="w-full h-[100px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
            />
          </div>
        </AnimatedSection>

        <AnimatedSection animation="fade-in" delay={300} className="w-full md:w-1/2 max-w-2xl">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-white/90">
            Pixelplay is my experimental design laboratory where I push creative boundaries and explore new techniques. 
            Each piece represents a design challenge I set for myself, from mastering new tools to exploring emerging 
            trends in digital art. While client work demands specific solutions, this space allows me to innovate freely - 
            making me a stronger, more versatile designer.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="relative max-w-[95vw] mx-auto">
          <div 
            ref={containerRef}
            className="flex overflow-x-auto gap-4 md:gap-8 pb-8 snap-x snap-mandatory hide-scrollbar"
          >
            {caseStudies.map((study, index) => (
              <AnimatedSection 
                key={study.id} 
                animation="fade-in" 
                delay={index * 100}
                className="snap-center"
              >
                <FlipCard study={study} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PixelPlayPage;