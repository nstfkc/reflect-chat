import { CapacitorHttp } from "@capacitor/core";
import { useEffect } from "react";
import { SocketProvider, UserProvider } from "shared";

/* import { AuthProvider } from "auth";
 * import { HttpProvider } from "shared";
 * import { CapacitorHttp } from "@capacitor/core";
 *
 * const _fetch: typeof fetch = (args) => {
 *   if (typeof args === "string") {
 *     return CapacitorHttp.get({
 *       url: args,
 *     });
 *   } else {
 *      const res = CapacitorHttp.request({
 *       webFetchExtra: {
 *         ...args,
 *       },
 *     } as any).then(res => res.);
 *   }
 * }; */

/* const App = () => {
 *   return (
 *     <HttpProvider fetch={_fetch}>
 *       <AuthProvider authURL="http://localhost:8080/auth">Hi</AuthProvider>
 *     </HttpProvider>
 *   );
 * }; */

const App = () => {
  useEffect(() => {
    /* CapacitorHttp.request({
     *   url: "http://0.0.0.0:8080/auth/sign-in",
     *   method: "POST",
     *   data: {
     *     email: "enesxtufekci+2@gmail.com",
     *     password: "Gradestr.32",
     *   },
     *   headers: {
     *     "Content-Type": "application/json",
     *   },
     *   webFetchExtra: {
     *     headers: {
     *       "X-Device-Type": "mobile",
     *     },
     *   },
     * }).then((res) => console.log(res.data));
     */
    CapacitorHttp.request({
      url: "http://0.0.0.0:8080/auth/me",
      method: "GET",
    }).then((res) => console.log(res.data));
  }, []);

  return (
    <UserProvider>
      <SocketProvider>
        <div>Hi mother fucker</div>
      </SocketProvider>
    </UserProvider>
  );
};

export default App;
