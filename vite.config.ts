import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

const isCustomDomain = process.env.CUSTOM_DOMAIN === "true";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5178,
  },
  base: process.env.GITHUB_ACTIONS && !isCustomDomain ? "/Team-1277-Website/" : "/",
});
