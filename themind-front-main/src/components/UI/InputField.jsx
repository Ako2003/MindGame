import React from "react";
import { twMerge } from "tailwind-merge";

const InputField = ({
  label,
  name,
  id,
  type,
  placeholder,
  register,
  required,
  errorMsg,
  className,
  inputClassName,
}) => {
  return (
    <div className={twMerge("relative flex flex-col mb-4 w-full", className)}>
      {/* label */}
      {!!label && (
        <label htmlFor={name} className="text-xs font-medium">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* input */}
      <input
        id={id ?? name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className={twMerge(
          `${
            errorMsg
              ? "bg-red-500 bg-opacity-20"
              : "bg-darkener-100 hover:bg-darkener-200 focus:bg-darkener-200 duration-300"
          } p-3 text-neutral-500 text-xs font-bold rounded-lg shadow-[inset_0px_3px_6px_rgba(0,0,0,.4)] autoc`,
          inputClassName
        )}
      />

      {/* error message */}
      {!!errorMsg && <p className="absolute top-full left-0 text-red-500 text-xs">{errorMsg}</p>}
    </div>
  );
};

export default InputField;
