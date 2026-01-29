import React, { useEffect, useRef, useCallback } from 'react';

interface WorkExperienceProps {
  role: string;
  company: string;
  period: string;
  description: string;
}

const workHistory = [
 
  {
    id: 'aiolos',
    role: "UX Designer",
    company: "Aiolos Cloud",
    period: "Seattle, WA",
    description: "Led visual strategy development for Fortune 500 clients and venture-backed AI startups. Created 50+ marketing assets including pitch decks and product one-pagers that supported $250K in enterprise sales pipeline. Built comprehensive brand identity systems and designed data visualizations for 10+ enterprise clients. Collaborated cross-functionally with engineers and stakeholders to translate complex technical concepts into clear visual solutions.

"
  },
  {
    id: 'howl',
    role: "Graphic and UX Designer",
    company: "Howl Digital",
    period: "Mumbai, India",
    description: "Produced 200+ digital ads, social media content, and print collateral for global brands including HRX, American Express, and Almond House. Generated 2M+ impressions and drove 25% CTR growth through data-driven design strategies. Developed 6 campaign style guides and reduced development time by 30% through efficient prototyping workflows."
  },
  {
    id: 'freelance',
    role: "Freelance UX Designer",
    company: "",
    period: "Seattle, Vancouver",
    description: "During my free time and in-between roles, I am open to take on projects as a freelancer to explore new skills and areas of design. This work lets me dive into creative projects I am passionate about, while continuously honing my abilities and expanding my expertise in a variety of expertise."
  },
  {
    id: 'fashion-designer',
    role: "Fashion Designer",
    company: "Private Couture Label",
    period: "Mumbai",
    description: "In a previous life I was engrossed in building rich fashion experiences, from sketching and pattern making to fabric selection and garment construction. I worked with a private couture label, where I honed my skills in creating unique, high-quality pieces that resonated with clients and the market."
  }
] as const;

function WorkExperience({ role, company, period, description }: WorkExperienceProps) {
  const itemRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const updateProgress = useCallback((ratio: number) => {
    if (progressLineRef.current) {
      progressLineRef.current.style.transform = `scaleX(${ratio})`;
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            itemRef.current?.classList.add('opacity-100', 'translate-y-0');
            const ratio = Math.max(0, (entry.intersectionRatio - 0.1) / 0.9);
            updateProgress(ratio);
          } else {
            itemRef.current?.classList.remove('opacity-100', 'translate-y-0');
            updateProgress(0);
          }
        });
      },
      {
        threshold: Array.from({ length: 20 }, (_, i) => i / 20),
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    const currentRef = itemRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [updateProgress]);

  return (
    <div 
      ref={itemRef} 
      className="mb-16 md:mb-24 opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4 mb-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl">{role} {company && `at ${company}`}</h3>
        <span className="text-base sm:text-lg md:text-xl opacity-80">{period}</span>
      </div>
      <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-80 w-full md:w-5/12 mb-8">
        {description}
      </p>
      <div 
        ref={progressLineRef}
        className="h-[1px] bg-gradient-to-r from-white/30 via-white/50 to-white/30 transform scale-x-0 transition-transform duration-300 ease-out origin-left"
        style={{ transformOrigin: 'left' }}
      />
    </div>
  );
}

export function WorkHistorySection() {
  return (
    <section className="min-h-screen bg-black px-4 sm:px-6 py-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16">Work Experience</h2>
        {workHistory.map((item) => (
          <WorkExperience key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}
