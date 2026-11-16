// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // ⚡ Libraries वेगळ्या files मध्ये — app चा code बदलला तरी browser cache मधले
    //    vendor files पुन्हा download होत नाहीत.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (/[\\/]node_modules[\\/](react|react-dom|scheduler|react-router|react-router-dom)[\\/]/.test(id)) return 'vendor-react';
          if (/[\\/]node_modules[\\/](@reduxjs|react-redux|redux|immer|reselect)[\\/]/.test(id)) return 'vendor-redux';
          if (/[\\/]node_modules[\\/](react-icons|lucide-react)[\\/]/.test(id)) return 'vendor-icons';
          if (/[\\/]node_modules[\\/](axios|react-toastify)[\\/]/.test(id)) return 'vendor-utils';
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
})
