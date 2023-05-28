import { CapacitorHttp } from "@capacitor/core";
import { AuthProvider } from "auth";
import { HttpProvider, HTTPHandler } from "shared";

const http: HTTPHandler = async (params) => {
  const { url, data, headers, method } = params;
  const res = await CapacitorHttp.request({
    url,
    method,
    data,
    headers,
  });

  const status = String(res.status);
  const ok = status.startsWith("2") || status.startsWith("3");

  return {
    data: res.data,
    res: {
      ok,
    },
  };
};

const App = () => {
  return (
    <HttpProvider http={http}>
      <AuthProvider authURL="http://0.0.0.0:8080/auth">HI</AuthProvider>
    </HttpProvider>
  );
};

export default App;
