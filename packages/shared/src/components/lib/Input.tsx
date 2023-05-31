import { cx } from "class-variance-authority";
import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { className, hasError = false } = props;

  console.log({ className: cx("bg-gray-100 p-2 outline-none", className) });
  return (
    <input
      ref={ref}
      className={cx(
        "p-2 outline-none border-2 bg-gray-100",
        hasError ? "border-red-200" : "border-transparent"
      )}
      {...props}
    />
  );
});

Input.displayName = "Input";
