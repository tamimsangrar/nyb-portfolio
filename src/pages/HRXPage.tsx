import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import StatCard from '../components/StatCard';
import { Users, Award, Star } from 'lucide-react';
import header from '../images/headers/HRX_logo.svg';
import endurancePost from '../images/HRX/1.png';
import achievementPost from '../images/HRX/2.png';
import tipsPost from '../images/HRX/3.png';
import shoePost from '../images/HRX/4.png';
import marathonPost from '../images/HRX/5.png';
import trackingPost from '../images/HRX/6.png';

const skills = [
  "Interaction Design",
  "Branding",
  "Social Media Strategy",
  "User Research"
];

const galleryItems = [
  { image: endurancePost },
  { image: achievementPost },
  { image: tipsPost },
  { image: shoePost },
  { image: marathonPost },
  { image: trackingPost }
];

// Custom style for scroll indicator
const scrollIndicatorStyle = {
  WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,0.85), black 15%, black 85%, rgba(0,0,0,0.85))',
  maskImage: 'linear-gradient(to right, rgba(0,0,0,0.85), black 15%, black 85%, rgba(0,0,0,0.85))'
};

function HrxPage() {
  return (
    <div className="min-h-screen pt-24">
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={header}
                  alt="HRX"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Transform traditional marathon experience into a virtual format during COVID-19 lockdown 
                    while maintaining engagement and community aspects.
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
                    Successfully launched India's first virtual marathon with 1,500+ participants 
                    and 80% completion rate.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 mt-24">
        <div className="overflow-x-auto" style={scrollIndicatorStyle}>
          <div className="flex justify-start md:justify-center gap-8 pb-8 min-w-max px-4 md:px-0">
            {galleryItems.map((item, index) => (
              <div 
                key={index} 
                className={`flex-shrink-0 w-[250px] md:w-[500px] h-[250px] md:h-[500px]`}
              >
                <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-full h-full overflow-hidden transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl">
                  <div className="relative h-full w-full">
                    <img 
                      src={item.image} 
                      alt="HRX Project" 
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
            {/* Research & Discovery */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">1. Research & Analysis</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                When COVID-19 disrupted traditional marathons, we needed to understand how to 
                translate the physical experience into a meaningful virtual event. I led a 
                comprehensive research phase that included:
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">User Research</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Conducted in-depth interviews with 40 regular marathon participants to 
                    understand their motivations, concerns, and what aspects of physical 
                    marathons they valued most. Key findings revealed that community 
                    engagement and progress tracking were essential elements.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Competitive Analysis</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Analyzed 5 leading virtual fitness platforms to identify best practices 
                    and potential gaps. This helped us understand how to differentiate our 
                    solution while maintaining familiar user patterns.
                  </p>
                </div>
              </div>
            </div>

            {/* Implementation & Launch */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">2. Implementation & Launch</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                The implementation phase focused on bringing the design to life while 
                maintaining user engagement:
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Integration</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Created detailed documentation and interaction specifications to 
                    maintain design integrity.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Launch Strategy</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Developed a comprehensive social media campaign that generated 
                    pre-launch excitement. Created educational content to help users 
                    transition to the virtual format, resulting in a successful launch 
                    with over 1,500 participants.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <StatCard 
                value={1500} 
                label="Active Participants" 
                suffix="+" 
                prefix="" 
                accentColor="#AB315C" // Blue color
              />
              <StatCard 
                value={85} 
                label="Completion Rate" 
                suffix="%" 
                prefix="" 
                accentColor="#F6DD76" // Green color
              />
              <StatCard 
                value={4.8} 
                label="User Satisfaction" 
                suffix="/5" 
                prefix="" 
                accentColor="#F29C38" // Amber color
              />
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}

export default HrxPage;