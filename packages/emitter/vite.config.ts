import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "src/index.ts",
      name: "@datyin/emitter",
      fileName: "index",
      formats: ["es", "umd"],
    },
  },
  esbuild: {
    drop: ["debugger"]
  },
});
