import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { disableStaticImages: true },
  // The site and the Sanity Studio have separate root layouts, so unmatched URLs need a global 404.
  experimental: { globalNotFound: true },
  turbopack: {
    // Image imports resolve to URL strings (as they did under Vite) so existing <img src={img}> usage is unchanged.
    rules: {
      '*.png': { type: 'asset' },
      '*.jpg': { type: 'asset' },
      '*.jpeg': { type: 'asset' },
    },
  },
};

export default nextConfig;
