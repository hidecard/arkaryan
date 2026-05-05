'use client';

import { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CheckCircle, 
  Code,
  Database,
  Globe,
  Server,
  Smartphone,
  Layers,
  Zap,
  BookOpen,
  Award,
  ChevronRight,
  Clock,
  Target,
  Star,
  Palette,
  Link,
  Gamepad2,
  Briefcase,
  Cloud,
  Binary,
  FileCode,
  FileText,
  PenTool,
  Activity,
  Box,
  Apple,
  Glasses,
  HardDrive,
  Network,
  Lightbulb,
  Shield,
  Terminal,
  Workflow,
  Users,
  BarChart3,
  Coffee,
  Gem,
  Share2
} from 'lucide-react';

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

interface LearningPath {
  id: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  totalCourses: number;
  progress?: number;
  skills: string[];
  stages: {
    name: string;
    description: string;
    detailedDescription: string;
    skills: string[];
    duration: string;
    resources: number;
    projects: string[];
    topics: string[];
    outcome: string;
  }[];
}

const learningPaths: LearningPath[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Master modern web development from HTML/CSS basics to advanced React & Next.js applications.',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 12,
    skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'TypeScript'],
    stages: [
      {
        name: 'Web Fundamentals',
        description: 'Build a solid foundation with HTML5, CSS3, and responsive design principles.',
        detailedDescription: 'Master the building blocks of the web. Learn semantic HTML5 markup, CSS3 styling, modern layout techniques with Flexbox and CSS Grid, and create fully responsive designs that work on all devices. Understand accessibility standards and web performance basics.',
        skills: ['HTML5', 'CSS3', 'Flexbox', 'Grid', 'Responsive Design'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Personal Portfolio Website', 'Landing Page Clone', 'Responsive Dashboard'],
        topics: ['Semantic HTML', 'CSS Selectors & Specificity', 'Media Queries', 'Mobile-First Design', 'CSS Animations', 'Form Styling'],
        outcome: 'Create pixel-perfect, responsive web pages from Figma designs'
      },
      {
        name: 'JavaScript Mastery',
        description: 'Learn modern JavaScript (ES6+) including async programming and DOM manipulation.',
        detailedDescription: 'Deep dive into JavaScript fundamentals and modern ES6+ features. Master closures, prototypes, asynchronous programming with Promises and async/await, DOM manipulation, event handling, and working with APIs. Build interactive web applications with pure JavaScript.',
        skills: ['ES6+', 'DOM', 'Async/Await', 'Fetch API', 'JSON'],
        duration: '6 weeks',
        resources: 12,
        projects: ['To-Do List App', 'Weather Dashboard', 'Expense Tracker'],
        topics: ['Variables & Scopes', 'Arrow Functions', 'Destructuring', 'Spread/Rest Operators', 'Array Methods', 'Error Handling', 'Local Storage'],
        outcome: 'Build dynamic, interactive web applications with vanilla JavaScript'
      },
      {
        name: 'React Fundamentals',
        description: 'Build interactive UIs with React hooks, components, and state management.',
        detailedDescription: 'Learn React from the ground up. Understand component architecture, JSX, props and state, React Hooks (useState, useEffect, useContext), event handling, conditional rendering, and lists & keys. Build reusable component libraries and understand React patterns.',
        skills: ['Components', 'Hooks', 'Props', 'State', 'Events'],
        duration: '6 weeks',
        resources: 10,
        projects: ['Movie Search App', 'Shopping Cart', 'Social Media Feed'],
        topics: ['JSX Syntax', 'Functional Components', 'Class vs Function Components', 'useState & useEffect', 'useContext & useReducer', 'Custom Hooks', 'Prop Drilling Solutions'],
        outcome: 'Develop complex React applications with proper state management'
      },
      {
        name: 'Advanced React & Next.js',
        description: 'Server-side rendering, routing, API integration, and deployment.',
        detailedDescription: 'Master Next.js App Router, Server Components, Server Actions, API routes, authentication integration, database connections, caching strategies, and performance optimization. Learn to build production-ready full-stack applications with modern React patterns.',
        skills: ['Next.js', 'SSR', 'API Routes', 'Deployment', 'Performance'],
        duration: '6 weeks',
        resources: 8,
        projects: ['Full-Stack Blog Platform', 'E-commerce Frontend', 'SaaS Dashboard'],
        topics: ['App Router', 'Server Components', 'Client Components', 'Server Actions', 'Middleware', 'Image Optimization', 'Incremental Static Regeneration'],
        outcome: 'Deploy scalable, SEO-friendly production applications'
      },
      {
        name: 'TypeScript & Testing',
        description: 'Add type safety and write comprehensive tests for your applications.',
        detailedDescription: 'Write type-safe React applications with TypeScript. Master interfaces, generics, type guards, and React-specific types. Learn testing fundamentals with Jest, React Testing Library, and write unit, integration, and e2e tests. Implement CI/CD pipelines for automated testing.',
        skills: ['TypeScript', 'Jest', 'React Testing', 'Debugging'],
        duration: '4 weeks',
        resources: 6,
        projects: ['TypeScript Migration', 'Test Suite Implementation', 'Bug Fix Challenge'],
        topics: ['Type System Basics', 'Interfaces & Types', 'Generics', 'Union Types', 'Jest Setup', 'Component Testing', 'Mocking APIs', 'E2E with Playwright'],
        outcome: 'Deliver bug-free, maintainable code with confidence'
      }
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    description: 'Build robust server-side applications with Node.js, databases, and API design.',
    icon: Server,
    color: 'from-green-500 to-emerald-500',
    duration: '6-8 months',
    level: 'Intermediate',
    totalCourses: 10,
    skills: ['Node.js', 'Express', 'MongoDB', 'SQL', 'API Design'],
    stages: [
      {
        name: 'Node.js Fundamentals',
        description: 'Server-side JavaScript, modules, file system, and event loop.',
        detailedDescription: 'Master Node.js runtime environment. Understand the event loop, non-blocking I/O, module system (CommonJS & ES Modules), file system operations, streams, buffers, and process management. Build CLI tools and file processing applications.',
        skills: ['Node.js', 'NPM', 'Modules', 'FS', 'Events'],
        duration: '4 weeks',
        resources: 8,
        projects: ['File System Organizer', 'CLI Task Manager', 'Log Analyzer'],
        topics: ['Event Loop', 'EventEmitter', 'Streams & Buffers', 'Path & OS Modules', 'Process & Child Process', 'Package.json Deep Dive'],
        outcome: 'Build efficient server-side applications and command-line tools'
      },
      {
        name: 'Express.js & APIs',
        description: 'RESTful API design, middleware, routing, and error handling.',
        detailedDescription: 'Build robust RESTful APIs with Express.js. Learn middleware architecture, request/response cycle, routing patterns, error handling strategies, request validation, API versioning, documentation with Swagger/OpenAPI, and rate limiting.',
        skills: ['Express', 'REST', 'Middleware', 'Routing', 'HTTP'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Task Management API', 'E-commerce Backend', 'Blog API with Comments'],
        topics: ['Middleware Stack', 'Route Parameters', 'Query Strings', 'Error Handling Middleware', 'Request Validation', 'API Documentation', 'Rate Limiting', 'CORS Setup'],
        outcome: 'Design and implement production-ready REST APIs'
      },
      {
        name: 'Database Mastery',
        description: 'SQL and NoSQL databases, queries, relationships, and optimization.',
        detailedDescription: 'Master both SQL (PostgreSQL, MySQL) and NoSQL (MongoDB) databases. Learn schema design, complex queries, indexing strategies, transactions, connection pooling, ORMs (Prisma, Mongoose), and database optimization techniques for high-performance applications.',
        skills: ['MongoDB', 'MySQL', 'Mongoose', 'Queries', 'Indexing'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Social Network Database', 'Inventory System', 'Analytics Dashboard Backend'],
        topics: ['Schema Design', 'CRUD Operations', 'Aggregation Pipeline', 'Joins & Relationships', 'Indexes & Query Optimization', 'ACID Properties', 'Connection Pooling', 'Database Sharding'],
        outcome: 'Design scalable database architectures for any application'
      },
      {
        name: 'Authentication & Security',
        description: 'JWT, OAuth, password hashing, CORS, and security best practices.',
        detailedDescription: 'Implement secure authentication and authorization systems. Learn JWT tokens, refresh token patterns, OAuth 2.0 with Google/GitHub, password hashing with bcrypt, helmet.js for headers, input sanitization, SQL injection prevention, XSS protection, and CSRF tokens.',
        skills: ['JWT', 'OAuth', 'Bcrypt', 'Helmet', 'Security'],
        duration: '4 weeks',
        resources: 6,
        projects: ['Auth Service with JWT', 'OAuth Integration', 'Secure File Upload System'],
        topics: ['Password Hashing', 'JWT Sign & Verify', 'Refresh Tokens', 'OAuth Flows', 'Session Management', 'Helmet.js', 'Input Validation', 'Security Headers'],
        outcome: 'Build secure APIs protected against common vulnerabilities'
      },
      {
        name: 'Advanced Backend',
        description: 'Caching, WebSockets, microservices, and deployment strategies.',
        detailedDescription: 'Scale your applications with advanced techniques. Implement Redis caching, real-time communication with WebSockets and Socket.io, message queues with RabbitMQ/Bull, microservices architecture, API gateways, load balancing, and containerization with Docker for production deployment.',
        skills: ['Redis', 'WebSockets', 'Docker', 'AWS', 'Scaling'],
        duration: '5 weeks',
        resources: 8,
        projects: ['Real-time Chat Server', 'Microservices E-commerce', 'Distributed Task Queue'],
        topics: ['Redis Caching', 'Socket.io Rooms', 'Message Queues', 'Microservices Patterns', 'Service Discovery', 'Docker Compose', 'AWS ECS/Fargate', 'Load Balancing'],
        outcome: 'Deploy scalable, fault-tolerant backend systems'
      }
    ]
  },
  {
    id: 'fullstack',
    title: 'Fullstack Developer',
    description: 'Combine frontend and backend skills to build complete web applications.',
    icon: Layers,
    color: 'from-purple-500 to-pink-500',
    duration: '10-12 months',
    level: 'Advanced',
    totalCourses: 18,
    skills: ['React', 'Node.js', 'Database', 'DevOps', 'Architecture'],
    stages: [
      {
        name: 'Frontend Foundation',
        description: 'Complete frontend stack: React, Next.js, TypeScript, and Tailwind.',
        detailedDescription: 'Master the modern frontend ecosystem with React 18+, Next.js App Router, TypeScript for type safety, Tailwind CSS for rapid styling, and shadcn/ui for beautiful components. Learn state management with Zustand/Redux, form handling with React Hook Form, and data fetching with TanStack Query.',
        skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'UI/UX'],
        duration: '8 weeks',
        resources: 15,
        projects: ['SaaS Landing Page', 'Dashboard with Charts', 'Real-time Collaboration Tool'],
        topics: ['Next.js 14 App Router', 'Server/Client Components', 'TypeScript Patterns', 'Tailwind Customization', 'Component Libraries', 'State Management', 'Form Validation', 'Data Fetching Patterns'],
        outcome: 'Build professional-grade frontend applications with modern tooling'
      },
      {
        name: 'Backend Architecture',
        description: 'Node.js, Express, database design, and API development.',
        detailedDescription: 'Design scalable backend systems with Node.js and Express. Master PostgreSQL with Prisma ORM for type-safe database operations. Learn RESTful API design, authentication strategies, file handling, caching with Redis, and background job processing with Bull queues.',
        skills: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST'],
        duration: '8 weeks',
        resources: 14,
        projects: ['User Management Service', 'File Storage API', 'Notification System'],
        topics: ['Prisma Schema Design', 'Migrations & Seeding', 'Complex Queries', 'Authentication Systems', 'Authorization Patterns', 'File Uploads', 'Redis Caching', 'Background Jobs'],
        outcome: 'Architect robust backend services with modern best practices'
      },
      {
        name: 'Fullstack Integration',
        description: 'Connect frontend to backend: authentication, state management, and API calls.',
        detailedDescription: 'Seamlessly integrate frontend and backend systems. Implement NextAuth.js for authentication, tRPC for type-safe APIs, real-time features with Socket.io, payment processing with Stripe, and email services. Learn error handling, loading states, and optimistic updates for great UX.',
        skills: ['NextAuth', 'tRPC', 'API Integration', 'Forms', 'Validation'],
        duration: '6 weeks',
        resources: 10,
        projects: ['Subscription SaaS Platform', 'Marketplace Application', 'Booking System'],
        topics: ['NextAuth.js Setup', 'OAuth Providers', 'tRPC Integration', 'Stripe Payments', 'WebSocket Implementation', 'Error Boundaries', 'Optimistic UI', 'Real-time Sync'],
        outcome: 'Create seamless full-stack experiences with type-safe integrations'
      },
      {
        name: 'DevOps & Deployment',
        description: 'Docker, CI/CD, cloud deployment, and monitoring.',
        detailedDescription: 'Deploy and maintain production applications. Containerize with Docker, set up CI/CD pipelines with GitHub Actions, deploy to Vercel/AWS, configure domain and SSL, implement monitoring with Sentry, and learn logging best practices. Understand environment management and secrets handling.',
        skills: ['Docker', 'GitHub Actions', 'AWS', 'Monitoring', 'Security'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Dockerized Microservices', 'CI/CD Pipeline Setup', 'AWS Deployment'],
        topics: ['Docker & Compose', 'GitHub Actions Workflows', 'AWS ECS/Fargate', 'Vercel Edge Functions', 'Environment Variables', 'Secrets Management', 'Sentry Monitoring', 'Log Aggregation'],
        outcome: 'Deploy and maintain production-grade fullstack applications'
      },
      {
        name: 'Capstone Projects',
        description: 'Build 3 complete applications: SaaS, E-commerce, and Social Platform.',
        detailedDescription: 'Apply everything learned by building three comprehensive applications. A SaaS product with subscriptions, an e-commerce platform with payments and inventory, and a social platform with real-time features. Focus on architecture decisions, testing strategies, performance optimization, and scalable design patterns.',
        skills: ['Architecture', 'Payment', 'Real-time', 'Performance', 'Testing'],
        duration: '8 weeks',
        resources: 6,
        projects: ['SaaS Analytics Platform', 'Full E-commerce Suite', 'Social Network App'],
        topics: ['System Design', 'Database Optimization', 'Caching Strategies', 'Load Testing', 'E2E Testing', 'Stripe Integration', 'Real-time Architecture', 'Performance Monitoring'],
        outcome: 'Deliver portfolio-ready fullstack applications demonstrating professional skills'
      }
    ]
  },
  {
    id: 'mobile',
    title: 'Mobile Developer',
    description: 'Create cross-platform mobile apps with Flutter and modern mobile frameworks.',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    duration: '5-7 months',
    level: 'Beginner',
    totalCourses: 8,
    skills: ['Flutter', 'Dart', 'UI Design', 'APIs', 'Deployment'],
    stages: [
      {
        name: 'Dart Programming',
        description: 'Learn Dart language: syntax, OOP, async programming, and collections.',
        detailedDescription: 'Master Dart programming language fundamentals. Learn object-oriented programming principles, null safety, asynchronous programming with Futures and Streams, collection types, generics, and functional programming concepts. Understand the Flutter-specific features of Dart.',
        skills: ['Dart', 'OOP', 'Async', 'Collections', 'Null Safety'],
        duration: '3 weeks',
        resources: 6,
        projects: ['Console Calculator', 'Task Manager CLI', 'Data Processing Script'],
        topics: ['Variables & Types', 'Functions & Arrow Syntax', 'Classes & Objects', 'Inheritance & Mixins', 'Async/Await', 'Streams', 'Null Safety', 'Generics'],
        outcome: 'Write clean, efficient Dart code for Flutter applications'
      },
      {
        name: 'Flutter Basics',
        description: 'Widgets, layouts, state management, and navigation.',
        detailedDescription: 'Build beautiful UIs with Flutter widget system. Learn stateless and stateful widgets, layout widgets (Row, Column, Stack), navigation with Navigator 2.0, theming, and responsive design. Understand the widget lifecycle, keys, and performance optimization techniques.',
        skills: ['Widgets', 'Layouts', 'State', 'Navigation', 'Themes'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Weather App UI', 'Todo App', 'Calculator App'],
        topics: ['Widget Tree', 'BuildContext', 'setState Management', 'InheritedWidget', 'Navigation & Routing', 'Hero Animations', 'Theming', 'Responsive Layouts'],
        outcome: 'Create pixel-perfect, interactive mobile interfaces'
      },
      {
        name: 'UI/UX Design',
        description: 'Material Design, animations, custom painters, and responsive layouts.',
        detailedDescription: 'Create stunning mobile experiences with advanced UI techniques. Master Material Design 3 and Cupertino widgets, custom animations with AnimationController, gesture handling, custom painters for charts and graphics, and responsive layouts for tablets. Implement dark mode and accessibility features.',
        skills: ['Material', 'Animations', 'Custom UI', 'Responsive', 'Gestures'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Animated Onboarding', 'Custom Chart Widget', 'Gesture-based Game'],
        topics: ['Material Design 3', 'AnimationController', 'Tween Animations', 'Hero & Page Transitions', 'CustomPainter', 'GestureDetector', 'Slivers & ScrollViews', 'Accessibility'],
        outcome: 'Build visually stunning, accessible mobile applications'
      },
      {
        name: 'Backend Integration',
        description: 'HTTP requests, Firebase, local storage, and state persistence.',
        detailedDescription: 'Connect your Flutter apps to backend services. Make HTTP requests with Dio, integrate Firebase (Auth, Firestore, Storage), implement local storage with Hive/SQLite, and manage app state with Provider or Bloc pattern. Learn offline-first architecture and data synchronization.',
        skills: ['HTTP', 'Firebase', 'SQLite', 'Provider', 'Bloc'],
        duration: '5 weeks',
        resources: 10,
        projects: ['News Reader App', 'Chat Application', 'E-commerce Mobile App'],
        topics: ['HTTP & Dio', 'JSON Serialization', 'Firebase Auth', 'Cloud Firestore', 'Local Storage', 'Provider Pattern', 'Bloc Pattern', 'Offline Support'],
        outcome: 'Develop connected apps with real-time data and offline capabilities'
      },
      {
        name: 'Publishing',
        description: 'App signing, Play Store, App Store, and app analytics.',
        detailedDescription: 'Prepare and publish your apps to app stores. Learn app signing with keystores, Play Console and App Store Connect submission processes, CI/CD with Codemagic, app analytics with Firebase, crash reporting, in-app updates, and app marketing basics.',
        skills: ['Signing', 'Publishing', 'Analytics', 'CI/CD', 'Updates'],
        duration: '3 weeks',
        resources: 4,
        projects: ['Production App Release', 'CI/CD Pipeline', 'Analytics Dashboard'],
        topics: ['Keystore Management', 'Play Store Submission', 'App Store Submission', 'Codemagic CI/CD', 'Firebase Analytics', 'Crashlytics', 'In-App Updates', 'App Store Optimization'],
        outcome: 'Successfully publish and maintain apps on Google Play and App Store'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Specialist',
    description: 'Learn vulnerability assessment, network security, and incident response.',
    icon: Zap,
    color: 'from-red-500 to-rose-500',
    duration: '8-10 months',
    level: 'Intermediate',
    totalCourses: 14,
    skills: ['Networking', 'Security', 'Linux', 'Penetration Testing', 'Forensics'],
    stages: [
      {
        name: 'Networking Fundamentals',
        description: 'TCP/IP, protocols, OSI model, and network architecture (CCNA prep).',
        detailedDescription: 'Build a solid foundation in computer networking. Master TCP/IP protocol suite, OSI model layers, subnetting, routing protocols (OSPF, EIGRP), switching concepts, VLANs, network security basics, and wireless networking. Prepare for CCNA certification with hands-on lab exercises.',
        skills: ['TCP/IP', 'OSI Model', 'Routing', 'Switching', 'VLANs'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Network Design Simulation', 'Cisco Lab Configuration', 'Subnetting Calculator'],
        topics: ['OSI & TCP/IP Models', 'IP Addressing & Subnetting', 'Routing Protocols', 'Switching Concepts', 'VLAN Configuration', 'ACLs', 'NAT & PAT', 'Wireless Security'],
        outcome: 'Design and troubleshoot enterprise network infrastructures'
      },
      {
        name: 'Linux & Systems',
        description: 'Linux administration, command line, and system hardening.',
        detailedDescription: 'Master Linux system administration for security professionals. Learn command line proficiency, file system management, user permissions, service management, shell scripting, system hardening techniques, log analysis, and package management. Essential skills for any cybersecurity role.',
        skills: ['Linux', 'Bash', 'Permissions', 'Services', 'Hardening'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Automated Security Script', 'Log Analyzer', 'System Hardening Guide'],
        topics: ['Linux File System', 'User & Group Management', 'Permissions & ACLs', 'Systemd Services', 'Bash Scripting', 'Log Management', 'SSH Hardening', 'Firewall Configuration'],
        outcome: 'Administer and secure Linux systems in enterprise environments'
      },
      {
        name: 'Security Fundamentals',
        description: 'Threats, vulnerabilities, risk assessment, and security frameworks.',
        detailedDescription: 'Understand core cybersecurity concepts and frameworks. Learn the CIA triad, threat landscape analysis, vulnerability assessment, risk management methodologies, security frameworks (NIST, ISO 27001), compliance requirements (GDPR, HIPAA), and security awareness training principles.',
        skills: ['CIA Triad', 'Risk', 'Threats', 'Compliance', 'ISO 27001'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Risk Assessment Report', 'Security Policy Document', 'Awareness Training Module'],
        topics: ['Confidentiality, Integrity, Availability', 'Threat Actors', 'Attack Vectors', 'Risk Assessment', 'Security Frameworks', 'Compliance Standards', 'Business Continuity', 'Disaster Recovery'],
        outcome: 'Develop comprehensive security strategies aligned with industry standards'
      },
      {
        name: 'Penetration Testing',
        description: 'Reconnaissance, scanning, exploitation, and reporting.',
        detailedDescription: 'Learn ethical hacking techniques and penetration testing methodologies. Master information gathering, network scanning with Nmap, vulnerability scanning with Nessus, web app testing with Burp Suite, exploitation with Metasploit, password attacks, wireless testing, and professional report writing.',
        skills: ['Kali Linux', 'Metasploit', 'Nmap', 'Burp Suite', 'Reporting'],
        duration: '8 weeks',
        resources: 14,
        projects: ['Network Penetration Test', 'Web Application Assessment', 'Wireless Security Audit'],
        topics: ['Reconnaissance Techniques', 'Network Scanning', 'Vulnerability Scanning', 'Exploitation', 'Post-Exploitation', 'Web App Testing', 'Social Engineering', 'Report Writing'],
        outcome: 'Conduct authorized penetration tests and provide actionable recommendations'
      },
      {
        name: 'Incident Response',
        description: 'Detection, analysis, containment, and recovery procedures.',
        detailedDescription: 'Prepare for and respond to cybersecurity incidents. Learn incident response lifecycle, SIEM tools (Splunk, ELK), digital forensics fundamentals, malware analysis basics, threat hunting techniques, containment strategies, evidence preservation, and post-incident analysis.',
        skills: ['SIEM', 'Forensics', 'Malware', 'Response', 'Documentation'],
        duration: '6 weeks',
        resources: 10,
        projects: ['Incident Response Plan', 'SIEM Rule Development', 'Forensic Investigation'],
        topics: ['Incident Response Framework', 'Detection & Analysis', 'Containment Strategies', 'Eradication & Recovery', 'Digital Forensics', 'Memory Analysis', 'Threat Intelligence', 'Lessons Learned'],
        outcome: 'Lead incident response efforts and minimize breach impact'
      }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps Engineer',
    description: 'Master CI/CD, cloud infrastructure, containerization, and automation.',
    icon: Database,
    color: 'from-cyan-500 to-blue-600',
    duration: '7-9 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
    stages: [
      {
        name: 'Linux & Scripting',
        description: 'Advanced Linux, shell scripting, and automation basics.',
        detailedDescription: 'Master Linux systems and automation scripting. Learn advanced bash scripting, Python for DevOps, text processing with awk/sed, process management, system monitoring, log analysis, and automation with cron jobs and systemd timers. Build tools for system administration and deployment automation.',
        skills: ['Linux', 'Bash', 'Python', 'Automation', 'Cron'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Server Automation Script', 'Log Rotation Tool', 'Health Check Dashboard'],
        topics: ['Advanced Bash', 'Python Scripting', 'Regular Expressions', 'Process Management', 'Text Processing', 'Environment Variables', 'Cron & Systemd', 'Logging Best Practices'],
        outcome: 'Automate system administration tasks with robust scripts'
      },
      {
        name: 'Version Control',
        description: 'Git advanced workflows, GitHub, and collaboration.',
        detailedDescription: 'Master Git and collaborative development workflows. Learn branching strategies (Git Flow, GitHub Flow), rebasing, cherry-picking, stashing, commit signing, pull request workflows, code review practices, and GitHub Actions for CI/CD automation.',
        skills: ['Git', 'GitHub', 'Branching', 'PRs', 'Actions'],
        duration: '3 weeks',
        resources: 6,
        projects: ['Git Workflow Setup', 'Team Collaboration Guide', 'GitHub Actions Pipeline'],
        topics: ['Git Internals', 'Branching Strategies', 'Rebasing', 'Merge vs Rebase', 'Git Hooks', 'Pull Requests', 'Code Review', 'GitHub Actions Basics'],
        outcome: 'Implement enterprise-grade version control and collaboration workflows'
      },
      {
        name: 'Containerization',
        description: 'Docker, Docker Compose, images, and registries.',
        detailedDescription: 'Master container technology with Docker. Learn Dockerfile best practices, multi-stage builds, image optimization, Docker Compose for local development, container networking, volume management, private registries, and security scanning. Build efficient, secure container images for production.',
        skills: ['Docker', 'Compose', 'Images', 'Registries', 'Volumes'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Multi-service Application', 'Custom Base Image', 'Docker Security Scan'],
        topics: ['Docker Architecture', 'Dockerfile Optimization', 'Multi-stage Builds', 'Docker Compose', 'Container Networking', 'Volume Management', 'Registry Setup', 'Security Scanning'],
        outcome: 'Build and manage production-ready containerized applications'
      },
      {
        name: 'Orchestration',
        description: 'Kubernetes clusters, pods, services, and deployments.',
        detailedDescription: 'Deploy and manage container orchestration with Kubernetes. Learn cluster architecture, pod design patterns, services and networking, deployments and rolling updates, ConfigMaps and Secrets, persistent storage, RBAC, and Helm for package management. Master kubectl commands and YAML manifests.',
        skills: ['Kubernetes', 'Pods', 'Services', 'Ingress', 'Helm'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Microservices Deployment', 'Auto-scaling Setup', 'Helm Chart Development'],
        topics: ['K8s Architecture', 'Pod Lifecycle', 'Deployments & ReplicaSets', 'Services & DNS', 'Ingress Controllers', 'ConfigMaps & Secrets', 'Storage Classes', 'RBAC & Security'],
        outcome: 'Orchestrate scalable, resilient container workloads'
      },
      {
        name: 'Cloud & IaC',
        description: 'AWS services, Terraform, and infrastructure automation.',
        detailedDescription: 'Automate cloud infrastructure with Infrastructure as Code. Master Terraform for provisioning AWS resources, understand AWS core services (EC2, S3, RDS, VPC), implement immutable infrastructure patterns, use Packer for AMI creation, manage state with Terraform Cloud, and implement GitOps workflows with ArgoCD.',
        skills: ['AWS', 'Terraform', 'IaC', 'Packer', 'ArgoCD'],
        duration: '8 weeks',
        resources: 14,
        projects: ['AWS Infrastructure Stack', 'Terraform Module Library', 'GitOps Pipeline'],
        topics: ['Terraform HCL', 'AWS Core Services', 'VPC Networking', 'Auto Scaling', 'Load Balancers', 'Terraform State', 'Module Development', 'GitOps & ArgoCD'],
        outcome: 'Build and maintain cloud infrastructure with fully automated pipelines'
      }
    ]
  },
  {
    id: 'ai-ml',
    title: 'AI & ML Engineer',
    description: 'Build intelligent systems with machine learning, deep learning, and AI technologies.',
    icon: Zap,
    color: 'from-violet-500 to-fuchsia-500',
    duration: '10-12 months',
    level: 'Advanced',
    totalCourses: 16,
    skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
    stages: [
      {
        name: 'Python & Data Fundamentals',
        description: 'Master Python programming, data manipulation with Pandas, and numerical computing with NumPy.',
        detailedDescription: 'Build a strong foundation in Python for data science. Learn core Python concepts, data structures, object-oriented programming, and functional programming patterns. Master data manipulation with Pandas DataFrames, data cleaning techniques, and exploratory data analysis. Understand NumPy for numerical computing and array operations essential for ML.',
        skills: ['Python', 'Pandas', 'NumPy', 'Data Cleaning', 'EDA'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Sales Data Analyzer', 'Weather Data EDA', 'Customer Segmentation'],
        topics: ['Python Basics', 'Data Types & Structures', 'Pandas DataFrames', 'Data Cleaning', 'Missing Value Handling', 'NumPy Arrays', 'Statistical Summary', 'Data Visualization Basics'],
        outcome: 'Manipulate and analyze complex datasets with Python efficiently'
      },
      {
        name: 'Statistics & Mathematics',
        description: 'Learn probability, statistics, linear algebra, and calculus for machine learning.',
        detailedDescription: 'Master the mathematical foundations of machine learning. Learn descriptive and inferential statistics, probability distributions, hypothesis testing, and confidence intervals. Understand linear algebra concepts including vectors, matrices, eigenvalues, and matrix operations. Cover calculus basics including derivatives, gradients, and optimization concepts used in ML algorithms.',
        skills: ['Statistics', 'Probability', 'Linear Algebra', 'Calculus', 'Hypothesis Testing'],
        duration: '6 weeks',
        resources: 10,
        projects: ['A/B Testing Analysis', 'Statistical Inference Project', 'Regression Analysis'],
        topics: ['Descriptive Statistics', 'Probability Theory', 'Distributions', 'Hypothesis Testing', 'Linear Regression Math', 'Matrix Operations', 'Eigenvectors', 'Gradient Descent Math'],
        outcome: 'Apply mathematical concepts to understand and implement ML algorithms'
      },
      {
        name: 'Machine Learning Fundamentals',
        description: 'Supervised and unsupervised learning algorithms, model evaluation, and feature engineering.',
        detailedDescription: 'Master core machine learning concepts and algorithms. Learn supervised learning with linear regression, logistic regression, decision trees, random forests, SVMs, and naive bayes. Understand unsupervised learning with K-means clustering, hierarchical clustering, and PCA. Master model evaluation metrics, cross-validation, hyperparameter tuning, and feature engineering techniques.',
        skills: ['Scikit-Learn', 'Regression', 'Classification', 'Clustering', 'Model Evaluation'],
        duration: '8 weeks',
        resources: 14,
        projects: ['House Price Predictor', 'Customer Churn Prediction', 'Market Basket Analysis'],
        topics: ['Linear & Logistic Regression', 'Decision Trees', 'Random Forests', 'SVM', 'K-Means Clustering', 'PCA', 'Feature Engineering', 'Cross-Validation'],
        outcome: 'Build and evaluate machine learning models for real-world problems'
      },
      {
        name: 'Deep Learning',
        description: 'Neural networks, CNNs, RNNs, and deep learning frameworks.',
        detailedDescription: 'Dive into deep learning with neural networks. Understand artificial neurons, activation functions, backpropagation, and gradient descent optimization. Master convolutional neural networks (CNNs) for computer vision, recurrent neural networks (RNNs, LSTMs) for sequence data, and transformers for NLP. Learn to use TensorFlow and PyTorch for building deep learning models.',
        skills: ['TensorFlow', 'PyTorch', 'CNN', 'RNN', 'Transfer Learning'],
        duration: '8 weeks',
        resources: 16,
        projects: ['Image Classifier', 'Sentiment Analysis Model', 'Text Generator'],
        topics: ['Neural Network Basics', 'Backpropagation', 'CNN Architectures', 'RNN & LSTM', 'Transfer Learning', 'TensorFlow Keras', 'PyTorch Basics', 'Model Deployment'],
        outcome: 'Develop sophisticated deep learning models for complex AI applications'
      },
      {
        name: 'MLOps & Production',
        description: 'Deploy ML models, monitoring, versioning, and scaling ML systems.',
        detailedDescription: 'Learn to productionize machine learning models. Understand MLflow for experiment tracking and model versioning, Docker for containerization, cloud deployment on AWS SageMaker or GCP AI Platform. Learn model monitoring for drift detection, A/B testing for models, and building end-to-end ML pipelines. Understand data versioning with DVC and CI/CD for ML.',
        skills: ['MLOps', 'Docker', 'AWS SageMaker', 'MLflow', 'Monitoring'],
        duration: '6 weeks',
        resources: 10,
        projects: ['End-to-End ML Pipeline', 'Model Monitoring Dashboard', 'Real-time Prediction API'],
        topics: ['MLflow Tracking', 'Model Registry', 'Docker for ML', 'AWS Deployment', 'API Development', 'Model Monitoring', 'A/B Testing', 'CI/CD for ML'],
        outcome: 'Deploy and maintain production-ready machine learning systems'
      }
    ]
  },
  {
    id: 'uiux',
    title: 'UI/UX Designer',
    description: 'Create beautiful, user-centered designs and digital experiences that delight users.',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 10,
    skills: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    stages: [
      {
        name: 'Design Fundamentals',
        description: 'Color theory, typography, layout principles, and visual hierarchy.',
        detailedDescription: 'Master the core principles of visual design. Learn color theory including color wheels, harmony, psychology, and accessibility contrast ratios. Understand typography fundamentals: font families, hierarchy, spacing, and readability. Study layout principles including grid systems, alignment, balance, and white space. Learn about visual hierarchy and how to guide user attention effectively.',
        skills: ['Color Theory', 'Typography', 'Layout', 'Visual Hierarchy', 'Composition'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Color Palette Design', 'Typography Poster', 'Magazine Layout'],
        topics: ['Color Wheel & Harmony', 'Color Psychology', 'Font Pairing', 'Type Scale', 'Grid Systems', 'Alignment Principles', 'White Space Usage', 'Visual Weight'],
        outcome: 'Create visually balanced, aesthetically pleasing design compositions'
      },
      {
        name: 'User Research & Strategy',
        description: 'User interviews, personas, journey maps, and competitive analysis.',
        detailedDescription: 'Learn to understand users deeply through research. Conduct user interviews, surveys, and usability testing. Create user personas, empathy maps, and user journey maps. Perform competitive analysis and heuristic evaluations. Learn to synthesize research findings into actionable insights that drive design decisions.',
        skills: ['User Research', 'Personas', 'Journey Maps', 'Usability Testing', 'Analysis'],
        duration: '4 weeks',
        resources: 8,
        projects: ['User Interview Study', 'Persona Creation', 'Journey Map Redesign'],
        topics: ['Research Methods', 'Interview Techniques', 'Survey Design', 'Persona Creation', 'Journey Mapping', 'Empathy Maps', 'Competitive Analysis', 'Insight Synthesis'],
        outcome: 'Make data-driven design decisions based on user needs and behaviors'
      },
      {
        name: 'Wireframing & Prototyping',
        description: 'Low and high fidelity wireframes, interactive prototypes, and user flows.',
        detailedDescription: 'Bring ideas to life through wireframing and prototyping. Create low-fidelity sketches and wireframes to explore concepts quickly. Build high-fidelity mockups with attention to detail. Design interactive prototypes in Figma with smart animations and transitions. Create user flow diagrams and information architecture to structure complex applications.',
        skills: ['Figma', 'Wireframing', 'Prototyping', 'User Flows', 'Information Architecture'],
        duration: '5 weeks',
        resources: 12,
        projects: ['Mobile App Wireframes', 'Interactive Prototype', 'Website User Flows'],
        topics: ['Sketching Techniques', 'Low-Fi Wireframing', 'High-Fi Mockups', 'Figma Basics', 'Auto Layout', 'Components & Variants', 'Prototyping', 'Animations'],
        outcome: 'Transform concepts into testable, interactive design prototypes'
      },
      {
        name: 'Design Systems',
        description: 'Component libraries, style guides, and scalable design systems.',
        detailedDescription: 'Build scalable design systems for teams. Create component libraries with variants and properties. Develop comprehensive style guides covering colors, typography, spacing, and components. Learn atomic design methodology and design tokens. Understand how to document and maintain design systems for consistency across products and teams.',
        skills: ['Design Systems', 'Components', 'Style Guides', 'Documentation', 'Tokens'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Component Library', 'Style Guide Creation', 'Multi-platform Design System'],
        topics: ['Atomic Design', 'Component Structure', 'Variants & Properties', 'Design Tokens', 'Spacing Systems', 'Naming Conventions', 'Documentation', 'Handoff Process'],
        outcome: 'Create and maintain comprehensive design systems for product consistency'
      },
      {
        name: 'UX Evaluation & Iteration',
        description: 'Usability testing, analytics, accessibility, and design iteration.',
        detailedDescription: 'Validate and improve designs through testing and iteration. Conduct usability tests with real users, analyze results, and iterate on designs. Learn web accessibility standards (WCAG) and inclusive design principles. Use analytics tools to understand user behavior. Practice design critiques and learn to give and receive constructive feedback effectively.',
        skills: ['Usability Testing', 'Accessibility', 'Analytics', 'Iteration', 'A11y'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Usability Test Study', 'Accessibility Audit', 'Analytics Review'],
        topics: ['Test Planning', 'Moderated Testing', 'Unmoderated Testing', 'WCAG Guidelines', 'Screen Reader Testing', 'Google Analytics', 'Heatmaps', 'Design Iteration'],
        outcome: 'Deliver accessible, user-validated designs that meet business goals'
      }
    ]
  },
  {
    id: 'blockchain',
    title: 'Blockchain Developer',
    description: 'Build decentralized applications, smart contracts, and Web3 solutions on blockchain.',
    icon: Link,
    color: 'from-amber-500 to-orange-600',
    duration: '8-10 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js', 'DeFi'],
    stages: [
      {
        name: 'Blockchain Fundamentals',
        description: 'Distributed ledgers, consensus mechanisms, cryptography basics.',
        detailedDescription: 'Understand the foundational concepts of blockchain technology. Learn how distributed ledgers work, different consensus mechanisms (Proof of Work, Proof of Stake), block structure, and chain validation. Study cryptographic primitives including hashing, public-private key pairs, digital signatures, and Merkle trees. Explore different blockchain types and use cases.',
        skills: ['Blockchain', 'Cryptography', 'Consensus', 'Distributed Systems', 'Hashing'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Simple Blockchain Implementation', 'Hash Explorer', 'Consensus Simulator'],
        topics: ['Block Structure', 'Hash Functions', 'Public Key Cryptography', 'Consensus Algorithms', 'Mining & Staking', '51% Attack', 'Forks', 'Blockchain Types'],
        outcome: 'Understand blockchain architecture and its security implications'
      },
      {
        name: 'Ethereum & Smart Contracts',
        description: 'Solidity programming, EVM, and smart contract development.',
        detailedDescription: 'Master Ethereum development and Solidity programming. Learn the Ethereum Virtual Machine (EVM) architecture, gas and transaction mechanics, and account types. Write smart contracts in Solidity covering data types, functions, modifiers, events, inheritance, and libraries. Understand security best practices and common vulnerabilities.',
        skills: ['Solidity', 'EVM', 'Smart Contracts', 'Remix', 'Gas Optimization'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Token Contract', 'Voting System', 'Multi-sig Wallet'],
        topics: ['Solidity Syntax', 'Data Types', 'Functions & Modifiers', 'Events & Logs', 'Inheritance', 'Interfaces', 'Security Patterns', 'Gas Optimization'],
        outcome: 'Develop secure, efficient smart contracts on Ethereum'
      },
      {
        name: 'DApp Development',
        description: 'Web3 integration, frontend connection, and decentralized apps.',
        detailedDescription: 'Build full decentralized applications. Learn Web3.js and Ethers.js for blockchain interaction from web apps. Implement wallet connections with MetaMask, transaction signing, and event listening. Build frontend interfaces that interact with smart contracts. Understand IPFS for decentralized storage and The Graph for indexing blockchain data.',
        skills: ['Web3.js', 'Ethers.js', 'React', 'MetaMask', 'IPFS'],
        duration: '6 weeks',
        resources: 10,
        projects: ['NFT Marketplace Frontend', 'DeFi Dashboard', 'DAO Voting Interface'],
        topics: ['Web3.js Setup', 'Provider Connection', 'Contract Interaction', 'Event Listening', 'Transaction Handling', 'IPFS Storage', 'The Graph', 'Error Handling'],
        outcome: 'Create seamless user experiences for blockchain applications'
      },
      {
        name: 'Advanced Smart Contracts',
        description: 'DeFi protocols, NFTs, upgradeable contracts, and security.',
        detailedDescription: 'Build sophisticated blockchain solutions. Learn DeFi protocols like Uniswap, Aave, and Compound. Create ERC-20, ERC-721, and ERC-1155 tokens. Implement upgradeable contracts with proxies. Study formal verification, audit processes, and advanced security patterns. Understand flash loans, yield farming, and liquidity mining concepts.',
        skills: ['DeFi', 'ERC Standards', 'Proxies', 'Security Audits', 'Flash Loans'],
        duration: '8 weeks',
        resources: 14,
        projects: ['DEX Implementation', 'NFT Collection with Minting', 'Staking Contract'],
        topics: ['ERC-20 Tokens', 'ERC-721 NFTs', 'ERC-1155', 'Uniswap Integration', 'OpenZeppelin', 'Proxy Patterns', 'Upgradeability', 'Security Audits'],
        outcome: 'Build production-grade DeFi applications and secure smart contracts'
      },
      {
        name: 'Layer 2 & Cross-chain',
        description: 'Scaling solutions, bridges, and multi-chain development.',
        detailedDescription: 'Explore blockchain scaling and interoperability. Learn Layer 2 solutions like Polygon, Arbitrum, and Optimism. Understand rollups, sidechains, and state channels. Build cross-chain bridges and applications. Study alternative L1 blockchains like Solana, Avalanche, and Cosmos. Implement cross-chain communication patterns.',
        skills: ['Layer 2', 'Polygon', 'Cross-chain', 'Bridges', 'Rollups'],
        duration: '5 weeks',
        resources: 8,
        projects: ['L2 Token Bridge', 'Multi-chain NFT', 'Cross-chain DApp'],
        topics: ['Polygon SDK', 'Optimistic Rollups', 'ZK-Rollups', 'State Channels', 'Cross-chain Messaging', 'Chainlink CCIP', 'Solana Basics', 'Cosmos IBC'],
        outcome: 'Deploy scalable, cross-chain blockchain solutions'
      }
    ]
  },
  {
    id: 'gamedev',
    title: 'Game Developer',
    description: 'Create 2D and 3D games with Unity, Unreal Engine, and game design principles.',
    icon: Gamepad2,
    color: 'from-indigo-500 to-purple-600',
    duration: '8-10 months',
    level: 'Intermediate',
    totalCourses: 14,
    skills: ['Unity', 'C#', 'Game Design', '3D Modeling', 'Physics'],
    stages: [
      {
        name: 'Game Design Fundamentals',
        description: 'Game mechanics, level design, storytelling, and player psychology.',
        detailedDescription: 'Master the art and science of game design. Learn core game loops, reward systems, and progression mechanics. Study level design principles including pacing, difficulty curves, and environmental storytelling. Understand player psychology, motivation, and engagement patterns. Learn to create game design documents and prototype concepts quickly.',
        skills: ['Game Design', 'Level Design', 'Mechanics', 'Storytelling', 'Prototyping'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Game Design Document', 'Board Game Prototype', 'Level Layout Design'],
        topics: ['Core Loops', 'Reward Systems', 'Progression', 'Pacing', 'Difficulty Curves', 'Environmental Storytelling', 'Player Types', 'Balance'],
        outcome: 'Design engaging game experiences with compelling mechanics'
      },
      {
        name: 'Unity Fundamentals',
        description: 'Unity engine, C# scripting, game objects, and scenes.',
        detailedDescription: 'Learn game development with Unity. Understand the Unity editor interface, game object hierarchy, and component system. Master C# scripting for game logic including input handling, collision detection, and physics interactions. Learn about scenes, prefabs, animation systems, and the Unity asset pipeline. Build your first 2D and 3D games.',
        skills: ['Unity', 'C#', 'Game Objects', 'Physics', 'Animation'],
        duration: '6 weeks',
        resources: 12,
        projects: ['2D Platformer', 'Top-down Shooter', '3D Obstacle Course'],
        topics: ['Unity Interface', 'Game Objects', 'Components', 'C# Scripting', 'Input System', 'Rigidbody Physics', 'Collision Detection', 'Animation Controller'],
        outcome: 'Build functional games using Unity engine and C#'
      },
      {
        name: 'Graphics & Shaders',
        description: 'Materials, lighting, post-processing, and shader programming.',
        detailedDescription: 'Create stunning game visuals. Learn Unity\'s rendering pipeline, materials, and lighting systems. Write custom shaders with Shader Graph and HLSL. Understand post-processing effects, particle systems, and VFX graph. Study optimization techniques for mobile and console platforms. Learn about PBR materials and texture workflows.',
        skills: ['Shaders', 'Materials', 'Lighting', 'VFX', 'Optimization'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Custom Shader Pack', 'Particle Effects Set', 'Atmospheric Scene'],
        topics: ['Shader Graph', 'HLSL Basics', 'Lighting Models', 'Post-processing', 'Particle Systems', 'VFX Graph', 'LOD System', 'Occlusion Culling'],
        outcome: 'Create visually impressive, optimized game graphics'
      },
      {
        name: 'Gameplay Programming',
        description: 'AI, state machines, inventory systems, and game architecture.',
        detailedDescription: 'Build complex game systems and AI. Implement state machines for enemy AI, pathfinding with NavMesh, and behavior trees. Create inventory systems, save/load functionality, and quest systems. Learn game architecture patterns including ECS, event systems, and scriptable objects. Understand multiplayer networking basics.',
        skills: ['AI', 'State Machines', 'Inventory', 'Architecture', 'Networking'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Enemy AI System', 'RPG Inventory', 'Multiplayer Prototype'],
        topics: ['State Machines', 'Behavior Trees', 'NavMesh', 'A* Pathfinding', 'Inventory Systems', 'Save/Load', 'Events & Actions', 'Mirror Networking'],
        outcome: 'Implement sophisticated gameplay systems and AI behaviors'
      },
      {
        name: 'Game Audio & Polish',
        description: 'Sound design, music integration, UI polish, and optimization.',
        detailedDescription: 'Add the finishing touches to games. Learn audio implementation with Unity\'s audio mixer, spatial audio, and adaptive music systems. Create polished UI with animations and feedback. Study performance profiling, memory management, and build optimization. Learn about platform-specific builds, app store submission, and game marketing basics.',
        skills: ['Audio', 'UI Polish', 'Optimization', 'Profiling', 'Publishing'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Audio Implementation', 'Polished UI System', 'Performance Optimization'],
        topics: ['Audio Mixer', 'Spatial Audio', 'Adaptive Music', 'UI Animations', 'Profiler', 'Memory Management', 'Asset Bundles', 'Build Settings'],
        outcome: 'Deliver polished, performant games ready for publication'
      }
    ]
  },
  {
    id: 'product',
    title: 'Product Manager',
    description: 'Lead product strategy, roadmap planning, and cross-functional teams to deliver great products.',
    icon: Briefcase,
    color: 'from-teal-500 to-cyan-600',
    duration: '6-8 months',
    level: 'Intermediate',
    totalCourses: 10,
    skills: ['Strategy', 'Roadmapping', 'Agile', 'Analytics', 'Leadership'],
    stages: [
      {
        name: 'Product Fundamentals',
        description: 'Product lifecycle, value proposition, and market analysis.',
        detailedDescription: 'Understand the core of product management. Learn the product lifecycle from ideation to sunset. Master value proposition design, customer development, and problem-solution fit. Study market sizing, competitive analysis, and differentiation strategies. Learn to identify and validate opportunities through customer interviews and market research.',
        skills: ['Product Lifecycle', 'Value Prop', 'Market Analysis', 'Validation', 'Strategy'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Market Analysis Report', 'Value Proposition Canvas', 'Opportunity Assessment'],
        topics: ['Product Lifecycle', 'Jobs-to-be-Done', 'Value Proposition', 'TAM/SAM/SOM', 'Competitive Analysis', 'Customer Development', 'Problem Validation', 'Solution Validation'],
        outcome: 'Identify and validate product opportunities with market potential'
      },
      {
        name: 'Product Strategy & Vision',
        description: 'Product vision, strategy frameworks, and goal setting.',
        detailedDescription: 'Define compelling product direction. Create inspiring product visions and mission statements. Learn strategy frameworks including Ansoff Matrix, BCG Matrix, and Porter\'s Five Forces. Master OKRs and goal-setting for products. Understand positioning, pricing strategies, and business model design. Learn to communicate strategy to stakeholders effectively.',
        skills: ['Vision', 'Strategy', 'OKRs', 'Positioning', 'Business Models'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Product Vision Deck', 'Strategy Framework', 'OKR Implementation'],
        topics: ['Vision Statements', 'North Star Metric', 'Strategy Frameworks', 'OKRs', 'KPIs', 'Positioning', 'Pricing Models', 'Business Canvas'],
        outcome: 'Define and communicate clear product direction and goals'
      },
      {
        name: 'Execution & Roadmapping',
        description: 'Agile methodologies, sprint planning, and roadmap creation.',
        detailedDescription: 'Deliver products efficiently with agile practices. Learn Scrum and Kanban methodologies, user story writing, and acceptance criteria. Create and prioritize product backlogs. Build product roadmaps that balance short-term delivery with long-term vision. Understand estimation techniques, velocity tracking, and release planning. Learn to manage stakeholder expectations.',
        skills: ['Agile', 'Scrum', 'Roadmaps', 'Prioritization', 'Backlog'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Product Roadmap', 'Sprint Planning', 'Backlog Grooming'],
        topics: ['Scrum Framework', 'User Stories', 'Story Points', 'Prioritization', 'Roadmap Types', 'Release Planning', 'Stakeholder Management', 'Risk Management'],
        outcome: 'Execute product delivery with agile methodologies effectively'
      },
      {
        name: 'Data-Driven Product Management',
        description: 'Analytics, experimentation, metrics, and data-informed decisions.',
        detailedDescription: 'Make decisions backed by data. Learn product analytics with tools like Mixpanel, Amplitude, and Google Analytics. Design and analyze A/B tests and experiments. Define and track meaningful metrics including activation, engagement, retention, and monetization. Build dashboards and understand statistical significance. Learn data-driven prioritization frameworks.',
        skills: ['Analytics', 'A/B Testing', 'Metrics', 'SQL', 'Dashboards'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Analytics Dashboard', 'A/B Test Design', 'Funnel Analysis'],
        topics: ['Product Analytics', 'Funnel Analysis', 'Cohort Analysis', 'A/B Testing', 'Statistical Significance', 'SQL for PMs', 'North Star Framework', 'Pirate Metrics'],
        outcome: 'Drive product decisions with data and experimentation'
      },
      {
        name: 'Leadership & Communication',
        description: 'Stakeholder management, presentations, and team leadership.',
        detailedDescription: 'Lead without authority and influence outcomes. Master stakeholder management across engineering, design, marketing, and executive teams. Create compelling presentations and product demos. Learn negotiation, conflict resolution, and decision-making frameworks. Understand team dynamics, mentoring, and building product culture. Practice executive communication.',
        skills: ['Leadership', 'Communication', 'Presentations', 'Negotiation', 'Stakeholders'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Executive Presentation', 'Stakeholder Map', 'Product Demo'],
        topics: ['Influence Without Authority', 'Executive Communication', 'Stakeholder Mapping', 'Presentation Skills', 'Negotiation', 'Conflict Resolution', 'Team Building', 'Product Culture'],
        outcome: 'Lead cross-functional teams and influence product outcomes effectively'
      }
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Architect',
    description: 'Design scalable, secure cloud infrastructure across AWS, Azure, and GCP with enterprise patterns.',
    icon: Cloud,
    color: 'from-sky-500 to-blue-600',
    duration: '8-10 months',
    level: 'Advanced',
    totalCourses: 14,
    skills: ['AWS', 'Azure', 'GCP', 'Architecture', 'Security'],
    stages: [
      {
        name: 'Cloud Fundamentals',
        description: 'Cloud computing models, services, and multi-cloud basics.',
        detailedDescription: 'Build a strong foundation in cloud computing. Understand IaaS, PaaS, and SaaS models. Learn core AWS, Azure, and GCP services including compute, storage, and networking. Study cloud economics, cost optimization, and billing models. Understand shared responsibility model, cloud migration strategies, and hybrid cloud architectures.',
        skills: ['Cloud Models', 'AWS Basics', 'Azure Basics', 'GCP Basics', 'Cost Management'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Multi-cloud Comparison', 'Cost Calculator', 'Migration Plan'],
        topics: ['IaaS/PaaS/SaaS', 'AWS Core Services', 'Azure Fundamentals', 'GCP Essentials', 'Cloud Economics', 'Pricing Models', 'Migration Strategies', 'Hybrid Cloud'],
        outcome: 'Make informed cloud platform and service selections'
      },
      {
        name: 'Core Infrastructure Services',
        description: 'Compute, storage, databases, and networking in depth.',
        detailedDescription: 'Master essential cloud services across platforms. Deep dive into EC2, Lambda, and container services. Study storage options: S3, EBS, EFS, and object storage. Learn database services including RDS, DynamoDB, and managed databases. Understand VPC design, subnets, load balancers, and CDN. Learn auto-scaling, high availability, and disaster recovery patterns.',
        skills: ['Compute', 'Storage', 'Databases', 'Networking', 'Auto-scaling'],
        duration: '6 weeks',
        resources: 12,
        projects: ['3-Tier Architecture', 'Serverless App', 'Database Migration'],
        topics: ['EC2 & VMs', 'Lambda & Functions', 'Containers on Cloud', 'S3 & Storage', 'RDS & Databases', 'VPC Design', 'Load Balancing', 'Auto-scaling'],
        outcome: 'Design robust core infrastructure for any workload'
      },
      {
        name: 'Security & Compliance',
        description: 'Cloud security, IAM, encryption, and compliance frameworks.',
        detailedDescription: 'Secure cloud environments comprehensively. Master IAM policies, roles, and best practices across AWS, Azure, and GCP. Implement encryption at rest and in transit with KMS and CloudHSM. Study network security with WAF, security groups, and NACLs. Understand compliance frameworks including SOC 2, PCI DSS, HIPAA, and GDPR. Learn security monitoring with GuardDuty and Security Center.',
        skills: ['IAM', 'Encryption', 'Compliance', 'Security Monitoring', 'Auditing'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Secure VPC Setup', 'IAM Policy Audit', 'Compliance Checklist'],
        topics: ['IAM Deep Dive', 'Least Privilege', 'Encryption', 'KMS', 'Security Groups', 'WAF', 'Compliance Mapping', 'Security Monitoring'],
        outcome: 'Design secure, compliant cloud architectures'
      },
      {
        name: 'Advanced Architecture Patterns',
        description: 'Microservices, event-driven, serverless, and resilient architectures.',
        detailedDescription: 'Design sophisticated cloud-native systems. Learn microservices patterns with service mesh, API gateways, and service discovery. Implement event-driven architectures with SQS, SNS, EventBridge, and Kafka. Master serverless patterns with Lambda, Step Functions, and AppSync. Study resilience patterns: circuit breakers, bulkheads, retries, and timeouts.',
        skills: ['Microservices', 'Event-Driven', 'Serverless', 'Resilience', 'Service Mesh'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Event-Driven System', 'Microservices Platform', 'Serverless Workflow'],
        topics: ['Microservices Design', 'API Gateway', 'Event Sourcing', 'CQRS', 'SQS/SNS', 'Kafka', 'Circuit Breakers', 'Chaos Engineering'],
        outcome: 'Architect scalable, resilient, modern distributed systems'
      },
      {
        name: 'Observability & Operations',
        description: 'Monitoring, logging, tracing, and SRE practices for cloud.',
        detailedDescription: 'Operate cloud systems at scale with observability. Implement monitoring with CloudWatch, Azure Monitor, and Cloud Monitoring. Set up centralized logging and log analysis. Learn distributed tracing for microservices. Study SRE practices including SLOs, error budgets, and incident response. Automate operations with infrastructure as code and GitOps.',
        skills: ['Monitoring', 'Logging', 'Tracing', 'SRE', 'Automation'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Observability Stack', 'SLO Dashboard', 'Incident Response Runbook'],
        topics: ['CloudWatch', 'Azure Monitor', 'Logging Architecture', 'OpenTelemetry', 'SLOs', 'Error Budgets', 'Incident Response', 'Runbooks'],
        outcome: 'Maintain high availability with comprehensive observability'
      }
    ]
  },
  {
    id: 'data-science',
    title: 'Data Scientist',
    description: 'Extract insights from data using statistics, machine learning, and visualization to drive business decisions.',
    icon: Binary,
    color: 'from-emerald-500 to-teal-600',
    duration: '10-12 months',
    level: 'Advanced',
    totalCourses: 16,
    skills: ['Python', 'SQL', 'Statistics', 'ML', 'Tableau', 'Big Data'],
    stages: [
      {
        name: 'Data Analysis Foundations',
        description: 'Python, SQL, data manipulation, and exploratory data analysis fundamentals.',
        detailedDescription: 'Master the tools of data analysis. Learn Python for data science with NumPy, Pandas, and Matplotlib. Write complex SQL queries for data extraction, transformation, and aggregation. Perform exploratory data analysis (EDA) to understand datasets through statistical summaries and visualizations. Clean messy real-world data.',
        skills: ['Python', 'Pandas', 'SQL', 'EDA', 'Data Cleaning'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Sales Performance Dashboard', 'Customer Churn EDA', 'SQL Data Pipeline'],
        topics: ['Python Basics', 'NumPy Arrays', 'Pandas DataFrames', 'Data Types', 'Missing Data', 'SQL Joins', 'Window Functions', 'Statistical Summary', 'Correlation Analysis'],
        outcome: 'Analyze complex datasets and extract actionable insights'
      },
      {
        name: 'Statistics & Probability',
        description: 'Descriptive/inferential statistics, hypothesis testing, and probability distributions.',
        detailedDescription: 'Build statistical foundations for data science. Learn descriptive statistics, probability theory, distributions (normal, binomial, poisson), hypothesis testing (t-tests, chi-square, ANOVA), confidence intervals, and Bayesian statistics. Understand sampling methods and experimental design.',
        skills: ['Statistics', 'Probability', 'Hypothesis Testing', 'Bayesian', 'Sampling'],
        duration: '6 weeks',
        resources: 10,
        projects: ['A/B Test Analysis', 'Survey Data Analysis', 'Quality Control Study'],
        topics: ['Mean/Median/Mode', 'Standard Deviation', 'Probability Rules', 'Normal Distribution', 'Central Limit Theorem', 'Hypothesis Testing', 'P-values', 'Confidence Intervals', 'Bayesian Inference'],
        outcome: 'Apply rigorous statistical methods to validate hypotheses'
      },
      {
        name: 'Data Visualization',
        description: 'Create compelling visualizations with Python libraries and BI tools.',
        detailedDescription: 'Communicate data insights through visualizations. Master Matplotlib, Seaborn, and Plotly for Python visualizations. Learn Tableau or Power BI for business intelligence dashboards. Understand chart selection, color theory, dashboard design, and storytelling with data. Create interactive visualizations.',
        skills: ['Matplotlib', 'Seaborn', 'Tableau', 'Dashboards', 'Storytelling'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Executive Dashboard', 'Geographic Data Viz', 'Real-time Monitoring Dashboard'],
        topics: ['Chart Types', 'Color Theory', 'Matplotlib', 'Seaborn', 'Plotly', 'Tableau Basics', 'Calculated Fields', 'Dashboard Design', 'Interactive Filters'],
        outcome: 'Create compelling data stories through effective visualizations'
      },
      {
        name: 'Machine Learning for Data Science',
        description: 'Predictive modeling, supervised/unsupervised learning, and model evaluation.',
        detailedDescription: 'Build predictive models with machine learning. Learn regression, classification, clustering algorithms. Understand feature engineering, model selection, cross-validation, hyperparameter tuning, and ensemble methods. Work with scikit-learn pipelines and model deployment basics.',
        skills: ['Scikit-Learn', 'Regression', 'Classification', 'Clustering', 'Feature Engineering'],
        duration: '8 weeks',
        resources: 14,
        projects: ['Customer Segmentation', 'Sales Forecasting', 'Fraud Detection Model'],
        topics: ['Linear Regression', 'Logistic Regression', 'Decision Trees', 'Random Forest', 'K-Means', 'PCA', 'Feature Scaling', 'Model Evaluation', 'ROC Curves'],
        outcome: 'Build and deploy machine learning models for prediction'
      },
      {
        name: 'Big Data Technologies',
        description: 'Work with large-scale data using Spark, Hadoop, and cloud data warehouses.',
        detailedDescription: 'Scale data processing to big data volumes. Learn Apache Spark for distributed computing, Hadoop ecosystem basics, and cloud data warehouses (Snowflake, BigQuery, Redshift). Understand ETL/ELT pipelines, data lakes, and modern data stack architecture. Work with streaming data.',
        skills: ['Spark', 'Hadoop', 'Snowflake', 'ETL', 'Data Lakes'],
        duration: '6 weeks',
        resources: 10,
        projects: ['Big Data ETL Pipeline', 'Streaming Analytics', 'Data Lake Architecture'],
        topics: ['Spark RDDs', 'Spark SQL', 'PySpark', 'HDFS', 'MapReduce', 'Data Warehouses', 'ETL Tools', 'Data Governance', 'Streaming with Kafka'],
        outcome: 'Process and analyze data at scale with big data technologies'
      },
      {
        name: 'Advanced Analytics',
        description: 'Time series analysis, NLP, and deep learning for complex data problems.',
        detailedDescription: 'Tackle advanced data science problems. Learn time series forecasting (ARIMA, Prophet, LSTM), natural language processing basics (sentiment analysis, topic modeling), recommendation systems, and deep learning for structured data. Understand MLOps for data science.',
        skills: ['Time Series', 'NLP', 'Deep Learning', 'Forecasting', 'MLOps'],
        duration: '7 weeks',
        resources: 12,
        projects: ['Demand Forecasting', 'Sentiment Analysis', 'Recommendation Engine'],
        topics: ['Time Series Decomposition', 'ARIMA Models', 'Prophet', 'Text Preprocessing', 'TF-IDF', 'Word Embeddings', 'LSTM Networks', 'Recommendation Algorithms'],
        outcome: 'Solve complex analytical problems with advanced techniques'
      }
    ]
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer',
    description: 'Ensure software quality through manual and automated testing, test planning, and quality assurance processes.',
    icon: Shield,
    color: 'from-orange-500 to-amber-600',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 10,
    skills: ['Selenium', 'Cypress', 'API Testing', 'Test Planning', 'Automation'],
    stages: [
      {
        name: 'Testing Fundamentals',
        description: 'Software testing principles, types, and quality assurance basics.',
        detailedDescription: 'Understand the foundation of software quality. Learn testing principles, test levels (unit, integration, system, acceptance), test types (functional, non-functional), and QA processes. Understand the software development lifecycle and where testing fits. Learn to write test cases and bug reports.',
        skills: ['Testing Theory', 'Test Cases', 'Bug Reports', 'SDLC', 'QA Process'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Test Plan Creation', 'Bug Report Analysis', 'Test Case Library'],
        topics: ['Testing Principles', 'Black Box Testing', 'White Box Testing', 'Unit Testing', 'Integration Testing', 'System Testing', 'Regression Testing', 'Smoke Testing', 'Bug Lifecycle'],
        outcome: 'Design comprehensive test strategies and document issues effectively'
      },
      {
        name: 'Manual Testing',
        description: 'Functional testing, exploratory testing, and usability testing techniques.',
        detailedDescription: 'Master manual testing approaches. Learn functional testing techniques, exploratory testing methods, usability testing principles, and cross-browser testing. Understand test environment setup, test data management, and boundary value analysis. Practice equivalence partitioning and decision tables.',
        skills: ['Functional Testing', 'Exploratory Testing', 'Usability', 'Cross-browser', 'Test Data'],
        duration: '4 weeks',
        resources: 8,
        projects: ['E-commerce Testing', 'Mobile App Testing', 'Usability Study'],
        topics: ['Functional Testing', 'Exploratory Testing', 'Usability Testing', 'Cross-browser Testing', 'Boundary Value Analysis', 'Equivalence Partitioning', 'Decision Tables', 'State Transition', 'Test Data Management'],
        outcome: 'Execute thorough manual testing to identify software defects'
      },
      {
        name: 'Test Automation - Web',
        description: 'Automate web testing with Selenium, Cypress, and Playwright.',
        detailedDescription: 'Build robust web test automation. Learn Selenium WebDriver with Python or Java, Cypress for modern web apps, or Playwright for cross-browser testing. Understand Page Object Model, test frameworks (Pytest, JUnit), waits and synchronization, and handling dynamic elements. Build maintainable test suites.',
        skills: ['Selenium', 'Cypress', 'Playwright', 'Page Object Model', 'Pytest'],
        duration: '6 weeks',
        resources: 12,
        projects: ['E2E Test Suite', 'Cross-browser Automation', 'CI/CD Integration'],
        topics: ['Selenium Basics', 'WebDriver', 'Locators', 'Waits', 'Cypress Basics', 'Playwright', 'Page Object Model', 'Test Frameworks', 'Parallel Execution'],
        outcome: 'Create reliable automated test suites for web applications'
      },
      {
        name: 'API Testing',
        description: 'Test REST and GraphQL APIs with Postman, REST Assured, and automation.',
        detailedDescription: 'Master API testing strategies. Learn REST API testing with Postman, automation with REST Assured or Requests library. Understand GraphQL testing, authentication mechanisms, status codes, and response validation. Learn contract testing with Pact and performance testing APIs.',
        skills: ['Postman', 'REST Assured', 'API Automation', 'GraphQL', 'Contract Testing'],
        duration: '5 weeks',
        resources: 10,
        projects: ['API Test Suite', 'Contract Testing Setup', 'API Performance Tests'],
        topics: ['HTTP Methods', 'Status Codes', 'JSON/XML', 'Postman Collections', 'Authentication', 'REST Assured', 'GraphQL Queries', 'Contract Testing', 'API Performance'],
        outcome: 'Validate API functionality, reliability, and performance'
      },
      {
        name: 'Performance & Security Testing',
        description: 'Load testing, stress testing, and security vulnerability assessment.',
        detailedDescription: 'Ensure application performance and security. Learn load testing with JMeter or k6, performance metrics analysis, and bottleneck identification. Understand security testing basics including OWASP Top 10, vulnerability scanning, and penetration testing fundamentals for QA.',
        skills: ['JMeter', 'Load Testing', 'Performance', 'OWASP', 'Security Testing'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Load Test Execution', 'Performance Report', 'Security Scan'],
        topics: ['Load Testing', 'Stress Testing', 'JMeter', 'k6', 'Performance Metrics', 'OWASP Top 10', 'SQL Injection', 'XSS Testing', 'Vulnerability Scanning'],
        outcome: 'Validate application performance under load and identify security risks'
      }
    ]
  },
  {
    id: 'technical-writer',
    title: 'Technical Writer',
    description: 'Create clear, comprehensive documentation for software products, APIs, and technical processes.',
    icon: PenTool,
    color: 'from-cyan-500 to-sky-600',
    duration: '4-6 months',
    level: 'Beginner',
    totalCourses: 8,
    skills: ['Documentation', 'Markdown', 'API Docs', 'DITA', 'Docs-as-Code'],
    stages: [
      {
        name: 'Technical Writing Basics',
        description: 'Writing principles, audience analysis, and clear communication.',
        detailedDescription: 'Master the fundamentals of technical communication. Learn principles of clear writing, audience analysis, information architecture, and content strategy. Understand style guides (Chicago, Microsoft, Google), grammar for technical writing, and plain language standards. Practice writing procedures and explanations.',
        skills: ['Writing', 'Style Guides', 'Plain Language', 'Information Architecture', 'Editing'],
        duration: '4 weeks',
        resources: 6,
        projects: ['User Guide Chapter', 'Procedure Documentation', 'Style Guide Application'],
        topics: ['Audience Analysis', 'Plain Language', 'Active Voice', 'Style Guides', 'Grammar', 'Punctuation', 'Information Hierarchy', 'Chunking', 'Writing for Scanning'],
        outcome: 'Write clear, user-focused technical documentation'
      },
      {
        name: 'Documentation Tools',
        description: 'Markdown, XML, authoring tools, and version control for docs.',
        detailedDescription: 'Work with modern documentation tools. Master Markdown and reStructuredText, static site generators (Docusaurus, MkDocs, Hugo), and XML/DITA for structured authoring. Learn docs-as-code workflows with Git, and API documentation tools like Swagger/OpenAPI. Understand content management systems.',
        skills: ['Markdown', 'Docusaurus', 'Git', 'DITA', 'CMS'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Docs Site Setup', 'API Documentation', 'Version-controlled Docs'],
        topics: ['Markdown', 'reStructuredText', 'Docusaurus', 'MkDocs', 'Git for Writers', 'DITA Basics', 'CCMS', 'OpenAPI', 'Content Reuse'],
        outcome: 'Create and maintain documentation using industry-standard tools'
      },
      {
        name: 'API Documentation',
        description: 'Document REST APIs, code samples, and developer portals.',
        detailedDescription: 'Specialize in API documentation. Learn to document REST APIs with OpenAPI/Swagger, write code samples in multiple languages, create SDK documentation, and build developer portals. Understand API reference docs, tutorials, and quickstart guides. Learn to test APIs for accurate documentation.',
        skills: ['API Docs', 'OpenAPI', 'Code Samples', 'Developer Portals', 'Swagger'],
        duration: '4 weeks',
        resources: 8,
        projects: ['API Reference Guide', 'Code Sample Library', 'Developer Quickstart'],
        topics: ['REST API Basics', 'OpenAPI Spec', 'Endpoint Documentation', 'Request/Response', 'Authentication', 'Code Samples', 'Error Documentation', 'SDK Docs', 'Developer Experience'],
        outcome: 'Create comprehensive API documentation that developers love'
      },
      {
        name: 'Visual Communication',
        description: 'Diagrams, screenshots, videos, and visual aids for documentation.',
        detailedDescription: 'Enhance documentation with visuals. Learn to create architecture diagrams, flowcharts, wireframes, and UI mockups. Master screenshot annotation, GIF creation for tutorials, and basic video production. Understand accessibility for visuals and alt text writing.',
        skills: ['Diagrams', 'Screenshots', 'Videos', 'Figma', 'Accessibility'],
        duration: '3 weeks',
        resources: 6,
        projects: ['Architecture Diagrams', 'Video Tutorial Series', 'Visual Style Guide'],
        topics: ['UML Diagrams', 'Flowcharts', 'Figma Basics', 'Screenshot Tools', 'Annotation', 'GIF Creation', 'Video Editing', 'Accessibility', 'Alt Text'],
        outcome: 'Create visual aids that clarify complex concepts'
      },
      {
        name: 'Documentation Strategy',
        description: 'Content strategy, metrics, and documentation team processes.',
        detailedDescription: 'Lead documentation initiatives. Learn content strategy, documentation workflows, review processes, and publication pipelines. Understand documentation metrics, user feedback collection, and continuous improvement. Learn to work with cross-functional teams and advocate for documentation.',
        skills: ['Content Strategy', 'Metrics', 'Workflows', 'Cross-functional', 'Leadership'],
        duration: '4 weeks',
        resources: 6,
        projects: ['Content Audit', 'Documentation Roadmap', 'Metrics Dashboard'],
        topics: ['Content Strategy', 'Information Architecture', 'User Feedback', 'Analytics', 'Doc Workflows', 'Review Process', 'Release Management', 'Localization', 'DocOps'],
        outcome: 'Build and scale documentation programs strategically'
      }
    ]
  },
  {
    id: 'sre',
    title: 'Site Reliability Engineer',
    description: 'Build and maintain reliable, scalable systems through automation, monitoring, and SRE practices.',
    icon: Activity,
    color: 'from-rose-500 to-pink-600',
    duration: '8-10 months',
    level: 'Advanced',
    totalCourses: 14,
    skills: ['SRE', 'Monitoring', 'Automation', 'Incident Response', 'SLAs'],
    stages: [
      {
        name: 'SRE Fundamentals',
        description: 'SRE principles, SLIs, SLOs, error budgets, and reliability concepts.',
        detailedDescription: 'Understand the foundation of Site Reliability Engineering. Learn SRE principles from Google, the difference between DevOps and SRE, Service Level Indicators (SLIs), Service Level Objectives (SLOs), Service Level Agreements (SLAs), and error budgets. Understand toil reduction and automation philosophy.',
        skills: ['SRE Principles', 'SLOs', 'SLIs', 'Error Budgets', 'Toil Reduction'],
        duration: '4 weeks',
        resources: 8,
        projects: ['SLO Definition Workshop', 'Error Budget Policy', 'Toil Analysis'],
        topics: ['SRE Culture', 'SRE vs DevOps', 'SLIs', 'SLOs', 'SLAs', 'Error Budgets', 'Toil', 'Automation', 'Reliability'],
        outcome: 'Define and implement reliability targets and error budgets'
      },
      {
        name: 'Monitoring & Observability',
        description: 'Metrics, logs, traces, and observability platforms.',
        detailedDescription: 'Build comprehensive observability systems. Learn monitoring with Prometheus and Grafana, logging with ELK or Loki, distributed tracing with Jaeger or Zipkin. Understand the three pillars of observability, building SLO dashboards, alert management, and reducing alert fatigue.',
        skills: ['Prometheus', 'Grafana', 'ELK', 'Tracing', 'Alerting'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Observability Stack', 'SLO Dashboard', 'Alert Configuration'],
        topics: ['Metrics', 'Logs', 'Traces', 'PromQL', 'Grafana Dashboards', 'Elasticsearch', 'Jaeger', 'Alertmanager', 'On-call'],
        outcome: 'Implement observability that enables rapid issue detection'
      },
      {
        name: 'Incident Management',
        description: 'Incident response, postmortems, and chaos engineering.',
        detailedDescription: 'Master incident response practices. Learn incident command system, communication during incidents, severity classification, and escalation procedures. Write effective postmortems with blameless culture. Implement chaos engineering with tools like Chaos Monkey to proactively find weaknesses.',
        skills: ['Incident Response', 'Postmortems', 'Chaos Engineering', 'Runbooks', 'Communication'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Incident Response Plan', 'Postmortem Template', 'Chaos Experiment'],
        topics: ['Incident Command', 'Severity Levels', 'Communication', 'Postmortems', 'Blameless Culture', 'Runbooks', 'Chaos Engineering', 'Game Days', 'RCA'],
        outcome: 'Lead effective incident response and build resilient systems'
      },
      {
        name: 'Reliability Automation',
        description: 'Infrastructure automation, configuration management, and self-healing systems.',
        detailedDescription: 'Automate for reliability at scale. Learn configuration management with Ansible, infrastructure provisioning with Terraform, and self-healing systems. Implement auto-remediation, automated rollbacks, and canary deployments. Build reliability guardrails into CI/CD pipelines.',
        skills: ['Ansible', 'Terraform', 'Self-healing', 'Auto-remediation', 'CI/CD'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Self-healing Infrastructure', 'Auto-remediation Playbooks', 'Canary Pipeline'],
        topics: ['Ansible', 'Terraform', 'Self-healing', 'Health Checks', 'Auto-scaling', 'Circuit Breakers', 'Feature Flags', 'Blue/Green Deploy', 'Automated Rollback'],
        outcome: 'Build automated systems that recover without human intervention'
      },
      {
        name: 'Performance & Capacity',
        description: 'Capacity planning, performance tuning, and scalability engineering.',
        detailedDescription: 'Ensure systems scale reliably. Learn capacity planning methodologies, load testing at scale, performance profiling, and bottleneck analysis. Understand queueing theory, database scaling, caching strategies, and CDN optimization. Plan for traffic spikes and seasonal variations.',
        skills: ['Capacity Planning', 'Load Testing', 'Performance', 'Scaling', 'Queueing Theory'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Capacity Plan', 'Load Test Analysis', 'Performance Optimization'],
        topics: ['Capacity Planning', 'Load Testing', 'Performance Profiling', 'Bottleneck Analysis', 'Queueing Theory', 'Database Scaling', 'Caching', 'CDN', 'Traffic Patterns'],
        outcome: 'Design systems that handle growth without degradation'
      }
    ]
  },
  {
    id: 'android',
    title: 'Android Developer',
    description: 'Build native Android applications with Kotlin, Jetpack Compose, and modern Android architecture.',
    icon: Box,
    color: 'from-green-600 to-emerald-700',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 12,
    skills: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Room', 'Coroutines'],
    stages: [
      {
        name: 'Kotlin Fundamentals',
        description: 'Kotlin programming, OOP, functional programming, and Android-specific features.',
        detailedDescription: 'Master Kotlin for Android development. Learn Kotlin syntax, null safety, data classes, sealed classes, extension functions, and functional programming. Understand coroutines for asynchronous programming, flows for reactive streams, and Kotlin-specific Android APIs.',
        skills: ['Kotlin', 'OOP', 'FP', 'Coroutines', 'Null Safety'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Kotlin Practice App', 'Coroutines Demo', 'Functional Utils Library'],
        topics: ['Kotlin Syntax', 'Variables & Types', 'Functions', 'Classes', 'Inheritance', 'Interfaces', 'Null Safety', 'Coroutines', 'Flows'],
        outcome: 'Write idiomatic Kotlin code for Android applications'
      },
      {
        name: 'Android Basics',
        description: 'Activities, Fragments, Views, Intents, and Android architecture components.',
        detailedDescription: 'Build foundational Android knowledge. Learn Android components (Activities, Services, BroadcastReceivers, ContentProviders), Intents for navigation, View system and XML layouts, Fragment lifecycle, and Android architecture components (ViewModel, LiveData). Understand Android lifecycle and configuration changes.',
        skills: ['Activities', 'Fragments', 'Views', 'ViewModel', 'LiveData'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Todo App', 'Note Taking App', 'Weather App'],
        topics: ['Activities', 'Intents', 'Fragments', 'Views', 'XML Layouts', 'ViewModel', 'LiveData', 'Lifecycle', 'Resources'],
        outcome: 'Build functional Android apps with core components'
      },
      {
        name: 'Jetpack Compose',
        description: 'Modern declarative UI with Compose, state management, and animations.',
        detailedDescription: 'Build modern UIs with Jetpack Compose. Learn declarative UI patterns, Compose layouts (Column, Row, Box), modifiers, state management (remember, mutableStateOf), ViewModel integration, navigation with Compose, and Material Design 3. Create animations and custom layouts.',
        skills: ['Compose', 'Declarative UI', 'State', 'Navigation', 'Animations'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Compose UI Kit', 'Animated App', 'Material Design App'],
        topics: ['Compose Basics', 'Layouts', 'Modifiers', 'State', 'Side Effects', 'ViewModel', 'Navigation', 'Material 3', 'Animations'],
        outcome: 'Create modern, beautiful Android UIs with Compose'
      },
      {
        name: 'Data & Architecture',
        description: 'Room database, Retrofit networking, Dependency Injection, and Clean Architecture.',
        detailedDescription: 'Implement robust app architecture. Learn Room for local database, Retrofit for networking, JSON parsing with Moshi/Gson, Dependency Injection with Hilt, and Clean Architecture patterns (Repository pattern, Use Cases). Understand data layer, domain layer, and presentation layer separation.',
        skills: ['Room', 'Retrofit', 'Hilt', 'Clean Architecture', 'Repository'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Offline-first App', 'REST API Client', 'Multi-module App'],
        topics: ['Room', 'SQL in Android', 'Retrofit', 'REST APIs', 'JSON Parsing', 'Hilt', 'DI', 'Clean Architecture', 'Repository Pattern'],
        outcome: 'Build maintainable apps with solid architecture'
      },
      {
        name: 'Advanced Android',
        description: 'Background work, notifications, sensors, and Play Store publishing.',
        detailedDescription: 'Master advanced Android features. Learn WorkManager for background tasks, Notifications with channels, foreground services, location and sensors, camera integration, and security best practices. Understand app signing, Play Console, app bundles, and release management.',
        skills: ['WorkManager', 'Notifications', 'Location', 'Security', 'Publishing'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Background Sync App', 'Location Tracker', 'Play Store Release'],
        topics: ['WorkManager', 'Services', 'Notifications', 'Location', 'Sensors', 'Camera', 'Security', 'Keystore', 'Play Console'],
        outcome: 'Deploy production-ready Android apps to Google Play'
      }
    ]
  },
  {
    id: 'ios',
    title: 'iOS Developer',
    description: 'Create native iOS applications with Swift, SwiftUI, and modern Apple frameworks.',
    icon: Apple,
    color: 'from-gray-600 to-slate-700',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 12,
    skills: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'Combine'],
    stages: [
      {
        name: 'Swift Programming',
        description: 'Swift language basics, OOP, protocols, and functional programming.',
        detailedDescription: 'Master the Swift programming language. Learn Swift syntax, constants and variables, optionals, collections, control flow, functions, closures, enums, structs, classes, protocols, extensions, and generics. Understand memory management with ARC, error handling, and Swift Package Manager.',
        skills: ['Swift', 'OOP', 'Protocols', 'Closures', 'Generics'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Swift CLI Tool', 'Algorithm Implementations', 'Swift Package'],
        topics: ['Swift Basics', 'Optionals', 'Collections', 'Control Flow', 'Functions', 'Closures', 'Structs', 'Classes', 'Protocols', 'Extensions', 'Generics', 'ARC'],
        outcome: 'Write idiomatic Swift code for iOS applications'
      },
      {
        name: 'UIKit Fundamentals',
        description: 'Storyboards, ViewControllers, Auto Layout, and Interface Builder.',
        detailedDescription: 'Build iOS apps with UIKit. Learn ViewControllers, NavigationController, TabBarController, storyboards, Auto Layout constraints, stack views, table views, collection views, and delegates. Understand app lifecycle, scene delegate, and view controller lifecycle.',
        skills: ['UIKit', 'Storyboards', 'Auto Layout', 'ViewControllers', 'Delegates'],
        duration: '5 weeks',
        resources: 10,
        projects: ['UIKit Todo App', 'Recipe App', 'Photo Gallery'],
        topics: ['ViewControllers', 'Storyboards', 'Segues', 'Auto Layout', 'Constraints', 'Stack Views', 'Table Views', 'Collection Views', 'Delegates', 'Protocols'],
        outcome: 'Create traditional iOS interfaces with UIKit'
      },
      {
        name: 'SwiftUI',
        description: 'Declarative UI, state management, and modern Apple UI framework.',
        detailedDescription: 'Build modern UIs with SwiftUI. Learn declarative syntax, views and modifiers, state management (@State, @Binding, @ObservedObject, @StateObject), data flow, navigation, lists, forms, and alerts. Understand Combine framework integration and SwiftUI animations.',
        skills: ['SwiftUI', 'Declarative UI', 'State', 'Combine', 'Animations'],
        duration: '5 weeks',
        resources: 10,
        projects: ['SwiftUI Weather', 'Notes App', 'Animations Showcase'],
        topics: ['SwiftUI Basics', 'Views', 'Modifiers', '@State', '@Binding', '@ObservedObject', 'Lists', 'Navigation', 'Forms', 'Combine', 'Animations'],
        outcome: 'Build modern iOS interfaces with SwiftUI'
      },
      {
        name: 'Data Persistence & Networking',
        description: 'Core Data, networking with URLSession, Codable, and CloudKit.',
        detailedDescription: 'Manage data in iOS apps. Learn Core Data for object persistence, UserDefaults for preferences, FileManager for documents, networking with URLSession, JSON parsing with Codable, REST API integration, and CloudKit for cloud synchronization. Understand background fetching.',
        skills: ['Core Data', 'URLSession', 'Codable', 'CloudKit', 'Persistence'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Core Data Journal', 'API Client', 'Cloud Sync App'],
        topics: ['Core Data', 'Entities', 'Relationships', 'Fetch Requests', 'UserDefaults', 'FileManager', 'URLSession', 'Codable', 'CloudKit'],
        outcome: 'Implement robust data persistence and networking'
      },
      {
        name: 'Advanced iOS',
        description: 'Push notifications, Core Location, sensors, and App Store submission.',
        detailedDescription: 'Master advanced iOS features. Learn push notifications with APNs, local notifications, Core Location for GPS, MapKit, camera and photos integration, Core Motion for sensors, Face ID/Touch ID authentication, app extensions, widgets, and App Store Connect submission process.',
        skills: ['Push Notifications', 'Location', 'MapKit', 'Biometrics', 'Publishing'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Location-based App', 'Push Notification Demo', 'App Store Release'],
        topics: ['APNs', 'Local Notifications', 'Core Location', 'MapKit', 'Camera', 'Photos', 'Core Motion', 'Biometrics', 'Widgets', 'App Store Connect'],
        outcome: 'Ship feature-rich iOS apps to the App Store'
      }
    ]
  },
  {
    id: 'ar-vr',
    title: 'AR/VR Developer',
    description: 'Create immersive augmented and virtual reality experiences with Unity, Unreal, and WebXR.',
    icon: Glasses,
    color: 'from-violet-600 to-purple-700',
    duration: '8-10 months',
    level: 'Intermediate',
    totalCourses: 14,
    skills: ['Unity', 'C#', 'ARKit', 'ARCore', '3D Modeling', 'WebXR'],
    stages: [
      {
        name: 'AR/VR Fundamentals',
        description: 'XR concepts, spatial computing, hardware, and user experience principles.',
        detailedDescription: 'Understand extended reality fundamentals. Learn differences between AR, VR, and MR, spatial computing concepts, XR hardware landscape (Quest, HoloLens, Magic Leap), human factors in XR, motion sickness prevention, and XR UX design principles. Study successful XR applications.',
        skills: ['XR Concepts', 'Spatial Computing', 'UX', 'Hardware', 'Design'],
        duration: '3 weeks',
        resources: 6,
        projects: ['XR App Analysis', 'UX Case Study', 'Hardware Comparison'],
        topics: ['AR vs VR vs MR', 'Spatial Computing', 'XR Hardware', 'Field of View', 'Frame Rate', 'Latency', 'Motion Sickness', 'XR UX', 'Interaction Design'],
        outcome: 'Design comfortable, engaging XR experiences'
      },
      {
        name: '3D Graphics Basics',
        description: '3D modeling, textures, shaders, and graphics fundamentals for XR.',
        detailedDescription: 'Master 3D graphics for immersive experiences. Learn 3D coordinate systems, meshes, vertices, polygons, UV mapping, textures, materials, shaders, lighting, and rendering pipelines. Use Blender for modeling and understand optimization for real-time rendering.',
        skills: ['3D Modeling', 'Blender', 'Textures', 'Shaders', 'Optimization'],
        duration: '5 weeks',
        resources: 10,
        projects: ['3D Model Creation', 'Textured Environment', 'Optimized Assets'],
        topics: ['3D Coordinates', 'Meshes', 'Polygons', 'UV Mapping', 'Textures', 'Materials', 'PBR', 'Shaders', 'Lighting', 'Rendering', 'Optimization'],
        outcome: 'Create optimized 3D assets for XR applications'
      },
      {
        name: 'Unity for XR',
        description: 'Unity XR development with AR Foundation, VR frameworks, and interaction.',
        detailedDescription: 'Build XR apps with Unity. Learn Unity XR plugins (AR Foundation, Oculus Integration, OpenXR), camera setup for AR, tracking spaces, plane detection, anchor management, hand tracking, controller input, gaze-based interaction, and teleportation. Optimize for mobile XR.',
        skills: ['Unity', 'AR Foundation', 'OpenXR', 'Hand Tracking', 'Optimization'],
        duration: '6 weeks',
        resources: 12,
        projects: ['AR Portal Experience', 'VR Training App', 'Hand Tracking Demo'],
        topics: ['AR Foundation', 'ARKit', 'ARCore', 'OpenXR', 'Oculus SDK', 'Plane Detection', 'Anchors', 'Hand Tracking', 'Controller Input', 'Gaze Interaction'],
        outcome: 'Develop cross-platform XR applications with Unity'
      },
      {
        name: 'Spatial Interactions',
        description: 'Hand gestures, eye tracking, voice input, and haptic feedback.',
        detailedDescription: 'Implement natural XR interactions. Learn hand gesture recognition, eye tracking for gaze input, voice commands with speech recognition, haptic feedback programming, spatial audio, object manipulation (grab, scale, rotate), UI in 3D space, and multi-user interactions.',
        skills: ['Gestures', 'Eye Tracking', 'Voice', 'Haptics', 'Spatial Audio'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Gesture-controlled Game', 'Voice UI App', 'Social VR Space'],
        topics: ['Hand Gestures', 'Gesture Recognition', 'Eye Tracking', 'Voice Commands', 'Speech Recognition', 'Haptics', 'Spatial Audio', '3D UI', 'Raycasting'],
        outcome: 'Create intuitive, natural interactions for XR environments'
      },
      {
        name: 'WebXR & Deployment',
        description: 'Web-based XR with WebXR API, browser support, and app publishing.',
        detailedDescription: 'Deploy XR experiences across platforms. Learn WebXR API for browser-based AR/VR, Three.js for web 3D, A-Frame for web XR, PWA for installable web apps. Understand app store submission for native XR apps, enterprise deployment, and distribution strategies.',
        skills: ['WebXR', 'Three.js', 'A-Frame', 'JavaScript', 'Deployment'],
        duration: '4 weeks',
        resources: 8,
        projects: ['WebXR Experience', 'Browser-based AR', 'Cross-platform Release'],
        topics: ['WebXR API', 'Three.js', 'A-Frame', 'WebGL', 'WebVR', 'WebAR', 'Browser Support', 'App Store', 'SideQuest', 'Enterprise'],
        outcome: 'Distribute XR applications across multiple platforms'
      }
    ]
  },
  {
    id: 'dba',
    title: 'Database Administrator',
    description: 'Manage, optimize, and secure enterprise databases ensuring high availability and performance.',
    icon: HardDrive,
    color: 'from-blue-600 to-indigo-700',
    duration: '8-10 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['SQL', 'PostgreSQL', 'MySQL', 'Oracle', 'Performance Tuning', 'Backup'],
    stages: [
      {
        name: 'Database Fundamentals',
        description: 'Relational theory, SQL mastery, normalization, and data modeling.',
        detailedDescription: 'Master database fundamentals. Learn relational database theory, ACID properties, advanced SQL queries, joins, subqueries, window functions, CTEs, database normalization (1NF to 5NF), entity-relationship modeling, and database design patterns. Understand indexing basics and query execution plans.',
        skills: ['SQL', 'Relational Theory', 'Normalization', 'Data Modeling', 'Indexing'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Complex Query Library', 'ER Diagrams', 'Normalized Schema Design'],
        topics: ['Relational Model', 'ACID', 'Advanced SQL', 'Joins', 'Subqueries', 'Window Functions', 'CTEs', 'Normalization', 'ER Modeling', 'Primary/Foreign Keys'],
        outcome: 'Design and query relational databases with expertise'
      },
      {
        name: 'PostgreSQL & MySQL',
        description: 'Open-source database administration, configuration, and management.',
        detailedDescription: 'Administer popular open-source databases. Learn PostgreSQL and MySQL installation, configuration, user management, privilege systems, schema management, partitioning, replication setup, and high availability. Understand differences between PostgreSQL and MySQL and when to use each.',
        skills: ['PostgreSQL', 'MySQL', 'Configuration', 'Replication', 'HA'],
        duration: '6 weeks',
        resources: 12,
        projects: ['PostgreSQL Cluster', 'MySQL Replication', 'Migration Between DBs'],
        topics: ['Installation', 'Configuration', 'Users & Roles', 'Schemas', 'Partitioning', 'Replication', 'Streaming Replication', 'Failover', 'pgAdmin', 'phpMyAdmin'],
        outcome: 'Manage production PostgreSQL and MySQL databases'
      },
      {
        name: 'Performance Tuning',
        description: 'Query optimization, indexing strategies, and database performance.',
        detailedDescription: 'Optimize database performance. Learn query optimization techniques, execution plan analysis, indexing strategies (B-tree, Hash, GiST), query rewriting, table partitioning, connection pooling, cache configuration, and monitoring tools. Understand slow query logs and profiling.',
        skills: ['Query Optimization', 'Indexing', 'Profiling', 'Partitioning', 'Monitoring'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Query Optimization Report', 'Index Strategy', 'Performance Dashboard'],
        topics: ['Execution Plans', 'Query Optimization', 'Index Types', 'Composite Indexes', 'Covering Indexes', 'Table Partitioning', 'Connection Pooling', 'Caching', 'Profiling'],
        outcome: 'Diagnose and resolve database performance issues'
      },
      {
        name: 'Backup & Recovery',
        description: 'Backup strategies, point-in-time recovery, and disaster planning.',
        detailedDescription: 'Ensure data protection and recovery. Learn backup types (full, incremental, differential), backup tools (pg_dump, mysqldump, XtraBackup), point-in-time recovery, WAL archiving, backup verification, disaster recovery planning, and RTO/RPO definitions. Test recovery procedures.',
        skills: ['Backups', 'Recovery', 'Disaster Recovery', 'PITR', 'Automation'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Backup Automation', 'Disaster Recovery Plan', 'Recovery Testing'],
        topics: ['Backup Types', 'pg_dump', 'mysqldump', 'XtraBackup', 'PITR', 'WAL Archiving', 'RTO/RPO', 'DR Planning', 'Recovery Testing', 'Automation'],
        outcome: 'Implement robust backup and disaster recovery solutions'
      },
      {
        name: 'Security & Compliance',
        description: 'Database security, encryption, auditing, and compliance standards.',
        detailedDescription: 'Secure database environments. Learn authentication methods, role-based access control, row-level security, data encryption (at rest and in transit), SSL/TLS setup, auditing, log monitoring, data masking, and compliance (GDPR, HIPAA, PCI-DSS). Understand database vulnerabilities.',
        skills: ['Security', 'Encryption', 'Auditing', 'Compliance', 'Access Control'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Security Audit', 'Encryption Setup', 'Compliance Report'],
        topics: ['Authentication', 'RBAC', 'Row-level Security', 'Encryption', 'SSL/TLS', 'Auditing', 'pgaudit', 'Data Masking', 'GDPR', 'HIPAA', 'Vulnerabilities'],
        outcome: 'Maintain secure, compliant database infrastructure'
      }
    ]
  },
  {
    id: 'network-engineer',
    title: 'Network Engineer',
    description: 'Design, implement, and maintain enterprise networks with routing, switching, and security expertise.',
    icon: Network,
    color: 'from-cyan-600 to-blue-700',
    duration: '8-10 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['CCNA', 'Routing', 'Switching', 'Firewalls', 'VPN', 'Wireless'],
    stages: [
      {
        name: 'Networking Fundamentals',
        description: 'OSI model, TCP/IP, subnetting, and network architecture.',
        detailedDescription: 'Build solid networking foundations. Deep dive into OSI and TCP/IP models, IP addressing, subnetting, CIDR, VLSM, binary math, protocol analysis, Ethernet, ARP, DNS, DHCP. Understand network topologies, cabling standards, and physical layer basics. Practice with Packet Tracer.',
        skills: ['TCP/IP', 'Subnetting', 'OSI Model', 'Protocols', 'Addressing'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Subnet Design', 'Protocol Analysis', 'Network Diagrams'],
        topics: ['OSI Model', 'TCP/IP', 'Encapsulation', 'IP Addressing', 'Subnetting', 'CIDR', 'VLSM', 'Binary Math', 'Ethernet', 'ARP', 'DNS', 'DHCP'],
        outcome: 'Design and troubleshoot IP networks proficiently'
      },
      {
        name: 'Routing & Switching',
        description: 'Cisco IOS, VLANs, STP, OSPF, EIGRP, and BGP routing protocols.',
        detailedDescription: 'Configure enterprise routing and switching. Learn Cisco IOS commands, VLAN configuration, trunking, VTP, Spanning Tree Protocol, inter-VLAN routing, static routing, dynamic routing protocols (OSPF, EIGRP, BGP), route redistribution, and policy-based routing. Lab with real or virtual equipment.',
        skills: ['Cisco IOS', 'VLANs', 'OSPF', 'EIGRP', 'BGP', 'STP'],
        duration: '8 weeks',
        resources: 16,
        projects: ['Multi-site Network', 'Routing Lab', 'Switch Configuration'],
        topics: ['Cisco IOS', 'VLANs', 'Trunking', 'DTP', 'VTP', 'STP', 'RSTP', 'Inter-VLAN Routing', 'Static Routes', 'OSPF', 'EIGRP', 'BGP', 'Route Maps'],
        outcome: 'Configure and troubleshoot enterprise routing and switching'
      },
      {
        name: 'Network Security',
        description: 'Firewalls, ACLs, VPNs, IDS/IPS, and network security architecture.',
        detailedDescription: 'Secure network infrastructure. Learn firewall configuration (ASA, pfSense), access control lists (ACLs), NAT/PAT, VPN technologies (IPsec, SSL VPN, site-to-site), intrusion detection/prevention systems, 802.1X, network segmentation, DMZ design, and security best practices.',
        skills: ['Firewalls', 'ACLs', 'VPN', 'NAT', 'IDS/IPS', 'Security'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Firewall Config', 'VPN Setup', 'Security Audit'],
        topics: ['Firewalls', 'ACLs', 'Standard ACLs', 'Extended ACLs', 'NAT', 'PAT', 'VPN', 'IPsec', 'SSL VPN', 'Site-to-Site', 'IDS/IPS', '802.1X', 'DMZ'],
        outcome: 'Implement comprehensive network security controls'
      },
      {
        name: 'Enterprise Networking',
        description: 'SD-WAN, wireless, QoS, MPLS, and software-defined networking.',
        detailedDescription: 'Master modern enterprise networking. Learn SD-WAN technologies, wireless networking (WiFi standards, WPA2/3, site surveys), Quality of Service (QoS), MPLS basics, software-defined networking (SDN), network automation with Python/Ansible, and cloud networking (VPC, Direct Connect).',
        skills: ['SD-WAN', 'Wireless', 'QoS', 'SDN', 'Automation', 'Cloud Networking'],
        duration: '6 weeks',
        resources: 12,
        projects: ['SD-WAN Design', 'Wireless Site Survey', 'Network Automation'],
        topics: ['SD-WAN', 'WiFi Standards', 'WPA2/WPA3', 'Site Surveys', 'QoS', 'DSCP', 'MPLS', 'SDN', 'OpenFlow', 'Network Automation', 'Netmiko', 'NAPALM', 'Cloud VPC'],
        outcome: 'Design and implement modern enterprise network solutions'
      },
      {
        name: 'Network Monitoring',
        description: 'SNMP, monitoring tools, logging, and network management systems.',
        detailedDescription: 'Monitor and manage network health. Learn SNMP v2/v3, NetFlow/sFlow, syslog configuration, network monitoring tools (PRTG, Nagios, Zabbix), packet capture with Wireshark, network documentation, change management, and capacity planning. Set up alerting and dashboards.',
        skills: ['SNMP', 'Monitoring', 'Wireshark', 'NetFlow', 'Documentation'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Monitoring Dashboard', 'Wireshark Analysis', 'Network Documentation'],
        topics: ['SNMP', 'MIBs', 'OIDs', 'NetFlow', 'sFlow', 'Syslog', 'PRTG', 'Nagios', 'Zabbix', 'Wireshark', 'Packet Analysis', 'Capacity Planning', 'Documentation'],
        outcome: 'Maintain network visibility and operational excellence'
      }
    ]
  },
  {
    id: 'solutions-architect',
    title: 'Solutions Architect',
    description: 'Design end-to-end technical solutions aligning business needs with technology strategy.',
    icon: Lightbulb,
    color: 'from-amber-600 to-yellow-700',
    duration: '10-12 months',
    level: 'Advanced',
    totalCourses: 16,
    skills: ['Architecture', 'AWS', 'System Design', 'Integration', 'Stakeholders'],
    stages: [
      {
        name: 'Architecture Fundamentals',
        description: 'Architecture patterns, non-functional requirements, and design principles.',
        detailedDescription: 'Master solution architecture foundations. Learn architecture patterns (layered, microservices, event-driven, serverless), non-functional requirements (scalability, availability, security, performance), SOLID principles, CAP theorem, and trade-off analysis. Understand the architect role and responsibilities.',
        skills: ['Patterns', 'NFRs', 'SOLID', 'Trade-offs', 'Documentation'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Architecture Review', 'Pattern Selection', 'NFR Analysis'],
        topics: ['Architecture Patterns', 'Layered Architecture', 'Microservices', 'Event-Driven', 'Serverless', 'Scalability', 'Availability', 'CAP Theorem', 'SOLID', 'Trade-offs'],
        outcome: 'Apply architectural patterns to solve business problems'
      },
      {
        name: 'System Design',
        description: 'Design scalable systems, distributed architecture, and high-level design.',
        detailedDescription: 'Design scalable distributed systems. Learn system design methodology, load balancing, caching strategies, database scaling (sharding, replication), message queues, CDN, rate limiting, and API design. Practice designing real-world systems like URL shorteners, social media feeds, and e-commerce platforms.',
        skills: ['System Design', 'HLD', 'Scalability', 'Distributed Systems', 'APIs'],
        duration: '7 weeks',
        resources: 14,
        projects: ['URL Shortener Design', 'Social Feed Architecture', 'E-commerce System'],
        topics: ['System Design Process', 'Load Balancing', 'Caching', 'CDN', 'Database Sharding', 'Replication', 'Message Queues', 'Kafka', 'API Gateway', 'Rate Limiting'],
        outcome: 'Design scalable, resilient distributed systems'
      },
      {
        name: 'Cloud Architecture',
        description: 'AWS/Azure/GCP architecture, multi-cloud, and cloud-native patterns.',
        detailedDescription: 'Design cloud-native solutions. Learn AWS Well-Architected Framework, Azure Architecture Center, GCP architecture best practices, multi-cloud strategies, hybrid cloud, cloud migration patterns, and cost optimization. Understand managed services selection and cloud security architecture.',
        skills: ['AWS', 'Azure', 'GCP', 'Cloud-Native', 'Multi-cloud', 'Cost Optimization'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Cloud Migration Plan', 'Multi-cloud Architecture', 'Cost Optimization'],
        topics: ['Well-Architected', 'AWS Services', 'Azure Services', 'GCP Services', 'Multi-cloud', 'Hybrid Cloud', 'Cloud Migration', 'Lift & Shift', 'Refactoring', 'FinOps'],
        outcome: 'Architect optimal cloud solutions across providers'
      },
      {
        name: 'Integration Architecture',
        description: 'APIs, messaging, ESB, iPaaS, and enterprise integration patterns.',
        detailedDescription: 'Design integration solutions. Learn REST API design, GraphQL, gRPC, messaging patterns, ESB (Enterprise Service Bus), iPaaS (MuleSoft, Dell Boomi), event-driven architecture, saga pattern, CQRS, data synchronization, and API management. Understand integration security.',
        skills: ['API Design', 'ESB', 'iPaaS', 'Messaging', 'Integration Patterns'],
        duration: '6 weeks',
        resources: 12,
        projects: ['API Strategy', 'ESB Implementation', 'Event-driven Integration'],
        topics: ['REST Design', 'GraphQL', 'gRPC', 'Message Brokers', 'ESB', 'MuleSoft', 'Integration Patterns', 'Saga', 'CQRS', 'API Management', 'Kong', 'Apigee'],
        outcome: 'Design seamless integrations between diverse systems'
      },
      {
        name: 'Architecture Leadership',
        description: 'Stakeholder management, architecture decisions, and governance.',
        detailedDescription: 'Lead architectural initiatives. Learn stakeholder communication, architecture decision records (ADRs), technology selection, vendor evaluation, proof of concept design, architecture governance, review boards, mentoring teams, and strategic technology planning. Understand EA frameworks (TOGAF, Zachman).',
        skills: ['Leadership', 'ADRs', 'Governance', 'Strategy', 'Communication'],
        duration: '6 weeks',
        resources: 12,
        projects: ['ADR Repository', 'Technology Radar', 'Architecture Board'],
        topics: ['Stakeholder Management', 'ADRs', 'Technology Selection', 'Vendor Evaluation', 'POC Design', 'Architecture Governance', 'Review Process', 'TOGAF', 'Zachman', 'Strategy'],
        outcome: 'Drive architectural decisions and technology strategy'
      }
    ]
  },
  {
    id: 'data-engineer',
    title: 'Data Engineer',
    description: 'Build data pipelines, warehouses, and infrastructure to enable data-driven decision making.',
    icon: Workflow,
    color: 'from-teal-600 to-emerald-700',
    duration: '8-10 months',
    level: 'Intermediate',
    totalCourses: 14,
    skills: ['Python', 'SQL', 'Spark', 'Airflow', 'AWS', 'ETL'],
    stages: [
      {
        name: 'Data Engineering Foundations',
        description: 'Python, SQL, data structures, and database fundamentals for data engineering.',
        detailedDescription: 'Master the foundations of data engineering. Learn advanced Python for data processing, complex SQL for data transformation, data modeling techniques, and database internals. Understand data formats (JSON, XML, Parquet, Avro), file systems, and storage solutions. Learn git for data engineering workflows.',
        skills: ['Python', 'Advanced SQL', 'Data Modeling', 'Git', 'Data Formats'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Data Processing Pipeline', 'SQL Optimization', 'Data Model Design'],
        topics: ['Advanced Python', 'List Comprehensions', 'Generators', 'SQL Window Functions', 'CTEs', 'Indexes', 'Partitioning', 'Normalization', 'Denormalization', 'Star Schema', 'Data Types', 'Parquet', 'Avro', 'Git Workflows'],
        outcome: 'Write efficient code for data processing and transformation'
      },
      {
        name: 'Data Warehousing',
        description: 'Data warehouse design, ETL/ELT processes, and modern data stack.',
        detailedDescription: 'Design and build data warehouses. Learn dimensional modeling, slowly changing dimensions, data warehouse architectures (Inmon vs Kimball), ETL vs ELT patterns. Work with cloud data warehouses: Snowflake, BigQuery, Redshift. Understand data marts, ODS, and data lake architectures.',
        skills: ['Data Warehousing', 'ETL', 'Snowflake', 'BigQuery', 'Dimensional Modeling'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Data Warehouse Design', 'ETL Pipeline', 'Star Schema Implementation'],
        topics: ['Dimensional Modeling', 'Star Schema', 'Snowflake Schema', 'SCD Types', 'ETL', 'ELT', 'Inmon vs Kimball', 'Snowflake', 'BigQuery', 'Redshift', 'Data Marts', 'Data Vault'],
        outcome: 'Design and implement enterprise data warehouses'
      },
      {
        name: 'Big Data Processing',
        description: 'Apache Spark, Hadoop ecosystem, and distributed computing.',
        detailedDescription: 'Process data at scale with big data technologies. Learn Apache Spark core concepts, RDDs, DataFrames, Spark SQL, structured streaming. Understand Hadoop ecosystem (HDFS, YARN, MapReduce). Work with Databricks, data partitioning, bucketing, and optimization techniques for big data.',
        skills: ['Spark', 'Hadoop', 'HDFS', 'PySpark', 'Distributed Computing'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Spark ETL Job', 'Streaming Pipeline', 'Big Data Analytics'],
        topics: ['Spark Architecture', 'RDDs', 'DataFrames', 'Spark SQL', 'Transformations', 'Actions', 'Spark Streaming', 'HDFS', 'YARN', 'MapReduce', 'Partitioning', 'Bucketing', 'Caching'],
        outcome: 'Build scalable data processing pipelines'
      },
      {
        name: 'Workflow Orchestration',
        description: 'Apache Airflow, DAGs, scheduling, and pipeline orchestration.',
        detailedDescription: 'Orchestrate complex data workflows. Learn Apache Airflow fundamentals, DAG authoring, operators, sensors, hooks. Understand task dependencies, branching, dynamic DAGs. Learn workflow monitoring, alerting, backfilling, and data quality checks. Explore alternatives like Prefect and Dagster.',
        skills: ['Airflow', 'DAGs', 'Scheduling', 'Monitoring', 'Data Quality'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Airflow DAG Library', 'Data Pipeline Orchestration', 'Quality Check Framework'],
        topics: ['Airflow Architecture', 'DAGs', 'Operators', 'Sensors', 'Task Dependencies', 'XComs', 'Branching', 'SLAs', 'Alerts', 'Backfills', 'Data Quality', 'Great Expectations'],
        outcome: 'Orchestrate reliable, monitored data pipelines'
      },
      {
        name: 'Streaming & Real-time',
        description: 'Kafka, streaming architectures, real-time processing, and event-driven ETL.',
        detailedDescription: 'Build real-time data pipelines. Learn Apache Kafka fundamentals, producers, consumers, topics, partitions, replication. Understand Kafka Connect, Kafka Streams, ksqlDB. Learn streaming architectures, event-driven ETL, exactly-once semantics, and stream processing with Spark Streaming or Flink.',
        skills: ['Kafka', 'Streaming', 'Real-time', 'Event-driven', 'Stream Processing'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Kafka Pipeline', 'Real-time Analytics', 'Event-driven ETL'],
        topics: ['Kafka Architecture', 'Topics', 'Partitions', 'Producers', 'Consumers', 'Consumer Groups', 'Kafka Connect', 'Kafka Streams', 'ksqlDB', 'Exactly-once', 'Spark Streaming', 'Flink'],
        outcome: 'Implement real-time streaming data architectures'
      },
      {
        name: 'Data Infrastructure',
        description: 'Data lakes, lakehouses, infrastructure as code, and cloud platforms.',
        detailedDescription: 'Build modern data infrastructure. Learn data lake architecture ( medallion/bronze-silver-gold pattern), lakehouse concepts with Delta Lake or Iceberg. Implement infrastructure as code with Terraform for data platforms. Work with AWS (S3, Glue, EMR), Azure (ADLS, Synapse), or GCP (GCS, BigQuery).',
        skills: ['Data Lakes', 'Lakehouse', 'Terraform', 'AWS', 'Delta Lake'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Data Lake Architecture', 'Lakehouse Implementation', 'IaC for Data Platform'],
        topics: ['Data Lakes', 'Medallion Architecture', 'Bronze/Silver/Gold', 'Delta Lake', 'Apache Iceberg', 'Lakehouse', 'Terraform', 'AWS Glue', 'EMR', 'Azure Synapse', 'Data Governance'],
        outcome: 'Design scalable, governed modern data platforms'
      }
    ]
  },
  {
    id: 'prompt-engineer',
    title: 'AI Prompt Engineer',
    description: 'Master the art and science of prompting LLMs to build AI-powered applications and automation.',
    icon: Terminal,
    color: 'from-violet-500 to-fuchsia-600',
    duration: '4-6 months',
    level: 'Beginner',
    totalCourses: 8,
    skills: ['Prompt Engineering', 'LLMs', 'OpenAI', 'LangChain', 'RAG'],
    stages: [
      {
        name: 'LLM Fundamentals',
        description: 'Understanding large language models, transformers, and how AI generates text.',
        detailedDescription: 'Build foundational knowledge of LLMs. Learn transformer architecture basics, tokenization, context windows, temperature, top-p/top-k sampling. Understand different model families (GPT, Claude, Llama, Gemini), their strengths, and limitations. Learn about model parameters, training data cutoffs, and hallucinations.',
        skills: ['LLMs', 'Transformers', 'Tokenization', 'Context Windows', 'Sampling'],
        duration: '3 weeks',
        resources: 6,
        projects: ['Model Comparison Study', 'Token Analysis', 'Context Window Experiments'],
        topics: ['Transformer Architecture', 'Self-attention', 'Tokenization', 'BPE', 'Context Length', 'Temperature', 'Top-p', 'Top-k', 'Model Families', 'GPT-4', 'Claude', 'Llama', 'Hallucinations'],
        outcome: 'Understand LLM capabilities and limitations'
      },
      {
        name: 'Prompt Engineering Basics',
        description: 'Zero-shot, few-shot prompting, chain-of-thought, and prompting patterns.',
        detailedDescription: 'Master core prompting techniques. Learn zero-shot and few-shot prompting, chain-of-thought reasoning, role prompting, and structured output formats (JSON, XML). Understand prompt templates, variables, and system prompts. Practice with OpenAI API, including parameters like temperature, max_tokens, and frequency penalty.',
        skills: ['Zero-shot', 'Few-shot', 'Chain-of-thought', 'System Prompts', 'OpenAI API'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Prompt Library', 'Few-shot Classifier', 'Reasoning Chain Demo'],
        topics: ['Zero-shot', 'Few-shot', 'Chain-of-Thought', 'Step-by-step', 'Role Prompting', 'System Prompts', 'User Prompts', 'Output Formats', 'JSON Mode', 'Temperature Control', 'Token Limits'],
        outcome: 'Craft effective prompts for various use cases'
      },
      {
        name: 'Advanced Prompting Techniques',
        description: 'ReAct, Tree of Thoughts, self-consistency, and prompt optimization.',
        detailedDescription: 'Apply advanced prompting strategies. Learn ReAct (Reasoning + Acting), Tree of Thoughts, self-consistency, generated knowledge prompting. Understand prompt chaining, prompt routing, and conditional prompts. Learn techniques to reduce hallucinations and improve factual accuracy.',
        skills: ['ReAct', 'Tree of Thoughts', 'Self-consistency', 'Prompt Chaining', 'Optimization'],
        duration: '4 weeks',
        resources: 8,
        projects: ['ReAct Agent', 'Multi-step Reasoner', 'Prompt Optimizer'],
        topics: ['ReAct Pattern', 'Tool Use', 'Tree of Thoughts', 'Self-consistency', 'Voting', 'Generated Knowledge', 'Prompt Chaining', 'Conditional Prompts', 'Hallucination Reduction'],
        outcome: 'Solve complex problems with sophisticated prompting'
      },
      {
        name: 'RAG & Vector Databases',
        description: 'Retrieval-Augmented Generation, embeddings, vector DBs, and knowledge bases.',
        detailedDescription: 'Build RAG systems. Learn embeddings, vector databases (Pinecone, Weaviate, Chroma, Qdrant), similarity search, chunking strategies. Implement retrieval-augmented generation pipelines, query rewriting, reranking, and hybrid search. Understand knowledge graphs and document processing.',
        skills: ['RAG', 'Embeddings', 'Vector DBs', 'Chunking', 'Similarity Search'],
        duration: '5 weeks',
        resources: 10,
        projects: ['RAG Chatbot', 'Knowledge Base Search', 'Document Q&A System'],
        topics: ['Embeddings', 'OpenAI Embeddings', 'Vector DBs', 'Pinecone', 'Weaviate', 'Chroma', 'Chunking', 'Overlap', 'Retrieval', 'RAG Pipeline', 'Query Rewriting', 'Reranking', 'Hybrid Search'],
        outcome: 'Build knowledge-grounded AI applications'
      },
      {
        name: 'AI Application Development',
        description: 'LangChain, LlamaIndex, agents, tools, and production AI apps.',
        detailedDescription: 'Build production AI applications. Learn LangChain components (chains, agents, memory, callbacks), LlamaIndex for indexing and querying. Create AI agents with tools, multi-agent systems, and autonomous workflows. Understand AI application architecture, streaming responses, cost optimization, and rate limiting.',
        skills: ['LangChain', 'LlamaIndex', 'Agents', 'Tools', 'Streaming'],
        duration: '6 weeks',
        resources: 12,
        projects: ['AI Agent System', 'Multi-tool Assistant', 'Streaming Chat App'],
        topics: ['LangChain', 'Chains', 'Agents', 'Tools', 'Memory', 'Callbacks', 'LlamaIndex', 'Indexing', 'Query Engines', 'Multi-agents', 'Streaming', 'Cost Optimization', 'Rate Limiting'],
        outcome: 'Deploy production-ready AI-powered applications'
      }
    ]
  },
  {
    id: 'scrum-master',
    title: 'Scrum Master',
    description: 'Facilitate agile teams, remove impediments, and coach organizations in Scrum practices.',
    icon: Users,
    color: 'from-blue-500 to-cyan-600',
    duration: '4-6 months',
    level: 'Beginner',
    totalCourses: 8,
    skills: ['Scrum', 'Agile', 'Facilitation', 'Coaching', 'Jira'],
    stages: [
      {
        name: 'Agile Fundamentals',
        description: 'Agile manifesto, principles, values, and mindset shift.',
        detailedDescription: 'Understand agile foundations. Study the Agile Manifesto, its 4 values and 12 principles. Learn about iterative development, empirical process control, and the shift from predictive to adaptive approaches. Understand different agile frameworks (Scrum, Kanban, XP) and when to use each.',
        skills: ['Agile', 'Scrum', 'Kanban', 'Empirical Process', 'Iterative Development'],
        duration: '3 weeks',
        resources: 6,
        projects: ['Agile Assessment', 'Framework Comparison', 'Agile Transformation Plan'],
        topics: ['Agile Manifesto', '4 Values', '12 Principles', 'Empirical Process', 'Transparency', 'Inspection', 'Adaptation', 'Scrum', 'Kanban', 'XP', 'Crystal', 'SAFe'],
        outcome: 'Embrace agile mindset and principles'
      },
      {
        name: 'Scrum Framework',
        description: 'Scrum roles, events, artifacts, and rules in depth.',
        detailedDescription: 'Master the Scrum framework. Deep dive into Scrum roles (Scrum Master, Product Owner, Developers), Scrum events (Sprint, Planning, Daily Scrum, Review, Retro), and artifacts (Product Backlog, Sprint Backlog, Increment). Learn Definition of Done, Definition of Ready, and Scrum values.',
        skills: ['Scrum Events', 'Scrum Artifacts', 'Scrum Roles', 'DoD', 'DoR'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Scrum Implementation Guide', 'Event Facilitation', 'Artifact Setup'],
        topics: ['Scrum Theory', 'Scrum Values', 'Scrum Master', 'Product Owner', 'Developers', 'Sprint', 'Sprint Planning', 'Daily Scrum', 'Sprint Review', 'Retrospective', 'Product Backlog', 'Sprint Backlog', 'Increment', 'DoD'],
        outcome: 'Implement Scrum framework effectively'
      },
      {
        name: 'Facilitation Skills',
        description: 'Meeting facilitation, conflict resolution, and team dynamics.',
        detailedDescription: 'Facilitate effective agile ceremonies. Learn facilitation techniques, active listening, powerful questions. Master sprint planning, daily standups, reviews, and retrospectives. Understand conflict resolution, managing dysfunctional behavior, and creating psychological safety.',
        skills: ['Facilitation', 'Active Listening', 'Conflict Resolution', 'Retrospectives', 'Coaching'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Retrospective Formats', 'Sprint Planning Guide', 'Team Health Check'],
        topics: ['Facilitation', 'Active Listening', 'Powerful Questions', 'Neutrality', 'Conflict Resolution', 'Retrospective Formats', 'Sailboat', 'Starfish', '4Ls', 'Psychological Safety', 'Dysfunctions'],
        outcome: 'Facilitate productive, engaging agile ceremonies'
      },
      {
        name: 'Impediment Removal',
        description: 'Identifying and removing blockers, organizational coaching.',
        detailedDescription: 'Remove obstacles for teams. Learn to identify impediments, root cause analysis, creating visibility, and organizational coaching. Understand how to work with management, protect the team, and escalate effectively. Learn systems thinking and organizational change patterns.',
        skills: ['Impediments', 'Root Cause Analysis', 'Organizational Coaching', 'Systems Thinking'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Impediment Backlog', 'Organizational Change Plan', 'Management Collaboration'],
        topics: ['Impediments', 'Blockers', 'Dependencies', 'Root Cause Analysis', '5 Whys', 'Fishbone', 'Escalation', 'Management Collaboration', 'Servant Leadership', 'Systems Thinking', 'Change Patterns'],
        outcome: 'Enable teams by removing organizational impediments'
      },
      {
        name: 'Agile Metrics & Scaling',
        description: 'Velocity, burndown, flow metrics, and scaling Scrum.',
        detailedDescription: 'Measure and scale agility. Learn sprint metrics (velocity, burndown), flow metrics (WIP, cycle time, throughput), and agile analytics. Understand Scrum at scale (Nexus, LeSS, SAFe), distributed teams, and multiple team coordination. Learn agile tooling with Jira, Azure DevOps.',
        skills: ['Metrics', 'Velocity', 'Flow', 'Scaling', 'Jira'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Metrics Dashboard', 'Scaling Assessment', 'Jira Configuration'],
        topics: ['Velocity', 'Burndown', 'Burnup', 'WIP', 'Cycle Time', 'Lead Time', 'Throughput', 'CFD', 'Nexus', 'LeSS', 'SAFe', 'Jira', 'Sprint Reports', 'Velocity Charts'],
        outcome: 'Measure team performance and scale Scrum practices'
      }
    ]
  },
  {
    id: 'business-analyst',
    title: 'Business Analyst',
    description: 'Bridge business needs and technical solutions through analysis, documentation, and stakeholder management.',
    icon: FileText,
    color: 'from-green-500 to-teal-600',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 10,
    skills: ['Requirements', 'UML', 'SQL', 'Process Modeling', 'Stakeholder Management'],
    stages: [
      {
        name: 'Business Analysis Fundamentals',
        description: 'BA role, BABOK knowledge areas, and business analysis planning.',
        detailedDescription: 'Understand the business analyst role. Study BABOK knowledge areas (business analysis planning, elicitation, requirements management, strategy analysis, solution evaluation). Learn BA competencies, stakeholder analysis, and communication planning. Understand different BA specializations.',
        skills: ['BABOK', 'Stakeholder Analysis', 'Planning', 'Elicitation', 'Requirements'],
        duration: '4 weeks',
        resources: 8,
        projects: ['BA Planning Document', 'Stakeholder Map', 'Communication Plan'],
        topics: ['BABOK', 'Knowledge Areas', 'Business Analysis', 'Planning', 'Elicitation', 'Requirements Life Cycle', 'Strategy Analysis', 'Solution Evaluation', 'Stakeholder Analysis', 'RACI'],
        outcome: 'Establish structured approach to business analysis'
      },
      {
        name: 'Requirements Elicitation',
        description: 'Interviews, workshops, observation, and elicitation techniques.',
        detailedDescription: 'Gather requirements effectively. Learn elicitation techniques: interviews, focus groups, workshops, brainstorming, observation, surveys, document analysis. Understand active listening, note-taking, facilitating discussions, and managing difficult stakeholders. Practice JAD sessions.',
        skills: ['Interviews', 'Workshops', 'Facilitation', 'Observation', 'Surveys'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Interview Guide', 'Workshop Facilitation', 'Survey Design'],
        topics: ['Elicitation', 'Interviews', 'Active Listening', 'Workshops', 'JAD', 'Brainstorming', 'Observation', 'Ethnography', 'Surveys', 'Question Design', 'Document Analysis'],
        outcome: 'Extract accurate, complete requirements from stakeholders'
      },
      {
        name: 'Requirements Analysis & Documentation',
        description: 'Requirements types, analysis, specification, and management.',
        detailedDescription: 'Document and manage requirements professionally. Learn functional and non-functional requirements, user stories, use cases, requirements attributes, traceability. Create requirements documents (BRD, SRS), business rules catalogs, and data dictionaries. Manage requirements changes.',
        skills: ['Requirements', 'User Stories', 'Use Cases', 'BRD', 'Traceability'],
        duration: '5 weeks',
        resources: 10,
        projects: ['BRD Document', 'User Story Backlog', 'Requirements Traceability Matrix'],
        topics: ['Functional Requirements', 'Non-functional Requirements', 'User Stories', 'Use Cases', 'User Stories', 'Acceptance Criteria', 'BRD', 'SRS', 'Business Rules', 'Glossary', 'Traceability', 'Change Management'],
        outcome: 'Create clear, traceable, manageable requirements documentation'
      },
      {
        name: 'Process Modeling & Analysis',
        description: 'Process mapping, BPMN, value stream mapping, and process improvement.',
        detailedDescription: 'Analyze and improve business processes. Learn process mapping techniques, BPMN 2.0 notation, value stream mapping, SIPOC diagrams. Understand AS-IS and TO-BE process analysis, process improvement methodologies (Lean, Six Sigma), and process automation assessment.',
        skills: ['BPMN', 'Process Mapping', 'Value Stream', 'Process Improvement', 'SIPOC'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Process Model', 'BPMN Diagrams', 'Process Improvement Plan'],
        topics: ['Process Mapping', 'Flowcharts', 'BPMN', 'Events', 'Activities', 'Gateways', 'Pools', 'Lanes', 'Value Stream', 'SIPOC', 'AS-IS', 'TO-BE', 'Lean', 'Six Sigma'],
        outcome: 'Model, analyze, and improve business processes'
      },
      {
        name: 'Solution Evaluation & Data Analysis',
        description: 'Solution assessment, data analysis for BAs, and SQL basics.',
        detailedDescription: 'Evaluate solutions and analyze data. Learn solution assessment criteria, feasibility analysis, vendor selection, and proof of concept evaluation. Understand basic SQL for data analysis, creating reports, and data validation. Learn decision modeling and recommendation frameworks.',
        skills: ['Solution Evaluation', 'SQL', 'Data Analysis', 'Feasibility', 'Decision Modeling'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Solution Assessment', 'Data Analysis Report', 'Feasibility Study'],
        topics: ['Solution Evaluation', 'Feasibility', 'Technical Feasibility', 'Economic Feasibility', 'Vendor Selection', 'PoC', 'SQL Basics', 'SELECT', 'JOINs', 'Aggregation', 'Decision Matrix', 'Recommendation'],
        outcome: 'Recommend optimal solutions based on thorough analysis'
      }
    ]
  },
  {
    id: 'software-architect',
    title: 'Software Architect',
    description: 'Design software systems, define technical standards, and guide development teams in implementation.',
    icon: Lightbulb,
    color: 'from-purple-600 to-indigo-700',
    duration: '12-18 months',
    level: 'Advanced',
    totalCourses: 20,
    skills: ['Design Patterns', 'Architecture Styles', 'UML', 'Microservices', 'Performance'],
    stages: [
      {
        name: 'Software Design Fundamentals',
        description: 'Design principles, SOLID, DRY, KISS, and code quality.',
        detailedDescription: 'Master software design fundamentals. Learn SOLID principles in depth, DRY, KISS, YAGNI, and clean code practices. Understand coupling, cohesion, abstraction, encapsulation, inheritance vs composition. Study code smells, refactoring techniques, and technical debt management.',
        skills: ['SOLID', 'Clean Code', 'Refactoring', 'Technical Debt', 'Design Principles'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Code Review', 'Refactoring Exercise', 'Design Analysis'],
        topics: ['Single Responsibility', 'Open/Closed', 'Liskov Substitution', 'Interface Segregation', 'Dependency Inversion', 'DRY', 'KISS', 'YAGNI', 'Coupling', 'Cohesion', 'Abstraction', 'Code Smells', 'Refactoring'],
        outcome: 'Apply solid design principles to create maintainable code'
      },
      {
        name: 'Design Patterns',
        description: 'Creational, structural, behavioral patterns, and anti-patterns.',
        detailedDescription: 'Master design patterns. Learn creational patterns (Singleton, Factory, Builder, Prototype), structural patterns (Adapter, Bridge, Composite, Decorator, Facade, Proxy), behavioral patterns (Chain of Responsibility, Command, Iterator, Observer, Strategy, Template Method). Understand pattern selection and implementation.',
        skills: ['Design Patterns', 'Singleton', 'Factory', 'Observer', 'Strategy'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Pattern Implementation', 'Pattern Library', 'Anti-pattern Analysis'],
        topics: ['Creational Patterns', 'Singleton', 'Factory Method', 'Abstract Factory', 'Builder', 'Prototype', 'Structural Patterns', 'Adapter', 'Bridge', 'Composite', 'Decorator', 'Facade', 'Proxy', 'Behavioral Patterns', 'Observer', 'Strategy', 'Command', 'Template Method'],
        outcome: 'Apply appropriate design patterns to solve common problems'
      },
      {
        name: 'Architecture Patterns',
        description: 'Layered, hexagonal, clean architecture, and domain-driven design.',
        detailedDescription: 'Design application architectures. Learn layered architecture, hexagonal architecture (ports and adapters), clean architecture, onion architecture. Understand Domain-Driven Design (DDD) concepts: bounded contexts, aggregates, entities, value objects, domain services, and repositories.',
        skills: ['Layered Architecture', 'Hexagonal', 'Clean Architecture', 'DDD', 'Bounded Contexts'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Clean Architecture App', 'DDD Model', 'Hexagonal Implementation'],
        topics: ['Layered Architecture', 'Presentation Layer', 'Business Layer', 'Data Layer', 'Hexagonal Architecture', 'Ports', 'Adapters', 'Clean Architecture', 'Entities', 'Use Cases', 'Interface Adapters', 'Onion Architecture', 'DDD', 'Bounded Context', 'Aggregate', 'Entity', 'Value Object', 'Domain Service'],
        outcome: 'Design maintainable, testable application architectures'
      },
      {
        name: 'Distributed Systems Architecture',
        description: 'Microservices, SOA, event-driven, and distributed patterns.',
        detailedDescription: 'Architect distributed systems. Learn microservices architecture, service boundaries, inter-service communication (REST, gRPC, messaging), API gateways, service discovery, circuit breakers, bulkheads, retries, timeouts. Understand eventual consistency, CAP theorem, saga pattern, CQRS, event sourcing.',
        skills: ['Microservices', 'REST', 'gRPC', 'Messaging', 'Event-driven', 'CQRS'],
        duration: '8 weeks',
        resources: 16,
        projects: ['Microservices Design', 'Event-driven System', 'CQRS Implementation'],
        topics: ['Microservices', 'Service Boundaries', 'REST', 'gRPC', 'Message Queue', 'API Gateway', 'Service Discovery', 'Load Balancing', 'Circuit Breaker', 'Bulkhead', 'Retry', 'Timeout', 'CAP Theorem', 'Eventual Consistency', 'Saga Pattern', 'CQRS', 'Event Sourcing'],
        outcome: 'Design scalable, resilient distributed system architectures'
      },
      {
        name: 'Technical Leadership',
        description: 'Architecture decisions, documentation, mentoring, and governance.',
        detailedDescription: 'Lead technical initiatives. Learn architecture decision records (ADRs), technical documentation, proof of concept design, code review practices, mentoring developers, and establishing coding standards. Understand architecture governance, review boards, and stakeholder communication.',
        skills: ['ADRs', 'Documentation', 'Mentoring', 'Governance', 'Technical Leadership'],
        duration: '6 weeks',
        resources: 12,
        projects: ['ADR Repository', 'Architecture Handbook', 'Technical Standards'],
        topics: ['Architecture Decisions', 'ADRs', 'RFCs', 'Documentation', 'Diagrams', 'C4 Model', 'UML', 'Mentoring', 'Code Reviews', 'Standards', 'Governance', 'Architecture Board', 'Stakeholder Communication'],
        outcome: 'Lead architecture initiatives and guide technical teams'
      }
    ]
  },
  {
    id: 'platform-engineer',
    title: 'Platform Engineer',
    description: 'Build internal developer platforms, IDPs, and self-service infrastructure to accelerate development teams.',
    icon: Server,
    color: 'from-slate-600 to-gray-700',
    duration: '10-12 months',
    level: 'Advanced',
    totalCourses: 16,
    skills: ['Kubernetes', 'IDP', 'Backstage', 'GitOps', 'Platform Architecture'],
    stages: [
      {
        name: 'Platform Engineering Fundamentals',
        description: 'IDP concepts, platform-as-product, developer experience.',
        detailedDescription: 'Understand platform engineering. Learn Internal Developer Platform (IDP) concepts, platform as a product mindset, developer experience (DX) principles, and platform team operating models. Understand the difference between platform engineering and traditional ops, and the evolution from DevOps to platform engineering.',
        skills: ['IDP', 'Platform as Product', 'Developer Experience', 'Platform Teams'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Platform Strategy', 'Developer Journey Map', 'IDP Assessment'],
        topics: ['Platform Engineering', 'IDP', 'Internal Developer Platform', 'Platform as Product', 'Developer Experience', 'DX', 'Golden Paths', 'Self-service', 'Platform Teams', 'DevEx', 'Product Thinking'],
        outcome: 'Establish platform engineering strategy and mindset'
      },
      {
        name: 'Kubernetes Platform',
        description: 'Advanced K8s, multi-tenancy, operators, and platform services.',
        detailedDescription: 'Build Kubernetes-based platforms. Learn advanced Kubernetes: multi-tenancy (namespaces, RBAC, network policies), operators and custom resources, service mesh (Istio, Linkerd), advanced networking (CNI, ingress, service mesh). Build platform services: monitoring, logging, secrets management, cert management.',
        skills: ['Kubernetes', 'Multi-tenancy', 'Operators', 'Service Mesh', 'Platform Services'],
        duration: '8 weeks',
        resources: 16,
        projects: ['Multi-tenant K8s', 'Platform Operator', 'Service Mesh Setup'],
        topics: ['Advanced K8s', 'Namespaces', 'RBAC', 'Network Policies', 'Operators', 'CRDs', 'Controllers', 'Service Mesh', 'Istio', 'Linkerd', 'Cert Manager', 'External Secrets', 'Velero', 'Platform Addons'],
        outcome: 'Design and operate scalable Kubernetes platforms'
      },
      {
        name: 'Developer Portals',
        description: 'Backstage, developer portals, service catalog, and scaffolder.',
        detailedDescription: 'Build developer portals with Backstage (by Spotify). Learn Backstage architecture, software catalog, TechDocs, API docs, scaffolder for self-service templates. Create golden paths, service templates, documentation-as-code integration, and custom plugins.',
        skills: ['Backstage', 'Developer Portal', 'Service Catalog', 'Scaffolder', 'Golden Paths'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Backstage Portal', 'Service Catalog', 'Golden Path Templates'],
        topics: ['Backstage', 'Developer Portal', 'Software Catalog', 'Entity Definitions', 'TechDocs', 'MkDocs', 'Scaffolder', 'Templates', 'Actions', 'Golden Paths', 'Self-service', 'Plugins', 'Custom Plugins'],
        outcome: 'Create self-service developer portals that accelerate delivery'
      },
      {
        name: 'Platform Automation',
        description: 'GitOps, infrastructure provisioning, policy as code, and security.',
        detailedDescription: 'Automate platform operations. Learn GitOps with Flux and ArgoCD for platform delivery, Terraform/ Pulumi for infrastructure provisioning, policy as code (OPA, Kyverno), and security scanning integration. Implement cost management, resource quotas, and FinOps practices.',
        skills: ['GitOps', 'Flux', 'ArgoCD', 'Policy as Code', 'OPA', 'FinOps'],
        duration: '6 weeks',
        resources: 12,
        projects: ['GitOps Platform', 'Policy Framework', 'Cost Management'],
        topics: ['GitOps', 'Flux', 'ArgoCD', 'Infrastructure as Code', 'Terraform', 'Pulumi', 'Policy as Code', 'OPA', 'Kyverno', 'PSP', 'Security Scanning', 'Cost Management', 'Resource Quotas', 'FinOps'],
        outcome: 'Automate platform delivery with GitOps and policy enforcement'
      },
      {
        name: 'Platform Experience',
        description: 'CLI tools, APIs, documentation, and platform adoption.',
        detailedDescription: 'Optimize developer platform experience. Learn building CLI tools for platform interaction, platform APIs, documentation strategies, developer onboarding, and platform adoption metrics. Understand feedback loops, platform evangelism, and continuous improvement of the platform.',
        skills: ['CLI Tools', 'Platform APIs', 'Documentation', 'Onboarding', 'Metrics'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Platform CLI', 'API Design', 'Developer Onboarding Program'],
        topics: ['CLI Design', 'Cobra', 'Click', 'Platform APIs', 'REST', 'gRPC', 'Documentation', 'Developer Onboarding', 'Platform Metrics', 'DORA Metrics', 'Feedback Loops', 'Platform Evangelism'],
        outcome: 'Drive platform adoption through excellent developer experience'
      }
    ]
  },
  {
    id: 'mlops',
    title: 'MLOps Engineer',
    description: 'Operationalize machine learning with CI/CD for ML, model management, and production ML systems.',
    icon: Zap,
    color: 'from-fuchsia-600 to-purple-700',
    duration: '10-12 months',
    level: 'Advanced',
    totalCourses: 16,
    skills: ['MLflow', 'Kubeflow', 'Feature Stores', 'Model Monitoring', 'CI/CD'],
    stages: [
      {
        name: 'ML in Production',
        description: 'ML systems, challenges, and production considerations.',
        detailedDescription: 'Understand production ML. Learn differences between research and production ML, technical debt in ML systems, testing ML code, model serving patterns (batch, online, streaming), A/B testing for models, and shadow deployments. Understand data quality and feature engineering in production.',
        skills: ['Production ML', 'Model Serving', 'A/B Testing', 'Data Quality', 'Feature Engineering'],
        duration: '5 weeks',
        resources: 10,
        projects: ['ML System Design', 'Model Serving Setup', 'A/B Test Framework'],
        topics: ['ML Systems', 'Research vs Production', 'Technical Debt', 'Testing ML', 'Batch Serving', 'Online Serving', 'Streaming', 'A/B Testing', 'Shadow Deployment', 'Canary Release', 'Data Quality', 'Feature Engineering'],
        outcome: 'Design ML systems for production environments'
      },
      {
        name: 'ML Lifecycle Management',
        description: 'MLflow, experiment tracking, model registry, and versioning.',
        detailedDescription: 'Manage ML lifecycle. Learn MLflow for experiment tracking, model registry for versioning, model artifacts management. Understand data versioning with DVC, code versioning for ML, reproducibility, and experiment management best practices.',
        skills: ['MLflow', 'Experiment Tracking', 'Model Registry', 'DVC', 'Reproducibility'],
        duration: '5 weeks',
        resources: 10,
        projects: ['MLflow Setup', 'Model Registry', 'DVC Pipeline'],
        topics: ['MLflow', 'Tracking', 'Experiments', 'Runs', 'Parameters', 'Metrics', 'Artifacts', 'Model Registry', 'Stages', 'DVC', 'Data Versioning', 'Pipeline', 'Reproducibility'],
        outcome: 'Track, version, and manage ML experiments and models'
      },
      {
        name: 'Feature Engineering at Scale',
        description: 'Feature stores, feature engineering pipelines, and online/offline features.',
        detailedDescription: 'Scale feature engineering. Learn feature stores (Feast, Tecton, SageMaker Feature Store), feature engineering pipelines, online vs offline features, feature consistency, and point-in-time correctness. Understand feature monitoring, drift detection, and feature backfilling.',
        skills: ['Feature Stores', 'Feast', 'Feature Pipelines', 'Online Features', 'Point-in-time'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Feature Store Setup', 'Feature Pipeline', 'Online Serving'],
        topics: ['Feature Store', 'Feast', 'Tecton', 'Feature Registry', 'Feature Views', 'Online Store', 'Offline Store', 'Feature Engineering', 'ETL', 'Streaming Features', 'Point-in-time', 'Feature Drift'],
        outcome: 'Build scalable, consistent feature engineering systems'
      },
      {
        name: 'Model Deployment & Serving',
        description: 'Model deployment patterns, serving infrastructure, and scaling.',
        detailedDescription: 'Deploy models at scale. Learn model deployment patterns: embedded, model-as-service, model-in-container. Use serving tools: TensorFlow Serving, TorchServe, Triton Inference Server, KServe. Understand model optimization (quantization, pruning), batch inference, and auto-scaling.',
        skills: ['TF Serving', 'TorchServe', 'KServe', 'Model Optimization', 'Auto-scaling'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Model Server', 'KServe Deployment', 'Optimized Model'],
        topics: ['Model Deployment', 'Embedded', 'Model-as-Service', 'Docker', 'TF Serving', 'TorchServe', 'NVIDIA Triton', 'KServe', 'Model Optimization', 'Quantization', 'Pruning', 'ONNX', 'Batch Inference', 'Auto-scaling'],
        outcome: 'Deploy scalable, optimized model serving infrastructure'
      },
      {
        name: 'ML Monitoring & Governance',
        description: 'Model monitoring, drift detection, explainability, and ML governance.',
        detailedDescription: 'Monitor and govern ML in production. Learn model performance monitoring, data drift detection, concept drift, feature drift, model explainability (SHAP, LIME), model fairness and bias detection. Understand ML governance, model cards, responsible AI, and compliance.',
        skills: ['Model Monitoring', 'Drift Detection', 'Explainability', 'SHAP', 'ML Governance'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Monitoring Dashboard', 'Drift Detection System', 'Model Cards'],
        topics: ['Model Monitoring', 'Performance Degradation', 'Data Drift', 'Concept Drift', 'Feature Drift', 'Explainability', 'SHAP', 'LIME', 'Fairness', 'Bias Detection', 'Model Cards', 'ML Governance', 'Responsible AI'],
        outcome: 'Ensure reliable, fair, and governed ML production systems'
      }
    ]
  },
  {
    id: 'powerbi',
    title: 'Power BI Developer',
    description: 'Create interactive dashboards, reports, and business intelligence solutions with Microsoft Power BI.',
    icon: BarChart3,
    color: 'from-yellow-600 to-amber-700',
    duration: '4-6 months',
    level: 'Beginner',
    totalCourses: 8,
    skills: ['Power BI', 'DAX', 'Data Modeling', 'ETL', 'SQL'],
    stages: [
      {
        name: 'Power BI Fundamentals',
        description: 'Power BI Desktop interface, data sources, and basic visualizations.',
        detailedDescription: 'Get started with Power BI. Learn Power BI Desktop interface, connecting to data sources (Excel, SQL Server, SharePoint, web), basic transformations in Power Query, creating simple visualizations (tables, charts, cards, maps), and report layouts. Understand publish to Power BI Service.',
        skills: ['Power BI Desktop', 'Data Sources', 'Visualizations', 'Power Query', 'Publishing'],
        duration: '3 weeks',
        resources: 6,
        projects: ['First Dashboard', 'Sales Report', 'Data Connection Exercise'],
        topics: ['Power BI Desktop', 'Interface', 'Excel', 'SQL Server', 'SharePoint', 'Web', 'Power Query', 'Transformations', 'Tables', 'Charts', 'Cards', 'Maps', 'Slicers', 'Filters', 'Publishing'],
        outcome: 'Create basic Power BI reports and dashboards'
      },
      {
        name: 'Data Modeling in Power BI',
        description: 'Relationships, star schema, calculated columns, and basic DAX.',
        detailedDescription: 'Build robust data models. Learn table relationships (one-to-many, many-to-many), star schema design, calculated columns, measures, and basic DAX formulas. Understand filter context, row context, and evaluation context. Create hierarchies and organize data model.',
        skills: ['Data Modeling', 'Relationships', 'Star Schema', 'DAX', 'Calculated Columns'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Data Model Design', 'Relationship Setup', 'Basic DAX Measures'],
        topics: ['Relationships', 'One-to-Many', 'Many-to-Many', 'Cross-filter', 'Star Schema', 'Fact Tables', 'Dimension Tables', 'Calculated Columns', 'Measures', 'DAX', 'SUM', 'AVERAGE', 'COUNT', 'Filter Context'],
        outcome: 'Design efficient data models and write basic DAX'
      },
      {
        name: 'Advanced DAX',
        description: 'Time intelligence, CALCULATE, context transitions, and complex measures.',
        detailedDescription: 'Master DAX calculations. Learn CALCULATE function, context transitions, filter manipulation, time intelligence functions (YTD, MTD, QTD, YoY, MoM), iterator functions (SUMX, AVERAGEX), variables (VAR/RETURN), and advanced patterns. Handle complex business logic with DAX.',
        skills: ['Advanced DAX', 'CALCULATE', 'Time Intelligence', 'Iterators', 'Variables'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Time Intelligence Report', 'Complex KPIs', 'DAX Pattern Library'],
        topics: ['CALCULATE', 'Filter Context', 'Row Context', 'Context Transition', 'ALL', 'ALLEXCEPT', 'Time Intelligence', 'YTD', 'MTD', 'SAMEPERIODLASTYEAR', 'DATEADD', 'Iterators', 'SUMX', 'VAR', 'RETURN', 'SWITCH'],
        outcome: 'Write sophisticated DAX for complex business requirements'
      },
      {
        name: 'Power Query & ETL',
        description: 'Advanced M language, data transformation, and ETL patterns.',
        detailedDescription: 'Transform data with Power Query. Learn advanced M language, complex transformations, merging and appending queries, parameters, functions in M, error handling, and incremental refresh. Understand best practices for ETL in Power BI and query optimization.',
        skills: ['Power Query', 'M Language', 'ETL', 'Transformations', 'Incremental Refresh'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Complex ETL Pipeline', 'Parameterized Query', 'Incremental Refresh Setup'],
        topics: ['Power Query', 'M Language', 'Advanced Editor', 'Transformations', 'Merge', 'Append', 'Group By', 'Pivot', 'Unpivot', 'Parameters', 'Functions', 'Error Handling', 'Query Folding', 'Incremental Refresh'],
        outcome: 'Build robust, efficient data transformation pipelines'
      },
      {
        name: 'Power BI Service & Governance',
        description: 'Workspaces, sharing, row-level security, and deployment pipelines.',
        detailedDescription: 'Deploy and govern Power BI. Learn Power BI Service workspaces, app workspaces, sharing reports, dashboards, row-level security (RLS), data gateways, scheduled refresh, deployment pipelines (dev, test, prod). Understand Power BI governance, capacity management, and premium features.',
        skills: ['Power BI Service', 'RLS', 'Deployment Pipelines', 'Data Gateway', 'Governance'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Workspace Setup', 'RLS Implementation', 'Deployment Pipeline'],
        topics: ['Power BI Service', 'Workspaces', 'My Workspace', 'App Workspaces', 'Sharing', 'Apps', 'RLS', 'Dynamic RLS', 'Data Gateway', 'On-premises Gateway', 'Scheduled Refresh', 'Deployment Pipelines', 'Premium', 'Governance'],
        outcome: 'Deploy and manage enterprise Power BI solutions'
      }
    ]
  },
  {
    id: 'laravel',
    title: 'Laravel Developer',
    description: 'Master PHP web development with Laravel framework, Eloquent ORM, and modern PHP practices.',
    icon: Code,
    color: 'from-red-500 to-orange-600',
    duration: '6-8 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['PHP', 'Laravel', 'Eloquent', 'Blade', 'Livewire', 'Filament'],
    stages: [
      {
        name: 'PHP Fundamentals',
        description: 'Modern PHP 8+, OOP, namespaces, composer, and PSR standards.',
        detailedDescription: 'Master modern PHP programming. Learn PHP 8+ features including named arguments, union types, match expressions, nullsafe operator, attributes, and constructor property promotion. Understand OOP in PHP: classes, inheritance, traits, interfaces, abstract classes. Master Composer for dependency management, autoloading with PSR-4, and PSR standards.',
        skills: ['PHP 8', 'OOP', 'Composer', 'PSR', 'Namespaces', 'Traits'],
        duration: '5 weeks',
        resources: 10,
        projects: ['PHP CLI Application', 'OOP Calculator', 'Composer Package'],
        topics: ['PHP Syntax', 'Variables', 'Arrays', 'Functions', 'Classes', 'Objects', 'Inheritance', 'Traits', 'Interfaces', 'Namespaces', 'Autoloading', 'Composer', 'PSR-4', 'PSR Standards', 'PHP 8 Features'],
        outcome: 'Write modern, standards-compliant PHP code'
      },
      {
        name: 'Laravel Basics',
        description: 'Routing, controllers, views, migrations, and Eloquent ORM fundamentals.',
        detailedDescription: 'Build foundational Laravel skills. Learn Laravel installation, directory structure, routing (web, API, resource controllers), controllers, request handling, validation. Master Blade templating engine, components, layouts, slots. Understand database migrations, seeders, factories, and Eloquent ORM basics: models, relationships, query builder.',
        skills: ['Routing', 'Controllers', 'Blade', 'Migrations', 'Eloquent', 'Validation'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Blog System', 'Task Manager', 'E-commerce Catalog'],
        topics: ['Laravel Installation', 'Directory Structure', 'Routing', 'Controllers', 'Middleware', 'Requests', 'Validation', 'Blade', 'Components', 'Migrations', 'Seeders', 'Factories', 'Eloquent', 'Models', 'Relationships'],
        outcome: 'Build basic CRUD applications with Laravel'
      },
      {
        name: 'Advanced Eloquent & Database',
        description: 'Complex relationships, query optimization, scopes, and database design.',
        detailedDescription: 'Master Eloquent ORM at advanced level. Learn complex relationships (polymorphic, many-to-many with pivot tables), eager loading to solve N+1 problem, query scopes (local and global), accessors and mutators, casting, observers. Understand database transactions, query optimization, indexing, and raw SQL when needed.',
        skills: ['Eloquent', 'Relationships', 'Query Optimization', 'Scopes', 'Transactions'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Social Network', 'Inventory System', 'Multi-tenant SaaS'],
        topics: ['One-to-One', 'One-to-Many', 'Many-to-Many', 'Polymorphic', 'Pivot Tables', 'Eager Loading', 'Lazy Loading', 'Query Scopes', 'Accessors', 'Mutators', 'Casting', 'Observers', 'Transactions', 'Query Optimization'],
        outcome: 'Design efficient database layers with advanced Eloquent'
      },
      {
        name: 'Laravel Ecosystem',
        description: 'Livewire, Filament, queues, caching, and modern Laravel tools.',
        detailedDescription: 'Leverage modern Laravel ecosystem. Learn Livewire for dynamic interfaces without JavaScript, Filament for rapid admin panel development, Laravel Nova. Understand queue system with Redis/SQS, job classes, workers, scheduling. Learn caching strategies, rate limiting, broadcasting with Laravel Echo/Pusher, and real-time features.',
        skills: ['Livewire', 'Filament', 'Queues', 'Caching', 'Broadcasting'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Livewire Dashboard', 'Filament Admin', 'Real-time Chat'],
        topics: ['Livewire', 'Components', 'Actions', 'Filament', 'Resources', 'Forms', 'Tables', 'Queues', 'Jobs', 'Workers', 'Scheduler', 'Caching', 'Redis', 'Broadcasting', 'Laravel Echo', 'WebSockets'],
        outcome: 'Build modern, real-time applications with Laravel ecosystem'
      },
      {
        name: 'Testing & Deployment',
        description: 'PHPUnit, Pest, CI/CD, Laravel Forge, and production optimization.',
        detailedDescription: 'Deploy production-ready Laravel apps. Learn testing with PHPUnit/Pest: unit tests, feature tests, browser tests with Dusk. Understand CI/CD pipelines with GitHub Actions/GitLab CI. Deploy with Laravel Forge, Envoyer for zero-downtime deployments. Learn production optimization: OPcache, queue workers, horizon, Telescope for debugging.',
        skills: ['PHPUnit', 'Pest', 'Testing', 'CI/CD', 'Forge', 'Deployment'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Test Suite', 'CI/CD Pipeline', 'Production Deployment'],
        topics: ['PHPUnit', 'Pest', 'Unit Tests', 'Feature Tests', 'Mocking', 'Factories', 'Dusk', 'GitHub Actions', 'Laravel Forge', 'Envoyer', 'OPcache', 'Horizon', 'Telescope', 'Production Optimization'],
        outcome: 'Deploy tested, optimized Laravel applications to production'
      }
    ]
  },
  {
    id: 'react-developer',
    title: 'React Developer',
    description: 'Build modern user interfaces with React, hooks, state management, and ecosystem tools.',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 12,
    skills: ['React', 'Hooks', 'Redux', 'React Query', 'TypeScript', 'Testing'],
    stages: [
      {
        name: 'React Fundamentals',
        description: 'Components, JSX, props, state, and event handling basics.',
        detailedDescription: 'Master React core concepts. Learn JSX syntax and transformation, functional components vs class components, props and prop types, component composition. Understand React state with useState, event handling, conditional rendering, lists and keys, forms and controlled components. Learn about React Developer Tools.',
        skills: ['JSX', 'Components', 'Props', 'State', 'Events', 'Forms'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Todo App', 'Weather Widget', 'Shopping List'],
        topics: ['JSX', 'Components', 'Functional Components', 'Class Components', 'Props', 'Prop Drilling', 'State', 'useState', 'Events', 'onClick', 'onChange', 'Conditional Rendering', 'Lists', 'Keys', 'Forms', 'Controlled Components'],
        outcome: 'Build interactive UI components with React fundamentals'
      },
      {
        name: 'React Hooks Deep Dive',
        description: 'useEffect, useContext, custom hooks, and hook rules.',
        detailedDescription: 'Master React Hooks comprehensively. Learn useEffect for side effects, cleanup functions, dependency array patterns. Understand useContext for global state, useRef for DOM access and persistent values, useReducer for complex state logic. Create custom hooks for reusable logic: useLocalStorage, useFetch, useDebounce. Follow Rules of Hooks.',
        skills: ['useEffect', 'useContext', 'useRef', 'useReducer', 'Custom Hooks'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Data Fetching Hook', 'Form Hook', 'Theme Context'],
        topics: ['useEffect', 'Side Effects', 'Cleanup', 'Dependency Array', 'useContext', 'Context Provider', 'useRef', 'DOM Access', 'useReducer', 'Complex State', 'Custom Hooks', 'Hook Composition', 'Rules of Hooks'],
        outcome: 'Write clean, reusable logic with React Hooks'
      },
      {
        name: 'State Management',
        description: 'Redux, Zustand, Jotai, and state management patterns.',
        detailedDescription: 'Manage application state at scale. Learn Redux with Redux Toolkit: store, slices, reducers, actions, async thunks. Understand Zustand for simple state management, Jotai/Recoil for atomic state. Learn when to use each solution, normalization patterns, selectors with Reselect, and Redux DevTools.',
        skills: ['Redux', 'Redux Toolkit', 'Zustand', 'Jotai', 'State Patterns'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Redux Store', 'Zustand State', 'Atomic State Management'],
        topics: ['Redux', 'Store', 'Actions', 'Reducers', 'Redux Toolkit', 'Slices', 'createSlice', 'Async Thunks', 'Zustand', 'Jotai', 'Atoms', 'Selectors', 'Normalization', 'DevTools'],
        outcome: 'Choose and implement appropriate state management solutions'
      },
      {
        name: 'React Ecosystem',
        description: 'React Router, React Query, styling solutions, and form libraries.',
        detailedDescription: 'Leverage React ecosystem. Learn React Router v6: routing, nested routes, loaders, actions. Master React Query/TanStack Query for server state: caching, synchronization, mutations. Understand styling: CSS Modules, Styled Components, Tailwind CSS. Learn form handling with React Hook Form and validation with Zod/Yup.',
        skills: ['React Router', 'React Query', 'Tailwind', 'React Hook Form', 'Zod'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Multi-page App', 'Data Dashboard', 'Complex Forms'],
        topics: ['React Router', 'Routes', 'Outlet', 'Loaders', 'Actions', 'React Query', 'useQuery', 'useMutation', 'Caching', 'Tailwind CSS', 'CSS Modules', 'Styled Components', 'React Hook Form', 'Zod', 'Validation'],
        outcome: 'Build complete applications with React ecosystem tools'
      },
      {
        name: 'Advanced React & Performance',
        description: 'Performance optimization, testing, TypeScript, and patterns.',
        detailedDescription: 'Master advanced React patterns. Learn performance: memo, useMemo, useCallback, React.memo, code splitting, lazy loading, Suspense. Understand testing with Jest and React Testing Library: unit tests, integration tests, mocking. Add TypeScript for type safety: generics, utility types, component types. Learn compound components, render props, HOCs.',
        skills: ['Performance', 'TypeScript', 'Testing', 'Patterns', 'Code Splitting'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Optimized App', 'TypeScript Migration', 'Test Suite'],
        topics: ['React.memo', 'useMemo', 'useCallback', 'Code Splitting', 'lazy', 'Suspense', 'TypeScript', 'Generics', 'Utility Types', 'Jest', 'React Testing Library', 'Mocking', 'Compound Components', 'Render Props', 'Custom Renderers'],
        outcome: 'Build performant, type-safe, well-tested React applications'
      }
    ]
  },
  {
    id: 'nextjs-developer',
    title: 'Next.js Developer',
    description: 'Build production React applications with SSR, SSG, API routes, and the App Router.',
    icon: Globe,
    color: 'from-gray-700 to-gray-900',
    duration: '6-8 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['Next.js', 'App Router', 'SSR', 'API Routes', 'Vercel', 'Edge'],
    stages: [
      {
        name: 'Next.js Fundamentals',
        description: 'Pages Router, routing, data fetching, and Static Site Generation.',
        detailedDescription: 'Master Next.js core concepts. Learn Pages Router: file-based routing, dynamic routes, catch-all routes. Understand data fetching: getStaticProps, getServerSideProps, getStaticPaths. Learn Link component, Image optimization, Script component. Create layouts with _app and _document. Understand client-side navigation and prefetching.',
        skills: ['Pages Router', 'SSG', 'SSR', 'Data Fetching', 'Image Optimization'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Portfolio Site', 'Blog with SSG', 'Dashboard with SSR'],
        topics: ['Next.js Setup', 'Pages Router', 'File Routing', 'Dynamic Routes', 'getStaticProps', 'getServerSideProps', 'getStaticPaths', 'Link', 'Image', 'Script', '_app', '_document', 'Prefetching'],
        outcome: 'Build SEO-friendly apps with Pages Router'
      },
      {
        name: 'App Router & Server Components',
        description: 'Next.js 13+ App Router, React Server Components, and Server Actions.',
        detailedDescription: 'Master modern Next.js with App Router. Learn app directory structure, layout hierarchy, loading states with loading.js, error handling with error.js. Understand React Server Components: fetching data in components, streaming, nested layouts. Learn Server Actions for mutations without API routes.',
        skills: ['App Router', 'Server Components', 'Server Actions', 'Streaming', 'Layouts'],
        duration: '6 weeks',
        resources: 12,
        projects: ['App Router Migration', 'Server Component App', 'Streaming Dashboard'],
        topics: ['App Router', 'app Directory', 'Layout', 'Page', 'Loading', 'Error', 'Server Components', 'Client Components', 'use client', 'Server Actions', 'revalidatePath', 'Streaming', 'Suspense', 'Parallel Routes'],
        outcome: 'Build modern apps with App Router architecture'
      },
      {
        name: 'API Routes & Backend',
        description: 'API routes, middleware, authentication, and database integration.',
        detailedDescription: 'Build backend with Next.js. Learn API routes in both Pages and App Router, Route Handlers, request/response handling, middleware for auth and redirects. Integrate databases with Prisma or Mongoose. Implement authentication with NextAuth.js: OAuth, credentials, JWT sessions. Understand caching strategies and revalidation.',
        skills: ['API Routes', 'Middleware', 'NextAuth', 'Prisma', 'Authentication'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Full-stack CRUD', 'Auth System', 'API Integration'],
        topics: ['API Routes', 'Route Handlers', 'Request', 'Response', 'Middleware', 'Matchers', 'NextAuth.js', 'Providers', 'Callbacks', 'Prisma', 'Database', 'OAuth', 'JWT', 'Session', 'Caching', 'Revalidation'],
        outcome: 'Create full-stack applications with Next.js backend'
      },
      {
        name: 'Performance & Deployment',
        description: 'Edge Runtime, ISR, image optimization, and Vercel deployment.',
        detailedDescription: 'Optimize and deploy Next.js apps. Learn Incremental Static Regeneration (ISR), Edge Runtime for middleware and API routes, image optimization with next/image. Understand Core Web Vitals optimization, bundle analysis, tree shaking. Deploy to Vercel with preview deployments, environment variables, analytics.',
        skills: ['ISR', 'Edge Runtime', 'Vercel', 'Performance', 'Analytics'],
        duration: '4 weeks',
        resources: 8,
        projects: ['ISR Implementation', 'Edge API', 'Vercel Deployment'],
        topics: ['ISR', 'Revalidate', 'Edge Runtime', 'Edge API', 'Middleware Edge', 'Image Optimization', 'next/image', 'Core Web Vitals', 'Lighthouse', 'Bundle Analysis', 'Vercel', 'Preview Deployments', 'Environment Variables', 'Analytics'],
        outcome: 'Deploy optimized, high-performance Next.js applications'
      }
    ]
  },
  {
    id: 'nodejs-developer',
    title: 'Node.js Developer',
    description: 'Build scalable server-side applications with JavaScript runtime, Express, and modern Node.js.',
    icon: Server,
    color: 'from-green-600 to-emerald-700',
    duration: '6-8 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['Node.js', 'Express', 'NestJS', 'TypeScript', 'MongoDB', 'Redis'],
    stages: [
      {
        name: 'Node.js Fundamentals',
        description: 'Event loop, modules, file system, streams, and core concepts.',
        detailedDescription: 'Master Node.js internals. Learn event-driven architecture, event loop phases, non-blocking I/O. Understand CommonJS vs ES modules, built-in modules: fs, path, http, events, stream, buffer. Work with file system operations, readable/writable streams, piping. Learn process management, environment variables, and clustering.',
        skills: ['Event Loop', 'Modules', 'Streams', 'File System', 'Clustering'],
        duration: '5 weeks',
        resources: 10,
        projects: ['File Processor', 'Stream Transformer', 'CLI Tool'],
        topics: ['Event Loop', 'Phases', 'Non-blocking', 'CommonJS', 'ES Modules', 'require', 'import', 'fs', 'path', 'http', 'events', 'EventEmitter', 'Streams', 'Buffer', 'process', 'cluster', 'child_process'],
        outcome: 'Understand Node.js runtime and build system tools'
      },
      {
        name: 'Express.js Mastery',
        description: 'Routing, middleware, error handling, authentication, and validation.',
        detailedDescription: 'Build web APIs with Express. Learn routing: parameters, query strings, route handlers. Master middleware: built-in, custom, third-party (cors, helmet, morgan). Understand request/response cycle, error handling middleware. Implement authentication with Passport.js: JWT, OAuth, sessions. Add validation with express-validator or Joi.',
        skills: ['Express', 'Middleware', 'Routing', 'Passport.js', 'Validation'],
        duration: '6 weeks',
        resources: 12,
        projects: ['REST API', 'Authentication System', 'E-commerce Backend'],
        topics: ['Express Setup', 'Routing', 'Router', 'Parameters', 'Query', 'Middleware', 'app.use', 'Error Handling', 'Passport.js', 'JWT', 'OAuth', 'Sessions', 'express-validator', 'Joi', 'Security', 'Helmet'],
        outcome: 'Build robust REST APIs with Express.js'
      },
      {
        name: 'Database Integration',
        description: 'MongoDB with Mongoose, PostgreSQL with Sequelize/Prisma, and caching.',
        detailedDescription: 'Integrate databases with Node.js. Learn MongoDB with Mongoose: schemas, models, queries, aggregation, population. Understand SQL with PostgreSQL using Sequelize ORM or Prisma: migrations, relations, transactions. Add Redis for caching and sessions. Learn connection pooling and database optimization.',
        skills: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma', 'Redis'],
        duration: '6 weeks',
        resources: 12,
        projects: ['MongoDB API', 'SQL Backend', 'Caching Layer'],
        topics: ['MongoDB', 'Mongoose', 'Schema', 'Model', 'Query', 'Aggregation', 'Population', 'PostgreSQL', 'Sequelize', 'Prisma', 'Migrations', 'Relations', 'Transactions', 'Redis', 'Caching', 'Sessions'],
        outcome: 'Design efficient database layers for Node.js applications'
      },
      {
        name: 'Advanced Node.js',
        description: 'WebSocket, GraphQL, testing, and microservices with Node.js.',
        detailedDescription: 'Build advanced Node.js applications. Learn WebSocket with Socket.io for real-time features. Implement GraphQL with Apollo Server: schemas, resolvers, mutations, subscriptions. Write tests with Jest and Supertest: unit, integration, e2e. Understand microservices with NestJS or Express, inter-service communication, message queues.',
        skills: ['Socket.io', 'GraphQL', 'Apollo', 'Jest', 'Microservices'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Real-time Chat', 'GraphQL API', 'Microservices System'],
        topics: ['WebSocket', 'Socket.io', 'Events', 'Rooms', 'GraphQL', 'Apollo Server', 'Schema', 'Resolvers', 'Mutations', 'Subscriptions', 'Jest', 'Supertest', 'Mocking', 'NestJS', 'Microservices', 'RabbitMQ', 'gRPC'],
        outcome: 'Build scalable, real-time, well-tested Node.js systems'
      }
    ]
  },
  {
    id: 'nuxt-developer',
    title: 'Nuxt.js Developer',
    description: 'Build Vue-based universal applications with SSR, SSG, and the Nitro engine.',
    icon: Layers,
    color: 'from-emerald-500 to-green-600',
    duration: '5-7 months',
    level: 'Intermediate',
    totalCourses: 10,
    skills: ['Vue.js', 'Nuxt', 'Pinia', 'SSR', 'Nitro', 'Composition API'],
    stages: [
      {
        name: 'Vue.js Fundamentals',
        description: 'Vue 3 Composition API, reactivity, components, and Vue ecosystem.',
        detailedDescription: 'Master Vue.js 3 with Composition API. Learn reactive data with ref and reactive, computed properties, watchers. Understand lifecycle hooks, template syntax, conditional rendering, list rendering. Learn component composition: props, emits, slots, provide/inject. Setup Vue with Vite, Single File Components (SFC).',
        skills: ['Composition API', 'Reactivity', 'Components', 'Vue SFC', 'Vite'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Vue Todo', 'Component Library', 'Dashboard Widgets'],
        topics: ['Vue 3', 'Composition API', 'ref', 'reactive', 'computed', 'watch', 'watchEffect', 'Lifecycle', 'Template', 'v-if', 'v-for', 'Props', 'Emits', 'Slots', 'Provide', 'Inject', 'Vite', 'SFC'],
        outcome: 'Build reactive Vue.js components with Composition API'
      },
      {
        name: 'Nuxt.js Fundamentals',
        description: 'File-based routing, layouts, pages, and Nuxt auto-imports.',
        detailedDescription: 'Learn Nuxt.js core concepts. Understand file-based routing: pages directory, dynamic routes, nested routes. Learn layouts: default, custom, dynamic layouts. Master auto-imports: components, composables, utils. Use NuxtLink for navigation, useHead for SEO. Understand plugins, middleware, and error handling.',
        skills: ['Nuxt Routing', 'Layouts', 'Auto-imports', 'Plugins', 'Middleware'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Nuxt Portfolio', 'Blog Site', 'Multi-layout App'],
        topics: ['Nuxt Setup', 'Pages', 'Routing', 'Dynamic Routes', 'Layouts', 'Default Layout', 'Custom Layout', 'Auto-imports', 'Components', 'Composables', 'NuxtLink', 'useHead', 'SEO', 'Plugins', 'Middleware'],
        outcome: 'Build multi-page applications with Nuxt.js'
      },
      {
        name: 'Data Fetching & State',
        description: 'useFetch, useAsyncData, Pinia, and server-side data.',
        detailedDescription: 'Manage data in Nuxt apps. Learn useFetch for data fetching, useAsyncData for complex scenarios. Understand SSR data hydration, client-only fetching. Use Pinia for state management: store setup, actions, getters, composition API syntax. Learn server API routes with Nitro, server middleware.',
        skills: ['useFetch', 'useAsyncData', 'Pinia', 'SSR', 'Nitro API'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Data Dashboard', 'SSR App', 'State Management Demo'],
        topics: ['useFetch', 'useAsyncData', 'Lazy Fetching', 'SSR', 'Hydration', 'Client-only', 'Pinia', 'Store', 'Actions', 'Getters', 'Nitro', 'Server API', 'Server Routes', 'Server Middleware'],
        outcome: 'Implement efficient data fetching and state management'
      },
      {
        name: 'Nuxt Modules & Deployment',
        description: 'Nuxt modules, Content module, Image optimization, and deployment.',
        detailedDescription: 'Extend Nuxt with modules. Learn Nuxt Image for optimization, Nuxt Content for Markdown-based content. Use popular modules: @nuxtjs/tailwindcss, @nuxtjs/i18n, @nuxtjs/algolia. Understand Nitro presets for deployment, serverless deployment on Vercel/Netlify, static generation. Learn environment configuration.',
        skills: ['Nuxt Modules', 'Nuxt Content', 'Nuxt Image', 'i18n', 'Deployment'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Content-driven Site', 'Image Gallery', 'Multi-language App'],
        topics: ['Nuxt Modules', 'Installation', 'Configuration', 'Nuxt Image', 'Nuxt Content', 'Markdown', '@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'Internationalization', 'Nitro Presets', 'Vercel', 'Netlify', 'Static Generation', 'SSR Deployment'],
        outcome: 'Deploy feature-rich Nuxt applications to production'
      }
    ]
  },
  {
    id: 'java-developer',
    title: 'Java Developer',
    description: 'Master Java SE, enterprise patterns with Java EE/Jakarta EE, Spring Framework, and JVM ecosystem.',
    icon: Coffee,
    color: 'from-orange-600 to-red-700',
    duration: '10-12 months',
    level: 'Intermediate',
    totalCourses: 16,
    skills: ['Java', 'Spring', 'Spring Boot', 'JPA', 'Microservices', 'Maven'],
    stages: [
      {
        name: 'Java SE Fundamentals',
        description: 'Core Java, OOP, collections, generics, lambdas, and streams.',
        detailedDescription: 'Master Java Standard Edition. Learn Java syntax, data types, control structures, arrays. Deep dive into OOP: classes, objects, inheritance, polymorphism, encapsulation, abstraction. Master collections framework: List, Set, Map, Queue. Understand generics, lambda expressions, functional interfaces, Stream API for functional programming.',
        skills: ['Java Core', 'OOP', 'Collections', 'Generics', 'Streams', 'Lambdas'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Java CLI App', 'Collections Practice', 'Stream Processing'],
        topics: ['Java Syntax', 'Variables', 'Data Types', 'Control Flow', 'Arrays', 'Classes', 'Objects', 'Inheritance', 'Polymorphism', 'Encapsulation', 'Abstraction', 'Interfaces', 'Collections', 'ArrayList', 'HashMap', 'Generics', 'Lambda', 'Stream API', 'Functional Interfaces'],
        outcome: 'Write solid Java code with modern language features'
      },
      {
        name: 'Advanced Java',
        description: 'Multithreading, concurrency, I/O, networking, and JVM internals.',
        detailedDescription: 'Master advanced Java features. Learn multithreading: Thread class, Runnable, ExecutorService, thread pools. Understand synchronization, locks, concurrent collections, CompletableFuture. Learn I/O operations: File I/O, NIO, serialization. Understand JVM: memory model, garbage collection, performance tuning.',
        skills: ['Multithreading', 'Concurrency', 'I/O', 'JVM', 'GC', 'Performance'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Concurrent App', 'File Processor', 'Network Client'],
        topics: ['Thread', 'Runnable', 'ExecutorService', 'Thread Pool', 'Synchronized', 'Locks', 'ReentrantLock', 'ConcurrentHashMap', 'CompletableFuture', 'File I/O', 'NIO', 'Serialization', 'JVM', 'Heap', 'Stack', 'Garbage Collection', 'G1', 'ZGC', 'JVM Tuning'],
        outcome: 'Build performant, concurrent Java applications'
      },
      {
        name: 'Spring Framework',
        description: 'Spring Core, dependency injection, AOP, and Spring ecosystem.',
        detailedDescription: 'Master Spring Framework. Learn Inversion of Control (IoC), dependency injection with annotations, bean lifecycle, scopes. Understand Spring AOP for cross-cutting concerns. Learn Spring Data JPA: repositories, queries, transactions. Use Spring Security for authentication and authorization.',
        skills: ['Spring', 'DI', 'IoC', 'AOP', 'Spring Data', 'Spring Security'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Spring DI Demo', 'JPA Repository', 'Secured API'],
        topics: ['Spring', 'IoC', 'Dependency Injection', '@Autowired', '@Component', '@Service', '@Repository', 'Bean Lifecycle', 'Scopes', 'AOP', 'Aspect', 'Pointcut', 'Advice', 'Spring Data JPA', 'Repository', 'CrudRepository', 'JpaRepository', 'Spring Security', 'Authentication', 'Authorization'],
        outcome: 'Build enterprise applications with Spring Framework'
      },
      {
        name: 'Spring Boot & Microservices',
        description: 'Spring Boot auto-configuration, microservices, cloud-native Java.',
        detailedDescription: 'Build microservices with Spring Boot. Learn auto-configuration, Spring Boot starters, Actuator for monitoring. Create REST APIs with Spring MVC/WebFlux. Understand microservices patterns: service discovery with Eureka, API gateway with Spring Cloud Gateway, config server. Learn distributed tracing, resilience with Resilience4j.',
        skills: ['Spring Boot', 'Microservices', 'Eureka', 'Gateway', 'Resilience4j'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Spring Boot API', 'Microservices System', 'Cloud Native App'],
        topics: ['Spring Boot', 'Auto-configuration', 'Starters', 'application.properties', 'Actuator', 'Spring MVC', 'REST Controller', 'WebFlux', 'Reactive', 'Microservices', 'Eureka', 'Service Discovery', 'Spring Cloud Gateway', 'Config Server', 'Resilience4j', 'Circuit Breaker', 'Distributed Tracing'],
        outcome: 'Deploy scalable Spring Boot microservices'
      }
    ]
  },
  {
    id: 'kotlin-developer',
    title: 'Kotlin Developer',
    description: 'Write concise, safe code with Kotlin for Android, backend with Ktor/Spring, and multiplatform projects.',
    icon: Box,
    color: 'from-purple-600 to-violet-700',
    duration: '6-8 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['Kotlin', 'Coroutines', 'Ktor', 'Android', 'Multiplatform', 'Flow'],
    stages: [
      {
        name: 'Kotlin Basics',
        description: 'Kotlin syntax, null safety, functions, OOP, and standard library.',
        detailedDescription: 'Master Kotlin fundamentals. Learn Kotlin syntax differences from Java: val/var, type inference, string templates. Understand null safety: nullable types, safe calls, Elvis operator, let, run. Learn functions: default parameters, named arguments, vararg, infix, extension functions. Master OOP: classes, data classes, sealed classes, interfaces, delegation.',
        skills: ['Kotlin Syntax', 'Null Safety', 'Extension Functions', 'Data Classes', 'Delegation'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Kotlin CLI', 'Data Class Demo', 'DSL Builder'],
        topics: ['val', 'var', 'Type Inference', 'String Templates', 'Null Safety', '?', '!!', '?.', '?:', 'let', 'run', 'Functions', 'Default Parameters', 'Named Arguments', 'Extension Functions', 'Infix', 'Classes', 'Data Classes', 'Sealed Classes', 'Delegation', 'by'],
        outcome: 'Write idiomatic Kotlin code leveraging modern features'
      },
      {
        name: 'Coroutines & Flow',
        description: 'Asynchronous programming with coroutines, Flow, and structured concurrency.',
        detailedDescription: 'Master Kotlin asynchronous programming. Learn coroutines: suspend functions, launch, async/await, Dispatchers. Understand structured concurrency, Job hierarchy, cancellation. Learn Flow for reactive streams: cold vs hot flows, operators (map, filter, transform), StateFlow, SharedFlow. Use Channels for communication.',
        skills: ['Coroutines', 'Flow', 'Suspend', 'Dispatchers', 'StateFlow', 'Channels'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Coroutine Network', 'Flow UI Updates', 'Chat with Channels'],
        topics: ['Coroutines', 'suspend', 'launch', 'async', 'await', 'Dispatchers', 'Main', 'IO', 'Default', 'Job', 'SupervisorJob', 'Structured Concurrency', 'Cancellation', 'Flow', 'Cold Flow', 'Hot Flow', 'Operators', 'StateFlow', 'SharedFlow', 'Channels', 'produce', 'consume'],
        outcome: 'Handle asynchronous operations elegantly with coroutines'
      },
      {
        name: 'Kotlin for Backend',
        description: 'Ktor framework, Spring with Kotlin, Exposed ORM, and backend development.',
        detailedDescription: 'Build backend with Kotlin. Learn Ktor: routing, requests/responses, serialization, authentication, WebSockets. Use Spring Boot with Kotlin for enterprise apps. Learn Exposed ORM for type-safe SQL. Understand Kotlin DSLs for configuration, testing with Kotest.',
        skills: ['Ktor', 'Spring Boot', 'Exposed', 'Kotlin DSL', 'Kotest'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Ktor API', 'Spring Kotlin', 'Exposed Database'],
        topics: ['Ktor', 'Routing', 'get', 'post', 'Parameters', 'Request', 'Response', 'Content Negotiation', 'Serialization', 'Kotlinx Serialization', 'Authentication', 'JWT', 'WebSockets', 'Spring Boot', 'Exposed', 'Table', 'DAO', 'DSL', 'Kotest'],
        outcome: 'Create robust backend services with Kotlin'
      },
      {
        name: 'Kotlin Multiplatform',
        description: 'KMP for shared code, Compose Multiplatform, and cross-platform development.',
        detailedDescription: 'Share code across platforms with Kotlin Multiplatform. Learn expect/actual mechanism, platform-specific implementations. Use Kotlin Multiplatform Mobile (KMM) for Android/iOS sharing. Understand Compose Multiplatform for UI sharing. Learn building libraries for JS, Native targets.',
        skills: ['KMP', 'KMM', 'Compose Multiplatform', 'expect/actual', 'Shared Code'],
        duration: '5 weeks',
        resources: 10,
        projects: ['KMP Library', 'KMM App', 'Compose Multiplatform'],
        topics: ['Kotlin Multiplatform', 'KMP', 'Common', 'expect', 'actual', 'Platform-specific', 'KMM', 'Android', 'iOS', 'Compose Multiplatform', 'Shared UI', 'JS Target', 'Native', 'WASM', 'Gradle KMP Plugin'],
        outcome: 'Develop cross-platform applications with shared Kotlin code'
      }
    ]
  },
  {
    id: 'cpp-developer',
    title: 'C++ Developer',
    description: 'Master systems programming, game development, embedded systems, and performance-critical applications with C++.',
    icon: Terminal,
    color: 'from-blue-700 to-indigo-800',
    duration: '10-12 months',
    level: 'Advanced',
    totalCourses: 18,
    skills: ['C++', 'STL', 'Memory Management', 'Multithreading', 'CMake', 'Performance'],
    stages: [
      {
        name: 'C++ Fundamentals',
        description: 'C++ syntax, pointers, references, memory model, and basic OOP.',
        detailedDescription: 'Master C++ core language. Learn C++ syntax, data types, control structures. Understand pointers vs references, pointer arithmetic, dynamic memory allocation with new/delete. Learn references, const correctness, function overloading. Master basic OOP: classes, constructors, destructors, inheritance, polymorphism with virtual functions.',
        skills: ['Pointers', 'References', 'Memory', 'Classes', 'Inheritance', 'Polymorphism'],
        duration: '7 weeks',
        resources: 14,
        projects: ['Pointer Exercises', 'Class Hierarchy', 'Memory Manager'],
        topics: ['C++ Syntax', 'Variables', 'Arrays', 'Pointers', 'References', '&', '*', 'new', 'delete', 'const', 'Functions', 'Overloading', 'Classes', 'Constructor', 'Destructor', 'Inheritance', 'Polymorphism', 'Virtual', 'Override'],
        outcome: 'Write foundational C++ with proper memory awareness'
      },
      {
        name: 'Modern C++',
        description: 'C++11/14/17/20 features: smart pointers, auto, lambdas, move semantics.',
        detailedDescription: 'Master modern C++ features. Learn smart pointers: unique_ptr, shared_ptr, weak_ptr for automatic memory management. Understand auto, decltype for type inference. Use range-based for loops, nullptr. Master lambdas, function objects. Learn move semantics, rvalue references, perfect forwarding. Use constexpr, auto for compile-time programming.',
        skills: ['Smart Pointers', 'Lambdas', 'Move Semantics', 'Auto', 'Modern Features'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Smart Pointer Usage', 'Lambda Library', 'Move Optimization'],
        topics: ['C++11', 'C++14', 'C++17', 'C++20', 'Smart Pointers', 'unique_ptr', 'shared_ptr', 'weak_ptr', 'auto', 'decltype', 'Range-based for', 'nullptr', 'Lambdas', 'Capture', 'Move Semantics', 'Rvalue References', 'Perfect Forwarding', 'constexpr'],
        outcome: 'Write safe, efficient code with modern C++ features'
      },
      {
        name: 'STL & Data Structures',
        description: 'Standard Template Library containers, algorithms, iterators, and custom data structures.',
        detailedDescription: 'Master STL and build custom structures. Learn STL containers: vector, list, deque, map, set, unordered_map. Understand iterators, algorithms: sort, find, transform, lambda with algorithms. Learn custom allocators. Build custom data structures: linked lists, trees, hash tables with templates.',
        skills: ['STL', 'Containers', 'Algorithms', 'Iterators', 'Templates', 'Data Structures'],
        duration: '6 weeks',
        resources: 12,
        projects: ['STL Mastery', 'Custom Container', 'Algorithm Library'],
        topics: ['STL', 'vector', 'list', 'deque', 'map', 'set', 'unordered_map', 'Iterators', 'begin', 'end', 'Algorithms', 'sort', 'find', 'transform', 'Lambda', 'Templates', 'Generic Programming', 'Custom Containers', 'Allocators'],
        outcome: 'Leverage STL and build generic data structures'
      },
      {
        name: 'Advanced C++',
        description: 'Multithreading, networking, templates metaprogramming, and optimization.',
        detailedDescription: 'Master advanced C++ topics. Learn multithreading with thread, mutex, condition_variable, async, futures, thread pools. Understand network programming with sockets, Boost.Asio. Learn template metaprogramming: SFINAE, concepts (C++20), variadic templates. Optimize code: profiling, cache efficiency, SIMD. Use CMake for build management.',
        skills: ['Multithreading', 'Networking', 'Metaprogramming', 'Optimization', 'CMake'],
        duration: '8 weeks',
        resources: 16,
        projects: ['Thread Pool', 'Network Server', 'Template Library'],
        topics: ['thread', 'mutex', 'lock_guard', 'unique_lock', 'condition_variable', 'async', 'future', 'promise', 'Thread Pool', 'Sockets', 'TCP', 'UDP', 'Boost.Asio', 'Templates', 'SFINAE', 'Concepts', 'Variadic Templates', 'Profiling', 'Optimization', 'CMake'],
        outcome: 'Build high-performance, concurrent C++ applications'
      }
    ]
  },
  {
    id: 'python-developer',
    title: 'Python Developer',
    description: 'Master versatile Python for web development, data science, automation, and software engineering.',
    icon: Code,
    color: 'from-yellow-500 to-amber-600',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 12,
    skills: ['Python', 'Django', 'Flask', 'FastAPI', 'SQLAlchemy', 'Celery'],
    stages: [
      {
        name: 'Python Fundamentals',
        description: 'Python syntax, data structures, functions, OOP, and standard library.',
        detailedDescription: 'Master Python basics thoroughly. Learn Python syntax, data types: int, float, string, bool, None. Understand data structures: list, tuple, dict, set, comprehensions. Learn functions: arguments, return values, *args, **kwargs, decorators. Master OOP: classes, inheritance, encapsulation, polymorphism, magic methods. Use standard library modules effectively.',
        skills: ['Python Core', 'Data Structures', 'Functions', 'OOP', 'Standard Library'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Python Scripts', 'Data Structure Library', 'OOP Examples'],
        topics: ['Python Syntax', 'Variables', 'Data Types', 'Strings', 'Lists', 'Tuples', 'Dictionaries', 'Sets', 'Comprehensions', 'Functions', 'Arguments', 'Return', '*args', '**kwargs', 'Decorators', 'Classes', 'Inheritance', 'Encapsulation', 'Magic Methods', 'Modules', 'Packages'],
        outcome: 'Write clean, Pythonic code with core language features'
      },
      {
        name: 'Advanced Python',
        description: 'Generators, iterators, context managers, metaclasses, and concurrency.',
        detailedDescription: 'Master advanced Python features. Learn generators and iterators: yield, iter, next, generator expressions. Understand context managers: with statement, __enter__, __exit__, contextlib. Learn metaclasses for class customization. Master concurrency: threading, multiprocessing, asyncio for async programming.',
        skills: ['Generators', 'Iterators', 'Context Managers', 'Asyncio', 'Concurrency'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Generator Pipeline', 'Context Manager', 'Async Application'],
        topics: ['Generators', 'yield', 'Generator Expressions', 'Iterators', 'iter', 'next', 'Context Managers', 'with', '__enter__', '__exit__', 'contextlib', 'Metaclasses', 'type', 'Concurrency', 'threading', 'multiprocessing', 'asyncio', 'async', 'await'],
        outcome: 'Write efficient, concurrent Python applications'
      },
      {
        name: 'Python Web Development',
        description: 'Django, Flask, FastAPI, and modern Python web frameworks.',
        detailedDescription: 'Build web applications with Python. Learn Django: MTV pattern, ORM, admin, forms, authentication, REST with DRF. Understand Flask: micro-framework, Jinja2 templates, SQLAlchemy, extensions. Master FastAPI: modern async framework, automatic API documentation, Pydantic validation, dependency injection.',
        skills: ['Django', 'Flask', 'FastAPI', 'ORM', 'REST API'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Django App', 'Flask API', 'FastAPI Service'],
        topics: ['Django', 'MTV', 'Models', 'Views', 'Templates', 'ORM', 'Migrations', 'Admin', 'Forms', 'DRF', 'Flask', 'Routing', 'Jinja2', 'SQLAlchemy', 'FastAPI', 'Pydantic', 'Dependency Injection', 'async', 'OpenAPI'],
        outcome: 'Create web applications and APIs with Python frameworks'
      },
      {
        name: 'Python Ecosystem',
        description: 'Testing, packaging, Celery, Docker, and deployment.',
        detailedDescription: 'Master Python ecosystem tools. Learn testing: pytest, unittest, mocking, fixtures, coverage. Understand packaging: setuptools, poetry, pipenv, creating packages. Learn Celery for distributed task queues with Redis/RabbitMQ. Containerize with Docker, deploy to cloud platforms.',
        skills: ['Pytest', 'Packaging', 'Celery', 'Docker', 'Deployment'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Test Suite', 'Python Package', 'Distributed Tasks'],
        topics: ['pytest', 'unittest', 'Mock', 'Patch', 'Fixtures', 'Coverage', 'setuptools', 'setup.py', 'Poetry', 'Pipenv', 'Celery', 'Tasks', 'Workers', 'Redis', 'RabbitMQ', 'Docker', 'Dockerfile', 'docker-compose', 'Deployment', 'AWS', 'GCP'],
        outcome: 'Deploy production-ready Python applications'
      }
    ]
  },
  {
    id: 'go-developer',
    title: 'Go Developer',
    description: 'Build high-performance, concurrent backend systems and cloud-native applications with Go.',
    icon: Terminal,
    color: 'from-cyan-600 to-blue-700',
    duration: '6-8 months',
    level: 'Intermediate',
    totalCourses: 12,
    skills: ['Go', 'Goroutines', 'Channels', 'Gin', 'gRPC', 'Kubernetes'],
    stages: [
      {
        name: 'Go Fundamentals',
        description: 'Go syntax, packages, types, control structures, and basic constructs.',
        detailedDescription: 'Master Go programming fundamentals. Learn Go syntax, variables, constants, data types (int, float, string, bool, rune, byte). Understand control structures: if/else, switch, for loops. Learn arrays, slices, maps, structs. Master functions: multiple returns, variadic functions, closures. Understand packages, imports, and Go module system.',
        skills: ['Go Syntax', 'Types', 'Slices', 'Maps', 'Structs', 'Functions'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Go CLI Tool', 'Data Processor', 'File Utilities'],
        topics: ['Go Installation', 'gofmt', 'go mod', 'Variables', 'Constants', 'Int', 'Float', 'String', 'Bool', 'Rune', 'Byte', 'Arrays', 'Slices', 'Maps', 'Structs', 'If/Else', 'Switch', 'For Loops', 'Functions', 'Multiple Returns', 'Variadic', 'Packages', 'Imports'],
        outcome: 'Write idiomatic Go code with core language features'
      },
      {
        name: 'Go OOP & Interfaces',
        description: 'Methods, interfaces, embedding, and Go approach to object-oriented programming.',
        detailedDescription: 'Master Go type system. Learn methods with receivers, pointer vs value receivers. Understand interfaces: implicit implementation, empty interface, type assertions, type switches. Learn struct embedding for composition over inheritance. Master error handling with error interface, custom errors, error wrapping with fmt.Errorf and errors.Is.',
        skills: ['Methods', 'Interfaces', 'Embedding', 'Error Handling', 'Composition'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Interface Design', 'Error Handling Library', 'Shape Calculator'],
        topics: ['Methods', 'Receivers', 'Pointer Receivers', 'Value Receivers', 'Interfaces', 'Implicit Implementation', 'Empty Interface', 'Type Assertion', 'Type Switch', 'Embedding', 'Composition', 'Error Interface', 'Custom Errors', 'Error Wrapping', 'errors.Is', 'errors.As'],
        outcome: 'Design flexible, composable systems with Go interfaces'
      },
      {
        name: 'Concurrency in Go',
        description: 'Goroutines, channels, select, sync package, and concurrent patterns.',
        detailedDescription: 'Master Go concurrency. Learn goroutines: lightweight threads, launching concurrent functions. Understand channels: buffered, unbuffered, bidirectional, directional, closing channels. Use select for multiplexing, timeout patterns, non-blocking operations. Learn sync package: Mutex, RWMutex, WaitGroup, Once, Pool, Cond. Master context package for cancellation.',
        skills: ['Goroutines', 'Channels', 'Select', 'Sync', 'Context', 'Concurrency Patterns'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Concurrent Web Crawler', 'Worker Pool', 'Pipeline System'],
        topics: ['Goroutines', 'go keyword', 'Channels', 'Buffered Channels', 'Unbuffered Channels', 'Directional Channels', 'Close', 'Range over Channels', 'Select', 'Default Case', 'Timeout', 'sync.Mutex', 'sync.RWMutex', 'sync.WaitGroup', 'sync.Once', 'sync.Pool', 'context', 'WithCancel', 'WithTimeout', 'WithDeadline'],
        outcome: 'Build highly concurrent, efficient Go applications'
      },
      {
        name: 'Go Web Development',
        description: 'HTTP servers, routing, middleware, Gin framework, and REST APIs.',
        detailedDescription: 'Build web services with Go. Learn net/http: handlers, ServeMux, request/response handling. Understand routing: gorilla/mux, chi router, httprouter. Use Gin framework: routing, middleware, binding, validation. Learn JSON/XML handling with encoding/json. Implement authentication: JWT, sessions, OAuth2. Build RESTful APIs with proper status codes, content negotiation.',
        skills: ['HTTP', 'Gin', 'Routing', 'Middleware', 'REST API', 'Authentication'],
        duration: '6 weeks',
        resources: 12,
        projects: ['REST API Server', 'Authentication Service', 'Microservice'],
        topics: ['net/http', 'http.Handler', 'ServeMux', 'Request', 'Response', 'gorilla/mux', 'chi', 'Gin', 'Router', 'Middleware', 'Context Gin', 'Binding', 'Validation', 'encoding/json', 'Marshal', 'Unmarshal', 'JWT', 'Sessions', 'OAuth2', 'REST', 'Status Codes', 'Content-Type'],
        outcome: 'Create robust, high-performance web services with Go'
      },
      {
        name: 'Go Advanced & Cloud',
        description: 'gRPC, database access, testing, deployment, and cloud-native Go.',
        detailedDescription: 'Master production Go development. Learn gRPC: protocol buffers, unary/streaming RPC, interceptors. Understand database: database/sql, GORM, sqlx for PostgreSQL/MySQL. Master testing: unit tests, table-driven tests, benchmarks, profiling with pprof. Learn Docker containerization, Kubernetes deployment, cloud deployment on AWS/GCP/Azure.',
        skills: ['gRPC', 'Protobuf', 'Database', 'Testing', 'Docker', 'Kubernetes'],
        duration: '6 weeks',
        resources: 12,
        projects: ['gRPC Service', 'Database Application', 'Cloud Deployment'],
        topics: ['gRPC', 'Protocol Buffers', 'proto', 'Unary RPC', 'Streaming', 'Interceptors', 'database/sql', 'GORM', 'sqlx', 'PostgreSQL', 'MySQL', 'Testing', 'testing package', 'Table-driven', 'Benchmarks', 'pprof', 'Docker', 'Multi-stage', 'Kubernetes', 'Deployment', 'AWS', 'GCP'],
        outcome: 'Deploy production-ready, cloud-native Go applications'
      }
    ]
  },
  {
    id: 'rust-developer',
    title: 'Rust Developer',
    description: 'Build safe, fast systems with Rust memory safety guarantees and zero-cost abstractions.',
    icon: Shield,
    color: 'from-orange-600 to-red-700',
    duration: '10-12 months',
    level: 'Advanced',
    totalCourses: 16,
    skills: ['Rust', 'Ownership', 'Lifetimes', 'Cargo', 'Tokio', 'WebAssembly'],
    stages: [
      {
        name: 'Rust Fundamentals',
        description: 'Ownership, borrowing, references, and Rust unique memory model.',
        detailedDescription: 'Master Rust ownership system. Learn ownership rules: each value has owner, only one owner, owner dropped when out of scope. Understand borrowing: immutable references (&T), mutable references (&mut T), reference rules. Learn slices, string slices, string literals. Master variable binding, mutability, shadowing, constants, statics.',
        skills: ['Ownership', 'Borrowing', 'References', 'Slices', 'Mutability'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Ownership Exercises', 'String Manipulator', 'Memory Safe Collections'],
        topics: ['Ownership', 'Move Semantics', 'Clone', 'Copy', 'Borrowing', 'References', '&T', '&mut T', 'Dangling References', 'Slices', 'String Slices', 'str', 'String', 'Variable Binding', 'mut', 'Shadowing', 'Constants', 'Statics'],
        outcome: 'Write memory-safe code using Rust ownership system'
      },
      {
        name: 'Structs, Enums & Pattern Matching',
        description: 'Custom types, pattern matching, Option, Result, and error handling.',
        detailedDescription: 'Master Rust type system. Learn structs: named fields, tuple structs, unit-like structs, methods with impl. Understand enums: variants with data, Option<T>, Result<T,E>. Master pattern matching with match, if let, while let, destructuring. Learn error handling: panic, unwrap/expect, propagating errors with ?, custom error types.',
        skills: ['Structs', 'Enums', 'Pattern Matching', 'Option', 'Result', 'Error Handling'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Custom Types Library', 'Pattern Matcher', 'Error Handler'],
        topics: ['Structs', 'Named Fields', 'Tuple Structs', 'Unit-like Structs', 'impl', 'Methods', 'Associated Functions', 'Enums', 'Variants', 'Option', 'Some', 'None', 'Result', 'Ok', 'Err', 'match', 'Patterns', 'if let', 'while let', 'Destructuring', 'panic', 'unwrap', 'expect', '? operator'],
        outcome: 'Design expressive types and handle errors properly'
      },
      {
        name: 'Collections & Generics',
        description: 'Vectors, HashMaps, iterators, closures, and generic programming.',
        detailedDescription: 'Master Rust collections and generics. Learn Vec<T>: creating, updating, accessing, iterating. Understand HashMap<K,V>: inserting, accessing, iterating, entry API. Master iterators: Iterator trait, next, consuming adapters, iterator adapters (map, filter, collect). Learn closures: capturing environment, Fn traits, closures as arguments. Understand generics: generic functions, generic structs, trait bounds.',
        skills: ['Vec', 'HashMap', 'Iterators', 'Closures', 'Generics', 'Trait Bounds'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Generic Collections', 'Iterator Pipeline', 'Functional Utils'],
        topics: ['Vec', 'vec!', 'push', 'pop', 'get', 'HashMap', 'insert', 'get', 'entry', 'or_insert', 'Iterators', 'Iterator trait', 'next', 'map', 'filter', 'collect', 'Closures', 'Fn', 'FnMut', 'FnOnce', 'Capturing', 'Generics', '<T>', 'Trait Bounds', 'Where Clauses'],
        outcome: 'Use collections effectively and write generic code'
      },
      {
        name: 'Lifetimes, Traits & Smart Pointers',
        description: 'Lifetimes, traits, smart pointers, and advanced Rust features.',
        detailedDescription: 'Master advanced Rust. Learn lifetimes: preventing dangling references, lifetime annotation syntax, elision rules, \'static lifetime. Understand traits: defining shared behavior, default implementations, trait bounds, trait objects, supertraits. Learn smart pointers: Box<T>, Rc<T>, RefCell<T>, Arc<T>, Mutex<T>. Understand interior mutability, Drop trait, Deref trait.',
        skills: ['Lifetimes', 'Traits', 'Smart Pointers', 'Box', 'Rc', 'Arc', 'Mutex'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Lifetime Analyzer', 'Trait System', 'Smart Pointer Library'],
        topics: ['Lifetimes', 'Lifetime Annotation', '\'a', 'Elision', 'Input Lifetimes', 'Output Lifetimes', 'Static', 'Traits', 'trait', 'Impl Trait', 'Trait Objects', 'dyn', 'Supertraits', 'Box', 'Deref', 'Drop', 'Rc', 'RefCell', 'Interior Mutability', 'Arc', 'Mutex', 'Send', 'Sync'],
        outcome: 'Master advanced Rust for systems programming'
      },
      {
        name: 'Async Rust & Ecosystem',
        description: 'Async/await, Tokio, web frameworks, WebAssembly, and production Rust.',
        detailedDescription: 'Build production async applications. Learn async programming: async/await, Futures, executors, Tokio runtime. Build web apps with Actix-web or Axum: routing, middleware, extractors, responses. Understand WebAssembly: compiling Rust to WASM, wasm-bindgen, Yew for frontend. Learn testing: unit tests, integration tests, documentation tests. Deploy with Docker, CI/CD.',
        skills: ['Async/Await', 'Tokio', 'Actix-web', 'WebAssembly', 'Testing', 'Deployment'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Async Server', 'WebAssembly App', 'Production Service'],
        topics: ['async', 'await', 'Future', 'Tokio', 'Runtime', 'Tasks', 'Spawning', 'Select', 'Channels', 'Actix-web', 'Axum', 'Routing', 'Extractors', 'Middleware', 'WASM', 'wasm-bindgen', 'wasm-pack', 'Yew', 'Testing', '#[test]', 'CI/CD', 'Docker'],
        outcome: 'Deploy async, safe, high-performance Rust applications'
      }
    ]
  },
  {
    id: 'ruby-developer',
    title: 'Ruby Developer',
    description: 'Write elegant, readable code with Ruby for web development, scripting, and DevOps automation.',
    icon: Gem,
    color: 'from-red-600 to-rose-700',
    duration: '6-8 months',
    level: 'Beginner',
    totalCourses: 10,
    skills: ['Ruby', 'Rails', 'Sinatra', 'RSpec', 'Metaprogramming', 'Gems'],
    stages: [
      {
        name: 'Ruby Fundamentals',
        description: 'Ruby syntax, OOP, blocks, iterators, and expressive code.',
        detailedDescription: 'Master Ruby basics. Learn Ruby syntax: everything is object, message passing. Understand data types: numbers, strings, symbols, arrays, hashes, ranges. Master OOP: classes, modules, mixins, inheritance, method visibility (public, private, protected). Learn blocks, procs, lambdas, yields. Understand iterators: each, map, select, reject, inject.',
        skills: ['Ruby Syntax', 'OOP', 'Blocks', 'Procs', 'Lambdas', 'Iterators'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Ruby Scripts', 'Class Library', 'Iterator Methods'],
        topics: ['Ruby', 'IRB', 'Everything Object', 'Numbers', 'Strings', 'Symbols', 'Arrays', 'Hashes', 'Ranges', 'Classes', 'Modules', 'Mixins', 'Inheritance', 'Public', 'Private', 'Protected', 'Blocks', 'yield', 'Procs', 'Lambdas', 'each', 'map', 'select', 'inject'],
        outcome: 'Write expressive, object-oriented Ruby code'
      },
      {
        name: 'Ruby Metaprogramming',
        description: 'Dynamic programming, DSLs, reflection, and Ruby advanced features.',
        detailedDescription: 'Master Ruby dynamic features. Learn metaprogramming: define_method, method_missing, send, respond_to?. Understand monkey patching, refinements for safer patching. Learn reflection: instance_variables, methods, ancestors. Create DSLs: instance_eval, class_eval, module_eval. Understand eigenclass (singleton class), class instance variables, extend vs include.',
        skills: ['Metaprogramming', 'define_method', 'method_missing', 'DSLs', 'Reflection'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Metaprogramming Library', 'DSL Creation', 'Dynamic Proxy'],
        topics: ['Metaprogramming', 'define_method', 'method_missing', 'send', 'respond_to', 'Monkey Patching', 'Refinements', 'Reflection', 'instance_variables', 'methods', 'ancestors', 'DSL', 'instance_eval', 'class_eval', 'Eigenclass', 'Singleton Class', 'extend', 'include'],
        outcome: 'Leverage Ruby dynamic nature for powerful abstractions'
      },
      {
        name: 'Ruby on Rails',
        description: 'Rails framework, MVC, Active Record, and Rails conventions.',
        detailedDescription: 'Build web apps with Rails. Learn Rails philosophy: convention over configuration, DRY, RESTful design. Understand MVC: models with Active Record, views with ERB, controllers. Master Active Record: migrations, validations, associations, queries, scopes. Learn routing: resources, nested resources, member/collection routes. Use Rails generators, scaffolding wisely.',
        skills: ['Rails', 'MVC', 'Active Record', 'Routing', 'ERB', 'Scaffolding'],
        duration: '6 weeks',
        resources: 12,
        projects: ['Blog App', 'E-commerce Site', 'Social Network'],
        topics: ['Rails', 'Convention over Configuration', 'DRY', 'MVC', 'Models', 'Views', 'Controllers', 'Active Record', 'Migrations', 'Validations', 'Associations', 'has_many', 'belongs_to', 'Queries', 'Scopes', 'Routing', 'Resources', 'ERB', 'Partials', 'Layouts', 'Helpers', 'Scaffolding'],
        outcome: 'Create full-stack web applications with Ruby on Rails'
      },
      {
        name: 'Rails Advanced & Testing',
        description: 'Testing with RSpec, background jobs, Action Cable, and deployment.',
        detailedDescription: 'Master production Rails development. Learn testing: RSpec, Capybara for integration tests, FactoryBot, Shoulda Matchers. Understand background processing: Sidekiq, Resque, Delayed Job with Redis. Learn real-time: Action Cable, WebSockets. Master deployment: Heroku, Docker, AWS, Capistrano. Understand caching: fragment caching, Russian doll caching, Redis.',
        skills: ['RSpec', 'Capybara', 'Sidekiq', 'Action Cable', 'Caching', 'Deployment'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Test Suite', 'Background Jobs', 'Real-time Feature'],
        topics: ['RSpec', 'describe', 'it', 'expect', 'Matchers', 'Capybara', 'Feature Tests', 'FactoryBot', 'Sidekiq', 'Workers', 'Redis', 'Action Cable', 'Channels', 'WebSockets', 'Heroku', 'AWS', 'Capistrano', 'Docker', 'Caching', 'Fragment Caching', 'Russian Doll', 'Memoization'],
        outcome: 'Deploy tested, scalable Rails applications to production'
      }
    ]
  },
  {
    id: 'typescript-developer',
    title: 'TypeScript Developer',
    description: 'Add type safety to JavaScript projects with TypeScript types, generics, and advanced patterns.',
    icon: FileCode,
    color: 'from-blue-500 to-blue-700',
    duration: '4-6 months',
    level: 'Intermediate',
    totalCourses: 10,
    skills: ['TypeScript', 'Types', 'Generics', 'Decorators', 'Declaration Merging', 'tsconfig'],
    stages: [
      {
        name: 'TypeScript Basics',
        description: 'Types, interfaces, functions, classes, and basic type system.',
        detailedDescription: 'Master TypeScript fundamentals. Learn basic types: string, number, boolean, array, tuple, enum, any, unknown, never. Understand interfaces: object shapes, optional properties, readonly, index signatures. Learn functions: parameter types, return types, optional/default parameters, rest parameters. Master classes: properties, methods, constructors, access modifiers, inheritance.',
        skills: ['Types', 'Interfaces', 'Functions', 'Classes', 'Enums', 'Access Modifiers'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Typed Functions', 'Interface Design', 'Class Hierarchy'],
        topics: ['TypeScript', 'tsc', 'tsconfig', 'Basic Types', 'string', 'number', 'boolean', 'Array', 'Tuple', 'Enum', 'Any', 'Unknown', 'Never', 'Interfaces', 'Object Types', 'Optional', 'Readonly', 'Index Signatures', 'Functions', 'Return Types', 'Classes', 'Public', 'Private', 'Protected', 'Inheritance'],
        outcome: 'Write type-safe JavaScript with TypeScript basics'
      },
      {
        name: 'Advanced Types',
        description: 'Generics, unions, intersections, type guards, mapped types, conditional types.',
        detailedDescription: 'Master TypeScript advanced types. Learn generics: generic functions, generic interfaces, generic classes, constraints. Understand unions (|) and intersections (&), discriminated unions. Learn type guards: typeof, instanceof, in, custom type guards. Master mapped types, conditional types, infer keyword, template literal types. Use utility types: Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, ReturnType.',
        skills: ['Generics', 'Unions', 'Intersections', 'Type Guards', 'Mapped Types', 'Utility Types'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Generic Library', 'Type Utilities', 'Advanced Patterns'],
        topics: ['Generics', 'T', 'K', 'V', 'Constraints', 'extends', 'Unions', '|', 'Intersections', '&', 'Discriminated Unions', 'Type Guards', 'typeof', 'instanceof', 'in operator', 'is', 'Mapped Types', 'keyof', 'Conditional Types', 'extends ? :', 'Infer', 'Template Literal Types', 'Utility Types', 'Partial', 'Required', 'Pick', 'Omit'],
        outcome: 'Create sophisticated type systems for complex applications'
      },
      {
        name: 'TypeScript Configuration & Tools',
        description: 'tsconfig options, declaration files, module resolution, and build tools.',
        detailedDescription: 'Master TypeScript tooling. Learn tsconfig.json: compiler options, strict mode, target, module, lib, paths, baseUrl. Understand declaration files (.d.ts): creating types for JS libraries, triple-slash directives. Learn module resolution: classic vs Node, path mapping. Use with build tools: Webpack, Vite, Rollup, esbuild. Source maps, declaration maps, generating declarations.',
        skills: ['tsconfig', 'Declaration Files', 'Module Resolution', 'Build Tools', 'Source Maps'],
        duration: '4 weeks',
        resources: 8,
        projects: ['tsconfig Setup', 'Declaration File', 'Library Types'],
        topics: ['tsconfig.json', 'Compiler Options', 'Strict', 'Target', 'Module', 'Lib', 'Paths', 'BaseUrl', 'Declaration Files', '.d.ts', 'declare', 'Module Augmentation', 'Module Resolution', 'Node', 'Classic', 'Path Mapping', 'Webpack', 'Vite', 'Rollup', 'esbuild', 'Source Maps', '.d.ts Generation'],
        outcome: 'Configure TypeScript for any project and build pipeline'
      },
      {
        name: 'TypeScript in Practice',
        description: 'React/Node with TS, testing, decorators, and best practices.',
        detailedDescription: 'Apply TypeScript in real projects. Learn React with TypeScript: component types, event types, hook types, generic components. Understand Node.js with TypeScript: Express types, database types, environment types. Learn decorators: class, method, property, parameter decorators with metadata. Testing with ts-jest, type-safe mocking. Best practices: strict null checks, no implicit any, exhaustive type checking.',
        skills: ['React TS', 'Node TS', 'Decorators', 'Testing', 'Best Practices'],
        duration: '4 weeks',
        resources: 8,
        projects: ['React TS App', 'Node TS API', 'Decorator Library'],
        topics: ['React TypeScript', 'FC', 'Component Props', 'Events', 'Hooks', 'Node TypeScript', 'Express Types', 'Request', 'Response', 'Decorators', 'Class Decorator', 'Method Decorator', 'Property Decorator', 'Parameter Decorator', 'Reflect Metadata', 'Testing', 'ts-jest', 'Strict', 'No Implicit Any', 'Exhaustive Checks'],
        outcome: 'Build production applications with TypeScript best practices'
      }
    ]
  },
  {
    id: 'graphql-developer',
    title: 'GraphQL Developer',
    description: 'Design and implement GraphQL APIs with schema design, resolvers, and client integration.',
    icon: Share2,
    color: 'from-pink-500 to-rose-600',
    duration: '5-7 months',
    level: 'Intermediate',
    totalCourses: 10,
    skills: ['GraphQL', 'Apollo', 'Schema Design', 'Resolvers', 'Subscriptions', 'Relay'],
    stages: [
      {
        name: 'GraphQL Fundamentals',
        description: 'Schema, types, queries, mutations, and GraphQL query language.',
        detailedDescription: 'Master GraphQL basics. Learn GraphQL type system: Object types, Scalar types (String, Int, Float, Boolean, ID), Enum, Interface, Union. Understand schema definition: Query type, Mutation type, Subscription type. Learn GraphQL query language: fields, arguments, variables, aliases, fragments, operation names. Understand introspection, __schema, __type.',
        skills: ['Schema', 'Types', 'Queries', 'Mutations', 'Fragments', 'Introspection'],
        duration: '4 weeks',
        resources: 8,
        projects: ['Schema Design', 'Query Practice', 'API Exploration'],
        topics: ['GraphQL', 'Schema', 'Object Types', 'Scalar Types', 'String', 'Int', 'Float', 'Boolean', 'ID', 'Enum', 'Interface', 'Union', 'Query', 'Mutation', 'Subscription', 'Fields', 'Arguments', 'Variables', 'Aliases', 'Fragments', 'Inline Fragments', 'Introspection', '__schema', '__type'],
        outcome: 'Design GraphQL schemas and write queries'
      },
      {
        name: 'GraphQL Server Development',
        description: 'Apollo Server, resolvers, DataLoader, authentication, and error handling.',
        detailedDescription: 'Build GraphQL servers. Learn Apollo Server: setup, context, plugins. Write resolvers: parent, args, context, info. Understand DataLoader for N+1 problem, batching, caching. Implement authentication: JWT in context, directive-based auth, field-level permissions. Learn error handling: custom errors, error extensions, masking errors in production.',
        skills: ['Apollo Server', 'Resolvers', 'DataLoader', 'Authentication', 'Error Handling'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Apollo API', 'DataLoader Implementation', 'Auth System'],
        topics: ['Apollo Server', 'Setup', 'Apollo Context', 'Plugins', 'Resolvers', 'Parent', 'Args', 'Resolver Context', 'Info', 'DataLoader', 'Batching', 'Caching', 'N+1', 'Authentication', 'JWT', 'Context Auth', 'Directives', '@auth', 'Error Handling', 'Custom Errors', 'Extensions', 'ApolloError'],
        outcome: 'Build scalable, secure GraphQL servers'
      },
      {
        name: 'GraphQL Client Development',
        description: 'Apollo Client, Relay, caching, local state, and React/Vue/Angular integration.',
        detailedDescription: 'Consume GraphQL in frontend. Learn Apollo Client: setup, cache configuration, link chain. Understand queries with useQuery, mutations with useMutation, subscriptions with useSubscription. Learn Relay: compiler, fragments, pagination, refetching. Understand normalized caching, cache policies, type policies. Manage local state with Apollo Client or Relay.',
        skills: ['Apollo Client', 'Relay', 'Caching', 'Local State', 'Hooks', 'Fragments'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Apollo React App', 'Relay Integration', 'Cache Management'],
        topics: ['Apollo Client', 'InMemoryCache', 'HttpLink', 'useQuery', 'useMutation', 'useSubscription', 'Fetch Policy', 'Relay', 'Relay Compiler', 'Fragments', 'Pagination', 'Connections', 'Refetching', 'Normalized Cache', 'Cache Policies', 'Type Policies', 'Local State', 'Reactive Variables', 'makeVar'],
        outcome: 'Implement efficient GraphQL clients with caching'
      },
      {
        name: 'Advanced GraphQL',
        description: 'Schema stitching, federation, subscriptions, performance, and tools.',
        detailedDescription: 'Master advanced GraphQL patterns. Learn schema stitching: merging schemas, type merging, remote schemas. Understand Apollo Federation: gateway, subgraphs, entities, @key directive. Implement subscriptions: WebSocket transport, pub/sub, Redis. Optimize performance: query complexity analysis, depth limiting, persisted queries. Use tools: GraphQL Playground, Altair, codegen.',
        skills: ['Schema Stitching', 'Federation', 'Subscriptions', 'Performance', 'Codegen'],
        duration: '5 weeks',
        resources: 10,
        projects: ['Federated API', 'Real-time Subscriptions', 'Performance Optimization'],
        topics: ['Schema Stitching', 'Merge Schemas', 'Type Merging', 'Remote Schemas', 'Apollo Federation', 'Gateway', 'Subgraphs', 'Entities', '@key', 'Subscriptions', 'WebSocket', 'Pub/Sub', 'Redis', 'Performance', 'Complexity', 'Depth Limiting', 'Persisted Queries', 'APQ', 'Codegen', 'GraphQL Code Generator', 'TypeScript Types'],
        outcome: 'Architect enterprise GraphQL solutions with federation'
      }
    ]
  }
];

const levelColors: Record<string, string> = {
  'Beginner': 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400',
  'Intermediate': 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400',
  'Advanced': 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
};

// Define categories with their associated learning paths
const categories = [
  {
    id: 'web-dev',
    name: 'Web Development',
    description: 'Frontend, backend, and full-stack technologies',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
    pathIds: ['frontend', 'backend', 'fullstack', 'react-developer', 'nextjs-developer', 'node-developer', 'laravel', 'django-developer', 'vue-developer', 'angular-developer', 'svelte-developer']
  },
  {
    id: 'mobile-app',
    name: 'Mobile & App',
    description: 'iOS, Android, and cross-platform development',
    icon: Smartphone,
    color: 'from-orange-500 to-red-500',
    pathIds: ['mobile', 'android', 'ios', 'flutter-developer', 'react-native-developer']
  },
  {
    id: 'data-ai',
    name: 'Data & AI',
    description: 'Machine learning, data science, and analytics',
    icon: Binary,
    color: 'from-violet-500 to-fuchsia-500',
    pathIds: ['ai-ml', 'data-science', 'data-engineer', 'prompt-engineer', 'mlops', 'powerbi']
  },
  {
    id: 'infrastructure',
    name: 'Infrastructure & Security',
    description: 'DevOps, cloud, networking, and cybersecurity',
    icon: Shield,
    color: 'from-green-500 to-emerald-600',
    pathIds: ['devops', 'cybersecurity', 'cloud', 'sre', 'network-engineer', 'dba', 'platform-engineer']
  },
  {
    id: 'specialized',
    name: 'Specialized & Other',
    description: 'Game dev, blockchain, design, and more',
    icon: Code,
    color: 'from-purple-500 to-pink-500',
    pathIds: ['blockchain', 'gamedev', 'uiux', 'product', 'qa-engineer', 'ar-vr', 'technical-writer', 'c-developer', 'cpp-developer', 'python-developer', 'go-developer', 'rust-developer', 'ruby-developer', 'typescript-developer', 'graphql-developer', 'java-developer', 'csharp-developer']
  }
];

// Map path IDs to categories for quick lookup
const getCategoryForPath = (pathId: string) => {
  return categories.find(cat => cat.pathIds.includes(pathId)) || categories[4];
};

export default function LearningPathsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('web-dev');
  const [selectedPath, setSelectedPath] = useState<string>('frontend');
  const [expandedStage, setExpandedStage] = useState<number | null>(0);

  const currentCategory = categories.find(c => c.id === selectedCategory) || categories[0];
  const categoryPaths = learningPaths.filter(p => currentCategory.pathIds.includes(p.id));
  const currentPath = learningPaths.find(p => p.id === selectedPath) || categoryPaths[0] || learningPaths[0];

  // Update selected path when category changes
  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    const newCategory = categories.find(c => c.id === categoryId);
    if (newCategory) {
      const firstPath = learningPaths.find(p => newCategory.pathIds.includes(p.id));
      if (firstPath) {
        setSelectedPath(firstPath.id);
        setExpandedStage(0);
      }
    }
  };

  return (
    <section id="learning-paths" className="py-20 sm:py-28 section-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-400 font-heading">
            Career Roadmaps
          </Badge>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Learning Paths
          </h2>
          <p className="font-body text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Structured roadmaps organized by domain. Select a category to explore 
            specialized learning paths tailored to your career goals.
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection delay={200} className="mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`group relative px-5 py-3 rounded-xl font-heading font-semibold text-sm transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300'}`} />
                    <span>{category.name}</span>
                    <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400'
                    }`}>
                      {category.pathIds.length}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Category Description */}
          <div className="text-center mb-6">
            <p className="font-body text-gray-600 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">{currentCategory.name}:</span>{' '}
              {currentCategory.description}
            </p>
          </div>

          {/* Path Selector Grid - Only show paths in current category */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {categoryPaths.map((path) => {
              const isSelected = selectedPath === path.id;
              return (
                <button
                  key={path.id}
                  onClick={() => {
                    setSelectedPath(path.id);
                    setExpandedStage(0);
                  }}
                  className={`group p-4 rounded-xl border-2 transition-all duration-300 text-left hover:scale-105 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                      : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-800'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${path.color} flex items-center justify-center mb-3 ${isSelected ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-300`}>
                    <path.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className={`font-heading font-semibold text-sm mb-1 ${
                    isSelected ? 'text-blue-900 dark:text-blue-100' : 'text-gray-900 dark:text-white'
                  }`}>
                    {path.title}
                  </p>
                  <Badge className={`text-xs ${levelColors[path.level]} ${isSelected ? 'opacity-100' : 'opacity-70'}`}>
                    {path.level}
                  </Badge>
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        {/* Selected Path Detail */}
        <AnimatedSection delay={400} key={selectedPath}>
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 overflow-hidden shadow-xl">
            {/* Path Header */}
            <CardHeader className="pb-6">
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${currentPath.color} flex items-center justify-center shadow-lg`}>
                      <currentPath.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {currentPath.title}
                      </CardTitle>
                      <div className="flex items-center gap-3">
                        <Badge className={`${levelColors[currentPath.level]} font-medium`}>
                          {currentPath.level}
                        </Badge>
                        <span className="text-sm text-gray-500 dark:text-gray-400 font-body">
                          {currentPath.totalCourses} courses • {currentPath.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="font-body text-gray-600 dark:text-gray-400 text-base max-w-2xl leading-relaxed">
                    {currentPath.description}
                  </CardDescription>
                </div>
                
                {/* Quick Stats */}
                <div className="flex flex-wrap gap-3">
                  <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 rounded-xl">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-body">
                      <Clock className="h-4 w-4" />
                      Duration
                    </div>
                    <p className="font-heading font-semibold text-gray-900 dark:text-white">{currentPath.duration}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 rounded-xl">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-body">
                      <Target className="h-4 w-4" />
                      Stages
                    </div>
                    <p className="font-heading font-semibold text-gray-900 dark:text-white">{currentPath.stages.length}</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700/50 px-4 py-3 rounded-xl">
                    <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-body">
                      <Star className="h-4 w-4" />
                      Rating
                    </div>
                    <p className="font-heading font-semibold text-gray-900 dark:text-white">4.9/5</p>
                  </div>
                </div>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {currentPath.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="outline"
                    className="font-body bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardHeader>

            <CardContent className="pt-0">
              {/* Learning Roadmap */}
              <div className="space-y-4">
                <h3 className="font-heading text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2 mb-4">
                  <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  Learning Roadmap
                </h3>

                <div className="space-y-3">
                  {currentPath.stages.map((stage, index) => (
                    <div
                      key={index}
                      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                        expandedStage === index
                          ? 'border-blue-300 dark:border-blue-700 bg-white dark:bg-gray-800 shadow-md'
                          : 'border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/30 hover:bg-white dark:hover:bg-gray-800'
                      }`}
                    >
                      <button
                        onClick={() => setExpandedStage(expandedStage === index ? null : index)}
                        className="w-full p-5 flex items-center gap-4 text-left"
                      >
                        {/* Stage Number */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm font-heading ${
                          index < (expandedStage !== null ? expandedStage : 0)
                            ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                            : index === expandedStage
                            ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                            : 'bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-400'
                        }`}>
                          {index < (expandedStage !== null ? expandedStage : 0) ? (
                            <CheckCircle className="h-5 w-5" />
                          ) : (
                            index + 1
                          )}
                        </div>

                        {/* Stage Info */}
                        <div className="flex-1">
                          <h4 className="font-heading font-semibold text-gray-900 dark:text-white">
                            {stage.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 font-body line-clamp-1">
                            {stage.description}
                          </p>
                        </div>

                        {/* Meta */}
                        <div className="hidden sm:flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-body">
                          <span>{stage.duration}</span>
                          <span>{stage.resources} resources</span>
                        </div>

                        {/* Expand Icon */}
                        <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                          expandedStage === index ? 'rotate-90' : ''
                        }`} />
                      </button>

                      {/* Expanded Content */}
                      {expandedStage === index && (
                        <div className="px-5 pb-5 pt-0 border-t border-gray-100 dark:border-gray-700">
                          <div className="pl-14 pt-4">
                            {/* Detailed Description */}
                            <p className="font-body text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                              {stage.detailedDescription}
                            </p>
                            
                            {/* Topics */}
                            <div className="mb-5">
                              <p className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                                Topics Covered
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {stage.topics.slice(0, 12).map((topic) => (
                                  <Badge 
                                    key={topic}
                                    variant="outline"
                                    className="font-body bg-white dark:bg-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300"
                                  >
                                    {topic}
                                  </Badge>
                                ))}
                                {stage.topics.length > 12 && (
                                  <Badge variant="outline" className="font-body">
                                    +{stage.topics.length - 12} more
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Skills */}
                            <div className="mb-5">
                              <p className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <Target className="h-4 w-4 text-green-600 dark:text-green-400" />
                                Skills You'll Master
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {stage.skills.map((skill) => (
                                  <Badge 
                                    key={skill}
                                    variant="secondary"
                                    className="font-body bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300"
                                  >
                                    {skill}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* Projects */}
                            <div className="mb-5">
                              <p className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                                <Code className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                                Hands-on Projects
                              </p>
                              <ul className="space-y-2">
                                {stage.projects.map((project, pIndex) => (
                                  <li key={pIndex} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-body">
                                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                                    {project}
                                  </li>
                                ))}
                              </ul>
                            </div>

                            {/* Outcome */}
                            <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                              <p className="font-heading text-sm font-semibold text-gray-900 dark:text-white mb-1 flex items-center gap-2">
                                <Award className="h-4 w-4 text-yellow-500" />
                                Stage Outcome
                              </p>
                              <p className="font-body text-sm text-gray-600 dark:text-gray-400">
                                {stage.outcome}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        </AnimatedSection>

      </div>
    </section>
  );
}
