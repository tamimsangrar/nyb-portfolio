import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { ProjectsSection } from '../components/ProjectsSection';
import { WorkHistorySection } from '../components/WorkHistorySection';
import { WorkWithMeSection } from '../components/WorkWithMeSection';
import { AnimatedSection } from '../components/AnimatedSection';
import { Footer } from '../components/Footer';
import nyblogo from '../images/logos/nyb-logo.svg';

function HomePage() {
  const projectsRef = useRef(null);
  const introTextRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const nextParticleId = useRef(0);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const addParticle = (x, y) => {
      const id = nextParticleId.current++;
      // Generate random size between 20 and 40 pixels
      const size = 15;
      // Generate random opacity between 0.3 and 0.6
      const opacity = 0.3;
      setParticles(prev => [...prev.slice(-25), { id, x, y, size, opacity }]);
      setTimeout(() => {
        setParticles(prev => prev.filter(particle => particle.id !== id));
      }, 1500); // Increased duration for more visible effect
    };

    let lastTime = 0;
    const throttleMs = 20; // Slightly reduced throttle for more particles

    const handleMouseMove = (e) => {
      const now = Date.now();
      if (now - lastTime >= throttleMs) {
        addParticle(e.clientX, e.clientY);
        lastTime = now;
      }
    };

    const handleScroll = () => {
      if (introTextRef.current) {
        const scrolled = window.scrollY;
        const scale = Math.max(0.5, 1 - (scrolled * 0.001));
        introTextRef.current.style.transform = `scale(${scale})`;
        introTextRef.current.style.opacity = `${Math.max(0, 1 - (scrolled * 0.003))}`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
        {/* Enhanced Mouse Trail Effect */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute rounded-full bg-white transition-all duration-1000 ease-out"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              transform: 'translate(-50%, -50%)',
              filter: 'blur(4px)',
              animation: 'fadeOut 1.5s ease-out forwards'
            }}
          />
        ))}

        {/* Rest of your components remain the same */}
        <AnimatedSection animation="fade-in" className="mb-12">
          <div className="relative animate-float-slow">
            <img
              src={nyblogo}
              alt="NYB"
              className="w-auto h-[200px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
            />
          </div>
        </AnimatedSection>

        <div ref={introTextRef} className="max-w-3xl text-center px-4 sm:px-6 transition-all duration-300">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
            Hi, I'm Nayab — a designer who loves turning tricky problems into simple, human-centered solutions. 
            With fresh ideas and a creative toolkit I've built through lots of practice, I'm all about creating 
            digital experiences that stick with people.
          </p>
        </div>

        <button 
          onClick={scrollToProjects}
          className="md:hidden absolute bottom-8 animate-bounce-slow p-4 hover:text-white/80 transition-colors focus:outline-none"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-8 h-8 text-white/50" />
        </button>
      </main>

      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      <WorkHistorySection />
      <WorkWithMeSection />
    </>
  );
}

export default HomePage;