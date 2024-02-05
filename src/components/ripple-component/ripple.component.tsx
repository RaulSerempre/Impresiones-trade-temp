"use client";

import { cn } from "@/src/lib/utils";
import { useLayoutEffect, useState } from "react";

const useDebouncedRippleCleanUp = (
  rippleCount: number,
  duration: number,
  cleanUpFunction: () => void
) => {
  useLayoutEffect(() => {
    let bounce: any = null;
    if (rippleCount > 0) {
      bounce && clearTimeout(bounce);

      bounce = setTimeout(() => {
        cleanUpFunction();
        clearTimeout(bounce);
      }, duration * 4);
    }

    return () => clearTimeout(bounce);
  }, [rippleCount, duration, cleanUpFunction]);
};

interface IItemRipple {
  x: number;
  y: number;
  size: number;
}

export const RippleComponent = () => {
  const [rippleArray, setRippleArray] = useState<Array<IItemRipple>>([]);

  useDebouncedRippleCleanUp(rippleArray.length, 500, () => {
    setRippleArray([]);
  });

  const addRipple = (event: React.MouseEvent<HTMLElement>) => {
    const rippleContainer = event.currentTarget.getBoundingClientRect();
    const size =
      rippleContainer.width > rippleContainer.height
        ? rippleContainer.width
        : rippleContainer.height;
    const x = event.pageX - rippleContainer.x - size / 2;
    const y = event.pageY - rippleContainer.y - size / 2;
    const newRipple = {
      x,
      y,
      size,
    };

    setRippleArray([...rippleArray, newRipple]);
  };

  return (
    <div
      className="absolute top-0 left-0 right-0 bottom-0"
      onMouseDown={addRipple}
    >
      {rippleArray.length > 0 &&
        rippleArray.map((ripple, index) => {
          return (
            <span
              className={cn(
                "rounded-[100%] absolute opacity-75 bg-white ",
                "ripple-animate"
              )}
              key={"span" + index}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            />
          );
        })}
    </div>
  );
};
