import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Enable CSS code splitting for better caching
    cssCodeSplit: true,

    // Minification settings
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      }
    },

    // Rollup options for code splitting and chunking
    rollupOptions: {
      output: {
        // Manual chunks for better caching - vendor code rarely changes
        manualChunks: {
          // React core libraries
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          // UI libraries
          'ui-vendor': ['@mui/material', '@emotion/react', '@emotion/styled'],
          // Animation libraries
          'animation-vendor': ['gsap', 'keen-slider', 'swiper']
        },

        // Hashed filenames for cache busting (enables long-term caching)
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },

    // Inline assets smaller than 4kb as base64
    assetsInlineLimit: 4096,

    // Source maps for debugging (disable in production for smaller builds)
    sourcemap: false,
  }
})
