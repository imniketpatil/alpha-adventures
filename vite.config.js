import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/alpha-adventures/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000, // Increase the chunk size warning limit to 1000 kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor"; // Create a separate chunk for dependencies in node_modules
          }
          // Add more custom chunking logic if needed
        },
      },
    },
  },
});
