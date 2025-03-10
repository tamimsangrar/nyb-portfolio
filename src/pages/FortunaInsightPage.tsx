import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import fi_header from '../images/headers/fortuna_header.svg';
import fi1 from "../images/Fortuna/1.png";
import fi2 from "../images/Fortuna/2.png";
import fi3 from "../images/Fortuna/3.png";

const skills = [
  "Visual Design",
  "Creative Direction",
  "Information Architecture",
  "Rapid Iteration via Feedback"
];

function FortunaInsightPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={fi_header}
                  alt="FORTUNA INSIGHT"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Develop a product website that simplifies AI legal research concepts for potential users, establishes a modern and trustworthy brand, showcases key features, and drives conversions through clear call-to-actions.
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
                    Delivered a modern website that effectively communicated Fortuna's vision, 
                    resulting in improved user engagement and brand consistency.
                  </p>
                  <a 
                    href="#" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    Brand Book
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
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-full sm:w-[90%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={fi1} 
        alt="Fortuna Insight Strategy"
        className="w-full h-auto object-contain rounded-3xl"
      />
    </div>
  </div>
</section>

      {/* Strategy & Research Section */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold mb-16">Design Process</h2>
    <div className="space-y-20">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">1. Research and Analysis</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Conducted thorough market research to inform design decisions and strategy.
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Market Research</h4>
          <p className="text-gray-300 leading-relaxed mb-3">
            Analyzed competitive landscape:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Reviewed leading legal tech marketing websites</li>
            <li>Identified effective messaging patterns</li>
            <li>Studied successful SaaS landing page structures</li>
            <li>Evaluated current design trends in legal tech</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Key Insights</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Clear, benefit-focused messaging resonates best with legal professionals</li>
            <li>Visual demonstrations of features increase understanding</li>
            <li>Trust signals and social proof are crucial for conversion</li>
            <li>Professional yet innovative design aesthetic is essential</li>
          </ul>
        </div>
      </div>
    </div>
    
      <div className="space-y-8">
        <h3 className="text-2xl font-bold">2. Information Architecture</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Developed website structure focusing on optimal user experience and content organization.
        </p>

        <div className="pl-6 border-l border-gray-700 space-y-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Website Structure</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Clear feature presentation hierarchy</li>
              <li>Logical flow of information from benefits to pricing</li>
              <li>Strategic placement of call-to-actions</li>
              <li>Intuitive navigation structure</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>

      {/* Second Horizontal Image */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 mb-24">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-full sm:w-[90%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={fi2} 
        alt="Fortuna Insight Information Architecture"
        className="w-full h-auto object-contain rounded-3xl"
      />
    </div>
  </div>
</section>
</AnimatedSection>
      {/* Information Architecture Section */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
  <div className="space-y-8">
        <h3 className="text-2xl font-bold">3. Brand Guidelines Development</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Established comprehensive brand guidelines to ensure visual consistency and effective communication.
        </p>

        <div className="pl-6 border-l border-gray-700 space-y-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Color System</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Primary palette: Deep purple (#5B21B6) for trust and innovation, complemented by electric blue accents</li>
              <li>Dark theme foundation (#0A0A0A) for sophisticated tech aesthetic</li>
              <li>Strategic use of white space and gradient overlays for depth</li>
              <li>Accent colors chosen to highlight key interactions and CTAs</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Visual Language</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Abstract geometric patterns representing data complexity</li>
              <li>Gradient overlays suggesting depth and sophistication</li>
              <li>Custom iconography style for feature representation</li>
              <li>Defined animation principles for interactive elements</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Documentation</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Comprehensive usage guidelines for all brand elements</li>
              <li>Detailed spacing and grid system documentation</li>
              <li>Example applications across different contexts</li>
              <li>Do's and don'ts for maintaining brand consistency</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Implementation</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Created dark theme design to align with tech-forward positioning</li>
              <li>Designed responsive layouts following brand guidelines</li>
              <li>Curated custom animations for key interactions</li>
            </ul>
          </div>
        </div>
      </div>
  </div>
</section>
      </AnimatedSection>
      {/* Third Horizontal Image */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 mb-24">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-full sm:w-[90%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={fi3} 
        alt="Fortuna Insight Brand Guidelines"
        className="w-full h-auto object-contain rounded-3xl"
      />
    </div>
  </div>
</section>
</AnimatedSection>
      {/* Brand Guidelines Section */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">4. Implementation & Results</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Engaged in an iterative design process with consistent client feedback to refine the final product.
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Client Collaboration</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Regular design review sessions with stakeholders</li>
            <li>Iterative refinement based on client feedback</li>
            <li>Detailed walkthroughs of design decisions</li>
            <li>Clear documentation of brand guidelines</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Design Evolution</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Multiple iterations of homepage</li>
            <li>Refinement of feature presentation</li>
            <li>Enhancement of visual hierarchy</li>
            <li>Optimization of call-to-action placement</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Key Learnings</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Importance of clear communication when presenting complex features</li>
            <li>Value of consistent client collaboration throughout the design process</li>
            <li>Effectiveness of iterative design in achieving client goals</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
      </AnimatedSection>
      {/* Implementation Section */}
      {/* Stats Section */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8">
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">70%</h3>
            <p className="text-white/70 mt-2">Increase in signups</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">2.5X</h3>
            <p className="text-white/70 mt-2">Time on site</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">+2</h3>
            <p className="text-white/70 mt-2">Increase in NPS score</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default FortunaInsightPage;