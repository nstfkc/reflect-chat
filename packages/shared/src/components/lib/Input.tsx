import { ComponentProps, forwardRef } from "react";

interface InputProps extends ComponentProps<"input"> {}

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {} = props;

  return (
    <input ref={ref} className="bg-gray-100 p-2 outline-none" {...props} />
  );
});

Input.displayName = "Input";
