import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import sa_header from '../images/headers/sa_header.png';
import sa1 from "../images/SA/1.png";
import sa2 from "../images/SA/2.png";

const skills = [
  "UX/UI Design",
  "Interaction Design",
  "Technical Integration",
  "AI and Contextual Design",
  "Documentation and Product Strategy"
];

const features = [
  {
    title: "Wardrobe Digitization",
    description: "Users can photograph and catalog their wardrobe items, with an AI outfit generator suggesting combinations."
  },
  {
    title: "Personalized Shopping",
    description: "Smart recommendations that align with current wardrobe items and user style."
  },
  {
    title: "Community Engagement",
    description: "Social features enable sharing and feedback within a style-focused community."
  },
  {
    title: "Personalized Tips",
    description: "AI-driven advice on styling, layering, and accessorizing based on weather and user preferences."
  }
];

const userJourney = [
  {
    step: "Onboarding",
    description: "Users sign up, complete a style quiz, and input measurements for personalized recommendations."
  },
  {
    step: "Wardrobe Management",
    description: "Users digitize their wardrobe for tailored outfit ideas."
  },
  {
    step: "Daily Outfit Planning",
    description: "AI suggests outfits based on occasions, weather, and style goals."
  },
  {
    step: "Social Engagement",
    description: "Users can share and receive feedback on outfits within the StyleAI community."
  },
  {
    step: "Advanced Features",
    description: "Tools like AI chatbot deepen engagement and confidence in styling choices."
  }
];

const userInsights = [
  "65% shop monthly but feel they don't maximize their wardrobe.",
  "55% struggle with outfit creation.",
  "Many desire personalized guidance without extensive effort."
];

function StyleAIPage() {
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
                  src={sa_header}
                  alt="STYLE AI"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <AnimatedSection animation="slide-from-right" delay={200}>
                <div className="space-y-2">
                  <h2 className="text-2xl text-gray-400">Year</h2>
                  <p className="text-4xl">2023</p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-from-right" delay={400}>
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

              <AnimatedSection animation="slide-from-right" delay={600}>
                <div className="pt-4">
                  <p className="text-xl sm:text-2xl leading-relaxed mb-8">
                    The StyleAI mobile app uses AI to provide personalized fashion recommendations 
                    based on users' existing wardrobe, body type, and style preferences. It aims to 
                    simplify outfit planning, improve shopping decisions, and reduce wardrobe inefficiency.
                  </p>
                  <a 
                    href="#project-details"
                    className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Project
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24" id="project-details">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <img
              src={sa1}
              alt="StyleAI Interface"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Problem & Solution Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Problem Statement */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Problem Statement</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              People often struggle to style their existing clothes and make smart fashion purchases, 
              leading to underused wardrobes and impulsive buying. StyleAI addresses these challenges 
              by offering an intuitive, AI-driven styling assistant that provides outfit ideas and 
              strategic shopping suggestions.
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Solution</h2>
            <p className="text-xl sm:text-2xl leading-relaxed mb-8">
              The app includes the following key features:
            </p>
            <ul className="space-y-6">
              {features.map((feature, index) => (
                <li key={index} className="flex gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}:</h3>
                    <p className="text-lg text-gray-300">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Second Image Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-auto w-full overflow-hidden rounded-2xl bg-[#1A1A1A]">
            <img
              src={sa2}
              alt="StyleAI App Experience"
              className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* User Journey & Insights Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* User Journey */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">User Journey Highlights</h2>
            <ul className="space-y-6">
              {userJourney.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="text-xl font-bold text-gray-400">{index + 1}.</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{step.step}</h3>
                    <p className="text-lg text-gray-300">{step.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* User Insights */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">User Insights</h2>
            <p className="text-xl sm:text-2xl leading-relaxed mb-8">
              After conducting surveys and interviews with users aged 18-45, we found that:
            </p>
            <ul className="space-y-4">
              {userInsights.map((insight, index) => (
                <li key={index} className="text-lg text-gray-300">
                  • {insight}
                </li>
              ))}
            </ul>
          </div>

          {/* Outcome */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Outcome</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              As a self-initiated project, StyleAI emphasized integrating AI to make personal styling 
              accessible and engaging. This case study highlights the potential of AI-driven fashion 
              solutions that combine ease of use with tailored recommendations, encouraging sustainable 
              wardrobe habits and empowering users with personalized styling advice.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default StyleAIPage;