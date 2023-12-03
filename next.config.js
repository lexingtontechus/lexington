module.exports = {
  output: "standalone",
  trailingSlash: true,
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
  images: {
    unoptimized: true,
    //domains: ["storageapi.fleek.co", "savivets.wpengine.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.fleek.co/**",
        pathname: "/a2d41cff-44ad-49e9-a80a-2d1aafc21231-bucket/assets/img/**",
      },
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    domains: ["storageapi.fleek.co"],
    loader: "custom",
  },
};
