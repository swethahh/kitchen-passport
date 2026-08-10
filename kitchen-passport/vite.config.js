import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages under https://<user>.github.io/<repo>/,
// set base to "/<repo>/". For Netlify/Vercel or a custom domain, leave it "/".
export default defineConfig({
  plugins: [react()],
  base: "/",
});
