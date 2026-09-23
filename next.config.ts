import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/website-development-delhi",
        destination: "/website-development",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
