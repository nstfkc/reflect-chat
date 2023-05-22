import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.reflect.rocks",
  appName: "reflect-chat",
  webDir: "dist",
  server: {
    androidScheme: "https",
    url: "http://192.168.1.2:5173",
  },
};

export default config;
