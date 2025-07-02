import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './public', // Đặt thư mục gốc là public, nơi chứa index.html
  publicDir: false, // Tắt publicDir vì root đã là public
  build: {
    outDir: '../dist', // Xuất build ra thư mục dist ở cấp cao hơn
    sourcemap: false,
    rollupOptions: {
      input: {
        main: 'index.html', // Chỉ định file index.html trong root
      },
    },
  },
});