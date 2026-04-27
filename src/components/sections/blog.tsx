'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

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
  published_date?: string;
  reading_time?: number;
  tags?: string[];
  featured?: boolean;
}

interface BlogSectionProps {
  scrollToSection?: (section: string) => void;
}

export default function BlogSection({ scrollToSection }: BlogSectionProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const POSTS_PER_PAGE = 3;

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

  // Pagination calculations
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, endIndex);
  const shouldShowPagination = blogs.length > POSTS_PER_PAGE;

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
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Blog
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Insights, tutorials, and educational content from my journey in tech
          </p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600 dark:text-gray-400">Loading blog posts...</p>
          </div>
        ) : blogs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">No blog posts available at the moment.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {currentBlogs.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300">
                  {post.image_url && (
                    <div className="h-48 md:h-64 relative overflow-hidden">
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      {post.reading_time && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="w-4 h-4 mr-1" />
                          {post.reading_time} min
                        </div>
                      )}
                    </div>
                    <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                    {post.excerpt && (
                      <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Link href={`/blog/${post.id}`}>
                        <Button variant="outline" size="sm">
                          Read More
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      {post.published_date && (
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.published_date).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination Controls */}
            {shouldShowPagination && (
              <div className="flex justify-center items-center space-x-2 mb-8">
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
          </>
        )}

        {/* View All Posts Button */}
        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
