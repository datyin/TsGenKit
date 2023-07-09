import { defineConfig } from "vite";

export default defineConfig({
  esbuild: {
    drop: [
      "debugger"
    ]
  },
  build: {
    ssr: true,
    minify: false,
    target: "node16.0.0",
    lib: {
      entry: "src/index.ts",
      name: "@datyin/vite-plugin-execute",
      fileName: "index",
      formats: ["es", "cjs"],
    },
  },
});
