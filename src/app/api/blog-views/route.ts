import { NextRequest, NextResponse } from 'next/server';
import { firestoreGet, firestoreSet } from '@/lib/firebase';

const PROJECT_ID = 'messager-4abd8';
const BASE_URL = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`;

// Get view count for a specific blog
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get('blogId');

    if (!blogId) {
      return NextResponse.json({ error: 'Blog ID required' }, { status: 400 });
    }

    const docId = blogId.toString();
    const data = await firestoreGet('blog_views', docId);

    if (data) {
      return NextResponse.json({ count: data.view_count || 0 });
    } else {
      return NextResponse.json({ count: 0 });
    }
  } catch (error) {
    console.error('Error fetching blog views:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

// Track a new view for a blog
export async function POST(req: NextRequest) {
  try {
    const { blogId } = await req.json();

    if (!blogId) {
      return NextResponse.json({ error: 'Blog ID required' }, { status: 400 });
    }

    const blogIdNum = parseInt(blogId);
    const docId = blogIdNum.toString();

    // Get existing data
    const existing = await firestoreGet('blog_views', docId);

    let newCount = 1;
    const now = new Date().toISOString();

    if (existing && existing.view_count !== undefined) {
      // Increment existing
      newCount = existing.view_count + 1;
      await firestoreSet('blog_views', docId, {
        blog_id: blogIdNum,
        view_count: newCount,
        updated_at: now,
        created_at: existing.created_at || now
      });
    } else {
      // Create new
      await firestoreSet('blog_views', docId, {
        blog_id: blogIdNum,
        view_count: 1,
        created_at: now,
        updated_at: now
      });
    }

    return NextResponse.json({
      success: true,
      count: newCount
    });
  } catch (error) {
    console.error('Error tracking blog view:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
