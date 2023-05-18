import { ReactNode, useContext } from "react";
import { SafeAreaInsetsContext } from "./SafeAreaViewContext";

interface SafeAreaViewProps {
  children: ReactNode;
  className?: string;
}

export const SafeAreaView = (props: SafeAreaViewProps) => {
  const { insets } = useContext(SafeAreaInsetsContext);

  return (
    <div
      id="safe-area"
      style={{
        width: "100vw",
        overflow: "hidden",
        height: "100vh",
        paddingTop: `${insets.top}px`,
        paddingBottom: `${insets.bottom}px`,
        paddingLeft: `${insets.left}px`,
        paddingRight: `${insets.right}px`,
      }}
      className={props.className}
    >
      <div className="relative h-full w-full">{props.children}</div>
    </div>
  );
};
