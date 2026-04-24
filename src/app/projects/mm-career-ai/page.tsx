'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain } from 'lucide-react';
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
    icon: Target,
    title: 'AI Career Assessment & Matching',
    description: 'Interactive form with AI-powered job matching and comprehensive career guides',
    details: [
      'Skills and interests input with suggested tags',
      'AI-generated career guide with match score (0-100%)',
      'Job summary, salary range, and market demand analysis',
      'Required experience level and skill requirements',
      'Soft skills, interview tips, and potential companies',
      'Recommended certifications and mentorship advice',
      'Long-term career goal planning',
      'LocalStorage persistence for returning users'
    ]
  },
  {
    icon: Navigation,
    title: 'Step-by-Step Career Roadmap',
    description: 'AI-generated multi-stage roadmap with detailed learning paths',
    details: [
      'Stage title, description, estimated time, and difficulty levels',
      'Skills and tools to acquire for each stage',
      'Prerequisites, project ideas, and success metrics',
      'Curated learning resources with external links',
      'Copy-to-clipboard support for each stage',
      'Print-friendly styling for offline reference'
    ]
  },
  {
    icon: FileText,
    title: 'AI-Powered Resume Builder',
    description: 'Form-based resume creation with AI suggestions and PDF export',
    details: [
      'Personal info (name, email, phone, location, LinkedIn, GitHub)',
      'Professional summary with AI suggestions',
      'Dynamic skills management with AI recommendations',
      'Experience, education, certifications, projects sections',
      'AI-powered wording suggestions and job-search keywords',
      'PDF export using jsPDF + html2canvas',
      'Auto-save to localStorage'
    ]
  },
  {
    icon: MessageSquare,
    title: 'AI Interview Preparation Coach',
    description: 'Tailored interview questions with AI evaluation and feedback',
    details: [
      '8-10 interview questions tailored to target job',
      'Question categories: Behavioral, Technical, Situational, General',
      'Difficulty levels, tips, and key points for each question',
      'Optional sample answers for reference',
      'User answer submission with AI evaluation',
      'Score (0-100%), feedback, and improvement tips',
      'Suggested best answers for comparison',
      'Progress tracking with answered count and average score'
    ]
  },
  {
    icon: Globe,
    title: 'Myanmar Job Opportunities',
    description: 'AI-powered search for real job openings in Myanmar market',
    details: [
      '5-8 real or representative job openings in Myanmar',
      'Complete job details: title, company, location, salary, type',
      'Full description, requirements, and benefits',
      'Source information and application URLs',
      'Contact information (email/phone)',
      'Match score based on user career guide'
    ]
  },
  {
    icon: BookOpen,
    title: 'Learning Resources Finder',
    description: 'Curated learning resources for each career path',
    details: [
      '6-8 learning resources per career path',
      'Multiple resource types: courses, tutorials, books, videos, certifications, workshops',
      'Complete metadata: platform, duration, level, price, rating, URL',
      'Direct external links for immediate learning access'
    ]
  },
  {
    icon: Users,
    title: 'AI Mentor Chatbot',
    description: 'Floating chat widget for real-time career advice and guidance',
    details: [
      'Floating chat widget (bottom-right) powered by Gemini AI',
      'Real-time career advice, interview tips, and technology guidance',
      'Streaming responses for natural chat experience',
      'Conversation history maintained within session'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Learning Roadmap & Skill Gap Analyzer',
    description: 'Comprehensive skill gap analysis with personalized learning milestones',
    details: [
      'Gap analysis between current skills and target job requirements',
      'Skill gaps grouped by level: Beginner → Intermediate → Advanced',
      'Priority classification: Essential/Recommended/Nice-to-have',
      'Estimated learning time and curated resources',
      'Milestone generation with completion tracking',
      'Visual progress bar and total duration'
    ]
  }
];

const technologies = [
  { name: 'React', category: 'Frontend', level: 95 },
  { name: 'TypeScript', category: 'Frontend', level: 90 },
  { name: 'Vite', category: 'Build Tools', level: 85 },
  { name: 'Tailwind CSS', category: 'Styling', level: 95 },
  { name: 'React Router', category: 'Frontend', level: 85 },
  { name: 'jsPDF', category: 'Libraries', level: 80 },
  { name: 'html2canvas', category: 'Libraries', level: 80 },
  { name: 'Recharts', category: 'Visualization', level: 75 },
  { name: 'Puter.js', category: 'AI Integration', level: 90 },
  { name: 'Gemini AI', category: 'AI', level: 95 }
];

const stats = [
  { label: 'AI Features', value: '14+', icon: Zap },
  { label: 'Career Paths', value: '50+', icon: Target },
  { label: 'Learning Resources', value: '1000+', icon: BookOpen },
  { label: 'Interview Questions', value: '500+', icon: MessageSquare },
  { label: 'Job Listings', value: '100+', icon: Briefcase },
  { label: 'User Languages', value: '2', icon: Globe }
];

export default function MMCareerAIPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
                  Myanmar Focus
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                MyanCareer AI — AI အလုပ်အကိုင် လမ်းညွှန် Platform
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                စွမ်းရည်နှင့် အလုပ်အကိုင် ချိတ်ဆက်ပေးသော AI လမ်းညွှန်
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                လူငယ်များအတွက် မိမိတို့၏ စွမ်းရည်များနှင့် ကိုက်ညီသော အလုပ်အကိုင်များကို ရှာဖွေပေးပြီး အသက်မွေးဝမ်းကျောင်း လမ်းပြမြေပုံ (Career Roadmap) များ ထုတ်ပေးသည့် AI စနစ်သုံး Platform တစ်ခုဖြစ်သည်။
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a 
                    href="https://mm-career-ai.vercel.app/" 
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
                      MyanCareer AI is a comprehensive AI-powered career guidance platform designed specifically for Myanmar's young professionals and job seekers. 
                      The platform leverages advanced AI technology to provide personalized career assessments, skill gap analysis, 
                      and detailed learning roadmaps tailored to individual needs.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with a focus on the Myanmar market, the platform offers full Burmese language support and integrates 
                      local job opportunities, making it an invaluable tool for career development in the region.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Key Objectives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Skill-Job Matching</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Connect user skills with suitable career opportunities</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Career Guidance</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Provide AI-powered career advice and roadmap planning</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Local Market Focus</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Specialized for Myanmar job market and opportunities</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Accessibility</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Free platform with Burmese language support</p>
                          </div>
                        </div>
                      </div>
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
                <h2 className="text-3xl font-bold mb-8">Core Features</h2>
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
                            {feature.details.slice(0, 3).map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-600 dark:text-gray-400">{detail}</span>
                              </li>
                            ))}
                            {feature.details.length > 3 && (
                              <li className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                +{feature.details.length - 3} more features
                              </li>
                            )}
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
                <h2 className="text-3xl font-bold mb-8">Technology Stack</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {technologies.map((tech, index) => (
                        <div key={tech.name} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{tech.name}</span>
                            <Badge variant="secondary">{tech.category}</Badge>
                          </div>
                          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                              style={{ 
                                width: `${tech.level}%`,
                                transitionDelay: `${index * 100}ms`
                              }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-500">{tech.level}%</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">AI Integration</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                          <Brain className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-medium">Gemini AI Model</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">gemini-3-flash-preview via Puter.js</p>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <h5 className="font-medium">AI Capabilities</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li>• Streaming chat responses</li>
                            <li>• JSON-structured responses</li>
                            <li>• Career analysis and matching</li>
                            <li>• Resume suggestions</li>
                            <li>• Interview Q&A generation</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium">Technical Details</h5>
                          <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                            <li>• No API key required</li>
                            <li>• Puter.js "User-Pays" model</li>
                            <li>• Free unlimited access</li>
                            <li>• Real-time processing</li>
                          </ul>
                        </div>
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
                <h2 className="text-3xl font-bold mb-8">How to Use</h2>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Start Career Assessment</h4>
                            <p className="text-gray-600 dark:text-gray-400">Visit the homepage and click "အခုပဲ စစ်ဆေးကြည့်မယ်" (Start Assessment)</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Enter Skills & Interests</h4>
                            <p className="text-gray-600 dark:text-gray-400">Input your skills (HTML, CSS, JavaScript, Photoshop) and interests (Web Development, AI, Mobile Apps)</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Review Career Guide</h4>
                            <p className="text-gray-600 dark:text-gray-400">Check your match score, recommended job, salary, and explore the step-by-step Career Roadmap</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-600 dark:text-blue-400 font-bold">4</span>
                          </div>
                          <div>
                            <h4 className="font-medium mb-2">Build Resume & Prepare</h4>
                            <p className="text-gray-600 dark:text-gray-400">Create your resume with AI suggestions and prepare for interviews with AI evaluation</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Data Privacy</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Local Storage Only</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">All personal data stored locally in browser (localStorage)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">No Server Data</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">No data sent to any server except AI prompts for generation</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium">Complete Privacy</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">Skills, resume, interview answers, and learning progress remain private</p>
                        </div>
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
                <h2 className="text-3xl font-bold mb-8">Architecture</h2>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Project Structure</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg font-mono text-sm">
                        <div className="space-y-2">
                          <div>mm-career-ai/</div>
                          <div>├── index.html</div>
                          <div>├── index.tsx</div>
                          <div>├── App.tsx</div>
                          <div>├── types.ts</div>
                          <div>├── components/</div>
                          <div>├── pages/</div>
                          <div>├── services/</div>
                          <div>├── public/</div>
                          <div>└── vite.config.ts</div>
                        </div>
                      </div>
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
                        <li>• React 19.2.3 with TypeScript</li>
                        <li>• Vite 6.2.0 build tool</li>
                        <li>• Tailwind CSS for styling</li>
                        <li>• React Router for navigation</li>
                        <li>• Component-based architecture</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">AI Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• Gemini AI via Puter.js</li>
                        <li>• Streaming responses</li>
                        <li>• JSON-structured outputs</li>
                        <li>• Career analysis algorithms</li>
                        <li>• Resume optimization AI</li>
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
                <span className="text-white font-bold text-xs">MC</span>
              </div>
              <span className="font-medium">MyanCareer AI</span>
            </div>
            <div className="flex items-center space-x-6">
              <a 
                href="https://mm-career-ai.vercel.app/" 
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
