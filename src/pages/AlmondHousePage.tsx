import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import ah_logo from '../images/headers/ah_logo.png';
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

const finalGalleryImages = [
  {
    id: 'final-1',
    image: ah2,
    className: "col-span-2"
  },
  {
    id: 'final-2',
    image: ah3,
    className: "col-span-2"
  },
  {
    id: 'final-3',
    image: ah4,
    className: "col-span-2"
  }
];

function AlmondHousePage() {
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
                  src={ah_logo}
                  alt="ALMOND HOUSE"
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
                    I collaborated with Almond House, a leading Indian sweets and savories brand 
                    with a 30-year legacy, to develop comprehensive brand guidelines. My role 
                    involved creating a unified brand identity that maintained consistency across all 
                    platforms, helping to strengthen Almond House's established image and ensure 
                    clear, recognizable branding in every customer interaction.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24" id="project-details">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            <img
              src={ah1}
              alt="Almond House Brand Guidelines"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Text Break Section */}
      <AnimatedSection animation="fade-in" className="w-full py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex items-center">
            <p className="text-3xl sm:text-4xl md:text-5xl leading-relaxed font-light">
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
                  alt=""
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

export default AlmondHousePage;