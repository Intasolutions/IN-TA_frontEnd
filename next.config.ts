import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    // Allow images served by local Django dev server (useful for development)
    remotePatterns: [
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "8000",
        pathname: "/media/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "8000",
        pathname: "/media/**",
      },
      {
         protocol: "http",
         hostname: "13.49.49.188",
         pathname: "/media/**",
      }
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://13.49.49.188/api/:path*',
      },
      {
        source: '/media/:path*',
        destination: 'http://13.49.49.188/media/:path*',
      },
    ];
  },
};

export default nextConfig;
