import React, { FC, HTMLAttributes } from "react";

interface CheckBoxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CheckBox: FC<CheckBoxProps> = ({ label, placeholder, id, ...rest }) => {
  return (
    <div className="relative flex items-center gap-x-2">
      <input
        type="checkbox"
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

export default CheckBox;
