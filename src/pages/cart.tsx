import React from "react";
import H2 from "@/components/typography/H2";
import Image from "next/image";
import MainLayout from "@/components/layouts/MainLayout";
// import { Portal } from "@/components/layouts/Portal";
// import Modal from "@/components/layouts/Modal";
import useFromStore from "@/hooks/useFromStore";
import { useCartStore } from "@/stores/useCartStore";
import CartCard from "@/components/customs/CartCard";

const Cart = () => {
  const cart = useFromStore(useCartStore, (state) => state.cart);

  return (
    <MainLayout>
      <div className="p-5">
        <H2>My Cart</H2>
        <div className="flex flex-col md:flex-row gap-x-[138px]">
          <div className="basis-3/5">
            <table className="w-full">
              <thead className="w-full border-b-2 ">
                <tr>
                  <th className="py-2 text-left">Product Name</th>
                  <th className="py-2 text-left">Price</th>
                  <th className="py-2 text-left">Qty</th>
                  <th className="py-2 text-left">Subtotal</th>
                </tr>
              </thead>
              <tbody className="w-full">
                {cart?.map((item) => (
                  <CartCard key={item.id} {...item} />
                ))}
                {/* <tr>
                  <td className="py-2 text-left">
                    <span className="flex items-center gap-x-2">
                      <span className="relative w-[75px] h-[80px] overflow-hidden rounded-lg">
                        <Image src="/schbag.jpg" alt="" fill />
                      </span>
                      <span className="flex flex-col gap-y-[2px]">
                        <span>Coach</span>
                        <span>Leather Coach Bag</span>
                        <span>Qty-1</span>
                      </span>
                    </span>
                  </td>
                  <td className="py-2 text-left">$54.65</td>
                  <td className="py-2 text-left">1</td>
                  <td className="py-2 text-left">$54.65</td>
                </tr>
                <tr>
                  <td className="py-2 text-left">
                    <span className="flex items-center gap-x-2">
                      <span className="relative w-[75px] h-[80px] overflow-hidden rounded-lg">
                        <Image src="/schbag.jpg" alt="" fill />
                      </span>
                      <span className="flex flex-col gap-y-[2px]">
                        <span>Coach</span>
                        <span>Leather Coach Bag</span>
                        <span>Qty-1</span>
                      </span>
                    </span>
                  </td>
                  <td className="py-2 text-left">$54.65</td>
                  <td className="py-2 text-left">1</td>
                  <td className="py-2 text-left">$54.65</td>
                </tr> */}
              </tbody>
            </table>
          </div>
          <div className="basis-2/5">
            <H2>Order Summary</H2>
            <div className="flex flex-col gap-y-2">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>$119.69</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span>$13.40</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Fees</span>
                <span>$0.00</span>
              </div>
              <div className="flex justify-between">
                <span>Grand Total</span>
                <span>$109.69</span>
              </div>
            </div>
          </div>
        </div>
        {/* <Portal>
      <Modal>Hello</Modal>
    </Portal> */}
      </div>
    </MainLayout>
  );
};

export default Cart;
