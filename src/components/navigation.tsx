'use client';

import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import VisitorCounter from '@/components/visitor-counter';

interface NavigationProps {
  activeSection?: string;
  onSectionClick?: (section: string) => void;
  showScrollNavigation?: boolean;
}

const navItems = [
  { name: 'home', label: 'Home' },
  { name: 'about', label: 'About' },
  { name: 'skills', label: 'Skills' },
  { name: 'projects', label: 'Projects' },
  { name: 'blog', label: 'Blog' },
  { name: 'services', label: 'Services' },
  { name: 'experience', label: 'Experience' },
  { name: 'contact', label: 'Contact' },
];

export default function Navigation({ 
  activeSection = 'home', 
  onSectionClick,
}: NavigationProps) {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentActiveSection, setCurrentActiveSection] = useState(activeSection);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    
    // Handle scroll detection for active section
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'blog', 'contact', 'learning-paths', 'services', 'experience', 'education', 'achievements'];
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
      } else {
        window.location.href = sectionId === 'home' ? '/' : `/#${sectionId}`;
      }
    }
    setIsMenuOpen(false);
  };

  if (!mounted) return null;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      currentActiveSection !== 'home'
        ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/70 dark:border-gray-800 shadow-sm'
        : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/70'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
              <span className="text-white font-bold text-sm">AY</span>
            </div>
            <span className="hidden sm:block font-semibold text-gray-900 dark:text-white">Arkar Yan</span>
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="flex items-center gap-1 rounded-full border border-gray-200/70 bg-gray-50/80 px-3 py-1 dark:border-gray-800 dark:bg-gray-800/60">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.name)}
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200 ${
                  currentActiveSection === item.name
                    ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                    : 'text-gray-600 hover:bg-white hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          {/* Visitor Counter */}
          <div className="hidden sm:block">
            <VisitorCounter variant="compact" showLabel={false} />
          </div>

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className={`relative p-2.5 rounded-lg transition-all duration-200 ${
              theme === 'dark' ? 'text-amber-500' : 'text-gray-500 dark:text-gray-400'
            } hover:bg-gray-100 dark:hover:bg-gray-800/50`}
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2.5 rounded-lg transition-all duration-200 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Menu - Full Width Below Nav */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-gray-200/50 dark:border-gray-700/50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.name)}
                  className={`text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${
                    currentActiveSection === item.name
                      ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
