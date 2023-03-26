import classNames from "classnames";
import React from "react";
import type { FieldError } from "react-hook-form";

interface IInputProps {
  type: string;
  placeholder: string;
  error: FieldError | undefined;
}

export const Input = React.forwardRef<HTMLInputElement, IInputProps>(
  ({ type, placeholder, error, ...rest }, ref) => {
    const inputStyles = classNames(
      "w-full p-2 bg-gray-100 rounded border focus:outline-none",
      {
        "border-red-500": error,
        "border-gray-200": !error,
      }
    );

    return (
      <>
        <input
          ref={ref}
          type={type}
          placeholder={placeholder}
          className={inputStyles}
          {...rest}
        />
        {error && <p className="text-red-500 px-1 text-xs">{error.message}</p>}
      </>
    );
  }
);

Input.displayName = "Input";
