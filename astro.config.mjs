import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://kjroelke.github.io',
    base: 'nathan-warner-site',
    build: {
        assets: 'dist',
    },
    integrations: [mdx(), sitemap()],
});
