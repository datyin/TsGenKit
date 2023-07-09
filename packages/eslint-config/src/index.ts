import json from "./json";
import javascript from "./javascript";
import unicorn from "./unicorn";
import type { ESLint } from "eslint";

const config: ESLint.ConfigData = {
  plugins: [
    "html",
    "jsonc",
    "unicorn"
  ],
  env: {
    es2022: true,
    node: true,
    browser: true,
    commonjs: true,
    amd: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      configFile: false,
      babelrc: false,
      presets: [
        "@babel/preset-env",
      ]
    }
  },
  overrides: [
    ...javascript ?? [],
    ...json ?? [],
    ...unicorn ?? []
  ]
};

export default config;
