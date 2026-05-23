import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [sitemap()],
  site: 'https://sinnaj.github.io',
  base: '/life-coaching-webseite',
  output: 'static',
  outDir: './dist',
});
