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
  "Curation",
  "Collaboration",
  "Visual Design",
  "Social Media Content Creation",
  "Brand Identity Development"
];

const galleryImages = [
  {
    id: 1,
    title: "Menu Design",
    image: gp1,
    className: "col-span-2"
  },
  {
    id: 2,
    title: "Brand Identity",
    image: gp2,
    className: "col-span-2"
  },
  {
    id: 3,
    title: "Social Media",
    image: gp3,
    className: "col-span-2"
  }
];

const finalGalleryImages = [
  {
    id: 'final-1',
    image: gp4,
  },
  {
    id: 'final-2',
    image: gp5,
  },
  {
    id: 'final-3',
    image: gp6,
  }
];

function GappeVappePage() {
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
                  src={gp_logo}
                  alt="GAPPE VAPPE"
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
                    I had the pleasure of working independently on Gappe Vappe, a popular snack sub-brand 
                    of Almond House. My role spanned menu, sticker, and label design, as well as curating 
                    engaging social media posts. The brand's playful nature offered a unique space for my 
                    creativity, making the work feel like fun.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24" id="project-details">
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {finalGalleryImages.map((image, index) => (
              <AnimatedSection 
                key={image.id}
                animation="fade-in"
                delay={index * 200}
                className="relative aspect-square overflow-hidden rounded-lg"
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

export default GappeVappePage;