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

  rewrites: async () => {
    return [
      {
        source: "/client",
        destination: "https://app.reflect.rocks",
      },
      {
        source: "/client/:path*",
        destination: "https://app.reflect.rocks/:path*",
      },
      // {
      //   source: "/socket.io",
      //   destination: `${socketHost}/socket.io/`,
      // },
      // {
      //   source: "/socket.io/:path*",
      //   destination: `${socketHost}/socket.io/:path*`,
      // },
      // {
      //   source: "/media/:path*",
      //   destination: `https:flak.flak-media.workers.dev/:path*`,
      // },
      // {
      //   source: "/api/:path*",
      //   destination: `http:localhost:8080/:path*`,
      // },
    ];
  },
};

module.exports = nextConfig;
