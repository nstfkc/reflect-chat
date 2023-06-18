type Config = {
  baseUrl: string;
};

const local: Config = {
  baseUrl: "http://localhost:3000",
};

const production: Config = {
  baseUrl: "https://reflect.rocks",
};

export const getConfig = (isProd: boolean): Config => {
  if (isProd) {
    return production;
  }
  return local;
};
