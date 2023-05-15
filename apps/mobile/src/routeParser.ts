export type Route = {
  path: string;
  url: string;
  params: Record<string, string>;
};

export function routeParser(
  path: string[],
  manifest: Record<string, string[]>
): Route[] {
  let result = [];
  const keys = Object.keys(manifest);
  for (let route in manifest) {
    const idx = keys.indexOf(route);
    let pathKey = `/${route}`;
    let url = "";
    if (manifest[route].length) {
      const paramKeys = manifest[route];
      const p = {};
      url = `${url}/${route}`;
      for (let i = 0; i < paramKeys.length; i++) {
        const paramValue = path[idx + i + 1];
        p[paramKeys[i]] = paramValue;

        pathKey = `${pathKey}/:${paramKeys[i]}`;
        url = `${url}/${paramValue}`;
        result.push({ path: pathKey, url, params: { ...p } });
      }
    } else {
      url = `${url}/`;
      result.push({ path: pathKey, url, params: {} });
    }
  }

  return result;
}
