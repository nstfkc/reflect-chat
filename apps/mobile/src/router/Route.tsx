import { SafeAreaView } from "@/components/SafeAreaView";
import { RouterContext } from "./Router";
import { createGesture } from "@ionic/react";
import { useAnimate } from "framer-motion";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
} from "react";

interface RouterParametersContextValue {
  params: Record<string, any>;
}

export const RouterParametersContext = createContext({
  params: {},
} as RouterParametersContextValue);

interface RouteProps {
  path: string;
  children: ReactNode;
  renderTitle?: () => JSX.Element;
}

export const Route = (props: RouteProps) => {
  const { renderTitle = () => null } = props;
  const [scope, animate] = useAnimate();
  const [titleScope, animateTitle] = useAnimate();
  const { currentRoute, routes, back } = useContext(RouterContext);

  const ownRoute = routes.find((route) => route.path === props.path);
  const order = ownRoute?.path.split("/").length - 2;

  const gestureInit = useCallback(
    (currentPath: string, ownPath: string, order: number) => {
      const container = scope.current;
      if (container) {
        const gesture = createGesture({
          gestureName: ownPath,
          el: container,
          onMove: (details) => {
            const isActive = currentPath === ownPath;
            const isNotHome = order > 0;
            const delta = details.currentX - details.startX;

            if (isActive && isNotHome) {
              if (delta > 0) {
                animate(scope.current, { left: delta }, { duration: 0 });
              }
            }
          },
          onEnd: (details) => {
            const delta = details.currentX - details.startX;
            const complete = () =>
              animate(
                scope.current,
                { left: "100vw" },
                {
                  type: "tween",
                  duration: 0.1,
                  onComplete: () => {
                    back(currentPath);
                  },
                }
              );
            if (delta > window.innerWidth / 2 && order > 0) {
              complete();
            } else if (
              delta > window.innerWidth / 5 &&
              details.velocityX > 0.1 &&
              order > 0
            ) {
              complete();
            } else {
              animate(
                scope.current,
                { left: 0 },
                { type: "tween", duration: 0.1 }
              );
            }
          },
        });

        gesture.enable();
        return gesture;
      }
    },
    [animate, back, scope]
  );

  useEffect(() => {
    const gesture = gestureInit(currentRoute.path, ownRoute.path, order);
    return () => {
      gesture?.destroy();
    };
  }, [currentRoute, ownRoute, order, gestureInit]);

  useEffect(() => {
    if (ownRoute && currentRoute) {
      if (ownRoute?.path < currentRoute?.path) {
        animate(scope.current, { left: 0 }, { type: "tween", duration: 0.1 });
        animateTitle(titleScope.current, { opacity: 1 });
      } else {
        animateTitle(titleScope.current, { opacity: 0 });
        animate(
          scope.current,
          { left: "100vw" },
          { type: "tween", duration: 0.1 }
        );
      }
      if (currentRoute?.path === ownRoute?.path) {
        animateTitle(titleScope.current, { opacity: 1 });
        animate(scope.current, { left: 0 }, { type: "tween", duration: 0.1 });
      }
    }
  }, [currentRoute, ownRoute, animate, animateTitle, scope, titleScope]);

  const zIndex = order * 10;

  return (
    <RouterParametersContext.Provider value={{ params: ownRoute.params }}>
      <SafeAreaView className="absolute w-full h-full">
        <div
          ref={titleScope}
          className="absolute bg-gray-200 w-full"
          style={{ zIndex: zIndex + 1 }}
        >
          {renderTitle()}
          <div id={`router-title-${ownRoute.path}`}></div>
        </div>
        <div
          className="h-full w-full absolute"
          ref={scope}
          style={{ zIndex, left: order === 0 ? 0 : "100vw" }}
        >
          {props.children}
        </div>
      </SafeAreaView>
    </RouterParametersContext.Provider>
  );
};
