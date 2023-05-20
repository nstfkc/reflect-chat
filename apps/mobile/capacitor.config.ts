import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.reflect.rocks",
  appName: "\x15reflect-chat",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
