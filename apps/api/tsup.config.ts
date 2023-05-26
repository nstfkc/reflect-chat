import nodemon from "nodemon";

import { defineConfig } from "tsup";

let isStarted = false;

export default defineConfig({
  entry: ["./src/index.ts"],
  watch: ["./src", "../../packages/db/dist"],
  async onSuccess() {
    if (!isStarted) {
      nodemon({
        script: "./dist/index.js",
      });

      isStarted = true;
    }
  },
});
