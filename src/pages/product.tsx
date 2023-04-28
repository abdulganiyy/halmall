import React, { useEffect, useState } from "react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Button from "@/components/buttons/Button";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import H2 from "@/components/typography/H2";
import Counter from "@/components/customs/Counter";
import Label from "@/components/customs/Label";
import MainLayout from "@/components/layouts/MainLayout";
import { useRouter } from "next/router";
import { useCartStore } from "@/stores/useCartStore";
import Axios from "axios";
import { Product } from "../../types/product";

const Product = () => {
  const router = useRouter();
  const [product, setProduct] = useState<Product>();
  const addToCart = useCartStore((state) => state.addToCart);

  useEffect(() => {
    console.log(router.query.id);

    const fetchProduct = async () => {
      const response = await Axios(`/api/products/${router.query.id}`);
      const data = response.data;
      console.log(data.product);

      setProduct(data.product);
    };

    fetchProduct();
  }, []);

  return (
    <MainLayout>
      <div className="p-5">
        <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
          <div className="md:w-[605px]">
            <div className="relative h-[305px] md:h-[605px] w-full rounded-lg overflow-hidden">
              <Image
                src="/schbag.jpg"
                alt="product-img"
                fill
                objectFit="cover"
              />
            </div>
            <div className="mt-4 flex justify-center gap-x-[31px] items-center">
              <span>
                <IoIosArrowBack size={24} color="#171520" />
              </span>
              <div className="flex gap-x-[31px] justify-center">
                <div className="relative h-[70px] w-[70px] rounded-lg overflow-hidden">
                  <Image
                    src="/schbag.jpg"
                    alt="product-img"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-[70px] w-[70px] rounded-lg overflow-hidden">
                  <Image
                    src="/schbag.jpg"
                    alt="product-img"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-[70px] w-[70px] rounded-lg overflow-hidden">
                  <Image
                    src="/schbag.jpg"
                    alt="product-img"
                    fill
                    objectFit="cover"
                  />
                </div>
                <div className="relative h-[70px] w-[70px] rounded-lg overflow-hidden">
                  <Image
                    src="/schbag.jpg"
                    alt="product-img"
                    fill
                    objectFit="cover"
                  />
                </div>
              </div>
              <span>
                <IoIosArrowForward size={24} color="#171520" />
              </span>
            </div>
          </div>
          <div className="grow">
            <H2>Coach</H2>
            <p className="font-semibold text-5 leading-[26px]">
              Leather Coach Bag with adjustable starps.
            </p>
            <div className="mt-6 flex gap-x-4 items-center">
              <span className="font-bold text-[40px] leading-[52px] text-[#171520]">
                $54.69
              </span>
              <span className="font-semibold text-[34px] leading-[26px] text-[#B6B6B6] line-through">
                $78.66
              </span>
              <span className="font-semibold text-[20px] leading-[26px] text-[#FF404B]">
                50%OFF
              </span>
            </div>
            <div className="h-[1px] my-6 bg-black/10"></div>
            {/* <div className="flex">
            <div>
              <p>Delivery Details</p>
              <p>Check estimated delivery date/pickup option.</p>
            </div>
            <div></div>
          </div> */}
            <div className="flex gap-x-4 items-center my-4">
              <span>Quantity</span>
              <Counter
                onDecrement={() => {}}
                value={1}
                onIncrement={() => {}}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2">
              <Button
                //@ts-ignore
                onClick={() => addToCart(product)}
                leftIcon={<BsHandbag color="white" />}
                size="large"
              >
                Add to bag
              </Button>
              <Button leftIcon={<FaRegHeart />} size="large" variant="outlined">
                Add To Wishlist
              </Button>
            </div>
          </div>
        </div>
        <div>
          <div className="px-4 py-2 rounded-lg bg-[#F1F1F1] mt-[55px] mb-6 flex gap-x-4">
            <Label active={true}>Product Description</Label>
            <Label>Related Products</Label>
            <Label>Ratings and Reviews</Label>
          </div>
          <div className="text-4 leading-5 font-medium text=[#626262] flex flex-col gap-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus
              scelerisque laoreet tortor cras molestie tincidunt malesuada
              malesuada. Neque, mauris duis dui id morbi magna. Cras lacus,
              viverra auctor in turpis est quisque eget tristique.
            </p>
            <p>
              Dolor augue mattis duis semper gravida enim eu imperdiet sit. Et
              pharetra platea pretium nec feugiat tincidunt quam leo tristique.
              Nulla enim consectetur sit et tempus, faucibus leo ac cras. Purus
              ut non eu mus volutpat.
            </p>
            <p>
              Eget est vel sagittis amet sit eu eu ullamcorper tellus. Leo
              mauris, faucibus vulputate adipiscing elementum tristique dictumst
              augue pellentesque. Justo, sed nunc, pretium turpis scelerisque.
              Enim urna etiam morbi vestibulum ac dictumst. Ac ut elementum
              molestie sit felis imperdiet.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Product;
