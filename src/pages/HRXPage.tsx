import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import hrx_logo from '../images/headers/HRX_logo.svg';
import hrx1 from "../images/HRX/1.png";
import hrx2 from "../images/HRX/2.png";
import hrx3 from "../images/HRX/3.png";
import hrx4 from "../images/HRX/4.png";
import hrx5 from "../images/HRX/5.png";
import hrx6 from "../images/HRX/6.png";
import hrx7 from "../images/HRX/7.png";
import hrx8 from "../images/HRX/8.png";
import hrx9 from "../images/HRX/9.png";
const skills = [
  "Virtual Engagement",
  "Social Media Strategy",
  "Content Collaboration",
  "Adaptability and Innovation"
];

const galleryImages = [
  {
    id: 1,
    title: "Boost Running Endurance",
    image: hrx1,
    className: "col-span-2"
  },
  {
    id: 2,
    title: "Virtual Finish Line",
    image: hrx2,
    className: "col-span-2"
  },
  {
    id: 3,
    title: "Training Tips",
    image: hrx3,
    className: "col-span-2"
  },
  {
    id: 4,
    title: "Running Gear",
    image: hrx4,
    className: "col-span-2"
  },
  {
    id: 5,
    title: "Ambassador Spotlight",
    image: hrx5,
    className: "col-span-2"
  },
  {
    id: 6,
    title: "Track Your Goals",
    image: hrx6,
    className: "col-span-2"
  }
];

const finalGalleryImages = [
  {
    id: 'final-1',
    image: hrx7,
    className: "col-span-2"
  },
  {
    id: 'final-2',
    image: hrx8,
    className: "col-span-2"
    },
  {
    id: 'final-3',
    image: hrx9,
    className: "col-span-2"
    
  }
];

function HRXPage() {
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
                 src={hrx_logo}
                 alt="HRX"
                 className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
               /> 
             </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="space-y-2">
                  <h2 className="text-2xl text-gray-400">Year</h2>
                  <p className="text-4xl">2022</p>
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
                    I've had the privilege of collaborating with India's top fitness and lifestyle brands. A 
                    highlight was leading the creation of the first virtual marathon during the COVID-19 
                    pandemic, which attracted over 1,500 participants for a unique and inspiring fitness experience.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 pt-8 sm:pt-16 md:pt-24" id="project-details">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection 
                key={image.id}
                animation="fade-in"
                delay={index * 200}
                className={`relative aspect-square overflow-hidden rounded-lg ${image.className}`}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Text Break Section */}
      <AnimatedSection animation="fade-in" className="w-full py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center">
            <p className="text-xl sm:text-2xl md:text-2xl leading-relaxed font-light">
              I've consistently boosted product sales by creating tailored social media posts 
              that align with seasonal marketing strategies. Collaborating closely with 
              content writers, we crafted compelling copy that resonated with our target 
              audience, ensuring our products left a lasting impression and drove sales 
              growth year-round.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Final Gallery Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {finalGalleryImages.map((image, index) => (
              <AnimatedSection 
                key={image.id}
                animation="fade-in"
                delay={index * 200}
                className={`relative aspect-square overflow-hidden rounded-lg ${image.className}`}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default HRXPage;