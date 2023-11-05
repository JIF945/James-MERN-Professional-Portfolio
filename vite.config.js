import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})


// const path = require('path')

// export default {
//   root:path.resolve(_dirname, 'src'),
//   build: {
//     outdir: '../dist'
//   },
//   server: {
//     port: 3000
//   }
// }