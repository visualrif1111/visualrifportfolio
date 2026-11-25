import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: { disableStaticImages: true },
  // The site and the Sanity Studio have separate root layouts, so unmatched URLs need a global 404.
  experimental: { globalNotFound: true },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
        ],
      },
      {
        source: '/fonts/:file*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        // public/ files are not content-hashed, so they get a day of caching rather than immutable.
        source: '/:dir(jma-chains|jma-clothing)/:file*',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=86400, stale-while-revalidate=604800' }],
      },
    ];
  },
  turbopack: {
    // Image imports resolve to URL strings (as they did under Vite) so existing <img src={img}> usage is unchanged.
    rules: {
      '*.png': { type: 'asset' },
      '*.jpg': { type: 'asset' },
      '*.jpeg': { type: 'asset' },
      '*.webp': { type: 'asset' },
    },
  },
};

export default nextConfig;
