import React, { FC, InputHTMLAttributes } from "react";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizes?: "small" | "medium" | "large";
  label?: string;
}

const TextInput: FC<TextInputProps> = ({
  label,
  placeholder,
  id,
  sizes = "large",
  ...rest
}) => {
  return (
    <div className="relative">
      <input
        type="text"
        name={id}
        id={id}
        className="min-w-[328px] h-11 p-3 pt-4 bg-[#F1F1F1] placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-[#1B4B66] invalid:outline-none invalid:border-[#B00020] focus:shadow-sm"
        placeholder={placeholder}
        {...rest}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="absolute top-0 left-0 h-full w-[328px] px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-[#1B4B66] peer-invalid:text-[#B00020] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1"
      >
        {label || placeholder}
      </label>
    </div>
  );
};

export default TextInput;
