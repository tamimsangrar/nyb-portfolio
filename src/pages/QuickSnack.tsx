import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import qs_header from '../images/headers/QS.png';
import qs1 from "../images/QS/1.png";
import qs2 from "../images/QS/2.png";
import qs3 from "../images/QS/3.png";
import qs4 from "../images/QS/4.png";
import qs5 from "../images/QS/5.png";
import qs6 from "../images/QS/6.png";

const skills = [
  "UX Design",
  "Research and Analysis",
  "Project Management",
  "Technical Understanding"
];

function QuickSnackPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Header Section */}
      <section className="px-4 sm:px-6 md:px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative">
              <div className="relative animate-float-slow">
                <img
                  src={qs_header}
                  alt="QUICKSNACK"
                  className="w-auto h-[120px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
                />
              </div>
            </div>

            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={200}>
                <div>
                  <h2 className="text-2xl text-gray-400">Challenge</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4">
                  Eliminating long concession stand lines at theaters with QuickSnack—an accessible digital solution that streamlines ordering without disrupting operations, ensuring a seamless, trustworthy experience for all users.
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
                  <h2 className="text-2xl text-gray-400">Outcomes</h2>
                  <p className="text-lg text-gray-300 leading-relaxed mt-4 mb-8">
                  QuickSnack proposes to transform the theater snack ordering experience with a seamless, inclusive digital solution. 
                  It streamlines operations, improved inventory management, and creates a new digital revenue stream while enhancing convenience for moviegoers.
                  </p>
                  <a 
                    href="#" 
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
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={qs1} 
                alt="QuickSnack Mobile Screen 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={qs2} 
                alt="QuickSnack Mobile Screen 2"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={qs3} 
                alt="QuickSnack Mobile Screen 3"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Problem Statement Section */}
{/* Problem Statement & Solution Section */}
<AnimatedSection animation="fade-in" delay={200}>
<section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-20">
      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Problem Statement</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          Movie-goers frequently encounter long wait times at theater concession stands, leading to missed movie moments, diminished customer satisfaction, and lost revenue opportunities for theaters. The objective was to create an accessible digital solution that streamlines the food ordering process without disrupting existing theater operations or excluding any customer segments.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-bold">Solution</h3>
        <p className="text-lg text-gray-300 leading-relaxed">
          QuickSnack delivers an intuitive mobile ordering experience for theater concessions, featuring:
        </p>

        <div className="pl-6 border-l border-gray-700 space-y-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Mobile Ordering System</h4>
            <p className="text-gray-300 leading-relaxed">
              Convenient in-app browsing and ordering from anywhere in the theater.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Express Pickup</h4>
            <p className="text-gray-300 leading-relaxed">
              Dedicated collection points to eliminate waiting in traditional lines.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Accessibility Features</h4>
            <p className="text-gray-300 leading-relaxed">
              Screen reader compatibility, adequate contrast ratios, and inclusive design principles.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Personalization Options</h4>
            <p className="text-gray-300 leading-relaxed">
              Saved preferences and order history for faster future transactions.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Theater Integration</h4>
            <p className="text-gray-300 leading-relaxed">
              Seamless connection with theater inventory and ticketing systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>

      {/* Mobile Screens Section */}
 
      {/* Research Process Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="px-4 sm:px-6 md:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">1. Research & Analysis</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our primary objective was to understand the pain points in the current snack ordering process at movie theaters.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Research Goals</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We focused on identifying:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Factors that make in-line ordering difficult</li>
                    <li>Customer expectations for a digital ordering solution</li>
                    <li>Potential barriers to adoption</li>
                    <li>Key features that would drive user engagement</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Methodology</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We conducted an unmoderated usability study with the following parameters:
                  </p>
                  
                  <h5 className="text-lg font-semibold mb-2">Study Details:</h5>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300 mb-4">
                    <li>Format: Remote usability testing</li>
                    <li>Participants: 5 diverse individuals</li>
                    <li>Duration: 10-15 minutes per session</li>
                    <li>Location: United States (remote)</li>
                    <li>Date: March 25-26, 2023</li>
                  </ul>
                  
                  <h5 className="text-lg font-semibold mb-2">Participant Demographics:</h5>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Age range: 20-75 years</li>
                    <li>Gender distribution: 2 male, 2 female, 1 non-binary</li>
                    <li>Accessibility considerations: Included participant with visual impairment</li>
                    <li>Usage pattern: All frequent movie theater attendees</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection animation="fade-in" delay={200}>
<section className="px-4 sm:px-6 md:px-8 py-24">
  <div className="max-w-4xl mx-auto">
    <div className="space-y-8">
      <h3 className="text-2xl font-bold">2. Design Process</h3>
      <p className="text-lg text-gray-300 leading-relaxed">
        Created a comprehensive mobile experience with user-friendly features and inclusive design principles.
      </p>

      <div className="pl-6 border-l border-gray-700 space-y-8">
        <div>
          <h4 className="text-xl font-bold mb-4">Interface Design</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Created intuitive navigation structure with clear category organization</li>
            <li>Designed visually appealing food displays with essential information</li>
            <li>Developed streamlined checkout flow to minimize friction</li>
            <li>Implemented consistent visual language throughout the app</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">Accessibility Considerations</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Ensured WCAG 2.1 compliance across all screens and interactions</li>
            <li>Optimized for screen readers with appropriate labels and landmarks</li>
            <li>Maintained adequate color contrast for all text and interactive elements</li>
            <li>Designed with multiple input methods in mind (touch, voice, switch devices)</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-4">User Experience Refinement</h4>
          <ul className="list-disc pl-6 space-y-2 text-gray-300">
            <li>Simplified profile creation to reduce onboarding friction</li>
            <li>Enhanced navigation cues for seamless movement between sections</li>
            <li>Streamlined checkout process with clear progress indicators</li>
            <li>Developed intuitive order modification and customization options</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
</AnimatedSection>

      
{/* Second Horizontal Image */}
<AnimatedSection animation="fade-in" delay={200}>
      <section className="px-4 sm:px-6 md:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={qs4} 
                alt="QuickSnack Mobile Screen 1"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={qs5} 
                alt="QuickSnack Mobile Screen 2"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="relative aspect-[9/19] max-w-[240px] md:max-w-[320px] mx-auto transition-transform duration-500 hover:scale-105">
              <img 
                src={qs6} 
                alt="QuickSnack Mobile Screen 3"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Usability Testing Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="px-4 sm:px-6 md:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">3. Usability Testing</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We employed several key performance indicators (KPIs) to measure success and guide our testing process.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">Test Structure</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Participants were guided through a series of tasks that mimicked the real-world usage of the app:
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-gray-300 mb-4">
                    <li>Profile Creation</li>
                    <li>Category Selection</li>
                    <li>Snack Selection and Cart Addition</li>
                    <li>Order Modification</li>
                    <li>Checkout Process</li>
                  </ol>
                  
                  <p className="text-gray-300 leading-relaxed mb-3">
                    After each task, participants provided feedback on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Task difficulty</li>
                    <li>Suggested improvements</li>
                    <li>Overall experience</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Key Findings</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    Preliminary feedback areas to monitor:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Profile creation complexity</li>
                    <li>Navigation intuitiveness</li>
                    <li>Checkout process clarity</li>
                    <li>Overall app learnability</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Measuring Success Section */}
      <AnimatedSection animation="fade-in" delay={200}>
        <section className="px-4 sm:px-6 md:px-8 py-24">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">4. Results & Impact</h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                We implemented comprehensive measurements to track the success of QuickSnack.
              </p>

              <div className="pl-6 border-l border-gray-700 space-y-8">
                <div>
                  <h4 className="text-xl font-bold mb-4">System Usability Scale</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We implemented a comprehensive SUS questionnaire focusing on:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>App complexity</li>
                    <li>Ease of use</li>
                    <li>Technical support requirements</li>
                    <li>Navigation</li>
                    <li>User confidence</li>
                    <li>Learning curve</li>
                    <li>Main user flow clarity</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Key Performance Metrics</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    We tracked:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Average time to complete an order</li>
                    <li>Cart abandonment rates</li>
                    <li>Number of items per order</li>
                    <li>User satisfaction scores</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-bold mb-4">Accessibility Considerations</h4>
                  <p className="text-gray-300 leading-relaxed mb-3">
                    The application was designed with accessibility in mind:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-300">
                    <li>Screen reader compatibility</li>
                    <li>Switch device support</li>
                    <li>Clear navigation patterns</li>
                    <li>Adequate contrast ratios</li>
                    <li>Inclusive design principles</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

    </div>
  );
}

export default QuickSnackPage;