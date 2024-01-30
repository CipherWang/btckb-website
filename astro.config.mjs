import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENv === 'production' ? 'https://cell.studio' : 'http://localhost:4321',
  integrations: [tailwind()],
});
