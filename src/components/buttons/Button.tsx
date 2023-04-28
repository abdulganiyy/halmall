import React, { FC, ButtonHTMLAttributes, ReactNode } from "react";
import { FaSearch } from "react-icons/fa";
import { ClipLoader } from "react-spinners";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outlined";
  size?: "small" | "large";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  variant = "primary",
  size = "small",
  leftIcon,
  rightIcon,
  isLoading,
  children,
  ...rest
}) => {
  const variants = {
    primary:
      "bg-[#1B4B66] text-white hover:bg-[#639599] focused:border-0.5 focused:border-[#639599] disabled:bg-[#F1F1F1] disabled:text-[#B6B6B6]",
    secondary:
      "bg-[#F4F4F4] text-[#1B4B66] hover:text-[#639599] focused:border-0.5 focused:border-[#639599] disabled:bg-[#F1F1F1] disabled:text-[#B6B6B6]",
    outlined:
      "bg-white text-[#1B4B66] border-2 border-[#1B4B66] hover:text-[#639599] hover:border-[#1B4B66] focused:text-[#1B4B66] focused:border-[#639599] disabled:border-[#B6B6B6] disabled:text-[#B6B6B6]",
  };

  const sizes = {
    small: "w-[136px]",
    large: "w-[328px]",
  };

  return (
    <button
      className={`flex justify-center items-center gap-x-2 h-11 font-semibold text-3.5 leading-6 rounded-lg outline-0 ${variants[variant]} ${sizes[size]} ${rest.className}`}
      {...rest}
    >
      {isLoading ? (
        <ClipLoader color="#FF8C4B" />
      ) : (
        <>
          {leftIcon}
          {children} {rightIcon}
        </>
      )}
    </button>
  );
};

export default Button;
