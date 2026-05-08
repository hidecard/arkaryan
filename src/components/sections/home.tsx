'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Briefcase, Clock, Users } from 'lucide-react';

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
      {/* Main glow */}
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
      {/* Small dot */}
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

// Interactive Spotlight Background
const InteractiveSpotlight = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(99, 102, 241, 0.08) 0%, rgba(168, 85, 247, 0.04) 25%, transparent 50%)`,
        }}
      />
    </div>
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

// Animated mesh gradient background
const MeshGradient = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800" />
      
      {/* Animated mesh orbs */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '8s' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '10s', animationDelay: '2s' }}
        />
        <div 
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '12s', animationDelay: '4s' }}
        />
        <div 
          className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '9s', animationDelay: '1s' }}
        />
      </div>
      
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />
    </div>
  );
};

// Glassmorphism Stat Card
const StatCard = ({ icon: Icon, value, label, delay }: { icon: any, value: string, label: string, delay: number }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="group relative">
        {/* Glassmorphism card */}
        <div className="relative p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl border border-white/20 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105">
          {/* Gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-heading bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                {label}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

interface HomeSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HomeSection({ scrollToSection }: HomeSectionProps) {
  return (
    <>
      {/* Modern Hero Section with Interactive Background */}
      <CursorGlow />
      <section id="home" className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 relative overflow-hidden cursor-none">
        <MeshGradient />
        <InteractiveSpotlight />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <div className="space-y-12">
                        
            {/* Profile Image and Name */}
            <AnimatedSection delay={300}>
              <div className="flex flex-col items-center space-y-6">
                {/* Profile Image with glow effect */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                    <img 
                      src="profile.jpg" 
                      alt="Arkar Yan" 
                      className="w-full h-full object-cover bg-gray-100 dark:bg-gray-800"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 shadow-lg" />
                </div>
                
                {/* Name with modern typography */}
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-gray-900 dark:text-white">Hi, I'm </span>
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 bg-clip-text text-transparent">
                    Arkar Yan
                  </span>
                </h1>
              </div>
            </AnimatedSection>
            
            {/* Title with better hierarchy */}
            <AnimatedSection delay={500}>
              <p className="font-heading text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 font-medium tracking-wide">
                Software Engineer <span className="text-gray-400">|</span>{' '}
                Project Manager <span className="text-gray-400">|</span>{' '}
                Instructor <span className="text-gray-400">|</span>{' '}
                Founder
              </p>
            </AnimatedSection>
            
            {/* Description */}
            <AnimatedSection delay={700}>
              <p className="font-body text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Visionary Software Architect and Educator with{' '}
                <span className="font-semibold text-gray-900 dark:text-white">10+ years</span> of experience. 
                Successfully led <span className="font-semibold text-gray-900 dark:text-white">200+ projects</span>, 
                from enterprise SaaS to community-driven AI solutions. Founder of{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">k Square</span> and{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">Myanmar Cyber Ghost</span>.
              </p>
            </AnimatedSection>
            
            {/* Glassmorphism Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <StatCard icon={Briefcase} value="200+" label="Projects Delivered" delay={900} />
              <StatCard icon={Clock} value="10+" label="Years Experience" delay={1000} />
              <StatCard icon={Users} value="14.5K+" label="Students Taught" delay={1100} />
            </div>
            
            {/* CTA Buttons */}
            <AnimatedSection delay={1300}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  onClick={() => scrollToSection('contact')} 
                  size="lg"
                  className="font-heading bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    Start a conversation
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
                <Button 
                  onClick={() => scrollToSection('projects')} 
                  variant="outline"
                  size="lg"
                  className="font-heading border-2 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 px-8 py-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm relative overflow-hidden group"
                >
                  <span className="relative z-10">View portfolio</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-700 dark:to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Button>
              </div>
            </AnimatedSection>
            
            {/* Scroll Indicator */}
            <AnimatedSection delay={1500}>
              <div className="flex justify-center mt-16">
                <div className="animate-bounce">
                  <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mt-2 animate-pulse" />
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
