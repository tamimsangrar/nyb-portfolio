import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import pc_header from '../images/headers/promptc.png';

const skills = [
  "UX/UI Design",
  "Interaction Design",
  "Technical Integration",
  "AI and Contextual Design",
  "Documentation and Product Strategy"
];

const features = [
  {
    title: "Contextual Content Generation",
    description: "AI-driven content suggestions based on the design context."
  },
  {
    title: "Customization Options",
    description: "Users can adjust tone, style, and content length."
  },
  {
    title: "Version History",
    description: "Access and edit previous content versions."
  },
  {
    title: "Seamless Integration",
    description: "Compatible with Figma, Adobe XD, and Sketch."
  },
  {
    title: "Intuitive Interface",
    description: "Simple and visually appealing UI for easy use."
  }
];

const userJourney = [
  {
    step: "Discovery and Installation",
    description: "Users find the plugin online and install it within their design tool."
  },
  {
    step: "Initial Use",
    description: "They configure settings (tone, style) and test content generation."
  },
  {
    step: "Regular Use",
    description: "Plugin becomes a part of their workflow, used for generating and customizing content for projects."
  },
  {
    step: "Continuous Improvement",
    description: "Users benefit from plugin updates and ongoing support."
  }
];

const painPoints = [
  {
    title: "Time Constraints",
    description: "Difficulty allocating time for content creation."
  },
  {
    title: "Consistency Issues",
    description: "Challenges in maintaining a consistent tone across projects."
  },
  {
    title: "Creativity Blocks",
    description: "Need for inspiration and overcoming writer's block."
  }
];

const galleryImages = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=2000",
    title: "Content Generation Interface"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?auto=format&fit=crop&q=80&w=2000",
    title: "Style Customization"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=2000",
    title: "Version History"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=2000",
    title: "Integration Settings"
  }
];

function PromptcraftAIPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 sm:px-6 md:px-8 pt-24">
        {/* Logo */}
        <AnimatedSection animation="fade-in" className="w-full md:w-1/2">
          <div 
            className="relative animate-float-slow"
          >
            <img
              src={pc_header}
              alt="PROMPTCRAFT AI"
              className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
            />
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection animation="fade-in" delay={300} className="w-full md:w-1/2 max-w-2xl">
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-2xl text-gray-400">Year</h2>
              <p className="text-4xl">2023</p>
            </div>

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

            <p className="text-xl sm:text-2xl leading-relaxed text-white/90">
              The AI Writing Assistant Plugin was designed to streamline content creation for 
              designers, helping them generate engaging copy effortlessly within their design 
              software. This plugin integrates seamlessly with tools like Figma, Adobe XD, and 
              Sketch, enabling users to create high-quality content without disrupting their 
              workflow.
            </p>
          </div>
        </AnimatedSection>
      </section>

      {/* Gallery Section */}
      <section className="px-4 sm:px-6 md:px-8 py-24 bg-black" id="gallery">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection 
                key={image.id} 
                animation="fade-in" 
                delay={index * 100}
                className="relative overflow-hidden rounded-2xl aspect-[16/9]"
              >
                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 opacity-0 hover:opacity-100" />
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                  loading="lazy"
                />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution Section */}
      <AnimatedSection animation="fade-in" className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Challenge */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Challenge</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              Designers often struggle with content creation, which can be time-consuming and impact 
              productivity. They need a solution to generate contextually relevant content that aligns 
              with project tone and style, helping them focus more on design.
            </p>
          </div>

          {/* Solution */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Solution</h2>
            <p className="text-xl sm:text-2xl leading-relaxed mb-8">
              The AI Writing Assistant Plugin allows designers to generate tailored content for various 
              projects, such as product descriptions and social media captions. Key features include:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in"
                  delay={index * 200}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="text-lg text-gray-300">{feature.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* User Research and Insights */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">User Research and Insights</h2>
            <p className="text-xl sm:text-2xl leading-relaxed mb-8">
              Our target audience included designers and content creators who need content for projects 
              frequently. Through interviews and surveys, we identified common pain points:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {painPoints.map((point, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in"
                  delay={index * 200}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-bold text-white">{point.title}</h3>
                  <p className="text-lg text-gray-300">{point.description}</p>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* User Journey */}
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">User Journey</h2>
            <div className="space-y-6">
              {userJourney.map((step, index) => (
                <AnimatedSection 
                  key={index}
                  animation="fade-in"
                  delay={index * 200}
                  className="flex gap-4"
                >
                  <span className="text-xl font-bold text-gray-400">{index + 1}.</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{step.step}</h3>
                    <p className="text-lg text-gray-300">{step.description}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <AnimatedSection animation="fade-in" delay={800} className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-300">Outcome</h2>
            <p className="text-xl sm:text-2xl leading-relaxed">
              This project enhanced user productivity by allowing designers to quickly generate 
              on-brand content, leading to faster project completion and improved consistency 
              across designs.
            </p>
          </AnimatedSection>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default PromptcraftAIPage;