import { resolve } from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname, 'src');
const outDir = resolve(__dirname, 'dist');

export default defineConfig(({command, mode}) => {
    const isProduction = mode === 'production'

    return {
        base: isProduction ? '/avtoservice/' : '',
        root,
        build: {
            outDir,
            emptyOutDir: true,
            rollupOptions: {
                input: {
                    main: resolve(__dirname, 'src/index.html'),
                    auth: resolve(__dirname, 'src/pages/auth.html'),
                    services: resolve(__dirname, 'src/pages/services.html'),
                },
            },
        },
        server: {
            open: isProduction ? "/avtoservice/index.html" : "index.html"
        },
        preview: {
            open: isProduction ? "/avtoservice/index.html" : "index.html"
        }
    }
})