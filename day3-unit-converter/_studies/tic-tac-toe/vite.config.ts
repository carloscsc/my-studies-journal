import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/day3-unit-converter/_studies/tic-tac-toe/dist/",
  plugins: [react()],
});
