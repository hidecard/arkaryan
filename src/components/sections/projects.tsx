'use client';
import { AnimatedSection, AnimatedCard } from '@/hooks/use-animations';


import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

// Helper function to get detail path
const getDetailPath = (title: string) => {
  switch(title) {
    case 'PhotoBooth': return '/projects/photobooth';
    case 'Exam System': return '/projects/exam-system';
    case 'YHA - AI': return '/projects/yha-ai';
    case 'DWMBlurGlass': return '/projects/dwmblurglass';
    case 'Programming Keyboard Trainer': return '/projects/programming-keyboard-trainer';
    case 'CSS-Labs': return '/projects/css-labs';
    case 'Security Labs Web Platform': return '/projects/security-labs';
    case 'OneKit - Modern JavaScript Library': return '/projects/onekit';
    case 'MM Match - Tinder-style Dating Bot': return '/projects/mm-match';
    case 'YBS AI (Intelligent Public Transport)': return '/projects/ybs-ai';
    case 'MM Career AI': return '/projects/mm-career-ai';
    case 'KG English': return '/projects/kg-english';
    case 'Solo VPN': return '/projects/solo-vpn';
    default: return '#';
  }
};

// Projects data
const projects = [
{
    title: 'YBS AI (Intelligent Public Transport)',
    description: 'A comprehensive bus route guide application for Yangon, Myanmar, featuring interactive maps, AI-powered route assistance, and offline functionality.',
    technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Leaflet Maps', 'Google Gemini AI', 'IndexedDB', 'Dexie', 'Progressive Web App'],
    category: 'AI',
    featured: true,
    liveDemo: 'https://ybs-mm-v2.vercel.app/',
    features: [
      '🗺️ Interactive Maps with Leaflet and OpenStreetMap',
      '🤖 AI-Powered Assistant with Google Gemini',
      '🔍 Advanced Search & Navigation',
      '📱 Responsive Mobile-First Design',
      '💾 Offline Capabilities with IndexedDB',
      '🌐 Myanmar & English Language Support'
    ],
    detailedDescription: `Yangon YBS Guide 🚌
A comprehensive bus route guide application for Yangon, Myanmar, featuring interactive maps, AI-powered route assistance, and offline functionality.

🌟 Features
🗺️ Interactive Maps
Leaflet-powered maps with OpenStreetMap tiles
GPS location services to find nearby bus stops
Route visualization with color-coded bus routes
Stop search and navigation on the map
🤖 AI-Powered Assistant
Natural language queries in Myanmar and English
Intelligent route finding using Google Gemini AI
Contextual responses with transfer information
Conversational interface for transportation queries
🔍 Advanced Search & Navigation
Route search between any two bus stops
Stop directory with 1000+ stops organized by township
Route filtering by start/end locations
Transfer planning with multiple route options
📱 Responsive Design
Mobile-first design with bottom navigation
Desktop interface with header navigation
Progressive Web App capabilities
Offline functionality with cached data
💾 Offline Capabilities
IndexedDB storage using Dexie
Local route data for offline access
Fast loading without internet dependency
Data synchronization when online`
  },
{
    title: 'MM Match - Tinder-style Dating Bot',
    description: 'Complete Telegram dating bot with swipe functionality, built with Vercel and Turso for scalable performance supporting up to 100,000 users.',
    technologies: ['Node.js', 'Telegraf', 'JavaScript ES Modules', 'Turso Database', 'LibSQL Client', 'Vercel Functions', 'Telegram Bot API', 'Webhook Integration'],
    category: 'Bot',
    featured: true,
    liveDemo: 'https://t.me/mmcupid_bot',
    features: [
      '🤖 Step-by-step Registration',
      '💕 Discovery System',
      '⚧ Gender-based Matching',
      '✨ Match Notification',
      '✏️ Profile Editing',
      '🎯 Smart UI & Commands',
      '🚀 Scalable Architecture',
      '🔒 Zero Storage Cost'
    ],
    detailedDescription: `MM Match - Tinder-style Dating Bot
A complete Telegram dating bot with swipe functionality, built with Vercel and Turso for scalable performance supporting up to 100,000 users.

🤖 Bot Information
Bot Name: MM Match
Bot Username: @mmcupid_bot
Direct Link: https://t.me/mmcupid_bot

🎯 Features
Step-by-step Registration: Collects nickname, age, location, photo, bio, gender, and preferences
Discovery System: Swipe through profiles with "Next" and "Like" buttons
Gender-based Matching: Male users see Female profiles, Female users see Male profiles
Match Notification: When two users like each other, usernames are revealed
Profile Editing: Update any profile information anytime
Smart UI: Button-based interactions with pinned commands
Scalable Architecture: Optimized for 100,000+ users
Zero Storage Cost: Uses Telegram photo_id instead of storing images
Smart User Links: Fallback to tg://user?id=xxx when username not set

🛠️ Tech Stack
Backend: Node.js, Telegraf, JavaScript (ES Modules)
Database: Turso (SQLite-compatible), LibSQL Client
Deployment: Vercel, Vercel Functions
APIs: Telegram Bot API, Webhook Integration

🎨 User Interface & Experience
Welcome Screen with Myanmar language support
7-step registration process
Button-based navigation with pinned commands
Gender-based profile filtering
Real-time match notifications
Profile editing capabilities

📊 Key Metrics
User Capacity: 100,000+
Bot Commands: 5 (/start, /find, /edit, /update, /help)
Registration Steps: 7
Database: Turso edge database
Platform: Telegram
Deployment: Vercel serverless`
  },
{
    title: 'OneKit - Modern JavaScript Library',
    description: 'OneKit is a lightweight, powerful JavaScript library that provides everything you need for modern web development: DOM manipulation, animations, reactive state management, routing, API integration, and more.',
    technologies: ['Vanilla JavaScript', 'ES6+', 'Rollup/Webpack', 'Jest/QUnit', 'JSDoc', 'npm/yarn', 'ES Modules', 'Fluent Interface'],
    category: 'Library',
    featured: true,
    features: [
      '🔧 DOM Manipulation',
      '✨ Animations',
      '🧠 Reactive State',
      '🧭 Router',
      '🌐 HTTP Client',
      '👆 Gestures',
      '📦 Components',
      '🎨 Themes',
      '👁️ Accessibility',
      '💾 Storage'
    ],
    detailedDescription: `OneKit - Modern JavaScript Library
OneKit is a lightweight, powerful JavaScript library that provides everything you need for modern web development: DOM manipulation, animations, reactive state management, routing, API integration, and more.

🚀 Features
DOM Manipulation - jQuery-like API for element selection and manipulation
Animations - Smooth CSS animations and transitions
Reactive State - Automatic UI updates with reactive data binding
Router - Client-side routing with history API support
HTTP Client - AJAX requests, WebSocket, and file uploads
Gestures - Touch and gesture support for mobile devices
Components - Reusable component system
Themes - Built-in theming and dark mode support
Accessibility - Screen reader support and focus management
Storage - Local/session storage utilities
Utilities - Debounce, throttle, date formatting, and more

📦 Quick Start
<!DOCTYPE html>
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
</html>

🛠️ Tech Stack
Language: Vanilla JavaScript (ES6+)
Build Tool: Rollup/Webpack
Testing: Jest/QUnit
Documentation: JSDoc
Package Manager: npm/yarn
Browser Support: Modern Browsers
Module System: ES Modules/CommonJS
API Design: Fluent Interface Pattern

📊 Key Metrics
Core Features: 10+
API Methods: 100+
File Size: 25KB (minified)
Browser Support: Modern browsers
Dependencies: 0 (zero dependencies)
License: MIT

🌐 Browser Support
Chrome (latest) - Supported
Firefox (latest) - Supported
Safari (latest) - Supported
Edge (latest) - Supported
IE 11 - Not supported`
  },
{
    title: 'MM Career AI',
    description: 'AI-powered career guidance platform for Myanmar professionals with skill assessment, job matching, and personalized learning roadmaps.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Gemini AI', 'Puter.js', 'jsPDF', 'html2canvas', 'Recharts'],
    category: 'AI',
    featured: true,
    liveDemo: 'https://mm-career-ai.vercel.app/',
    features: [
      '🎯 AI Career Assessment & Matching',
      '🛤️ Step-by-Step Career Roadmap',
      '📝 AI-Powered Resume Builder',
      '🤖 AI Interview Preparation Coach',
      '🌐 Myanmar Job Opportunities',
      '📚 Learning Resources Finder',
      '💬 AI Mentor Chatbot',
      '📊 Skill Gap Analyzer',
      '🇲🇲 Full Burmese Language Support'
    ],
    detailedDescription: `MyanCareer AI — AI အလုပ်အကိုင် လမ်းညွှန် Platform
စွမ်းရည်နှင့် အလုပ်အကိုင် ချိတ်ဆက်ပေးသော AI လမ်းညွှန်

လူငယ်များအတွက် မိမိတို့၏ စွမ်းရည်များနှင့် ကိုက်ညီသော အလုပ်အကိုင်များကို ရှာဖွေပေးပြီး အသက်မွေးဝမ်းကျောင်း လမ်းပြမြေပုံ (Career Roadmap) များ ထုတ်ပေးသည့် AI စနစ်သုံး Platform တစ်ခုဖြစ်သည်။

🌟 Key Features
🎯 AI Career Assessment & Matching
Interactive form with suggested tags
AI-generated career guide with match score (0-100%)
Job summary, salary range, and market demand
Required experience level and skills
Soft skills, interview tips, and potential companies
Recommended certifications and mentorship advice

🛤️ Step-by-Step Career Roadmap
AI-generated multi-stage roadmap
Stage title, description, estimated time, and difficulty
Skills and tools to acquire
Prerequisites, project ideas, and success metrics
Curated learning resources with external links

📝 AI-Powered Resume Builder
Form-based resume creation with AI suggestions
Personal info, professional summary, skills sections
AI suggestions for summary, skills, experience wording
PDF export using jsPDF + html2canvas
Auto-saves to localStorage

🤖 AI Interview Preparation Coach
8-10 interview questions tailored to target job
Question categories: Behavioral, Technical, Situational, General
User answer submission with AI evaluation
Score (0-100%), feedback, and improvement tips
Progress tracking with answered count and average score

🌐 Myanmar Job Opportunities
5-8 real job openings in Myanmar
Complete job details: title, company, location, salary
Match score based on user career guide
Application URLs and contact information

📚 Learning Resources Finder
6-8 learning resources per career path
Courses, tutorials, books, videos, certifications
Platform, duration, level, price, rating metadata
Direct external links for immediate learning

💬 AI Mentor Chatbot
Floating chat widget powered by Gemini AI
Real-time career advice and interview tips
Streaming responses for natural chat experience
Conversation history maintained within session

📊 Learning Roadmap & Skill Gap Analyzer
Gap analysis between current skills and target job
Gaps grouped by level: Beginner → Intermediate → Advanced
Priority classification and estimated learning time
Milestone generation with completion tracking

🇲🇲 Burmese Language First
Full UI text and AI-generated content in Myanmar language
Pyidaungsu font support for proper Burmese rendering`
  },
{
    title: 'Solo VPN',
    description: 'Java Native VPN application focusing on secure network protocols, data encryption, and high-performance connectivity.',
    technologies: ['Java Native', 'OpenVPN', 'WireGuard', 'IKEv2', 'AES-256', 'Android VPN Service', 'Bouncy Castle', 'Netty'],
    category: 'Mobile',
    featured: true,
    features: [
      '🔐 Advanced Security Protocols',
      '📶 High-Performance Connectivity',
      '🔒 Data Encryption & Privacy',
      '📱 Cross-Platform Support',
      '🌐 Global Server Network',
      '📊 Connection Monitoring'
    ],
    detailedDescription: `Solo VPN
Java Native VPN application focusing on secure network protocols, data encryption, and high-performance connectivity.

🌟 Key Features
🔐 Advanced Security Protocols
AES-256 bit encryption for data protection
Multiple VPN protocols (OpenVPN, WireGuard, IKEv2)
DNS leak prevention and kill switch functionality
Military-grade encryption standards
Perfect Forward Secrecy (PFS)
No-log policy with privacy protection
Advanced authentication methods
Regular security audits and updates

📶 High-Performance Connectivity
High-speed servers in multiple locations
Unlimited bandwidth with no throttling
Automatic server selection for optimal performance
Load balancing across server network
Protocol optimization for different network types
Ping reduction and latency improvement
Connection stability monitoring
Fallback server options for reliability

🔒 Data Encryption & Privacy
End-to-end encryption for all data transmission
Secure DNS resolution to prevent leaks
IP address masking and location hiding
Split tunneling for selective protection
Encrypted DNS queries
Malware and phishing protection
Ad-blocking capabilities
Tracker prevention system

📱 Cross-Platform Support
Native Java development for Android
Optimized for battery efficiency
Background connection management
Quick connect and disconnect features
System integration with Android VPN service
Widget support for quick access
Notification system for connection status
Automatic reconnection on network changes

🌐 Global Server Network
Server locations in 50+ countries
High-bandwidth server infrastructure
Load-balanced server clusters
Geo-optimized routing algorithms
Server health monitoring system
Automatic server load distribution
Redundant server configurations
24/7 server maintenance and updates

📊 Connection Monitoring
Real-time connection speed monitoring
Data transfer statistics and usage tracking
Connection uptime and stability metrics
Server response time monitoring
Protocol performance comparison
Bandwidth usage analytics
Connection quality assessment
Historical connection data and trends`
  },
{
    title: 'KG English',
    description: 'Interactive educational mobile application designed to enhance English language learning for young students through gamified experiences.',
    technologies: ['Flutter & Dart', 'Material Design', 'Audio Processing', 'Lottie Animations', 'SQLite', 'Provider', 'BLoC Pattern', 'Firebase Analytics'],
    category: 'Mobile',
    featured: true,
    features: [
      '📚 Interactive Learning Modules',
      '🎮 Gamified Learning Experience',
      '🔊 Audio-Visual Learning',
      '🏆 Progress Tracking & Rewards',
      '👥 Multi-User Support',
      '📱 Mobile-First Design'
    ],
    detailedDescription: `KG English
Interactive educational mobile application designed to enhance English language learning for young students through gamified experiences.

🌟 Key Features
📚 Interactive Learning Modules
Alphabet learning with phonics and pronunciation
Vocabulary building with visual aids and audio
Grammar lessons with interactive exercises
Reading comprehension with stories and articles
Writing practice with guided exercises
Speaking practice with pronunciation feedback
Listening skills development with audio content
Progress tracking with detailed analytics

🎮 Gamified Learning Experience
Word matching games with visual feedback
Spelling bee competitions with difficulty levels
Grammar racing games with time challenges
Vocabulary puzzles and crosswords
Story completion games with creative writing
Role-playing scenarios for conversation practice
Achievement system with badges and rewards
Leaderboard for competitive learning

🔊 Audio-Visual Learning
Native speaker audio recordings
Pronunciation practice with speech recognition
Video lessons with animations and graphics
Interactive flashcards with audio support
Sing-along songs for vocabulary building
Visual stories with text highlighting
Audio books with comprehension questions
Pronunciation guides with mouth movement videos

📱 Mobile-First Design
Responsive design for all screen sizes
Touch-optimized interactions
Offline mode for learning without internet
Push notifications for learning reminders
Gesture-based navigation
Adaptive UI for different age groups
Battery-optimized performance
Quick access to favorite lessons`
  },
{
    title: 'DWMBlurGlass',
    description: 'DWMBlurGlass is a free and open-source application that enables customizable blur effects for Windows title bars and borders, bringing back the classic Aero glass effect with modern enhancements.',
    technologies: ['DWM Integration', 'Windows API', 'C++', 'Symbol Management', 'Multi-Language Support', 'Open Source'],
    category: 'Utility',
    featured: true,
    liveDemo: 'https://liquid-glass-ui-for-window.vercel.app/',
    features: [
      '💧 Custom Blur Effects',
      '🖥️ Windows 10/11 Support',
      '👁️ Aero Reflection',
      '🎨 Color Customization',
      '🌍 Multi-Language Support',
      '☁️ Symbol File Management'
    ],
    detailedDescription: `DWMBlurGlass
DWMBlurGlass is a free and open-source application that enables customizable blur effects for Windows title bars and borders, bringing back the classic Aero glass effect with modern enhancements.

🌟 Features
Custom Blur Effects: Apply blur effects to window title bars and borders
Windows 10/11 Support: Works on both Windows 10 and Windows 11
Aero Reflection: Enable classic Windows 7-style Aero reflection effects
Color Customization: Customize blend colors for light and dark modes
Symbol File Management: Automatic symbol file downloading and management
Multiple Languages: Supports 15+ languages including English, Chinese, Japanese, Korean, German, French, Spanish, and more

📋 Installation
Download the latest release from the releases page
Extract files to directory outside user folder (not in C:\\Users\\ or subdirectories)
Run application as administrator
Click Install to install DWM modifications
Download symbols from "Symbol" tab if prompted

⚠️ Important: Due to DWM security restrictions, the application must be placed outside user directories.

🎯 Usage
General Settings
Install/Uninstall: Enable or disable DWMBlurGlass effects
Blur Radius: Adjust global blur intensity
Override DWMAPI: Override Windows 11 Mica effects with custom blur
Extend to Borders: Apply effects to window borders (Windows 10)

Advanced Settings
Aero Reflection: Enable Windows 7-style reflection effects
Title Bar Buttons: Restore classic Windows 7 button styling
Color Modes: Customize colors for light and dark themes
Blend Colors: Set custom title bar blend colors

Symbol Files
Auto-Download: Automatically download required symbol files
Status Check: Verify if current symbols are valid
Manual Refresh: Re-download symbols after Windows updates

🔧 Troubleshooting
Installation Failed: Ensure app is not in user directory, run as admin
Symbols Invalid: Download fresh symbols from Symbol tab
Effects Not Working: Verify installation status, download valid symbols
Error Messages: Check specific error solutions in documentation

📊 System Requirements
Windows 10 version 1903 or later
Windows 11 (all versions)
Administrator privileges required
Internet connection for symbol downloads
DWM service enabled
GPU with DirectX support

🌐 Multi-Language Support
English, Chinese (Simplified/Traditional), Japanese, Korean
German, French, Spanish, Italian, Portuguese, Russian
And more - 15+ languages supported

💻 Technical Implementation
Direct DWM integration for system-level blur effects
Windows API hooks for title bar modification
Symbol file management for compatibility
GPU-accelerated rendering for performance
Memory-efficient implementation
System service integration`
  },
{
    title: 'PhotoBooth',
    description: 'A fun, interactive web-based PhotoBooth application that lets you capture memorable moments with cute frames, effects, and customizable layouts.',
    technologies: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Bootstrap 5.3.0', 'WebRTC', 'Canvas API', 'Google Analytics', 'Icons8'],
    category: 'Web Application',
    featured: true,
    liveDemo: 'https://photobooth-alpha-five.vercel.app/',
    features: [
      '📷 Core Photo Capture',
      '🎨 Photo Effects',
      '✨ Cute Frames (20+ Styles)',
      '📐 Layout Options',
      '🖼️ Background Customization',
      '📝 Watermark & Branding',
      '🔗 Sharing & Export',
      '📱 User Experience'
    ],
    detailedDescription: `PhotoBooth
A fun, interactive web-based PhotoBooth application that lets you capture memorable moments with cute frames, effects, and customizable layouts. Perfect for creating instant photo strips to share with friends!

🌟 Features
Core Photo Capture
4-Photo Sequence: Automatically captures 4 pictures in a row with customizable countdown timer
Custom Countdown: Choose countdown duration from 1 to 5 seconds per shot
Camera Flip: Toggle between front and rear cameras on supported devices
Live Preview: Real-time camera feed with instant effect previews

Photo Effects
Sepia - Classic vintage look
Black & White (Grayscale) - Timeless monochrome
Blur - Soft focus effect
None - Clean, unfiltered capture

Cute Frames (20+ Styles)
Decorate your photos with adorable frame designs:
Stars, Hearts, Sunflowers, Flowers, Bows
Bunnies, Waves, Clouds, Cats, Pusheen
Rainbow, Diamonds, Moon, Cherries
Glitter, Pawprints, Candy, Butterflies, Galaxy
Custom Solid Color - Pick any color with a color picker
Custom Gradient - Create your own two-color gradient frames

Layout Options
Vertical Strip - Classic photobooth strip layout
2x2 Grid - Four photos arranged in a square grid
Polaroid Stack - Stacked polaroid-style photos with rotation

Background Customization (Polaroid Layout)
Solid Colors - Sky blue and other preset colors
Preset Images - Beach, stars, and more from Unsplash
Custom Upload - Upload your own background image

Watermark & Branding
Custom Text Watermark - Add your own personalized text to downloads
Auto Date/Time Stamp - Automatically includes capture date and time
Fixed URL Watermark - Credits the application source

Sharing & Export
Instant Download - Save your photo strip as a high-quality PNG
Native Share - Use the Web Share API to share directly on mobile devices
Fallback Share - Copy link or manual download for unsupported browsers

User Experience
Responsive Design - Works seamlessly on desktop, tablet, and mobile devices
Animated Landing Page - Floating hearts background animation on the welcome screen
Accessibility - ARIA labels and semantic HTML for screen reader support
Modal Information - Built-in About, Privacy, Features, and Tips & Tricks sections
Google Analytics - Integrated tracking for usage insights

🛠️ Tech Stack
HTML5 - Page structure and semantic markup
CSS3 - Styling, animations, responsive design, and media queries
Vanilla JavaScript - Application logic, camera handling, canvas rendering
Bootstrap 5.3.0 - UI components, navigation, modals, and responsive grid
WebRTC (getUserMedia) - Camera access and video streaming
Canvas API - Photo rendering, frame application, and image export
Google Analytics (gtag) - Usage tracking and insights
Icons8 - Camera, share, download, and UI icons
Unsplash - Preset background images for polaroid layout

📱 Usage
Getting Started
Open index.html in a modern web browser
Click "Start Snapping" on the welcome page to enter the PhotoBooth
Click "Start Camera" and allow camera access when prompted

Capturing Photos
Optionally select a countdown duration (default is 3 seconds)
Optionally flip the camera between front and rear facing
Optionally apply an effect (sepia, grayscale, blur)
Click "Capture Photos" to begin the 4-photo sequence
Strike a pose for each shot during the countdown!

Customizing Your Photo Strip
Select a Frame - Choose from 20+ decorative frames, or create a custom solid/gradient frame
Add Watermark - Enter custom text in the watermark input field
Choose Layout - Pick between Vertical Strip, 2x2 Grid, or Polaroid Stack
Swap Background (Polaroid only) - Choose a solid color, preset image, or upload your own

Saving & Sharing
Click "Save Photos" to download your finished photo strip as a PNG file
Click "Share Photos" to share via your device's native share sheet
Click "Retake Photos" to start over with a new photo session`
  },
{
    title: 'Exam System',
    description: 'The Exam System is a web-based application designed to deliver exam questions, associated PDF documents, and resource files to users with comprehensive security features.',
    technologies: ['HTML5', 'Bootstrap', 'Vanilla JavaScript', 'pdf.js', 'Google Apps Script', 'Google Sheets', 'GitHub', 'Custom Security'],
    category: 'Education',
    featured: true,
    features: [
      '❓ Question Display',
      '📄 PDF Rendering',
      '📥 Resource Download',
      '🔒 Security Features',
      '🧭 Navigation System',
      '📊 Google Sheets Integration'
    ],
    detailedDescription: `Exam System Documentation
Overview
The Exam System is a web-based application designed to deliver exam questions, associated PDF documents, and resource files to users. The system fetches data from a Google Sheet, validates links, and renders PDFs using pdf.js.

🌟 Features
Question Display: Fetches and displays questions from a Google Sheet based on Exam ID
PDF Rendering: Renders all pages of a PDF file (PDF_Link) using pdf.js
Resource Download: Provides a download link for a resource file (Resource_File_Link)
Security: Disables right-click, text selection, and print/screenshot functionalities
Navigation: Supports navigation between questions using Previous/Next buttons

🏗️ System Components
Google Sheets: Stores exam questions and metadata in Questions and Exams sheets
Google Apps Script: Acts as a backend API to fetch data from Google Sheets with validation
Frontend: User interface with Bootstrap styling and pdf.js for PDF rendering
GitHub Repository: Hosts PDF files in YHA-Center/exam repository with raw link access

📱 Usage Instructions
Start the Exam: Open web application, enter Exam ID (e.g., E1), click Start Exam
View Questions and PDFs: Questions appear in container, PDF rendered in viewer, download button for resources
Navigate Questions: Use Previous/Next buttons to move between questions
Security Features: Right-clicking disabled, text selection disabled, screenshots and printing blocked

🔧 Technical Implementation
Frontend: HTML5 structure with Bootstrap responsive design
JavaScript: Core functionality and API calls with vanilla JS
PDF Rendering: pdf.js library for PDF display and navigation
Backend: Google Apps Script API for data processing
Database: Google Sheets for data storage and management
File Hosting: GitHub repository for PDF and resource files
Security: Custom JavaScript for content protection

📊 Security Features
Content Protection: Prevents unauthorized copying and distribution
Print Protection: Blocks printing and screenshot capabilities
Access Control: Manages user access and session security
Content Lock: Right-click, text selection, and developer tools restrictions

🚀 Integration Points
Google Sheets API for real-time data synchronization
GitHub raw links for direct file access
pdf.js for comprehensive PDF rendering
Bootstrap for responsive design across devices
Custom security layer for content protection

📋 Educational Benefits
Secure exam delivery for academic institutions
Content protection for intellectual property
Multi-format support (questions, PDFs, resources)
Real-time data synchronization
User-friendly navigation and interface`
  },
{
    title: 'YHA - AI',
    description: 'YHA - AI is a sleek, modern, and responsive AI-powered chat application designed to empower users to explore AI, coding, and computer science concepts.',
    technologies: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript ES6', 'Prism.js', 'Google Fonts', 'Gemini 1.5 Flash API', 'Local Storage'],
    category: 'AI Application',
    featured: true,
    liveDemo: 'https://yha-ai.vercel.app/',
    features: [
      '💬 Dynamic Chat Interface',
      '📚 Chat History Management',
      '🌙 Dark Mode Toggle',
      '🎨 Code Syntax Highlighting',
      '📱 Responsive Design',
      '📋 Copy Functionality',
      '📂 Collapsible Sidebar',
      '🤖 AI Integration'
    ],
    detailedDescription: `YHA - AI
YHA - AI is a sleek, modern, and responsive AI-powered chat application designed to empower users to explore AI, coding, and computer science concepts. With a clean and intuitive UI, it offers a seamless experience for learning, debugging, and interacting with AI.

🌟 Features
Dynamic Chat Interface: Engage with an AI model to ask questions, debug code, or dive into AI concepts with a smooth, conversational flow
Chat History Management: Save, search, edit, or clear conversations, stored locally in the browser for quick access
Dark Mode Toggle: Switch between light and dark themes with a visually appealing transition for enhanced readability
Code Syntax Highlighting: Display code snippets with vibrant, language-specific highlighting using Prism.js
Responsive Design: Optimized for all devices with a fluid layout, powered by Bootstrap 5
Copy Functionality: Easily copy message text or code blocks with a single click
Collapsible Sidebar: A stylish sidebar for chat history and settings, with smooth animations and mobile-friendly toggling
AI Integration: Connects to the Gemini 1.5 Flash API for intelligent, real-time responses

🎨 UI Highlights
Modern Aesthetic: Clean typography with Google Fonts (Inter and Fira Code) and a vibrant orange accent color (#f97316)
Smooth Animations: Subtle slide-in effects for messages and a collapsible sidebar with fluid transitions
Interactive Elements: Hover effects for buttons, copy icons, and chat history items enhance user engagement
Accessible Design: High-contrast themes and ARIA labels ensure accessibility for all users
Code Blocks: Scrollable, expandable code blocks with line numbers and copy buttons for a polished coding experience

🛠️ Tech Stack
Frontend: HTML5 for structure
Styling: CSS3 (Custom with CSS Variables) for theming, responsiveness, and animations
Framework: Bootstrap 5 for responsive layout and UI components
Language: JavaScript (ES6) for interactivity, API calls, and local storage
Syntax Highlighting: Prism.js for code formatting for multiple languages
Typography: Google Fonts (Inter, Fira Code) for clean and readable fonts
Icons: Bootstrap Icons for lightweight, scalable icons
API: Gemini 1.5 Flash API for AI-driven chat responses
Storage: Local Storage (Browser API) for persistent conversations
Theming: CSS Variables (Dark/Light Mode) for dynamic theme switching

📱 Usage
Access the Application: Open the application in a web browser
Authentication: Register or log in using an email and password
Chat Interface: Start new chats, type messages, or upload files for AI responses
File Uploads: Upload text or image files via the file input button
Chat History: View, search, or edit past conversations in the sidebar
Theme Toggle: Switch between light and dark modes using the theme toggle button
Logout: Click the "Logout" button to sign out and clear local data

🔧 Technical Implementation
Modern ES6 JavaScript for clean, maintainable code
Bootstrap 5 grid system for responsive design
Prism.js integration for syntax highlighting
Local storage API for chat persistence
Gemini 1.5 Flash API integration for AI responses
CSS variables for dynamic theming
Responsive design with mobile-first approach
Accessibility features with ARIA labels and high contrast`
  },
{
    title: 'Programming Keyboard Trainer',
    description: 'A Flutter Windows Desktop Application that helps beginners practice typing and learn HTML, CSS, and JavaScript syntax with real-time metrics.',
    technologies: ['Flutter SDK', 'Dart', 'Visual Studio', 'Material Design', 'flutter_highlight', 'flutter_typeahead', 'provider'],
    category: 'Desktop',
    featured: true,
    features: [
      '⌨️ HomePage Interface',
      '💻 PracticePage Features',
      '🎯 Real-time Performance Tracking',
      '🖥️ Multi-Platform Support',
      '🌙 Theme System',
      '📝 Code Snippets Library'
    ],
    detailedDescription: `Programming Keyboard Trainer
A Flutter Windows Desktop Application that helps beginners practice typing and learn HTML, CSS, and JavaScript syntax.

🚀 Features
HomePage
Language Selection: Choose between HTML, CSS, and JavaScript
Dark Mode Toggle: Switch between light and dark themes
Modern UI: Clean, responsive design with Material Design
Start Practice Button: Navigate to the practice session

PracticePage
Syntax Highlighting: Code snippets with proper syntax highlighting
Real-time Metrics: Typing speed (WPM) and accuracy percentage
Progress tracking with characters typed vs total
Timer for practice sessions
Split View: Target code on left, typing area on right
Virtual Keyboard: Visual keyboard representation
Reset Functionality: Restart practice sessions

📋 Prerequisites
Flutter SDK (3.8.1 or higher)
Dart SDK
For Windows Desktop: Visual Studio with "Desktop development with C++" workload
For Web: Chrome or Edge browser
For Android: Android Studio and Android SDK

🛠️ Installation
Clone the repository: git clone <repository-url>
Install dependencies: flutter pub get
Run for Web: flutter run -d chrome
Run for Windows: flutter run -d windows
Run for Android: flutter run -d android

📦 Dependencies
flutter_highlight: ^0.7.0 - For syntax highlighting
flutter_typeahead: ^5.2.0 - For typing analysis
provider: ^6.1.1 - For state management

🎨 UI Features
Responsive Design: Works on different screen sizes
Material Design 3: Modern UI components
Dark/Light Theme: Toggle between themes
Gradient Backgrounds: Beautiful visual appeal
Card-based Layout: Clean and organized interface
Monospace Font: For code readability

📊 Code Snippets Included
HTML: Complete HTML5 document structure, navigation, content sections
CSS: Reset styles, header gradients, responsive layouts, footer styling
JavaScript: Utility functions, DOM manipulation, form validation, notifications

🔧 Troubleshooting
Windows Desktop: Install Visual Studio Community with "Desktop development with C++"
Web Development: Use flutter run -d chrome for quick testing
Android Development: Configure Android Studio and emulator

🚀 Future Enhancements
More programming languages (Python, Java, C++)
Custom code snippets creation
User accounts and progress tracking
Advanced virtual keyboard
Sound effects for typing
Export practice results
Difficulty levels
Multiplayer mode

⚠️ Demo Status
Currently no public demo version available. Contact developer for access.`
  },
{
    title: 'CSS-Labs',
    description: 'CSS-Labs is a web-based tool designed to help developers learn and experiment with CSS layouts (Flexbox and Grid) with live preview and code generation.',
    technologies: ['React', 'React DOM', 'Bootstrap CSS', 'Custom Components', 'JSZip', 'SVG Icons', 'React Hooks', 'localStorage'],
    category: 'Tool',
    featured: true,
    liveDemo: 'https://css-labs.vercel.app/',
    features: [
      '🎨 Interactive Layout Preview',
      '⚙️ Configurable Properties',
      '💻 Code Generation',
      '📤 Export Options',
      '↩️ Undo/Redo System',
      '📱 Responsive Preview',
      '♿ Accessibility Features',
      '📋 Presets System'
    ],
    detailedDescription: `CSS-Labs
CSS-Labs is a web-based tool designed to help developers learn and experiment with CSS layouts (Flexbox and Grid). It provides a live preview of layout changes, a settings panel to adjust properties, and options to export code to platforms like CodePen, JSFiddle, or as a ZIP file.

🎯 Key Features
Interactive Layout Preview: Visualize Flexbox or Grid layouts with real-time updates
Configurable Properties: Adjust display mode, gaps, alignment, item spans, and styling
Code Generation: Outputs HTML, CSS, and Tailwind CSS code based on configured layout
Export Options: Export to CodePen, JSFiddle, or download as a ZIP file
Undo/Redo: Track changes with a history stack (up to 50 states)
Responsive Preview: Simulate different viewport sizes (Auto, Mobile, Tablet, Desktop)
Accessibility: Includes ARIA attributes and "Skip to main content" link
Presets: Predefined layouts for quick experimentation

🧩 Component Architecture
IconBase: Reusable SVG icon component with customizable styling
Section: Styled container for grouping related controls with gradient headers
Toggle: Radio-button-like component for selecting options with ARIA attributes
Slider: Range input with custom-styled thumb and gradient track
NumberField: Numeric input field for precise value entry with validation
Select: Dropdown menu for selecting options with focus and hover effects
CodeBlock: Displays generated code with copy and export options

🛠️ Tech Stack
Frontend Framework: React
Rendering: React DOM (createRoot)
Styling: Bootstrap CSS
UI Components: Custom React Components
File Generation: JSZip (dynamic)
Icons: Custom SVG Icons
State Management: React Hooks
Storage: localStorage

📊 Platform Features
Layout Types: Flexbox and CSS Grid support
Components: 8+ reusable UI components
Export Options: Multiple platform integrations
History States: 50-state undo/redo stack
Viewports: 4 responsive preview modes
Presets: Built-in layout templates

🚀 Usage
Open the App: Render in DOM element with ID root
Configure Layout: Use Quick Controls or Settings modal
Preview: Real-time layout updates with viewport switching
Export Code: Copy HTML/CSS or export to CodePen/JSFiddle/ZIP
Undo/Redo: Navigate history with keyboard shortcuts
Save/Load: JSON configuration import/export`
  },
{
    title: 'Security Labs Web Platform',
    description: 'Security Labs is a web-based interactive learning platform designed to teach practical cybersecurity concepts through hands-on labs and curated resources.',
    technologies: ['Next.js', 'Tailwind CSS', 'shadcn/ui', 'Prisma', 'SQLite', 'TypeScript', 'Vite', 'Vercel'],
    category: 'Education',
    featured: true,
    liveDemo: 'https://cyber-sec-lab.vercel.app/home',
    features: [
      '🗄️ SQL Injection Lab',
      '🌐 CORS Misconfiguration Lab',
      '🗺️ Cybersecurity Roadmap',
      '🏆 Certification System',
      '🛡️ Additional Security Labs',
      '🎯 Hands-on Practice'
    ],
    detailedDescription: `Security Labs Web Platform
Security Labs is a web-based interactive learning platform designed to teach practical cybersecurity concepts through hands-on labs and curated resources. It offers an immersive environment where users can experiment with real-world security vulnerabilities and understand attack and defense techniques.

🎯 Features
SQL Injection Lab
Interactive lab demonstrating various SQL Injection techniques and mitigation strategies with real-time attack simulation
Union-based, boolean-based, error-based, and time-based attacks
Real-world attack case studies and defense strategies
Input validation, parameterized queries, least privilege principles

CORS Misconfiguration Lab
Comprehensive exploration of Cross-Origin Resource Sharing vulnerabilities
Safe vs unsafe CORS configurations
Attack scenarios and defense implementation
Real-world breach examples for Node.js, Nginx, Apache

Cybersecurity Roadmap
Comprehensive step-by-step learning path from foundational to advanced topics
Web app security, network security, cryptography, social engineering
Penetration testing, incident response, cloud security
Curated learning resources with articles, labs, courses, videos

Certification System (Attractive Style)
QR-verification and shareable certificates (LinkedIn-friendly)
Custom certificate ID with professional credentials
Bronze, Silver, Gold levels based on performance
Huge career benefits for job seekers

Additional Security Labs
Clickjacking, XSS, Command Injection, Phishing Simulation
JWT Token Tampering, Cryptography, Networking Basics
Programming Basics and extensive hands-on practice

🛠️ Tech Stack
Framework: Next.js (React framework for SSR and SSG)
Styling: Tailwind CSS (utility-first CSS framework)
UI Components: shadcn/ui (accessible, customizable components)
Database & ORM: Prisma with SQLite
Languages: TypeScript for type-safe development
Build Tooling: Vite-powered build process

📊 Key Metrics
Interactive Labs: 10+
Learning Levels: 3 (Foundation, Intermediate, Advanced)
Certifications: Bronze/Silver/Gold with QR verification
Security Topics: 15+ comprehensive coverage
Hands-on Practice: 100% practical learning approach
Career Benefits: Huge advantage for cybersecurity professionals`
  },
{
    title: 'OneKit Framework',
    description: 'Custom lightweight JavaScript framework for routing and state management to optimize web performance.',
    technologies: ['JavaScript', 'Framework Development', 'State Management', 'Web Performance'],
    category: 'Framework',
    featured: false,
  },
{
    title: 'Mobile App Portfolio',
    description: 'Various utility software solutions currently available on Google Play Store for public use.',
    technologies: ['Flutter', 'Play Store Deployment', 'Mobile Utilities', 'App Development'],
    category: 'Mobile',
    featured: false,
  }
];;

export default function ProjectsSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const PROJECTS_PER_PAGE = 6;

  // Pagination calculations
  const featuredProjects = projects.filter(project => project.featured);
  const totalPages = Math.ceil(featuredProjects.length / PROJECTS_PER_PAGE);
  const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
  const endIndex = startIndex + PROJECTS_PER_PAGE;
  const currentProjects = featuredProjects.slice(startIndex, endIndex);
  const shouldShowPagination = featuredProjects.length > PROJECTS_PER_PAGE;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section id="projects" className="py-20 section-gradient">
      <div className="max-w-6xl mx-auto px-6">
        <AnimatedSection>
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Notable Projects</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Featured projects showcasing my expertise across different domains
            </p>
          </div>
        </AnimatedSection>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <AnimatedCard key={index} delay={index * 200}>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:scale-105 group flex flex-col h-full">
                {/* Header */}
                <div className="mb-4">
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 w-fit">
                    {project.category}
                  </Badge>
                </div>
                
                {/* Content */}
                <div className="flex-grow space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Technologies */}
                  <div>
                    <h4 className="font-medium text-sm mb-2 text-gray-900 dark:text-white">Technologies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge 
                          variant="secondary" 
                          className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs px-2 py-1"
                        >
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Buttons at bottom */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex gap-3 justify-center">
                    <Button 
  size="sm" 
  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-full px-4"
  asChild
>
  <Link href={getDetailPath(project.title)} className="flex items-center gap-2">
    <ArrowRight className="h-4 w-4" />
    <span className="font-medium">View Details</span>
  </Link>
</Button>
                    {project.liveDemo && (
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 transform hover:scale-105 rounded-full px-4"
                        asChild
                      >
                        <a 
                          href={project.liveDemo} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          <span className="font-medium">Live Demo</span>
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Pagination Controls */}
        {shouldShowPagination && (
          <div className="flex justify-center items-center space-x-2 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="px-3 py-2"
            >
              Previous
            </Button>
            
            <div className="flex space-x-1">
              {Array.from({ length: totalPages }, (_, index) => (
                <Button
                  key={index + 1}
                  variant={currentPage === index + 1 ? "default" : "outline"}
                  size="sm"
                  onClick={() => handlePageChange(index + 1)}
                  className={`w-8 h-8 p-0 ${
                    currentPage === index + 1
                      ? "bg-blue-600 hover:bg-blue-700 text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
            
            <Button
              variant="outline"
              size="sm"
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className="px-3 py-2"
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
