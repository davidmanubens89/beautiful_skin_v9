import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@babel/runtime/helpers/extends', '@babel/runtime/helpers/inheritsLoose']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/]
    }
  }
});