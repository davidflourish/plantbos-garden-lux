import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isVercel = process.env.VERCEL === "1";

export default defineConfig({
  cloudflare: isVercel ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },

    ...(isVercel
      ? {
          spa: { enabled: true },
          prerender: {
            enabled: true,
            crawlLinks: true,
          },
        }
      : {}),
  },
});