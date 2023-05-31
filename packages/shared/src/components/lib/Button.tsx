import { cx } from "class-variance-authority";
import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<"button"> {}

export const Button = (props: ButtonProps) => {
  const { className, ...rest } = props;

  return (
    <button
      className={cx(
        "bg-black text-white px-4 py-2 font-semibold tracking-wide rounded-lg disabled:opacity-50",
        className
      )}
      {...rest}
    />
  );
};
