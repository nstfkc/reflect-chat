const { PrismaPlugin } = require("@prisma/nextjs-monorepo-workaround-plugin");

const socketHost = process.env.SOCKET_HOST;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  transpilePackages: ["auth"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.plugins = [...config.plugins, new PrismaPlugin()];
    }

    return config;
  },
  rewrites: async () => {
    return [
      {
        source: "/socket.io",
        destination: `${socketHost}/socket.io/`,
      },
      {
        source: "/socket.io/:path*",
        destination: `${socketHost}/socket.io/:path*`,
      },
      {
        source: "/media/:path*",
        destination: `https://flak.flak-media.workers.dev/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `http://localhost:8080/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
