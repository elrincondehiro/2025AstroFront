// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind()],
  // adapter: vercel(),
  env: {
    schema:{

    }
  },
  // experimental: {
  //   session: {
  //     // Required: the name of the Unstorage driver
  //     driver: "fs",
  //   },
  // },
});