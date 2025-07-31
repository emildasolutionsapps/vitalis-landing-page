import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/landingpage/',            // 👈  NEW
  plugins: [react()],
  optimizeDeps: { exclude: ['lucide-react'] },
});
