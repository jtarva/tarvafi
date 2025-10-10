// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: process.env.NODE_ENV === 'production' ? 'https://tarva.fi' : 'http://localhost:4321',
  base: process.env.NODE_ENV === 'production' ? '/' : '/tarvafi',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});