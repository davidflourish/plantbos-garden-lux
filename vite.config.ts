import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },

  // Force alias resolution for build
  resolve: {
    alias: {
      "@": "/src",
    },
  },

  // Nitro configuration for Vercel
  nitro: {
    preset: "vercel",
    prerender: {
      crawlLinks: false,
    },
  },

  // Build optimization
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
