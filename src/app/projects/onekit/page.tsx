'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Package, Layers, Cpu, MousePointer, Palette, Eye, Focus, Database as DatabaseIcon, Globe2, FileCode, Terminal, Braces, Hash, ChevronRight, Sparkles, Wand2 } from 'lucide-react';
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
    icon: Layers,
    title: 'DOM Manipulation',
    description: 'jQuery-like API for element selection and manipulation with modern JavaScript performance',
    details: [
      'Chainable method syntax for fluent programming',
      'CSS selector engine with advanced filtering',
      'Element creation and manipulation',
      'Attribute and CSS property management',
      'Class and visibility controls',
      'DOM structure modification (append, prepend, clone, remove)',
      'Event delegation for dynamic content',
      'Cross-browser compatibility'
    ]
  },
  {
    icon: Sparkles,
    title: 'Animations',
    description: 'Smooth CSS animations and transitions with built-in effects and custom animation support',
    details: [
      'Built-in animations: fade_in, fade_out, slide_up, slide_down',
      'Advanced animations: scaleIn, scaleOut, rotateIn, rotateOut',
      'Custom animations with animate() method',
      'Bounce and shake effects',
      'Easing functions and duration controls',
      'Animation callbacks and promises',
      'Hardware acceleration support',
      'Performance-optimized animations'
    ]
  },
  {
    icon: Brain,
    title: 'Reactive State',
    description: 'Automatic UI updates with reactive data binding and state management system',
    details: [
      'Reactive objects with automatic change detection',
      'Watch functions for state changes',
      'Two-way data binding with form elements',
      'Computed properties and derived state',
      'State persistence and restoration',
      'Batch updates for performance',
      'Deep reactivity for nested objects',
      'Integration with component system'
    ]
  },
  {
    icon: Navigation,
    title: 'Router',
    description: 'Client-side routing with history API support and dynamic route handling',
    details: [
      'History API integration for clean URLs',
      'Route parameters and query string parsing',
      'Route guards and middleware',
      'Lazy loading of route components',
      '404 and error handling',
      'Browser back/forward navigation',
      'Anchor scroll positioning',
      'Programmatic navigation methods'
    ]
  },
  {
    icon: Globe,
    title: 'HTTP Client',
    description: 'Complete AJAX requests, WebSocket support, and file upload capabilities',
    details: [
      'GET, POST, PUT, DELETE HTTP methods',
      'Promise-based API with async/await support',
      'Request/response interceptors',
      'File upload with progress tracking',
      'WebSocket connections with reconnection',
      'Request timeout and retry logic',
      'Response caching and cache control',
      'Error handling and status code management'
    ]
  },
  {
    icon: MousePointer,
    title: 'Gestures',
    description: 'Touch and gesture support for mobile devices with swipe, tap, and pinch events',
    details: [
      'Touch event abstraction for cross-platform support',
      'Swipe gestures (left, right, up, down)',
      'Tap and long press detection',
      'Pinch zoom gestures',
      'Gesture velocity and distance calculation',
      'Multi-touch support',
      'Gesture prevention and conflict resolution',
      'Mobile-optimized performance'
    ]
  },
  {
    icon: Package,
    title: 'Components',
    description: 'Reusable component system with lifecycle hooks and template rendering',
    details: [
      'Component registration and creation',
      'Template rendering with data binding',
      'Lifecycle hooks (created, mounted, destroyed)',
      'Props and state management',
      'Component communication and events',
      'Dynamic component loading',
      'Component nesting and composition',
      'Performance optimization with virtual DOM concepts'
    ]
  },
  {
    icon: Palette,
    title: 'Themes',
    description: 'Built-in theming system with dark mode support and CSS custom properties',
    details: [
      'Theme application and switching',
      'Dark mode toggle and detection',
      'CSS custom properties integration',
      'Theme persistence in localStorage',
      'Dynamic theme updates',
      'Color palette management',
      'Responsive theme breakpoints',
      'Accessibility considerations for themes'
    ]
  },
  {
    icon: Eye,
    title: 'Accessibility',
    description: 'Screen reader support and focus management for inclusive web applications',
    details: [
      'Screen reader announcements',
      'Focus trapping and management',
      'ARIA attribute management',
      'Keyboard navigation support',
      'High contrast mode detection',
      'Reduced motion preferences',
      'Focus visible indicators',
      'Semantic HTML integration'
    ]
  },
  {
    icon: DatabaseIcon,
    title: 'Storage',
    description: 'Local and session storage utilities with serialization and expiration support',
    details: [
      'localStorage and sessionStorage wrappers',
      'JSON serialization and deserialization',
      'Data expiration and TTL support',
      'Storage quota management',
      'Cross-tab synchronization',
      'Encryption and security options',
      'Fallback mechanisms for older browsers',
      'Storage event handling'
    ]
  }
];

const coreAPI = [
  {
    category: 'Selection & Manipulation',
    examples: [
      "ok('.my-class').css('color', 'blue');",
      "ok('.button').class('active').text('Click me!').on('click', () => console.log('Clicked'));"
    ],
    icon: Layers
  },
  {
    category: 'Reactive State',
    examples: [
      "const state = ok.reactive.reactive({ count: 0, name: 'OneKit' });",
      "ok.reactive.watch('count', (newVal, oldVal) => console.log(`Count: ${oldVal} → ${newVal}`));"
    ],
    icon: Brain
  },
  {
    category: 'HTTP Requests',
    examples: [
      "ok.http.get('/api/users').then(users => console.log(users));",
      "ok.http.post('/api/users', { name: 'John' }).then(user => console.log('Created:', user));"
    ],
    icon: Globe
  },
  {
    category: 'Animations',
    examples: [
      "ok('.element').fade_in(500);",
      "ok('.element').animate({ opacity: 0.5, transform: 'scale(1.2)' }, 400);"
    ],
    icon: Sparkles
  }
];

const techStack = [
  { category: 'Language', technology: 'Vanilla JavaScript (ES6+)' },
  { category: 'Build Tool', technology: 'Rollup/Webpack' },
  { category: 'Testing', technology: 'Jest/QUnit' },
  { category: 'Documentation', technology: 'JSDoc' },
  { category: 'Package Manager', technology: 'npm/yarn' },
  { category: 'Browser Support', technology: 'Modern Browsers' },
  { category: 'Module System', technology: 'ES Modules/CommonJS' },
  { category: 'API Design', technology: 'Fluent Interface Pattern' }
];

const browserSupport = [
  { browser: 'Chrome', version: 'latest', supported: true },
  { browser: 'Firefox', version: 'latest', supported: true },
  { browser: 'Safari', version: 'latest', supported: true },
  { browser: 'Edge', version: 'latest', supported: true },
  { browser: 'IE', version: '11', supported: false }
];

const quickStart = `<!DOCTYPE html>
<html>
<head>
    <title>My OneKit App</title>
</head>
<body>
    <div id="app">
        <h1>Hello OneKit!</h1>
        <button class="btn">Click me</button>
    </div>

    <script src="onekit.js"></script>
    <script>
        // DOM manipulation
        ok('.btn').click(() => {
            ok('#app').append('<p>Button clicked!</p>');
        });

        // Animations
        ok('.btn').fade_in();
    </script>
</body>
</html>`;

const projectStructure = `onekit/
├── src/
│   ├── core/
│   │   ├── onekit.js           # Main library entry point
│   │   ├── dom.js              # DOM manipulation methods
│   │   ├── events.js           # Event handling system
│   │   ├── animations.js       # Animation engine
│   │   ├── reactive.js         # State management
│   │   ├── router.js           # Client-side routing
│   │   ├── http.js             # HTTP client
│   │   ├── gestures.js         # Touch/gesture support
│   │   ├── components.js       # Component system
│   │   ├── themes.js           # Theme management
│   │   ├── accessibility.js   # A11y features
│   │   └── storage.js          # Storage utilities
│   ├── plugins/
│   │   ├── jquery-compat.js    # jQuery compatibility layer
│   │   └── utils.js            # Utility functions
│   └── tests/
│       ├── unit/               # Unit tests
│       ├── integration/        # Integration tests
│       └── e2e/                # End-to-end tests
├── docs/
│   ├── api/                   # API documentation
│   ├── examples/              # Code examples
│   └── guides/                # User guides
├── dist/
│   ├── onekit.js             # Production build
│   └── onekit.min.js         # Minified version
├── examples/
│   ├── basic/                # Basic usage examples
│   ├── router/               # Router examples
│   └── components/           # Component examples
├── package.json
├── rollup.config.js
└── README.md`;

const stats = [
  { label: 'Core Features', value: '10+', icon: Package },
  { label: 'API Methods', value: '100+', icon: Code },
  { label: 'File Size', value: '25KB', icon: FileCode },
  { label: 'Browser Support', value: 'Modern', icon: Globe2 },
  { label: 'Dependencies', value: '0', icon: Hash },
  { label: 'License', value: 'MIT', icon: Shield }
];

export default function OneKitPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-yellow-50 via-white to-orange-50 dark:from-yellow-900/20 dark:via-gray-900 dark:to-orange-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-200 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 dark:bg-orange-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-amber-200 dark:bg-amber-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-3 py-1">
                  JavaScript Library
                </Badge>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1">
                  Modern Web Dev
                </Badge>
                <Badge className="bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 px-3 py-1">
                  Zero Dependencies
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Open Source
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                OneKit - Modern JavaScript Library
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                OneKit is a lightweight, powerful JavaScript library that provides everything you need for modern web development: DOM manipulation, animations, reactive state management, routing, API integration, and more.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-yellow-600 hover:bg-yellow-700 text-white"
                  asChild
                >
                  <a 
                    href="https://www.npmjs.com/package/onekit-js" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Package className="h-4 w-4" />
                    npm install onekit-js
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
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-yellow-600 dark:text-yellow-400" />
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
            {['overview', 'features', 'api', 'installation', 'browser'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 border-b-2 pb-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-yellow-600 dark:text-yellow-400 border-yellow-600 dark:border-yellow-400'
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
                      OneKit is a comprehensive JavaScript library designed to simplify modern web development by providing a unified API for common tasks. 
                      With zero dependencies and a tiny footprint (25KB minified), OneKit offers everything developers need in one package: 
                      DOM manipulation, animations, reactive state management, routing, HTTP client, gesture support, and more.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with modern JavaScript best practices and inspired by popular libraries like jQuery and React, OneKit provides a familiar 
                      yet powerful API that works seamlessly across all modern browsers. The library emphasizes performance, accessibility, 
                      and developer experience while maintaining backward compatibility and extensive documentation.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">🚀 Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
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
                          <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* API Tab */}
          {activeTab === 'api' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Core API</h2>
                <div className="space-y-6">
                  {coreAPI.map((api, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <api.icon className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold mb-3">{api.category}</h3>
                              <div className="space-y-2">
                                {api.examples.map((example, exampleIndex) => (
                                  <div key={exampleIndex} className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg font-mono text-sm overflow-x-auto">
                                    {example}
                                  </div>
                                ))}
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
                <h2 className="text-3xl font-bold mb-8">Quick Start</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">Installation Methods</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">CDN Include</h3>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                          &lt;script src="onekit.js"&gt;&lt;/script&gt;
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-semibold mb-2">npm Install</h3>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                          npm i onekit-js
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">Basic Usage Example</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{quickStart}</pre>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">Project Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{projectStructure}</pre>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}

          {/* Browser Tab */}
          {activeTab === 'browser' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Browser Support</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">Supported Browsers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {browserSupport.map((browser, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${browser.supported ? 'bg-green-500' : 'bg-red-500'}`}></div>
                            <span className="font-medium">{browser.browser}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600 dark:text-gray-400">{browser.version}</span>
                            <Badge variant={browser.supported ? 'default' : 'destructive'}>
                              {browser.supported ? 'Supported' : 'Not Supported'}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">🛠️ Tech Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {techStack.map((item, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-yellow-600 rounded-full"></div>
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
                      <CardTitle className="text-xl mb-4">🌟 Key Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Zero Dependencies</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">No external dependencies required</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Modern JavaScript</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Built with ES6+ and modern practices</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Comprehensive API</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Everything you need in one library</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Developer Friendly</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Familiar API with excellent documentation</p>
                          </div>
                        </div>
                      </div>
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
              <div className="w-6 h-6 bg-yellow-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">OK</span>
              </div>
              <span className="font-medium">OneKit</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://www.npmjs.com/package/onekit-js" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-yellow-600 dark:hover:text-yellow-400 transition-colors"
              >
                <Package className="h-4 w-4" />
                npm install onekit-js
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
