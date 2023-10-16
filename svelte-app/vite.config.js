import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import sveltePreprocess from 'svelte-preprocess'

export default defineConfig({
  base: '/restructuring-futures-f1/',
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
  ],
  build: {
    rollupOptions: {
      external: ['fsevents'],
      output: {
        manualChunks: {
          'svelte': ['svelte', '@sveltejs/vite-plugin-svelte']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['qrcode']
  },
  server: {
    host:'0.0.0.0', port:5173
   },
})
