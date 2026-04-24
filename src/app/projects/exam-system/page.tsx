'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Package, Layers, Cpu, MousePointer, Palette, Eye, Focus, Database as DatabaseIcon, Globe2, FileCode, Terminal, Braces, Hash, ChevronRight, Sparkles, Wand2, Lock, Bug, QrCode, Map, ShieldCheck, Sword, Crosshair, Key, Fingerprint, AlertTriangle, Cpu as CpuIcon, Network, School, Medal, Crown, Layout, Grid3x3, Settings2, Copy, Download as DownloadIcon, Undo, Redo, Monitor, Smartphone as SmartphoneIcon, Tablet, Monitor as MonitorIcon, Code2, FileArchive, Save, Upload, RotateCcw, RotateCw, Palette as PaletteIcon, Eye as EyeIcon, Layers as LayersIcon, Lightbulb, Keyboard, Monitor as MonitorIcon2, Moon, Sun, RefreshCw, Timer, Target as TargetIcon, Zap as ZapIcon, Wind, Mail, Droplets, Palette as PaletteIcon2, Languages, DownloadCloud, Settings as SettingsIcon, Globe as GlobeIcon, Package as PackageIcon, FileText as FileTextIcon, RefreshCw as RefreshCwIcon, RotateCcw as RotateCcwIcon, MessageCircle, History, Edit, Upload as UploadIcon, LogOut, Menu, X, Sun as SunIcon, Moon as MoonIcon, Copy as CopyIcon, FileText as FileTextIcon2, Code as CodeIcon, User, Lock as LockIcon, Mail as MailIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Plus, Trash2, Edit2, LogOut as LogOutIcon, FileText as FileTextIcon3, FileQuestion, ShieldCheck as ShieldCheckIcon, EyeOff, MousePointer2, Printer, AlertTriangle as AlertTriangleIcon, ChevronLeft as ChevronLeftIcon2, ChevronRight as ChevronRightIcon2, Play as PlayIcon, Pause, BookOpen as BookOpenIcon, DownloadCloud as DownloadCloudIcon, Link2, FileSpreadsheet, Code as CodeIcon2, FileCode as FileCodeIcon, FileText as FileTextIcon4, FileDown, FileUp, FileCheck, FileX, FileSearch, FileLock, FileWarning, FilePlus, FileMinus, FileEdit, FileArchive as FileArchiveIcon, FileImage, FileVideo, FileAudio, File as FileIcon } from 'lucide-react';
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
    icon: FileQuestion,
    title: 'Question Display',
    description: 'Fetches and displays questions from a Google Sheet based on Exam ID with real-time data retrieval',
    details: [
      'Dynamic question fetching from Google Sheets API',
      'Exam ID-based question filtering',
      'Real-time data synchronization',
      'Question metadata validation',
      'Error handling for missing questions',
      'Caching for improved performance',
      'Support for multiple question types',
      'Automatic question numbering'
    ]
  },
  {
    icon: FileText,
    title: 'PDF Rendering',
    description: 'Renders all pages of PDF files using pdf.js with comprehensive page navigation and zoom controls',
    details: [
      'Complete PDF rendering with pdf.js library',
      'Multi-page PDF support with navigation',
      'Zoom in/out functionality',
      'Page thumbnail generation',
      'PDF loading progress indicators',
      'Error handling for corrupted PDFs',
      'Responsive PDF viewer design',
      'Touch gesture support for mobile'
    ]
  },
  {
    icon: DownloadCloud,
    title: 'Resource Download',
    description: 'Provides secure download links for resource files with validation and access control',
    details: [
      'Secure resource file downloads',
      'GitHub raw link integration',
      'File validation before download',
      'Download progress tracking',
      'Multiple file format support',
      'Access control and permissions',
      'Download history tracking',
      'Batch download capabilities'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Security Features',
    description: 'Comprehensive security measures including disabled right-click, text selection, and print/screenshot protection',
    details: [
      'Right-click context menu disabled',
      'Text selection prevention',
      'Print functionality blocked',
      'Screenshot protection alerts',
      'Copy-paste restrictions',
      'Developer tools access control',
      'Content protection mechanisms',
      'Session-based security'
    ]
  },
  {
    icon: ChevronLeftIcon2,
    title: 'Navigation System',
    description: 'Intuitive navigation between questions with Previous/Next buttons and progress tracking',
    details: [
      'Previous/Next question navigation',
      'Progress bar for exam completion',
      'Question jump functionality',
      'Bookmark important questions',
      'Navigation history tracking',
      'Keyboard shortcuts support',
      'Mobile-friendly navigation',
      'Auto-save progress'
    ]
  },
  {
    icon: FileSpreadsheet,
    title: 'Google Sheets Integration',
    description: 'Seamless integration with Google Sheets for data management and real-time updates',
    details: [
      'Google Sheets API integration',
      'Real-time data synchronization',
      'Multiple sheet support',
      'Data validation and sanitization',
      'Automatic data refresh',
      'Backup and recovery options',
      'Collaborative editing support',
      'Version control integration'
    ]
  }
];

const systemComponents = [
  {
    title: 'Google Sheets',
    description: 'Stores exam questions and metadata in structured format',
    icon: FileSpreadsheet,
    features: [
      'Questions sheet with exam data',
      'Exams sheet with metadata',
      'Structured data organization',
      'Real-time collaboration',
      'Version history tracking',
      'Data validation rules',
      'Import/export capabilities',
      'Access permission management'
    ]
  },
  {
    title: 'Google Apps Script',
    description: 'Backend API for fetching data from Google Sheets with validation',
    icon: CodeIcon2,
    features: [
      'RESTful API endpoints',
      'Data validation and sanitization',
      'Link validation for PDF and resources',
      'Error handling and logging',
      'Rate limiting and security',
      'Authentication and authorization',
      'Caching optimization',
      'API documentation'
    ]
  },
  {
    title: 'Frontend Application',
    description: 'User interface with Bootstrap styling and pdf.js integration',
    icon: Monitor,
    features: [
      'Responsive Bootstrap design',
      'pdf.js PDF rendering',
      'Interactive question display',
      'Navigation controls',
      'Security implementation',
      'Mobile optimization',
      'Accessibility features',
      'Performance optimization'
    ]
  },
  {
    title: 'GitHub Repository',
    description: 'Hosts PDF files and resources with raw link access',
    icon: Github,
    features: [
      'YHA-Center/exam repository',
      'Raw file serving',
      'Version control for resources',
      'Automatic deployment',
      'CDN integration',
      'File organization',
      'Access control',
      'Backup and redundancy'
    ]
  }
];

const techStack = [
  { category: 'Frontend', technology: 'HTML5', purpose: 'Structure and semantic markup' },
  { category: 'Styling', technology: 'Bootstrap', purpose: 'Responsive design and UI components' },
  { category: 'JavaScript', technology: 'Vanilla JS', purpose: 'Core functionality and API calls' },
  { category: 'PDF Rendering', technology: 'pdf.js', purpose: 'PDF display and navigation' },
  { category: 'Backend', technology: 'Google Apps Script', purpose: 'API and data processing' },
  { category: 'Database', technology: 'Google Sheets', purpose: 'Data storage and management' },
  { category: 'File Hosting', technology: 'GitHub', purpose: 'Resource file hosting' },
  { category: 'Security', technology: 'Custom JS', purpose: 'Content protection' }
];

const usageSteps = [
  {
    step: 'Start the Exam',
    description: 'Open the web application and enter an Exam ID to begin',
    icon: PlayIcon,
    details: [
      'Open web application in browser',
      'Enter Exam ID (e.g., E1)',
      'Click Start Exam button',
      'System validates Exam ID',
      'Load exam configuration',
      'Initialize question display'
    ]
  },
  {
    step: 'View Questions and PDFs',
    description: 'Questions appear with associated PDFs rendered in the viewer',
    icon: FileTextIcon3,
    details: [
      'Question displayed in container',
      'PDF rendered using pdf.js',
      'All PDF pages accessible',
      'Resource download button appears',
      'Navigation controls available',
      'Responsive layout adjustment'
    ]
  },
  {
    step: 'Navigate Questions',
    description: 'Use Previous/Next buttons to move between questions',
    icon: ChevronLeftIcon2,
    details: [
      'Previous button for navigation',
      'Next button for progression',
      'Progress bar shows completion',
      'Question number display',
      'Jump to specific questions',
      'Auto-save navigation state'
    ]
  },
  {
    step: 'Security Features',
    description: 'System prevents copying, printing, and screenshots',
    icon: ShieldCheckIcon,
    details: [
      'Right-click disabled',
      'Text selection blocked',
      'Print functionality prevented',
      'Screenshot protection alerts',
      'Content copy restrictions',
      'Developer tools access control'
    ]
  }
];

const securityFeatures = [
  {
    title: 'Content Protection',
    description: 'Prevents unauthorized copying and distribution of exam content',
    icon: Lock,
    features: [
      'Right-click context menu disabled',
      'Text selection and copy blocked',
      'Keyboard shortcuts prevented',
      'Drag and drop disabled'
    ]
  },
  {
    title: 'Print Protection',
    description: 'Blocks printing and screenshot capabilities',
    icon: Printer,
    features: [
      'Print dialog blocked',
      'Screenshot prevention',
      'Screen recording detection',
      'Print preview disabled'
    ]
  },
  {
    title: 'Access Control',
    description: 'Manages user access and session security',
    icon: ShieldCheck,
    features: [
      'Session-based authentication',
      'Access timeout management',
      'Activity monitoring',
      'Security event logging'
    ]
  }
];

const stats = [
  { label: 'Data Source', value: 'Google Sheets', icon: FileSpreadsheet },
  { label: 'PDF Engine', value: 'pdf.js', icon: FileText },
  { label: 'Security Level', value: 'High', icon: ShieldCheck },
  { label: 'File Hosting', value: 'GitHub', icon: Github },
  { label: 'Navigation', value: 'Multi-Question', icon: ChevronLeftIcon2 },
  { label: 'Protection', value: 'Content Lock', icon: Lock }
];

export default function ExamSystemPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-blue-900/20 dark:via-gray-900 dark:to-green-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-200 dark:bg-green-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
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
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1">
                  Educational Platform
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Exam System
                </Badge>
                <Badge className="bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-3 py-1">
                  Secure Content
                </Badge>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1">
                  No Demo
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Exam System
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                The Exam System is a web-based application designed to deliver exam questions, associated PDF documents, and resource files to users.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                The system fetches data from a Google Sheet, validates links, and renders PDFs using pdf.js. Questions and PDFs are displayed based on an Exam ID, 
                with navigation for multiple questions and comprehensive security features to protect content.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  disabled
                >
                  <FileQuestion className="h-4 w-4 mr-2" />
                  No Demo Available
                </Button>
                <Badge variant="outline" className="text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400">
                  Educational Use Only
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
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
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
            {['overview', 'features', 'components', 'tech-stack', 'usage'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 border-b-2 pb-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
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
                    <CardTitle className="text-2xl mb-4">System Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      The Exam System represents a comprehensive educational platform designed specifically for secure exam delivery and content management. 
                      This sophisticated web application integrates multiple technologies to provide a seamless exam experience while maintaining stringent 
                      security measures to protect intellectual property and ensure academic integrity.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with a focus on educational institutions and training organizations, the system leverages Google Sheets for data management, 
                      GitHub for resource hosting, and advanced client-side security to create a robust examination environment. The platform supports 
                      various question types, PDF document rendering, and comprehensive navigation features while preventing unauthorized content distribution.
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
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
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
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* Components Tab */}
          {activeTab === 'components' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">System Components</h2>
                <div className="space-y-6">
                  {systemComponents.map((component, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <component.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">{component.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">{component.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Key Features:</h4>
                                <div className="grid md:grid-cols-2 gap-2">
                                  {component.features.map((feature, featureIndex) => (
                                    <div key={featureIndex} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span className="text-sm">{feature}</span>
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
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
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
                        <li>• <strong>HTML5:</strong> Semantic structure and markup</li>
                        <li>• <strong>Bootstrap:</strong> Responsive design and components</li>
                        <li>• <strong>Vanilla JavaScript:</strong> Core functionality</li>
                        <li>• <strong>pdf.js:</strong> PDF rendering and navigation</li>
                        <li>• <strong>Custom Security:</strong> Content protection</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">⚙️ Backend & Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Google Apps Script:</strong> API and data processing</li>
                        <li>• <strong>Google Sheets:</strong> Data storage and management</li>
                        <li>• <strong>GitHub:</strong> Resource file hosting</li>
                        <li>• <strong>RESTful API:</strong> Data communication</li>
                        <li>• <strong>Security Layer:</strong> Content protection</li>
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
                <h2 className="text-3xl font-bold mb-8">How to Use the Exam System</h2>
                
                <div className="space-y-6">
                  {usageSteps.map((step, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <step.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">Step {index + 1}: {step.step}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">{step.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Details:</h4>
                                <ul className="space-y-1">
                                  {step.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                      <ChevronRight className="h-3 w-3 text-blue-500" />
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
                    <CardTitle className="text-xl mb-4">🔒 Security Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {securityFeatures.map((security, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <security.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                          </div>
                          <div className="flex-grow">
                            <h3 className="font-semibold text-lg mb-2">{security.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-3">{security.description}</p>
                            <div className="grid md:grid-cols-2 gap-2">
                              {security.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span className="text-sm">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
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
              <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                <FileQuestion className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">Exam System</span>
            </div>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400">
                Educational Use Only
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
