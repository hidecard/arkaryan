'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Package, Layers, Cpu, MousePointer, Palette, Eye, Focus, Database as DatabaseIcon, Globe2, FileCode, Terminal, Braces, Hash, ChevronRight, Sparkles, Wand2, Lock, Bug, QrCode, Map, ShieldCheck, Sword, Crosshair, Key, Fingerprint, AlertTriangle, Cpu as CpuIcon, Network, School, Medal, Crown, Layout, Grid3x3, Settings2, Copy, Download as DownloadIcon, Undo, Redo, Monitor, Smartphone as SmartphoneIcon, Tablet, Monitor as MonitorIcon, Code2, FileArchive, Save, Upload, RotateCcw, RotateCw, Palette as PaletteIcon, Eye as EyeIcon, Layers as LayersIcon, Lightbulb, Keyboard, Monitor as MonitorIcon2, Moon, Sun, RefreshCw, Timer, Target as TargetIcon, Zap as ZapIcon, Wind, Mail, Droplets, Palette as PaletteIcon2, Languages, DownloadCloud, Settings as SettingsIcon, Globe as GlobeIcon, Package as PackageIcon, FileText as FileTextIcon, RefreshCw as RefreshCwIcon, RotateCcw as RotateCcwIcon, MessageCircle, History, Edit, Upload as UploadIcon, LogOut, Menu, X, Sun as SunIcon, Moon as MoonIcon, Copy as CopyIcon, FileText as FileTextIcon2, Code as CodeIcon, User, Lock as LockIcon, Mail as MailIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Plus, Trash2, LogOut as LogOutIcon } from 'lucide-react';
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
    icon: MessageCircle,
    title: 'Dynamic Chat Interface',
    description: 'Engage with an AI model to ask questions, debug code, or dive into AI concepts with a smooth, conversational flow',
    details: [
      'Real-time AI conversations with natural language processing',
      'Smooth message flow with typing indicators',
      'Context-aware responses for better understanding',
      'Multi-turn conversation support',
      'Message history tracking',
      'Quick response suggestions',
      'Conversation context preservation',
      'Intelligent query processing'
    ]
  },
  {
    icon: History,
    title: 'Chat History Management',
    description: 'Save, search, edit, or clear conversations, stored locally in the browser for quick access',
    details: [
      'Local browser storage for conversation persistence',
      'Search functionality across chat history',
      'Edit conversation titles for better organization',
      'Delete individual conversations or clear all history',
      'Export chat history for backup',
      'Conversation categorization',
      'Quick access to recent conversations',
      'Privacy-focused local storage'
    ]
  },
  {
    icon: MoonIcon,
    title: 'Dark Mode Toggle',
    description: 'Switch between light and dark themes with a visually appealing transition for enhanced readability',
    details: [
      'Smooth theme transition animations',
      'High contrast dark mode for reduced eye strain',
      'System preference detection and auto-switch',
      'Theme persistence across sessions',
      'Custom color schemes for different themes',
      'Accessibility-focused color contrast',
      'Readability optimization for both modes',
      'Visual comfort for extended usage'
    ]
  },
  {
    icon: CodeIcon,
    title: 'Code Syntax Highlighting',
    description: 'Display code snippets with vibrant, language-specific highlighting using Prism.js',
    details: [
      'Multi-language syntax highlighting support',
      'Vibrant color schemes for code readability',
      'Line numbers for code reference',
      'Copy code functionality with one click',
      'Expandable code blocks for long snippets',
      'Language auto-detection',
      'Syntax error highlighting',
      'Code formatting and indentation'
    ]
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Optimized for all devices with a fluid layout, powered by Bootstrap 5',
    details: [
      'Mobile-first responsive design approach',
      'Bootstrap 5 grid system for layout',
      'Touch-friendly interface elements',
      'Adaptive typography and spacing',
      'Cross-browser compatibility',
      'Performance optimization for mobile',
      'Gesture support for mobile interactions',
      'Viewport-based layout adjustments'
    ]
  },
  {
    icon: CopyIcon,
    title: 'Copy Functionality',
    description: 'Easily copy message text or code blocks with a single click',
    details: [
      'One-click copy for message content',
      'Code block copying with syntax preservation',
      'Visual feedback for copy actions',
      'Clipboard API integration',
      'Copy confirmation notifications',
      'Selective text copying',
      'Keyboard shortcuts for power users',
      'Cross-platform clipboard support'
    ]
  },
  {
    icon: Menu,
    title: 'Collapsible Sidebar',
    description: 'A stylish sidebar for chat history and settings, with smooth animations and mobile-friendly toggling',
    details: [
      'Smooth sidebar animations and transitions',
      'Mobile-friendly hamburger menu toggle',
      'Chat history sidebar with search',
      'Settings panel integration',
      'Responsive sidebar behavior',
      'Keyboard navigation support',
      'Customizable sidebar width',
      'State persistence across sessions'
    ]
  },
  {
    icon: Brain,
    title: 'AI Integration',
    description: 'Connects to the Gemini 1.5 Flash API for intelligent, real-time responses',
    details: [
      'Gemini 1.5 Flash API integration',
      'Real-time AI response generation',
      'Intelligent context understanding',
      'Multi-turn conversation support',
      'Error handling for API failures',
      'Response optimization for speed',
      'Custom AI model configuration',
      'Advanced prompt engineering'
    ]
  }
];

const techStack = [
  { category: 'Frontend', technology: 'HTML5', purpose: 'Structure of the application' },
  { category: 'Styling', technology: 'CSS3 (Custom with CSS Variables)', purpose: 'Theming, responsiveness, and animations' },
  { category: 'Framework', technology: 'Bootstrap 5', purpose: 'Responsive layout and UI components' },
  { category: 'Language', technology: 'JavaScript (ES6)', purpose: 'Interactivity, API calls, and local storage' },
  { category: 'Syntax Highlighting', technology: 'Prism.js', purpose: 'Code formatting for multiple languages' },
  { category: 'Typography', technology: 'Google Fonts (Inter, Fira Code)', purpose: 'Clean and readable fonts for UI and code' },
  { category: 'Icons', technology: 'Bootstrap Icons', purpose: 'Lightweight, scalable icons for UI elements' },
  { category: 'API', technology: 'Gemini 1.5 Flash API', purpose: 'Powers AI-driven chat responses' },
  { category: 'Storage', technology: 'Local Storage (Browser API)', purpose: 'Persistent storage for conversations' },
  { category: 'Theming', technology: 'CSS Variables (Dark/Light Mode)', purpose: 'Dynamic theme switching' }
];

const uiHighlights = [
  {
    title: 'Modern Aesthetic',
    description: 'Clean typography with Google Fonts (Inter and Fira Code) and a vibrant orange accent color (#f97316) for a professional yet approachable look.',
    icon: Palette
  },
  {
    title: 'Smooth Animations',
    description: 'Subtle slide-in effects for messages and a collapsible sidebar with fluid transitions.',
    icon: Zap
  },
  {
    title: 'Interactive Elements',
    description: 'Hover effects for buttons, copy icons, and chat history items enhance user engagement.',
    icon: MousePointer
  },
  {
    title: 'Accessible Design',
    description: 'High-contrast themes and ARIA labels ensure accessibility for all users.',
    icon: Eye
  },
  {
    title: 'Code Blocks',
    description: 'Scrollable, expandable code blocks with line numbers and copy buttons for a polished coding experience.',
    icon: Code2
  },
  {
    title: 'Responsive Layout',
    description: 'Fluid layout that adapts seamlessly to different screen sizes and devices.',
    icon: Monitor
  }
];

const usageSteps = [
  {
    step: 'Access the Application',
    description: 'Open the application in a web browser.',
    icon: Globe,
    details: [
      'Navigate to the application URL',
      'Compatible with modern browsers',
      'No installation required',
      'Instant web-based access'
    ]
  },
  {
    step: 'Authentication',
    description: 'Register or log in using an email and password.',
    icon: User,
    details: [
      'Create new account with email and password',
      'Login with existing credentials',
      'Secure authentication system',
      'Session management'
    ]
  },
  {
    step: 'Chat Interface',
    description: 'Start a new chat by clicking the "New Chat" button and interact with AI.',
    icon: MessageCircle,
    details: [
      'Click "New Chat" button in sidebar',
      'Type messages or upload files',
      'Submit to receive AI responses',
      'Use sidebar for conversation management'
    ]
  },
  {
    step: 'File Uploads',
    description: 'Upload text or image files via the file input button.',
    icon: UploadIcon,
    details: [
      'Upload text or image files',
      'Preview uploaded files',
      'Remove files if needed',
      'Support for multiple file types'
    ]
  },
  {
    step: 'Chat History',
    description: 'View, search, or edit past conversations in the sidebar.',
    icon: History,
    details: [
      'View all conversations in sidebar',
      'Search conversations using search bar',
      'Edit conversation titles with pencil icon',
      'Manage conversation history'
    ]
  },
  {
    step: 'Theme Toggle',
    description: 'Switch between light and dark modes using the theme toggle button.',
    icon: MoonIcon,
    details: [
      'Toggle between light and dark themes',
      'Smooth theme transitions',
      'Theme preference saved locally',
      'Enhanced readability options'
    ]
  },
  {
    step: 'Logout',
    description: 'Click the "Logout" button to sign out and clear local data.',
    icon: LogOutIcon,
    details: [
      'Click "Logout" button in sidebar',
      'Sign out from application',
      'Clear local data',
      'Secure session termination'
    ]
  }
];

const stats = [
  { label: 'AI Model', value: 'Gemini 1.5', icon: Brain },
  { label: 'Themes', value: 'Light/Dark', icon: MoonIcon },
  { label: 'Code Languages', value: 'Multiple', icon: CodeIcon },
  { label: 'Storage', value: 'Local', icon: Database },
  { label: 'Responsive', value: 'All Devices', icon: Smartphone },
  { label: 'Framework', value: 'Bootstrap 5', icon: Layers }
];

export default function YhaAiPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 dark:from-orange-900/20 dark:via-gray-900 dark:to-red-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 dark:bg-orange-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-red-200 dark:bg-red-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1">
                  AI Chat Application
                </Badge>
                <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1">
                  Modern UI
                </Badge>
                <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1">
                  Responsive Design
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Live Platform
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                YHA - AI
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                YHA - AI is a sleek, modern, and responsive AI-powered chat application designed to empower users to explore AI, coding, and computer science concepts.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                With a clean and intuitive UI, it offers a seamless experience for learning, debugging, and interacting with AI. 
                Built with a robust tech stack, it combines performance with aesthetic appeal, supporting both desktop and mobile users.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-orange-600 hover:bg-orange-700 text-white"
                  asChild
                >
                  <a 
                    href="https://yha-ai.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Try YHA - AI
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400">
                  Live Demo
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
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-orange-600 dark:text-orange-400" />
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
            {['overview', 'features', 'ui-highlights', 'tech-stack', 'usage'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 border-b-2 pb-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400'
                    : 'text-gray-600 dark:text-gray-400 border-transparent hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {tab.replace('-', ' ')}
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
                      YHA - AI represents the pinnacle of modern AI chat application design, combining cutting-edge technology with an intuitive user interface. 
                      This sophisticated platform leverages the power of Google's Gemini 1.5 Flash API to deliver intelligent, context-aware conversations 
                      while maintaining a sleek, professional appearance that appeals to both technical and non-technical users.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with performance and accessibility in mind, YHA - AI features a robust architecture that includes local storage for privacy, 
                      responsive design for universal device compatibility, and comprehensive theming options for user comfort. The application serves as 
                      both a powerful AI assistant and an elegant demonstration of modern web development capabilities.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">🌟 Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
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
                          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-orange-600 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* UI Highlights Tab */}
          {activeTab === 'ui-highlights' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">UI Design Highlights</h2>
                <div className="space-y-6">
                  {uiHighlights.map((highlight, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <highlight.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">{highlight.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400">{highlight.description}</p>
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

          {/* Tech Stack Tab */}
          {activeTab === 'tech-stack' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">🛠️ Complete Technology Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {techStack.map((tech, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                            <span className="font-medium text-gray-600 dark:text-gray-400">{tech.category}</span>
                          </div>
                          <div className="text-right">
                            <Badge variant="secondary">{tech.technology}</Badge>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{tech.purpose}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">🎨 Frontend Technologies</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>HTML5:</strong> Semantic markup and structure</li>
                        <li>• <strong>CSS3:</strong> Custom styling with CSS variables</li>
                        <li>• <strong>Bootstrap 5:</strong> Responsive grid and components</li>
                        <li>• <strong>JavaScript ES6:</strong> Modern interactivity</li>
                        <li>• <strong>Prism.js:</strong> Code syntax highlighting</li>
                        <li>• <strong>Google Fonts:</strong> Inter and Fira Code typography</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">⚙️ Backend & Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Gemini 1.5 Flash API:</strong> AI responses</li>
                        <li>• <strong>Local Storage:</strong> Chat persistence</li>
                        <li>• <strong>CSS Variables:</strong> Dynamic theming</li>
                        <li>• <strong>Bootstrap Icons:</strong> UI iconography</li>
                        <li>• <strong>Clipboard API:</strong> Copy functionality</li>
                        <li>• <strong>Responsive Design:</strong> Cross-device support</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Usage Tab */}
          {activeTab === 'usage' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">How to Use YHA - AI</h2>
                
                <div className="space-y-6">
                  {usageSteps.map((step, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <step.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">Step {index + 1}: {step.step}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">{step.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Details:</h4>
                                <ul className="space-y-1">
                                  {step.details.map((detail, detailIndex) => (
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
              <div className="w-6 h-6 bg-orange-600 rounded-lg flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">YHA - AI</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://yha-ai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                Try YHA - AI
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
