import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    base: "/Labb2-frontend/",
    //skriv vilket plugin som används
    plugins: [react(),
        ViteImageOptimizer({
            png: {quality:90},
            jpeg:{quality:90},
            webp:{quality: 70},
            avif:{quality:70},
            svg: {
                plugins:[
                    {name:"removeViewBox", active:false},
                    {name: "sortAttrs"},
                ]
            }
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
            }
        }
    }
});