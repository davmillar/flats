import { defineConfig } from 'astro/config';
import AutoImport from 'astro-auto-import';
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://puzzlers.wtf',
  integrations: [
    AutoImport({
      imports: [
        './src/components/Example.astro',
        './src/components/Step.astro',
        './src/components/Finally.astro',
      ]
    }),
    mdx()
  ]
});