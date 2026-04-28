import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const SHEETS_API_BASE = 'https://script.google.com/macros/s/AKfycbyhu0M0IeYOiVYHyTxafuSQ8TNau6Ij4F1DKCe2agZSjV4aYzMwoJ4gmDm8tputzMtbpg/exec';
    const BLOGS_ENDPOINT = `${SHEETS_API_BASE}?type=blogs`;
    
    const response = await fetch(BLOGS_ENDPOINT, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const blogs = await response.json();
    
    // Extract unique categories from blogs
    const categories = ['All', ...Array.from(new Set(blogs.map((blog: any) => blog.category?.trim())))].filter(Boolean);
    
    return NextResponse.json(categories, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { error: 'Failed to fetch categories' },
      { 
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        },
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
