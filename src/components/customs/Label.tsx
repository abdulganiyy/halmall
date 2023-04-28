import React, { FC, HTMLAttributes } from "react";
import { FaArrowRight } from "react-icons/fa";

interface LabelProps extends HTMLAttributes<HTMLButtonElement> {
  active?: boolean;
  hasIcon?: boolean;
}

const Label: FC<LabelProps> = ({
  hasIcon = false,
  active,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-x-2 font-medium text-3 leading-4.5 rounded-lg py-4.5 px-1.5 outline-0 min-w-[42px] ${
        active === true
          ? "bg-[#1B4B66] text-white"
          : "bg-transparent text-[#626262] "
      } ${className}`}
      {...rest}
    >
      {children} {hasIcon && <FaArrowRight />}
    </button>
  );
};

export default Label;
