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
    role: "UX designer",
    company: "Aiolos Cloud",
    period: "October 22 - January 2023",
    description: "Led the conceptualization and development of visual strategies, aligning designs with project objectives and stakeholder expectations. Developed comprehensive brand guidelines to ensure a cohesive and consistent visual identity across all elements. Recognized for expertise in organizing information architecture across multiple projects."
  },
  {
    id: 'howl',
    role: "Graphic/UX designer",
    company: "Howl Digital",
    period: "December 21 - October 2022",
    description: "Collaborated closely with the design and content teams as a multimedia designer, creating a range of visuals including web pages, social media posts, email campaigns, product labels, and menus. Notable clients included HRX, American Express, and Almond House."
  },
  {
    id: 'freelance',
    role: "Freelance",
    company: "",
    period: "Various projects",
    description: "During my free time and in-between roles, I took on freelance projects to explore new skills and areas of design. This work let me dive into creative projects I was genuinely passionate about, while continuously honing my abilities and expanding my expertise in a variety of fields."
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 md:mb-16">Work History</h2>
        {workHistory.map((item) => (
          <WorkExperience key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
}