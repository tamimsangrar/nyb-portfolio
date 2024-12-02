import React from 'react';
import { WorkWithMeSection } from '../components/WorkWithMeSection';
import { AnimatedSection } from '../components/AnimatedSection';
import { InterestCard } from '../components/InterestCard';
import { Footer } from '../components/Footer';
import netflixLogo from "../images/logos/netflix.png";
import mediumLogo from "../images/logos/medium.png";
import playstationLogo from "../images/logos/playstation.png";
// Import card images
import culinaryImage from "../images/cards/culinary.jpg";
import mediumPostImage from "../images/cards/medium-post.png";
import wukongImage from "../images/cards/wukong.jpg";

const interestCards = [
  {
    icon: <img src={netflixLogo} alt="Netflix" className="w-8 h-8"/>,
    subtitle: "Currently Watching",
    title: "Culinary Class Wars",
    image: culinaryImage,
    link: "https://www.netflix.com/title/81728365"
  },
  {
    icon: <img src={mediumLogo} alt="Medium" className="w-8 h-8"/>,
    subtitle: "Medium post",
    title: "Tired of waiting for permission?",
    image: mediumPostImage,
    link: "https://medium.com/@nybkazi/tired-of-waiting-for-permission-heres-why-you-don-t-need-it-c6f42bba8f0b"
  },
  {
    icon: <img src={playstationLogo} alt="Playstation" className="w-8 h-8"/>,
    subtitle: "Currently Playing",
    title: "Black Myth Wukong",
    image: wukongImage,
    link: "https://www.playstation.com/en-us/games/black-myth-wukong/"
  }
];

function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="pt-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-[1400px] mx-auto">
          {/* About Me Section */}
          <section className="mb-32 max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in">
              <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-tight text-left">
                About Me.
              </h1>
            </AnimatedSection>

            <div className="space-y-8 text-base sm:text-lg leading-relaxed font-light text-white/90">
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