import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => ({
  base: mode === "pages" ? "/portfolio/" : "/",
  plugins: [
    react(),
    {
      name: "portfolio-site-metadata",
      transformIndexHtml(html) {
        const url =
          mode === "pages"
            ? "https://mani1454.github.io/portfolio/"
            : "https://manish-kumar-portfolio-gamma.vercel.app/";
        return html.replaceAll("__PORTFOLIO_URL__", url);
      },
    },
  ],
  build: {
    rollupOptions: { output: { manualChunks: { three: ["three"] } } },
  },
}));
