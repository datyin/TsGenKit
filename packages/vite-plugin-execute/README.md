# @datyin/vite-plugin-execute

> A simple yet powerful Vite plugin to execute shell commands post-build.

## Introduction

`@datyin/vite-plugin-execute` is a useful tool that enhances your build process by allowing you to execute shell commands once your Vite build is complete. This plugin can be helpful in various scenarios, such as triggering additional build steps, deploying your application, or simply executing NodeJS script.

## Installation

You can add `@datyin/vite-plugin-execute` to your project by using npm, pnpm or yarn.

Using npm:

```bash
npm install @datyin/vite-plugin-execute --save-dev
```

Using pnpm:

```bash
pnpm add -D @datyin/vite-plugin-execute
```

Using yarn:

```bash
yarn add -D @datyin/vite-plugin-execute
```

# Usage

#### Using with NodeJS

`vite.config.ts`
```ts
import { resolve } from "node:path";
import { defineConfig } from "vite";
import { vitePluginExecute } from "@datyin/vite-plugin-execute";

export default defineConfig(({ mode }) => {
  return {
    build: {
      ssr: true,
      target: "node18.0.0",
      minify: false,
      watch: mode === "development" ? {} : null,
      lib: {
        entry: {
          server: resolve(__dirname, "src", "server.ts")
        },
        formats: ["es", "cjs"]
      }
    },
    plugins: [
      vitePluginExecute({
        command: "node",
        args: ["./server.js"],
        spawnOptions: {
          cwd: resolve(__dirname, "dist")
        }
      })
    ]
  }
});
```

#### Using with Electron

You can find electron's NodeJS version [here](https://releases.electronjs.org/)

`vite.config.ts`
```ts
import { resolve } from "node:path";
import { defineConfig } from "vite";
import electron from "electron";
import { vitePluginExecute } from "@datyin/vite-plugin-execute";

export default defineConfig(({ mode }) => {
  return {
    build: {
      ssr: true,
      target: "node18.15.0",
      minify: false,
      watch: mode === "development" ? {} : null,
      lib: {
        entry: {
          main: resolve(__dirname, "src", "main.ts")
        },
        formats: ["es", "cjs"]
      }
    },
    plugins: [
      vitePluginExecute({
        command: electron,
        args: ["./main.js"],
        spawnOptions: {
          cwd: resolve(__dirname, "dist")
        }
      })
    ]
  }
});
```
