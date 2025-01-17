import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: "/space-tourism",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        destination: resolve(__dirname, './destination.html'),
        crew: resolve(__dirname, "./crew.html"),
        technology: resolve(__dirname, "./technology.html"),
      },
    },
    target: 'esnext',
    
  },
})