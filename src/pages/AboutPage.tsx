import React from 'react';
import { WorkWithMeSection } from '../components/WorkWithMeSection';
import { AnimatedSection } from '../components/AnimatedSection';
import { InterestCard } from '../components/InterestCard';
import { Footer } from '../components/Footer';

const interestCards = [
  {
    icon: <img src="./src/images/logos/netflix.png" alt="Netflix" className="w-8 h-8"/>,
    subtitle: "Currently Watching",
    title: "Culinary Class Wars",
    image: "./src/images/cards/culinary.jpg",
    link: "https://www.netflix.com/title/81728365" // Replace with actual Netflix link
  },
  {
    icon: <img src="./src/images/logos/medium.png" alt="Netflix" className="w-8 h-8"/>,
    subtitle: "Medium post",
    title: "Tired of waiting for permission?",
    image: "./src/images/cards/medium-post.png",
    link: "https://medium.com/@nybkazi/tired-of-waiting-for-permission-heres-why-you-don-t-need-it-c6f42bba8f0b" // Replace with actual Medium article link
  },
  {
    icon: <img src="./src/images/logos/playstation.png" alt="Netflix" className="w-8 h-8"/>,
    subtitle: "Currently Playing",
    title: "Black Myth Wukong",
    image: "./src/images/cards/wukong.jpg",
    link: "https://www.playstation.com/en-us/games/black-myth-wukong/" // Replace with actual game link
  }
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="pt-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* About Me Section */}
          <section className="mb-32">
            <AnimatedSection animation="fade-in">
              <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight">
                About Me.
              </h1>
            </AnimatedSection>

            <div className="space-y-8 text-base sm:text-lg leading-relaxed font-light text-white/90 max-w-3xl mx-auto">
              <AnimatedSection animation="fade-in" delay={300}>
                <p className="text-left">
                  A former fashion designer who transitioned into graphic design and now thrives as a UX 
                  designer, driven by an endless curiosity and a love for learning. Lately, I've been diving into 
                  personal projects and sharpening my skills after my big move to Seattle. My experience 
                  covers web and mobile app design, communication design, graphic design, UI/UX, user 
                  research, information architecture, prototyping, and illustration, all with a strong emphasis 
                  on identity.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={600}>
                <p className="text-left">
                  When I'm not immersed in design, you'll find me writing blogs on Medium, admiring the 
                  work of fellow designers, watching cooking shows, playing video games, hiking.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Interests Section */}
          <section className="mb-32">
            <div className="flex flex-col sm:flex-row flex-wrap items-center sm:justify-center gap-6">
              {interestCards.map((card, index) => (
                <AnimatedSection key={index} animation="fade-in" delay={index * 200}>
                  <InterestCard {...card} />
                </AnimatedSection>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Work With Me Section */}
      <WorkWithMeSection />
    </div>
  );
}

export default AboutPage;