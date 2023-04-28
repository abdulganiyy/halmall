import { FC, ReactNode } from "react";

interface H2Props {
  className?: string;
  children: ReactNode;
}

const H2: FC<H2Props> = ({ className, children }) => {
  return (
    <h2
      className={`font-semibold text-[34px] md:text-[34px] leading-[44px] md:leading-[44px] text-[#1B4B66] ${className}`}
    >
      {children}
    </h2>
  );
};

export default H2;
