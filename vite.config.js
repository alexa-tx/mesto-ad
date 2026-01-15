import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/mesto-ad/",

  root: ".",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: resolve(__dirname, "index.html"),
    },
  },
  server: {
    open: true
  },
  base: './',
});
