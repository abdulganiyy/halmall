import React, { FC } from "react";
import Image from "next/image";

interface CartCardProps {
  _id: string;
  title: string;
  description: string;
  price: number;
  images: string[];
  category: any;
  quantity?: number;
}

const CartCard: FC<CartCardProps> = ({
  _id,
  images = ["/schbag.jpg"],
  title = "Grande",
  description = "Bossome Pouch",
  price = "200",
  quantity = 1,
}) => {
  return (
    <tr>
      <td className="py-2 text-left">
        <span className="flex items-center gap-x-2">
          <span className="relative w-[75px] h-[80px] overflow-hidden rounded-lg">
            <Image src={images[0]} alt="" fill objectFit="cover" />
          </span>
          <span className="flex flex-col gap-y-[2px]">
            <span>{title}</span>
            <span>{description}</span>
            <span>Qty-{quantity}</span>
          </span>
        </span>
      </td>
      <td className="py-2 text-left">₦{price}</td>
      <td className="py-2 text-left">{quantity}</td>
      <td className="py-2 text-left">₦{`${+price * +quantity}`}</td>
    </tr>
  );
};

export default CartCard;
