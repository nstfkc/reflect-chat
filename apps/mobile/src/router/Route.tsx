import { RouterContext } from "./Router";
import { createGesture } from "@ionic/react";
import { useAnimate } from "framer-motion";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

interface RouterParametersContextValue {
  params: Record<string, any>;
  path: string;
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
  const coverRef = useRef<HTMLDivElement>(null);
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
          onStart: () => {
            coverRef.current.classList.remove("pointer-events-none");
          },
          onMove: (details) => {
            const isActive = currentPath === ownPath;
            const isNotHome = order > 0;
            const delta = details.currentX - details.startX;
            if (isActive && isNotHome) {
              if (delta > 0) {
                animate(scope.current, { left: delta }, { duration: 0 });
                animateTitle(titleScope.current, {
                  top: `-${(delta / window.innerWidth) * 20}%`,
                });
              }
            }
          },
          onEnd: (details) => {
            coverRef.current.classList.add("pointer-events-none");
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
              animateTitle(titleScope.current, { top: 0 });
              animate(
                scope.current,
                { left: 0 },
                { type: "spring", duration: 0.5 }
              );
            }
          },
        });

        gesture.enable();
        return gesture;
      }
    },
    [animate, back, scope, titleScope, animateTitle]
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
        animate(scope.current, { left: 0 }, { type: "tween", duration: 0.2 });
      } else {
        animateTitle(titleScope.current, { top: "-100%" });
        animate(
          scope.current,
          { left: "100vw" },
          { type: "tween", duration: 0.2 }
        );
      }
      if (currentRoute?.path === ownRoute?.path) {
        animateTitle(titleScope.current, { top: 0 });
        animate(scope.current, { left: 0 }, { type: "spring", duration: 0.5 });
      }
    }
  }, [currentRoute, ownRoute, animate, animateTitle, scope, titleScope]);

  const zIndex = order * 10;

  return (
    <RouterParametersContext.Provider
      value={{ params: ownRoute.params, path: ownRoute.path }}
    >
      <div>
        <div
          ref={titleScope}
          className="absolute bg-white w-full"
          style={{ zIndex: zIndex + 1 }}
        >
          {renderTitle()}
          <div id={`router-title-${ownRoute.path}`}></div>
        </div>
        <div
          ref={coverRef}
          className="absolute w-full h-full z-[10000] pointer-events-none"
        ></div>
        <div
          className="h-full w-full absolute shadow-lg"
          ref={scope}
          style={{ zIndex, left: order === 0 ? 0 : "100vw" }}
        >
          {props.children}
        </div>
      </div>
    </RouterParametersContext.Provider>
  );
};

interface RouteTitleProps {
  children: ReactNode;
}

export const RouteTitle = (props: RouteTitleProps) => {
  const { path } = useContext(RouterParametersContext);
  const [container, setContainer] = useState<HTMLElement | null>(null);

  const id = `router-title-${path}`;

  useEffect(() => {
    const el = document.getElementById(id);
    if (el) {
      setContainer(el);
    }
  }, [id]);

  if (!container) {
    return null;
  }

  return <>{createPortal(<>{props.children}</>, container)}</>;
};
