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
