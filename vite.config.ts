import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
  base: process.env.GITHUB_ACTIONS ? "/Team-1277-Website/" : "/",
});
