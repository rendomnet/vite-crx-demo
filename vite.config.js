import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { crx } from "@crxjs/vite-plugin";
// import manifest from "./manifest.json"; // Node 14 & 16
import manifest from "./manifest.json" assert { type: "json" }; // Node >=17
import vuePugPlugin from "vue-pug-plugin";

export default defineConfig({
  plugins: [vue(), crx({ manifest })],
  resolve: {
    alias: {
      "@": "/src",
      "@components": "/src/components",
    },
    extensions: [".js", ".vue", ".ts", ".tsx"],
  },
});
