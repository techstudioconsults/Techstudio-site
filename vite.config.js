import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin()],
  base: '/',
  define: {
    'process.env': process.env,
  },
  build: {
    outDir: 'build', // Specify the output folder name here
  },
  resolve: {
    // alias: { find: '@', replacement: path.resolve(__dirname, 'src') },
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@layout': path.resolve(__dirname, 'src/layout'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@util': path.resolve(__dirname, 'src/util'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@config': path.resolve(__dirname, 'src/config'),
      // Add more aliases as needed
    },
  },
})
