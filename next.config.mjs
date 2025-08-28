/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    viewTransition: true,
  },
  allowedDevOrigins: ["local-origin.dev", "*.local-origin.dev", "*.csb.app"],
};

export default nextConfig;
