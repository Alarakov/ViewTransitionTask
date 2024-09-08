import { defineConfig } from "vite";

export default defineConfig({
  base: "/ViewTransitionTask/",
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name.endsWith(".css")) {
            return "[name][extname]";
          }

          return "assets/[name][extname]";
        },
      },
    },
  },
});
