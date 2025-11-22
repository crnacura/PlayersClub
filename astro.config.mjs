// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import github from '@astrojs/github';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  prefetch: true,

  // GitHub Pages configuration
  site: 'https://crnacura.github.io/PlayersClub/',
  base: '/PlayersClub/',

  integrations: [sitemap()],
  experimental: {
    svg: true,
  },

  output: 'static',
  adapter: github(),
});
