'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Moon, Sun, Menu, X, Mail, Phone, MapPin, ExternalLink, Github, Linkedin, Twitter, ArrowRight, Calendar, MapPin as LocationIcon, Briefcase, Award, CheckCircle, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Send, Facebook, ChevronRight, User, Home as HomeIcon } from 'lucide-react';
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

      {/* Modern Responsive Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        activeSection !== 'home' 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm' 
          : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm'
      }`}>
        <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="text-white font-bold text-xs sm:text-sm">AY</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Arkar Yan</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 hidden lg:block">Software Engineer</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center space-x-1">
              {['home', 'about', 'skills', 'projects', 'services', 'experience', 'education', 'achievements', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`group relative px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === section
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <span className="text-sm font-medium capitalize">{section}</span>
                  {activeSection === section && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tablet Navigation */}
            <div className="hidden lg:block xl:hidden">
              <div className="flex items-center space-x-2">
                {[
                  { name: 'home', icon: HomeIcon },
                  { name: 'about', icon: User },
                  { name: 'skills', icon: Code },
                  { name: 'projects', icon: Briefcase },
                  { name: 'contact', icon: Mail }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.name)}
                    className={`p-2 rounded-lg transition-all duration-200 ${
                      activeSection === item.name
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4 sm:w-5 sm:h-5" /> : <Moon className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>

              {/* More Menu for Tablet */}
              <div className="hidden lg:block xl:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105"
                >
                  <Menu className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-md"
              >
                <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Tablet Dropdown Menu */}
        {isMenuOpen && (
          <div className="hidden lg:block xl:hidden absolute top-full right-4 mt-2 w-64 bg-white dark:bg-gray-900 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
            <div className="p-2">
              {[
                { name: 'services', icon: Settings },
                { name: 'experience', icon: Award },
                { name: 'education', icon: GraduationCap },
                { name: 'achievements', icon: Trophy }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.name);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.name
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium capitalize">{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Simple Mobile Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-lg z-[9999]">
            <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
              <div className="py-2 space-y-1">
                {[
                  { name: 'home', icon: HomeIcon },
                  { name: 'about', icon: User },
                  { name: 'skills', icon: Code },
                  { name: 'projects', icon: Briefcase },
                  { name: 'services', icon: Settings },
                  { name: 'experience', icon: Award },
                  { name: 'education', icon: GraduationCap },
                  { name: 'achievements', icon: Trophy },
                  { name: 'contact', icon: Mail }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      scrollToSection(item.name);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeSection === item.name
                        ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800'
                    }`}
                  >
                    <item.icon className="w-4 h-4 flex-shrink-0" />
                    <span className="text-sm font-medium capitalize">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      <HomeSection scrollToSection={scrollToSection} />

      <AboutSection />

      <SkillsSection />

      <ProjectsSection />

      <ServicesSection />

      <ExperienceSection />

      <EducationSection />

      <AchievementsSection />

      <ContactSection />

      {/* Enhanced Footer with Contact Info */}
      <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center sm:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-x-0 sm:space-x-3 hover:scale-105 transition-transform duration-300 mb-4">
                <div className="w-10 h-10 bg-gray-900 dark:bg-white rounded-xl flex items-center justify-center shadow-lg mb-3 sm:mb-0">
                  <span className="text-white dark:text-gray-900 font-bold text-sm">AY</span>
                </div>
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Arkar Yan</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer & Architect</p>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
              <div className="space-y-2">
                <a href="#home" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Home</a>
                <a href="#about" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">About</a>
                <a href="#projects" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Projects</a>
                <a href="#contact" className="block text-sm text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">Contact</a>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-center sm:text-right">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Get in Touch</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-center sm:justify-end space-x-2">
                  <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <a href="mailto:arkaryan.info@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors break-all">arkaryan.info@gmail.com</a>
                </div>
                <div className="flex items-center justify-center sm:justify-end space-x-2">
                  <Phone className="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">09758430371</span>
                </div>
                <div className="flex items-center justify-center sm:justify-end space-x-2">
                  <MapPin className="h-4 w-4 text-gray-600 dark:text-gray-400 flex-shrink-0" />
                  <span className="text-gray-600 dark:text-gray-400">Yangon, Myanmar</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <span className="text-sm text-gray-600 dark:text-gray-400 text-center sm:text-left">Connect with me:</span>
                <div className="flex items-center space-x-4 sm:space-x-6">
                  {[
                    { icon: Github, href: 'https://github.com/hidecard' },
                    { icon: Linkedin, href: 'https://linkedin.com/arkaryan' },
                    { icon: Twitter, href: 'https://twitter.com/arkaryan' },
                    { icon: Mail, href: 'mailto:arkaryan.info@gmail.com' },
                    { icon: Send, href: 'https://t.me/hidecard1' },
                    { icon: Facebook, href: 'https://facebook.com/arkaryan11' }
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
              </div>
              
              <div className="text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  © 2024 Arkar Yan. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}