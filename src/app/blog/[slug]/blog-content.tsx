'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft, ExternalLink, Eye } from 'lucide-react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import ShareButton from '@/components/ui/share-button';
import ReadingProgress from '@/components/ui/reading-progress';
import ReactMarkdown from 'react-markdown';

// API Configuration
const BLOGS_ENDPOINT = '/api/blogs';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  category: string;
  image_url?: string;
  excerpt?: string;
  author?: string;
  date?: string;
  readTime?: string;
  featured?: boolean;
}

interface BlogContentProps {
  slug: string;
}

export default function BlogContent({ slug }: BlogContentProps) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [viewCount, setViewCount] = useState<number>(0);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        // Fetch blog data from API
        const response = await fetch(BLOGS_ENDPOINT);
        const blogData = await response.json();
        
        // Ensure blogData is an array
        const blogsArray = Array.isArray(blogData) ? blogData : [];
        
        // Find the blog post with matching ID
        const foundPost = blogsArray.find((p: BlogPost) => p.id === parseInt(slug));
        
        if (foundPost) {
          setPost(foundPost);
          // Set related posts (same category, excluding current)
          const related = blogsArray.filter((p: BlogPost) => 
            p.category === foundPost.category && p.id !== foundPost.id
          ).slice(0, 3);
          setRelatedPosts(related);
          
          // Fetch and track view count
          await fetchViewCount(foundPost.id);
          await trackView(foundPost.id);
        } else {
          // No post found - set post to null to show "not found" state
          setPost(null);
          setRelatedPosts([]);
        }
      } catch (error) {
        console.error('Error fetching blog post:', error);
        // On error, set post to null to show error state
        setPost(null);
        setRelatedPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  // Fetch current view count
  const fetchViewCount = async (blogId: number) => {
    try {
      const response = await fetch(`/api/blog-views?blogId=${blogId}`);
      if (response.ok) {
        const data = await response.json();
        setViewCount(data.count);
      }
    } catch (error) {
      console.error('Error fetching view count:', error);
    }
  };

  // Track a new view
  const trackView = async (blogId: number) => {
    try {
      // Check if already viewed in this session
      const viewedKey = `blog_viewed_${blogId}`;
      if (sessionStorage.getItem(viewedKey)) {
        return; // Don't count duplicate views in same session
      }
      
      const response = await fetch('/api/blog-views', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ blogId })
      });
      
      if (response.ok) {
        const data = await response.json();
        setViewCount(data.count);
        sessionStorage.setItem(viewedKey, 'true');
      }
    } catch (error) {
      console.error('Error tracking view:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog Post Not Found</h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              The blog post you are looking for could not be found.
            </p>
            <Link href="/blog" className="inline-block">
              <Button>
                Browse All Posts
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ReadingProgress targetId="article-content" height={3} />
      <Navigation activeSection="blog" />
      <div className="pt-20">
        <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/" className="inline-block">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Blog Post Content */}
        <article id="article-content" className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {post.image_url && (
            <div className="h-64 md:h-96 relative overflow-hidden">
              <img 
                src={post.image_url} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Article Header */}
            <header className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="mb-2">
                    {post.category}
                  </Badge>
                  {post.featured && (
                    <Badge variant="default" className="ml-2">
                      Featured
                    </Badge>
                  )}
                </div>
                <ShareButton 
                  url={`/blog/${post.id}`}
                  title={post.title}
                  description={post.excerpt || ''}
                  size="sm"
                  variant="outline"
                />
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {post.title}
              </h1>
              
              <div className="flex items-center space-x-6 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Eye className="h-4 w-4" />
                  <span>{viewCount.toLocaleString()} views</span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none text-gray-900 dark:text-gray-100 prose-headings:text-gray-900 prose-headings:dark:text-white prose-p:text-gray-900 prose-p:dark:text-gray-100 prose-strong:text-gray-900 prose-strong:dark:text-white prose-code:text-gray-900 prose-code:dark:text-gray-100 prose-pre:bg-gray-100 prose-pre:dark:bg-gray-800 prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-700 prose-blockquote:dark:text-gray-300">
              <ReactMarkdown
                components={{
                  h1: ({children}) => <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{children}</h1>,
                  h2: ({children}) => <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{children}</h2>,
                  h3: ({children}) => <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{children}</h3>,
                  p: ({children}) => <p className="mb-4 text-gray-900 dark:text-gray-100 leading-relaxed">{children}</p>,
                  ul: ({children}) => <ul className="list-disc list-inside mb-4 text-gray-900 dark:text-gray-100">{children}</ul>,
                  ol: ({children}) => <ol className="list-decimal list-inside mb-4 text-gray-900 dark:text-gray-100">{children}</ol>,
                  li: ({children}) => <li className="mb-2 text-gray-900 dark:text-gray-100">{children}</li>,
                  blockquote: ({children}) => <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-gray-700 dark:text-gray-300">{children}</blockquote>,
                  code: ({node, children}) => {
                    const isInline = node?.position?.start?.line === node?.position?.end?.line;
                    return isInline 
                      ? <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm text-gray-900 dark:text-gray-100">{children}</code>
                      : <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto mb-4"><code>{children}</code></pre>;
                  },
                  a: ({href, children}) => <a href={href} className="text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>,
                  img: ({src, alt}) => <img src={src} alt={alt} className="rounded-lg max-w-full h-auto my-4" />,
                  hr: () => <hr className="my-6 border-gray-300 dark:border-gray-600" />,
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Share Section */}
            <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Share this article
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Help others discover this content by sharing it on your favorite platforms
                  </p>
                </div>
                <ShareButton 
                  url={`/blog/${post.id}`}
                  title={post.title}
                  description={post.excerpt || ''}
                  size="default"
                  variant="default"
                />
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow duration-300">
                  {relatedPost.image_url && (
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={relatedPost.image_url} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <Badge variant="secondary" className="mb-2">
                        {relatedPost.category}
                      </Badge>
                      {relatedPost.featured && (
                        <Badge variant="default" className="ml-2">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-xl font-semibold line-clamp-2">
                      {relatedPost.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3 mb-4">
                      {relatedPost.excerpt}
                    </CardDescription>
                    <div className="flex items-center justify-between">
                      <Link href={`/blog/${relatedPost.id}`}>
                        <Button variant="outline" size="sm">
                          Read More
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
