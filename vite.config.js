import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // Specify the exact path to the framer-motion package
      'react-framer-motion': path.resolve(__dirname, 'node_modules/framer-motion'),
    },
  },
});
