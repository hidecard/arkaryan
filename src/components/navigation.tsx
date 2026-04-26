'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X, Mail, Home as HomeIcon, User, Code, Briefcase, Send } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useTheme } from 'next-themes';

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
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
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
      activeSection !== 'home' 
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
            {['home', 'about', 'skills', 'projects', 'blog', 'services', 'experience', 'education', 'achievements', 'contact'].map((section) => (
              <div
                key={section}
                onClick={() => {
                  if (showScrollNavigation) {
                    scrollToSection(section);
                  } else {
                    if (section === 'blog') {
                      router.push('/#blog');
                    } else {
                      router.push(section === 'home' ? '/' : `/#${section}`);
                    }
                  }
                }}
                className={`group relative px-4 py-2 rounded-lg transition-all duration-200 cursor-pointer select-none ${
                  activeSection === section
                    ? 'font-semibold'
                    : 'text-gray-600 dark:text-gray-400'
                } hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-md hover:scale-105`}
              >
                <span className="text-sm font-medium capitalize">{section}</span>
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
                { name: 'projects', icon: Briefcase },
                { name: 'blog', icon: Mail },
                { name: 'contact', icon: Send }
              ].map((item) => (
                <div
                  key={item.name}
                  onClick={() => {
                    if (showScrollNavigation) {
                      scrollToSection(item.name);
                    } else {
                      if (item.name === 'blog') {
                        router.push('/#blog');
                      } else {
                        router.push(item.name === 'home' ? '/' : `/#${item.name}`);
                      }
                    }
                  }}
                  className={`p-2 rounded-lg transition-all duration-200 cursor-pointer select-none ${
                    activeSection === item.name
                      ? ' dark:bg-blue-900/50 text-blue-700 dark:text-blue-300'
                      : 'text-gray-600 dark:text-gray-400'
                  } hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-md hover:scale-105`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3">
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
              {['home', 'about', 'skills', 'projects', 'blog', 'services', 'experience', 'education', 'achievements', 'contact'].map((section) => (
                <div
                  key={section}
                  onClick={() => {
                    if (showScrollNavigation) {
                      scrollToSection(section);
                      setIsMenuOpen(false);
                    } else {
                      if (section === 'blog') {
                        router.push('/#blog');
                      } else {
                        router.push(section === 'home' ? '/' : `/#${section}`);
                      }
                      setIsMenuOpen(false);
                    }
                  }}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 block cursor-pointer select-none ${
                    activeSection === section
                      ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 font-semibold'
                      : 'text-gray-600 dark:text-gray-400'
                  } hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white hover:shadow-md hover:scale-[1.02] hover:translate-x-1`}
                >
                  <span className="text-sm font-medium capitalize">{section}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
