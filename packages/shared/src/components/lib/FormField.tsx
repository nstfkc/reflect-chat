import { ComponentProps, forwardRef } from "react";
import { Input } from "./Input";

interface FormFieldProps extends ComponentProps<typeof Input> {
  label: string;
  error?: string;
}

export const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  (props, ref) => {
    const { id, label, error, ...inputProps } = props;

    return (
      <div className="flex flex-col gap-0">
        <label htmlFor={id} className="font-semibold tracking-wide text-sm">
          {label}
        </label>
        <Input ref={ref} {...inputProps} />
        {error ? <p className="text-red-600 font-semibold">{error}</p> : ""}
      </div>
    );
  }
);

FormField.displayName = "FormField";
