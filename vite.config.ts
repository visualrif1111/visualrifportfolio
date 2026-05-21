import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'


function figmaAssetResolver() {
  return {
    name: 'figma-asset-resolver',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, 'src/assets', filename)
      }
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetResolver(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Build optimization for better caching
  build: {
    // Generate source maps for debugging but keep builds fast
    sourcemap: false,
    
    // Optimize chunk splitting for better caching
    rollupOptions: {
      output: {
        // Use content hashing for cache busting
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        
        // Manual chunk splitting for optimal caching
        manualChunks: {
          // Vendor chunks - rarely change, cache long-term
          'vendor-react': ['react', 'react-dom', 'react-router'],
          'vendor-motion': ['motion/react'],
          'vendor-ui': ['lucide-react', '@radix-ui/react-slot', '@radix-ui/react-tooltip', '@radix-ui/react-dialog'],
          
          // YouTube player - separate chunk since not all pages use it
          'vendor-youtube': ['react-youtube'],
        },
      },
    },
    
    // Increase chunk size warning limit since we're doing manual chunking
    chunkSizeWarningLimit: 600,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Minification settings
    minify: 'esbuild',
    
    // Target modern browsers for smaller bundles
    target: 'es2020',
  },

  // Optimize dependencies for faster dev server
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router',
      'motion/react',
      'lucide-react',
    ],
  },
})
