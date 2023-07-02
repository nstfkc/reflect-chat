import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
  },
  base: "/client",
  resolve: {
    alias: {
      "react-native": "react-native-web",
      "@expo/vector-icons": "./mock",
    },
  },
});
