import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hci.stanford.edu',
      },
    ],
  },
};

export default nextConfig;
