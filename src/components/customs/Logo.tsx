import React, { FC, HTMLAttributes } from "react";
import { FaSearch } from "react-icons/fa";

interface LogoProps extends HTMLAttributes<HTMLSpanElement> {}

const Logo: FC<LogoProps> = ({ className, ...rest }) => {
  return (
    <span className={`text-[#17494D] font-bold text-12 ${className}`} {...rest}>
      LOGO
    </span>
  );
};

export default Logo;
