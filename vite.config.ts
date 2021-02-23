import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/demo-vue-oidc/',
  plugins: [createVuePlugin(/*options*/)]
})