# Visitor Counter & Blog Views Setup

## Environment Variables

Add these to your environment (Vercel, .env.local, etc.):

```
NEXT_PUBLIC_SUPABASE_URL=https://oeykgpdxfeerddkkpenl.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_vShA28NTy2m7YsNI3wixfg_4gWPONXJ
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here  # Optional, for admin operations
```

## Supabase Database Setup

1. Go to your Supabase dashboard: https://oeykgpdxfeerddkkpenl.supabase.co
2. Open the SQL Editor
3. Run the SQL from `supabase/migrations/001_create_visitors.sql`

This creates two tables:
- `visitors` - For site visitor counter
- `blog_views` - For blog post view counts

## Features

### Visitor Counter
- **Privacy-safe**: Stores hashed IP addresses, not actual IPs
- **Unique visitor tracking**: Each IP only counted once as "new visitor"
- **Visit counting**: Tracks how many times a visitor returns
- **Animated counter**: Smooth number animation on page load
- **New visitor indicator**: Green pulse for first-time visitors
- **Session tracking**: Uses sessionStorage to avoid duplicate counting

### Blog View Counter
- **Per-post tracking**: Each blog post has its own view count
- **Session deduplication**: Same session doesn't count multiple views
- **Real-time display**: Shows view count in blog post header

## API Endpoints

### Visitors
- `GET /api/visitors` - Get total visitor count
- `POST /api/visitors` - Track new visitor

### Blog Views
- `GET /api/blog-views?blogId=123` - Get view count for a blog post
- `POST /api/blog-views` - Track a new view (body: `{ blogId: 123 }`)

## Component Usage

### Visitor Counter
```tsx
import VisitorCounter from '@/components/visitor-counter';

// Basic usage
<VisitorCounter />

// Custom styling
<VisitorCounter className="mt-4" showLabel={false} />
```

### Blog View Count
Automatically displayed on blog detail pages. Shows next to date/author info.
