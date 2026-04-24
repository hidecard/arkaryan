'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Moon, Sun, Menu, X, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, ArrowRight, Calendar, MapPin as LocationIcon, Briefcase, Award, CheckCircle, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import HomeSection from '@/components/sections/home';
import AboutSection from '@/components/sections/about';
import SkillsSection from '@/components/sections/skills';
import ServicesSection from '@/components/sections/services';
import ProjectsSection from '@/components/sections/projects';
import ExperienceSection from '@/components/sections/experience';
import EducationSection from '@/components/sections/education';
import AchievementsSection from '@/components/sections/achievements';
import ContactSection from '@/components/sections/contact';

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
      const sections = ['home', 'about', 'skills', 'projects', 'services', 'experience', 'education', 'achievements', 'contact'];
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
      { name: 'Vue.js', percentage: 85, color: 'bg-green-500' },
      { name: 'JavaScript', percentage: 95, color: 'bg-yellow-500' },
      { name: 'TypeScript', percentage: 85, color: 'bg-blue-600' },
      { name: 'Tailwind CSS', percentage: 90, color: 'bg-cyan-500' },
      { name: 'HTML/CSS', percentage: 95, color: 'bg-orange-500' },
    ],
    backend: [
      { name: 'Node.js', percentage: 90, color: 'bg-green-500' },
      { name: 'Express.js', percentage: 90, color: 'bg-green-600' },
      { name: 'PHP', percentage: 85, color: 'bg-purple-500' },
      { name: 'Laravel', percentage: 80, color: 'bg-red-500' },
      { name: 'MongoDB', percentage: 85, color: 'bg-green-400' },
      { name: 'MySQL', percentage: 80, color: 'bg-blue-400' },
    ],
    mobile: [
      { name: 'Flutter & Dart', percentage: 85, color: 'bg-blue-400' },
      { name: 'Native Java (Android)', percentage: 75, color: 'bg-orange-500' },
    ],
    cybersecurity: [
      { name: 'Vulnerability Assessment', percentage: 85, color: 'bg-red-500' },
      { name: 'Network Security', percentage: 80, color: 'bg-yellow-600' },
      { name: 'Incident Response', percentage: 75, color: 'bg-orange-600' },
    ],
    creative: [
      { name: 'Graphic Design', percentage: 85, color: 'bg-pink-500' },
      { name: 'Motion Video Editing', percentage: 80, color: 'bg-purple-500' },
      { name: 'Page Administration', percentage: 90, color: 'bg-blue-500' },
    ],
    systems: [
      { name: 'CCNA Networking', percentage: 85, color: 'bg-blue-600' },
      { name: 'Linux System Administration', percentage: 80, color: 'bg-orange-600' },
      { name: 'Git & GitHub', percentage: 90, color: 'bg-gray-700' },
    ],
  };

  
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

  const achievements = [
    {
      title: '9+ Years of Teaching Excellence',
      description: 'Empowering the next generation of Myanmar developers since 2017',
      icon: GraduationCap,
    },
    {
      title: 'Technological Evolution',
      description: 'Transitioned from Native Java development to modern Cross-platform (Flutter) and Full-stack cloud architectures',
      icon: Rocket,
    },
    {
      title: 'Cybersecurity Impact',
      description: 'Successfully resolved complex cybercrime cases and provided public education via Myanmar Cyber Ghost',
      icon: Shield,
    },
    {
      title: 'Entrepreneurial Success',
      description: 'Founded three distinct ventures in Tech, Cybersecurity, and Agriculture',
      icon: Trophy,
    },
  ];

  const experiences = [
    {
      title: 'Programming Instructor & Project Manager',
      company: 'YHA Computer',
      period: '2024 – Present',
      type: 'Full-time',
      description: 'Leading high-impact development projects and supervising student-led initiatives. Instructing advanced courses in Full-stack Web Development and Mobile App Frameworks.',
      technologies: ['Next.js', 'Express.js', 'React.js', 'Node.js', 'MongoDB', 'Web Design', 'Flutter & Dart', 'Python', 'C# Programming', 'Laravel & Vue'],
    },
    {
      title: 'Cybersecurity Consultant & Digital Literacy Advocate',
      company: 'Myanmar Cyber Ghost',
      period: '2024 – Present',
      type: 'Founder',
      description: 'Founded platform to share knowledge on Cybercrime and technical security trends. Specialized in Vulnerability Assessment and providing protection strategies.',
      technologies: ['Vulnerability Assessment', 'Network Security', 'Incident Response', 'Digital Literacy Advocacy'],
    },
    {
      title: 'Founder & CEO',
      company: 'k Square',
      period: '2022 – Present',
      type: 'Founder',
      description: 'Directing software firm specializing in custom enterprise solutions and modern SaaS architecture. Spearheading technical strategy and client relations.',
      technologies: ['SaaS Architecture', 'Project Management', 'Business Strategy', 'Team Leadership', 'Full-Stack Development'],
    },
    {
      title: 'Independent Software Developer & Media Consultant',
      company: 'Freelance',
      period: '2017 – 2024',
      type: 'Freelance',
      description: 'Delivered high-quality freelance software solutions for local and international clients. Mentored hundreds of students through online batches.',
      technologies: ['Full-Stack Development', 'Mobile Development', 'Graphic Design', 'Motion Video Editing', 'Page Administration'],
    },
    {
      title: 'Founder',
      company: 'Power Agriculture Myanmar',
      period: '2023 – Present',
      type: 'Founder',
      description: 'Established proprietary brand for agricultural products, managing end-to-end supply chain and branding.',
      technologies: ['Brand Management', 'Supply Chain', 'Agricultural Technology', 'Business Development'],
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
              {['home', 'about', 'skills', 'projects', 'services', 'experience', 'education', 'achievements', 'contact'].map((section, index) => (
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
              {['home', 'about', 'skills', 'projects', 'services', 'experience', 'education', 'achievements', 'contact'].map((section) => (
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

      <HomeSection scrollToSection={scrollToSection} />

      <AboutSection />

      <SkillsSection />

      <ServicesSection />

      <ProjectsSection />

      <ExperienceSection />

      <EducationSection />

      <AchievementsSection />

      <ContactSection />

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
                { icon: Github, href: 'https://github.com/hidecard' },
                { icon: Linkedin, href: 'https://linkedin.com/arkaryan' },
                { icon: Twitter, href: 'https://twitter.com/arkaryan' }
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