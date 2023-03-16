import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: path.resolve(__dirname, './src/index.ts')
    }
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
