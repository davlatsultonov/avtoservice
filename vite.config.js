import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig({
    root,
    build: {
        outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/index.html'),
                /*about: resolve(__dirname, 'src/pages/about.html'),
                contacts: resolve(__dirname, 'src/pages/contacts.html'),*/
            },
        },
    },
    server: {
        open: "index.html"
    },
    preview: {
        open: "index.html"
    }
})