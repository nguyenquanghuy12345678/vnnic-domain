import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Đặt thư mục gốc là thư mục hiện tại
  publicDir: 'public', // Chỉ định thư mục public chứa index.html
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './public/index.html', // Chỉ định rõ ràng entry point
      },
    },
  },
});