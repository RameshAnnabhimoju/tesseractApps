import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression';

// Plugin: converts the bundled stylesheet <link> to async loading
// so it doesn't block the initial render (eliminates render-blocking CSS)
const asyncCssPlugin = {
  name: 'async-css',
  transformIndexHtml(html: string) {
    // Replace: <link rel="stylesheet" crossorigin href="/assets/style-*.css">
    // With async load pattern (same as how Google Fonts are loaded)
    return html.replace(
      /<link rel="stylesheet" crossorigin href="(\/assets\/style-[^"]+\.css)">/g,
      (_, href) =>
        `<link rel="preload" href="${href}" as="style" onload="this.onload=null;this.rel='stylesheet'" />`+
        `<noscript><link rel="stylesheet" href="${href}"></noscript>`
    );
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    asyncCssPlugin,
  ],
  build: {
    cssCodeSplit: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // --- Vendor chunks ---
          if (
            id.includes('node_modules/react/') ||
            id.includes('node_modules/react-dom/') ||
            id.includes('node_modules/react-router-dom/') ||
            id.includes('node_modules/react-helmet-async/')
          ) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/@mui/') || id.includes('node_modules/@emotion/')) {
            return 'vendor-ui';
          }
          if (id.includes('node_modules/gsap/')) {
            return 'vendor-animation';
          }
          if (id.includes('node_modules/keen-slider/')) {
            return 'vendor-slider';
          }

          // --- Page chunks: group related lazy-loaded pages together ---
          if (id.includes('/pages/blogPost/')) {
            return 'pages-blog-posts';
          }
          if (id.includes('/pages/byRole/') || id.includes('/pages/byIndustry/')) {
            return 'pages-solutions';
          }
          if (id.includes('/pages/productDetails/') || id.includes('/pages/SubPage/')) {
            return 'pages-product';
          }
          if (
            id.includes('/pages/ourStory/') ||
            id.includes('/pages/about/') ||
            id.includes('/pages/AboutUsSubPages/') ||
            id.includes('/pages/teams/') ||
            id.includes('/pages/careers/')
          ) {
            return 'pages-about';
          }
          if (
            id.includes('/pages/PrivacyPolicy/') ||
            id.includes('/pages/TermsAndConditions/') ||
            id.includes('/pages/comingSoon/') ||
            id.includes('/pages/ReleaseNotes/') ||
            id.includes('/pages/whitepapers/')
          ) {
            return 'pages-utility';
          }
        },
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.names?.[0]?.split('.').pop() || ''
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`
          }
          if (/woff|woff2|eot|ttf|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          if (/mp4|webm|ogg|mp3|wav|flac|aac/i.test(extType)) {
            return `assets/media/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
      },
    },
  },
})
