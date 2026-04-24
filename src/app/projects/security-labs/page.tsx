'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Package, Layers, Cpu, MousePointer, Palette, Eye, Focus, Database as DatabaseIcon, Globe2, FileCode, Terminal, Braces, Hash, ChevronRight, Sparkles, Wand2, Lock, Bug, QrCode, Map, ShieldCheck, Sword, Crosshair, Key, Fingerprint, AlertTriangle, Cpu as CpuIcon, Network, School, Medal, Crown } from 'lucide-react';
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
    icon: Database,
    title: 'SQL Injection Lab',
    description: 'Interactive lab demonstrating various SQL Injection techniques and mitigation strategies with real-time attack simulation',
    details: [
      'Union-based SQL injection attacks',
      'Boolean-based blind SQL injection',
      'Error-based SQL injection exploitation',
      'Time-based delayed SQL injection',
      'Real-time database response simulation',
      'Attack payload examples and explanations',
      'Defense strategies: input validation, parameterized queries',
      'Web application firewall implementation',
      'Real-world attack case studies',
      'Least privilege principle demonstration'
    ]
  },
  {
    icon: Globe,
    title: 'CORS Misconfiguration Lab',
    description: 'Comprehensive exploration of Cross-Origin Resource Sharing vulnerabilities and attack scenarios',
    details: [
      'Safe vs unsafe CORS configurations',
      'Wildcard CORS policy vulnerabilities',
      'Simple data theft attacks',
      'Stealing data with credentials',
      'Preflight request bypass techniques',
      'Attack scenario simulations',
      'Defense guide with best practices',
      'Real-world breach examples',
      'Implementation examples for Node.js, Nginx, Apache',
      'CORS security checklist'
    ]
  },
  {
    icon: Map,
    title: 'Cybersecurity Roadmap',
    description: 'Comprehensive step-by-step learning path from foundational to advanced cybersecurity topics',
    details: [
      'Web application security fundamentals',
      'Network security protocols and tools',
      'Cryptography basics and advanced concepts',
      'Social engineering techniques and prevention',
      'Penetration testing methodologies',
      'Incident response and forensics',
      'Cloud security best practices',
      'Difficulty level progression system',
      'Prerequisites and skill requirements',
      'Curated learning resources (articles, labs, courses, videos)'
    ]
  },
  {
    icon: Award,
    title: 'Certification System',
    description: 'Attractive and functional certification system with QR verification and shareable credentials',
    details: [
      'QR code verification for authenticity',
      'LinkedIn-friendly shareable certificates',
      'Custom certificate ID generation',
      'Bronze, Silver, Gold achievement levels',
      'Performance-based certification criteria',
      'Professional credential design',
      'Career advancement benefits for learners',
      'Employer verification system',
      'Digital badge integration',
      'Portfolio-ready certification display'
    ]
  },
  {
    icon: ShieldCheck,
    title: 'Additional Security Labs',
    description: 'Extensive suite of interactive labs covering diverse cybersecurity topics and attack vectors',
    details: [
      'Clickjacking attack simulation',
      'Cross-Site Scripting (XSS) exploitation',
      'Command injection vulnerability labs',
      'Phishing simulation and detection',
      'JWT token tampering exercises',
      'Cryptography practical applications',
      'Networking security fundamentals',
      'Programming security basics',
      'Hands-on practice environments',
      'Real-world scenario simulations'
    ]
  }
];

const techStack = [
  { category: 'Framework', technology: 'Next.js' },
  { category: 'Styling', technology: 'Tailwind CSS' },
  { category: 'UI Components', technology: 'shadcn/ui' },
  { category: 'Database & ORM', technology: 'Prisma + SQLite' },
  { category: 'Language', technology: 'TypeScript' },
  { category: 'Build Tooling', technology: 'Vite (Next.js integrated)' },
  { category: 'Deployment', technology: 'Vercel' },
  { category: 'Security', technology: 'Content Security Policy' }
];

const learningPath = [
  {
    level: 'Foundation',
    topics: ['Web App Security Basics', 'Network Security Fundamentals', 'Cryptography Introduction'],
    difficulty: 'Beginner',
    duration: '2-3 months',
    icon: BookOpen
  },
  {
    level: 'Intermediate',
    topics: ['Penetration Testing', 'Social Engineering', 'Incident Response'],
    difficulty: 'Intermediate',
    duration: '4-6 months',
    icon: Shield
  },
  {
    level: 'Advanced',
    topics: ['Cloud Security', 'Advanced Cryptography', 'Security Architecture'],
    difficulty: 'Advanced',
    duration: '6-12 months',
    icon: Crown
  }
];

const certificationLevels = [
  {
    level: 'Bronze',
    requirements: ['Complete foundation labs', 'Basic security concepts', 'Initial assessment'],
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300',
    icon: Medal
  },
  {
    level: 'Silver',
    requirements: ['Intermediate labs completion', 'Practical skills demonstration', 'Security analysis'],
    color: 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300',
    icon: Award
  },
  {
    level: 'Gold',
    requirements: ['Advanced mastery', 'Real-world scenarios', 'Expert-level knowledge'],
    color: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300',
    icon: Trophy
  }
];

const projectStructure = `security-labs/
├── src/
│   ├── app/                    # Next.js app router
│   │   ├── home/              # Home page
│   │   ├── labs/              # Security labs
│   │   │   ├── sql-injection/
│   │   │   ├── cors/
│   │   │   ├── xss/
│   │   │   └── more-labs/
│   │   ├── roadmap/           # Learning roadmap
│   │   ├── certification/     # Certification system
│   │   └── dashboard/         # User dashboard
│   ├── components/            # React components
│   │   ├── ui/               # shadcn/ui components
│   │   ├── labs/             # Lab-specific components
│   │   └── common/           # Shared components
│   ├── lib/                   # Utility functions
│   │   ├── prisma.ts         # Prisma client
│   │   ├── auth.ts           # Authentication
│   │   └── security.ts       # Security utilities
│   └── styles/               # Global styles
├── prisma/
│   ├── schema.prisma         # Database schema
│   └── migrations/           # Database migrations
├── public/
│   ├── images/               # Static images
│   └── icons/                # App icons
├── docs/                     # Documentation
├── tests/                    # Test files
├── package.json
├── next.config.js
└── README.md`;

const stats = [
  { label: 'Interactive Labs', value: '10+', icon: Shield },
  { label: 'Learning Levels', value: '3', icon: Trophy },
  { label: 'Certifications', value: '3 Levels', icon: Award },
  { label: 'Security Topics', value: '15+', icon: Lock },
  { label: 'Hands-on Practice', value: '100%', icon: Target },
  { label: 'Career Benefits', value: 'Huge', icon: Briefcase }
];

export default function SecurityLabsPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-red-900/20 dark:via-gray-900 dark:to-blue-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 dark:bg-red-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1">
                  Security Education
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1">
                  Interactive Learning
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  Hands-on Labs
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Live Platform
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
                Security Labs Web Platform
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Security Labs is a web-based interactive learning platform designed to teach practical cybersecurity concepts through hands-on labs and curated resources.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                It offers an immersive environment where users can experiment with real-world security vulnerabilities and understand attack and defense techniques. 
                The platform features interactive labs, a comprehensive cybersecurity roadmap, and an attractive certification system with QR verification.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white"
                  asChild
                >
                  <a 
                    href="https://cyber-sec-lab.vercel.app/home" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Shield className="h-4 w-4" />
                    Try Security Labs
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400">
                  Live Platform
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
                  <stat.icon className="h-6 w-6 mx-auto mb-2 text-red-600 dark:text-red-400" />
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
            {['overview', 'features', 'roadmap', 'certification', 'technology'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`capitalize font-medium transition-all duration-300 border-b-2 pb-2 whitespace-nowrap ${
                  activeTab === tab
                    ? 'text-red-600 dark:text-red-400 border-red-600 dark:border-red-400'
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
                      Security Labs Web Platform is a comprehensive educational platform designed to bridge the gap between theoretical cybersecurity knowledge 
                      and practical, hands-on experience. Built with modern web technologies, the platform provides an interactive environment where learners 
                      can safely experiment with real-world security vulnerabilities in a controlled setting.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      The platform features a structured learning approach with interactive labs covering SQL injection, CORS misconfigurations, XSS, 
                      and many other security topics. Each lab provides detailed explanations, attack simulations, defense strategies, and real-world 
                      examples to ensure comprehensive understanding. The certification system offers verifiable credentials that can significantly 
                      boost career opportunities in the cybersecurity field.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">🎯 Key Features</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {features.slice(0, 3).map((feature, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <feature.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
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
                <h2 className="text-3xl font-bold mb-8">Comprehensive Feature Set</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                            <feature.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                          </div>
                          <CardTitle className="text-xl">{feature.title}</CardTitle>
                          <CardDescription>{feature.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {feature.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
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

          {/* Roadmap Tab */}
          {activeTab === 'roadmap' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Cybersecurity Learning Roadmap</h2>
                <div className="space-y-6">
                  {learningPath.map((level, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <level.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center gap-3 mb-3">
                                <h3 className="font-semibold text-lg">{level.level}</h3>
                                <Badge variant="secondary">{level.difficulty}</Badge>
                                <Badge variant="outline">{level.duration}</Badge>
                              </div>
                              <div className="space-y-2">
                                <h4 className="font-medium">Topics Covered:</h4>
                                <div className="grid md:grid-cols-3 gap-2">
                                  {level.topics.map((topic, topicIndex) => (
                                    <div key={topicIndex} className="flex items-center gap-2 p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                      <CheckCircle className="h-4 w-4 text-green-500" />
                                      <span className="text-sm">{topic}</span>
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

                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">📚 Learning Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-medium">Content Types</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Interactive articles and tutorials</li>
                          <li>• Hands-on lab exercises</li>
                          <li>• Video demonstrations</li>
                          <li>• Real-world case studies</li>
                          <li>• Practice quizzes and assessments</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Skill Development</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Practical attack techniques</li>
                          <li>• Defense strategies implementation</li>
                          <li>• Security tool usage</li>
                          <li>• Vulnerability assessment</li>
                          <li>• Security best practices</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}

          {/* Certification Tab */}
          {activeTab === 'certification' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">Certification System</h2>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl mb-4">🏆 Professional Certification Levels</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {certificationLevels.map((cert, index) => (
                        <AnimatedCard key={index} delay={index * 100}>
                          <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                            <div className={`w-12 h-12 ${cert.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <cert.icon className="h-6 w-6" />
                            </div>
                            <div className="flex-grow">
                              <h3 className="font-semibold text-lg mb-2">{cert.level} Level</h3>
                              <div className="space-y-2">
                                <h4 className="font-medium text-sm">Requirements:</h4>
                                <ul className="space-y-1">
                                  {cert.requirements.map((req, reqIndex) => (
                                    <li key={reqIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                      <CheckCircle className="h-3 w-3 text-green-500" />
                                      <span>{req}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </AnimatedCard>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">✨ Certification Features</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <div className="flex items-center gap-3">
                          <QrCode className="h-5 w-5 text-blue-600" />
                          <span>QR code verification for authenticity</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Share2 className="h-5 w-5 text-green-600" />
                          <span>LinkedIn-friendly shareable certificates</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Hash className="h-5 w-5 text-purple-600" />
                          <span>Custom certificate ID generation</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Briefcase className="h-5 w-5 text-orange-600" />
                          <span>Huge career benefits for learners</span>
                        </div>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">🎯 Career Advancement</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <p className="text-gray-600 dark:text-gray-400">
                          Professional certifications that significantly boost career opportunities in cybersecurity:
                        </p>
                        <ul className="space-y-2">
                          <li>• Verifiable credentials for employers</li>
                          <li>• Portfolio-ready certification display</li>
                          <li>• Industry-recognized achievement levels</li>
                          <li>• Competitive advantage in job market</li>
                          <li>• Skill validation and proof of expertise</li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🛠️ Technology Stack</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {techStack.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
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
                    <CardTitle className="text-2xl mb-4">Project Architecture</CardTitle>
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
                      <CardTitle className="text-xl mb-4">Frontend Architecture</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Next.js app router for modern routing</li>
                        <li>• TypeScript for type safety</li>
                        <li>• Tailwind CSS for responsive styling</li>
                        <li>• shadcn/ui for accessible components</li>
                        <li>• Vite-powered build optimization</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">Backend & Data</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Prisma ORM for database operations</li>
                        <li>• SQLite for local development</li>
                        <li>• Server-side rendering with Next.js</li>
                        <li>• API routes for lab interactions</li>
                        <li>• Content Security Policy implementation</li>
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
              <div className="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center">
                <Shield className="h-4 w-4 text-white" />
              </div>
              <span className="font-medium">Security Labs</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://cyber-sec-lab.vercel.app/home" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <Shield className="h-4 w-4" />
                Try Security Labs
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
