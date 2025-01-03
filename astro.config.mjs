import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: "https://choctaw-nation.github.io",
	base: "astro-bootstrap",
	build: {
	  assets: "dist",
	},
	integrations: [mdx(), sitemap()],
});
