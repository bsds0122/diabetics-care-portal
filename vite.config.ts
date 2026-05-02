import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  server: {
    host: true,
    port: 8080,
    hmr: {
      overlay: false,
    },
  },

  plugins: [react()].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "@tanstack/react-query", "@tanstack/query-core"],
  },

  // ✅ ADD THIS BLOCK (CRITICAL FOR PERFORMANCE)
  build: {
    chunkSizeWarningLimit: 1000, // removes warning noise

    rollupOptions: {
      output: {
        manualChunks: {
          // Core libs
          react: ["react", "react-dom"],

          // Routing
          router: ["react-router-dom"],

          // Data fetching
          query: ["@tanstack/react-query"],

          // Icons (important split)
          icons: ["lucide-react"],
        },
      },
    },
  },
}));