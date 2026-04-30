import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false }
});

// Get view count for a specific blog
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const blogId = searchParams.get('blogId');
    
    if (!blogId) {
      return NextResponse.json({ error: 'Blog ID required' }, { status: 400 });
    }
    
    const { data, error } = await supabase
      .from('blog_views')
      .select('view_count')
      .eq('blog_id', parseInt(blogId))
      .single();
    
    if (error && error.code !== 'PGRST116') {
      throw error;
    }
    
    return NextResponse.json({ count: data?.view_count || 0 });
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
    
    // Check if blog view record exists
    const { data: existingView, error: findError } = await supabase
      .from('blog_views')
      .select('id, view_count')
      .eq('blog_id', blogIdNum)
      .single();
    
    if (findError && findError.code !== 'PGRST116') {
      throw findError;
    }
    
    let newCount = 1;
    
    if (existingView) {
      // Update view count
      newCount = existingView.view_count + 1;
      const { error: updateError } = await supabase
        .from('blog_views')
        .update({ view_count: newCount })
        .eq('id', existingView.id);
      
      if (updateError) throw updateError;
    } else {
      // Create new view record
      const { error: insertError } = await supabase
        .from('blog_views')
        .insert({
          blog_id: blogIdNum,
          view_count: 1
        });
      
      if (insertError) throw insertError;
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
