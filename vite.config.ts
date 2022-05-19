import { defineConfig } from 'vite'
import swcReact from 'vite-plugin-swc-react'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [swcReact()],
   build: {
      rollupOptions: {
         output: {
            assetFileNames: (assetInfo) => {
               let extType = assetInfo.name.split('.').at(1)
               if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                  extType = 'img'
               }
               return `assets/${extType}/[name]-[hash][extname]`
            },
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
         },
      },
   },
   publicDir: './public',
})
