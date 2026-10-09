import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Blocks all crawlers until site.indexable is set to true in src/data/site.ts.
export const GET: APIRoute = () => {
  const body = site.indexable ? 'User-agent: *\nAllow: /\n' : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
