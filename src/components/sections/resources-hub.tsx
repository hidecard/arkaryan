'use client';
import { AnimatedSection, AnimatedCard } from '@/hooks/use-animations';


import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Download, 
  FileText, 
  Code, 
  BookOpen, 
  Palette, 
  Search,
  ExternalLink,
  FileCode,
  FileType,
  Zap,
  Users,
  ChevronRight,
  Copy,
  Check
} from 'lucide-react';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: 'pdf' | 'code' | 'template' | 'guide';
  downloads: number;
  fileSize?: string;
  tags: string[];
  icon: any;
  downloadUrl?: string;
  codeSnippet?: string;
}

const resources: Resource[] = [
  {
    id: '1',
    title: 'Full-Stack Developer Resume Template',
    description: 'ATS-friendly resume template tailored for software engineers. Includes sections for projects, skills, and experience.',
    category: 'templates',
    type: 'template',
    downloads: 1250,
    fileSize: '245 KB',
    tags: ['Resume', 'Career', 'Job Hunt'],
    icon: FileText,
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'Next.js 14 Cheat Sheet',
    description: 'Quick reference guide for App Router, Server Components, API routes, and common patterns.',
    category: 'cheatsheets',
    type: 'pdf',
    downloads: 890,
    fileSize: '1.2 MB',
    tags: ['Next.js', 'React', 'Reference'],
    icon: FileType,
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'React Hooks Snippets',
    description: 'Essential custom hooks: useFetch, useLocalStorage, useDebounce, useIntersectionObserver.',
    category: 'code',
    type: 'code',
    downloads: 2100,
    tags: ['React', 'Hooks', 'JavaScript'],
    icon: Code,
    codeSnippet: `// useDebounce hook
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}`
  },
  {
    id: '4',
    title: 'Flutter Widget Reference',
    description: 'Visual guide to essential Flutter widgets with code examples and common use cases.',
    category: 'cheatsheets',
    type: 'pdf',
    downloads: 750,
    fileSize: '2.8 MB',
    tags: ['Flutter', 'Dart', 'Mobile'],
    icon: BookOpen,
    downloadUrl: '#'
  },
  {
    id: '5',
    title: 'Tailwind CSS Color Palette',
    description: 'Curated color schemes for modern web projects with dark mode support.',
    category: 'templates',
    type: 'template',
    downloads: 560,
    fileSize: '180 KB',
    tags: ['Design', 'CSS', 'Tailwind'],
    icon: Palette,
    downloadUrl: '#'
  },
  {
    id: '6',
    title: 'Node.js Express Boilerplate',
    description: 'Production-ready Express.js starter with TypeScript, error handling, and middleware setup.',
    category: 'code',
    type: 'code',
    downloads: 1450,
    tags: ['Node.js', 'Express', 'Backend'],
    icon: FileCode,
    codeSnippet: `// Express TypeScript setup
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

export default app;`
  },
  {
    id: '7',
    title: 'System Design Interview Guide',
    description: 'Key concepts and patterns for backend system design interviews with real examples.',
    category: 'guides',
    type: 'guide',
    downloads: 420,
    fileSize: '3.5 MB',
    tags: ['System Design', 'Interview', 'Architecture'],
    icon: Zap,
    downloadUrl: '#'
  },
  {
    id: '8',
    title: 'Myanmar Developer Community Guide',
    description: 'Local resources, meetups, job boards, and learning communities for Myanmar developers.',
    category: 'guides',
    type: 'guide',
    downloads: 320,
    fileSize: '890 KB',
    tags: ['Community', 'Myanmar', 'Networking'],
    icon: Users,
    downloadUrl: '#'
  }
];

const categoryLabels: Record<string, string> = {
  all: 'All Resources',
  templates: 'Templates',
  cheatsheets: 'Cheat Sheets',
  code: 'Code Snippets',
  guides: 'Guides'
};

export default function ResourcesHubSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const totalDownloads = resources.reduce((sum, r) => sum + r.downloads, 0);

  return (
    <section id="resources" className="py-20 sm:py-28 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <Badge variant="outline" className="mb-4 px-4 py-1.5 text-sm font-medium border-blue-200 dark:border-blue-800 text-blue-600 dark:text-blue-400">
            Free Downloads
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Developer Resources Hub
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Free tools, templates, and code snippets to accelerate your development journey. 
            Used by <span className="font-semibold text-blue-600 dark:text-blue-400">{totalDownloads.toLocaleString()}+</span> developers worldwide.
          </p>
        </AnimatedSection>

        {/* Search & Filter */}
        <AnimatedSection delay={200} className="mb-10">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              />
            </div>
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full sm:w-auto">
              <TabsList className="grid grid-cols-3 sm:grid-cols-5 w-full sm:w-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="templates">Templates</TabsTrigger>
                <TabsTrigger value="cheatsheets">Cheatsheets</TabsTrigger>
                <TabsTrigger value="code">Code</TabsTrigger>
                <TabsTrigger value="guides">Guides</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </AnimatedSection>

        {/* Resources Grid */}
        <AnimatedSection delay={400}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => (
              <Card 
                key={resource.id}
                className="group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <resource.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    {resource.fileSize && (
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                        {resource.fileSize}
                      </span>
                    )}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {resource.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                    {resource.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Downloads count */}
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <Download className="h-4 w-4" />
                    <span>{resource.downloads.toLocaleString()} downloads</span>
                  </div>

                  {/* Action Buttons */}
                  {resource.type === 'code' && resource.codeSnippet ? (
                    <Button
                      variant="outline"
                      className="w-full border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/20"
                      onClick={() => handleCopyCode(resource.codeSnippet!, resource.id)}
                    >
                      {copiedId === resource.id ? (
                        <>
                          <Check className="mr-2 h-4 w-4 text-green-500" />
                          Copied!
                        </>
                      ) : (
                        <>
                          <Copy className="mr-2 h-4 w-4" />
                          Copy Code
                        </>
                      )}
                    </Button>
                  ) : (
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                      onClick={() => window.open(resource.downloadUrl, '_blank')}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download Free
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              No resources found
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}

        {/* Newsletter CTA */}
        <AnimatedSection delay={600} className="mt-16">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 overflow-hidden">
            <CardContent className="p-8 sm:p-12">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                    Get New Resources First
                  </h3>
                  <p className="text-blue-100">
                    Join 5,000+ developers getting weekly free resources and tutorials.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
                  <Input 
                    placeholder="Enter your email"
                    className="h-12 bg-white/20 border-white/30 text-white placeholder:text-white/60 min-w-[280px]"
                  />
                  <Button 
                    variant="secondary"
                    className="h-12 px-8 bg-white text-blue-600 hover:bg-blue-50 font-semibold"
                  >
                    Subscribe
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
