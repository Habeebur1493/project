import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
    proxy= {
      "/api": {
        target: "https://fakestoreapi.com",
        changeOrigin: true,
        secure: false,
      },
    },
  ],
})