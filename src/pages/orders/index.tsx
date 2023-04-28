import { useState } from "react";
import Image from "next/image";
// import Accordion from "@/components/customs/Accordion";
import TextInput from "@/components/inputs/TextInput";
import PasswordInput from "@/components/inputs/PasswordInput";
import Button from "@/components/buttons/Button";
// import Link from "next/link";
import { FiLogOut } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
// import Label from "@/components/customs/Label";
import { IoIosArrowForward } from "react-icons/io";
import Label from "@/components/customs/Label";
import ProfileLayout from "@/components/layouts/ProfileLayout";
import MainLayout from "@/components/layouts/MainLayout";

const Orders = () => {
  const [active, setActive] = useState(true);
  return (
    <MainLayout>
      <ProfileLayout
        title="My Orders"
        //   rightItem={
        //     <Button variant="outlined" leftIcon={<FiLogOut />}>
        //       Logout
        //     </Button>
        //   }
      >
        <div>
          <div className="px-4 py-2 rounded-lg bg-[#F1F1F1] mt-4 flex gap-x-4">
            <Label active={true}>Completed</Label>
            <Label>Processing</Label>
            <Label>Cancelled</Label>
          </div>
          <div>
            <table className="w-full  border-spacing-y-2 border-separate">
              <thead className="w-full">
                <tr className="">
                  <th className="py-2 px-2 text-left">Order ID</th>
                  <th className="py-2 px-2 text-left">Date</th>
                  <th className="py-2 px-2 text-left">Price</th>
                  <th className="py-2 px-2 text-left">Status</th>
                  <th className="py-2 px-2 text-left hidden">Actions</th>
                </tr>
              </thead>
              <tbody className="w-full">
                <tr className="bg-[#F1F1F1]">
                  <td className="py-2 px-2 text-left">#874522648</td>
                  <td className="py-2 px-2 text-left">September 5, 2020</td>
                  <td className="py-2 px-2 text-left">$54.65</td>
                  <td className="py-2 px-2 text-left">Paid</td>
                  <td>
                    <IoIosArrowForward />
                  </td>
                </tr>
                <tr className="bg-[#F1F1F1]">
                  <td className="py-2 px-2 text-left">#874522648</td>
                  <td className="py-2 px-2 text-left">September 5, 2020</td>
                  <td className="py-2 px-2 text-left">$54.65</td>
                  <td className="py-2 px-2 text-left">Paid</td>
                  <td>
                    <IoIosArrowForward />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ProfileLayout>
    </MainLayout>
  );
};

export default Orders;
