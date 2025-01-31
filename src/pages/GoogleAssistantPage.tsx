import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import ga_header from '../images/headers/google_assistant.svg';
import ga1 from "../images/GA/1.png";
import ga2 from "../images/GA/2.png";
import ga3 from "../images/GA/3.png";
import ga4 from "../images/GA/4.png";

const skills = [
  "Voice UI Design",
  "UX Design",
  "UX Research",
  "Prototyping",
  "Usability Testing"
];

const galleryItems = [
  { image: ga1 },
  { image: ga2 },
  { image: ga3 },
  { image: ga4 }
];

function GoogleAssistantPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={ga_header}
                  alt="GOOGLE ASSISTANT"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Create a hands-free, personalized wellness solution that integrates with users' daily 
                    routines using Google Assistant's voice and AI capabilities, eliminating the need for 
                    manual tracking.
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
                    Designed an intuitive voice-first wellness coach that seamlessly integrates with Google 
                    Assistant, featuring personalized recommendations and cross-device consistency.
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
                      alt="Google Assistant Project" 
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
                Analyzed current wellness tracking applications and voice assistant behaviors.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Market Analysis</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Studied existing wellness apps' limitations and voice assistant capabilities 
                    to identify opportunities for innovation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">User Research</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Identified key user needs: hands-free tracking, privacy concerns, and 
                    preference for simple, actionable insights.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">2. Solution Development</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Created comprehensive voice-first wellness experience.
              </p>

              <div className="pl-6 border-l border-gray-700">
                <h4 className="text-xl font-bold mb-4">Feature Design</h4>
                <p className="text-gray-300 leading-relaxed">
                  Developed voice commands, visual components, and personalized suggestions 
                  while ensuring consistent experience across devices.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">3. Implementation & Testing</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Refined the design through iterative testing and feedback.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Interface Design</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Created minimalist visual design aligned with Google's Material Design 
                    principles and clear data visualization patterns.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Privacy Implementation</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Integrated robust privacy measures and transparent AI-driven suggestions 
                    to build user trust.
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
            <h3 className="text-5xl font-bold text-white/90">Voice UI</h3>
            <p className="text-white/70 mt-2">First Approach</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">5+</h3>
            <p className="text-white/70 mt-2">Key Features</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">100%</h3>
            <p className="text-white/70 mt-2">Privacy Focus</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GoogleAssistantPage;