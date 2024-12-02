import React, { useRef, useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';
import { ProjectsSection } from '../components/ProjectsSection';
import { WorkHistorySection } from '../components/WorkHistorySection';
import { WorkWithMeSection } from '../components/WorkWithMeSection';
import { AnimatedSection } from '../components/AnimatedSection';
import { Footer } from '../components/Footer';
import nyblogo from '../images/logos/nyb-logo.png';

function HomePage() {
  const projectsRef = useRef<HTMLDivElement>(null);
  const introTextRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);
  const nextParticleId = useRef(0);

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const addParticle = (x: number, y: number) => {
      const id = nextParticleId.current++;
      setParticles(prev => [...prev.slice(-20), { id, x, y }]);
      setTimeout(() => {
        setParticles(prev => prev.filter(particle => particle.id !== id));
      }, 1000);
    };

    let lastTime = 0;
    const throttleMs = 50;

    const handleMouseMove = (e: MouseEvent) => {
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
      {/* Hero Section */}
      <main className="min-h-screen flex flex-col items-center justify-center relative px-4 overflow-hidden">
        {/* Mouse Trail Effect */}
        {particles.map(particle => (
          <div
            key={particle.id}
            className="mouse-particle"
            style={{
              left: `${particle.x}px`,
              top: `${particle.y}px`
            }}
          />
        ))}

        {/* NYB Logo */}
        <AnimatedSection animation="fade-in" className="mb-12">
          <div 
            className="relative animate-float-slow" 
          >
            <img
              src={nyblogo}
              alt="NYB"
              className="w-auto h-[200px] sm:h-[150px] md:h-[200px] lg:h-[300px] object-contain"
            />
          </div>
        </AnimatedSection>

        {/* Introduction Text */}
        <div ref={introTextRef} className="max-w-3xl text-center px-4 sm:px-6 transition-all duration-300">
          <p className="text-lg sm:text-xl md:text-2xl leading-relaxed fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
          Hi, I'm Nayab. I design digital products that make a difference, 
          combining human-centered design with innovation. 
          After taking some time to refresh and hone my skills, I'm ready to step back into the design world with renewed focus and enthusiasm.
          </p>
        </div>

        {/* Scroll Indicator (Mobile Only) */}
        <button 
          onClick={scrollToProjects}
          className="md:hidden absolute bottom-8 animate-bounce-slow p-4 hover:text-white/80 transition-colors focus:outline-none"
          aria-label="Scroll to projects"
        >
          <ArrowDown className="w-8 h-8 text-white/50" />
        </button>
      </main>

      {/* Projects Section */}
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>

      {/* Work History Section */}
      <WorkHistorySection />

      {/* Work With Me Section */}
      <WorkWithMeSection />
    </>
  );
}

export default HomePage;