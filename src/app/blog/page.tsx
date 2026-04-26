'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/navigation';

// API Configuration
const BLOGS_ENDPOINT = '/api/blogs';

interface BlogPost {
  id: number;
  title: string;
  excerpt?: string;
  content: string;
  category: string;
  image_url?: string;
  author?: string;
  date?: string;
  readTime?: string;
  featured?: boolean;
}

interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  enrolled: number;
  rating: number;
}

export default function BlogPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsResponse = await fetch(BLOGS_ENDPOINT);
        const blogsData = await blogsResponse.json();
        
        setBlogs(blogsData || []);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        // Set empty array on error - no fallback data
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div id="blog" className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeSection="blog" />
      <div className="pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and educational content from my journey in tech
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {blogs.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                {post.image_url && (
                  <div className="h-48 md:h-64 relative overflow-hidden">
                    <img 
                      src={post.image_url} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">
                      {post.category}
                    </Badge>
                    {post.featured && (
                      <Badge variant="default" className="ml-2">
                        Featured
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl font-semibold line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="line-clamp-3 mb-4">
                    {post.excerpt || post.content?.substring(0, 150) + '...'}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-4">
                      {post.author && (
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                      )}
                      {post.date && (
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{post.date}</span>
                        </div>
                      )}
                      {post.readTime && (
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      )}
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <Button 
                        variant="outline" 
                        size="sm"
                      >
                        Read More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
