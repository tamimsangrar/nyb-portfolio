import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import cc_header from '../images/headers/cc.svg';
import cc1 from "../images/CC/1.png";

const skills = [
  "User Research",
  "Information Architecture",
  "Visual Design",
  "Community Engagement",
  "Content Strategy"
];

const goals = [
  "Develop a seamless online presence to amplify Cultural Connect's mission.",
  "Create intuitive navigation for easy access to event registration and resources.",
  "Encourage engagement and reflect the organisation's values of inclusivity and diversity."
];

const keyElements = [
  {
    title: "Inclusivity",
    description: "Warm, inviting visuals that reflect diverse community representation."
  },
  {
    title: "Diversity",
    description: "A range of culturally enriching content and events."
  },
  {
    title: "Community Engagement",
    description: "Features like blog comments and volunteer forms to foster active involvement."
  },
  {
    title: "Empowerment",
    description: "A platform for learning, connecting, and contributing."
  }
];

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000",
    className: "col-span-2 row-span-2"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=2000",
    className: "col-span-1 row-span-1"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000",
    className: "col-span-1 row-span-1"
  }
];

function CulturalConnectPage() {
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
                  src={cc_header}
                  alt="CULTURAL CONNECT"
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
                    Cultural Connect, a community organization promoting cultural diversity, 
                    needed an effective online platform to better engage the public and communicate 
                    its mission. The objective was to design a user-friendly website that embodies 
                    the organization's values.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="aspect-[16/10] md:aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <img
              src={cc1}
              alt="Cultural Connect Platform"
              className="w-full h-full object-contain transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Problem Statement & Goals Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Problem Statement */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Problem Statement</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              Without a cohesive digital presence, Cultural Connect struggled to connect with its 
              audience, limiting engagement and visibility. The challenge was to create a dynamic, 
              intuitive website that reflects the organization's values while enhancing community 
              involvement and outreach.
            </p>
          </div>

          {/* Goals */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Goals</h2>
            <ul className="space-y-4">
              {goals.map((goal, index) => (
                <AnimatedSection 
                  key={index}
                  animation="slide-from-left"
                  delay={index * 200}
                >
                  <li className="text-xl sm:text-2xl leading-relaxed">
                    • {goal}
                  </li>
                </AnimatedSection>
              ))}
            </ul>
          </div>
        </div>
      </AnimatedSection>

      {/* Gallery Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection 
                key={image.id} 
                animation="fade-in" 
                delay={index * 100}
                className={`relative overflow-hidden rounded-2xl ${image.className}`}
              >
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 opacity-0 hover:opacity-100" />
                <img
                  src={image.url}
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Solution & Research Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Solution */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Solution</h2>
            <p className="text-xl sm:text-2xl leading-relaxed mb-8">
              The final website design embodies Cultural Connect's core values with a welcoming 
              interface, easy-to-navigate structure, and features for event registration, volunteer 
              sign-up, and community storytelling. Key elements included:
            </p>
            <div className="space-y-6">
              {keyElements.map((element, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in"
                  delay={index * 200}
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white">• {element.title}:</h3>
                    <p className="text-lg text-gray-300 pl-6">{element.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Research and Insights */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Research and Insights</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              As a self-initiated project, I researched similar community sites and identified 
              features crucial for engagement, such as event calendars and mission-driven content. 
              My exploratory research informed a user-friendly design focused on accessibility, 
              diverse representation, and straightforward event registration.
            </p>
          </div>

          {/* Outcome */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Outcome</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              This self-initiated project made their digital presence into a welcoming, user-friendly 
              platform that reflects their mission, inspires participation, and celebrates cultural 
              diversity.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default CulturalConnectPage;