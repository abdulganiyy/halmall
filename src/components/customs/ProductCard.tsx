import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";

interface ProductCardProps {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: any;
  quantity?: number;
}

const ProductCard: FC<ProductCardProps> = ({
  _id,
  images = ["/schbag.jpg"],
  title = "Grande",
  description = "Bossome Pouch",
  price = "200",
}) => {
  return (
    <div className="flex flex-col gap-y-2">
      <Link href={`/product?id=${_id}`}>
        <div className="h-[286px] relative rounded-lg overflow-hidden">
          <Image src={images[0]} alt="product-img" fill objectFit="cover" />
        </div>
      </Link>

      <div className="flex flex-col gap-y-2">
        <p className="flex justify-between">
          <span>{title}</span>
          <span>
            <FaRegHeart />
          </span>
        </p>
        <p>{description}</p>
        <p>₦{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
