import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import pc_header from '../images/headers/promptc.svg';
import pc1 from "../images/PC/pc_header1.png";
import pc2 from "../images/PC/pc_header2.png";
import pc3 from "../images/PC/pc_header3.png";
import pc4 from "../images/PC/pc_header4.png";

const skills = [
  "UX/UI Design",
  "Interaction Design",
  "Technical Integration",
  "AI and Contextual Design",
  "Documentation and Product Strategy"
];

function PromptcraftAIPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={pc_header}
                  alt="PROMPTCRAFT AI"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                    Create an AI writing assistant plugin that seamlessly integrates with Figma 
                    to help designers generate high-quality content without disrupting their workflow.
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
                  <p className="text-lg text-gray-300 leading-relaxed mt-4 mb-8">
                    Designed a user-friendly plugin that streamlines content creation within design tools, 
                    featuring AI-powered suggestions and customization options.
                  </p>
                  <a 
                    href="https://drive.google.com/file/d/1in3iYmhzcDi1Ts9jbwd4nmYiLgIxhD06/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-black bg-white rounded-full hover:bg-white/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Project Video
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6 ml-2 transform transition-transform group-hover:translate-x-1 animate-bounce" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7l5 5m0 0l-5 5m5-5H6" 
                      />
                    </svg>
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* First Horizontal Image */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-full sm:w-[60%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={pc4} 
        alt="Promptcraft Overview"
        className="w-full h-auto object-contain rounded-3xl"
      />
    </div>
  </div>
</section>
</AnimatedSection>
{/* Problem Statement & Solution Section */}
<AnimatedSection animation="fade-in" delay={200}>
<section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-20">
      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Problem Statement</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Designers frequently struggle with content creation, a task that can be time-consuming and distracts from their core design work. 
          The objective was to create an AI-powered solution that seamlessly integrates with design software, allowing designers to generate high-quality, contextually relevant content without disrupting their workflow or switching between multiple tools.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Solution</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          The PromptcraftAI plugin delivers an intuitive content generation experience within design software, featuring:
        </p>

        <div className="pl-6 border-l border-gray-700 space-y-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Contextual Content Generation</h4>
            <p className="text-gray-300 leading-relaxed">
              AI-powered suggestions based on design elements and project context.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Tone & Style Customization</h4>
            <p className="text-gray-300 leading-relaxed">
              Adjustable parameters to match brand voice and communication goals.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Version History</h4>
            <p className="text-gray-300 leading-relaxed">
              Ability to save and revisit previous content iterations.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>
      {/* Second Horizontal Image */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-full sm:w-[60%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={pc2} 
        alt="Promptcraft Prompt"
        className="w-full h-auto object-contain rounded-3xl"
      />
    </div>
  </div>
</section>
</AnimatedSection>
      {/* Research & Discovery Section */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">1. Research & Analysis</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Investigated designer pain points and content creation needs.
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <h4 className="text-xl font-bold mb-4">User Research Findings</h4>
          <p className="text-gray-300 leading-relaxed mb-3">
            Key insights from designer interviews:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>70% struggle with content creation tasks</li>
            <li>Average 2-3 hours spent on copy per project</li>
            <li>Need for maintaining consistent tone across projects</li>
            <li>Desire for seamless integration with existing tools</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Market Analysis</h4>
          <p className="text-gray-300 leading-relaxed">
            Studied existing tools and identified opportunities for AI integration.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>

      {/* Feature Development Section */}
      <AnimatedSection animation="fade-in" delay={200}>
<section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">2. Design Process</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Designed a comprehensive plugin experience with AI-powered features and intuitive interface design.
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Interface Design</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Designed intuitive plugin layout that respects native design tool aesthetics</li>
            <li>Curated minimalist controls to prevent workflow disruption</li>
            <li>Designed clear visual hierarchy for generation options</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">User Experience Flow</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Streamlined content request process to three clicks or less</li>
            <li>Designed intuitive content editing and refinement workflow</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>
      {/* Third Horizontal Image */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#000000] rounded-3xl border border-gray-800/50 w-full sm:w-[60%] mx-auto transform transition-transform duration-500 hover:scale-105 overflow-hidden">
      <img 
        src={pc3} 
        alt="Promptcraft Result Overview"
        className="w-full h-auto object-contain rounded-3xl"
      />
    </div>
  </div>
</section>
</AnimatedSection>
      {/* Integration & Testing Section */}
      <AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">3. User Research and Insights</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Our target audience included designers and content creators who need content for projects frequently. Through interviews and surveys, we identified common pain points:
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li><span className="font-semibold">Time Constraints:</span> Difficulty allocating time for content creation.</li>
            <li><span className="font-semibold">Consistency Issues:</span> Challenges in maintaining a consistent tone across projects.</li>
            <li><span className="font-semibold">Creativity Blocks:</span> Need for inspiration and overcoming writer's block.</li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-4">User Journey</h4>
          <ol className="list-decimal pl-6 space-y-3 text-gray-300">
            <li><span className="font-semibold">Discovery and Installation:</span> Users find the plugin online and install it within their design tool.</li>
            <li><span className="font-semibold">Initial Use:</span> They configure settings (tone, style) and test content generation.</li>
            <li><span className="font-semibold">Regular Use:</span> Plugin becomes a part of their workflow, used for generating and customizing content for projects.</li>
            <li><span className="font-semibold">Continuous Improvement:</span> Users benefit from plugin updates and ongoing support.</li>
          </ol>
        </div>
        
        <div>
          <h4 className="text-xl font-bold mb-4">Outcome</h4>
          <p className="text-gray-300 leading-relaxed">
            This project can potentially enhance user productivity by allowing designers to quickly generate on-brand content, leading to faster project completion and improved consistency across designs.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      </AnimatedSection>
      {/* Final Horizontal Image */}
      {/* <section className="px-4 sm:px-6 md:px-8 mb-24 mt-36">
  <div className="max-w-7xl mx-auto">
    <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 w-[60%] mx-auto transform transition-transform duration-500 hover:scale-105">
      <img 
        src={pc4} 
        alt="Google Assistant Overview"
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</section> */}


      {/* Stats Section */}
      {/* <section className="py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 sm:px-6 md:px-8">
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">40%</h3>
            <p className="text-white/70 mt-2">Time Saved</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">3+</h3>
            <p className="text-white/70 mt-2">Design Tools</p>
          </div>
          <div className="bg-[#1C1C1C] rounded-3xl border border-gray-800/50 p-8 text-center">
            <h3 className="text-5xl font-bold text-white/90">90%</h3>
            <p className="text-white/70 mt-2">User Satisfaction</p>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default PromptcraftAIPage;