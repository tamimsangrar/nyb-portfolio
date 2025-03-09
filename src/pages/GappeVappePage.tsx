import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import StatCard from '../components/StatCard';
import { Share2, TrendingUp, Users } from 'lucide-react';
import gp_logo from '../images/headers/gp.svg';
import gp1 from "../images/GV/1.png";
import gp2 from "../images/GV/2.png";
import gp3 from "../images/GV/3.png";
import gp4 from "../images/GV/4.png";
import gp5 from "../images/GV/5.png";
import gp6 from "../images/GV/6.png";

const scrollIndicatorStyle = {
  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.85), black 15%, black 85%, rgba(0,0,0,0.85))',
  maskImage: 'linear-gradient(to right, rgba(0,0,0,0.85), black 15%, black 85%, rgba(0,0,0,0.85))'
};

const skills = [
  "Collaboration",
  "Visual Design",
  "Social Media Content Creation",
  "Brand Identity Development"
];
const galleryItemsFirst = [
  { image: gp1 },
  { image: gp2 },
  { image: gp3 }
];

// Second set of gallery items
const galleryItemsSecond = [
  { image: gp4 },
  { image: gp5 },
  { image: gp6 }
];

function GappeVappePage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
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

      {/* First Gallery Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="py-20">
          <div className="overflow-x-auto md:overflow-hidden" style={scrollIndicatorStyle}>
            <div className="flex justify-start md:justify-center gap-8 pb-8 min-w-max md:min-w-0 px-4 md:px-0">
              {galleryItemsFirst.map((item, index) => (
                <div 
                  key={index} 
                  className="w-[280px] md:w-[500px] h-[280px] md:h-[500px] flex-shrink-0"
                >
                  <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-full h-full overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
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
      </AnimatedSection>

      {/* Design Process Header */}
      <section className="px-4 sm:px-6 md:px-8 pt-24 pb-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold">Design Process</h2>
        </div>
      </section>
      
      {/* Section 1: Brand Strategy Development */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="px-4 sm:px-6 md:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">1. Brand Strategy Development</h3>
              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Challenge</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Position a new sub-brand within the competitive snack market while maintaining 
                    connection to the established parent brand.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Approach</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Analyzed snack market trends and competitor offerings to identify unique 
                    positioning opportunities. Developed playful, contemporary brand voice that 
                    appeals to younger demographic while maintaining premium positioning.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Outcome</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Created a strategic brand platform that balanced innovation with heritage, 
                    targeting a new customer segment without alienating existing brand loyalists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Section 2: Visual Identity Creation */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="px-4 sm:px-6 md:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">2. Visual Identity Creation</h3>
              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Challenge</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Develop a distinctive visual system that feels fresh and contemporary while 
                    maintaining subtle connection to the parent brand.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Approach</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Created a comprehensive design system including logo, typography, color palette, 
                    and design elements that work harmoniously across packaging, menu, and marketing 
                    materials.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Outcome</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Delivered a flexible design system that successfully differentiates the sub-brand 
                    while maintaining a subtle connection to the parent brand's heritage and quality 
                    positioning.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
     {/* Second Gallery Section */}
     <AnimatedSection animation="fade-in" delay={200}>
        <section className="py-20">
          <div className="overflow-x-auto md:overflow-visible" style={scrollIndicatorStyle}>
            <div className="flex justify-start md:justify-center gap-8 pb-8 min-w-max md:min-w-0 px-4 md:px-0">
              {galleryItemsSecond.map((item, index) => (
                <div 
                  key={index} 
                  className="w-[280px] md:w-[500px] h-[280px] md:h-[500px] flex-shrink-0"
                >
                  <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-full h-full overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
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
      </AnimatedSection>
      {/* Section 3: Content Strategy & Implementation */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="px-4 sm:px-6 md:px-8 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">3. Content Strategy & Implementation</h3>
              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Challenge</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Build brand awareness and engagement through compelling social media presence 
                    for a new sub-brand entering a competitive market.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Approach</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Developed content calendar aligned with product launches and seasonal campaigns. 
                    Produced engaging visual content that showcases products and brand personality 
                    across multiple social platforms.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold mb-4">Outcome</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Created a vibrant social media presence that rapidly built audience engagement, 
                    resulting in over 10,000 followers within the first three months and 45% higher 
                    engagement rates compared to industry averages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

 
      
      {/* Stats Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard 
                value={45} 
                label="Social Engagement Increase" 
                suffix="%" 
                accentColor="#AB315C" // Pink color
              />
              <StatCard 
                value={30} 
                label="Category Sales Growth" 
                suffix="%" 
                accentColor="#F6DD76" // Green color
              />
              <StatCard 
                value={10} 
                label="Social Media Followers" 
                suffix="K+" 
                accentColor="#F29C38" // Blue color
              />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default GappeVappePage;