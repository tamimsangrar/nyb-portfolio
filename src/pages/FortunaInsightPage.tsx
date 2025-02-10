import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import fi_header from '../images/headers/fortuna_header.svg';
import fi1 from "../images/Fortuna/1.png";
import fi2 from "../images/Fortuna/2.png";
import fi3 from "../images/Fortuna/3.png";

const skills = [
  "Creative Direction and Guidance",
  "Information Architecture",
  "Design Iteration and Feedback",
  "Communication and Presentation Skills"
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
                    Create a website and brand guidelines that effectively communicate Fortuna's 
                    techno-utopian vision while ensuring consistency across all digital assets.
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
                    Delivered a modern, intuitive website that effectively communicates Fortuna's vision, 
                    resulting in improved user engagement and brand consistency.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* First Horizontal Image */}
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-[90%] mx-auto transform transition-transform duration-500 hover:scale-105">
      <img 
        src={fi1} 
        alt="Fortuna Insight Strategy"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section>

      {/* Strategy & Research Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">1. Strategy & Research</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Analyzed client requirements and industry landscape to develop effective strategy.
            </p>

            <div className="pl-6 border-l border-gray-700 space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Vision Alignment</h4>
                <p className="text-gray-300 leading-relaxed">
                  Conducted thorough discussions to understand and align with Fortuna's 
                  techno-utopian vision and goals.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Market Analysis</h4>
                <p className="text-gray-300 leading-relaxed">
                  Researched competitor websites and industry trends to identify opportunities 
                  for differentiation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Horizontal Image */}
      <section className="px-4 sm:px-6 md:px-8 mb-24">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[90%] mx-auto transform transition-transform duration-500 hover:scale-105">
      <img 
        src={fi2} 
        alt="Fortuna Insight Information Architecture"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section>

      {/* Information Architecture Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">2. Information Architecture</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Developed intuitive navigation and content structure to enhance user experience.
            </p>

            <div className="pl-6 border-l border-gray-700">
              <h4 className="text-xl font-bold mb-4">User Flow Design</h4>
              <p className="text-gray-300 leading-relaxed">
                Created seamless user journeys that effectively communicate Fortuna's services 
                and value proposition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Third Horizontal Image */}
      <section className="px-4 sm:px-6 md:px-8 mb-24">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[90%] mx-auto transform transition-transform duration-500 hover:scale-105">
      <img 
        src={fi3} 
        alt="Fortuna Insight Brand Guidelines"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section>

      {/* Brand Guidelines Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">3. Brand Guidelines Development</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Created comprehensive brand guidelines to ensure consistency.
            </p>

            <div className="pl-6 border-l border-gray-700 space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Visual System</h4>
                <p className="text-gray-300 leading-relaxed">
                  Developed cohesive visual language including typography, color palette, 
                  and design elements.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Documentation</h4>
                <p className="text-gray-300 leading-relaxed">
                  Created detailed documentation to guide future design implementations.
                </p>
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
            <p className="text-white/70 mt-2">User Engagement</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">60%</h3>
            <p className="text-white/70 mt-2">Time on Site</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">45%</h3>
            <p className="text-white/70 mt-2">Conversion Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FortunaInsightPage;