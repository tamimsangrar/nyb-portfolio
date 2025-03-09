import React, { useRef, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ProjectCard } from './ProjectCard';
import HRXImage from "../images/cards/HRX.png";
import FortunaImage from "../images/cards/Fortuna.png";
import SEImage from "../images/cards/se.png";
import GoogleImage from "../images/cards/google.png";

const projectCards = [
  {
    id: 'hrx',
    title: "HRX",
    description: "Social media design for India's leading fitness brand",
    bgColor: "bg-[#FFD700]",
    bgImage: HRXImage,  // Use imported image
    path: "/projects/communication-design/hrx"
  },
  {
    id: 'fei',
    title: "Fortuna Insights",
    description: "Website design for an AI-powered legal solutions app",
    bgColor: "bg-[#8A2BE2]",
    bgImage: FortunaImage,  // Use imported image
    path: "/projects/uiux-design/promptcraft-ai"
  },
  {
    id: 'se',
    title: "Sriram Emani",
    description: "Digital portfolio for a versatile performer",
    bgColor: "bg-[#1E1E1E]",
    bgImage: SEImage,  // Use imported image
    path: "/projects/uiux-design/sriram-emani"
  },
  {
    id: 'ga',
    title: "Google Assistant",
    description: "Personalized wellness coach for Google Assistant",
    bgColor: "bg-[#4285F4]",
    bgImage: GoogleImage,  // Use imported image
    path: "/projects/uiux-design/google-assistant"
  }
] as const;

export function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [clickPrevented, setClickPrevented] = useState(false);
  const [cardSets, setCardSets] = useState(4); // Number of times to repeat the cards

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft || 0));
    setScrollLeft(scrollRef.current?.scrollLeft || 0);
    setClickPrevented(false);
  }, []);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = (x - startX) * 2;
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = scrollLeft - walk;
      if (Math.abs(walk) > 5) {
        setClickPrevented(true);
      }
    }
  }, [isDragging, startX, scrollLeft]);

  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    const scrollEnd = scrollWidth - clientWidth;
    
    // If we're near the end, add more cards
    if (scrollLeft > scrollEnd - clientWidth) {
      setCardSets(prev => prev + 2);
    }
    
    // If we're near the start, add more cards to the beginning and adjust scroll position
    if (scrollLeft < clientWidth) {
      setCardSets(prev => prev + 2);
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += scrollWidth / 2;
      }
    }
  }, []);

  useEffect(() => {
    const handleMouseLeave = () => setIsDragging(false);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseUp]);

  const handleClick = (e: React.MouseEvent) => {
    if (clickPrevented) {
      e.preventDefault();
    }
  };

  // Generate repeated cards array
  const repeatedCards = Array(cardSets).fill(projectCards).flat();

  return (
    <section className="bg-black py-24">
      {/* Mobile: Stacked Layout */}
      <div className="md:hidden px-4 sm:px-6">
        <div className="flex flex-col gap-6">
          {projectCards.map((card) => (
            <Link key={card.id} to={card.path}>
              <ProjectCard 
                title={card.title} 
                description={card.description}
                bgColor={card.bgColor}
                bgImage={card.bgImage}
              />
            </Link>
          ))}
        </div>
      </div>

      {/* Desktop: Draggable Horizontal Scroll */}
      <div className="hidden md:block relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onScroll={handleScroll}
        >
          <div className="inline-flex gap-6 px-6">
            {repeatedCards.map((card, index) => (
              <Link 
                key={`${card.id}-${index}`} 
                to={card.path}
                onClick={handleClick}
                className="no-drag"
              >
                <ProjectCard 
                  title={card.title} 
                  description={card.description}
                  bgColor={card.bgColor}
                  bgImage={card.bgImage}
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}