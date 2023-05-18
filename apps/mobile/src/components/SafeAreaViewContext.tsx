import { ReactNode, createContext, useEffect, useState } from "react";
import { ScreenOrientation } from "@capawesome/capacitor-screen-orientation";
import { Keyboard } from "@capacitor/keyboard";
import { SafeArea } from "capacitor-plugin-safe-area";
import { StatusBar, Style } from "@capacitor/status-bar";

export const SafeAreaInsetsContext = createContext({
  insets: { top: 0, left: 0, bottom: 0, right: 0 },
  keyboardHeight: 0,
});

export const SafeAreaProvider = (props: { children: ReactNode }) => {
  const [insets, setInsets] = useState(null);
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  useEffect(() => {
    SafeArea.getSafeAreaInsets().then(({ insets }) => {
      setInsets(insets as any);
    });
    ScreenOrientation.addListener("screenOrientationChange", () => {
      SafeArea.getSafeAreaInsets().then(({ insets }) => {
        setInsets(insets as any);
      });
    });
    StatusBar.setStyle({ style: Style.Light });
    Keyboard.addListener("keyboardWillShow", (info) => {
      console.log("keyboard will show with height:", info.keyboardHeight);
      setKeyboardHeight(info.keyboardHeight);
      setInsets((insets) => ({ ...insets, bottom: 0 }));
    });
    Keyboard.addListener("keyboardWillHide", () => {
      SafeArea.getSafeAreaInsets().then(({ insets }) => {
        setInsets(insets as any);
      });
      setKeyboardHeight(0);
    });
  }, []);

  if (!insets) {
    return null;
  }

  return (
    <SafeAreaInsetsContext.Provider value={{ insets, keyboardHeight }}>
      {props.children}
    </SafeAreaInsetsContext.Provider>
  );
};
