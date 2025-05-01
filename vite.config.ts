import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: process.env.GITHUB_ACTIONS ? "/Team-1277-Website/" : "/",

  build: {
    chunkSizeWarningLimit: 1000,
    assetsInlineLimit: 4096,

    outDir: 'dist',
    emptyOutDir: true,

    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: false,
        drop_debugger: true
      }
    },

    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },

  server: {
    port: 5173,
    strictPort: false,
    open: false,
  },

  preview: {
    port: 4173,
    strictPort: false,
    open: false,
  },
});
