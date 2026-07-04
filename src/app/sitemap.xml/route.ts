import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://arkaryan.net';
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes = [
    '',
    '/blog',
  ];

  // Project routes based on directory structure
  const projects = [
    'css-labs',
    'dwmblurglass',
    'exam-system',
    'kg-english',
    'mm-career-ai',
    'mm-match',
    'onekit',
    'photobooth',
    'programming-keyboard-trainer',
    'security-labs',
    'solo-vpn',
    'ybs-ai',
    'yha-ai',
  ];
  const projectRoutes = projects.map(p => `/projects/${p}`);

  // Fetch blog posts to get dynamic slugs
  let blogRoutes: string[] = [];
  try {
    const SHEETS_API_BASE = 'https://script.google.com/macros/s/AKfycbyhu0M0IeYOiVYHyTxafuSQ8TNau6Ij4F1DKCe2agZSjV4aYzMwoJ4gmDm8tputzMtbpg/exec';
    const BLOGS_ENDPOINT = `${SHEETS_API_BASE}?type=blogs`;
    
    const response = await fetch(BLOGS_ENDPOINT);
    if (response.ok) {
      const data = await response.json();
      if (Array.isArray(data)) {
        blogRoutes = data.map((blog: any) => `/blog/${blog.slug}`);
      }
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
  }

  const allRoutes = [...staticRoutes, ...projectRoutes, ...blogRoutes];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
      xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
      xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allRoutes.map(route => `
<url>
  <loc>${baseUrl}${route}</loc>
  <lastmod>${currentDate}</lastmod>
  <changefreq>${route === '' ? 'daily' : 'weekly'}</changefreq>
  <priority>${route === '' ? '1.0' : '0.8'}</priority>
</url>`).join('')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
