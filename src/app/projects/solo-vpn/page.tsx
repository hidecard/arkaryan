'use client';

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ArrowRight, ExternalLink, Github, Play, Code, Database, Smartphone, Settings, GraduationCap, Rocket, Shield, Trophy, Users, Clock, Navigation, Search, MessageSquare, Download, Star, Heart, Share2, BookmarkPlus, Award, Briefcase, Target, TrendingUp, BookOpen, FileText, Video, Headphones, Globe, Zap, CheckCircle, AlertCircle, Info, Brain, Lock, Wifi, Server, Key, Eye, EyeOff, Activity, Cpu, HardDrive } from 'lucide-react';
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
    icon: Shield,
    title: 'Advanced Security Protocols',
    description: 'Military-grade encryption with multiple security layers and protocols for maximum privacy protection',
    details: [
      'AES-256 bit encryption for data protection',
      'Multiple VPN protocols (OpenVPN, WireGuard, IKEv2)',
      'DNS leak prevention and kill switch functionality',
      'Military-grade encryption standards',
      'Perfect Forward Secrecy (PFS)',
      'No-log policy with privacy protection',
      'Advanced authentication methods',
      'Regular security audits and updates'
    ]
  },
  {
    icon: Wifi,
    title: 'High-Performance Connectivity',
    description: 'Optimized network protocols for fast, stable connections with minimal speed loss',
    details: [
      'High-speed servers in multiple locations',
      'Unlimited bandwidth with no throttling',
      'Automatic server selection for optimal performance',
      'Load balancing across server network',
      'Protocol optimization for different network types',
      'Ping reduction and latency improvement',
      'Connection stability monitoring',
      'Fallback server options for reliability'
    ]
  },
  {
    icon: Lock,
    title: 'Data Encryption & Privacy',
    description: 'Comprehensive data protection with end-to-end encryption and privacy-focused features',
    details: [
      'End-to-end encryption for all data transmission',
      'Secure DNS resolution to prevent leaks',
      'IP address masking and location hiding',
      'Split tunneling for selective protection',
      'Encrypted DNS queries',
      'Malware and phishing protection',
      'Ad-blocking capabilities',
      'Tracker prevention system'
    ]
  },
  {
    icon: Smartphone,
    title: 'Cross-Platform Support',
    description: 'Native Java Android application with optimized performance for mobile devices',
    details: [
      'Native Java development for Android',
      'Optimized for battery efficiency',
      'Background connection management',
      'Quick connect and disconnect features',
      'System integration with Android VPN service',
      'Widget support for quick access',
      'Notification system for connection status',
      'Automatic reconnection on network changes'
    ]
  },
  {
    icon: Server,
    title: 'Global Server Network',
    description: 'Extensive server infrastructure across multiple countries for optimal routing',
    details: [
      'Server locations in 50+ countries',
      'High-bandwidth server infrastructure',
      'Load-balanced server clusters',
      'Geo-optimized routing algorithms',
      'Server health monitoring system',
      'Automatic server load distribution',
      'Redundant server configurations',
      '24/7 server maintenance and updates'
    ]
  },
  {
    icon: Activity,
    title: 'Connection Monitoring',
    description: 'Real-time connection monitoring with detailed statistics and performance metrics',
    details: [
      'Real-time connection speed monitoring',
      'Data transfer statistics and usage tracking',
      'Connection uptime and stability metrics',
      'Server response time monitoring',
      'Protocol performance comparison',
      'Bandwidth usage analytics',
      'Connection quality assessment',
      'Historical connection data and trends'
    ]
  }
];

const techStack = [
  { category: 'Development Language', technology: 'Java Native (Android)' },
  { category: 'Network Protocols', technology: 'OpenVPN, WireGuard, IKEv2' },
  { category: 'Encryption', technology: 'AES-256, ChaCha20, Poly1305' },
  { category: 'Authentication', technology: 'SSL/TLS, Certificate Management' },
  { category: 'Database', technology: 'SQLite (Local Storage)' },
  { category: 'Networking', technology: 'Java Netty, Socket Programming' },
  { category: 'Security Libraries', technology: 'Bouncy Castle, Conscrypt' },
  { category: 'System Integration', technology: 'Android VPN Service API' },
  { category: 'Background Services', technology: 'Android Services & Foreground Services' },
  { category: 'UI Framework', technology: 'Android Native Views & Material Design' }
];

const securityFeatures = [
  {
    category: 'Encryption',
    features: [
      'AES-256 bit encryption for all data',
      'Multiple encryption protocols support',
      'Perfect Forward Secrecy (PFS)',
      'RSA 4096 bit key exchange',
      'SHA-256 hash algorithms'
    ]
  },
  {
    category: 'Privacy Protection',
    features: [
      'Strict no-log policy',
      'DNS leak prevention',
      'IPv6 leak protection',
      'WebRTC leak prevention',
      'Kill switch functionality',
      'Anonymous payment options'
    ]
  },
  {
    category: 'Network Security',
    features: [
      'Secure DNS resolution',
      'Malware protection',
      'Phishing protection',
      'Ad-blocking capabilities',
      'Tracker prevention',
      'Firewall integration'
    ]
  }
];

const projectStructure = `solo-vpn/
├── src/
│   ├── main/
│   │   ├── java/com/solovpn/
│   │   │   ├── activities/         # App activities and screens
│   │   │   ├── services/           # Background VPN service
│   │   │   ├── utils/              # Utility classes and helpers
│   │   │   ├── models/             # Data models and entities
│   │   │   ├── network/            # Network protocols and VPN logic
│   │   │   ├── security/           # Encryption and security features
│   │   │   └── ui/                 # UI components and views
│   │   ├── res/                    # Android resources
│   │   │   ├── layout/             # XML layout files
│   │   │   ├── values/             # Strings, colors, dimensions
│   │   │   ├── drawable/           # Icons and images
│   │   │   └── xml/                # Configuration files
│   │   └── AndroidManifest.xml     # App manifest and permissions
├── gradle/                         # Gradle build configuration
├── app/                           # Application-level configuration
├── build.gradle                   # Project build script
├── settings.gradle                # Gradle settings
└── README.md`;

const stats = [
  { label: 'Server Locations', value: '50+', icon: Globe },
  { label: 'Security Protocols', value: '5+', icon: Shield },
  { label: 'Encryption Level', value: '256-bit', icon: Lock },
  { label: 'Connection Speed', value: '1Gbps+', icon: Wifi },
  { label: 'Platform Support', value: 'Android', icon: Smartphone },
  { label: 'Uptime', value: '99.9%', icon: Activity }
];

export default function SoloVPNPage() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-red-900/20 dark:via-gray-900 dark:to-orange-900/20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 dark:bg-red-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 dark:bg-orange-900 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-200 dark:bg-yellow-900 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
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
                  Security App
                </Badge>
                <Badge className="bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 px-3 py-1">
                  Native Android
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 px-3 py-1">
                  High Performance
                </Badge>
                <Badge className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1">
                  Not on Play Store
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Solo VPN
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Java Native VPN application focusing on secure network protocols, data encryption, and high-performance connectivity.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-3xl leading-relaxed">
                Advanced VPN solution built with native Java for Android, featuring military-grade encryption, multiple security protocols, 
                and optimized performance for secure and private internet browsing. Comprehensive security features with global server network 
                and real-time connection monitoring.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white"
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
            {['overview', 'features', 'technology', 'security', 'architecture'].map((tab) => (
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
                    <CardTitle className="text-2xl mb-4">Project Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Solo VPN is a high-performance VPN application developed natively in Java for Android devices. 
                      The application focuses on providing enterprise-grade security protocols, military-grade encryption, 
                      and optimized network performance for secure and private internet access.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      Built with native Java development to ensure maximum performance and battery efficiency, the app features 
                      multiple VPN protocols, global server infrastructure, and comprehensive security monitoring. While not currently 
                      available on the Play Store, the development version demonstrates advanced VPN technology and security implementation.
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
                          <div className={`w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center flex-shrink-0`}>
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
                <h2 className="text-3xl font-bold mb-8">Detailed Features</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {features.map((feature, index) => (
                    <AnimatedCard key={index} delay={index * 100}>
                      <Card className="h-full hover:shadow-lg transition-all duration-300">
                        <CardHeader>
                          <div className={`w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4`}>
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
                    <CardTitle className="text-2xl mb-4">Technical Highlights</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-medium">Native Development</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Java Native for Android optimization</li>
                          <li>• Android VPN Service API integration</li>
                          <li>• Background services for persistent connections</li>
                          <li>• Material Design UI components</li>
                        </ul>
                      </div>
                      <div className="space-y-3">
                        <h4 className="font-medium">Network & Security</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Multiple VPN protocol support</li>
                          <li>• Advanced encryption libraries</li>
                          <li>• Custom network stack implementation</li>
                          <li>• Real-time connection monitoring</li>
                        </ul>
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
                <h2 className="text-3xl font-bold mb-8">🔐 Security Features</h2>
                <div className="space-y-8">
                  {securityFeatures.map((category, index) => (
                    <Card key={index}>
                      <CardHeader>
                        <CardTitle className="text-xl mb-2">{category.category}</CardTitle>
                        <CardDescription>Advanced security features for comprehensive protection</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {category.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                              <Shield className="h-5 w-5 text-red-600 dark:text-red-400" />
                              <span className="text-sm font-medium">{feature}</span>
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
                        <li>• <strong>Activities</strong> - App screens and navigation</li>
                        <li>• <strong>Services</strong> - Background VPN service</li>
                        <li>• <strong>Network</strong> - VPN protocols and logic</li>
                        <li>• <strong>Security</strong> - Encryption and authentication</li>
                        <li>• <strong>Utils</strong> - Helper functions</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl mb-4">Android Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>VPN Service</strong> - System-level integration</li>
                        <li>• <strong>Permissions</strong> - Network and system access</li>
                        <li>• <strong>Notifications</strong> - Connection status alerts</li>
                        <li>• <strong>Background Mode</strong> - Persistent connections</li>
                        <li>• <strong>Battery Optimization</strong> - Efficient resource usage</li>
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
                          <li>• Core VPN functionality implemented</li>
                          <li>• Multiple security protocols integrated</li>
                          <li>• Native Android VPN service working</li>
                          <li>• Encryption and security features complete</li>
                          <li>• Server connectivity established</li>
                          <li>• UI/UX design implemented</li>
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-medium">Future Plans</h4>
                        <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                          <li>• Play Store submission preparation</li>
                          <li>• Additional server locations</li>
                          <li>• Advanced security features</li>
                          <li>• Multi-platform expansion (iOS, Desktop)</li>
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
              <div className="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">SV</span>
              </div>
              <span className="font-medium">Solo VPN</span>
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
