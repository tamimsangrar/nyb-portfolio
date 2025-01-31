import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import sa_header from '../images/headers/sa_header.svg';
import sa1 from "../images/SA/1.png";
import sa2 from "../images/SA/2.png";

const skills = [
  "UX/UI Design",
  "Interaction Design",
  "Technical Integration",
  "AI and Contextual Design",
  "Documentation and Product Strategy"
];

const galleryItems = [
  { image: sa1 },
  { image: sa2 }
];

function StyleAIPage() {
  return (
    <div className="min-h-screen pt-24">
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
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Developed an intuitive styling assistant that combines AI technology with user-friendly 
                    features to help users maximize their wardrobes and make informed fashion choices.
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
                      alt="Style AI Project" 
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24">
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
      </section>
    </div>
  );
}

export default StyleAIPage;