// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://envysinho.github.io',
  base: '/diaingeniero/',
  integrations: [react()],
});