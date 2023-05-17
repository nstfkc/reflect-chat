import {
  useState,
  useEffect,
  ReactNode,
  useRef,
  createContext,
  useCallback,
} from "react";
import { useHistory } from "react-router-dom";
import { routeParser, Route } from "./routeParser";
import { Subject } from "@/utils/Subject";

interface RouterContextValue {
  path: string[];
  routes: Route[];
  currentRoute: Route;
  leftSubject: Subject<number>;
  back: (s: string) => void;
}

export const RouterContext = createContext({} as RouterContextValue);

export const Router = (props: { children: ReactNode }) => {
  const [path, setPath] = useState([]);
  const [routes, setRoutes] = useState<Route[]>([]);
  const [currentRoute, setCurrentRoute] = useState<Route | null>(null);
  const { listen, push } = useHistory();
  const leftSubject = useRef(new Subject(0));

  const handleState = useCallback(() => {
    const manifest = {
      "": [],
      channel: ["channelId", "messageId"],
    };
    const path = Array.from(new Set(window.location.pathname.split("/")));

    setPath(path);
    const routes = routeParser(path, manifest);
    setRoutes(routes);
    const activeRoutes = routes.filter(
      (route) => !route.url.includes("undefined")
    );
    setCurrentRoute(activeRoutes[activeRoutes.length - 1]);
    return activeRoutes;
  }, []);

  useEffect(() => {
    handleState();
    listen(() => {
      handleState();
    });
  }, [handleState, listen]);

  const back = (currentPath: string) => {
    const reversedRoutes = routes.reverse();
    const routePaths = reversedRoutes.map((r) => r.path);
    const curentRouteIdx = routePaths.indexOf(currentPath);
    const nextPath = routePaths[curentRouteIdx + 1];
    if (nextPath) {
      push(routes.find((route) => route.path === nextPath).url);
    }
  };

  if (!currentRoute) {
    return null;
  }

  return (
    <RouterContext.Provider
      value={{
        path,
        routes,
        currentRoute,
        leftSubject: leftSubject.current,
        back,
      }}
    >
      <div className="relative w-screen h-screen overflow-hidden">
        {props.children}
      </div>
    </RouterContext.Provider>
  );
};
