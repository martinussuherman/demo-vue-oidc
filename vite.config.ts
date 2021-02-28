import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo-vue-oidc/',
  plugins: [createVuePlugin(/*options*/)],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html'),
        oidcRenew: resolve(__dirname, 'silent-renew-oidc.html')
      }
    }
  }
})
