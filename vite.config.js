/* eslint-disable @typescript-eslint/no-var-requires */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env': process.env,
  },
})
