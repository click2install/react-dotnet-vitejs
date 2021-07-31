import { defineConfig } from "vite"
import reactRefresh from "@vitejs/plugin-react-refresh"
import tsNameof from "vite-plugin-ts-nameof";
import reactJsx from "vite-react-jsx";

export default defineConfig({
  base: "/dist/",
  build: {
    outDir: "../wwwroot/dist",
    emptyOutDir: true,
    manifest: true,
    rollupOptions: {
      input: {
        app: "./src/index.tsx",
        main: "./src/main.js"
      }
    }
  },
  plugins: [
    tsNameof(),
    reactJsx(),
    reactRefresh()
  ],
  server: {
    hmr: {
      protocol: "ws"
    }
  }
})