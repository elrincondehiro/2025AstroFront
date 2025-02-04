// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from '@astrojs/svelte';
import icon from 'astro-icon';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [tailwind(), svelte({extensions: ['.svelte']}), icon()],
  // experimental: {
  //   session: {
  //     // Required: the name of the Unstorage driver
  //     driver: "fs",
  //   },
  // },
  env: {
    schema:{

    }
  },
});