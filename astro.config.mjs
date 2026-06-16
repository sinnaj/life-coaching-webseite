import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://meiklifecoaching.de',
  output: 'static',
  outDir: './dist',
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app', '.ngrok.io']
    }
  }
});
