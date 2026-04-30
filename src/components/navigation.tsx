'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Mail, Home as HomeIcon, User, Code, Briefcase, Send, Settings, Award, GraduationCap, Trophy } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';
import VisitorCounter from '@/components/visitor-counter';

interface NavigationProps {
  activeSection?: string;
  onSectionClick?: (section: string) => void;
  showScrollNavigation?: boolean;
}

export default function Navigation({ 
  activeSection = 'home', 
  onSectionClick,
  showScrollNavigation = false 
}: NavigationProps) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentActiveSection, setCurrentActiveSection] = useState('home');
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    
    // Handle scroll detection for active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'blog', 'services', 'experience', 'education', 'achievements', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setCurrentActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (onSectionClick) {
      onSectionClick(sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavigationClick = (section: string) => {
    if (showScrollNavigation) {
      scrollToSection(section);
    } else {
      // For non-scroll navigation, navigate to home page with hash
      const href = section === 'home' ? '/' : `/#${section}`;
      window.location.href = href;
    }
  };

  if (!mounted) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 pointer-events-auto ${
      currentActiveSection !== 'home' 
        ? 'bg-white/95 dark:bg-gray-900/95 border-b border-gray-200/30 dark:border-gray-700/30 shadow-sm' 
        : 'bg-white/90 dark:bg-gray-900/90'
    }`}>
      <div className="max-w-8xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-18 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <span className="text-white font-bold text-xs sm:text-sm">AY</span>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="text-sm sm:text-base font-bold text-gray-900 dark:text-white">Arkar Yan</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 hidden lg:block">Software Engineer</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-1">
            {['home', 'about', 'skills'].map((section) => (
              <div
                key={section}
                onClick={() => {
                  if (showScrollNavigation) {
                    scrollToSection(section);
                  } else {
                    router.push(section === 'home' ? '/' : `/#${section}`);
                  }
                }}
                className={`group relative px-4 py-2 rounded-lg cursor-pointer select-none overflow-hidden transition-all duration-300 ease-out ${
                  currentActiveSection === section
                    ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 scale-105 shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 scale-100'
                } hover:scale-110 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 hover:text-gray-900 dark:hover:text-white`}
              >
                <span className="text-sm font-medium capitalize relative z-10">{section}</span>
                {/* Animated underline effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 origin-left ${
                  currentActiveSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                {/* Special glow effect for regular items */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-md transition-opacity duration-300 ${
                  currentActiveSection === section ? 'opacity-20' : 'group-hover:opacity-10'
                }`} />
              </div>
            ))}
            
            {/* Special Projects Navigation Item */}
            <div
              onClick={() => {
                scrollToSection('projects');
              }}
              className={`group relative px-4 py-2 rounded-lg cursor-pointer select-none overflow-hidden transition-all duration-300 ease-out ${
                currentActiveSection === 'projects'
                  ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 scale-105 shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 scale-100'
              } hover:scale-110 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 hover:text-gray-900 dark:hover:text-white`}
            >
              <span className="text-sm font-medium capitalize relative z-10">projects</span>
              {/* Animated underline effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 origin-left ${
                currentActiveSection === 'projects' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
              {/* Special glow effect for regular items */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-md transition-opacity duration-300 ${
                currentActiveSection === 'projects' ? 'opacity-20' : 'group-hover:opacity-10'
              }`} />
            </div>
            
            {/* Special Blog Navigation Item */}
            <div
              onClick={() => {
                scrollToSection('blog');
              }}
              className={`group relative px-4 py-2 rounded-lg cursor-pointer select-none overflow-hidden transition-all duration-300 ease-out ${
                currentActiveSection === 'blog'
                  ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 scale-105 shadow-lg'
                  : 'text-gray-600 dark:text-gray-400 scale-100'
              } hover:scale-110 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 hover:text-gray-900 dark:hover:text-white`}
            >
              <span className="text-sm font-medium capitalize relative z-10">blog</span>
              {/* Animated underline effect */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 origin-left ${
                currentActiveSection === 'blog' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
              }`} />
              {/* Special glow effect for regular items */}
              <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-md transition-opacity duration-300 ${
                currentActiveSection === 'blog' ? 'opacity-20' : 'group-hover:opacity-10'
              }`} />
            </div>
            
            {['services', 'experience', 'education', 'achievements', 'contact'].map((section) => (
              <div
                key={section}
                onClick={() => {
                  if (showScrollNavigation) {
                    scrollToSection(section);
                  } else {
                    router.push(section === 'home' ? '/' : `/#${section}`);
                  }
                }}
                className={`group relative px-4 py-2 rounded-lg cursor-pointer select-none overflow-hidden transition-all duration-300 ease-out ${
                  currentActiveSection === section
                    ? 'font-semibold text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 scale-105 shadow-lg'
                    : 'text-gray-600 dark:text-gray-400 scale-100'
                } hover:scale-110 hover:shadow-xl hover:-translate-y-1 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 hover:text-gray-900 dark:hover:text-white`}
              >
                <span className="text-sm font-medium capitalize relative z-10">{section}</span>
                {/* Animated underline effect */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-all duration-300 origin-left ${
                  currentActiveSection === section ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
                {/* Special glow effect for regular items */}
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-md transition-opacity duration-300 ${
                  currentActiveSection === section ? 'opacity-20' : 'group-hover:opacity-10'
                }`} />
              </div>
            ))}
          </div>

          {/* Tablet Navigation */}
          <div className="hidden lg:block xl:hidden">
            <div className="flex items-center space-x-2">
              {[
                { name: 'home', icon: HomeIcon },
                { name: 'about', icon: User },
                { name: 'skills', icon: Code },
                { name: 'projects', icon: Briefcase, special: true, color: 'green' },
                { name: 'blog', icon: Mail, special: true },
                { name: 'services', icon: Settings },
                { name: 'experience', icon: Award },
                { name: 'education', icon: GraduationCap },
                { name: 'achievements', icon: Trophy },
                { name: 'contact', icon: Send }
              ].map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    scrollToSection(item.name);
                  }}
                  className={`p-2 rounded-lg transition-all duration-300 cursor-pointer select-none overflow-hidden relative ${
                    currentActiveSection === item.name
                      ? item.special 
                        ? item.color === 'green'
                          ? 'bg-gradient-to-r from-green-100/50 to-emerald-100/50 dark:from-green-900/50 dark:to-emerald-900/50 text-green-600 dark:text-green-400'
                          : 'bg-gradient-to-r from-purple-100/50 to-pink-100/50 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-600 dark:text-purple-400'
                        : 'bg-blue-100/50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400'
                      : 'text-gray-600 dark:text-gray-400'
                  } ${item.special 
                    ? item.color === 'green'
                      ? 'hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-800/50 dark:hover:to-emerald-800/50 hover:text-green-700 dark:hover:text-green-300 hover:shadow-xl hover:scale-110 hover:-translate-y-0.5'
                      : 'hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/50 dark:hover:to-pink-800/50 hover:text-purple-700 dark:hover:text-purple-300 hover:shadow-xl hover:scale-110 hover:-translate-y-0.5'
                    : 'hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 hover:shadow-lg hover:scale-110 hover:-translate-y-0.5'
                  }`}
                >
                  <item.icon className="w-5 h-5 relative z-10" />
                  {/* Animated background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 transition-opacity duration-300 ${
                    currentActiveSection === item.name ? 'opacity-10' : 'group-hover:opacity-10'
                  }`} />
                </div>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Visitor Counter - Hidden on mobile, visible on sm+ */}
            <div className="hidden sm:flex">
              <VisitorCounter variant="compact" />
            </div>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-all duration-200 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800/50"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200/30 dark:border-gray-700/30 bg-white/95 dark:bg-gray-900/95">
            <div className="py-4 space-y-2">
              {['home', 'about', 'skills'].map((section) => (
                <div
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer select-none overflow-hidden relative ${
                    currentActiveSection === section
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 font-semibold border-l-4 border-blue-600 dark:border-blue-400'
                      : 'text-gray-600 dark:text-gray-400'
                  } hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 hover:text-gray-900 dark:hover:text-white hover:shadow-xl hover:scale-[1.03] hover:translate-x-3 hover:backdrop-blur-sm`}
                >
                  <span className="text-sm font-medium capitalize relative z-10">{section}</span>
                  {/* Animated slide indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 transform transition-all duration-300 origin-top ${
                    currentActiveSection === section ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                  }`} />
                  {/* Special glow effect for mobile items */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-md transition-opacity duration-300 ${
                    currentActiveSection === section ? 'opacity-15' : 'group-hover:opacity-8'
                  }`} />
                </div>
              ))}
              
              {/* Special Projects Mobile Navigation Item */}
              <div
                onClick={() => {
                  scrollToSection('projects');
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer select-none overflow-hidden relative ${
                  currentActiveSection === 'projects'
                    ? 'bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 text-green-700 dark:text-green-300 font-semibold border-l-4 border-green-600 dark:border-green-400'
                    : 'text-gray-600 dark:text-gray-400'
                } hover:bg-gradient-to-r hover:from-green-100 hover:to-emerald-100 dark:hover:from-green-800/30 dark:hover:to-emerald-800/30 hover:text-green-700 dark:hover:text-green-300 hover:shadow-xl hover:scale-[1.03] hover:translate-x-3`}
              >
                <span className="text-sm font-medium capitalize relative z-10">projects</span>
                {/* Enhanced slide indicator for projects */}
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-green-600 to-emerald-600 transform transition-all duration-300 origin-top ${
                  currentActiveSection === 'projects' ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                }`} />
                {/* Special glow effect for projects mobile */}
                <div className={`absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-400 opacity-0 blur-md transition-opacity duration-300 ${
                  currentActiveSection === 'projects' ? 'opacity-15' : 'group-hover:opacity-8'
                }`} />
              </div>
              
              {/* Special Blog Mobile Navigation Item */}
              <div
                onClick={() => {
                  scrollToSection('blog');
                  setIsMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer select-none overflow-hidden relative ${
                  currentActiveSection === 'blog'
                    ? 'bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 font-semibold border-l-4 border-purple-600 dark:border-purple-400'
                    : 'text-gray-600 dark:text-gray-400'
                } hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 dark:hover:from-purple-800/30 dark:hover:to-pink-800/30 hover:text-purple-700 dark:hover:text-purple-300 hover:shadow-xl hover:scale-[1.03] hover:translate-x-3`}
              >
                <span className="text-sm font-medium capitalize relative z-10">blog</span>
                {/* Enhanced slide indicator for blog */}
                <div className={`absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-purple-600 to-pink-600 transform transition-all duration-300 origin-top ${
                  currentActiveSection === 'blog' ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                }`} />
                {/* Special glow effect for blog mobile */}
                <div className={`absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 blur-md transition-opacity duration-300 ${
                  currentActiveSection === 'blog' ? 'opacity-15' : 'group-hover:opacity-8'
                }`} />
              </div>
              
              {['services', 'experience', 'education', 'achievements', 'contact'].map((section) => (
                <div
                  key={section}
                  onClick={() => {
                    scrollToSection(section);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer select-none overflow-hidden relative ${
                    currentActiveSection === section
                      ? 'bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 font-semibold border-l-4 border-blue-600 dark:border-blue-400'
                      : 'text-gray-600 dark:text-gray-400'
                  } hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 dark:hover:from-gray-800/50 dark:hover:to-gray-700/50 hover:text-gray-900 dark:hover:text-white hover:shadow-xl hover:scale-[1.03] hover:translate-x-3 hover:backdrop-blur-sm`}
                >
                  <span className="text-sm font-medium capitalize relative z-10">{section}</span>
                  {/* Animated slide indicator */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 transform transition-all duration-300 origin-top ${
                    currentActiveSection === section ? 'scale-y-100' : 'scale-y-0 group-hover:scale-y-100'
                  }`} />
                  {/* Special glow effect for mobile items */}
                  <div className={`absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 blur-md transition-opacity duration-300 ${
                    currentActiveSection === section ? 'opacity-15' : 'group-hover:opacity-8'
                  }`} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
