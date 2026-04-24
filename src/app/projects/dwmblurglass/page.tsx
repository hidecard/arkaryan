'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Package, Layers, Cpu, MousePointer, Palette, Eye, Focus, Database as DatabaseIcon, Globe2, FileCode, Terminal, Braces, Hash, ChevronRight, Sparkles, Wand2, Lock, Bug, QrCode, Map, ShieldCheck, Sword, Crosshair, Key, Fingerprint, AlertTriangle, Cpu as CpuIcon, Network, School, Medal, Crown, Layout, Grid3x3, Settings2, Copy, Download as DownloadIcon, Undo, Redo, Monitor, Smartphone as SmartphoneIcon, Tablet, Monitor as MonitorIcon, Code2, FileArchive, Save, Upload, RotateCcw, RotateCw, Palette as PaletteIcon, Eye as EyeIcon, Layers as LayersIcon, Lightbulb, Keyboard, Monitor as MonitorIcon2, Moon, Sun, RefreshCw, Timer, Target as TargetIcon, Zap as ZapIcon, Wind, Mail, Droplets, Palette as PaletteIcon2, Languages, DownloadCloud, Settings as SettingsIcon, Globe as GlobeIcon, Package as PackageIcon, FileText as FileTextIcon, RefreshCw as RefreshCwIcon, RotateCcw as RotateCcwIcon } from 'lucide-react';
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
    icon: Droplets,
    title: 'Custom Blur Effects',
    description: 'Apply customizable blur effects to window title bars and borders with adjustable intensity',
    details: [
      'Adjustable blur radius for global intensity control',
      'Real-time preview of blur effects',
      'Per-window customization options',
      'Border and title bar independent control',
      'Performance-optimized blur algorithms',
      'GPU-accelerated rendering',
      'Memory-efficient implementation',
      'Compatibility with modern Windows UI'
    ]
  },
  {
    icon: Monitor,
    title: 'Windows 10/11 Support',
    description: 'Full compatibility with both Windows 10 and Windows 11 operating systems',
    details: [
      'Windows 10 version 1903 and later',
      'Windows 11 all versions supported',
      'Automatic version detection',
      'OS-specific optimizations',
      'Mica effect override on Windows 11',
      'Classic Aero restoration on Windows 10',
      'System integration with DWM',
      'Future Windows update compatibility'
    ]
  },
  {
    icon: Eye,
    title: 'Aero Reflection',
    description: 'Enable classic Windows 7-style Aero reflection effects with modern enhancements',
    details: [
      'Classic Windows 7 glass reflection',
      'Modern glass effect improvements',
      'Customizable reflection intensity',
      'Color-aware reflections',
      'Dynamic lighting effects',
      'Smooth animation transitions',
      'High-resolution support',
      'Multi-monitor compatibility'
    ]
  },
  {
    icon: PaletteIcon2,
    title: 'Color Customization',
    description: 'Comprehensive color customization for light and dark modes with blend color control',
    details: [
      'Light and dark mode color schemes',
      'Custom blend colors for title bars',
      'Active/inactive window states',
      'System color integration',
      'Color palette presets',
      'Custom color picker',
      'RGB and HSL color models',
      'Color synchronization across themes'
    ]
  },
  {
    icon: Languages,
    title: 'Multi-Language Support',
    description: 'Supports 15+ languages including English, Chinese, Japanese, Korean, and European languages',
    details: [
      'English (US/UK)',
      'Chinese (Simplified/Traditional)',
      'Japanese (full localization)',
      'Korean (complete translation)',
      'German (Deutsch)',
      'French (Français)',
      'Spanish (Español)',
      'Italian, Portuguese, Russian, and more'
    ]
  },
  {
    icon: DownloadCloud,
    title: 'Symbol File Management',
    description: 'Automatic symbol file downloading and management from Microsoft servers',
    details: [
      'Auto-download from Microsoft servers',
      'Symbol file validation',
      'Version compatibility checking',
      'Automatic updates after Windows updates',
      'Manual refresh options',
      'Download progress tracking',
      'Error handling and retry logic',
      'Offline symbol file caching'
    ]
  }
];

const installationSteps = [
  {
    step: 'Download Application',
    description: 'Download the latest release from the releases page',
    icon: Download,
    details: [
      'Visit the official releases page',
      'Download the latest stable version',
      'Verify file integrity if available',
      'Choose appropriate version for your system'
    ]
  },
  {
    step: 'Extract Files',
    description: 'Extract files to a directory outside user folders',
    icon: PackageIcon,
    details: [
      'Extract to C:\\Program Files or similar',
      '⚠️ Important: Not in C:\\Users\\ or subdirectories',
      'Create dedicated folder for organization',
      'Ensure write permissions'
    ]
  },
  {
    step: 'Run as Administrator',
    description: 'Launch the application with administrator privileges',
    icon: Shield,
    details: [
      'Right-click and "Run as administrator"',
      'Grant UAC permissions when prompted',
      'Required for DWM system modifications',
      'One-time setup for system integration'
    ]
  },
  {
    step: 'Install Modifications',
    description: 'Click Install to apply DWM modifications to the system',
    icon: SettingsIcon,
    details: [
      'Click "Install" button in application',
      'Wait for installation to complete',
      'System will apply blur effects',
      'Restart may be required'
    ]
  },
  {
    step: 'Download Symbols',
    description: 'Download required symbol files from the Symbol tab if prompted',
    icon: DownloadCloud,
    details: [
      'Navigate to "Symbol" tab',
      'Click "Download Symbols" button',
      'Wait for download completion',
      'Required for proper functionality'
    ]
  }
];

const troubleshooting = [
  {
    issue: 'Installation Failed',
    icon: AlertTriangle,
    solutions: [
      'Ensure application is not in a user directory',
      'Run as administrator',
      'Check Windows version compatibility (1903+)',
      'Verify DWM service is running',
      'Disable antivirus temporarily',
      'Check system file integrity'
    ]
  },
  {
    issue: 'Symbols Invalid',
    icon: RefreshCwIcon,
    solutions: [
      'Go to Symbol tab and download fresh symbols',
      'Required after Windows updates',
      'Check internet connection for downloads',
      'Clear symbol cache and re-download',
      'Verify Windows version matches symbols',
      'Manual refresh if auto-download fails'
    ]
  },
  {
    issue: 'Effects Not Working',
    icon: Monitor,
    solutions: [
      'Verify installation status shows "Installed"',
      'Download valid symbol files',
      'Restart Windows after installation',
      'Check if DWM is enabled',
      'Verify blur radius is not set to 0',
      'Test with different applications'
    ]
  },
  {
    issue: 'MiaoUI Initialization Failed',
    icon: AlertTriangle,
    solutions: [
      'UI library error - try restarting as admin',
      'Check if all dependencies are present',
      'Verify application files are not corrupted',
      'Re-install application if problem persists',
      'Check Windows event logs for details',
      'Ensure .NET framework is installed'
    ]
  },
  {
    issue: 'DWM Authorization Isolation',
    icon: ShieldCheck,
    solutions: [
      'Move application outside user directories',
      'This is a Windows security restriction',
      'Use C:\\Program Files or similar',
      'Run from external drive if needed',
      'Create dedicated system folder',
      'Ensure proper permissions'
    ]
  }
];

const systemRequirements = [
  { requirement: 'Windows 10 version 1903 or later', supported: true },
  { requirement: 'Windows 11 (all versions)', supported: true },
  { requirement: 'Administrator privileges', supported: true },
  { requirement: 'Internet connection for symbols', supported: true },
  { requirement: 'DWM service enabled', supported: true },
  { requirement: 'GPU with DirectX support', supported: true }
];

const stats = [
  { label: 'Windows Versions', value: '10/11', icon: Monitor },
  { label: 'Languages', value: '15+', icon: Languages },
  { label: 'Blur Effects', value: 'Custom', icon: Droplets },
  { label: 'Color Modes', value: 'Light/Dark', icon: PaletteIcon2 },
  { label: 'Symbol Management', value: 'Auto', icon: DownloadCloud },
  { label: 'License', value: 'Free', icon: Heart }
];

export default function DWMBlurGlassPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-blue-900/20 dark:via-gray-900 dark:to-purple-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                  Windows Utility
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  Open Source
                </Badge>
                <Badge className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1">
                  Free Software
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Aero Glass
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                DWMBlurGlass
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                DWMBlurGlass is a free and open-source application that enables customizable blur effects for Windows title bars and borders, 
                bringing back the classic Aero glass effect with modern enhancements.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                This powerful utility restores the beloved Windows 7 Aero glass aesthetics while adding modern customization options, 
                multi-language support, and automatic symbol file management for seamless integration with Windows 10 and 11.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a 
                    href="https://liquid-glass-ui-for-window.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <DownloadCloud className="h-4 w-4" />
                    Apply & Download
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400">
                  Free & Open Source
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
            {['overview', 'features', 'installation', 'troubleshooting'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 border-b-2 pb-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400'
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
                      DWMBlurGlass is a revolutionary Windows utility that brings back the classic Aero glass effect from Windows 7 while adding 
                      modern enhancements and customization options. This free and open-source application works by directly modifying the 
                      Desktop Window Manager (DWM) to apply customizable blur effects to window title bars and borders.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with deep integration into Windows' visual systems, DWMBlurGlass supports both Windows 10 and Windows 11, 
                      offering features like Aero reflection effects, comprehensive color customization, multi-language support, and automatic 
                      symbol file management. The application restores the beloved glass aesthetics while maintaining compatibility 
                      with modern Windows UI elements.
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

          {/* Installation Tab */}
          {activeTab === 'installation' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Installation Guide</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">⚠️ Important Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-800">
                        <AlertTriangle className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                        <div>
                          <h4 className="font-medium text-orange-700 dark:text-orange-300">Directory Restriction</h4>
                          <p className="text-sm text-orange-600 dark:text-orange-400">
                            Due to DWM security restrictions, the application must be placed outside user directories (not in C:\Users\ or subdirectories)
                          </p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        {systemRequirements.map((req, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            {req.supported ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <AlertCircle className="h-5 w-5 text-red-500" />
                            )}
                            <span className="text-sm">{req.requirement}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  {installationSteps.map((step, index) => (
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
              </div>
            </AnimatedSection>
          )}

          {/* Troubleshooting Tab */}
          {activeTab === 'troubleshooting' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Troubleshooting Guide</h2>
                
                <div className="space-y-6">
                  {troubleshooting.map((item, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <item.icon className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">{item.issue}</h3>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Solutions:</h4>
                                <ul className="space-y-1">
                                  {item.solutions.map((solution, solutionIndex) => (
                                    <li key={solutionIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                      <CheckCircle className="h-3 w-3 text-green-500" />
                                      <span>{solution}</span>
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
                    <CardTitle className="text-xl mb-4">📞 Support & Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-600 dark:text-gray-400">
                        DWMBlurGlass is a free and open-source project. For support, bug reports, or feature requests, 
                        please visit the official repository or community forums.
                      </p>
                      <div className="flex items-center gap-3 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <GlobeIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        <span className="text-blue-700 dark:text-blue-300">Visit the official website for downloads and support</span>
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
              <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                <Droplets className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">DWMBlurGlass</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://liquid-glass-ui-for-window.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <DownloadCloud className="h-4 w-4" />
                Apply & Download
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
