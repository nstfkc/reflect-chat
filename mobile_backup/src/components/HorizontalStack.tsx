import { createGesture } from "@ionic/react";
import { useAnimate } from "framer-motion";
import { useCallback, useEffect, useRef } from "react";

interface HorizontalStackProps {
  slots: any[];
}

export const HorizontalStack = (props: HorizontalStackProps) => {
  const { slots } = props;
  const [scope, animate] = useAnimate<HTMLDivElement>();
  const currentSlot = useRef(0);

  const gestureInit = useCallback(() => {
    const container = scope.current;
    if (container) {
      const gesture = createGesture({
        gestureName: "gesture",
        el: container,
        onStart: () => {},
        onMove: (details) => {
          const currentLeft = window.innerWidth * currentSlot.current;
          const delta = details.currentX - details.startX - currentLeft;
          const maxLeft = scope.current.clientWidth;
          animate(
            scope.current,
            { left: Math.min(0, Math.max(-maxLeft, delta)) },
            { duration: 0 }
          );
        },
        onEnd: (details) => {
          const delta = details.currentX - details.startX;
          const complete = () =>
            animate(
              scope.current,
              { left: currentSlot.current * window.innerWidth * -1 },
              {
                type: "tween",
                duration: 0.1,
                onComplete: () => {},
              }
            );
          if (delta * -1 > window.innerWidth / 2) {
            currentSlot.current = Math.min(
              currentSlot.current + 1,
              slots.length
            );
          }
          if (delta > window.innerWidth / 2) {
            currentSlot.current = Math.max(0, currentSlot.current - 1);
          }
          complete();
        },
      });

      gesture.enable();
      return gesture;
    }
    return null;
  }, [animate, scope, slots.length]);

  useEffect(() => {
    const gesture = gestureInit();
    return () => {
      gesture?.destroy();
    };
  }, [gestureInit]);

  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div
        ref={scope}
        className="absolute top-0 flex"
        style={{ width: `${slots.length * 100}vw` }}
      >
        {slots.map((slot, index) => {
          return (
            <div key={index}>
              <slot.Component />
            </div>
          );
        })}
      </div>
    </div>
  );
};
