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
    <div className="group min-w-[280px] sm:min-w-[340px] md:min-w-[500px] h-[400px] md:h-[600px] perspective">
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
          <div className="w-full h-full bg-[rgb(23,23,23)] rounded-xl md:rounded-3xl p-4 md:p-8 overflow-y-auto border border-gray-800/50 flex flex-col justify-center">
            <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white/80 text-xs md:text-sm">✦</span>
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-white/90">{illustration.title}</h2>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {illustration.tools.map((tool) => (
                  <span key={tool} className="px-3 md:px-4 py-1 md:py-1.5 bg-gray-800/50 rounded-lg text-xs md:text-sm text-white/70">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-sm md:text-base text-white/70">
              {illustration.impact}
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
    title: 'Home Office',
    image: illus1,
    tools: ['Illustrator'],
    impact: 'Contemporary minimalist illustration with a mid-century modern influence. This flat design style uses muted earth tones and simplified forms to create a sense of calm and lived-in warmth—the digital equivalent of a work from home day for artists. '
  },
  {
    id: 'night-scene',
    title: 'Night Alley',
    image: illus4,
    tools: ['Illustrator', 'Photoshop'],
    impact: 'Urban nostalgia illustration inspired by Tokyo\'s backstreets and animes. This atmospheric artwork blends anime backgrounds with cinematic lighting to evoke that familiar feeling of being lost in a foreign city at night.'
  },
  {
    id: 'character-design',
    title: 'Self-Sabotage',
    image: illus2,
    tools: ['Illustrator', 'Photoshop'],
    impact: 'Neo-gothic pop art combining line art with neon accents. This piece plays with dark humor to comment on how self-deprecation is often used to escape accountability in relationships.'
  },
  {
    id: 'urban-night',
    title: 'Midnight Corner',
    image: illus3,
    tools: ['Illustrator', 'Photoshop'],
    impact: 'Urban noir illustration inspired by Hong Kong\'s neon-lit streets. This piece uses dramatic lighting and minimal color palette to create a sense of mystery and isolation in the city after dark.'
  },
  {
    id: 'punch-man',
    title: 'Hero\'s Burden',
    image: illus5,
    tools: ['Procreate', 'Photoshop'],
    impact: 'Anime fan art in glitch aesthetic style. A dark interpretation of One Punch Man that explores the loneliness of overwhelming power through halftone textures and distortion effects.'
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
          Illustrations are my slow-down time. 
          Unlike the rapid pace of digital work, here I take my time with every stroke. 
          Some pieces take days, others take months. I enjoy the process—playing with colors, forms, and stories without deadlines. 
          This collection is simply stuff I make that my imagination leads me to.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-[95vw] mx-auto">
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