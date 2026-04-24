'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Package, Layers, Cpu, MousePointer, Palette, Eye, Focus, Database as DatabaseIcon, Globe2, FileCode, Terminal, Braces, Hash, ChevronRight, Sparkles, Wand2, Lock, Bug, QrCode, Map, ShieldCheck, Sword, Crosshair, Key, Fingerprint, AlertTriangle, Cpu as CpuIcon, Network, School, Medal, Crown, Layout, Grid3x3, Settings2, Copy, Download as DownloadIcon, Undo, Redo, Monitor, Smartphone as SmartphoneIcon, Tablet, Monitor as MonitorIcon, Code2, FileArchive, Save, Upload, RotateCcw, RotateCw, Palette as PaletteIcon, Eye as EyeIcon, Layers as LayersIcon, Lightbulb, Keyboard, Monitor as MonitorIcon2, Moon, Sun, RefreshCw, Timer, Target as TargetIcon, Zap as ZapIcon, Wind, Mail, Droplets, Palette as PaletteIcon2, Languages, DownloadCloud, Settings as SettingsIcon, Globe as GlobeIcon, Package as PackageIcon, FileText as FileTextIcon, RefreshCw as RefreshCwIcon, RotateCcw as RotateCcwIcon, MessageCircle, History, Edit, Upload as UploadIcon, LogOut, Menu, X, Sun as SunIcon, Moon as MoonIcon, Copy as CopyIcon, FileText as FileTextIcon2, Code as CodeIcon, User, Lock as LockIcon, Mail as MailIcon, ChevronLeft as ChevronLeftIcon, ChevronRight as ChevronRightIcon, Plus, Trash2, Edit2, LogOut as LogOutIcon, FileText as FileTextIcon3, FileQuestion, ShieldCheck as ShieldCheckIcon, EyeOff, MousePointer2, Printer, AlertTriangle as AlertTriangleIcon, ChevronLeft as ChevronLeftIcon2, ChevronRight as ChevronRightIcon2, Play as PlayIcon, Pause, BookOpen as BookOpenIcon, DownloadCloud as DownloadCloudIcon, Link2, FileSpreadsheet, Code as CodeIcon2, FileCode as FileCodeIcon, FileText as FileTextIcon4, FileDown, FileUp, FileCheck, FileX, FileSearch, FileLock, FileWarning, FilePlus, FileMinus, FileEdit, FileArchive as FileArchiveIcon, FileImage, FileVideo, FileAudio, File as FileIcon, Camera, CameraOff, FlipHorizontal, Timer as TimerIcon, Image as ImageIcon, Filter, Sparkles as SparklesIcon, Heart as HeartIcon, Star as StarIcon, Sun as SunIcon2, Moon as MoonIcon2, Cloud, CloudRain, Flower, Cat, Zap as ZapIcon3, Rainbow, Diamond, Moon as MoonIcon3, Cherry, Sparkles as SparklesIcon2, PawPrint, Candy, Palette as PaletteIcon3, Share2 as Share2Icon, Share as ShareIcon, Download as DownloadIcon2, Grid3x3 as Grid3x3Icon, Layers as LayersIcon2, Image as ImageIcon2, Upload as UploadIcon2, Smartphone as SmartphoneIcon2, Monitor as MonitorIcon3, Type, Circle } from 'lucide-react';
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
    icon: Camera,
    title: 'Core Photo Capture',
    description: 'Advanced camera system with 4-photo sequence capture and customizable countdown timer',
    details: [
      '4-Photo Sequence: Automatically captures 4 pictures in a row',
      'Custom Countdown: Choose 1-5 seconds countdown per shot',
      'Camera Flip: Toggle between front and rear cameras',
      'Live Preview: Real-time camera feed with instant effect previews',
      'Auto-capture: Hands-free photo taking with timer',
      'Camera permissions: Secure camera access handling',
      'Device compatibility: Works on desktop, tablet, and mobile',
      'Resolution optimization: High-quality photo capture'
    ]
  },
  {
    icon: Filter,
    title: 'Photo Effects',
    description: 'Professional photo filters including Sepia, Black & White, Blur, and clean capture options',
    details: [
      'Sepia: Classic vintage look with warm tones',
      'Black & White: Timeless monochrome conversion',
      'Blur: Soft focus effect for artistic looks',
      'None: Clean, unfiltered capture for natural photos',
      'Real-time preview: See effects before capturing',
      'Effect intensity: Adjustable filter strength',
      'Combination effects: Multiple filters can be layered',
      'Instant processing: No lag in effect application'
    ]
  },
  {
    icon: SparklesIcon,
    title: 'Cute Frames (20+ Styles)',
    description: 'Decorate photos with adorable frame designs including stars, hearts, flowers, and custom options',
    details: [
      'Decorative frames: Stars, Hearts, Sunflowers, Flowers, Bows',
      'Animal frames: Bunnies, Cats, Pusheen, Pawprints',
      'Nature frames: Waves, Clouds, Rainbow, Moon, Cherry, Butterfly',
      'Fantasy frames: Galaxy, Diamonds, Glitter, Candy',
      'Custom Solid Color: Pick any color with color picker',
      'Custom Gradient: Create two-color gradient frames',
      'Frame positioning: Adjustable placement and size',
      'Frame opacity: Transparent to solid frame options'
    ]
  },
  {
    icon: Grid3x3Icon,
    title: 'Layout Options',
    description: 'Multiple layout styles including Vertical Strip, 2x2 Grid, and Polaroid Stack arrangements',
    details: [
      'Vertical Strip: Classic photobooth strip layout',
      '2x2 Grid: Four photos arranged in square grid',
      'Polaroid Stack: Stacked polaroid-style photos with rotation',
      'Custom spacing: Adjustable gaps between photos',
      'Border options: Various border styles and thicknesses',
      'Aspect ratios: Multiple photo aspect ratio support',
      'Layout preview: See layout before finalizing',
      'Responsive layouts: Adapts to different screen sizes'
    ]
  },
  {
    icon: ImageIcon2,
    title: 'Background Customization',
    description: 'Polaroid layout backgrounds with solid colors, preset images, and custom upload options',
    details: [
      'Solid Colors: Sky blue and other preset colors',
      'Preset Images: Beach, stars, and more from Unsplash',
      'Custom Upload: Upload your own background image',
      'Background opacity: Adjustable transparency',
      'Image positioning: Center, tile, or stretch options',
      'Color picker: Full spectrum color selection',
      'Background effects: Blur and gradient options',
      'High-res support: 4K background image capability'
    ]
  },
  {
    icon: Type,
    title: 'Watermark & Branding',
    description: 'Custom text watermarks, auto date/time stamps, and fixed URL watermark options',
    details: [
      'Custom Text Watermark: Add personalized text to downloads',
      'Auto Date/Time Stamp: Automatically includes capture date and time',
      'Fixed URL Watermark: Credits the application source',
      'Font selection: Multiple font options for watermarks',
      'Text positioning: Adjustable watermark placement',
      'Text color: Full color customization',
      'Text opacity: Transparent to solid text options',
      'Text size: Scalable watermark sizing'
    ]
  },
  {
    icon: Share2Icon,
    title: 'Sharing & Export',
    description: 'Instant PNG download, native Web Share API, and fallback sharing options',
    details: [
      'Instant Download: Save photo strip as high-quality PNG',
      'Native Share: Web Share API for direct mobile sharing',
      'Fallback Share: Copy link or manual download options',
      'Social media integration: Direct sharing to platforms',
      'Email sharing: Send photos via email',
      'QR code generation: Share via QR code',
      'Cloud storage: Save to cloud services',
      'Batch export: Multiple photo export options'
    ]
  },
  {
    icon: SmartphoneIcon2,
    title: 'User Experience',
    description: 'Responsive design, animated landing page, accessibility features, and analytics integration',
    details: [
      'Responsive Design: Works on desktop, tablet, and mobile',
      'Animated Landing Page: Floating hearts background animation',
      'Accessibility: ARIA labels and semantic HTML support',
      'Google Analytics: Integrated usage tracking',
      'Touch gestures: Mobile-friendly interactions',
      'Keyboard navigation: Full keyboard accessibility',
      'Screen reader support: Optimized for assistive technologies',
      'Performance optimization: Fast loading and smooth animations'
    ]
  }
];

const frameStyles = [
  { name: 'Stars', icon: Star, description: 'Sparkling star decorations' },
  { name: 'Hearts', icon: HeartIcon, description: 'Romantic heart shapes' },
  { name: 'Sunflowers', icon: SunIcon2, description: 'Bright sunflower borders' },
  { name: 'Flowers', icon: Flower, description: 'Various flower designs' },
  { name: 'Bows', icon: Heart, description: 'Elegant ribbon bows' },
  { name: 'Bunnies', icon: Cat, description: 'Cute rabbit motifs' },
  { name: 'Waves', icon: Cloud, description: 'Ocean wave patterns' },
  { name: 'Clouds', icon: Cloud, description: 'Fluffy cloud borders' },
  { name: 'Cats', icon: Cat, description: 'Adorable cat designs' },
  { name: 'Pusheen', icon: Cat, description: 'Pusheen the cat frames' },
  { name: 'Rainbow', icon: Rainbow, description: 'Colorful rainbow borders' },
  { name: 'Diamonds', icon: Diamond, description: 'Sparkling diamond patterns' },
  { name: 'Moon', icon: MoonIcon3, description: 'Celestial moon designs' },
  { name: 'Cherries', icon: Cherry, description: 'Sweet cherry decorations' },
  { name: 'Glitter', icon: SparklesIcon2, description: 'Shimmering glitter effects' },
  { name: 'Pawprints', icon: PawPrint, description: 'Animal paw print borders' },
  { name: 'Candy', icon: Candy, description: 'Sweet candy decorations' },
  { name: 'Butterflies', icon: Sparkles, description: 'Colorful butterfly designs' },
  { name: 'Galaxy', icon: Star, description: 'Space-themed frames' },
  { name: 'Custom Solid', icon: PaletteIcon3, description: 'Pick any solid color' },
  { name: 'Custom Gradient', icon: PaletteIcon, description: 'Create two-color gradients' }
];

const techStack = [
  { category: 'Frontend', technology: 'HTML5', purpose: 'Page structure and semantic markup' },
  { category: 'Styling', technology: 'CSS3', purpose: 'Styling, animations, responsive design' },
  { category: 'Language', technology: 'Vanilla JavaScript', purpose: 'Application logic, camera handling' },
  { category: 'Framework', technology: 'Bootstrap 5.3.0', purpose: 'UI components, navigation, modals' },
  { category: 'Camera', technology: 'WebRTC (getUserMedia)', purpose: 'Camera access and video streaming' },
  { category: 'Graphics', technology: 'Canvas API', purpose: 'Photo rendering, frame application' },
  { category: 'Analytics', technology: 'Google Analytics (gtag)', purpose: 'Usage tracking and insights' },
  { category: 'Icons', technology: 'Icons8', purpose: 'Camera, share, download, and UI icons' },
  { category: 'Images', technology: 'Unsplash', purpose: 'Preset background images' }
];

const usageSteps = [
  {
    step: 'Getting Started',
    description: 'Open index.html in a modern web browser and click "Start Snapping"',
    icon: PlayIcon,
    details: [
      'Open index.html in modern web browser',
      'Click "Start Snapping" on welcome page',
      'Animated landing page with floating hearts',
      'Enter PhotoBooth interface',
      'Camera permission request appears',
      'Allow camera access to continue'
    ]
  },
  {
    step: 'Camera Setup',
    description: 'Click "Start Camera" and allow camera access when prompted',
    icon: Camera,
    details: [
      'Click "Start Camera" button',
      'Allow camera access in browser prompt',
      'Live camera feed appears',
      'See real-time preview',
      'Camera initializes with default settings',
      'Ready for photo capture'
    ]
  },
  {
    step: 'Capturing Photos',
    description: 'Customize settings and click "Capture Photos" to begin the 4-photo sequence',
    icon: CameraOff,
    details: [
      'Select countdown duration (1-5 seconds)',
      'Optionally flip camera (front/rear)',
      'Apply photo effects (sepia, grayscale, blur)',
      'Click "Capture Photos" to start sequence',
      'Strike poses during countdown',
      'Photos captured automatically'
    ]
  },
  {
    step: 'Customizing Photos',
    description: 'Select frames, add watermarks, choose layouts, and customize backgrounds',
    icon: PaletteIcon3,
    details: [
      'Select from 20+ decorative frames',
      'Add custom text watermark',
      'Choose layout (Strip, Grid, Polaroid)',
      'Customize background (Polaroid only)',
      'Adjust frame positioning',
      'Preview changes in real-time'
    ]
  },
  {
    step: 'Saving & Sharing',
    description: 'Download photos as PNG or share via native device sharing',
    icon: ShareIcon,
    details: [
      'Click "Save Photos" to download PNG',
      'Click "Share Photos" for native sharing',
      'Use Web Share API on mobile devices',
      'Fallback options for unsupported browsers',
      'Click "Retake Photos" to start over',
      'Share with friends instantly'
    ]
  }
];

const stats = [
  { label: 'Photo Effects', value: '4+', icon: Filter },
  { label: 'Frame Styles', value: '20+', icon: SparklesIcon },
  { label: 'Layout Options', value: '3', icon: Grid3x3Icon },
  { label: 'Camera Modes', value: '2', icon: FlipHorizontal },
  { label: 'Export Formats', value: 'PNG', icon: DownloadIcon2 },
  { label: 'Device Support', value: 'All', icon: SmartphoneIcon2 }
];

export default function PhotoBoothPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50 dark:from-pink-900/20 dark:via-gray-900 dark:to-purple-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
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
                <Badge className="bg-pink-100 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 px-3 py-1">
                  Photo Application
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  WebRTC Camera
                </Badge>
                <Badge className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1">
                  Interactive Fun
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Live Platform
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                PhotoBooth
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                A fun, interactive web-based PhotoBooth application that lets you capture memorable moments with cute frames, effects, and customizable layouts.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Perfect for creating instant photo strips to share with friends! Features 4-photo sequences, 20+ frame styles, 
                photo effects, multiple layouts, and comprehensive sharing options with modern WebRTC camera integration.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-pink-600 hover:bg-pink-700 text-white"
                  asChild
                >
                  <a 
                    href="https://photobooth-alpha-five.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Camera className="h-4 w-4" />
                    Try PhotoBooth
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
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-pink-600 dark:text-pink-400" />
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
            {['overview', 'features', 'frames', 'tech-stack', 'usage'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 border-b-2 pb-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-pink-600 dark:text-pink-400 border-pink-600 dark:border-pink-400'
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
                      PhotoBooth is a delightful web application that brings the classic photo booth experience to your browser. 
                      Built with modern WebRTC technology, it captures spontaneous moments with professional-quality results, 
                      offering an impressive array of customization options that make every photo unique and shareable.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      The application combines cutting-edge web technologies with playful design elements to create an engaging 
                      user experience. From the animated landing page with floating hearts to the comprehensive photo editing suite, 
                      every aspect is crafted to provide joy and creativity while maintaining technical excellence and cross-device compatibility.
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
                          <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
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
                          <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-pink-600 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* Frames Tab */}
          {activeTab === 'frames' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Cute Frame Collection (20+ Styles)</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {frameStyles.map((frame, index) => (
                    <AnimatedCard key={index} delay={index * 50}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <frame.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-1">{frame.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{frame.description}</p>
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
                            <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
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
                        <li>• <strong>CSS3:</strong> Animations, responsive design</li>
                        <li>• <strong>Vanilla JavaScript:</strong> Core functionality</li>
                        <li>• <strong>Bootstrap 5.3.0:</strong> UI components</li>
                        <li>• <strong>WebRTC:</strong> Camera access</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">⚙️ Integration & APIs</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Canvas API:</strong> Photo rendering</li>
                        <li>• <strong>Google Analytics:</strong> Usage tracking</li>
                        <li>• <strong>Web Share API:</strong> Native sharing</li>
                        <li>• <strong>Icons8:</strong> UI iconography</li>
                        <li>• <strong>Unsplash:</strong> Background images</li>
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
                <h2 className="text-3xl font-bold mb-8">How to Use PhotoBooth</h2>
                
                <div className="space-y-6">
                  {usageSteps.map((step, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <step.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">Step {index + 1}: {step.step}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">{step.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Details:</h4>
                                <ul className="space-y-1">
                                  {step.details.map((detail, detailIndex) => (
                                    <li key={detailIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                      <ChevronRight className="h-3 w-3 text-pink-500" />
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
              <div className="w-6 h-6 bg-pink-600 rounded-lg flex items-center justify-center">
                <Camera className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">PhotoBooth</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://photobooth-alpha-five.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Camera className="h-4 w-4" />
                Try PhotoBooth
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
