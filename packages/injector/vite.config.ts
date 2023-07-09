import { resolve } from "node:path";
import { defineConfig } from "vite";
import pkg from "./package.json";

export default defineConfig(() => {
  return {
    build: {
      minify: false,
      reportCompressedSize: false,
      lib: {
        entry: resolve(__dirname, "./src/index.ts"),
        fileName: "index",
        formats: ["es", "umd"],
        name: pkg.name
      },
      rollupOptions: {
        external: [
          "@datyin/core"
        ],
        output: {
          globals: {
            "@datyin/core": "@datyin/core"
          }
        }
      }
    },
    esbuild: {
      drop: ["debugger"]
    },
  };
});
