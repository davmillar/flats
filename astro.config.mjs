import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://davmillar.github.io',
  base: '/flats',
  integrations: [mdx()]
});