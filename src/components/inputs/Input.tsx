import React, { FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  id,
  //   sizes = "large",
  ...rest
}) => {
  return (
    <div className="flex flex-col min-w-[328px] gap-y-2">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        // name={id}
        id={id}
        className="p-3 pt-4 bg-[#F1F1F1] border border-gray-200 rounded-md peer focus:outline-none focus:border-[#1B4B66] invalid:outline-none invalid:border-[#B00020] focus:shadow-sm"
        placeholder={placeholder}
        {...rest}
        // autoComplete="off"
      />
    </div>
  );
};

export default Input;
