import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    base: "/Labb1-frontend/",
    //skriv vilket plugin som används
    plugins: [react(),
        ViteImageOptimizer({
            png: {quality:80},
            jpeg:{quality:90},
            webp:{quality: 70},
            avif:{quality:80},
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
                bilder: resolve(__dirname, "bilder.html"),
                process: resolve(__dirname, "process.html"),
            }
        }
    }
});