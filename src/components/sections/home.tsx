'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

// Animation Hook
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isIntersecting };
};

// Animated Section Component
const AnimatedSection = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${className} ${
        isIntersecting 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

interface HomeSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  return (
    <>
      {/* Modern Hero Section with Animations */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-8">
            {/* Name with Staggered Animation */}
            <AnimatedSection delay={200}>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="inline-block transition-all duration-500 hover:scale-105">Hi, I'm </span>
                <span className="inline-block text-gray-900 dark:text-white transition-all duration-500 hover:scale-105 hover:text-blue-600 dark:hover:text-blue-400">Arkar Yan</span>
              </h1>
            </AnimatedSection>
            
            {/* Title */}
            <AnimatedSection delay={400}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                Software Engineer | Project Manager | Instructor | Founder
              </p>
            </AnimatedSection>
            
            {/* Description */}
            <AnimatedSection delay={600}>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                Visionary Software Architect and Educator with 10+ years experience. Successfully led 200+ projects, 
                ranging from enterprise SaaS to community-driven AI solutions. Founder of k Square and Myanmar Cyber Ghost, 
                dedicated to bridging the gap between industry and education through expert-led mentorship.
              </p>
            </AnimatedSection>
            
            {/* CTA Buttons with Hover Effects */}
            <AnimatedSection delay={800}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg"
                  className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  Get in touch
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('experience')} 
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  View my work
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
