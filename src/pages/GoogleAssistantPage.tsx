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

function GoogleAssistantPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
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
                  <p className="text-lg text-gray-300 leading-relaxed mt-4 mb-8">
                    Designed an intuitive voice-first wellness coach that seamlessly integrates with Google 
                    Assistant, featuring personalized recommendations and cross-device consistency.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/1IIwk7JmMrjwSe3Eh9O4mXvTr75htCGcz/view?usp=sharing" 
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
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-full sm:w-[70%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={ga1} 
        alt="Google Assistant Overview"
        className="w-full h-auto object-contain rounded-3xl"
      />
    </div>
  </div>
</section>

{/* Problem Statement & Solution Section */}
<AnimatedSection animation="fade-in" delay={200}>
<section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-20">
      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Problem Statement</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Maintaining healthy habits is challenging for busy individuals, and existing wellness apps often require time-consuming manual inputs. The objective was to create a hands-free, personalised wellness solution that fits into users' routines without requiring significant effort, using Google Assistant's voice and AI capabilities.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Solution</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          The AI-powered Wellness Coach within Google Assistant delivers voice-activated wellness insights and an accessible wellness hub, featuring:
        </p>

        <div className="pl-6 border-l border-gray-700 space-y-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Voice-First Commands</h4>
            <p className="text-gray-300 leading-relaxed">
              Quick actions like tracking water intake or checking sleep quality.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Visual Components</h4>
            <p className="text-gray-300 leading-relaxed">
              Progress and nutrition visuals on Google Assistant's interface.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Personalized Suggestions</h4>
            <p className="text-gray-300 leading-relaxed">
              Wellness tips triggered by user behavior and routines.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Consistent Experience</h4>
            <p className="text-gray-300 leading-relaxed">
              A unified design across devices, from phones to smart displays.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">User-Friendly Onboarding</h4>
            <p className="text-gray-300 leading-relaxed">
              Simple setup to personalize goals and connect devices.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>
      {/* Mobile Screens Section */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={ga2} 
                alt="Google Assistant Mobile Screen 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={ga3} 
                alt="Google Assistant Mobile Screen 2"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={ga4} 
                alt="Google Assistant Mobile Screen 3"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>
      {/* Research & Discovery Section */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">1. Research & Analysis</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Analyzed current wellness tracking applications and voice assistant behaviors.
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Market Analysis</h4>
          <p className="text-gray-300 leading-relaxed mb-3">
            Conducted comprehensive research into:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Current wellness tracking applications and their limitations</li>
            <li>Voice assistant capabilities and user behaviors</li>
            <li>Privacy concerns in health tracking</li>
            <li>User pain points with manual tracking methods</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">User Needs Analysis</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Users want hands-free tracking options during busy routines</li>
            <li>Privacy is a major concern with health data</li>
            <li>Personalization is crucial for maintaining engagement</li>
            <li>Simple, actionable insights are preferred over complex data</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
      </AnimatedSection>
      {/* Solution Development Section */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">2. Design Process</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Created comprehensive voice-first wellness experience with intuitive visual components.
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Interface Design</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Created minimalist visual design aligned with Google's Material Design</li>
            <li>Developed clear data visualization patterns for tracking progress</li>
            <li>Designed conversational UI flows for voice interactions</li>
            <li>Implemented consistent experience across devices</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">User Experience Considerations</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Voice-first approach with visual support for key metrics</li>
            <li>Progressive disclosure of features to prevent overwhelm</li>
            <li>Clear feedback mechanisms for voice interactions</li>
            <li>Intuitive data visualization for quick understanding</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
      </AnimatedSection>

      {/* Implementation Section */}
      {/* <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">3. Results</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Refined the design through iterative testing and feedback.
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Key Features</h4>
          <h5 className="text-lg font-semibold mb-2">Core Functionality</h5>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Voice-activated wellness tracking and insights</li>
            <li>Personalized goal setting and progress monitoring</li>
            <li>AI-driven recommendations based on user patterns</li>
            <li>Cross-device synchronization and accessibility</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Challenges</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><span className="font-semibold">Privacy Concerns:</span> Addressed user privacy and data security related to wellness tracking.</li>
            <li><span className="font-semibold">Feature Complexity:</span> Balanced robust functionality for all users, from beginners to advanced.</li>
            <li><span className="font-semibold">Trust in AI:</span> Emphasized transparency in AI-driven suggestions to build user confidence.</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-4">Outcome</h4>
          <p className="text-gray-300 leading-relaxed">
            Though a self-initiated concept, this project highlighted strategies for blending wellness and AI-driven voice interactions. Key learnings included balancing complexity with simplicity, prioritizing privacy, and ensuring multi-device consistency, ultimately envisioning a wellness feature that aligns with Google Assistant's user-friendly design.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      </AnimatedSection> */}
      {/* Stats Section */}
      {/* <section className="py-24">
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
      </section> */}
    </div>
  );
}

export default GoogleAssistantPage;