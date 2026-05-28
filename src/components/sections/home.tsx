'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Search, Menu as MenuIcon, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

// Custom Cursor Glow Component
const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  return (
    <>
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 mix-blend-screen ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x - 150,
          top: position.y - 150,
          width: 300,
          height: 300,
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(168, 85, 247, 0.08) 40%, transparent 70%)',
        }}
      />
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: position.x - 4,
          top: position.y - 4,
          width: 8,
          height: 8,
          background: 'linear-gradient(135deg, #6366f1, #a855f7)',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(99, 102, 241, 0.5)',
        }}
      />
    </>
  );
};

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
      <CursorGlow />
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#1a0b0b] text-white pt-20">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-900/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-4 space-y-8 text-center lg:text-left order-2 lg:order-1">
              <AnimatedSection delay={300}>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  New Modern<br />
                  <span className="text-gray-100">Research Center</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={500}>
                <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0">
                  Hi, I'm Arkar Yan. Visionary Software Architect and Educator with 10+ years of experience.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={700}>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-[#3d1a1a] hover:bg-[#4d2222] text-white px-8 py-6 rounded-lg font-medium transition-all"
                  >
                    Register
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => scrollToSection('projects')}
                    className="border-gray-700 text-white hover:bg-white/5 px-8 py-6 rounded-lg font-medium transition-all bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Center Character Image */}
            <div className="lg:col-span-4 flex justify-center order-1 lg:order-2">
              <AnimatedSection delay={200}>
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px]">
                  <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full scale-75" />
                  <img 
                    src="/hero-character.png" 
                    alt="Arkar Yan Character" 
                    className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                  />
                </div>
              </AnimatedSection>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-4 space-y-8 text-center lg:text-left order-3">
              <AnimatedSection delay={400}>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Join as a<br />
                  Researcher
                </h2>
              </AnimatedSection>
              
              <AnimatedSection delay={600}>
                <p className="text-gray-400 text-lg max-w-md mx-auto lg:mx-0">
                  Successfully led 200+ projects, from enterprise SaaS to community-driven AI solutions.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={800}>
                <Button 
                  onClick={() => scrollToSection('about')}
                  className="bg-[#3d1a1a] hover:bg-[#4d2222] text-white px-10 py-6 rounded-lg font-medium transition-all"
                >
                  Join Now
                </Button>
              </AnimatedSection>
            </div>

          </div>

          {/* Bottom Footer Info */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <AnimatedSection delay={1000}>
              <p className="text-gray-500 text-sm">©All Right For Research.com</p>
            </AnimatedSection>
            
            <AnimatedSection delay={1200}>
              <div className="flex gap-6">
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">FB</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">IN</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">TW</a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm font-medium">LI</a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
