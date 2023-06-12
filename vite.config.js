/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env': process.env,
  },
  build: {
    outDir: 'build', // Specify the output folder name here
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
})
