import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const isCustomDomain = process.env.CUSTOM_DOMAIN === 'true';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: process.env.GITHUB_ACTIONS && !isCustomDomain ? "/Team-1277-Website/" : "/",
});

