import Image from "next/image";
import React, { FC, ReactNode } from "react";
// import { FaSearch } from "react-icons/fa";

interface HeroProps {
  bgImg: string;
  children?: ReactNode;
}

const Hero: FC<HeroProps> = ({ bgImg, children }) => {
  return (
    <div className={`h-[400px] relative`}>
      <div className="absolute inset-0">
        <Image
          className="rounded-2xl"
          src={bgImg}
          alt="hero-bg"
          fill
          objectFit="cover"
        />
      </div>
      <div className="w-full h-full rounded-md relative p-6 pr-0">
        {children}
      </div>
    </div>
  );
};

export default Hero;
