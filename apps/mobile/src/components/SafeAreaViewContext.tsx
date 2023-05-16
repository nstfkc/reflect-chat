import { ReactNode, createContext, useEffect, useState } from "react";
import { ScreenOrientation } from "@capawesome/capacitor-screen-orientation";
import { SafeArea } from "capacitor-plugin-safe-area";

export const SafeAreaInsetsContext = createContext({
  insets: { top: 0, left: 0, bottom: 0, right: 0 },
});

export const SafeAreaProvider = (props: { children: ReactNode }) => {
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
