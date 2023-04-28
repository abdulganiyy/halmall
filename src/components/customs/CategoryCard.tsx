import React, { FC } from "react";
import Image from "next/image";
import { FaRegHeart } from "react-icons/fa";

interface CategoryCardProps {
  img?: string;
  name?: string;
}

const CategoryCard: FC<CategoryCardProps> = ({
  img = "/schbag.jpg",
  name = "Watches",
}) => {
  return (
    <div className="h-[286px] relative rounded-lg">
      <div className="h-[286px] absolute inset-0 rounded-lg overflow-hidden">
        <Image src={img} alt="product-img" fill objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end p-4 font-semibold text-6 leading-8 text-[#171520]">
        {name}
      </div>
    </div>
  );
};

export default CategoryCard;
