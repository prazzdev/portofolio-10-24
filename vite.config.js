import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "stimik-tunas-bangsa-banjarnega",
    project: "javascript-react"
  })],

  build: {
    sourcemap: true
  }
})