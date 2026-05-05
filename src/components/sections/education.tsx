'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award } from 'lucide-react';

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

// Animated Card Component
const AnimatedCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${className} ${
        isIntersecting 
          ? 'opacity-100 scale-100' 
          : 'opacity-0 scale-95'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Education data
const education = [
  {
    degree: 'Network Engineering & CCNA',
    institution: 'Cisco Certified Network Associate',
    period: '2014 – Present',
    type: 'Certification',
    description: 'Advanced networking concepts and Cisco certification preparation',
  },
  {
    degree: 'Linux System Administration',
    institution: 'Professional Training',
    period: '2015 – Present',
    type: 'Certification',
    description: 'Comprehensive Linux system administration and server management',
  },
  {
    degree: 'Advanced Laravel & Vue.js Development',
    institution: 'Professional Development',
    period: '2018 – Present',
    type: 'Specialization',
    description: 'Advanced web development with modern PHP and JavaScript frameworks',
  },
  {
    degree: 'Self-Taught Professional',
    institution: 'Independent Learning',
    period: '2014 – Present',
    type: 'Self-Directed',
    description: 'A decade of intensive self-study and practical application in Full-stack development and System Architecture',
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 section-white">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My educational background and professional certifications
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <AnimatedCard key={index} delay={index * 200}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
                      <span className="font-medium">{edu.institution}</span>
                      <span>•</span>
                      <span>{edu.period}</span>
                    </div>
                    <Badge variant="outline" className="mb-3 text-xs">
                      {edu.type}
                    </Badge>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
