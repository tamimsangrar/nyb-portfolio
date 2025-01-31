import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import se_header from '../images/headers/se_header.svg';
import se1 from "../images/SE/1.png";
import se2 from "../images/SE/2.png";
import se3 from "../images/SE/3.png";

const skills = [
  "UX Leadership",
  "Information Architecture",
  "Portfolio Website Design",
  "Brand Identity"
];

const galleryItems = [
  { image: se1 },
  { image: se2 },
  { image: se3 }
];

function SriramEmaniPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={se_header}
                  alt="SRIRAM EMANI"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Develop a portfolio website that effectively showcases the diverse talents and achievements 
                    of a TEDx speaker, entrepreneur, and multi-disciplinary artist to elevate his visibility 
                    in Hollywood.
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
                    Created an engaging portfolio that effectively communicates Sriram's diverse talents, 
                    leading to increased industry visibility and new performance opportunities.
                  </p>
                  <a 
                    href="https://www.sriramemani.com/" 
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
                      alt="Sriram Emani Project" 
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
              <h3 className="text-2xl font-bold">1. Discovery & Strategy</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Conducted in-depth interviews to understand Sriram's vision, goals, and unique value proposition.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Personal Brand Analysis</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Analyzed Sriram's existing online presence and identified opportunities 
                    to better showcase his diverse talents and achievements.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Competitor Research</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Studied successful performer portfolios to identify best practices and 
                    differentiation opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">2. Information Architecture</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Developed a content strategy that effectively communicates Sriram's multi-faceted career.
              </p>

              <div className="pl-6 border-l border-gray-700">
                <h4 className="text-xl font-bold mb-4">Content Organization</h4>
                <p className="text-gray-300 leading-relaxed">
                  Created intuitive navigation and content hierarchy that highlights key achievements 
                  while maintaining a cohesive narrative.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">3. Design & Development</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Implemented the design with a focus on visual storytelling and user engagement.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Visual Design</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Created a sophisticated design system that reflects Sriram's professional image.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Interactive Elements</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Incorporated engaging interactions and transitions to create an immersive experience.
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
            <h3 className="text-5xl font-bold text-white/90">50%</h3>
            <p className="text-white/70 mt-2">Increase in Inquiries</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">35%</h3>
            <p className="text-white/70 mt-2">Time on Site</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">40%</h3>
            <p className="text-white/70 mt-2">Engagement Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SriramEmaniPage;