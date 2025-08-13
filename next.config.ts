import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable Vercel Analytics
  experimental: {
    // Enable web vitals collection for better analytics
    clientInstrumentationHook: true,
  },
  // Optimize for analytics
  poweredByHeader: false,
  compress: true,
};

export default nextConfig;
