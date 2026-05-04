import type { Metadata } from "next";
import BlogContent from "./blog-content";

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

// Fetch blog post data for metadata generation
async function fetchBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const SHEETS_API_BASE = 'https://script.google.com/macros/s/AKfycbyhu0M0IeYOiVYHyTxafuSQ8TNau6Ij4F1DKCe2agZSjV4aYzMwoJ4gmDm8tputzMtbpg/exec';
    const response = await fetch(`${SHEETS_API_BASE}?type=blogs`, {
      next: { revalidate: 60 }, // Revalidate every 60 seconds
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const blogData = await response.json();
    const blogsArray = Array.isArray(blogData) ? blogData : [];
    const foundPost = blogsArray.find((p: BlogPost) => p.id === parseInt(slug));

    return foundPost || null;
  } catch (error) {
    console.error('Error fetching blog post for metadata:', error);
    return null;
  }
}

// Generate dynamic metadata for Open Graph
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);
  const baseUrl = "https://arkaryan.vercel.app";

  if (!post) {
    return {
      title: "Blog Post Not Found | Arkar Yan",
      description: "The blog post you are looking for could not be found.",
    };
  }

  const title = post.title;
  const description = post.excerpt || post.content.substring(0, 150) + '...';
  const imageUrl = post.image_url || `${baseUrl}/profile.jpg`;
  const blogUrl = `${baseUrl}/blog/${post.id}`;

  return {
    title: `${title} | Arkar Yan Blog`,
    description: description,
    authors: [{ name: post.author || "Arkar Yan" }],
    openGraph: {
      title: title,
      description: description,
      type: "article",
      url: blogUrl,
      siteName: "Arkar Yan - Portfolio",
      locale: "en_US",
      publishedTime: post.date,
      authors: post.author ? [post.author] : ["Arkar Yan"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          url: imageUrl,
          width: 1200,
          height: 1200,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: description,
      images: [imageUrl],
      creator: "@hidecard1",
      site: "@hidecard1",
    },
    alternates: {
      canonical: blogUrl,
    },
  };
}

// Page component
export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogContent slug={slug} />;
}
