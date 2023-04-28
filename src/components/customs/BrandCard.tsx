import React, { FC } from "react";
import Image from "next/image";

interface BrandCardProps {
  img?: string;
}

const BrandCard: FC<BrandCardProps> = ({ img = "/schbag.jpg" }) => {
  return (
    <div className="h-[108px] w-[108px] relative bg-[#F4F4F4] flex justify-center items-center rounded-lg">
      <div className="h-[50px] w-[70px] relative">
        <Image src={img} alt="product-img" fill />
      </div>
    </div>
  );
};

export default BrandCard;
