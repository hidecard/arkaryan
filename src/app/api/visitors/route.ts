import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createHash } from 'crypto';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: { persistSession: false }
});

// Get visitor count
export async function GET() {
  try {
    const { count, error } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true });
    
    if (error) throw error;
    
    return NextResponse.json({ count: count || 0 });
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
    const { data: existingVisitor, error: findError } = await supabase
      .from('visitors')
      .select('id, visit_count')
      .eq('ip_hash', ipHash)
      .single();
    
    if (findError && findError.code !== 'PGRST116') {
      throw findError;
    }
    
    let isNewVisitor = false;
    
    if (existingVisitor) {
      // Update visit count for returning visitor
      await supabase
        .from('visitors')
        .update({ 
          visit_count: existingVisitor.visit_count + 1,
          updated_at: new Date().toISOString()
        })
        .eq('id', existingVisitor.id);
    } else {
      // Create new visitor
      isNewVisitor = true;
      await supabase
        .from('visitors')
        .insert({
          ip_hash: ipHash,
          user_agent: userAgent,
          visit_count: 1
        });
    }
    
    // Get updated count
    const { count, error: countError } = await supabase
      .from('visitors')
      .select('*', { count: 'exact', head: true });
    
    if (countError) throw countError;
    
    return NextResponse.json({ 
      success: true, 
      count: count || 0,
      isNewVisitor
    });
  } catch (error) {
    console.error('Error tracking visitor:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
