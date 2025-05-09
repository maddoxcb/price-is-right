import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { ViteDevServer } from "vite";
import tailwindcss from "@tailwindcss/vite";

const itemsPlugin = {
  name: "items-api",
  configureServer(server: ViteDevServer) {
    server.middlewares.use("/api/items", (_, res) => {
      // Set response headers
      res.setHeader("Content-Type", "application/json");
      // Send response
      res.end(
        JSON.stringify({
          items: [
            { id: 1, name: "Microwave Oven", price: 299.99 },
            { id: 2, name: "Mountain Bike", price: 849.99 },
            { id: 3, name: "Smart TV", price: 1299.99 },
            { id: 4, name: "Kitchen Mixer", price: 249.99 },
            { id: 5, name: "Washing Machine", price: 699.99 },
          ],
        }),
      );
    });
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [itemsPlugin, react(), tailwindcss()],
});
