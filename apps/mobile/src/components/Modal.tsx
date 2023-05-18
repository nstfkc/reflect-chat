import { useAnimate } from "framer-motion";
import { TbX } from "react-icons/tb";

import {
  PropsWithChildren,
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

import { createPortal } from "react-dom";
import { SafeAreaView } from "./SafeAreaView";

export const ModalRoot = () => {
  return <div className="" id="modal-root" />;
};

interface ModalContextValue {
  isOpen: boolean;
  toggle: VoidFunction;
}

export const ModalContext = createContext({} as ModalContextValue);

interface ModalProviderProps {
  children: ReactNode;
}

export const ModalProvider = (props: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = useCallback(() => {
    setIsOpen((s) => !s);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, toggle }}>
      {props.children}
    </ModalContext.Provider>
  );
};

interface ModalProps {
  children: ReactNode;
  title: string;
}

export const Modal = (props: ModalProps) => {
  const { isOpen, toggle } = useContext(ModalContext);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      animate(scope.current, { top: "0" }, { duration: 0.2 });
    } else {
      animate(scope.current, { top: "100vh" }, { duration: 0.2 });
    }
  }, [animate, isOpen, scope]);

  return (
    <>
      {createPortal(
        <div
          className="w-full bg-gray-200 absolute rounded-t-xl z-[500]"
          style={{ top: "100vh", height: isOpen ? "auto" : 0 }}
          ref={scope}
        >
          <SafeAreaView>
            <div className="p-4">
              <div className="flex justify-between items-center">
                <span className="font-bold tracking-wide">{props.title}</span>
                <button onClick={toggle}>
                  <TbX className="text-lg" />
                </button>
              </div>
              {isOpen ? <div>{props.children}</div> : null}
            </div>
          </SafeAreaView>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};
