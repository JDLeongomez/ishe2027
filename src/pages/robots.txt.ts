import type { APIRoute } from 'astro';
import { site } from '../data/site';

// Blocks all crawlers until site.indexable is set to true in src/data/site.ts.
// The social link-preview bots (Facebook, WhatsApp) are always allowed: they
// only fetch the og:image/title for a one-off preview, they don't index the
// site for search, so letting them through doesn't affect search visibility.
export const GET: APIRoute = () => {
  const previewBots = 'User-agent: facebookexternalhit\nAllow: /\n\nUser-agent: Facebot\nAllow: /\n\nUser-agent: WhatsApp\nAllow: /\n\n';
  const body = site.indexable
    ? 'User-agent: *\nAllow: /\n'
    : `${previewBots}User-agent: *\nDisallow: /\n`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
