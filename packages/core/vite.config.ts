import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig(() => {
  return {
    build: {
      minify: false,
      reportCompressedSize: false,
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        fileName: "index",
        formats: ["es", "umd"],
        name: "@datyin/core"
      }
    }
  };
});
