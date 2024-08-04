import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ insertTypesEntry: true })],
  build: {
    lib: {
      entry: "src/lib.ts",
      name: "ui-kit",
    },
    rollupOptions: {
      external: ["react", "react-dom"], // 외부에서 해당 라이브러리를 받아서 사용하도록 번들링 하겠다.
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
