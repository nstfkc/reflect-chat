import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.reflect.rocks",
  appName: "capacitor-chat",
  webDir: "dist",
  server: {
    url: "http://192.168.1.2:5173",
    cleartext: true,
  },
};

export default config;
