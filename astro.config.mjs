// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fgbulsoni.github.io',
  // User site — root domain, no base path
  base: '/',
  vite: {
    plugins: [tailwindcss()],
  },
});
