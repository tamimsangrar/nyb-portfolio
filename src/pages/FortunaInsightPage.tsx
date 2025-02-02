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

const galleryItems = [
  { image: fi1 },
  { image: fi2 },
  { image: fi3 }
];

function FortunaInsightPage() {
  return (
    <div className="min-h-screen pt-24">
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
                                <a 
                                  href="https://www.fortuna-insights.com/" 
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
                      alt="Fortuna Insight Project" 
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