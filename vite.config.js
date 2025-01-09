import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
import Pages from 'vite-plugin-pages'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages({
      dirs: ['src/pages'],
      extensions: ['jsx']
    })
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@layout',
        replacement: path.resolve(__dirname,'src/components/layout')
      },
      {
        find: '@partials',
        replacement: path.resolve(__dirname,'src/components/partials')
      },

    ]
  }
})
