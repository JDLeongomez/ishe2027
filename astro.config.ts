import { defineConfig } from 'astro/config';
import { site } from './src/data/site';

// The public address lives in src/data/site.ts (site.url), so there is
// only one place to change when the final domain is decided.
export default defineConfig({
  site: site.url,
});
