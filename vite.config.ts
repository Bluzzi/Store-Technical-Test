import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "#": resolve(__dirname, "./src")
    }
  }
});