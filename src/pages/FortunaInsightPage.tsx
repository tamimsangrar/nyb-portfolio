import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import fi_header from '../images/headers/fortuna_header.svg';
import fi1 from "../images/Fortuna/1.png";
import fi2 from "../images/Fortuna/2.png";
import fi3 from "../images/Fortuna/3.png";
const skills = [
  "Creative Direction and Guidance",
  "Information Architecture",
  "Design Iteration and Feedback",
  "Communication and Presentation Skills"
];

function FortunaInsightPage() {
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
                  src={fi_header}
                  alt="FORTUNA INSIGHT"
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
                    At Aiolos, I helped build the Fortuna-Insights website and develop its brand 
                    guideline. Through multiple consultations, I aligned with the team's techno-utopian 
                    vision, guiding the senior designer to meet their specific needs while creating a 
                    detailed brand guideline to ensure consistency across all assets.
                  </p>
                  <a 
                    href="https://www.fortuna-insights.com/" target="_blank" rel="noopener noreferrer"
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

      {/* First Horizontal Image */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24" id="project-details">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <img
              src={fi1}
              alt="Fortuna Insight Platform"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Text Break Section */}
      <AnimatedSection animation="fade-in" className="w-full py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center">
            <p className="text-base sm:text-lg leading-relaxed text-gray-300">
              I took the lead on establishing the information architecture for the website, 
              drawing on my expertise to create a streamlined and intuitive navigation structure 
              that enhances user experience. Throughout our collaboration, we conducted several 
              design iterations, during which I thoroughly explained the reasoning behind each 
              design choice.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Two Stacked Horizontal Images */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <img
              src={fi2}
              alt="Fortuna Insight Design Process"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <img
              src={fi3}
              alt="Fortuna Insight Final Design"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default FortunaInsightPage;