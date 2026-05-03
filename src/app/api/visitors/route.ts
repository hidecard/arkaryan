import { NextRequest, NextResponse } from 'next/server';
import { firestoreGet, firestoreSet } from '@/lib/firebase';
import { createHash } from 'crypto';

// Get visitor count - list all visitor documents and count them
export async function GET() {
  try {
    // Firestore REST API doesn't have a simple count, so we use a counter document
    const counter = await firestoreGet('visitor_counter', 'total');
    const count = counter?.count || 0;

    return NextResponse.json({ count });
  } catch (error) {
    console.error('Error fetching visitor count:', error);
    return NextResponse.json({ count: 0 }, { status: 500 });
  }
}

// Track new visitor
export async function POST(req: NextRequest) {
  try {
    // Get IP address from headers
    const forwarded = req.headers.get('x-forwarded-for');
    const ip = forwarded?.split(',')[0] || 'unknown';

    // Create hash of IP (for privacy)
    const ipHash = createHash('sha256').update(ip).digest('hex');

    // Get user agent
    const userAgent = req.headers.get('user-agent') || '';

    // Check if visitor already exists
    const existing = await firestoreGet('visitors', ipHash);

    let isNewVisitor = false;
    const now = new Date().toISOString();

    if (existing) {
      // Update visit count for returning visitor
      await firestoreSet('visitors', ipHash, {
        ip_hash: ipHash,
        user_agent: userAgent,
        visit_count: (existing.visit_count || 0) + 1,
        updated_at: now,
        created_at: existing.created_at || now
      });
    } else {
      // Create new visitor
      isNewVisitor = true;
      await firestoreSet('visitors', ipHash, {
        ip_hash: ipHash,
        user_agent: userAgent,
        visit_count: 1,
        created_at: now,
        updated_at: now
      });

      // Increment total visitor counter
      const counter = await firestoreGet('visitor_counter', 'total');
      await firestoreSet('visitor_counter', 'total', {
        count: (counter?.count || 0) + 1,
        updated_at: now
      });
    }

    // Get updated count
    const updatedCounter = await firestoreGet('visitor_counter', 'total');

    return NextResponse.json({
      success: true,
      count: updatedCounter?.count || 0,
      isNewVisitor
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
