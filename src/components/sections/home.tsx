'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '@/hooks/use-animations';

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

interface HomeSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  return (
    <>
      <CursorGlow />
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden section-white px-4 py-24 sm:py-28 lg:px-0 lg:py-24">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100/80 blur-[120px] rounded-full dark:bg-blue-900/10" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-100/70 blur-[120px] rounded-full dark:bg-purple-900/10" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6 xl:gap-8">
            
            {/* Left Content */}
            <div className="order-2 space-y-6 text-center lg:order-1 lg:col-span-3 lg:text-left xl:space-y-8">
              <AnimatedSection delay={300}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                  Hi, I'm<br />
                  <span>Arkar Yan</span>
                </h1>
              </AnimatedSection>
              
              <AnimatedSection delay={500}>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                  Software Engineer | Project Manager | Instructor | Founder
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={700}>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 px-6 sm:px-8 py-6 rounded-lg font-medium transition-all"
                  >
                    Start a conversation
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => scrollToSection('projects')}
                    className="border-gray-300 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 px-6 sm:px-8 py-6 rounded-lg font-medium transition-all bg-transparent"
                  >
                    View portfolio
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            {/* Center Character Image */}
            <div className="order-1 flex justify-center lg:order-2 lg:col-span-6">
              <AnimatedSection delay={200}>
                <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[540px] xl:max-w-[620px]">
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
            <div className="order-3 space-y-6 text-center lg:col-span-3 lg:text-left xl:space-y-8">
              <AnimatedSection delay={400}>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-gray-900 dark:text-white">
                  200+<br />
                  Projects Delivered
                </h2>
              </AnimatedSection>
              
              <AnimatedSection delay={600}>
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-md mx-auto lg:mx-0">
                  Visionary Software Architect and Educator with 10+ years of experience. Successfully led 200+ projects, from enterprise SaaS to community-driven AI solutions. Creator of YBS AI, MM Match, Solo VPN, KG English, DWMBlurGlass, OneKit, MM Career AI, and more. Founder of k Square and Myanmar Cyber Ghost.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={800}>
                <div className="grid grid-cols-1 gap-4 max-w-md mx-auto sm:grid-cols-3 lg:grid-cols-1 lg:mx-0 xl:grid-cols-3">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">200+</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">10+</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">14.5K+</div>
                    <div className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Students Taught</div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>

        </div>
      </section>
    </>
  );
}
