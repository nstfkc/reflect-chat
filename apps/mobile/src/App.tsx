import "./App.css";
import {
  useState,
  useEffect,
  ReactNode,
  useContext,
  createContext,
  useCallback,
} from "react";
import { SafeArea } from "capacitor-plugin-safe-area";
import { createGesture } from "@ionic/react";
import { BrowserRouter, Link } from "react-router-dom";
import { RouterContext, Router } from "./Router";

import { ScreenOrientation } from "@capawesome/capacitor-screen-orientation";
import { useAnimate } from "framer-motion";
import { Button } from "ui";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";
import { Auth } from "./Auth";

const SafeAreaInsetsContext = createContext({
  insets: { top: 0, left: 0, bottom: 0, right: 0 },
});

const SafeAreaProvider = (props: { children: ReactNode }) => {
  const [insets, setInsets] = useState(null);
  useEffect(() => {
    SafeArea.getSafeAreaInsets().then(({ insets }) => {
      setInsets(insets as any);
    });
    ScreenOrientation.addListener("screenOrientationChange", () => {
      SafeArea.getSafeAreaInsets().then(({ insets }) => {
        setInsets(insets as any);
      });
    });
  }, []);

  if (!insets) {
    return null;
  }

  return (
    <SafeAreaInsetsContext.Provider value={{ insets }}>
      {props.children}
    </SafeAreaInsetsContext.Provider>
  );
};

interface SafeAreaViewProps {
  children: ReactNode;
  className?: string;
}

const SafeAreaView = (props: SafeAreaViewProps) => {
  const { insets } = useContext(SafeAreaInsetsContext);

  return (
    <div
      style={{
        paddingTop: `${insets.top}px`,
        paddingBottom: `${insets.bottom}px`,
        paddingLeft: `${insets.left}px`,
        paddingRight: `${insets.right}px`,
      }}
      className={props.className}
    >
      {props.children}
    </div>
  );
};

interface RouteProps {
  path: string;
  children: ReactNode;
  renderTitle?: () => JSX.Element;
}

const Route = (props: RouteProps) => {
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
                    console.log(order);
                    back(currentPath);
                    console.log("complete");
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
    <SafeAreaView className="absolute w-full h-full">
      <div
        ref={titleScope}
        className="absolute bg-gray-200 w-full"
        style={{ zIndex: zIndex + 1 }}
      >
        {renderTitle()}
      </div>
      <div
        className="h-full w-full absolute"
        ref={scope}
        style={{ zIndex, left: order === 0 ? 0 : "100vw" }}
      >
        {props.children}
      </div>
    </SafeAreaView>
  );
};

const Home: React.FC = () => {
  const { user } = useUser();
  return (
    <Route path="/">
      <div className="bg-red-200 h-full">
        <div>Home </div>
        <Link to="/chat/1234"># General</Link>

        <Button></Button>
      </div>
    </Route>
  );
};

const Chat: React.FC = () => {
  return (
    <Route
      path="/chat/:chatId"
      renderTitle={() => {
        return <div>Chat page</div>;
      }}
    >
      <div className="bg-green-200 h-full py-8">
        <div>User Hi </div>
        <div className=""></div>
        <Link to="/">Home</Link>
        <div>
          <Link to="/chat/1234/asdf">- Message</Link>
        </div>
      </div>
    </Route>
  );
};

const Message = () => {
  return (
    <Route
      path="/chat/:chatId/:messageId"
      renderTitle={() => {
        return <div>Thread page</div>;
      }}
    >
      <div className="bg-blue-200 h-full py-8">
        <div>Message Thread </div>
        <Link to="/chat/1234">Chat</Link>
      </div>
    </Route>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <ClerkProvider
        publishableKey={import.meta.env.VITE_CLERK_PUBLISHABLE_KEY}
      >
        <SignedIn>
          <div className="bg-gray-200">
            <BrowserRouter>
              <Router>
                <Message />
                <Chat />
                <Home />
              </Router>
            </BrowserRouter>
          </div>
        </SignedIn>
        <SignedOut>
          <SafeAreaView>
            <Auth />
          </SafeAreaView>
        </SignedOut>
      </ClerkProvider>
    </SafeAreaProvider>
  );
};

export default App;
