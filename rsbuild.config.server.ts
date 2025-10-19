import { defineConfig } from "@rsbuild/core";
import { resolve } from "path";

export default defineConfig({
  source: {
    entry: {
      server: "./src/server/app.prod.ts",
    },
  },
  output: {
    target: "node",
    cleanDistPath: false,
    filename: {
      js: "[name].cjs",
    },
    legalComments: "none",
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
