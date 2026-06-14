import { defineConfig } from 'astro/config';

// Maintenance branch: sitemap disabled while the site is offline for legal-text revisions.
export default defineConfig({
  site: 'https://meiklifecoaching.de',
  output: 'static',
  outDir: './dist',
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.io']
    }
  }
});
