import {
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { SafeAreaInsetsContext } from "./SafeAreaViewContext";

import { getPlatforms } from "@ionic/react";

import { Keyboard, KeyboardResize } from "@capacitor/keyboard";
import { useAnimate } from "framer-motion";

interface SafeAreaViewProps {
  children: ReactNode;
  className?: string;
}

export const SafeAreaView = (props: SafeAreaViewProps) => {
  const [scope, animate] = useAnimate();
  const { insets } = useContext(SafeAreaInsetsContext);
  const [height, setHeight] = useState(0);
  const heightRef = useRef(0);
  const animatingRef = useRef(false);

  useLayoutEffect(() => {
    if (heightRef.current === 0) {
      setHeight(window.innerHeight);
      heightRef.current = window.innerHeight;
    }
  }, [setHeight]);

  const handleAnimate = (height: string, paddingBottom: string, delay = 0) => {
    if (!animatingRef.current) {
      animate(
        scope.current,
        { height, paddingBottom },
        {
          onComplete: () => {
            animatingRef.current = false;
          },
          type: "spring",
          damping: 20,
          stiffness: 200,
        }
      );
    }
  };

  useEffect(() => {
    const platforms = getPlatforms();
    if (!platforms.includes("mobileweb")) {
      Keyboard.setResizeMode({ mode: KeyboardResize.None });
      Keyboard.addListener("keyboardWillShow", (info) => {
        handleAnimate(
          `${window.innerHeight - info.keyboardHeight}px`,
          "0",
          0.3
        );
      });
      Keyboard.addListener("keyboardWillHide", () => {
        handleAnimate(`${heightRef.current}px`, `${insets.bottom}px`, 0.3);
      });
    }
  });

  return (
    <div
      ref={scope}
      id="safe-area"
      style={{
        width: "100vw",
        overflow: "hidden",
        height,
        paddingTop: `${insets.top}px`,
        paddingBottom: `${insets.bottom}px`,
        paddingLeft: `${insets.left}px`,
        paddingRight: `${insets.right}px`,
      }}
      className={`${props.className}`}
    >
      <div className="relative h-full w-full overflow-hidden">
        {props.children}
      </div>
    </div>
  );
};
