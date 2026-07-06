'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Play, Github, FileText, Monitor, Lock, Printer, ShieldCheck, FileQuestion, FileSpreadsheet, ChevronLeft, DownloadCloud, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { AnimatedSection, AnimatedCard } from '@/components/shared/animated-section';

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
    icon: ShieldCheck,
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
    icon: ChevronLeft,
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
    icon: FileText,
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
  { label: 'Navigation', value: 'Multi-Question', icon: ChevronLeft },
  { label: 'Protection', value: 'Content Lock', icon: Lock }
];

export default function ExamSystemPage() {
  const [activeTab, setActiveTab] = useState('overview');

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
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                Secure Exam System — Educational Platform
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                A robust and secure online examination platform with real-time question management and content protection.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                  asChild
                >
                  <a 
                    href="https://yha-center.github.io/exam/" 
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
            {['overview', 'features', 'technology', 'architecture', 'security'].map((tab) => (
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
                      The Secure Exam System is a specialized educational platform designed to deliver online examinations with high security and reliability. 
                      It integrates Google Sheets as a dynamic backend for question management and utilizes pdf.js for high-quality document rendering.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      The platform is specifically engineered to protect educational content by preventing unauthorized copying, printing, or distribution of exam materials.
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
                            <h4 className="font-medium">Secure Content Delivery</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Protect exam materials from unauthorized access and copying</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Dynamic Question Management</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Easy updates via Google Sheets without code changes</p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">High-Quality Rendering</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Clear PDF rendering for complex exam documents</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium">Mobile Accessibility</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Fully responsive design for students on any device</p>
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
          
          {/* Add more tabs as needed... */}
        </div>
      </section>
    </div>
  );
}
