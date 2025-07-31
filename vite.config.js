import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss()],
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist",
  },
});
