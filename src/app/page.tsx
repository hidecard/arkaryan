'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Moon, Sun, Menu, X, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, ArrowRight, Calendar, MapPin as LocationIcon, Briefcase, Award, CheckCircle, Code, Database, Smartphone, Settings } from 'lucide-react';
import { useTheme } from 'next-themes';

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

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [skillsVisible, setSkillsVisible] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }

      // Check if skills section is visible
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

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const skills = {
    frontend: [
      { name: 'Next.js', percentage: 95, color: 'bg-gray-900 dark:bg-white' },
      { name: 'React.js', percentage: 90, color: 'bg-blue-500' },
      { name: 'JavaScript', percentage: 95, color: 'bg-yellow-500' },
      { name: 'TypeScript', percentage: 85, color: 'bg-blue-600' },
      { name: 'Tailwind CSS', percentage: 90, color: 'bg-cyan-500' },
      { name: 'HTML/CSS', percentage: 95, color: 'bg-orange-500' },
    ],
    backend: [
      { name: 'Express.js', percentage: 90, color: 'bg-green-600' },
      { name: 'Node.js', percentage: 85, color: 'bg-green-500' },
      { name: 'PHP', percentage: 80, color: 'bg-purple-500' },
      { name: 'Laravel', percentage: 75, color: 'bg-red-500' },
      { name: 'MongoDB', percentage: 85, color: 'bg-green-400' },
      { name: 'MySQL', percentage: 80, color: 'bg-blue-400' },
    ],
    mobile: [
      { name: 'Flutter', percentage: 75, color: 'bg-blue-400' },
      { name: 'React Native', percentage: 70, color: 'bg-cyan-400' },
    ],
    tools: [
      { name: 'Git & GitHub', percentage: 90, color: 'bg-gray-700' },
      { name: 'Docker', percentage: 75, color: 'bg-blue-500' },
      { name: 'Linux', percentage: 80, color: 'bg-orange-600' },
      { name: 'Figma', percentage: 85, color: 'bg-purple-400' },
    ],
  };

  const experiences = [
    {
      title: 'Programming Teacher & Senior Developer',
      company: 'YHA Computer',
      period: '2024 - Now',
      type: 'Full-time',
      description: 'Teaching programming and leading development projects',
      technologies: ['Next.js', 'Express.js', 'React.js', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Founder & Graphic Designer',
      company: 'Power Agri',
      period: '2022 - 2024',
      type: 'Founder',
      description: 'Founded agricultural tech company with graphic design services',
      technologies: ['Figma', 'Adobe Creative Suite', 'Web Design', 'Branding'],
    },
    {
      title: 'Graphic Designer',
      company: 'Taung Thu Gyi',
      period: '2022 - 2024',
      type: 'Part-time',
      description: 'Created visual designs and marketing materials',
      technologies: ['Adobe Photoshop', 'Illustrator', 'Figma', 'Canva'],
    },
    {
      title: 'Cyber Security Specialist',
      company: 'MCG & MART',
      period: '2020 - 2023',
      type: 'Full-time',
      description: 'Implemented security measures and protected digital assets',
      technologies: ['Network Security', 'Firewall Configuration', 'SIEM Tools', 'Penetration Testing'],
    },
    {
      title: 'Software Developer | Founder CEO',
      company: 'k Square',
      period: '2022 - 2024',
      type: 'Founder',
      description: 'Founded tech startup and led software development',
      technologies: ['Full-Stack Development', 'Project Management', 'Business Strategy', 'Team Leadership'],
    },
    {
      title: 'Software Developer',
      company: 'Nwe Moe Saung',
      period: '2021 - 2022',
      type: 'Full-time',
      description: 'Developed software solutions and maintained applications',
      technologies: ['JavaScript', 'React.js', 'Node.js', 'Database Design'],
    },
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Animated Background Pattern */}
      <div className="fixed inset-0 opacity-5 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 dark:from-blue-900 dark:to-purple-900"></div>
      </div>

      {/* Modern Navigation with Animations */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        activeSection !== 'home' 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 shadow-sm' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className={`flex items-center space-x-2 transition-all duration-300 ${
              activeSection !== 'home' ? 'opacity-100' : 'opacity-90'
            }`}>
              <div className="w-8 h-8 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center transform hover:rotate-12 transition-transform duration-300">
                <span className="text-white dark:text-gray-900 font-bold text-sm">AY</span>
              </div>
              <span className="font-semibold text-lg">Arkar Yan</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'skills', 'services', 'experience', 'contact'].map((section, index) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-all duration-300 hover:text-gray-600 dark:hover:text-gray-400 relative group ${
                    activeSection === section ? 'text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {section}
                  <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gray-900 dark:bg-white transition-all duration-300 ${
                    activeSection === section ? 'opacity-100 w-full' : 'opacity-0 w-0 group-hover:opacity-100 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="h-8 w-8 hover:rotate-180 transition-transform duration-500"
              >
                {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden h-8 w-8"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <div className={`relative w-5 h-5 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}>
                  <span className={`absolute top-0 left-0 w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 rotate-45' : ''}`}></span>
                  <span className={`absolute top-2 left-0 w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`absolute top-4 left-0 w-5 h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'top-2 -rotate-45' : ''}`}></span>
                </div>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation with Slide Animation */}
          <div className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-2 border-t border-gray-200 dark:border-gray-800">
              {['home', 'about', 'skills', 'services', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 px-4 capitalize text-sm font-medium transition-all duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md hover:translate-x-2 ${
                    activeSection === section ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 translate-x-2' : 'text-gray-600 dark:text-gray-400'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

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
                Full-Stack Developer
              </p>
            </AnimatedSection>
            
            {/* Description */}
            <AnimatedSection delay={600}>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                I build modern, scalable web applications with clean code and exceptional user experiences. 
                Passionate about creating digital solutions that make a difference.
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

      {/* About Section with Fade-in Animation */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">About me</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Learn more about my background and expertise
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedCard delay={200}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Arkar Yan</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    I'm a passionate full-stack developer with extensive experience in building modern web and mobile applications. 
                    My expertise spans across frontend technologies like React.js and Next.js, backend systems with Node.js and PHP, 
                    and mobile development using Flutter.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    I have a strong foundation in system administration, version control, and modern development practices. 
                    I enjoy creating efficient, scalable solutions and staying up-to-date with the latest technology trends.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">5+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-105">
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Projects Completed</div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
            
            <div className="space-y-6">
              <AnimatedCard delay={400}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                      <Mail className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">arkaryan2022@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                      <Phone className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">09 963 962 789</span>
                    </div>
                    <div className="flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 p-2 rounded transition-colors">
                      <LocationIcon className="h-4 w-4 text-gray-500" />
                      <span className="text-sm">Kamaryut Township, Yangon</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
              
              <AnimatedCard delay={600}>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-lg font-semibold mb-4">Core Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Frontend', 'Backend', 'Mobile', 'DevOps', 'Database', 'API Design'].map((skill, index) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Animated Progress Bars */}
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
          
          <div className="grid md:grid-cols-2 gap-8">
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

            {/* Mobile Skills */}
            <AnimatedCard delay={600}>
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

            {/* Tools Skills */}
            <AnimatedCard delay={800}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center hover:scale-110 transition-transform duration-300">
                    <Settings className="h-4 w-4 text-orange-500" />
                  </div>
                  Tools & Systems
                </h3>
                <div className="space-y-4">
                  {skills.tools.map((skill, index) => (
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
                              transitionDelay: `${800 + index * 100}ms`
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

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                What I can do for your business
              </p>
            </div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <AnimatedCard delay={200}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40">
                  <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Web Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Custom web applications built with modern frameworks and best practices. From simple landing pages to complex enterprise solutions.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Responsive Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Performance Optimization</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">SEO Friendly</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Service 2 */}
            <AnimatedCard delay={400}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-green-200 dark:group-hover:bg-green-800/40">
                  <Database className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Backend Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Robust server-side solutions with scalable architecture, API development, and database management for reliable applications.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">RESTful APIs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Database Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Cloud Deployment</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Service 3 */}
            <AnimatedCard delay={600}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/40">
                  <Smartphone className="h-8 w-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Mobile Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Cross-platform mobile applications for iOS and Android with native performance and seamless user experience.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Flutter Apps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">React Native</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">App Store Deployment</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Service 4 */}
            <AnimatedCard delay={800}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-200 dark:group-hover:bg-orange-800/40">
                  <Settings className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Cyber Security
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Comprehensive security solutions including vulnerability assessments, penetration testing, and security implementation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Security Audits</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Penetration Testing</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Security Training</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Service 5 */}
            <AnimatedCard delay={1000}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-pink-200 dark:group-hover:bg-pink-800/40">
                  <Award className="h-8 w-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                  Graphic Design
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Professional graphic design services including branding, marketing materials, and visual identity development.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Logo Design</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Marketing Materials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Brand Identity</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>

            {/* Service 6 */}
            <AnimatedCard delay={1200}>
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-cyan-100 dark:bg-cyan-900/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 group-hover:bg-cyan-200 dark:group-hover:bg-cyan-800/40">
                  <Code className="h-8 w-8 text-cyan-600 dark:text-cyan-400" />
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  Programming Education
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Comprehensive programming education and mentoring for beginners to advanced developers looking to enhance their skills.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Custom Curriculum</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">One-on-One Mentoring</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm">Project-Based Learning</span>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* Experience Section with Timeline Animation */}
      <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-6">
          <AnimatedSection>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Work Experience</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                My professional journey and achievements
              </p>
            </div>
          </AnimatedSection>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedCard key={index} delay={index * 200}>
                <div className="relative">
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-full bg-gray-300 dark:bg-gray-700"></div>
                  )}
                  
                  <div className="flex gap-8">
                    {/* Timeline Dot with Animation */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-white dark:bg-gray-800 border-4 border-gray-300 dark:border-gray-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 hover:border-blue-500 dark:hover:border-blue-400">
                        {exp.type === 'Founder' ? (
                          <Award className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                        ) : exp.title.includes('Teacher') ? (
                          <Code className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                        ) : exp.title.includes('Security') ? (
                          <Settings className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                        ) : (
                          <Briefcase className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                        )}
                      </div>
                    </div>
                    
                    {/* Content with Hover Effects */}
                    <div className="flex-grow bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <Badge variant="outline" className="text-xs hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                          {exp.type}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <span className="font-medium">{exp.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {exp.description}
                      </p>
                      
                      <div>
                        <h4 className="font-medium mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <Badge 
                              key={tech} 
                              variant="secondary" 
                              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                              style={{ animationDelay: `${techIndex * 50}ms` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Animations */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                I'm always interested in hearing about new opportunities
              </p>
            </div>
          </AnimatedSection>
          
          <AnimatedCard delay={200}>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center group">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                    <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-blue-500" />
                  </div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">arkaryan2022@gmail.com</p>
                  <Button variant="outline" size="sm" className="hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:border-blue-500 transition-colors" asChild>
                    <a href="mailto:arkaryan2022@gmail.com">Send email</a>
                  </Button>
                </div>
                
                <div className="text-center group">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-green-100 dark:group-hover:bg-green-900/30">
                    <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-green-500" />
                  </div>
                  <h3 className="font-medium mb-2">Phone</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">09 963 962 789</p>
                  <Button variant="outline" size="sm" className="hover:bg-green-50 dark:hover:bg-green-900/20 hover:border-green-500 transition-colors" asChild>
                    <a href="tel:+959963962789">Call me</a>
                  </Button>
                </div>
                
                <div className="text-center group">
                  <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30">
                    <LocationIcon className="h-6 w-6 text-gray-600 dark:text-gray-400 group-hover:text-purple-500" />
                  </div>
                  <h3 className="font-medium mb-2">Location</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Kamaryut Township, Yangon</p>
                  <Button variant="outline" size="sm" className="hover:bg-purple-50 dark:hover:bg-purple-900/20 hover:border-purple-500 transition-colors" asChild>
                    <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">View map</a>
                  </Button>
                </div>
              </div>
              
              <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-700">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Available for freelance projects and full-time opportunities
                </p>
                <div className="flex justify-center gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 hover:scale-105 transition-all duration-300 group"
                  >
                    <Mail className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                    Send message
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="hover:scale-105 transition-all duration-300"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Download resume
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedCard>
        </div>
      </section>

      {/* Footer with Hover Effects */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2 hover:scale-105 transition-transform duration-300">
              <div className="w-6 h-6 bg-gray-900 dark:bg-white rounded-lg flex items-center justify-center">
                <span className="text-white dark:text-gray-900 font-bold text-xs">AY</span>
              </div>
              <span className="font-medium">Arkar Yan</span>
            </div>
            
            <div className="flex items-center space-x-6">
              {[
                { icon: Github, href: 'https://github.com' },
                { icon: Linkedin, href: 'https://linkedin.com' },
                { icon: Twitter, href: 'https://twitter.com' }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2024 Arkar Yan. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}