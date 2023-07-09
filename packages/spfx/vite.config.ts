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
        "@pnp/sp/webs",
        "@pnp/sp/lists",
        "@pnp/sp/items",
        "@pnp/sp/items/get-all",
        "@pnp/sp/fields",
        "@pnp/sp/attachments",
        "@pnp/sp/sputilities",
        "@pnp/sp/site-users",
        "@pnp/queryable",
        "@datyin/core",
      ],
      output: {
        globals: {
          "@microsoft/sp-webpart-base": "@microsoft/sp-webpart-base",
          "@pnp/sp": "@pnp/sp",
          "@pnp/queryable": "@pnp/queryable",
          "@datyin/core": "@datyin/core",
        }
      }
    }
  },
  esbuild: {
    drop: ["debugger"]
  },
});
