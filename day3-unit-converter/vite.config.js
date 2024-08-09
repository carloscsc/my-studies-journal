import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let base = "/";

  if (command === "build") {
    base = "/day3-unit-converter/dist/";
  }

  return {
    plugins: [react()],
    base,
  };
});
