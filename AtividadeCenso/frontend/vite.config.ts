import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/geojson': 'http://localhost:3000', // Ajuste se seu backend usar outro path
    }
  }
});