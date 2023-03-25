/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["source.unsplash.com"],
  },
  remotePatterns: [
    {
      protocol: "https",
      hostname: "source.unsplash.com",
      port: "",
      pathname: "/account123/**",
    },
  ],
  //   images: {
  //     domains: ["jjji.ru"],
  //   },
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "jjji.ru",
  //       port: "",
  //       pathname: "/account123/**",
  //     },
  //   ],
};

module.exports = nextConfig;
