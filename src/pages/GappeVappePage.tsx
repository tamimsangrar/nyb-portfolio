import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import gp_logo from '../images/headers/gp.svg';
import gp1 from "../images/GV/1.png";
import gp2 from "../images/GV/2.png";
import gp3 from "../images/GV/3.png";
import gp4 from "../images/GV/4.png";
import gp5 from "../images/GV/5.png";
import gp6 from "../images/GV/6.png";

const skills = [
  "Collaboration",
  "Visual Design",
  "Social Media Content Creation",
  "Brand Identity Development"
];

const galleryItems = [
  { image: gp1 },
  { image: gp2 },
  { image: gp3 },
  { image: gp4 },
  { image: gp5 },
  { image: gp6 }
];

function GappeVappePage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={gp_logo}
                  alt="GAPPE VAPPE"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Create a distinctive brand identity and social media presence for Almond House's 
                    new snack sub-brand while maintaining connection to the parent brand.
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
                    Successfully launched sub-brand with distinct identity, resulting in 45% increase 
                    in social media engagement and 30% growth in snack category sales.
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
                      alt="Gappe Vappe Project" 
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
              <h3 className="text-2xl font-bold">1. Brand Strategy Development</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Created a comprehensive strategy for positioning the sub-brand within the market 
                while maintaining connection to parent brand.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Market Research</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Analyzed snack market trends and competitor offerings to identify unique 
                    positioning opportunities.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Brand Voice</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Developed playful, contemporary brand voice that appeals to younger 
                    demographic while maintaining premium positioning.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">2. Visual Identity Creation</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Designed comprehensive visual system including menu, packaging, and marketing materials.
              </p>

              <div className="pl-6 border-l border-gray-700">
                <h4 className="text-xl font-bold mb-4">Design System</h4>
                <p className="text-gray-300 leading-relaxed">
                  Created flexible design system that works across all touchpoints while 
                  maintaining brand recognition.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold">3. Content Strategy & Implementation</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Developed and executed social media strategy to build brand awareness and engagement.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Content Calendar</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Created content calendar aligned with product launches and seasonal campaigns.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Visual Content</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Produced engaging visual content that showcases products and brand personality.
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
            <h3 className="text-5xl font-bold text-white/90">45%</h3>
            <p className="text-white/70 mt-2">Social Engagement</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">30%</h3>
            <p className="text-white/70 mt-2">Category Growth</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">10K+</h3>
            <p className="text-white/70 mt-2">Social Followers</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GappeVappePage;