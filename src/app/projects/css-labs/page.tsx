'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Package, Layers, Cpu, MousePointer, Palette, Eye, Focus, Database as DatabaseIcon, Globe2, FileCode, Terminal, Braces, Hash, ChevronRight, Sparkles, Wand2, Lock, Bug, QrCode, Map, ShieldCheck, Sword, Crosshair, Key, Fingerprint, AlertTriangle, Cpu as CpuIcon, Network, School, Medal, Crown, Layout, Grid3x3, Settings2, Copy, Download as DownloadIcon, Undo, Redo, Monitor, Smartphone as SmartphoneIcon, Tablet, Monitor as MonitorIcon, Code2, FileArchive, Save, Upload, RotateCcw, RotateCw, Palette as PaletteIcon, Eye as EyeIcon, Layers as LayersIcon, Lightbulb } from 'lucide-react';
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
    icon: Layout,
    title: 'Interactive Layout Preview',
    description: 'Visualize Flexbox or Grid layouts with real-time updates and instant visual feedback',
    details: [
      'Live preview of layout changes as you adjust properties',
      'Support for both Flexbox and CSS Grid layouts',
      'Real-time rendering of CSS properties',
      'Visual feedback for all configuration changes',
      'Responsive viewport simulation',
      'Interactive box manipulation',
      'Dynamic layout switching',
      'Performance-optimized rendering'
    ]
  },
  {
    icon: Settings2,
    title: 'Configurable Properties',
    description: 'Comprehensive settings panel for adjusting display, gaps, alignment, and styling properties',
    details: [
      'Display mode switching (Flex, Grid, Block)',
      'Gap and spacing controls (gap, rowGap, colGap)',
      'Alignment properties (justify, align items)',
      'Item spans and grid positioning',
      'Box styling (border radius, shadows, backgrounds)',
      'Advanced flexbox controls (wrap, direction, flow)',
      'Grid configuration (columns, rows, auto sizing)',
      'Custom styling options per item'
    ]
  },
  {
    icon: Code2,
    title: 'Code Generation',
    description: 'Automatically generates HTML, CSS, and Tailwind CSS code based on configured layouts',
    details: [
      'Clean HTML structure generation',
      'Optimized CSS code output',
      'Tailwind CSS class generation',
      'Syntax highlighting for all code blocks',
      'Copy-to-clipboard functionality',
      'Combined HTML+CSS export',
      'Minified code options',
      'Code validation and formatting'
    ]
  },
  {
    icon: DownloadIcon,
    title: 'Export Options',
    description: 'Multiple export formats including CodePen, JSFiddle, and downloadable ZIP files',
    details: [
      'Direct export to CodePen with pre-filled code',
      'JSFiddle integration for online testing',
      'ZIP file download with HTML and CSS',
      'JSON configuration export/import',
      'Shareable configuration links',
      'Batch export capabilities',
      'Custom export templates',
      'Version control support'
    ]
  },
  {
    icon: RotateCcw,
    title: 'Undo/Redo System',
    description: 'Complete history tracking with up to 50 states for easy experimentation',
    details: [
      '50-state history stack',
      'Keyboard shortcuts (Ctrl+Z, Ctrl+Y)',
      'Visual history timeline',
      'State comparison tools',
      'Branch history support',
      'Auto-save checkpoints',
      'History export/import',
      'Selective state restoration'
    ]
  },
  {
    icon: Monitor,
    title: 'Responsive Preview',
    description: 'Simulate different viewport sizes for testing responsive design behavior',
    details: [
      'Auto viewport sizing',
      'Mobile phone simulation',
      'Tablet preview mode',
      'Desktop display testing',
      'Custom viewport dimensions',
      'Breakpoint indicators',
      'Orientation switching',
      'Pixel-perfect measurements'
    ]
  },
  {
    icon: Eye,
    title: 'Accessibility Features',
    description: 'Built-in accessibility support with ARIA attributes and keyboard navigation',
    details: [
      'ARIA attribute generation',
      'Skip to main content links',
      'Keyboard navigation support',
      'Screen reader compatibility',
      'Focus management',
      'Color contrast checking',
      'Accessibility validation',
      'WCAG compliance indicators'
    ]
  },
  {
    icon: Layers,
    title: 'Presets System',
    description: 'Predefined layouts for quick experimentation and learning',
    details: [
      'Common layout patterns',
      'Flexbox presets (holy grail, sidebar, etc.)',
      'Grid templates (masonry, card layouts)',
      'Custom preset creation',
      'Preset sharing functionality',
      'Community preset library',
      'Preset categorization',
      'Search and filter presets'
    ]
  }
];

const components = [
  {
    name: 'IconBase',
    description: 'Reusable SVG icon component with customizable styling',
    props: ['children', 'className'],
    features: ['SVG rendering', 'Custom styling', 'Icon library base'],
    usage: `<CopyIcon className="w-4 h-4 text-indigo-600" />`
  },
  {
    name: 'Section',
    description: 'Styled container for grouping related controls with gradient headers',
    props: ['title', 'children', 'icon', 'className'],
    features: ['Card-like container', 'Gradient header', 'Shadow effects', 'Decorative underline'],
    usage: `<Section title="Live Preview" icon={LayoutIcon}>{/* Content */}</Section>`
  },
  {
    name: 'Toggle',
    description: 'Radio-button-like component for selecting one option from a list',
    props: ['options', 'value', 'onChange'],
    features: ['Active/inactive states', 'ARIA attributes', 'Hover effects', 'Transitions'],
    usage: `<Toggle value={display} onChange={setDisplay} options={[{ label: 'Flex', value: 'flex' }]} />`
  },
  {
    name: 'Slider',
    description: 'Range input with custom-styled thumb and gradient track',
    props: ['label', 'value', 'min', 'max', 'step', 'onChange', 'suffix', 'id'],
    features: ['Custom thumb styling', 'Gradient track', 'Value display', 'Hover effects'],
    usage: `<Slider id="items-slider" label="Number of Items" value={items} min={1} max={12} />`
  },
  {
    name: 'NumberField',
    description: 'Numeric input field for precise value entry with validation',
    props: ['label', 'value', 'min', 'max', 'step', 'suffix', 'id', 'onChange'],
    features: ['Input validation', 'Suffix display', 'Monospace font', 'Accessibility'],
    usage: `<NumberField id="gap-input" label="Gap" value={gap} min={0} max={64} suffix="px" />`
  },
  {
    name: 'Select',
    description: 'Dropdown menu for selecting options with focus and hover effects',
    props: ['label', 'value', 'onChange', 'id', 'options'],
    features: ['Styled dropdown', 'ARIA attributes', 'Focus management', 'Hover states'],
    usage: `<Select id="justify-content-select" label="Justify Content" value={justifyContent} options={[{ label: 'Start', value: 'flex-start' }]} />`
  },
  {
    name: 'CodeBlock',
    description: 'Displays generated code with copy and export options',
    props: ['htmlCode', 'cssCode', 'tailwindHtml', 'onExportCodePen', 'onExportJSFiddle', 'onDownloadZip'],
    features: ['Syntax highlighting', 'Copy functionality', 'Export platforms', 'ZIP generation'],
    usage: `<CodeBlock htmlCode={htmlCode} cssCode={cssCode} onExportCodePen={exportToCodePen} />`
  }
];

const techStack = [
  { category: 'Frontend Framework', technology: 'React' },
  { category: 'Rendering', technology: 'React DOM (createRoot)' },
  { category: 'Styling', technology: 'Bootstrap CSS' },
  { category: 'UI Components', technology: 'Custom React Components' },
  { category: 'File Generation', technology: 'JSZip (dynamic)' },
  { category: 'Icons', technology: 'Custom SVG Icons' },
  { category: 'State Management', technology: 'React Hooks' },
  { category: 'Storage', technology: 'localStorage' }
];

const fileStructure = `css-labs/
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── IconBase.js      # SVG icon base component
│   │   ├── Section.js        # Container component
│   │   ├── Toggle.js         # Radio button component
│   │   ├── Slider.js         # Range input component
│   │   ├── NumberField.js    # Numeric input component
│   │   ├── Select.js         # Dropdown component
│   │   ├── CodeBlock.js      # Code display component
│   │   └── DisplayLab.js     # Main application component
│   ├── styles/
│   │   ├── custom.css        # Custom slider styles
│   │   └── main.css          # Main application styles
│   ├── utils/
│   │   ├── export.js         # Export functionality
│   │   ├── storage.js        # localStorage utilities
│   │   └── validation.js     # Input validation
│   └── assets/
│       ├── icons/            # SVG icon definitions
│       └── images/           # Static images
├── public/
│   ├── index.html            # Main HTML file
│   └── bootstrap.min.css     # Bootstrap CSS
├── package.json
└── README.md`;

const stats = [
  { label: 'Layout Types', value: 'Flex/Grid', icon: Layout },
  { label: 'Components', value: '8+', icon: Layers },
  { label: 'Export Options', value: 'Multiple', icon: DownloadIcon },
  { label: 'History States', value: '50', icon: RotateCcw },
  { label: 'Viewports', value: '4', icon: Monitor },
  { label: 'Presets', value: 'Built-in', icon: Settings2 }
];

export default function CssLabsPage() {
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
                  CSS Tool
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  Interactive Learning
                </Badge>
                <Badge className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1">
                  Developer Tool
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Live Platform
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CSS-Labs
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                CSS-Labs is a web-based tool designed to help developers learn and experiment with CSS layouts (Flexbox and Grid).
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                It provides a live preview of layout changes, a settings panel to adjust properties, and options to export code to platforms like CodePen, JSFiddle, or as a ZIP file. 
                The application uses React for the UI, Bootstrap for basic styling, and custom CSS for enhanced visuals.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a 
                    href="https://css-labs.vercel.app/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Layout className="h-4 w-4" />
                    Try CSS-Labs
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
            {['overview', 'features', 'components', 'architecture', 'usage'].map((tab) => (
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
                    <CardTitle className="text-2xl mb-4">Platform Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      CSS-Labs is a comprehensive web-based tool designed specifically for developers to learn and experiment with CSS layouts, 
                      particularly focusing on Flexbox and CSS Grid. The application provides an intuitive interface with live preview capabilities, 
                      allowing users to see their layout changes in real-time as they adjust various CSS properties.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with React for a responsive user interface and Bootstrap for baseline styling, CSS-Labs offers a complete learning environment 
                      with features like code generation, multiple export options, undo/redo functionality, and responsive preview modes. 
                      The tool is perfect for both beginners learning CSS layouts and experienced developers prototyping complex layouts.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">🎯 Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {features.slice(0, 4).map((feature, index) => (
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
                <h2 className="text-3xl font-bold mb-8">Component Architecture</h2>
                <div className="space-y-6">
                  {components.map((component, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">{component.name}</h3>
                              <p className="text-gray-600 dark:text-gray-400 mb-3">{component.description}</p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Props:</h4>
                                <div className="flex flex-wrap gap-2">
                                  {component.props.map((prop, propIndex) => (
                                    <Badge key={propIndex} variant="secondary" className="text-xs">
                                      {prop}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="space-y-2 mt-3">
                                <h4 className="font-medium text-sm">Features:</h4>
                                <ul className="space-y-1">
                                  {component.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                      <CheckCircle className="h-3 w-3 text-green-500" />
                                      <span>{feature}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="mt-3">
                                <h4 className="font-medium text-sm mb-1">Usage Example:</h4>
                                <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-xs font-mono overflow-x-auto">
                                  {component.usage}
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

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Architecture & Tech Stack</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">🛠️ Technology Stack</CardTitle>
                  </CardHeader>
                  <CardContent>
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
                    <CardTitle className="text-2xl mb-4">📁 File Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                      <pre>{fileStructure}</pre>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">🧩 Component System</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>IconBase:</strong> Reusable SVG icon foundation</li>
                        <li>• <strong>Section:</strong> Styled container components</li>
                        <li>• <strong>Toggle:</strong> Radio button selection component</li>
                        <li>• <strong>Slider:</strong> Custom range input with styling</li>
                        <li>• <strong>NumberField:</strong> Numeric input with validation</li>
                        <li>• <strong>Select:</strong> Dropdown menu component</li>
                        <li>• <strong>CodeBlock:</strong> Code display with export options</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">⚙️ Core Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>State Management:</strong> React hooks with localStorage</li>
                        <li>• <strong>History System:</strong> 50-state undo/redo stack</li>
                        <li>• <strong>Code Generation:</strong> HTML, CSS, and Tailwind output</li>
                        <li>• <strong>Export System:</strong> Multiple platform integrations</li>
                        <li>• <strong>Responsive Preview:</strong> Viewport simulation</li>
                        <li>• <strong>Accessibility:</strong> ARIA attributes and keyboard nav</li>
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
                <h2 className="text-3xl font-bold mb-8">How to Use CSS-Labs</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">🚀 Getting Started</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Open the Application</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Navigate to the CSS-Labs platform and start experimenting immediately
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Configure Layout</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Use the Quick Controls sidebar for basic settings or open Settings for advanced options
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-blue-600 dark:text-blue-400 font-bold text-xs">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium">Preview & Export</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              See live changes, test responsiveness, and export your code in multiple formats
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">💡 Pro Tips</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Use Presets</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Start with built-in layouts to understand common patterns
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Experiment Freely</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Use undo/redo to try different configurations without losing progress
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Lightbulb className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Test Responsiveness</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Switch between viewport sizes to ensure your layout works on all devices
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">🔧 Advanced Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium">Code Generation</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Clean HTML structure generation</li>
                          <li>• Optimized CSS code output</li>
                          <li>• Tailwind CSS class generation</li>
                          <li>• Syntax highlighting</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">Export Options</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• CodePen integration</li>
                          <li>• JSFiddle submission</li>
                          <li>• ZIP file download</li>
                          <li>• JSON configuration export</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">State Management</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• 50-state history stack</li>
                          <li>• localStorage persistence</li>
                          <li>• Configuration import/export</li>
                          <li>• Auto-save functionality</li>
                        </ul>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">Accessibility</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• ARIA attribute generation</li>
                          <li>• Keyboard navigation</li>
                          <li>• Screen reader support</li>
                          <li>• Focus management</li>
                        </ul>
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
                <Layout className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">CSS-Labs</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://css-labs.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Layout className="h-4 w-4" />
                Try CSS-Labs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
