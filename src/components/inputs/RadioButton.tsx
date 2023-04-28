import React, { FC, HTMLAttributes } from "react";

interface RadioButtonProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

const RadioButton: FC<RadioButtonProps> = ({
  label,
  placeholder,
  id,
  ...rest
}) => {
  return (
    <div className="relative flex items-center gap-x-2">
      <input
        type="radio"
        name={id}
        id={id}
        className="accent-[#1B4B66] w-[18px] h-[18px] cursor-pointer"
        {...rest}
      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
