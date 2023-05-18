import {
  ReactNode,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { SafeAreaInsetsContext } from "./SafeAreaViewContext";

import { Keyboard } from "@capacitor/keyboard";
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

  const handleAnimate = (height: string, paddingBottom: string) => {
    if (!animatingRef.current) {
      animate(
        scope.current,
        { height },
        {
          duration: 0.2,
          ease: "linear",
          onComplete: () => {
            animatingRef.current = false;
          },
        }
      );
    }
  };

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", (info) => {
      handleAnimate(`${window.innerHeight - info.keyboardHeight}px`, "0");
    });
    Keyboard.addListener("keyboardWillHide", () => {
      handleAnimate(`${heightRef.current}px`, `${insets.bottom}px`);
    });
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
        paddingBottom: 0,
        paddingLeft: `${insets.left}px`,
        paddingRight: `${insets.right}px`,
      }}
      className={`${props.className}`}
    >
      <div className="relative h-full w-full">{props.children}</div>
    </div>
  );
};
