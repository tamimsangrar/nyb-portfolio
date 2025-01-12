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

const mockupImages = [
  {
    id: 1,
    url: ga2,
    title: "Wellness Coach Introduction"
  },
  {
    id: 2,
    url: ga3,
    title: "Progress Tracking"
  },
  {
    id: 3,
    url: ga4,
    title: "Daily Summary"
  }
];

const features = [
  "• Track habits like exercise, water intake, and sleep",
  "• Get customized nutrition plans and meal suggestions",
  "• Receive personalized exercise recommendations",
  "• Monitor your progress with easy-to-understand insights"
];

const challenges = [
  {
    title: "Privacy Concerns",
    description: "• Addressed user privacy and data security related to wellness tracking"
  },
  {
    title: "Feature Complexity",
    description: "• Balanced robust functionality for all users, from beginners to advanced"
  },
  {
    title: "Trust in AI",
    description: "• Emphasized transparency in AI-driven suggestions to build user confidence"
  }
];

function GoogleAssistantPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            {/* Logo Section */}
            <div className="relative">
              <div 
                className="relative animate-float-slow"
              >
                <img
                  src={ga_header}
                  alt="GOOGLE ASSISTANT"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="space-y-2">
                  <h2 className="text-2xl text-gray-400">Year</h2>
                  <p className="text-4xl">2023</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={400}>
                <div className="space-y-4">
                  <h2 className="text-2xl text-gray-400">Skills</h2>
                  <ul className="space-y-3">
                    {skills.map((skill, index) => (
                      <li 
                        key={index}
                        className="text-xl sm:text-2xl"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={600}>
                <div className="pt-4">
                  <p className="text-xl sm:text-2xl leading-relaxed mb-8">
                    This project aimed to design a seamless user experience for a new Google Assistant feature, the Personalized Wellness Coach, which assists users in tracking habits, planning nutrition, and improving sleep. Integrating AI-driven recommendations and voice interactions, the feature is accessible to users of varying wellness knowledge and technology comfort levels.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl bg-white">
            <img
              src={ga1}
              alt="Google Assistant Interface"
              className="w-full h-full object-contain transition-transform duration-700 hover:scale-105 mx-auto"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Problem Statement & Solution Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Problem Statement */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Problem Statement</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Maintaining healthy habits is challenging for busy individuals, and existing wellness apps often require time-consuming manual inputs. The objective was to create a hands-free, personalised wellness solution that fits into users' routines without requiring significant effort, using Google Assistant's voice and AI capabilities.
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Solution</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              The AI-powered Wellness Coach within Google Assistant delivers voice-activated wellness insights and an accessible wellness hub, featuring:</p>

            <ul className="space-y-4 mt-8">
              <li className="text-base sm:text-lg leading-relaxed flex items-start text-gray-300">
                <span className="mr-4 text-gray-400">•</span>
                <span><strong>Voice-First Commands:</strong> Quick actions like tracking water intake or checking sleep quality.</span>
              </li>

              <li className="text-base sm:text-lg leading-relaxed flex items-start text-gray-300">
                <span className="mr-4 text-gray-400">•</span>
                <span><strong>Visual Components:</strong> Progress and nutrition visuals on Google Assistant's interface.</span>
              </li>

              <li className="text-base sm:text-lg leading-relaxed flex items-start text-gray-300">
                <span className="mr-4 text-gray-400">•</span>
                <span><strong>Personalized Suggestions:</strong> Wellness tips triggered by user behavior and routines.</span>
              </li>

              <li className="text-base sm:text-lg leading-relaxed flex items-start text-gray-300">
                <span className="mr-4 text-gray-400">•</span>
                <span><strong>Consistent Experience:</strong> A unified design across devices, from phones to smart displays.</span>
              </li>

              <li className="text-base sm:text-lg leading-relaxed flex items-start text-gray-300">
                <span className="mr-4 text-gray-400">•</span>
                <span><strong>User-Friendly Onboarding:</strong> Simple setup to personalize goals and connect devices.</span>
              </li>
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Phone Mockups Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {mockupImages.map((image, index) => (
              <AnimatedSection 
                key={image.id}
                animation="fade-in"
                delay={index * 200}
                className="relative aspect-[9/19] overflow-hidden rounded-[24px]"
              >
                
                {/* Screen Content */}
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 opacity-0 hover:opacity-100" />
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-contain transform transition-transform duration-700 hover:scale-110"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Challenges Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Challenges</h2>
            <div className="space-y-6">
              {challenges.map((challenge, index) => (
                <div key={index} className="flex gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{challenge.title}</h3>
                    <p className="text-base sm:text-lg leading-relaxed text-gray-300">{challenge.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Outcome</h2>
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              Though a self-initiated concept, this project highlighted strategies for blending wellness 
              and AI-driven voice interactions. Key learnings included balancing complexity with simplicity, 
              prioritizing privacy, and ensuring multi-device consistency, ultimately envisioning a wellness 
              feature that aligns with Google Assistant's user-friendly design.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default GoogleAssistantPage;