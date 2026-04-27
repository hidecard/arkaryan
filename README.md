# Arkar Yan - Portfolio & Professional Website

A modern, responsive portfolio website built with Next.js 15, showcasing professional experience, skills, and projects.

## 🚀 Tech Stack

### Frontend Technologies
- **Next.js 15** - React framework with App Router
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Modern icon library
- **Framer Motion** - Animation library (via tw-animate-css)

### Backend & Data
- **Node.js** - JavaScript runtime
- **Prisma** - Modern database ORM
- **Custom Database** - SQLite-based custom database solution

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Next.js Built-in Features**:
  - Image optimization
  - Font optimization
  - Bundle analysis
  - Hot module replacement

### UI Components
- **shadcn/ui** - High-quality component library (Card, Button, Badge, etc.)
- **Custom Components**:
  - Animated sections with Intersection Observer
  - Enhanced navigation with hover effects and active states
  - Interactive skill bars with scroll triggers
  - Project cards with pagination
  - Blog section with pagination and API integration
  - Contact forms with validation
  - Theme provider with system detection
  - Professional timeline with company information
  - Animated experience cards with hover effects

## 📁 Project Structure

```
arkaryan/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/
│   │   ├── sections/           # Page sections
│   │   │   ├── home.tsx
│   │   │   ├── about.tsx
│   │   │   ├── skills.tsx
│   │   │   ├── projects.tsx
│   │   │   ├── services.tsx
│   │   │   ├── experience.tsx
│   │   │   ├── education.tsx
│   │   │   ├── achievements.tsx
│   │   │   └── contact.tsx
│   │   ├── ui/               # shadcn/ui components
│   │   └── theme-provider.tsx # Theme context
│   ├── hooks/                 # Custom React hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib/                  # Utilities
│       ├── db.ts
│       └── utils.ts
├── public/                   # Static assets
├── prisma/                  # Database schema
├── db/                      # Database files
├── examples/                 # Example projects
├── mini-services/           # Microservices
├── .env.local              # Environment variables
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: Neutral grays with high contrast
- **Secondary**: Muted tones for subtle elements
- **Background**: Clean whites/dark grays
- **Accent**: Blue tones for interactive elements

### Typography
- **Geist Sans** - Clean, modern sans-serif
- **Geist Mono** - Developer-friendly monospace
- **Custom font weights** - Optimized for readability

### UI Patterns
- **Responsive Design** - Mobile-first approach
- **Dark Mode** - System theme detection
- **Smooth Animations** - Intersection Observer for scroll effects
- **Component Composition** - Reusable UI patterns

## ⚡ Features

### Navigation & User Experience
- **Enhanced Navigation Bar** - Modern hover effects with smooth transitions
- **Active Section Highlighting** - Dynamic navigation state based on scroll position
- **Smooth Scrolling** - Section-to-section navigation with easing
- **Responsive Navigation** - Desktop, tablet, and mobile optimized menus
- **Theme Toggle** - Light/dark mode switching with system detection
- **Mobile Menu** - Hamburger menu with slide-in animation

### Content Management
- **Blog Pagination** - Automatic pagination when posts exceed 3 items
- **Projects Pagination** - 6 projects per page with navigation controls
- **Dynamic Content Loading** - Optimized API integration for blogs
- **Featured Content Filtering** - Smart project categorization and display

### Interactive Elements
- **Animated Progress Bars** - Skill percentage visualization with scroll triggers
- **Hover Effects** - Micro-interactions on cards and buttons with scale/translate effects
- **Glow Effects** - Modern glass-morphism and backdrop blur effects
- **Intersection Observer Animations** - Scroll-triggered element animations
- **Gradient Underlines** - Animated navigation indicators
- **Timeline Animations** - Professional experience timeline with staggered animations
- **Card Interactions** - Enhanced hover states and smooth transitions

### Performance Optimizations
- **Next.js Image Optimization** - Automatic image optimization and WebP conversion
- **Font Optimization** - Self-hosted fonts with fallbacks
- **Code Splitting** - Automatic route-based splitting
- **Static Generation** - Optimized build output
- **Lazy Loading** - Component and image lazy loading

### Accessibility
- **Semantic HTML5** - Proper heading hierarchy
- **ARIA Labels** - Screen reader support
- **Keyboard Navigation** - Full keyboard accessibility
- **Focus Management** - Clear focus indicators

## 🛠 Development

### Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd arkaryan
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment**:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   # or
   yarn build
   ```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix linting issues

## 📊 Content Sections

### 1. Home
- Hero section with animated introduction
- Professional profile image and name
- Call-to-action buttons with hover effects
- Stats cards showing achievements
- Smooth scroll navigation
- Animated section transitions

### 2. About
- Professional summary
- Contact information
- Core skills overview

### 3. Skills
- Technical skills by category
- Animated progress bars
- Technology stack visualization

### 4. Projects
- Project showcase with pagination (6 projects per page)
- Technology tags and categorization
- Live demo links and detailed pages
- Animated cards with hover effects
- Featured project filtering

### 5. Blog
- Dynamic blog posts with API integration
- Pagination (3 posts per page)
- Categories and metadata
- Reading time estimates
- Responsive card layout

### 6. Experience
- Professional timeline with animated cards
- Company information and role descriptions
- Technology stack display for each position
- Interactive hover effects and scroll animations
- Work history with duration and type indicators

### 7. Education
- Academic background
- Certifications
- Professional development

### 8. Achievements
- Awards and recognition
- Key accomplishments
- Impact metrics

### 9. Contact
- Contact form
- Social media links
- Professional network

## 🌐 Web Features & API Integration

### Navigation System
- **Multi-level Navigation**: Desktop, tablet, and mobile optimized
- **Active State Management**: Real-time scroll-based section highlighting
- **Smooth Scrolling**: Section-to-section navigation with easing
- **Enhanced Hover Effects**: Scale, translate, and glow animations
- **Responsive Design**: Adaptive layout for all screen sizes

### Content Management System
- **Blog API Integration**: Dynamic content loading from `/api/blogs`
- **Pagination Logic**: Automatic pagination for blogs (3 items) and projects (6 items)
- **Content Filtering**: Featured project categorization
- **Metadata Support**: Reading time, categories, publication dates
- **Error Handling**: Graceful fallbacks for API failures

### User Interface Enhancements
- **Glass-morphism Effects**: Backdrop blur and transparency
- **Gradient Animations**: Color transitions and underlines
- **Micro-interactions**: Button hover states and card animations
- **Loading States**: Skeleton loaders and spinners
- **Theme System**: Light/dark mode with system detection

### Performance Features
- **Lazy Loading**: Component and image lazy loading
- **Code Splitting**: Route-based automatic splitting
- **Image Optimization**: WebP format with fallbacks
- **Bundle Optimization**: Tree shaking and minification
- **Caching Strategy**: Optimized asset delivery

## 🔧 Configuration

### Next.js Configuration
- **App Router** - Modern routing system
- **Image Domains** - Optimized image loading
- **Experimental Features** - Cutting-edge React features

### Tailwind CSS Setup
- **Custom Theme** - Brand-specific design tokens
- **Component Classes** - Consistent styling patterns
- **Responsive Utilities** - Mobile-first design

### TypeScript Configuration
- **Strict Mode** - Type safety enforcement
- **Path Mapping** - Clean import paths
- **Next.js Types** - Framework-specific types

## 📱 Browser Support

- **Modern Browsers** - Chrome, Firefox, Safari, Edge
- **Mobile Support** - iOS Safari, Chrome Mobile
- **Progressive Enhancement** - Graceful degradation

## 🚀 Deployment

### Production Build
- **Static Export** - Optimized for CDN deployment
- **Image Optimization** - WebP format with fallbacks
- **Code Minification** - Automatic bundle optimization

### Environment Variables
- **Database URL** - Connection string
- **API Keys** - External service authentication
- **Theme Configuration** - Customization options

## 📈 Performance

### Core Web Vitals
- **Lighthouse Score** - Optimized for performance
- **Bundle Size** - Code splitting and tree shaking
- **Loading Speed** - Optimized assets and caching

### SEO Features
- **Meta Tags** - Dynamic page metadata
- **Structured Data** - Rich snippets support
- **Sitemap** - Automatic sitemap generation

## 🤝 Contributing

### Development Guidelines
- **TypeScript First** - All new code in TypeScript
- **Component Pattern** - Reusable, composable components
- **Responsive Design** - Mobile-first development
- **Performance Budget** - Bundle size monitoring

### Code Quality
- **ESLint Rules** - Consistent code style
- **Prettier Formatting** - Automated code formatting
- **Type Safety** - Strict TypeScript configuration
- **Testing** - Component and integration tests

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Arkar Yan**
- Software Engineer & Architect
- Project Manager & Instructor
- Founder & Entrepreneur

### 📞 Get in Touch
- **Telegram**: [@hidecard1](https://t.me/hidecard1)
- **Email**: arkaryan.info@gmail.com
- **Portfolio**: [Live Demo](https://arkaryan.vercel.app)

---

*Built with ❤️ using Next.js 15 and modern web technologies*
