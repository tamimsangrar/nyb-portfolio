import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import se_header from '../images/headers/se_header.png';
import se1 from "../images/SE/1.png";
import se2 from "../images/SE/2.png";
import se3 from "../images/SE/3.png";
const skills = [
  "UX Leadership",
  "Information Architecture",
  "Portfolio Website Design",
  "Brand Identity"
];

function SriramEmaniPage() {
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
                  src={se_header}
                  alt="SRIRAM EMANI"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <AnimatedSection animation="slide-from-right" delay={200}>
                <div className="space-y-2">
                  <h2 className="text-2xl text-gray-400">Year</h2>
                  <p className="text-4xl">2022</p>
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
                    As UX Lead at Aiolos, I had the honor of collaborating with Sriram Emani—a TEDx speaker, entrepreneur, and accomplished artist across acting, singing, and dance. Sriram sought our team’s expertise to revamp his portfolio website, aiming to elevate his visibility and impact in Hollywood.
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

      {/* Split Image Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24" id="project-details">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection animation="slide-from-left" className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                <img
                  src={se1}
                  alt="Sriram performing"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-from-right" className="relative">
              <div className="aspect-[16/9] overflow-hidden rounded-2xl">
                <img
                  src={se2}
                  alt="Sriram portrait"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>

      {/* Text and Image Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-from-left" className="space-y-6">
              <h2 className="text-3xl font-bold">About Sriram</h2>
              <p className="text-lg leading-relaxed text-gray-300">
                Fully understanding Sriram’s vision, I carefully crafted the information architecture for his website and guided the design process from start to finish. Sriram was actively involved, offering valuable insights that shaped each stage of development. His satisfaction with the final result was deeply rewarding, marking the end of a fulfilling collaborative journey that achieved both his creative and professional goals.
              </p>
              {/* <p className="text-lg leading-relaxed text-gray-300">
                As a TEDx speaker and cultural ambassador, Sriram has consistently pushed boundaries 
                and challenged conventional narratives, making him a powerful voice for diversity 
                and inclusion in the entertainment industry.
              </p> */}
            </AnimatedSection>

            <AnimatedSection animation="slide-from-right" className="relative">
              <div className="aspect-square overflow-hidden rounded-2xl">
                <img
                  src={se3}
                  alt="Sriram portrait"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default SriramEmaniPage;