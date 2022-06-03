import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default ({command, mode}) => defineConfig({

  build: {

    rollupOptions: {
      input: [
        'src/main.js'
      ]
    }
  },

  plugins: [
    svelte({
      experimental: {
        prebundleSvelteLibraries: true
      }
    })
  ]

})
