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

function PromptcraftAIPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
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
                  <p className="text-lg text-gray-300 leading-relaxed mt-4 mb-8">
                    Developed a user-friendly plugin that streamlines content creation within design tools, 
                    featuring AI-powered suggestions and customization options.
                  </p>
                  <a 
                    href="https://promptcraft.ai/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Project
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 ml-2 transform transition-transform group-hover:translate-x-1 animate-bounce" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* First Horizontal Image */}
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[60%] mx-auto transform transition-transform duration-500 hover:scale-105">
      <img 
        src={pc4} 
        alt="Google Assistant Overview"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section>

      {/* Research & Discovery Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Second Horizontal Image */}
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[60%] mx-auto transform transition-transform duration-500 hover:scale-105">
      <img 
        src={pc2} 
        alt="Google Assistant Overview"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section>

      {/* Feature Development Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Third Horizontal Image */}
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[60%] mx-auto transform transition-transform duration-500 hover:scale-105">
      <img 
        src={pc3} 
        alt="Google Assistant Overview"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section>

      {/* Integration & Testing Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
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
      </section>

      {/* Final Horizontal Image */}
      {/* <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[60%] mx-auto transform transition-transform duration-500 hover:scale-105">
      <img 
        src={pc4} 
        alt="Google Assistant Overview"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section> */}


      {/* Stats Section */}
      {/* <section className="py-24">
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
      </section> */}
    </div>
  );
}

export default PromptcraftAIPage;