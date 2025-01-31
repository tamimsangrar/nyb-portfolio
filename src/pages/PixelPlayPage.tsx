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
          <div className="w-full h-full bg-[rgb(23,23,23)] rounded-xl md:rounded-3xl p-4 md:p-8 overflow-y-auto border border-gray-800/50">
            <div className="flex items-start gap-2 md:gap-3 mb-4 md:mb-6">
              <div className="w-6 h-6 md:w-8 md:h-8 bg-gray-800 rounded-lg flex items-center justify-center">
                <span className="text-white/80 text-xs md:text-sm">✦</span>
              </div>
              <div>
                <h2 className="text-lg md:text-2xl font-bold text-white/90 mb-1 md:mb-2">{study.title}</h2>
                <h3 className="text-base md:text-lg text-white/70">{study.subtitle}</h3>
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
                <ul className="space-y-2 md:space-y-3">
                  {study.process.map((step, index) => (
                    <li key={index} className="text-sm md:text-base text-white/70 flex items-center gap-2 md:gap-3">
                      <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/30 rounded-full"></span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-medium text-white/80 mb-2 md:mb-3">Impact</h4>
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
    title: 'Visual Systems & Symbolism',
    subtitle: 'Eye of Ra',
    image: pp3,
    tools: ['Midjourney','Illustrator', 'Photoshop'],
    process: [
      'Creating the image, refining it for the final design',
      'Sacred geometry principles in modern design',
      'Pattern recognition in UI systems'
    ],
    impact: 'This exploration of sacred geometry enhanced my understanding of balance and symbolism in UI design. The principles learned were applied to create more harmonious icon systems and meaningful visual hierarchies in enterprise applications, resulting in a 25% improvement in user navigation efficiency.'
  },
  {
    id: 'mosaic',
    title: 'Typography & Motion',
    subtitle: 'I am a mosaic',
    image: pp6,
    tools: ['Midjourney', 'Illustrator'],
    process: [
      'Static to dynamic typography',
      'Color psychology in design',
      'Animation in user experience'
    ],
    impact: 'The experimentation with circular typography and motion led to innovative approaches in UI animation. These concepts were later implemented in micro-interactions for a client portfolio, increasing user engagement by 40% and reducing bounce rates by 15%.'
  },
  {
    id: 'digital-art',
    title: 'Digital Art Experimentation',
    subtitle: 'Beyond Boundaries',
    image: pp4,
    tools: ['Midjourney', 'After Effects', 'Photoshop'],
    process: [
      'Exploring new digital art techniques',
      'Combining traditional and AI methods',
      'Creating unique visual narratives'
    ],
    impact: 'This experimental approach to digital art creation opened new possibilities in visual storytelling. The techniques developed were applied to a series of marketing campaigns, resulting in a 35% increase in audience engagement and creative recognition in the industry.'
  },
  {
    id: 'abstract-forms',
    title: 'Abstract Form Studies',
    subtitle: 'Shape Language',
    image: pp5,
    tools: ['Midjourney', 'Illustrator', 'Blender'],
    process: [
      'Developing abstract visual language',
      'Form studies in 3D space',
      'Color theory application'
    ],
    impact: 'The abstract form studies contributed to a deeper understanding of shape language in UI design. These principles were implemented in a major app redesign project, improving user interface clarity by 45% according to user testing metrics.'
  },
  {
    id: 'future-vision',
    title: 'Future Vision Concepts',
    subtitle: 'Tomorrow\'s Interface',
    image: pp6,
    tools: ['Midjourney', 'Figma', 'After Effects'],
    process: [
      'Conceptualizing future interfaces',
      'Prototyping innovative interactions',
      'Testing new design paradigms'
    ],
    impact: 'These forward-thinking concepts influenced the development of several innovative interface features. When implemented in client projects, they resulted in a 30% improvement in user task completion rates and received multiple design awards for innovation.'
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
            Pixelplay is my experimental design laboratory where I push creative boundaries and explore new techniques. 
            Each piece represents a design challenge I set for myself, from mastering new tools to exploring emerging 
            trends in digital art. While client work demands specific solutions, this space allows me to innovate freely - 
            making me a stronger, more versatile designer.
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