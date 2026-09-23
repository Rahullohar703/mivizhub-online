import path from 'path';
import fs from 'fs';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

function spaFallbackPlugin() {
  return {
    name: 'spa-fallback-plugin',
    closeBundle() {
      const distDir = path.resolve(__dirname, './dist');
      const indexPath = path.join(distDir, 'index.html');
      if (fs.existsSync(indexPath)) {
        // 1. Copy to 404.html for static hosting fallback
        fs.copyFileSync(indexPath, path.join(distDir, '404.html'));
        
        // 2. Generate static growth/index.html for direct filesystem routing
        const growthDir = path.join(distDir, 'growth');
        if (!fs.existsSync(growthDir)) {
          fs.mkdirSync(growthDir, { recursive: true });
        }
        fs.copyFileSync(indexPath, path.join(growthDir, 'index.html'));
      }
    }
  };
}

export default defineConfig({
  plugins: [react(), spaFallbackPlugin()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    host: true
  }
});
