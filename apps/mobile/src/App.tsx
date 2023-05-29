import { CapacitorHttp } from "@capacitor/core";
import { AuthProvider } from "auth";
import { HttpProvider, HTTPHandler, useQuery, ConfigProvider } from "shared";

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
      status: res.status,
    },
  };
};

const Component = () => {
  const { data, error } = useQuery("listChannels");

  return (
    <div className="py-16">
      <pre className="text-sm">{JSON.stringify(error, null, 2)}</pre>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

const App = () => {
  return (
    <ConfigProvider
      apiUrl={import.meta.env.VITE_API_HOST}
      assetsServiceUrl={import.meta.env.VITE_ASSESTS_SERVICE_HOST}
    >
      <HttpProvider http={http}>
        <AuthProvider authURL="http://0.0.0.0:8080/auth">
          <Component />
        </AuthProvider>
      </HttpProvider>
    </ConfigProvider>
  );
};

export default App;
