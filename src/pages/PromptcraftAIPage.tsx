import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import pc_header from '../images/headers/promptc.svg';
import pc1 from "../images/PC/pc_header1.png";
import pc2 from "../images/PC/pc_header2.png";
import pc3 from "../images/PC/pc_header3.png";
import pc4 from "../images/PC/pc_header4.png";

const skills = [
  "UX/UI Design",
  "Interaction Design",
  "Technical Integration",
  "AI and Contextual Design",
  "Documentation and Product Strategy"
];

const galleryItems = [
  { image: pc1, alt: "Content Generation Interface" },
  { image: pc2, alt: "Style Customization" },
  { image: pc3, alt: "Version History" },
  { image: pc4, alt: "Integration Settings" }
];

function PromptcraftAIPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={pc_header}
                  alt="PROMPTCRAFT AI"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Create an AI writing assistant plugin that seamlessly integrates with design software 
                    to help designers generate high-quality content without disrupting their workflow.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={400}>
                <div className="space-y-4">
                  <h2 className="text-2xl text-gray-400">Skills</h2>
                  <ul className="space-y-3">
                    {skills.map((skill, index) => (
                      <li key={index} className="text-xl sm:text-2xl">{skill}</li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={600}>
                <div>
                  <h2 className="text-2xl text-gray-400">Outcome</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Developed a user-friendly plugin that streamlines content creation within design tools, 
                    featuring AI-powered suggestions and customization options.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="overflow-hidden">
          <div className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory no-scrollbar">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 w-[500px] h-[500px] ${index === 0 ? 'first:pl-8' : ''} ${
                  index === galleryItems.length - 1 ? 'last:pr-8' : ''
                }`}
              >
                <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-full h-full overflow-hidden">
                  <div className="relative h-full w-full">
                    <img 
                      src={item.image} 
                      alt={item.alt} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-16">Design Process</h2>

          <div className="space-y-20">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">1. Research & Discovery</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Investigated designer pain points and content creation needs.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">User Research</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Identified key challenges: time constraints, consistency issues, and creativity blocks.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Market Analysis</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Studied existing tools and identified opportunities for AI integration.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">2. Feature Development</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Created core plugin functionality and interface.
              </p>

              <div className="pl-6 border-l border-gray-700">
                <h4 className="text-xl font-bold mb-4">Key Features</h4>
                <p className="text-gray-300 leading-relaxed">
                  Developed contextual content generation, customization options, version history, 
                  and design tool integration.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">3. Integration & Testing</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Implemented plugin across design platforms.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Software Integration</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Ensured seamless functionality with Figma, Adobe XD, and Sketch.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">User Testing</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Conducted extensive testing to refine features and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8">
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">40%</h3>
            <p className="text-white/70 mt-2">Time Saved</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">3+</h3>
            <p className="text-white/70 mt-2">Design Tools</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">90%</h3>
            <p className="text-white/70 mt-2">User Satisfaction</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PromptcraftAIPage;