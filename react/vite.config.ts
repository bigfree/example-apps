import eslintPlugin from '@nabla/vite-plugin-eslint';
import react from '@vitejs/plugin-react';
import Unfonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        eslintPlugin({
            eslintOptions: {
                fix: true,
            },
        }),
        react(),
        Unfonts({
            google: {
                families: [{
                    name: 'Inter',
                    styles: 'wght@100;200;300;400;500;600;700;800;900',
                }],
            },
        }),
    ],
    server: {
        port: 3000,
        host: true,
    },
});