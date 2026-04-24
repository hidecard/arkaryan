'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Bot, Send, Heart as HeartIcon, User, MapPin, Image as ImageIcon, Edit, Settings2, HelpCircle, ChevronRight, UserCheck, UserPlus, Sparkles, Flame, Lock } from 'lucide-react';
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
    icon: UserPlus,
    title: 'Step-by-step Registration',
    description: 'Comprehensive user onboarding with 7-step registration process collecting all essential profile information',
    details: [
      'Nickname collection for display name',
      'Age verification with numeric input',
      'Location/address for geographic matching',
      'Photo upload with Telegram photo_id optimization',
      'Bio section for personal description',
      'Gender selection (Male/Female)',
      'Preference settings for matching targets'
    ]
  },
  {
    icon: HeartIcon,
    title: 'Discovery System',
    description: 'Tinder-style swipe interface with intuitive "Next" and "Like" buttons for profile browsing',
    details: [
      'Swipe right for Like, swipe left for Next',
      'Gender-based profile filtering',
      'Smooth card-based interface',
      'Instant feedback on interactions',
      'Profile preview with key information',
      'Photo-centric display design',
      'Quick decision-making interface',
      'Unlimited browsing capability'
    ]
  },
  {
    icon: UserCheck,
    title: 'Gender-based Matching',
    description: 'Smart matching system where Male users see Female profiles and Female users see Male profiles',
    details: [
      'Male users see Female profiles only',
      'Female users see Male profiles only',
      'Automatic gender filtering',
      'Privacy-focused matching system',
      'Clear preference settings',
      'Respectful user experience',
      'Safe dating environment',
      'Reduced unwanted interactions'
    ]
  },
  {
    icon: Sparkles,
    title: 'Match Notification',
    description: 'Instant notification system when two users mutually like each other with username revelation',
    details: [
      'Real-time match detection',
      'Instant notification delivery',
      'Username revelation system',
      'Direct chat initiation links',
      'Celebration messages for matches',
      'Match statistics tracking',
      'Success rate monitoring',
      'Encouraging user feedback'
    ]
  },
  {
    icon: Edit,
    title: 'Profile Editing',
    description: 'Complete profile management system allowing users to update any information anytime',
    details: [
      'Edit nickname, age, location anytime',
      'Update profile photo easily',
      'Modify bio description',
      'Change gender preferences',
      'Update looking for settings',
      'Real-time profile updates',
      'Data validation on edits',
      'Profile completion tracking'
    ]
  },
  {
    icon: Bot,
    title: 'Smart UI & Commands',
    description: 'Intelligent button-based interactions with pinned commands for seamless user experience',
    details: [
      'Button-based navigation',
      'Pinned command menu (/find, /edit, /help)',
      'Intuitive user interface',
      'Quick access to all features',
      'Help system integration',
      'User-friendly command structure',
      'Consistent interaction patterns',
      'Reduced learning curve'
    ]
  },
  {
    icon: Rocket,
    title: 'Scalable Architecture',
    description: 'Optimized for 100,000+ users with serverless architecture and edge database deployment',
    details: [
      'Vercel serverless functions',
      'Turso edge database distribution',
      'Auto-scaling capabilities',
      'Global CDN deployment',
      'Load balancing optimization',
      'Performance monitoring',
      'Resource usage optimization',
      'Cost-effective scaling'
    ]
  },
  {
    icon: Shield,
    title: 'Zero Storage Cost',
    description: 'Efficient system using Telegram photo_id instead of storing images, reducing infrastructure costs',
    details: [
      'Telegram photo_id utilization',
      'No image storage costs',
      'Efficient resource usage',
      'Fast image loading',
      'Reduced bandwidth usage',
      'Optimized performance',
      'Cost-effective architecture',
      'Sustainable scaling model'
    ]
  }
];

const techStack = [
  { category: 'Backend Runtime', technology: 'Node.js' },
  { category: 'Bot Framework', technology: 'Telegraf' },
  { category: 'Language', technology: 'JavaScript (ES Modules)' },
  { category: 'Database', technology: 'Turso (SQLite-compatible)' },
  { category: 'Database Driver', technology: 'LibSQL Client' },
  { category: 'Deployment', technology: 'Vercel' },
  { category: 'Functions', technology: 'Vercel Functions' },
  { category: 'API', technology: 'Telegram Bot API' },
  { category: 'Integration', technology: 'Webhook Integration' }
];

const commands = [
  {
    command: '/start',
    description: 'Begin registration process',
    usage: 'New users',
    icon: UserPlus
  },
  {
    command: '/find',
    description: 'Discover and browse profiles',
    usage: 'Registered users',
    icon: Search
  },
  {
    command: '/edit',
    description: 'Update profile information',
    usage: 'Registered users',
    icon: Edit
  },
  {
    command: '/update',
    description: 'Change gender preferences',
    usage: 'Registered users',
    icon: Settings2
  },
  {
    command: '/help',
    description: 'Show user guide and commands',
    usage: 'All users',
    icon: HelpCircle
  }
];

const securityFeatures = [
  {
    title: 'Input Validation',
    description: 'All user inputs are validated for security and data integrity',
    icon: Shield
  },
  {
    title: 'SQL Injection Protection',
    description: 'Parameterized queries prevent SQL injection attacks',
    icon: Database
  },
  {
    title: 'Webhook Security',
    description: 'Telegram webhook verification ensures secure communication',
    icon: Bot
  },
  {
    title: 'Data Privacy',
    description: 'Minimal data collection with privacy-focused design',
    icon: Lock
  }
];

const projectStructure = `mm-match/
├── api/
│   ├── bot.js              # Main Telegram bot logic
│   ├── handlers/           # Command handlers
│   ├── middleware/         # Security and validation
│   └── utils/              # Helper functions
├── lib/
│   ├── database.js         # Turso database connection
│   ├── telegram.js         # Telegram API utilities
│   └── validation.js       # Input validation
├── public/
│   └── index.html          # Landing page
├── vercel.json             # Vercel configuration
├── package.json            # Dependencies
└── README.md`;

const stats = [
  { label: 'User Capacity', value: '100K+', icon: Users },
  { label: 'Bot Commands', value: '5', icon: Bot },
  { label: 'Registration Steps', value: '7', icon: ChevronRight },
  { label: 'Database', value: 'Turso', icon: Database },
  { label: 'Platform', value: 'Telegram', icon: Send },
  { label: 'Deployment', value: 'Vercel', icon: Rocket }
];

export default function MMMatchPage() {
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
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-red-200 dark:bg-red-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                  Telegram Bot
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  Dating Platform
                </Badge>
                <Badge className="bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 px-3 py-1">
                  Live Bot
                </Badge>
                <Badge className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-3 py-1">
                  Scalable
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                MM Match - Tinder-style Dating Bot
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                A complete Telegram dating bot with swipe functionality, built with Vercel and Turso for scalable performance supporting up to 100,000 users.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                🤖 <strong>Bot Information:</strong> MM Match (@mmcupid_bot) - Tinder-style dating bot with comprehensive features including step-by-step registration, 
                gender-based matching, real-time notifications, and scalable architecture designed for high-volume usage.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-pink-600 hover:bg-pink-700 text-white"
                  asChild
                >
                  <a 
                    href="https://t.me/mmcupid_bot" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    Try Bot on Telegram
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
                <Badge variant="outline" className="text-green-600 dark:text-green-400 border-green-600 dark:border-green-400">
                  @mmcupid_bot
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
            {['overview', 'features', 'technology', 'commands', 'security'].map((tab) => (
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
                      MM Match is a comprehensive Telegram dating bot that brings Tinder-style swipe functionality to the Telegram platform. 
                      Built with modern serverless architecture and edge database technology, the bot is designed to scale up to 100,000 users 
                      while maintaining excellent performance and zero storage costs for images.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      The bot features a complete user journey from registration to matching, with intelligent gender-based filtering, 
                      real-time notifications, and a user-friendly interface that leverages Telegram's native capabilities. 
                      The architecture ensures high availability, low latency, and cost-effective scaling for large user bases.
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
                <h2 className="text-3xl font-bold mb-8">Detailed Features</h2>
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

          {/* Technology Tab */}
          {activeTab === 'technology' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🛠️ Tech Stack</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      {techStack.map((item, index) => (
                        <div key={index} className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-pink-600 rounded-full"></div>
                            <span className="font-medium text-gray-600 dark:text-gray-400">{item.category}</span>
                          </div>
                          <Badge variant="secondary">{item.technology}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">Backend Architecture</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Node.js runtime environment</li>
                        <li>• Telegraf Telegram bot framework</li>
                        <li>• Modern JavaScript ES modules</li>
                        <li>• Vercel serverless functions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">Database & Deployment</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Turso edge database (SQLite-compatible)</li>
                        <li>• LibSQL official database driver</li>
                        <li>• Global CDN distribution</li>
                        <li>• Webhook-based real-time communication</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Commands Tab */}
          {activeTab === 'commands' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🎯 Bot Commands Reference</h2>
                <div className="space-y-4">
                  {commands.map((cmd, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <cmd.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                            </div>
                            <div className="flex-grow">
                              <div className="flex items-center gap-3 mb-2">
                                <Badge variant="outline" className="font-mono">{cmd.command}</Badge>
                                <Badge variant="secondary">{cmd.usage}</Badge>
                              </div>
                              <p className="text-gray-600 dark:text-gray-400">{cmd.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">📱 User Interface & Experience</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Welcome Screen</h3>
                        <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                          🎉 MM Match မှ ကြိုဆိုပါတယ်!<br/>
                          💕 Tinder-style Dating Bot<br/>
                          အရင်းအမြစ်လွယ်ကူတဲ့ ရည်းစားရှာဖွေရေး ဘော့
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Registration Process</h3>
                        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                          <div>📋 မှတ်ပုံတင်လုပ်ရန် အဆင့်များ:</div>
                          <div>1️⃣ နာမည် (Nickname)</div>
                          <div>2️⃣ အသက် (Age)</div>
                          <div>3️⃣ နေရပ် (Address)</div>
                          <div>4️⃣ ပုံ (Photo)</div>
                          <div>5️⃣ ကိုယ်ရေးတင်ပြ (Bio)</div>
                          <div>6️⃣ လိင် (Gender)</div>
                          <div>7️⃣ ရှာနေသောလိင် (Looking For)</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <AnimatedSection delay={400}>
              <div className="space-y-8">
                <h2 className="text-3xl font-bold mb-8">🔒 Security Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {securityFeatures.map((feature, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card>
                        <CardContent className="pt-6">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                              <feature.icon className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                            </div>
                            <div>
                              <h3 className="font-semibold mb-2">{feature.title}</h3>
                              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimatedCard>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">🌟 Key Benefits</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium">For Users</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Easy to Use: Simple button-based interface</li>
                          <li>• Safe & Secure: Privacy-focused matching</li>
                          <li>• Real-time: Instant notifications</li>
                          <li>• Free to Use: No charges for basic features</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium">For Developers</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Scalable: Handles 100,000+ users</li>
                          <li>• Low Cost: Minimal infrastructure costs</li>
                          <li>• Modern Tech: Latest JavaScript and serverless</li>
                          <li>• Well Documented: Complete setup guides</li>
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
              <div className="w-6 h-6 bg-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">MM</span>
              </div>
              <span className="font-medium">MM Match</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://t.me/mmcupid_bot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-pink-600 dark:hover:text-pink-400 transition-colors"
              >
                <Send className="h-4 w-4" />
                Try Bot on Telegram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
