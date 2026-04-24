'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Smartphone, MapPin, Bot, Database, Globe, Wifi, Code, Zap, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus } from 'lucide-react';
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
    icon: MapPin,
    title: 'Interactive Maps',
    description: 'Leaflet-powered maps with OpenStreetMap tiles, GPS location services, and route visualization',
    details: [
      'Leaflet-powered maps with OpenStreetMap tiles',
      'GPS location services to find nearby bus stops',
      'Stop markers with detailed popups across Yangon',
      'Search and jump to specific stops on the map',
      'Radius-based discovery showing stops within 1km'
    ]
  },
  {
    icon: Bot,
    title: 'AI-Powered Assistant',
    description: 'Natural language queries in Myanmar (Burmese) and English with intelligent route finding',
    details: [
      'Natural language queries in Myanmar (Burmese) and English',
      'Local NLP processing to extract stop names from conversational text',
      'Intelligent route finding using BFS graph traversal',
      'Transfer planning with up to 4 transfers supported',
      'Contextual responses with step-by-step route instructions'
    ]
  },
  {
    icon: Search,
    title: 'Advanced Search & Navigation',
    description: 'Route search between any two bus stops with BFS algorithm and comprehensive filtering',
    details: [
      'Route search between any two bus stops with BFS algorithm',
      'Stop directory with 1000+ stops organized by township',
      'Route filtering by start/end locations, route ID, or operator',
      'Direct & transfer routes with visual step indicators',
      'Favorites system to save preferred routes'
    ]
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Mobile-first design with modern UI using Tailwind CSS and yellow accent theme',
    details: [
      'Mobile-first design with bottom navigation',
      'Desktop interface with sticky header navigation',
      'Modern UI using Tailwind CSS with yellow accent theme',
      'Touch-friendly map pickers and selection modals'
    ]
  },
  {
    icon: Database,
    title: 'Offline Capabilities',
    description: 'IndexedDB storage using Dexie.js with local route data embedded in the application',
    details: [
      'IndexedDB storage using Dexie.js',
      'Local route data embedded in the application',
      'JSON route files (100+ routes) loaded dynamically',
      'Fast loading without internet dependency after initial load'
    ]
  }
];

const techStack = [
  { category: 'Frontend Framework', technology: 'React 19 + TypeScript' },
  { category: 'Build Tool', technology: 'Vite 6' },
  { category: 'Styling', technology: 'Tailwind CSS' },
  { category: 'Routing', technology: 'React Router DOM 7' },
  { category: 'Icons', technology: 'Lucide React' },
  { category: 'Database', technology: 'Dexie.js (IndexedDB wrapper)' },
  { category: 'Maps', technology: 'Leaflet (loaded dynamically) + OpenStreetMap' },
  { category: 'AI/NLP', technology: 'Custom local NLP extractor + BFS graph search' },
  { category: 'Data Format', technology: 'Local JSON files + TypeScript constants' }
];

const usageGuide = [
  {
    method: 'AI Assistant',
    steps: [
      'Navigate to the Assistant page',
      'Ask questions naturally in Myanmar or English:',
      '"မြေနီကုန်းကနေ လှည်းတန်းကို ဘယ်လိုသွားရမလဲ?"',
      '"How to go from Dagon Center to Sule?"',
      '"Show me routes from Hledan to Thingangyun"',
      'The assistant extracts stop names and returns route options with transfers'
    ]
  },
  {
    method: 'Route Search',
    steps: [
      'Go to Find Route page',
      'Enter start and end bus stops (with autocomplete)',
      'Use "Near Me" button to auto-fill nearest stop via GPS',
      'Use the map picker to select stops visually',
      'View route options with transfer information'
    ]
  },
  {
    method: 'Map Navigation',
    steps: [
      'Open the Map page',
      'Browse bus stops visually across Yangon',
      'Use GPS to find your current location',
      'Search for specific stops and jump to them'
    ]
  }
];

const projectStructure = `yangon-ybs-guide/
├── routes/                 # Bus route JSON files (100+ routes)
│   ├── route1.json
│   ├── route2.json
│   ├── route3A.json
│   └── ...
├── App.tsx                 # Main application with all components
├── index.tsx               # React entry point
├── db.ts                   # Dexie IndexedDB configuration
├── data_constants.ts       # Bus stops data & route loading utilities
├── types.ts                # TypeScript interfaces
├── vite.config.ts          # Vite configuration
├── package.json
└── README.md`;

const stats = [
  { label: 'Bus Routes', value: '100+', icon: Navigation },
  { label: 'Bus Stops', value: '1000+', icon: MapPin },
  { label: 'Languages', value: '2', icon: MessageSquare },
  { label: 'Offline Features', value: '100%', icon: Wifi },
  { label: 'AI Responses', value: 'Instant', icon: Zap }
];

export default function YBSAIDetailPage() {
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
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 dark:bg-pink-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                  AI Project
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Live Demo Available
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  Open Source
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Yangon YBS Guide 
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                A comprehensive bus route guide application for Yangon, Myanmar, featuring interactive maps, 
                an AI-powered route assistant, and offline functionality.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a 
                    href="https://ybs-mm-v2.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Play className="h-4 w-4" />
                    View Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
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
            {['overview', 'features', 'technology', 'usage', 'architecture'].map((tab) => (
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
                      Yangon YBS Guide is a comprehensive bus route guide application designed specifically for Yangon, Myanmar's public transportation system. 
                      The application combines interactive mapping technology with AI-powered natural language processing to provide users with 
                      intuitive route planning and navigation assistance.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with a focus on accessibility and offline functionality, the application serves as an essential tool for both 
                      locals and visitors navigating Yangon's complex bus network. The AI assistant understands both Myanmar (Burmese) 
                      and English, making it accessible to a wide range of users.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">🌟 Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-2">{feature.description}</p>
                            <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                              {feature.details.map((detail, detailIndex) => (
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
                <h2 className="text-3xl font-bold mb-8">Detailed Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className={`w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4`}>
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

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🚀 Tech Stack</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {techStack.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            <span className="font-medium text-gray-600 dark:text-gray-400">{item.category}</span>
                          </div>
                          <Badge variant="secondary">{item.technology}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Technical Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium">Frontend Architecture</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• React 19 with TypeScript for type safety</li>
                          <li>• Vite 6 for fast development and building</li>
                          <li>• Tailwind CSS for responsive styling</li>
                          <li>• React Router DOM 7 for navigation</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium">Data & AI</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Dexie.js wrapper for IndexedDB</li>
                          <li>• Local NLP extractor for Myanmar text</li>
                          <li>• BFS graph traversal for route finding</li>
                          <li>• 100+ JSON route files loaded dynamically</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}

          {/* Usage Tab */}
          {activeTab === 'usage' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">📖 Usage Guide</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Finding Routes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      {usageGuide.map((method, index) => (
                        <div key={index}>
                          <h3 className="text-xl font-semibold mb-4">Method {index + 1}: {method.method}</h3>
                          <div className="space-y-3 ml-4">
                            {method.steps.map((step, stepIndex) => (
                              <div key={stepIndex} className="flex items-start gap-3">
                                <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <span className="text-xs text-blue-600 dark:text-blue-400 font-bold">{stepIndex + 1}</span>
                                </div>
                                <p className="text-gray-600 dark:text-gray-400">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Exploring Bus Routes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Route Directory</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                          <li>• Visit Routes page</li>
                          <li>• Browse/search all 100+ available bus routes</li>
                          <li>• Click any route to see complete stop list with visual timeline</li>
                          <li>• View route color and operator info</li>
                          <li>• Interactive stop links for navigation</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Stop Information</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                          <li>• Go to Stops page</li>
                          <li>• Browse or search 1000+ stops by name or township</li>
                          <li>• Click stops to see location on embedded map</li>
                          <li>• View all passing routes and township information</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Saving Favorites</h3>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400 ml-4">
                          <li>• Click the star icon on any route card to save it</li>
                          <li>• Favorites are persisted in localStorage</li>
                          <li>• Access saved routes quickly for frequent travel</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🏗️ Project Structure</h2>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">File Organization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{projectStructure}</pre>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">Key Components</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>App.tsx</strong> - Main application with all components</li>
                        <li>• <strong>db.ts</strong> - Dexie IndexedDB configuration</li>
                        <li>• <strong>data_constants.ts</strong> - Bus stops data & utilities</li>
                        <li>• <strong>types.ts</strong> - TypeScript interfaces</li>
                        <li>• <strong>routes/</strong> - 100+ JSON route files</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">Data Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Local JSON files for route data</li>
                        <li>• IndexedDB for offline storage</li>
                        <li>• Dynamic route loading</li>
                        <li>• BFS algorithm for route finding</li>
                        <li>• Local NLP for text processing</li>
                      </ul>
                    </CardContent>
                  </Card>
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
              <div className="w-6 h-6 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">YBS</span>
              </div>
              <span className="font-medium">Yangon YBS Guide</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://ybs-mm-v2.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
