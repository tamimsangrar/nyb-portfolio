import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import sa_header from '../images/headers/sa_header.svg';
import sa1 from "../images/SA/1.png";
import sa2 from "../images/SA/2.png";
import sa3 from "../images/SA/SA_1.png";
import sa4 from "../images/SA/SA_2.png";
import sa5 from "../images/SA/SA_3.png";

const skills = [
  "UX/UI Design",
  "Interaction Design",
  "Technical Integration",
  "AI and Contextual Design",
  "Documentation and Product Strategy"
];

function StyleAIPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={sa_header}
                  alt="STYLE AI"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Create an AI-driven mobile app that simplifies outfit planning and improves shopping 
                    decisions by providing personalized fashion recommendations based on users' existing 
                    wardrobe and preferences.
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
                    Developed an intuitive styling assistant that combines AI technology with user-friendly 
                    features to help users maximize their wardrobes and make informed fashion choices.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/1rloTgKoX4gV5hq1rtKmbZjzCWXcoBSLU/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Project Video
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
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-full sm:w-[80%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={sa1} 
        alt="StyleAI Overview"
        className="w-full h-auto object-contain rounded-3xl"
      />
    </div>
  </div>
</section>

      {/* Research & Analysis Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">1. Research & Analysis</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Conducted user research to understand fashion planning and shopping habits.
            </p>

            <div className="pl-6 border-l border-gray-700 space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-4">User Research</h4>
                <p className="text-gray-300 leading-relaxed">
                  Identified key pain points: wardrobe inefficiency, outfit planning struggles, 
                  and desire for personalized guidance.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Market Analysis</h4>
                <p className="text-gray-300 leading-relaxed">
                  Studied existing fashion apps to identify opportunities for AI integration 
                  and improved user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Development Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">2. Feature Development</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Created core features focused on personalization and ease of use.
            </p>

            <div className="pl-6 border-l border-gray-700">
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              <p className="text-gray-300 leading-relaxed">
                Developed wardrobe digitization, outfit generation, personalized shopping, 
                and community engagement features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Screens Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={sa3} 
                alt="Style AI Mobile Screen 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={sa4} 
                alt="Style AI Mobile Screen 2"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={sa5} 
                alt="Style AI Mobile Screen 3"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <h3 className="text-2xl font-bold">3. AI Integration</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Implemented AI technology for personalized recommendations.
            </p>

            <div className="pl-6 border-l border-gray-700 space-y-8">
              <div>
                <h4 className="text-xl font-bold mb-4">Smart Recommendations</h4>
                <p className="text-gray-300 leading-relaxed">
                  Created algorithms for outfit suggestions based on style preferences, 
                  weather, and occasions.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">User Experience</h4>
                <p className="text-gray-300 leading-relaxed">
                  Designed intuitive interfaces for AI features while maintaining 
                  transparency and user trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Horizontal Image */}
      {/* <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[70%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={sa2} 
        alt="StyleAI Complete Overview"
        className="w-full h-full object-contain rounded-3xl"
      />
    </div>
  </div>
</section> */}

      {/* Stats Section */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8">
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">65%</h3>
            <p className="text-white/70 mt-2">Wardrobe Usage</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">55%</h3>
            <p className="text-white/70 mt-2">Styling Confidence</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">40%</h3>
            <p className="text-white/70 mt-2">Shopping Efficiency</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default StyleAIPage;