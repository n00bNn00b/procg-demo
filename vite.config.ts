import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   host: true,
  //   proxy: {
  //     "/api/v2": {
  //       target: "http://129.146.85.244",
  //       cors: true,
  //       changeOrigin: true,
  //       // secure: true,
  //       ws: true,
  //       rewrite: (path) => path.replace(/^\/api\/v2/, ""),
  //     },
  //   },
  // },
  plugins: [react()],
});
