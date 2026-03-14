import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },

  async redirects() {
    return [
      {
        source: "/portfolio/home.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio",
        destination: "/",
        permanent: true,
      },
      {
        source: "/portfolio/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/home.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;