import { ReactNode, createContext, useEffect, useState } from "react";
import { ScreenOrientation } from "@capawesome/capacitor-screen-orientation";
import { Keyboard } from "@capacitor/keyboard";
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
    Keyboard.addListener("keyboardWillShow", (info) => {
      console.log("keyboard will show with height:", info.keyboardHeight);
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
