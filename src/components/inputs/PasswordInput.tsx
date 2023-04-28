import React, { FC, InputHTMLAttributes, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  sizes?: "small" | "medium" | "large";
  label?: string;
}

const PasswordInput: FC<PasswordInputProps> = ({
  label,
  placeholder,
  id,
  sizes = "large",
  ...rest
}) => {
  const [isPlain, setIsPlain] = useState(false);
  return (
    <div className="relative w-[328px]">
      <input
        type={isPlain ? "text" : "password"}
        name={id}
        id={id}
        className="w-[328px] h-11 p-3 pt-4 bg-[#F1F1F1] placeholder-transparent border border-gray-200 rounded-md peer focus:outline-none focus:border-[#1B4B66] invalid:outline-none invalid:border-[#B00020] focus:shadow-sm"
        placeholder={placeholder}
        {...rest}
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="absolute top-0 left-0 h-full px-3 py-3 text-sm transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:text-[#1B4B66] peer-invalid:text-[#B00020] peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1"
      >
        {label || placeholder}
      </label>
      <span
        className="absolute top-3.5 right-2 cursor-pointer"
        onClick={() => setIsPlain(!isPlain)}
      >
        {isPlain ? <FaEyeSlash color="#1B4B66" /> : <FaEye color="#1B4B66" />}
      </span>
    </div>
  );
};

export default PasswordInput;
