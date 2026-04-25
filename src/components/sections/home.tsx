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
      {/* New Modern Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800"></div>
        
        {/* Geometric Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-blue-500 rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-purple-500 rotate-12"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-12">
                        
            {/* Profile Image and Name */}
            <AnimatedSection delay={300}>
              <div className="flex flex-col items-center space-y-4">
                {/* Profile Image */}
                <div className="relative group mt-8">
                  <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                    <img 
                      src="profile.jpg" 
                      alt="Arkar Yan" 
                      className="w-full h-full object-cover bg-gray-100 dark:bg-gray-800"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800"></div>
                </div>
                
                {/* Name */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                  Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Arkar Yan</span>
                </h1>
              </div>
            </AnimatedSection>
            
            {/* Title */}
            <AnimatedSection delay={500}>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium">
                Software Engineer | Project Manager | Instructor | Founder
              </p>
            </AnimatedSection>
            
            {/* Description */}
            <AnimatedSection delay={700}>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Visionary Software Architect and Educator with 10+ years experience. Successfully led 200+ projects, 
                ranging from enterprise SaaS to community-driven AI solutions. Founder of k Square and Myanmar Cyber Ghost, 
                dedicated to bridging the gap between industry and education through expert-led mentorship.
              </p>
            </AnimatedSection>
            
            {/* Stats Cards */}
            <AnimatedSection delay={900}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">200+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Projects</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">10+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">14500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Students</div>
                </div>
              </div>
            </AnimatedSection>
            
            {/* CTA Buttons */}
            <AnimatedSection delay={1100}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                >
                  Start a conversation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  View portfolio
                </Button>
              </div>
            </AnimatedSection>
            
            {/* Scroll Indicator */}
            <AnimatedSection delay={1300}>
              <div className="flex justify-center mt-16">
                <div className="animate-bounce">
                  <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"></div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
