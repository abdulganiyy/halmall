import { useState } from "react";
// import Link from "next/link";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import Label from "@/components/customs/Label";
import ProfileLayout from "@/components/layouts/ProfileLayout";
import MainLayout from "@/components/layouts/MainLayout";

const Order = () => {
  const [active, setActive] = useState(true);
  return (
    <MainLayout>
      <ProfileLayout title="Order#874522648">
        <div>
          <div className="px-4 py-2 rounded-lg bg-[#F1F1F1] mt-4 flex gap-x-4">
            <Label active={true}>Items Ordered</Label>
            <Label>Invoices</Label>
            <Label>Order Shipment</Label>
          </div>
          <div>
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
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ProfileLayout>
    </MainLayout>
  );
};

export default Order;
