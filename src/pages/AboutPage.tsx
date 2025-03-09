import React from 'react';
import { WorkWithMeSection } from '../components/WorkWithMeSection';
import { AnimatedSection } from '../components/AnimatedSection';
import { InterestCard } from '../components/InterestCard';
import { Footer } from '../components/Footer';
import netflixLogo from "../images/logos/netflix.png";
import subslogo from "../images/logos/substack.png";
import playstationLogo from "../images/logos/playstation.png";
// Import card images
import dungeonImage from "../images/cards/dungeon.png";
import SSPostImage from "../images/cards/cliff.png";
import DSImage from "../images/cards/demonssouls.jpg";

const interestCards = [
  {
    icon: <img src={netflixLogo} alt="Netflix" className="w-8 h-8"/>,
    subtitle: "Currently Watching",
    title: "Delicious in Dungeon",
    image: dungeonImage,
    link: "https://www.netflix.com/title/81564899"
  },
  {
    icon: <img src={subslogo} alt="Substack" className="w-8 h-8"/>,
    subtitle: "Substack post",
    title: "Tired of waiting for permission?",
    image: SSPostImage,
    link: "https://substack.com/home/post/p-154424966"
  },
  {
    icon: <img src={playstationLogo} alt="Playstation" className="w-8 h-8"/>,
    subtitle: "Currently Playing",
    title: "Demon's Souls",
    image: DSImage,
    link: "https://www.playstation.com/en-us/games/demons-souls/"
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
                I'm a designer who transitioned from fashion runways to user journeys, bringing five years of haute couture expertise into crafting exceptional digital experiences. 
                Proficient in Figma, Adobe Suite, Sketch, and a deep commitment to human-centered design, I specialize in transforming complex challenges into seamless, intuitive solutions users genuinely enjoy.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={600}>
                <p className="text-left">
                My toolkit encompasses web and mobile app design, UI/UX, user research, information architecture, prototyping, and illustration—all grounded in strong principles of identity and accessibility. 
                Recently relocated to Seattle, where my passion for creating pixel-perfect designs matches the strength of the local coffee.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="fade-in" delay={600}>
                <p className="text-left">
                Beyond design (though isn't everything design?), you'll often find me writing on Substack, binge-watching anime or cooking shows, gaming, exploring scenic hiking trails, or planning my next creative adventure.
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