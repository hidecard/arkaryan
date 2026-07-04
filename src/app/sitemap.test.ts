import { describe, it, expect, beforeAll } from '@jest/globals';
import { GET } from './sitemap.xml/route';

describe('Sitemap', () => {
  beforeAll(() => {
    // Mock environment variables if needed
    process.env.NEXT_PUBLIC_SITE_URL = 'https://arkaryan.net/';
  });

  it('should generate a valid sitemap XML', async () => {
    const response = await GET();
    
    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/xml');
    expect(response.headers.get('Cache-Control')).toBe('public, max-age=3600, s-maxage=86400');
  });

  it('should contain required XML elements', async () => {
    const response = await GET();
    const xmlText = await response.text();
    
    expect(xmlText).toContain('<?xml version="1.0" encoding="UTF-8"?>');
    expect(xmlText).toContain('<urlset');
    expect(xmlText).toContain('xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
    expect(xmlText).toContain('</urlset>');
  });

  it('should contain homepage URL', async () => {
    const response = await GET();
    const xmlText = await response.text();
    
    expect(xmlText).toContain('<url>');
    expect(xmlText).toContain('<loc>https://arkaryan.net/</loc>');
    expect(xmlText).toContain('</url>');
  });

  it('should contain lastmod date', async () => {
    const response = await GET();
    const xmlText = await response.text();
    
    expect(xmlText).toContain('<lastmod>');
    expect(xmlText).toContain('</lastmod>');
    
    // Check if lastmod is in valid ISO 8601 format
    const lastmodMatch = xmlText.match(/<lastmod>([^<]+)<\/lastmod>/);
    if (lastmodMatch) {
      const lastmodDate = new Date(lastmodMatch[1]);
      expect(lastmodDate.toISOString()).toBe(lastmodMatch[1]);
    }
  });

  it('should be valid XML structure', async () => {
    const response = await GET();
    const xmlText = await response.text();
    
    // Basic XML structure validation
    expect(xmlText).toMatch(/^<\?xml[^>]*\>/);
    expect(xmlText).toContain('<urlset');
    expect(xmlText.endsWith('</urlset>\n') || xmlText.endsWith('</urlset>'));
    
    // Check for balanced tags
    const openTags = (xmlText.match(/<[^\/][^>]*>/g) || []).length;
    const closeTags = (xmlText.match(/<\/[^>]+>/g) || []).length;
    const selfClosingTags = (xmlText.match(/<[^>]*\/>/g) || []).length;
    
    expect(openTags).toBe(closeTags + selfClosingTags);
  });
});
