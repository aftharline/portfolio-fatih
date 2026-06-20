// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import node from '@astrojs/node';

import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // <-- INI WAJIB ADA
  output: 'server',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: vercel(),

  integrations: [react()]
});