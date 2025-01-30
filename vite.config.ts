import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Add middleware to handle client-side routing
    middlewares: [
      (req, res, next) => {
        // Check if the request is for a file (has extension)
        const hasFileExtension = /\.[^/]*$/.test(req.url || '');
        if (!hasFileExtension) {
          // Rewrite all URLs without file extensions to /index.html
          req.url = '/index.html';
        }
        next();
      },
    ],
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));