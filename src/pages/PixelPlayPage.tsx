import React from 'react';
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
    <div className="group min-w-[280px] sm:min-w-[340px] md:min-w-[500px] h-[400px] md:h-[600px] perspective">
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
          <div className="w-full h-full bg-[rgb(23,23,23)] rounded-xl md:rounded-3xl p-4 md:p-8 overflow-y-auto border border-gray-800/50 flex flex-col justify-center">
            <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white/80 text-xs md:text-sm">✦</span>
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-white/90">{study.title}</h2>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {study.tools.map((tool) => (
                  <span key={tool} className="px-3 md:px-4 py-1 md:py-1.5 bg-gray-800/50 rounded-lg text-xs md:text-sm text-white/70">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-sm md:text-base text-white/70">
              {study.impact}
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
    title: 'Eye of Ra Mystic Symbolism & Digital Alchemy',
    image: pp3,
    tools: ['Midjourney', 'Photoshop'],
    impact: 'Experimenting with texture and metallics to reimagine ancient symbols in a contemporary digital aesthetic. A modern interpretation using gold leafing techniques and distressed textures.'
  },
  {
    id: 'mosaic',
    title: 'Heartbeat',
    image: pp6,
    tools: ['Midjourney', 'Illustrator'],
    impact: 'Playing with text and color waves to create visual rhythm.'
  },
  {
    id: 'digital-art',
    title: 'Open Fields',
    image: pp4,
    tools: ['Midjourney', 'Photoshop'],
    impact: 'Digital collage with UI mockup aesthetic, inspired by vaporwave and Y2K nostalgia design.'
  },
  {
    id: 'abstract-forms',
    title: 'It\'s Not Reality',
    image: pp5,
    tools: ['Midjourney', 'Photoshop'],
    impact: 'Retro sci-fi poster with analog film grain texture and typography overlay.'
  }
];

function PixelPlayPage() {
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
          Pixelplay is my digital playground where I create just for the fun of creating. 
          No client briefs, no deadlines, just me experimenting with AI, Photoshop, and any new tool that catches my interest. 
          It's where I make unconventional stuff that doesn't need to solve any problem except my own creative restlessness. 
          Each piece represents a moment of 'what if?' that keeps my skills fresh and my imagination wilder than my day job would allow. 
          Consider this my visual journal of digital tinkering.
          </p>
        </AnimatedSection>
      </section>

      <section className="px-4 sm:px-6 md:px-8 py-16 md:py-24">
        <div className="max-w-[95vw] mx-auto">
          <div className="flex overflow-x-auto gap-4 md:gap-8 pb-8 snap-x snap-mandatory hide-scrollbar">
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