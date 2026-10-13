import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.advancedhuman.care',
  output: 'static',
  integrations: [sitemap()],
  // One-page site: ship the small stylesheet with HTML instead of blocking on a second request.
  build: { inlineStylesheets: 'always' },
});
