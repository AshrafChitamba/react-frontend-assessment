import clsx from "clsx";
import { type FC } from "react";

import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

type TextInputFieldProps = {
  type: "text" | "search";
  id: string;
  placeholder: string;
  disabled: boolean;
  label: string;
  registerProps: UseFormRegisterReturn;
  error: FieldError | undefined;
};

export const TextInput: FC<TextInputFieldProps> = (props) => {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block text-sm font-medium text-black/90 mb-2"
      >
        {props.label}
      </label>

      <div>
        <input
          type={props.type}
          id={props.id}
          placeholder={props.placeholder}
          className={clsx(
            "w-full px-4 h-11 border border-black/90 rounded-lg focus:ring-2 focus:ring-black/90 ring-offset-2 focus:border-black/90 outline-hidden transition-colors",
            props.error &&
              "border-red-600 focus:ring-red-600 focus:border-red-600"
          )}
          disabled={props.disabled}
          autoComplete="true"
          {...props.registerProps}
        />

        {props.error && (
          <p className="mt-1 text-xs text-red-600 tracking-wider">
            {props.error.message ?? ""}
          </p>
        )}
      </div>
    </div>
  );
};
