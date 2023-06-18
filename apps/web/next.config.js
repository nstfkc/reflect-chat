const socketHost = process.env.SOCKET_HOST;

const local = {
  clientHost: "http://localhost:4000/client",
  apiHost: "http://localhost:8080",
  assetsWorkerHost: "https://reflect.flak-media.workers.dev",
};

const production = {
  clientHost: "https://app.reflect.rocks",
  apiHost: "https://reflect-chat-api.fly.dev",
  assetsWorkerHost: "https://reflect.flak-media.workers.dev",
};

const config = process.env.NODE_ENV === "production" ? production : local;

/** @type {import('next').NextConfig} */
const nextConfig = {
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
        destination: config.clientHost,
      },
      {
        source: "/client/:path*",
        destination: `${config.clientHost}/:path*`,
      },
      {
        source: "/socket.io",
        destination: `${config.apiHost}/socket.io/`,
      },
      {
        source: "/socket.io/:path*",
        destination: `${config.apiHost}/socket.io/:path*`,
      },
      {
        source: "/media/:path*",
        destination: `${config.assetsWorkerHost}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${config.apiHost}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
