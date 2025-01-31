import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import cc_header from '../images/headers/cc.svg';
import cc1 from "../images/CC/1.png";

const skills = [
  "User Research",
  "Information Architecture", 
  "Visual Design",
  "Community Engagement",
  "Content Strategy"
];

const galleryItems = [
  { image: cc1 }
];

function CulturalConnectPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={cc_header}
                  alt="CULTURAL CONNECT"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Create a dynamic, user-friendly website that effectively communicates Cultural Connect's 
                    mission while enhancing community engagement and outreach.
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
                    Developed an intuitive platform that effectively showcases Cultural Connect's mission, 
                    facilitates event registration, and encourages community participation.
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
                      alt="Cultural Connect Project" 
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
                Conducted research on community organization websites and user needs.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">User Research</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Identified key features needed for community engagement and event participation.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Competitor Analysis</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Studied successful community platforms to understand best practices and 
                    opportunities for innovation.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">2. Design Development</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Created an inclusive and engaging user experience.
              </p>

              <div className="pl-6 border-l border-gray-700">
                <h4 className="text-xl font-bold mb-4">Interface Design</h4>
                <p className="text-gray-300 leading-relaxed">
                  Developed warm, inviting visuals and intuitive navigation to reflect 
                  community values and facilitate engagement.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">3. Feature Implementation</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Integrated key community engagement features.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Community Tools</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Built event registration, volunteer sign-up, and community storytelling features.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Content Strategy</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Developed mission-driven content structure to highlight cultural diversity 
                    and community impact.
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
            <p className="text-white/70 mt-2">Event Registration</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">30%</h3>
            <p className="text-white/70 mt-2">Volunteer Sign-ups</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">45%</h3>
            <p className="text-white/70 mt-2">Community Engagement</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CulturalConnectPage;