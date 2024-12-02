import React, { useState, useCallback } from 'react';
import { Mail, Check } from 'lucide-react';
import { AnimatedSection } from './AnimatedSection';
import WWM from "../images/headers/WWM.png";

const EMAIL = 'nybkazi@gmail.com' as const;

export function WorkWithMeSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  }, []);

  return (
    <section className="bg-black px-4 sm:px-6 py-8 sm:py-16 pb-32">
      <AnimatedSection 
        animation="fade-in" 
        className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto"
      >
        {/* Playful Title */}
        <AnimatedSection animation="slide-from-bottom" delay={200} className="mb-8 sm:mb-12">
          <div 
            className="relative animate-float-slow" 
          >

            <img
              src={WWM}
              alt="WORK WITH ME"
              className="w-auto h-[100px] sm:h-[120px] md:h-[150px] lg:h-[200px] object-contain"
            />
          </div>
        </AnimatedSection>

        {/* Description */}
        <AnimatedSection animation="slide-from-bottom" delay={400} className="mb-8 sm:mb-16">
          <p className="text-sm sm:text-lg md:text-xl leading-relaxed opacity-90">
            I design things that make it easy for your audience 
            to get to know you, blending storytelling, clever writing, and a clear 
            reflection of your unique identity.
          </p>
        </AnimatedSection>

        {/* Email Contact with Enhanced Glow Effect */}
        <AnimatedSection animation="scale-in" delay={600}>
          <button 
            onClick={handleCopyEmail}
            className="bg-white text-black rounded-full py-4 px-6 sm:py-12 sm:px-24 transform transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-between gap-3 sm:gap-16 text-sm sm:text-4xl md:text-6xl group w-[calc(100vw-2rem)] sm:w-auto max-w-[1400px] mx-auto"
            aria-label={copied ? 'Email copied!' : 'Click to copy email'}
          >
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 sm:w-12 sm:h-12 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-medium">{EMAIL}</span>
            </div>
            {copied ? (
              <Check className="w-5 h-5 sm:w-12 sm:h-12 text-green-500 animate-bounce" />
            ) : (
              <span className="bg-yellow-200 px-8 py-4 rounded-full text-xs sm:text-3xl hover:bg-yellow-300 transition-colors text-black whitespace-nowrap">
                copy email :)
              </span>
            )}
          </button>
        </AnimatedSection>
      </AnimatedSection>
    </section>
  );
}