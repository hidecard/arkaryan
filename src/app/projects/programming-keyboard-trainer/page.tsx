'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Package, Layers, Cpu, MousePointer, Palette, Eye, Focus, Database as DatabaseIcon, Globe2, FileCode, Terminal, Braces, Hash, ChevronRight, Sparkles, Wand2, Lock, Bug, QrCode, Map, ShieldCheck, Sword, Crosshair, Key, Fingerprint, AlertTriangle, Cpu as CpuIcon, Network, School, Medal, Crown, Layout, Grid3x3, Settings2, Copy, Download as DownloadIcon, Undo, Redo, Monitor, Smartphone as SmartphoneIcon, Tablet, Monitor as MonitorIcon, Code2, FileArchive, Save, Upload, RotateCcw, RotateCw, Palette as PaletteIcon, Eye as EyeIcon, Layers as LayersIcon, Lightbulb, Keyboard, Monitor as MonitorIcon2, Moon, Sun, RefreshCw, Timer, Target as TargetIcon, Zap as ZapIcon, Wind, Mail } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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

const features = [
  {
    icon: Keyboard,
    title: 'HomePage Interface',
    description: 'Beautiful landing page with language selection and modern UI design',
    details: [
      'Language Selection: Choose between HTML, CSS, and JavaScript',
      'Dark Mode Toggle: Switch between light and dark themes',
      'Modern UI: Clean, responsive design with Material Design',
      'Start Practice Button: Navigate to the practice session',
      'Gradient Background: Beautiful visual appeal',
      'Material Design 3: Modern UI components',
      'Responsive Design: Works on different screen sizes',
      'Language Icons: Visual representation for each language'
    ]
  },
  {
    icon: Code2,
    title: 'PracticePage Features',
    description: 'Comprehensive typing practice with syntax highlighting and real-time metrics',
    details: [
      'Syntax Highlighting: Code snippets with proper syntax highlighting',
      'Real-time Metrics: Typing speed (WPM) and accuracy percentage',
      'Progress Tracking: Characters typed vs total progress',
      'Timer: Practice session timing',
      'Split View: Target code on left, typing area on right',
      'Virtual Keyboard: Visual keyboard representation',
      'Reset Functionality: Restart practice sessions',
      'Monospace Font: Enhanced code readability'
    ]
  },
  {
    icon: TargetIcon,
    title: 'Real-time Performance Tracking',
    description: 'Advanced metrics system for monitoring typing performance and progress',
    details: [
      'WPM Calculation: Words Per Minute measurement',
      'Accuracy Tracking: Precision percentage monitoring',
      'Progress Visualization: Visual progress indicators',
      'Time Management: Session timing controls',
      'Performance Analytics: Detailed performance insights',
      'Error Tracking: Mistake identification and counting',
      'Speed Graphs: Visual representation of typing speed',
      'Accuracy Trends: Progress over time visualization'
    ]
  },
  {
    icon: Monitor,
    title: 'Multi-Platform Support',
    description: 'Cross-platform compatibility with Flutter for Windows Desktop, Web, and Android',
    details: [
      'Windows Desktop: Native Windows application',
      'Web Support: Chrome and Edge browser compatibility',
      'Android App: Mobile application for practice on the go',
      'Responsive Design: Adaptive UI for all platforms',
      'Cross-Platform Sync: Consistent experience across devices',
      'Platform-Specific Optimizations: Native performance',
      'Touch Support: Mobile-friendly interactions',
      'Desktop Shortcuts: Keyboard shortcuts for efficiency'
    ]
  },
  {
    icon: Moon,
    title: 'Theme System',
    description: 'Complete dark/light theme support with smooth transitions',
    details: [
      'Dark Mode Toggle: Easy theme switching',
      'Light Mode: Bright theme for daytime use',
      'Smooth Transitions: Animated theme changes',
      'Persistent Settings: Theme preference saved',
      'System Integration: Follows system theme preferences',
      'Accessibility: High contrast options',
      'Eye Comfort: Reduced eye strain options',
      'Custom Themes: Potential for user customization'
    ]
  },
  {
    icon: Code,
    title: 'Code Snippets Library',
    description: 'Comprehensive collection of HTML, CSS, and JavaScript code examples',
    details: [
      'HTML Snippets: Complete HTML5 document structures',
      'CSS Examples: Styling with gradients and responsive layouts',
      'JavaScript Functions: Utility functions and DOM manipulation',
      'Progressive Difficulty: From basic to advanced examples',
      'Real-world Code: Practical, industry-relevant examples',
      'Syntax Validation: Proper code formatting and structure',
      'Educational Content: Learning-focused code selection',
      'Regular Updates: New snippets added regularly'
    ]
  }
];

const codeSnippets = [
  {
    language: 'HTML',
    icon: Code,
    description: 'Complete HTML5 document structure with semantic elements',
    examples: [
      'Document structure with DOCTYPE',
      'Header with navigation elements',
      'Main content sections and articles',
      'Footer with copyright information',
      'Semantic HTML5 elements',
      'Meta tags and SEO optimization',
      'Responsive viewport settings',
      'Accessibility attributes'
    ]
  },
  {
    language: 'CSS',
    icon: Palette,
    description: 'Modern CSS styling with gradients, flexbox, and responsive design',
    examples: [
      'Reset and base styles',
      'Header styling with gradients',
      'Navigation menu styling',
      'Responsive layout with flexbox',
      'Footer styling and positioning',
      'Media queries for responsiveness',
      'CSS animations and transitions',
      'Custom properties and variables'
    ]
  },
  {
    language: 'JavaScript',
    icon: ZapIcon,
    description: 'Essential JavaScript functions for DOM manipulation and utilities',
    examples: [
      'Utility functions (debounce, throttle)',
      'DOM manipulation and event handling',
      'Form validation and error handling',
      'Email validation functions',
      'Notification system implementation',
      'Local storage management',
      'API integration patterns',
      'Error handling and logging'
    ]
  }
];

const techStack = [
  { category: 'Framework', technology: 'Flutter SDK (3.8.1+)' },
  { category: 'Language', technology: 'Dart SDK' },
  { category: 'Desktop', technology: 'Visual Studio with C++ workload' },
  { category: 'Web', technology: 'Chrome/Edge browsers' },
  { category: 'Mobile', technology: 'Android Studio & SDK' },
  { category: 'Syntax Highlighting', technology: 'flutter_highlight ^0.7.0' },
  { category: 'Typing Analysis', technology: 'flutter_typeahead ^5.2.0' },
  { category: 'State Management', technology: 'provider ^6.1.1' }
];

const installationSteps = [
  {
    step: 'Clone Repository',
    command: 'git clone <repository-url>',
    description: 'Download the project source code from the repository'
  },
  {
    step: 'Navigate to Project',
    command: 'cd programming_keyboard_trainer',
    description: 'Change to the project directory'
  },
  {
    step: 'Install Dependencies',
    command: 'flutter pub get',
    description: 'Download and install all required Flutter packages'
  },
  {
    step: 'Run Application',
    command: 'flutter run -d chrome',
    description: 'Launch the application in Chrome browser'
  }
];

const troubleshooting = [
  {
    issue: 'Windows Desktop Toolchain Error',
    solution: 'Install Visual Studio Community with "Desktop development with C++" workload',
    details: [
      'Download Visual Studio Community (free)',
      'During installation, select "Desktop development with C++"',
      'Include Windows 10/11 SDK and CMake tools',
      'Restart Flutter and run again'
    ]
  },
  {
    issue: 'Web Development Setup',
    solution: 'Use Chrome browser for web development',
    details: [
      'Ensure Chrome or Edge is installed',
      'Run: flutter run -d chrome',
      'Web version is recommended for quick testing',
      'No additional setup required'
    ]
  },
  {
    issue: 'Android Development Setup',
    solution: 'Configure Android Studio and emulator',
    details: [
      'Install Android Studio',
      'Set up Android SDK',
      'Create an Android emulator',
      'Run: flutter run -d android'
    ]
  }
];

const futureEnhancements = [
  'More programming languages (Python, Java, C++)',
  'Custom code snippets creation',
  'User accounts and progress tracking',
  'Advanced virtual keyboard implementation',
  'Sound effects for typing feedback',
  'Export practice results and statistics',
  'Difficulty levels and adaptive learning',
  'Multiplayer mode for competitive practice'
];

const stats = [
  { label: 'Programming Languages', value: '3', icon: Code },
  { label: 'Platform Support', value: 'Multi', icon: Monitor },
  { label: 'Code Snippets', value: '20+', icon: FileCode },
  { label: 'Real-time Metrics', value: '5', icon: TargetIcon },
  { label: 'Theme Options', value: '2', icon: Moon },
  { label: 'Practice Modes', value: 'Progressive', icon: TrendingUp }
];

export default function ProgrammingKeyboardTrainerPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-900/20 dark:via-gray-900 dark:to-blue-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 dark:bg-green-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-teal-200 dark:bg-teal-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-20">
          <AnimatedSection>
            <div className="mb-8">
              <Link href="/#projects">
                <Button variant="ghost" className="mb-6 hover:bg-gray-100 dark:hover:bg-gray-800">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Button>
              </Link>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Flutter Desktop
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1">
                  Educational Tool
                </Badge>
                <Badge className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1">
                  Typing Practice
                </Badge>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1">
                  Contact Required
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Programming Keyboard Trainer
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                A Flutter Windows Desktop Application that helps beginners practice typing and learn HTML, CSS, and JavaScript syntax.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                This educational tool features syntax highlighting, real-time metrics, and a modern Material Design interface. 
                Perfect for beginners learning programming syntax through interactive typing practice with comprehensive code examples.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  disabled
                >
                  <Keyboard className="h-4 w-4 mr-2" />
                  No Demo Available
                </Button>
                <Badge variant="outline" className="text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400">
                  Contact for Demo
                </Badge>
              </div>
            </div>
          </AnimatedSection>
          
          {/* Stats Section */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 rounded-lg border border-gray-200 dark:border-gray-700 text-center hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-green-600 dark:text-green-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {['overview', 'features', 'troubleshooting'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 border-b-2 pb-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-green-600 dark:text-green-400 border-green-600 dark:border-green-400'
                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Project Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Programming Keyboard Trainer is a comprehensive Flutter desktop application designed specifically for beginners learning programming syntax. 
                      The application provides an interactive environment where users can practice typing HTML, CSS, and JavaScript code with real-time feedback 
                      and performance metrics.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with Flutter for cross-platform compatibility, the app features a modern Material Design interface with dark/light theme support, 
                      syntax highlighting for code snippets, and comprehensive typing analytics. The split-screen layout allows users to see target code 
                      while typing, with real-time WPM and accuracy tracking to monitor progress.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">🚀 Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">{feature.description}</p>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                              {feature.details.slice(0, 3).map((detail, detailIndex) => (
                                <li key={detailIndex}>• {detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}

          {/* Features Tab */}
          {activeTab === 'features' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Complete Feature Set</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Snippets Tab */}
          {activeTab === 'snippets' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Code Snippets Library</h2>
                <div className="space-y-6">
                  {codeSnippets.map((snippet, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <snippet.icon className="h-6 w-6 text-green-600 dark:text-green-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">{snippet.language} Snippets</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">{snippet.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Included Examples:</h4>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {snippet.examples.map((example, exampleIndex) => (
                                    <div key={exampleIndex} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span className="text-sm">{example}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Installation Tab */}
          {activeTab === 'installation' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Installation & Setup</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">📋 Prerequisites</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <h4 className="font-medium">Required Software</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Flutter SDK (3.8.1 or higher)</li>
                          <li>• Dart SDK</li>
                          <li>• Visual Studio (for Windows Desktop)</li>
                          <li>• Chrome or Edge (for Web)</li>
                          <li>• Android Studio (for Android)</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium">Platform Requirements</h4>
                        <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Windows 10/11 (Desktop)</li>
                          <li>• Modern web browser (Web)</li>
                          <li>• Android 5.0+ (Mobile)</li>
                          <li>• 4GB RAM minimum</li>
                          <li>• 2GB storage space</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">🛠️ Installation Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {installationSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 dark:text-green-400 font-bold text-xs">{index + 1}</span>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium mb-1">{step.step}</h4>
                            <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded font-mono text-sm mb-2">
                              {step.command}
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">📦 Dependencies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {techStack.slice(6).map((dep, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="font-medium text-gray-600 dark:text-gray-400">{dep.category}</span>
                          </div>
                          <Badge variant="secondary">{dep.technology}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}

          {/* Troubleshooting Tab */}
          {activeTab === 'troubleshooting' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🔧 Troubleshooting & Support</h2>
                
                <div className="space-y-6">
                  {troubleshooting.map((item, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <AlertTriangle className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">{item.issue}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">{item.solution}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Steps to Resolve:</h4>
                                <ul className="space-y-1">
                                  {item.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                      <ChevronRight className="h-3 w-3 text-orange-500" />
                                      <span>{detail}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">🚀 Future Enhancements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {futureEnhancements.map((enhancement, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <Sparkles className="h-5 w-5 text-blue-500" />
                          <span className="text-sm">{enhancement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">📞 Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        Currently, there is no public demo version available. If you're interested in trying the Programming Keyboard Trainer 
                        or would like more information about the application, please contact the developer directly.
                      </p>
                      <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                        <Mail className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        <span className="text-orange-700 dark:text-orange-300">Contact for demo access and inquiries</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center">
                <Keyboard className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">Programming Keyboard Trainer</span>
            </div>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400">
                Contact for Demo
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
