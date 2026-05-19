import { defineConfig } from 'vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite' // or solid equivalent
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      preset: 'vercel'   // ← This is key
    }),
    viteReact(),
  ],
})
