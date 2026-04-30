'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, Clock, User, ArrowRight, ExternalLink, Search, Eye } from 'lucide-react';
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
  const [filteredBlogs, setFilteredBlogs] = useState<BlogPost[]>([]);
  const [categories, setCategories] = useState<string[]>(['All']);
  const [viewCounts, setViewCounts] = useState<Record<number, number>>({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch blogs and categories in parallel
        const [blogsResponse, categoriesResponse] = await Promise.all([
          fetch(BLOGS_ENDPOINT),
          fetch('/api/categories')
        ]);
        
        const blogsData = await blogsResponse.json();
        const categoriesData = await categoriesResponse.json();
        
        let blogsArray = Array.isArray(blogsData) ? blogsData : [];
        const categoriesArray = Array.isArray(categoriesData) ? categoriesData : ['All'];

        // Sort blogs by ID (newest/highest ID first)
        blogsArray = blogsArray.sort((a: BlogPost, b: BlogPost) => b.id - a.id);

        setBlogs(blogsArray);
        setFilteredBlogs(blogsArray);
        setCategories(categoriesArray);
        
        // Fetch view counts for all blogs
        fetchViewCounts(blogsArray);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Set empty arrays on error - no fallback data
        setBlogs([]);
        setFilteredBlogs([]);
        setCategories(['All']);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetch view counts for blogs
  const fetchViewCounts = async (blogsList: BlogPost[]) => {
    try {
      const counts: Record<number, number> = {};
      
      await Promise.all(
        blogsList.map(async (blog) => {
          const response = await fetch(`/api/blog-views?blogId=${blog.id}`);
          if (response.ok) {
            const data = await response.json();
            counts[blog.id] = data.count;
          }
        })
      );
      
      setViewCounts(counts);
    } catch (error) {
      console.error('Error fetching view counts:', error);
    }
  };

  // Filter blogs based on search term and category
  useEffect(() => {
    let filtered = blogs;

    // Filter by category
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(blog => 
        blog.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredBlogs(filtered);
  }, [blogs, searchTerm, selectedCategory]);

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

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              type="text"
              placeholder="Search blog posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 w-full"
            />
          </div>

          {/* Category Tags */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={`transition-colors ${
                  selectedCategory === category
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredBlogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 dark:text-gray-400">
              {searchTerm || selectedCategory 
                ? 'No blog posts found matching your criteria.' 
                : 'No blog posts available at the moment.'}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredBlogs.map((post) => (
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
                      {viewCounts[post.id] !== undefined && (
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{viewCounts[post.id].toLocaleString()}</span>
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
