import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "./index.html",
  },
  source: {
    entry: {
      index: "src/main.tsx",
    },
  },
  output: {
    distPath: {
      root: "dist",
    },
    legalComments: "none",
    copy: [
      { from: "redirect.html", to: "redirect.html" },
      { from: "functions/_middleware.js", to: "_middleware.js" },
    ],
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});