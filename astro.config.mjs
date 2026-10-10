import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // One-page site: ship the small stylesheet with HTML instead of blocking on a second request.
  build: { inlineStylesheets: 'always' },
});
