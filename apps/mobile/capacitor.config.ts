import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.reflect.rocks",
  appName: "reflect-chat",
  webDir: "dist",
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
  server: {
    androidScheme: "https",
    url: "http://192.168.1.2:5173",
    cleartext: true,
  },
};

export default config;
