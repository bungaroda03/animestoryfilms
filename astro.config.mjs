import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://animestoryfilms.xyz',
  integrations: [sitemap()],
});
