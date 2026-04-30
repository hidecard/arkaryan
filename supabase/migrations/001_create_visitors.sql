-- Create visitors table for visitor counter
CREATE TABLE IF NOT EXISTS visitors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    ip_hash TEXT UNIQUE NOT NULL,
    user_agent TEXT,
    visit_count INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_visitors_ip_hash ON visitors(ip_hash);

-- Enable Row Level Security (RLS)
ALTER TABLE visitors ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for the API)
CREATE POLICY "Allow all operations" ON visitors
    FOR ALL
    TO anon
    USING (true)
    WITH CHECK (true);

-- Create blog views table for view counter
CREATE TABLE IF NOT EXISTS blog_views (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    blog_id INTEGER UNIQUE NOT NULL,
    view_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_blog_views_blog_id ON blog_views(blog_id);

-- Enable Row Level Security (RLS)
ALTER TABLE blog_views ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (for the API)
CREATE POLICY "Allow all operations" ON blog_views
    FOR ALL
    TO anon
    USING (true)
    WITH CHECK (true);

-- Add updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
DROP TRIGGER IF EXISTS update_visitors_updated_at ON visitors;
CREATE TRIGGER update_visitors_updated_at
    BEFORE UPDATE ON visitors
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_blog_views_updated_at ON blog_views;
CREATE TRIGGER update_blog_views_updated_at
    BEFORE UPDATE ON blog_views
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
