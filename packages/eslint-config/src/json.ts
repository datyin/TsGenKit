import type { ESLint } from "eslint";

const config: ESLint.ConfigData["overrides"] = [
  // All JSON files
  {
    files: [
      "*.json",
      "*.json5",
      "*.jsonc"
    ],
    parser: "jsonc-eslint-parser",
    rules: {
      "jsonc/no-plus-sign": "error",
      "jsonc/valid-json-number": "error"
    }
  },

  // JSON5 & JSONC files
  {
    files: ["*.json5", "*.jsonc"],
    rules: {
      "jsonc/no-comments": "off",
    }
  },

  // JSON files
  {
    files: ["*.json"],
    rules: {
      "jsonc/no-comments": "error"
    }
  },

  // tsconfig
  {
    files: [
      "*/tsconfig.json",
      "*/tsconfig.*.json",
      "*/*.tsconfig.json",
      "*/jsconfig.json",
      "*/jsconfig.*.json",
      "*/*.jsconfig.json"
    ],
    rules: {
      "jsonc/no-comments": "off"
    }
  },

  // Vue
  {
    files: ["*.vue"],
    rules: {
      "jsonc/vue-custom-block/no-parsing-error": "error"
    }
  }
];

export default config;
