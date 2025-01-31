import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import ah_logo from '../images/headers/ah_logo.svg';
import ah1 from "../images/AH/1.png";
import ah2 from "../images/AH/2.png";
import ah3 from "../images/AH/3.png";
import ah4 from "../images/AH/4.png";

const skills = [
  "Attention to Brand Legacy",
  "Brand Guideline Development",
  "Social Media Content Creation",
  "Cross-Platform Consistency"
];

const galleryItems = [
  { image: ah1 },
  { image: ah2 },
  { image: ah3 },
  { image: ah4 }
];

function AlmondHousePage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={ah_logo}
                  alt="ALMOND HOUSE"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Develop comprehensive brand guidelines for a 30-year legacy brand while maintaining 
                    consistency across all platforms and strengthening the established image.
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
                    Created unified brand identity guidelines resulting in consistent brand presence 
                    and improved customer recognition across all platforms.
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
                      alt="Almond House Project" 
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
              <h3 className="text-2xl font-bold">1. Research & Brand Analysis</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Conducted comprehensive analysis of existing brand elements and market positioning to 
                understand the brand's heritage and current market perception.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Legacy Research</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Analyzed 30 years of brand history to identify core values and visual elements 
                    that contributed to brand recognition and customer loyalty.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Market Analysis</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Studied current market trends and competitor strategies to identify opportunities 
                    for brand differentiation while maintaining traditional appeal.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">2. Guidelines Development</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Created comprehensive brand guidelines focusing on maintaining consistency while 
                allowing for modern applications.
              </p>

              <div className="pl-6 border-l border-gray-700">
                <h4 className="text-xl font-bold mb-4">Visual Language Development</h4>
                <p className="text-gray-300 leading-relaxed">
                  Developed detailed specifications for logo usage, typography, color palettes, 
                  and photography style that respect brand heritage while enabling contemporary 
                  applications.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">3. Implementation & Training</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Rolled out new guidelines with comprehensive training and support materials.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Team Training</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Conducted workshops with marketing and design teams to ensure proper 
                    implementation of new guidelines.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Digital Asset Management</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Created a centralized digital asset library and template system for 
                    efficient brand asset management.
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
            <h3 className="text-5xl font-bold text-white/90">30+</h3>
            <p className="text-white/70 mt-2">Years of Legacy</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">40%</h3>
            <p className="text-white/70 mt-2">Brand Recognition Increase</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">100%</h3>
            <p className="text-white/70 mt-2">Platform Consistency</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AlmondHousePage;