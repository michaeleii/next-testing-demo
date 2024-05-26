import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: [resolve(__dirname, "setup-vitest.ts")],
    environmentMatchGlobs: [["**/*.test.tsx", "jsdom"]],
    globals: true,
    coverage: {
      include: ["**/src/**"],
    },
  },
  resolve: {
    alias: { "@": resolve(__dirname, "src") },
  },
});
