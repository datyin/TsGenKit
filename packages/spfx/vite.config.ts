import { defineConfig } from "vite";

export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "src/index.ts",
      name: "@datyin/spfx",
      fileName: "index",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: [
        "@microsoft/sp-webpart-base",
        "@pnp/sp",
        "@pnp/queryable",
      ]
    }
  },
  esbuild: {
    drop: ["debugger"]
  },
});
