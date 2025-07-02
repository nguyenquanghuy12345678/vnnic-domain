import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: './', // Thư mục gốc là thư mục dự án (vnnic-domain)
  publicDir: 'public', // Thư mục chứa index.html
  build: {
    outDir: 'dist', // Xuất build vào thư mục dist trong dự án
    sourcemap: false,
    rollupOptions: {
      input: {
        main: './public/index.html', // Đường dẫn tuyệt đối từ root
      },
    },
  },
});