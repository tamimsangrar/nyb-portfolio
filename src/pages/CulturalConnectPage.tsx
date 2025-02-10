import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import cc_header from '../images/headers/cc.svg';
import cc1 from "../images/CC/1.png";
import cc2 from "../images/CC/2.png";
import cc3 from "../images/CC/3.png";

const skills = [
  "User Research",
  "Information Architecture", 
  "Visual Design",
  "Community Engagement",
  "Content Strategy"
];

function CulturalConnectPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
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
                  <p className="text-lg text-gray-300 leading-relaxed mt-4 mb-8">
                    Developed an intuitive platform that effectively showcases Cultural Connect's mission, 
                    facilitates event registration, and encourages community participation.
                  </p>
                  <a 
                    href="https://www.culturalconnect.org/" 
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
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[70%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={cc1} 
        alt="Cultural Connect Overview"
        className="w-full h-full object-contain rounded-3xl"
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
        </div>
      </section>

      {/* Second Horizontal Image */}
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[70%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={cc2} 
        alt="Cultural Connect Overview"
        className="w-full h-full object-contain rounded-3xl"
      />
    </div>
  </div>
</section>

      {/* Design Development Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
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
        </div>
      </section>

      {/* Third Horizontal Image */}
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[70%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={cc3} 
        alt="Cultural Connect Overview"
        className="w-full h-full object-contain rounded-3xl"
      />
    </div>
  </div>
</section>

      {/* Feature Implementation Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-4xl mx-auto">
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
      </section>

      {/* Stats Section */}
      {/* <section className="py-24">
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
      </section> */}
    </div>
  );
}

export default CulturalConnectPage;