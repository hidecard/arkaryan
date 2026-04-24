'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Volume2, Mic, Gamepad2, Trophy as TrophyIcon, Sparkles } from 'lucide-react';
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
    icon: BookOpen,
    title: 'Interactive Learning Modules',
    description: 'Comprehensive English learning modules with gamified experiences and interactive exercises',
    details: [
      'Alphabet learning with phonics and pronunciation',
      'Vocabulary building with visual aids and audio',
      'Grammar lessons with interactive exercises',
      'Reading comprehension with stories and articles',
      'Writing practice with guided exercises',
      'Speaking practice with pronunciation feedback',
      'Listening skills development with audio content',
      'Progress tracking with detailed analytics'
    ]
  },
  {
    icon: Gamepad2,
    title: 'Gamified Learning Experience',
    description: 'Engaging games and challenges that make learning English fun and effective',
    details: [
      'Word matching games with visual feedback',
      'Spelling bee competitions with difficulty levels',
      'Grammar racing games with time challenges',
      'Vocabulary puzzles and crosswords',
      'Story completion games with creative writing',
      'Role-playing scenarios for conversation practice',
      'Achievement system with badges and rewards',
      'Leaderboard for competitive learning'
    ]
  },
  {
    icon: Volume2,
    title: 'Audio-Visual Learning',
    description: 'Rich multimedia content including audio pronunciations and visual learning aids',
    details: [
      'Native speaker audio recordings',
      'Pronunciation practice with speech recognition',
      'Video lessons with animations and graphics',
      'Interactive flashcards with audio support',
      'Sing-along songs for vocabulary building',
      'Visual stories with text highlighting',
      'Audio books with comprehension questions',
      'Pronunciation guides with mouth movement videos'
    ]
  },
  {
    icon: TrophyIcon,
    title: 'Progress Tracking & Rewards',
    description: 'Comprehensive progress monitoring with achievement system and parental controls',
    details: [
      'Individual progress dashboards',
      'Skill assessment tests and quizzes',
      'Daily and weekly learning goals',
      'Achievement badges and certificates',
      'Parent dashboard for monitoring',
      'Performance analytics and reports',
      'Personalized learning recommendations',
      'Study streaks and motivation systems'
    ]
  },
  {
    icon: Users,
    title: 'Multi-User Support',
    description: 'Support for multiple learners with personalized profiles and learning paths',
    details: [
      'Individual user profiles and settings',
      'Age-appropriate content filtering',
      'Personalized learning paths',
      'Different difficulty levels',
      'Separate progress tracking per user',
      'Customizable learning schedules',
      'Peer learning and collaboration features',
      'Family sharing capabilities'
    ]
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Optimized for mobile devices with touch-friendly interface and offline capabilities',
    details: [
      'Responsive design for all screen sizes',
      'Touch-optimized interactions',
      'Offline mode for learning without internet',
      'Push notifications for learning reminders',
      'Gesture-based navigation',
      'Adaptive UI for different age groups',
      'Battery-optimized performance',
      'Quick access to favorite lessons'
    ]
  }
];

const techStack = [
  { category: 'Development Framework', technology: 'Flutter & Dart' },
  { category: 'UI/UX Design', technology: 'Material Design Components' },
  { category: 'Audio Processing', technology: 'Flutter Audio Plugins' },
  { category: 'Animation', technology: 'Lottie & Flutter Animations' },
  { category: 'Data Storage', technology: 'SQLite & Hive' },
  { category: 'State Management', technology: 'Provider & BLoC Pattern' },
  { category: 'Networking', technology: 'HTTP & REST APIs' },
  { category: 'Analytics', technology: 'Firebase Analytics' },
  { category: 'Push Notifications', technology: 'Firebase Cloud Messaging' },
  { category: 'Testing', technology: 'Flutter Test & Integration Tests' }
];

const learningModules = [
  {
    level: 'Beginner',
    modules: [
      'Alphabet & Phonics',
      'Basic Vocabulary (Colors, Numbers, Animals)',
      'Simple Sentences & Greetings',
      'Common Objects & Actions',
      'Family & Friends',
      'Food & Drinks',
      'Daily Routines',
      'Basic Questions & Answers'
    ]
  },
  {
    level: 'Intermediate',
    modules: [
      'Grammar Fundamentals',
      'Verb Tenses & Conjugations',
      'Sentence Structure & Composition',
      'Reading Comprehension',
      'Writing Skills Development',
      'Conversation Practice',
      'Idioms & Expressions',
      'Cultural Context & Usage'
    ]
  },
  {
    level: 'Advanced',
    modules: [
      'Complex Grammar Structures',
      'Academic Writing',
      'Business English',
      'Literature Analysis',
      'Public Speaking',
      'Debate & Discussion',
      'Creative Writing',
      'Professional Communication'
    ]
  }
];

const projectStructure = `kg-english/
├── lib/
│   ├── screens/           # App screens and pages
│   ├── widgets/           # Reusable UI components
│   ├── models/            # Data models and classes
│   ├── services/          # Business logic and APIs
│   ├── utils/             # Utility functions
│   └── constants/        # App constants and assets
├── assets/
│   ├── images/           # App images and icons
│   ├── audio/             # Audio files for lessons
│   ├── animations/        # Lottie animation files
│   └── fonts/             # Custom fonts
├── test/                 # Unit and integration tests
├── android/              # Android-specific code
├── ios/                  # iOS-specific code
├── pubspec.yaml          # Flutter dependencies
└── README.md`;

const stats = [
  { label: 'Learning Modules', value: '50+', icon: BookOpen },
  { label: 'Interactive Games', value: '30+', icon: Gamepad2 },
  { label: 'Audio Lessons', value: '100+', icon: Volume2 },
  { label: 'Achievement Badges', value: '25+', icon: TrophyIcon },
  { label: 'User Levels', value: '3', icon: TrendingUp },
  { label: 'Languages', value: '2', icon: Globe }
];

export default function KGEnglishPage() {
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
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Educational App
                </Badge>
                <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1">
                  Mobile First
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  Gamified Learning
                </Badge>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1">
                  Not on Play Store
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                KG English
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Interactive educational mobile application designed to enhance English language learning for young students through gamified experiences.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Comprehensive English learning platform with interactive modules, audio-visual content, and progress tracking designed specifically for young learners. 
                Features gamified experiences, multi-user support, and offline capabilities for effective language acquisition.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white"
                  disabled
                >
                  <Play className="h-4 w-4 mr-2" />
                  Not Available on Play Store
                </Button>
                <Badge variant="outline" className="text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400">
                  Development Version Only
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
            {['overview', 'features', 'technology', 'curriculum', 'architecture'].map((tab) => (
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
                      KG English is a comprehensive mobile educational application designed specifically for young learners to master English language skills. 
                      The application combines proven educational methodologies with modern mobile technology to create an engaging and effective learning environment.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with Flutter for cross-platform compatibility, the app features a child-friendly interface, gamified learning experiences, 
                      and comprehensive progress tracking. While not currently available on the Play Store, the development version showcases 
                      advanced features in educational technology and mobile learning design.
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
                          <div className={`w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0`}>
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
                <h2 className="text-3xl font-bold mb-8">Detailed Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className={`w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4`}>
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

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🚀 Technology Stack</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {techStack.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
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
                        <h4 className="font-medium">Mobile Development</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Flutter & Dart for cross-platform development</li>
                          <li>• Material Design components for UI</li>
                          <li>• Provider & BLoC for state management</li>
                          <li>• SQLite & Hive for local data storage</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium">Educational Features</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Audio plugins for pronunciation practice</li>
                          <li>• Lottie animations for engagement</li>
                          <li>• Firebase Analytics for progress tracking</li>
                          <li>• Push notifications for learning reminders</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}

          {/* Curriculum Tab */}
          {activeTab === 'curriculum' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">📚 Learning Curriculum</h2>
                <div className="space-y-8">
                  {learningModules.map((level, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl mb-2">{level.level} Level</CardTitle>
                        <CardDescription>Comprehensive modules for {level.level.toLowerCase()} learners</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {level.modules.map((module, moduleIndex) => (
                            <div key={moduleIndex} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <BookOpen className="h-5 w-5 text-green-600 dark:text-green-400" />
                              <span className="text-sm font-medium">{module}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Architecture Tab */}
          {activeTab === 'architecture' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🏗️ Project Architecture</h2>
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
                        <li>• <strong>Screens</strong> - App screens and navigation</li>
                        <li>• <strong>Widgets</strong> - Reusable UI components</li>
                        <li>• <strong>Models</strong> - Data models and entities</li>
                        <li>• <strong>Services</strong> - Business logic and APIs</li>
                        <li>• <strong>Utils</strong> - Helper functions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">Assets & Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Images</strong> - App icons and illustrations</li>
                        <li>• <strong>Audio</strong> - Lesson audio files</li>
                        <li>• <strong>Animations</strong> - Lottie animation files</li>
                        <li>• <strong>Fonts</strong> - Custom typography</li>
                        <li>• <strong>Tests</strong> - Unit and integration tests</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">📱 Development Status</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300">
                          Development Version
                        </Badge>
                        <span className="text-gray-600 dark:text-gray-400">Not available on Play Store</span>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Current Status</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Core features implemented and tested</li>
                          <li>• UI/UX design completed</li>
                          <li>• Audio and video content integrated</li>
                          <li>• Progress tracking system functional</li>
                          <li>• Multi-user support implemented</li>
                          <li>• Offline capabilities developed</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Future Plans</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Play Store submission preparation</li>
                          <li>• Additional learning modules</li>
                          <li>• Advanced AI features</li>
                          <li>• Multi-language support expansion</li>
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
              <div className="w-6 h-6 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">KG</span>
              </div>
              <span className="font-medium">KG English</span>
            </div>
            <div className="flex items-center space-x-6">
              <Badge variant="outline" className="text-orange-600 dark:text-orange-400 border-orange-600 dark:border-orange-400">
                Development Version Only
              </Badge>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
