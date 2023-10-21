/// <reference types="vitest" />
import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
    base: './',
    build: {
        lib: {
            entry: {
                index: path.resolve(__dirname, 'src/index.ts')
            },
            formats: ['cjs', 'es']
        },
        rollupOptions: {
            external: ['vue', 'vue-router']
        }
    },
    plugins: [
        dts({
            entryRoot: './src'
        })
    ],
    test: {}
})
