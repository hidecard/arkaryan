'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy } from 'lucide-react';

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

// Skills data
const skills = {
  frontend: [
    { name: 'Next.js', percentage: 95, color: 'bg-gray-900 dark:bg-white' },
    { name: 'React.js', percentage: 90, color: 'bg-blue-500' },
    { name: 'Vue.js', percentage: 85, color: 'bg-green-500' },
    { name: 'Tailwind CSS', percentage: 90, color: 'bg-cyan-500' },
    { name: 'Bootstrap', percentage: 90, color: 'bg-purple-600' },
    { name: 'HTML/CSS', percentage: 95, color: 'bg-orange-500' },
  ],
  backend: [
    { name: 'Node.js', percentage: 90, color: 'bg-green-500' },
    { name: 'Express.js', percentage: 90, color: 'bg-green-600' },
    { name: 'Django', percentage: 70, color: 'bg-green-700' },
    { name: 'Laravel', percentage: 80, color: 'bg-red-500' },
    { name: 'PostgreSQL', percentage: 70, color: 'bg-blue-600' },
    { name: 'Supabase', percentage: 80, color: 'bg-green-500' },
    { name: 'Firebase', percentage: 80, color: 'bg-yellow-500' },
    { name: 'MongoDB', percentage: 85, color: 'bg-green-400' },
    { name: 'MySQL', percentage: 80, color: 'bg-blue-400' },
  ],
  programmingLanguages: [
    { name: 'Python', percentage: 80, color: 'bg-blue-600' },
    { name: 'C#', percentage: 80, color: 'bg-purple-600' },
    { name: 'C++', percentage: 60, color: 'bg-blue-500' },
    { name: 'JavaScript', percentage: 95, color: 'bg-yellow-500' },
    { name: 'Dart', percentage: 70, color: 'bg-cyan-500' },
    { name: 'PHP', percentage: 90, color: 'bg-purple-500' },
    { name: 'Java', percentage: 80, color: 'bg-orange-500' },
    { name: 'TypeScript', percentage: 85, color: 'bg-blue-600' },
    { name: 'Rust', percentage: 60, color: 'bg-orange-700' },
  ],
  mobile: [
    { name: 'Flutter & Dart', percentage: 85, color: 'bg-blue-400' },
    { name: 'Native Java (Android)', percentage: 75, color: 'bg-orange-500' },
    { name: 'Sketchware (block programming)', percentage: 80, color: 'bg-green-500' },
  ],
  cybersecurity: [
    { name: 'Vulnerability Assessment', percentage: 85, color: 'bg-red-500' },
    { name: 'Network Security', percentage: 80, color: 'bg-yellow-600' },
    { name: 'Incident Response', percentage: 75, color: 'bg-orange-600' },
  ],
  creative: [
    { name: 'Graphic Design', percentage: 85, color: 'bg-pink-500' },
    { name: 'Motion Video Editing', percentage: 80, color: 'bg-purple-500' },
    { name: 'Figma', percentage: 70, color: 'bg-orange-500' },
    { name: 'Page Administration', percentage: 90, color: 'bg-blue-500' },
  ],
  dataScience: [
    { name: 'NumPy', percentage: 70, color: 'bg-blue-600' },
    { name: 'Pandas', percentage: 70, color: 'bg-orange-600' },
    { name: 'Matplotlib', percentage: 60, color: 'bg-green-600' },
    { name: 'Seaborn', percentage: 80, color: 'bg-purple-600' },
  ],
  systems: [
    { name: 'CCNA Networking', percentage: 85, color: 'bg-blue-600' },
    { name: 'Linux System Administration', percentage: 80, color: 'bg-orange-600' },
    { name: 'Git & GitHub', percentage: 90, color: 'bg-gray-700' },
  ],
};

export default function SkillsSection() {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById('skills');
      if (skillsSection) {
        const rect = skillsSection.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          setSkillsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              My technical expertise across different domains
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <AnimatedCard delay={200}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Code className="h-4 w-4 text-gray-900 dark:text-white" />
                </div>
                Frontend Development
              </h3>
              <div className="space-y-4">
                {skills.frontend.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${200 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Backend Skills */}
          <AnimatedCard delay={400}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Database className="h-4 w-4 text-green-600" />
                </div>
                Backend Development
              </h3>
              <div className="space-y-4">
                {skills.backend.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${400 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Programming Languages */}
          <AnimatedCard delay={600}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Code className="h-4 w-4 text-indigo-600" />
                </div>
                Programming Languages
              </h3>
              <div className="space-y-4">
                {skills.programmingLanguages.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${600 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Mobile Skills */}
          <AnimatedCard delay={800}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-4 w-4 text-purple-500" />
                </div>
                Mobile Development
              </h3>
              <div className="space-y-4">
                {skills.mobile.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${600 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Cybersecurity Skills */}
          <AnimatedCard delay={1000}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Settings className="h-4 w-4 text-red-500" />
                </div>
                Cybersecurity
              </h3>
              <div className="space-y-4">
                {skills.cybersecurity.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${1000 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Creative Skills */}
          <AnimatedCard delay={1000}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Settings className="h-4 w-4 text-pink-500" />
                </div>
                Creative Suite
              </h3>
              <div className="space-y-4">
                {skills.creative.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${1000 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Data Science Skills */}
          <AnimatedCard delay={1200}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-teal-100 dark:bg-teal-900/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Database className="h-4 w-4 text-teal-600" />
                </div>
                Data Science
              </h3>
              <div className="space-y-4">
                {skills.dataScience.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${1200 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>

          {/* Systems Skills */}
          <AnimatedCard delay={1400}>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <Settings className="h-4 w-4 text-orange-500" />
                </div>
                Systems & Networking
              </h3>
              <div className="space-y-4">
                {skills.systems.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.percentage}%</span>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: skillsVisible ? `${skill.percentage}%` : '0%',
                            transitionDelay: `${1400 + index * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedCard>
        </div>
      </div>
    </section>
  );
}
