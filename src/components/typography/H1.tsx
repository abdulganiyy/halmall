import { FC, ReactNode } from "react";

interface H1Props {
  className?: string;
  children: ReactNode;
}

const H1: FC<H1Props> = ({ className, children }) => {
  return (
    <h1
      className={`font-extrabold text-[28px] md:text-[60px] leading-[38px] md:leading-[84px] text-[#1B4B66] ${className}`}
    >
      {children}
    </h1>
  );
};

export default H1;
